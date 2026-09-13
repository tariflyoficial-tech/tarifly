import { NextRequest, NextResponse } from "next/server";

export type PlaceSuggestion = {
  type: "airport" | "city" | "country";
  code: string;
  name: string;
  cityName?: string;
  countryName?: string;
};

export async function GET(request: NextRequest) {
  const term = request.nextUrl.searchParams.get("term")?.trim();

  if (!term) {
    return NextResponse.json([]);
  }

  const url = new URL("https://autocomplete.travelpayouts.com/places2");
  url.searchParams.set("term", term);
  url.searchParams.set("locale", "pt");
  url.searchParams.append("types[]", "city");
  url.searchParams.append("types[]", "airport");

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return NextResponse.json([], { status: 502 });
  }

  const raw: Array<{
    type: string;
    code: string;
    name: string;
    city_name?: string;
    country_name?: string;
  }> = await res.json();

  const suggestions: PlaceSuggestion[] = raw.slice(0, 8).map((item) => ({
    type: item.type as PlaceSuggestion["type"],
    code: item.code,
    name: item.name,
    cityName: item.city_name,
    countryName: item.country_name,
  }));

  return NextResponse.json(suggestions);
}
