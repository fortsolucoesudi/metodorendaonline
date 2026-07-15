"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, LogIn } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        setError("Credenciais inválidas.");
      }
    } catch {
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center pt-16 pb-20">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
                <Lock className="h-7 w-7 text-gold" />
              </div>
              <h1 className="text-2xl font-bold text-white">Área Administrativa</h1>
              <p className="mt-2 text-sm text-white/50">
                Acesso restrito para administradores
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="E-mail"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                required
              />
              <Input
                type="password"
                placeholder="Senha"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
              />
              {error && (
                <p className="text-sm text-red-400 text-center">{error}</p>
              )}
              <Button type="submit" disabled={loading} className="w-full">
                <LogIn className="h-4 w-4" />
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            <p className="mt-6 text-center text-xs text-white/30">
              Área de membros em desenvolvimento. Configure credenciais em{" "}
              <code className="text-white/50">.env.local</code>
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
