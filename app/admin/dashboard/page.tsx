import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, FileText, BarChart3 } from "lucide-react";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_token")?.value === process.env.ADMIN_TOKEN;
}

export default async function AdminDashboardPage() {
  const authed = await isAuthenticated();
  if (!authed) redirect("/admin/login");

  const stats = [
    { icon: Users, label: "Leads Capturados", value: "—" },
    { icon: BookOpen, label: "Cursos Ativos", value: "3" },
    { icon: FileText, label: "Ebooks Ativos", value: "8" },
    { icon: BarChart3, label: "Newsletter", value: "—" },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="mt-2 text-white/50">
            Painel administrativo — área de membros em desenvolvimento.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/50">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-10">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-white">Próximas Funcionalidades</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-white/50">
                <li>• Área de membros com acesso a cursos</li>
                <li>• Gerenciamento de leads e newsletter</li>
                <li>• Integração com Hotmart, Kiwify e Eduzz</li>
                <li>• Dashboard de vendas e analytics</li>
                <li>• Gerenciamento de conteúdo do blog</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
