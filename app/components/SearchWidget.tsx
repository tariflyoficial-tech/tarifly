"use client";

import { useState, type FormEvent } from "react";
import PlaceAutocomplete from "./PlaceAutocomplete";
import type { PlaceSuggestion } from "../api/autocomplete/route";

type Tab = "voos" | "hospedagem";

// TODO: trocar pelo marker real da conta Travelpayouts (Ferramentas > Meu ID/marker).
const AVIASALES_MARKER = "000000";

function ddmm(dateStr: string) {
  const [, month, day] = dateStr.split("-");
  return `${day}${month}`;
}

export default function SearchWidget() {
  const [tab, setTab] = useState<Tab>("voos");

  const [origin, setOrigin] = useState<PlaceSuggestion | null>(null);
  const [destination, setDestination] = useState<PlaceSuggestion | null>(
    null,
  );
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("1");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (tab === "hospedagem") {
      // TODO: integrar busca de hospedagem (Hotellook) quando o token de API estiver disponível.
      alert("Busca de hospedagem ainda não conectada. Em breve!");
      return;
    }

    if (!origin || !destination) {
      alert("Escolha origem e destino na lista de sugestões.");
      return;
    }

    const params =
      `${origin.code}${ddmm(departDate)}${destination.code}` +
      (returnDate ? ddmm(returnDate) : "") +
      adults;

    const url = `https://www.aviasales.com/search/${params}?marker=${AVIASALES_MARKER}`;
    window.location.href = url;
  }

  return (
    <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl shadow-black/10">
      <div className="flex border-b border-gray-100 px-2 pt-2">
        <TabButton active={tab === "voos"} onClick={() => setTab("voos")}>
          ✈️ Passagens
        </TabButton>
        <TabButton
          active={tab === "hospedagem"}
          onClick={() => setTab("hospedagem")}
        >
          🏨 Hospedagem
        </TabButton>
      </div>

      <form onSubmit={handleSubmit} className="p-5">
        {tab === "voos" ? (
          <FlightFields
            origin={origin}
            destination={destination}
            departDate={departDate}
            returnDate={returnDate}
            adults={adults}
            onOriginSelect={setOrigin}
            onDestinationSelect={setDestination}
            onDepartDateChange={setDepartDate}
            onReturnDateChange={setReturnDate}
            onAdultsChange={setAdults}
          />
        ) : (
          <HotelFields />
        )}

        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-dark sm:w-auto"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "bg-brand text-white"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-gray-500">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand";

function FlightFields({
  origin,
  destination,
  departDate,
  returnDate,
  adults,
  onOriginSelect,
  onDestinationSelect,
  onDepartDateChange,
  onReturnDateChange,
  onAdultsChange,
}: {
  origin: PlaceSuggestion | null;
  destination: PlaceSuggestion | null;
  departDate: string;
  returnDate: string;
  adults: string;
  onOriginSelect: (p: PlaceSuggestion) => void;
  onDestinationSelect: (p: PlaceSuggestion) => void;
  onDepartDateChange: (v: string) => void;
  onReturnDateChange: (v: string) => void;
  onAdultsChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <PlaceAutocomplete
        label="Origem"
        placeholder="Cidade ou aeroporto"
        value={origin}
        onSelect={onOriginSelect}
      />
      <PlaceAutocomplete
        label="Destino"
        placeholder="Cidade ou aeroporto"
        value={destination}
        onSelect={onDestinationSelect}
      />
      <Field label="Ida">
        <input
          type="date"
          className={inputClass}
          required
          value={departDate}
          onChange={(e) => onDepartDateChange(e.target.value)}
        />
      </Field>
      <Field label="Volta">
        <input
          type="date"
          className={inputClass}
          value={returnDate}
          onChange={(e) => onReturnDateChange(e.target.value)}
        />
      </Field>
      <Field label="Passageiros">
        <select
          className={inputClass}
          value={adults}
          onChange={(e) => onAdultsChange(e.target.value)}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "adulto" : "adultos"}
            </option>
          ))}
        </select>
      </Field>
    </div>
  );
}

function HotelFields() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Field label="Destino">
        <input
          type="text"
          placeholder="Cidade ou hotel"
          className={inputClass}
          required
        />
      </Field>
      <Field label="Check-in">
        <input type="date" className={inputClass} required />
      </Field>
      <Field label="Check-out">
        <input type="date" className={inputClass} required />
      </Field>
      <Field label="Hóspedes">
        <select className={inputClass} defaultValue="2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "hóspede" : "hóspedes"}
            </option>
          ))}
        </select>
      </Field>
    </div>
  );
}
