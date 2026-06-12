export function SocialMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-navy/10 bg-white p-4 shadow-sm ${className}`}
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <span className="size-8 rounded-full bg-gradient-to-br from-amber-400 via-pink-500 to-violet-600 p-[2px]">
          <span className="flex size-full items-center justify-center rounded-full bg-white text-[8px] font-bold text-navy">
            FS
          </span>
        </span>
        <div>
          <p className="text-[11px] font-semibold text-navy">fortsolucoes</p>
          <p className="text-[9px] text-navy/45">Uberlândia · Patrocinado</p>
        </div>
      </div>
      <div className="mt-3 aspect-[4/3] rounded-lg bg-gradient-to-br from-navy/5 to-navy-light/20 p-3">
        <p className="text-[10px] font-medium leading-snug text-navy/80">
          🚀 IA + Tráfego Pago + Redes Sociais para sua empresa decolar!
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between text-navy/50">
        <div className="flex gap-3">
          <span className="text-sm">♥</span>
          <span className="text-sm">💬</span>
          <span className="text-sm">↗</span>
        </div>
        <span className="text-[9px]">2.4k curtidas</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {["#marketing", "#ia", "#uberlandia"].map((tag) => (
          <span key={tag} className="text-[8px] text-accent">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
