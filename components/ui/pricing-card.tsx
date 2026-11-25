import Link from "next/link";
import { Check } from "lucide-react";
import { formatTzs } from "@/content/pricing";
import type { plans } from "@/content/pricing";
type Plan=typeof plans[number];
export function PricingCard({plan,compact=false}:{plan:Plan;compact?:boolean}) { return <article className={`relative flex flex-col rounded-2xl border p-6 ${plan.popular?"border-[#11845b] bg-white shadow-[0_20px_50px_-32px_rgba(17,132,91,.45)]":"border-[#e7ede9] bg-white"}`}>
  {plan.popular&&<span className="absolute -top-3 left-5 rounded-full bg-[#11845b] px-3 py-1 text-[10px] font-bold tracking-wide text-white">Most popular</span>}
  <h3 className="text-lg font-bold">{plan.name}</h3><p className="mt-1 text-xs text-[#475569]">{plan.employees}</p><p className="mt-5 min-h-[48px] text-body text-[#475569]">{plan.description}</p>
  <div className="mt-5">{plan.price===null?<><span className="text-2xl font-bold tabular-nums">Custom quote</span><span className="mt-1 block text-xs text-[#64748B]">Talk to our team</span></>:<><span className="text-[23px] font-bold tracking-tight tabular-nums">{formatTzs(plan.price)}</span><span className="text-xs text-[#64748B]"> / year</span><span className="mt-1 block text-xs text-[#64748B]">Annual subscription, billed in TZS</span></>}</div>
  <Link href={plan.price===null?"/contact":"/contact?intent=trial"} className={`mt-5 inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-button ${plan.popular?"bg-[#11845b] text-white hover:bg-[#0b6846]":"border border-[#dfe7e1] text-[#33433a] hover:bg-[#f5f9f6]"}`}>{plan.cta}</Link>
  {!compact&&<ul className="mt-6 space-y-3 border-t border-[#edf1ee] pt-5">{plan.features.map(f=><li key={f} className="flex gap-2 text-xs text-[#475569]"><Check size={15} className="shrink-0 text-[#11845b]"/>{f}</li>)}</ul>}
</article>; }
