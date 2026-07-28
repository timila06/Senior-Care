import Link from "next/link";

type CtaBandProps = {
  title?: string;
  text?: string;
  contained?: boolean;
};

export function CtaBand({
  title = "Ready to discover Willow Grove?",
  text = "Start with a conversation and see whether our approach feels right for your family.",
  contained = false,
}: CtaBandProps) {
  const content = (
    <div className="relative overflow-hidden bg-deep-olive px-6 py-16 text-center text-white sm:px-12 sm:py-20">
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="headline-xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-white/75">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/contact#form" className="min-h-14 rounded-xl bg-[#ffdea9] px-8 py-3.5 font-bold text-[#312000] hover:scale-[1.03]">Schedule a Visit</Link>
          <Link href="/services" className="min-h-14 rounded-xl border-2 border-white px-8 py-3.5 font-bold text-white hover:bg-white/10">Explore Our Care</Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-32 -right-20 size-80 rounded-full border-[45px] border-white/5" aria-hidden="true" />
    </div>
  );

  return contained ? <section className="container-shell mb-20 overflow-hidden rounded-[2rem]">{content}</section> : <section className="mb-20">{content}</section>;
}
