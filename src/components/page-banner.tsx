export function PageBanner({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="section-pad border-b"><div className="container-shell"><p className="eyebrow">{eyebrow}</p><h1 className="section-title mt-7">{title}</h1><p className="body-large mt-7">{description}</p></div></section>;
}
