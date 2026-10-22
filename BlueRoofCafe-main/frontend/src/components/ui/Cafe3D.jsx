import { useRef } from 'react';
import Logo from '../../assets/Logo/logo.png';

// 3D section: spinning logo coin, floating coffee beans and a tilt-on-hover card.
function Cafe3D() {
  const cardRef = useRef(null);

  const onMove = (e) => {
    const el = cardRef.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale(1.04)`;
  };
  const onLeave = () => {
    cardRef.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale(1)';
  };

  return (
    <section className="relative overflow-hidden bg-violet-100 dark:bg-background-dark dark:text-white py-24">
      <style>{`
        .b3d-scene{perspective:1000px;width:240px;height:240px;margin:0 auto}
        .b3d-coin{position:relative;width:100%;height:100%;transform-style:preserve-3d;animation:b3d-spin 8s linear infinite}
        .b3d-face{position:absolute;inset:0;border-radius:50%;backface-visibility:hidden;box-shadow:0 20px 40px rgba(0,0,0,.3)}
        .b3d-face.back{transform:rotateY(180deg)}
        .b3d-edge{position:absolute;inset:0;border-radius:50%;background:#1d4ed8;transform:translateZ(-6px)}
        @keyframes b3d-spin{from{transform:rotateY(0)}to{transform:rotateY(360deg)}}
        .b3d-bean{position:absolute;width:22px;height:34px;border-radius:50%;background:#6b3f1d;box-shadow:inset -4px -4px 0 rgba(0,0,0,.25);animation:b3d-float 6s ease-in-out infinite}
        .b3d-bean::after{content:'';position:absolute;left:50%;top:10%;width:2px;height:80%;background:#2b1708;transform:translateX(-50%) rotate(12deg)}
        @keyframes b3d-float{0%,100%{transform:translateY(0) rotateX(0) rotateZ(0)}50%{transform:translateY(-28px) rotateX(180deg) rotateZ(40deg)}}
        .b3d-card{transition:transform .15s ease-out;transform-style:preserve-3d}
        @media (prefers-reduced-motion:reduce){.b3d-coin,.b3d-bean{animation:none}}
      `}</style>

      {[
        ['8%', '15%', '0s'], ['20%', '70%', '1s'], ['85%', '20%', '2s'],
        ['75%', '75%', '3s'], ['50%', '8%', '4s'], ['92%', '55%', '1.5s'],
      ].map(([l, t, d], i) => (
        <span key={i} className="b3d-bean" style={{ left: l, top: t, animationDelay: d }} />
      ))}

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 px-6">
        <div className="b3d-scene">
          <div className="b3d-coin">
            <div className="b3d-edge" />
            <img src={Logo} alt="Blue Roof Cafe logo" className="b3d-face" />
            <img src={Logo} alt="" className="b3d-face back" />
          </div>
        </div>

        <div
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="b3d-card max-w-md rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-2xl border-2 border-black"
        >
          <h2 className="text-4xl font-bold mb-3" style={{ transform: 'translateZ(40px)' }}>
            Welcome to Blue Roof Cafe
          </h2>
          <p className="text-lg" style={{ transform: 'translateZ(20px)' }}>
            Great coffee, good food and a warm welcome under our blue roof.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cafe3D;
