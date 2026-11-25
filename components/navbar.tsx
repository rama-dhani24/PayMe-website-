"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Wallet, X } from "lucide-react";
import { copy } from "@/content/site";

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const t = copy.nav;
  const links = [{ href: "/features", label: t.features }, { href: "/pricing", label: t.pricing }, { href: "/about", label: t.about }, { href: "/contact", label: t.contact }];
  return <header className="sticky top-0 z-50 border-b border-[#edf1ee] bg-white/90 backdrop-blur-xl">
    <div className="container flex h-[72px] items-center justify-between gap-5">
      <Link href="/" aria-label="PayMe home" className="focus-ring flex items-center gap-2.5 rounded-lg">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#11845b] text-white"><Wallet size={19}/></span><span className="text-[21px] font-extrabold tracking-[-.7px]">PayMe</span>
      </Link>
      <nav aria-label="Main navigation" className={`${open ? "absolute left-0 right-0 top-[72px] flex flex-col border-b bg-white p-5 shadow-lg" : "hidden"} gap-6 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
        {links.map(l=><Link onClick={()=>setOpen(false)} key={l.href} href={l.href} className={`focus-ring rounded text-[13px] font-medium ${path===l.href?"text-[#11845b]":"text-[#475569] hover:text-[#11845b]"}`}>{l.label}</Link>)}
        <Link href="/login" className="focus-ring rounded text-[13px] font-semibold text-[#475569] md:hidden">{t.login}</Link>
        <Link href="/contact" className="inline-flex min-h-10 items-center justify-center rounded-lg bg-[#11845b] px-4 text-button text-white hover:bg-[#0b6846] md:hidden">{t.demo}</Link>
      </nav>
      <div className="hidden items-center gap-4 md:flex">
        <Link href="/login" className="focus-ring rounded text-[13px] font-semibold text-[#475569]">{t.login}</Link>
        <Link href="/contact" className="inline-flex min-h-10 items-center justify-center rounded-lg bg-[#11845b] px-4 text-button text-white shadow-sm hover:bg-[#0b6846]">{t.demo}</Link>
      </div>
      <button onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open} className="focus-ring rounded-lg p-2 text-[#475569] md:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
    </div>
  </header>;
}
