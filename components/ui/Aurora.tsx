export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bed">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-turquoise/20 blur-[110px] motion-safe:animate-drift" />
      <div className="absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-blue/20 blur-[120px] motion-safe:animate-drift [animation-delay:3s]" />
      <div className="absolute bottom-[-4rem] left-1/3 h-96 w-96 rounded-full bg-purple/15 blur-[130px] motion-safe:animate-drift [animation-delay:6s]" />
      <div className="absolute inset-0 bg-grain opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}
