"use client";

import { useEffect, useRef, useState } from "react";
import type { PlaceSuggestion } from "../api/autocomplete/route";

export default function PlaceAutocomplete({
  label,
  placeholder,
  value,
  onSelect,
}: {
  label: string;
  placeholder: string;
  value: PlaceSuggestion | null;
  onSelect: (place: PlaceSuggestion) => void;
}) {
  const [term, setTerm] = useState(value?.name ?? "");
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (term.length < 2 || (value && value.name === term)) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`/api/autocomplete?term=${encodeURIComponent(term)}`)
        .then((res) => res.json())
        .then((data: PlaceSuggestion[]) => {
          setSuggestions(data);
          setOpen(true);
        })
        .catch(() => setSuggestions([]));
    }, 250);

    return () => clearTimeout(timeout);
  }, [term, value]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={boxRef} className="relative flex flex-col gap-1">
      <span className="text-xs font-medium text-gray-500">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={term}
        required
        onChange={(e) => setTerm(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        autoComplete="off"
      />
      {open && suggestions.length > 0 && (
        <ul className="absolute top-full z-10 mt-1 w-full min-w-[220px] rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
          {suggestions.map((s) => (
            <li key={`${s.type}-${s.code}`}>
              <button
                type="button"
                onClick={() => {
                  onSelect(s);
                  setTerm(s.name);
                  setOpen(false);
                }}
                className="flex w-full flex-col px-3 py-1.5 text-left text-sm hover:bg-gray-50"
              >
                <span className="text-gray-900">{s.name}</span>
                <span className="text-xs text-gray-400">
                  {s.code} · {s.cityName ?? s.countryName}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
