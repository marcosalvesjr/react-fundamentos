import { Atom } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 w-full h-20 border-b border-zinc-700 bg-zinc-900/80 backdrop-blur-md z-50">
        <div className="h-full container mx-auto flex items-center gap-3 px-4">
          <Atom className="text-white" size={32} />
          <span className="text-xl font-semibold text-white">
            Fundamentos de React
          </span>
        </div>
      </header>
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-20 w-auto h-[calc(100vh-5rem)] bg-zinc-800 border-r border-zinc-700 p-4 z-40">
        <nav className="flex flex-col gap-3 text-zinc-200">
          <a href="/">Home</a>
          <a href="/products">Produtos</a>
          <a href="/posts">Posts</a>
          <a href="/about">Sobre</a>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 pt-24 pb-4 pl-60 container bg-zinc-950">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-700 bg-zinc-900/80 backdrop-blur-md h-14 flex items-center justify-center z-50">
        <span className="text-sm text-zinc-300">
          Página desenvolvida para estudos
        </span>
      </footer>
    </div>
  );
}
