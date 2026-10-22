// Scrolling ticker strip (Gen Z palette)
const items = ['☕ COFFEE', '🧋 BOBA', '🎲 BOARD GAMES', '🥪 GOOD VIBES'];

function Marquee() {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#1b1535] text-[#ffe36e] py-3 font-black text-xl border-y-4 border-[#1b1535]">
      <style>{`@keyframes bmq{to{transform:translateX(-50%)}}`}</style>
      <div className="inline-block" style={{ animation: 'bmq 22s linear infinite' }}>
        {[...row, ...row].map((t, i) => (
          <span key={i} className="mx-6">{t} ✦</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
