export function PageBanner({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="section-pad border-b"><div className="container-shell grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><p className="eyebrow">{eyebrow}</p><div><h1 className="section-title">{title}</h1><p className="body-large mt-7">{description}</p></div></div></section>;
}
