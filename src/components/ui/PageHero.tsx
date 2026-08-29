import { FadeIn } from "@/components/ui/FadeIn";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  narrow?: boolean;
}

export function PageHero({ eyebrow, title, description, narrow = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(102,163,191,0.42),transparent_24%),radial-gradient(circle_at_10%_100%,rgba(51,104,160,0.9),transparent_34%),linear-gradient(115deg,#3368A0_0%,#3368A0_55%,#66A3BF_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute right-[10%] top-24 h-28 w-28 rounded-full border border-emerald/30" />
      <div className="absolute right-[14%] top-40 h-3 w-3 rounded-full bg-emerald shadow-[0_0_0_12px_rgba(102,163,191,0.2)]" />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-transparent via-emerald to-transparent" />

      <div className={`relative mx-auto px-6 lg:px-8 ${narrow ? "max-w-3xl" : "max-w-7xl"}`}>
        <FadeIn>
          {eyebrow && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-light">
              <span className="h-2 w-2 rounded-full bg-emerald" />
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-light">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
