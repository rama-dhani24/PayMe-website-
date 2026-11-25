import Link from "next/link";
import { Mail, MessageCircle, Wallet } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return <footer className="border-t border-[#e9eeea] bg-[#f7f9f7]">
    <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div><Link href="/" className="flex w-fit items-center gap-2 font-extrabold"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#11845b] text-white"><Wallet size={16}/></span>PayMe</Link><p className="mt-3 max-w-xs text-body text-[#475569]">Payroll clarity for Tanzanian institutions.</p><p className="mt-4 text-xs text-[#64748B]">Built in Tanzania for Tanzanian businesses.</p></div>
      <div><h2 className="text-xs font-bold uppercase tracking-wider text-[#929d96]">Explore</h2><div className="mt-4 grid gap-3 text-body text-[#475569]"><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/about">About us</Link><Link href="/contact">Book a demo</Link></div></div>
      <div><h2 className="text-xs font-bold uppercase tracking-wider text-[#929d96]">Legal</h2><div className="mt-4 grid gap-3 text-body text-[#475569]"><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div></div>
      <div><h2 className="text-xs font-bold uppercase tracking-wider text-[#929d96]">Get in touch</h2><div className="mt-4 grid gap-3 text-body text-[#475569]"><a className="flex items-center gap-2" href={`mailto:${site.email}`}><Mail size={15}/>{site.email}</a><a className="flex items-center gap-2" target="_blank" rel="noreferrer" href={`https://wa.me/${site.whatsapp}`}><MessageCircle size={15}/>WhatsApp us</a></div></div>
    </div>
    <div className="border-t border-[#e9eeea]"><div className="container flex flex-col gap-2 py-4 text-xs text-[#64748B] sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} PayMe. All rights reserved.</span><span>Payroll software for Tanzania</span></div></div>
  </footer>;
}
