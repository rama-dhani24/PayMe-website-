export function SectionHeading({ eyebrow, title, body, centered=true }: { eyebrow?: string; title: string; body?: string; centered?: boolean }) {
  return <div className={`mb-10 max-w-2xl ${centered?"mx-auto text-center":""}`}>{eyebrow&&<p className="eyebrow mb-3">{eyebrow}</p>}<h2 className="headline text-section">{title}</h2>{body&&<p className="mt-4 text-body text-[#475569]">{body}</p>}</div>;
}
