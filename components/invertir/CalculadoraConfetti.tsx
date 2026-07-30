"use client";

const CONFETTI_PIECES = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  delay: `${(i * 0.07) % 2.5}s`,
  duration: `${2.8 + (i % 5) * 0.35}s`,
  color:
    i % 3 === 0
      ? "bg-brand-yellow"
      : i % 3 === 1
        ? "bg-brand-yellow-dark"
        : "bg-white",
  size: i % 2 === 0 ? "h-3 w-1.5" : "h-1.5 w-3",
  rotate: `${(i * 47) % 360}deg`,
}));

export function CalculadoraConfetti() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {CONFETTI_PIECES.map((piece) => (
        <span
          key={piece.id}
          className={`calculadora-confetti absolute top-0 rounded-sm ${piece.color} ${piece.size}`}
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            transform: `rotate(${piece.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
