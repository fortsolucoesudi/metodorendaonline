"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function LeadCapture() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
        <CheckCircle className="h-10 w-10 text-green-400" />
        <p className="text-lg font-semibold text-white">Cadastro realizado!</p>
        <p className="text-sm text-white/60">
          Em breve entraremos em contato com os melhores métodos para você.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Seu nome"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Seu e-mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <Input
        type="tel"
        placeholder="Seu WhatsApp"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Quero Minha Renda Extra"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          Erro ao enviar. Tente novamente.
        </p>
      )}
    </form>
  );
}
