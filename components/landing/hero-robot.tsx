export function HeroRobot() {
  return (
    <div className="hero-robot relative mx-auto w-full max-w-[520px] select-none">
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-[#1e4a7a]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/40 blur-xl" />

      <svg
        viewBox="0 0 520 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full drop-shadow-2xl"
        role="img"
        aria-label="Robô apresentando celular com conversa no WhatsApp da Fort Soluções em Uberlândia"
      >
        <defs>
          <linearGradient id="robotBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="45%" stopColor="#b8cce8" />
            <stop offset="100%" stopColor="#6b8cb8" />
          </linearGradient>
          <linearGradient id="robotDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e4a7a" />
            <stop offset="100%" stopColor="#0b1d3a" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dcf8c6" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="eyeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Antenna */}
        <line x1="260" y1="48" x2="260" y2="78" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="260" cy="40" r="10" fill="#38bdf8" className="robot-pulse" filter="url(#softGlow)" />

        {/* Head */}
        <rect x="175" y="78" width="170" height="130" rx="36" fill="url(#robotBody)" stroke="#0b1d3a" strokeWidth="3" />
        <rect x="195" y="98" width="130" height="72" rx="20" fill="url(#robotDark)" opacity="0.9" />

        {/* Eyes */}
        <ellipse cx="225" cy="132" rx="18" ry="20" fill="url(#eyeGlow)" className="robot-blink" />
        <ellipse cx="295" cy="132" rx="18" ry="20" fill="url(#eyeGlow)" className="robot-blink" />
        <circle cx="230" cy="128" r="5" fill="white" opacity="0.9" />
        <circle cx="300" cy="128" r="5" fill="white" opacity="0.9" />

        {/* Smile panel */}
        <rect x="215" y="158" width="90" height="8" rx="4" fill="#38bdf8" opacity="0.8" />

        {/* Neck */}
        <rect x="235" y="208" width="50" height="24" rx="8" fill="#94a3b8" />

        {/* Body */}
        <rect x="155" y="228" width="210" height="160" rx="40" fill="url(#robotBody)" stroke="#0b1d3a" strokeWidth="3" />
        <rect x="185" y="258" width="150" height="70" rx="16" fill="url(#robotDark)" opacity="0.35" />
        <circle cx="210" cy="293" r="8" fill="#25D366" className="robot-pulse" />
        <text x="228" y="298" fill="white" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">
          IA ATIVA
        </text>

        {/* Left arm */}
        <path
          d="M155 270 C110 270 85 310 75 350 L95 358 C102 325 120 300 155 295 Z"
          fill="url(#robotBody)"
          stroke="#0b1d3a"
          strokeWidth="3"
        />
        <circle cx="78" cy="362" r="16" fill="#b8cce8" stroke="#0b1d3a" strokeWidth="2" />

        {/* Right arm holding phone */}
        <path
          d="M365 265 C410 255 440 290 455 330 L435 340 C425 305 400 280 365 288 Z"
          fill="url(#robotBody)"
          stroke="#0b1d3a"
          strokeWidth="3"
        />
        <circle cx="458" cy="338" r="16" fill="#b8cce8" stroke="#0b1d3a" strokeWidth="2" />

        {/* Phone frame */}
        <g className="robot-phone-float">
          <rect x="318" y="118" width="168" height="310" rx="28" fill="#0b1d3a" />
          <rect x="326" y="126" width="152" height="294" rx="22" fill="#111827" />
          <rect x="334" y="134" width="136" height="278" rx="16" fill="#0b1419" />

          {/* WhatsApp header */}
          <rect x="334" y="134" width="136" height="52" rx="16" fill="#1f2c34" />
          <rect x="334" y="170" width="136" height="16" fill="#1f2c34" />
          <circle cx="352" cy="158" r="14" fill="#25D366" />
          <text x="348" y="162" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
            F
          </text>
          <text x="372" y="154" fill="#e9edef" fontSize="9" fontWeight="700" fontFamily="system-ui">
            Fort Soluções
          </text>
          <text x="372" y="166" fill="#8696a0" fontSize="7" fontFamily="system-ui">
            IA · Tráfego · Social · UDI
          </text>

          {/* Chat background */}
          <rect x="338" y="190" width="128" height="218" fill="#0b1419" />
          <rect x="338" y="190" width="128" height="218" fill="url(#screenGlow)" opacity="0.06" />

          {/* Date pill */}
          <rect x="378" y="198" width="48" height="14" rx="7" fill="#182229" />
          <text x="402" y="208" fill="#8696a0" fontSize="6" textAnchor="middle" fontFamily="system-ui">
            Hoje
          </text>

          {/* Incoming bubble */}
          <rect x="344" y="220" width="108" height="72" rx="10" fill="#1f2c34" />
          <text x="352" y="234" fill="#e9edef" fontSize="7" fontWeight="600" fontFamily="system-ui">
            Fort Soluções 🤖
          </text>
          <text x="352" y="248" fill="#d1e7dd" fontSize="6.5" fontFamily="system-ui">
            <tspan x="352" dy="0">Olá! Somos a</tspan>
            <tspan x="352" dy="10">Fort Soluções —</tspan>
            <tspan x="352" dy="10">Empresa de IA em</tspan>
            <tspan x="352" dy="10" fontWeight="700" fill="#25D366">
              Uberlândia! 🚀
            </tspan>
          </text>
          <text x="444" y="286" fill="#8696a0" fontSize="5.5" textAnchor="end" fontFamily="system-ui">
            09:41
          </text>

          {/* Outgoing bubble */}
          <rect x="362" y="302" width="98" height="58" rx="10" fill="#005c4b" />
          <text x="370" y="316" fill="#e9edef" fontSize="6.5" fontFamily="system-ui">
            <tspan x="370" dy="0">IA, tráfego pago</tspan>
            <tspan x="370" dy="10">e redes sociais</tspan>
            <tspan x="370" dy="10">para sua empresa!</tspan>
            <tspan x="370" dy="10" fontWeight="600">Fale conosco ✨</tspan>
          </text>
          <text x="452" y="354" fill="#8696a0" fontSize="5.5" textAnchor="end" fontFamily="system-ui">
            09:42 ✓✓
          </text>

          {/* Promo bubble */}
          <rect x="344" y="368" width="108" height="36" rx="10" fill="#1f2c34" />
          <text x="352" y="382" fill="#25D366" fontSize="6.5" fontWeight="700" fontFamily="system-ui">
            📍 Uberlândia - MG
          </text>
          <text x="352" y="394" fill="#aebac1" fontSize="6" fontFamily="system-ui">
            Consultoria e IA sob medida
          </text>

          {/* Input bar */}
          <rect x="338" y="398" width="128" height="28" rx="0" fill="#1f2c34" />
          <rect x="346" y="404" width="88" height="16" rx="8" fill="#2a3942" />
          <circle cx="456" cy="412" r="10" fill="#25D366" />
        </g>

        {/* Legs */}
        <rect x="195" y="385" width="55" height="70" rx="18" fill="url(#robotBody)" stroke="#0b1d3a" strokeWidth="3" />
        <rect x="270" y="385" width="55" height="70" rx="18" fill="url(#robotBody)" stroke="#0b1d3a" strokeWidth="3" />
        <rect x="188" y="448" width="68" height="18" rx="9" fill="#0b1d3a" />
        <rect x="263" y="448" width="68" height="18" rx="9" fill="#0b1d3a" />

        {/* Sparkles */}
        <circle cx="120" cy="140" r="3" fill="#38bdf8" opacity="0.8" className="robot-sparkle" />
        <circle cx="400" cy="90" r="2.5" fill="#5eead4" opacity="0.9" className="robot-sparkle-delay" />
        <circle cx="90" cy="320" r="2" fill="white" opacity="0.6" className="robot-sparkle-delay" />
      </svg>
    </div>
  );
}
