import Image from "next/image";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <NavBar />

      <section className="flex items-center justify-center px-4 py-16">
        <h1 className="text-3xl font-semibold">soci8e is alive 🚀</h1>
      </section>
    </main>
  );
}
