"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Navegação principal">
      <Link href="/#projetos">Projetos</Link>
      <Link href="/#sobre">Sobre</Link>
      <Link
        href="/downloads"
        aria-current={pathname === "/downloads" ? "page" : undefined}
      >
        Downloads
      </Link>
      <Link href="/#contato" className="nav-contact">
        Vamos conversar ↗
      </Link>
    </nav>
  );
}
