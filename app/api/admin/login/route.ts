import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const adminEmail = process.env.ADMIN_EMAIL ?? "admin@renanduarte.com.br";
    const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";
    const adminToken = process.env.ADMIN_TOKEN ?? "renan-admin-token";

    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set("admin_token", adminToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
