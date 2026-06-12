export function AdsMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-navy/10 bg-white p-4 shadow-sm ${className}`}
      aria-hidden
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-navy/50">
          Tráfego Pago
        </span>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
          +127%
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <span className="rounded-md bg-[#4285F4]/10 px-2 py-1 text-[9px] font-semibold text-[#4285F4]">
          Google
        </span>
        <span className="rounded-md bg-[#1877F2]/10 px-2 py-1 text-[9px] font-semibold text-[#1877F2]">
          Meta
        </span>
      </div>
      <div className="mt-4 flex items-end gap-1 h-12">
        {[40, 65, 45, 80, 55, 95, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-navy-light to-accent/60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-navy/5 pt-3">
        <div>
          <dt className="text-[9px] text-navy/45">Cliques</dt>
          <dd className="text-xs font-bold text-navy">12.4k</dd>
        </div>
        <div>
          <dt className="text-[9px] text-navy/45">Leads</dt>
          <dd className="text-xs font-bold text-navy">847</dd>
        </div>
        <div>
          <dt className="text-[9px] text-navy/45">ROI</dt>
          <dd className="text-xs font-bold text-emerald-600">4.2x</dd>
        </div>
      </dl>
    </div>
  );
}
