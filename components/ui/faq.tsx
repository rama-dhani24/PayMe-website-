"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export function Faq({items}:{items:readonly (readonly [string,string])[]}) { const [open,setOpen]=useState<number|null>(0); return <div className="mx-auto max-w-3xl divide-y divide-[#e9eeea] border-y border-[#e9eeea]">{items.map(([q,a],i)=><div key={q}><h3><button className="focus-ring flex w-full items-center justify-between gap-5 py-5 text-left text-button" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}>{q}<ChevronDown size={17} className={`shrink-0 text-[#11845b] transition-transform ${open===i?"rotate-180":""}`}/></button></h3>{open===i&&<p className="-mt-1 max-w-2xl pb-5 text-body text-[#475569]">{a}</p>}</div>)}</div>; }
