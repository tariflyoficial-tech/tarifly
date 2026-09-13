"use client";

import { useState, type FormEvent } from "react";

type Tab = "voos" | "hospedagem";

export default function SearchWidget() {
  const [tab, setTab] = useState<Tab>("voos");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrar com a API do Travelpayouts (Aviasales para voos, Hotellook para hospedagem)
    // assim que o token de API estiver disponível.
    alert("Busca ainda não conectada a um provedor. Em breve!");
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
        {tab === "voos" ? <FlightFields /> : <HotelFields />}

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

function FlightFields() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <Field label="Origem">
        <input
          type="text"
          placeholder="Cidade ou aeroporto"
          className={inputClass}
          required
        />
      </Field>
      <Field label="Destino">
        <input
          type="text"
          placeholder="Cidade ou aeroporto"
          className={inputClass}
          required
        />
      </Field>
      <Field label="Ida">
        <input type="date" className={inputClass} required />
      </Field>
      <Field label="Volta">
        <input type="date" className={inputClass} />
      </Field>
      <Field label="Passageiros">
        <select className={inputClass} defaultValue="1">
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
