import { useState, useEffect } from "react";

function FadeIn({ children, delay = 0, style = {} }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div style={{
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 0.65s ease, transform 0.65s ease", ...style,
    }}>{children}</div>
  );
}

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');`;

const DOT = " \u00B7 ";
const DASH = " \u2014 ";
const ARROW = "\u2192";
const APOS = "\u2019";

const theme = {
  bg: "#0F1114",
  card: "rgba(255,255,255,0.04)",
  text: "#F0EDE8",
  muted: "#9A958D",
  faint: "#5A5650",
  accent: "#C8A87C",
  pain: "#D4785C",
  painLight: "rgba(212,120,92,0.12)",
  perf: "#6BA3A0",
  perfLight: "rgba(107,163,160,0.12)",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Sora', system-ui, sans-serif",
};

const LINKS = {
  painQuiz: "https://derrickpainandperformance.github.io/pain-result/",
  perfQuiz: "https://derrickpainandperformance.github.io/performance-result/",
  painCall: "https://calendly.com/derrick-painandperformance/20-minute-pain-strategy-session",
  perfCall: "https://calendly.com/derrick-painandperformance/20-minute-performance-strategy-session",
  instagram: "https://instagram.com/derrick.painandperformance",
  linktree: "https://linktr.ee/derrick.painandperformance",
};

export default function DerrickLanding() {
  const [hoverPain, setHoverPain] = useState(false);
  const [hoverPerf, setHoverPerf] = useState(false);

  const pillars = [
    {
      title: "Movement Optimism",
      desc: `Your body isn${APOS}t fragile. It${APOS}s built to adapt, heal, and handle more than you think. I help you rebuild that trust.`,
      icon: "\u25CB", color: theme.accent,
    },
    {
      title: "Modern Pain Science",
      desc: `Pain isn${APOS}t always about tissue damage. Understanding what${APOS}s really driving your pain changes everything about how you treat it.`,
      icon: "\u25B3", color: theme.pain,
    },
    {
      title: "ACT-Informed",
      desc: `Acceptance & Commitment Therapy helps you move toward what matters${DASH}even when discomfort is present. It${APOS}s not about being pain-free. It${APOS}s about being free.`,
      icon: "\u25C7", color: theme.perf,
    },
  ];

  const steps = [
    { num: "01", title: "Take the free assessment", desc: `Choose your path${DASH}Pain or Performance${DASH}and answer a few honest questions. Takes 2 minutes.` },
    { num: "02", title: "Get your personalized profile", desc: `Instantly see what${APOS}s really driving your pain or holding back your performance. No generic advice.` },
    { num: "03", title: "Book a free strategy call", desc: `20 minutes with me. No sales pitch. You${APOS}ll leave with a clear understanding of your next steps.` },
    { num: "04", title: "Start moving forward", desc: `Whether through a self-paced program or 1-on-1 coaching, you${APOS}ll have a plan built for your life and your values.` },
  ];

  return (
    <div style={{
      fontFamily: theme.sans, minHeight: "100vh", color: theme.text,
      background: theme.bg, position: "relative", overflow: "hidden",
    }}>
      <style>{FONTS}</style>

      <div style={{
        position: "fixed", top: "-20%", right: "-10%", width: "50vw", height: "50vw",
        borderRadius: "50%", background: `radial-gradient(circle, ${theme.pain}08 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: "-20%", left: "-10%", width: "50vw", height: "50vw",
        borderRadius: "50%", background: `radial-gradient(circle, ${theme.perf}08 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Nav */}
      <FadeIn>
        <nav style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          maxWidth: 1100, margin: "0 auto", padding: "28px 32px",
        }}>
          <div>
            <span style={{ fontFamily: theme.serif, fontSize: 24, fontWeight: 600, color: theme.text }}>Derrick</span>
            <span style={{ color: theme.faint, margin: "0 10px", fontWeight: 300 }}>|</span>
            <span style={{ fontSize: 13, fontWeight: 400, color: theme.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>Pain & Performance</span>
          </div>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" style={{
            fontSize: 13, color: theme.muted, textDecoration: "none", transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = theme.accent}
            onMouseLeave={e => e.target.style.color = theme.muted}
          >@derrick.painandperformance</a>
        </nav>
      </FadeIn>

      {/* Hero */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 32px 60px" }}>
        <FadeIn delay={100}>
          <div style={{
            display: "inline-flex", padding: "6px 16px", borderRadius: 20,
            border: `1px solid ${theme.accent}30`, marginBottom: 32,
          }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: theme.accent, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {`SPT${DOT}CSCS${DOT}Online`}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 style={{
            fontFamily: theme.serif, fontSize: "clamp(38px, 5.5vw, 62px)", fontWeight: 500,
            lineHeight: 1.15, maxWidth: 750, marginBottom: 28,
          }}>
            Pain is information.<br />
            <span style={{ fontStyle: "italic", color: theme.accent }}>Not a life sentence.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={350}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: theme.muted, maxWidth: 540, marginBottom: 48, fontWeight: 300 }}>
            {`I help people understand their pain, move without fear, and get back to what matters most. My approach combines modern pain science, movement optimism, and Acceptance & Commitment Therapy${DASH}because your body is more capable than you${APOS}ve been told.`}
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <p style={{ fontSize: 14, color: theme.faint, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, marginBottom: 24 }}>
            Which describes you best?
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 60 }}>
            {/* Pain Track */}
            <a href={LINKS.painQuiz} style={{ textDecoration: "none", color: "inherit" }}
              onMouseEnter={() => setHoverPain(true)} onMouseLeave={() => setHoverPain(false)}>
              <div style={{
                background: hoverPain ? theme.painLight : theme.card,
                border: `1px solid ${hoverPain ? theme.pain + '40' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 18, padding: "36px 32px",
                transition: "all 0.3s ease",
                transform: hoverPain ? "translateY(-4px)" : "translateY(0)",
                cursor: "pointer",
              }}>
                <div style={{
                  fontSize: 28, marginBottom: 16, display: "inline-flex", alignItems: "center",
                  justifyContent: "center", width: 52, height: 52, borderRadius: 14,
                  background: theme.painLight,
                }}>{"\uD83E\uDDE0"}</div>
                <h3 style={{ fontFamily: theme.serif, fontSize: 26, fontWeight: 600, marginBottom: 10, color: theme.pain }}>
                  {`I${APOS}m dealing with pain`}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: theme.muted, marginBottom: 20 }}>
                  {`Persistent pain that${APOS}s holding you back from the life you want. You${APOS}ve tried treatments but something${APOS}s still missing. Let${APOS}s find out what${APOS}s really driving it.`}
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: theme.pain }}>
                  Take the Free Pain Assessment
                  <span style={{ transition: "transform 0.2s", transform: hoverPain ? "translateX(4px)" : "translateX(0)" }}>{ARROW}</span>
                </div>
                <p style={{ fontSize: 12, color: theme.faint, marginTop: 10 }}>
                  {`8 questions${DOT}2 minutes${DOT}Free personalized result`}
                </p>
              </div>
            </a>

            {/* Performance Track */}
            <a href={LINKS.perfQuiz} style={{ textDecoration: "none", color: "inherit" }}
              onMouseEnter={() => setHoverPerf(true)} onMouseLeave={() => setHoverPerf(false)}>
              <div style={{
                background: hoverPerf ? theme.perfLight : theme.card,
                border: `1px solid ${hoverPerf ? theme.perf + '40' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 18, padding: "36px 32px",
                transition: "all 0.3s ease",
                transform: hoverPerf ? "translateY(-4px)" : "translateY(0)",
                cursor: "pointer",
              }}>
                <div style={{
                  fontSize: 28, marginBottom: 16, display: "inline-flex", alignItems: "center",
                  justifyContent: "center", width: 52, height: 52, borderRadius: 14,
                  background: theme.perfLight,
                }}>{"\u26A1"}</div>
                <h3 style={{ fontFamily: theme.serif, fontSize: 26, fontWeight: 600, marginBottom: 10, color: theme.perf }}>
                  I want to perform better
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: theme.muted, marginBottom: 20 }}>
                  {`You${APOS}re active but something${APOS}s holding you back${DASH}fear of re-injury, a nagging limitation, or a ceiling you can${APOS}t break through. Let${APOS}s find the bottleneck.`}
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: theme.perf }}>
                  Take the Free Performance Assessment
                  <span style={{ transition: "transform 0.2s", transform: hoverPerf ? "translateX(4px)" : "translateX(0)" }}>{ARROW}</span>
                </div>
                <p style={{ fontSize: 12, color: theme.faint, marginTop: 10 }}>
                  {`10 questions${DOT}2 minutes${DOT}Free personalized result`}
                </p>
              </div>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Philosophy Section */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
        <FadeIn delay={200}>
          <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, paddingTop: 60 }}>
            <h2 style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 500, marginBottom: 16 }}>
              A different approach to <span style={{ fontStyle: "italic", color: theme.accent }}>pain & performance.</span>
            </h2>
            <p style={{ fontSize: 15, color: theme.muted, maxWidth: 520, marginBottom: 48, lineHeight: 1.7, fontWeight: 300 }}>
              Most providers treat the symptom. I look at the whole picture — because how you think about your body shapes how your body feels.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {pillars.map((item, i) => (
            <FadeIn key={i} delay={300 + i * 120}>
              <div style={{
                background: theme.card, border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "30px 26px", transition: "border-color 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = item.color + '30'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{ fontSize: 24, color: item.color, marginBottom: 14, fontFamily: theme.serif }}>{item.icon}</div>
                <h3 style={{ fontFamily: theme.serif, fontSize: 20, fontWeight: 600, marginBottom: 8, color: item.color }}>{item.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: theme.muted, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
        <FadeIn delay={200}>
          <div style={{
            background: theme.card, border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20, padding: "48px 44px", maxWidth: 760,
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: theme.accent, marginBottom: 20 }}>About Me</div>
            <h2 style={{ fontFamily: theme.serif, fontSize: 28, fontWeight: 500, marginBottom: 20, lineHeight: 1.35, fontStyle: "italic" }}>
              {`I believe everyone deserves to move with confidence${DASH}not just the absence of pain, but the presence of trust in their own body.`}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: theme.muted, marginBottom: 16, fontWeight: 300 }}>
              {`I${APOS}m Derrick Hutchinson${DASH}a student physical therapist and certified strength & conditioning specialist. I combine evidence-based physical therapy with modern pain science and Acceptance & Commitment Therapy to help people break free from the cycle of pain, fear, and avoidance.`}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: theme.muted, fontWeight: 300 }}>
              {`Whether you${APOS}re dealing with persistent pain or trying to get back to the performance level you know you${APOS}re capable of${DASH}my approach starts with understanding the whole picture: your body, your beliefs, and your values. Because the path forward isn${APOS}t just physical. It never was.`}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* How It Works */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
        <FadeIn delay={200}>
          <h2 style={{ fontFamily: theme.serif, fontSize: 28, fontWeight: 500, marginBottom: 48 }}>How it works.</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {steps.map((step, i) => (
            <FadeIn key={i} delay={300 + i * 100}>
              <div>
                <div style={{ fontFamily: theme.serif, fontSize: 36, fontWeight: 600, color: theme.accent + '30', marginBottom: 12 }}>{step.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: theme.text }}>{step.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: theme.muted, fontWeight: 300 }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 60px", textAlign: "center" }}>
        <FadeIn delay={200}>
          <div style={{
            background: `linear-gradient(135deg, ${theme.painLight}, ${theme.perfLight})`,
            border: "1px solid rgba(255,255,255,0.06)", borderRadius: 22, padding: "52px 40px",
          }}>
            <h2 style={{ fontFamily: theme.serif, fontSize: 30, fontWeight: 500, marginBottom: 16, fontStyle: "italic", lineHeight: 1.3 }}>
              {`Ready to find out what${APOS}s really going on?`}
            </h2>
            <p style={{ fontSize: 15, color: theme.muted, maxWidth: 440, margin: "0 auto 32px", fontWeight: 300 }}>
              Start with a free 2-minute assessment. No account needed. No commitment. Just honest answers and a personalized result.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={LINKS.painQuiz} style={{
                padding: "16px 32px", background: theme.pain, color: "white",
                border: "none", borderRadius: 12, fontSize: 15, fontWeight: 600,
                textDecoration: "none", fontFamily: theme.sans, transition: "all 0.2s", display: "inline-block",
              }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 6px 24px ${theme.pain}40`; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
              >{`Pain Assessment ${ARROW}`}</a>
              <a href={LINKS.perfQuiz} style={{
                padding: "16px 32px", background: theme.perf, color: "white",
                border: "none", borderRadius: 12, fontSize: 15, fontWeight: 600,
                textDecoration: "none", fontFamily: theme.sans, transition: "all 0.2s", display: "inline-block",
              }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 6px 24px ${theme.perf}40`; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
              >{`Performance Assessment ${ARROW}`}</a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Book a Call */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 60px" }}>
        <FadeIn delay={200}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <p style={{ fontSize: 14, color: theme.faint, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: 12 }}>
              Prefer to talk first?
            </p>
            <h2 style={{ fontFamily: theme.serif, fontSize: 26, fontWeight: 500, marginBottom: 16 }}>
              Book a free 20-minute strategy call.
            </h2>
            <p style={{ fontSize: 14, color: theme.muted, maxWidth: 440, margin: "0 auto 24px", fontWeight: 300 }}>
              No sales pitch. No commitment. Just a conversation about where you are and where you want to be.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={LINKS.painCall} target="_blank" rel="noopener noreferrer" style={{
                padding: "12px 24px", background: "transparent", color: theme.pain,
                border: `1.5px solid ${theme.pain}`, borderRadius: 10, fontSize: 13, fontWeight: 600,
                textDecoration: "none", fontFamily: theme.sans, transition: "background 0.2s",
              }}
                onMouseEnter={e => e.target.style.background = theme.painLight}
                onMouseLeave={e => e.target.style.background = "transparent"}
              >Pain Strategy Call</a>
              <a href={LINKS.perfCall} target="_blank" rel="noopener noreferrer" style={{
                padding: "12px 24px", background: "transparent", color: theme.perf,
                border: `1.5px solid ${theme.perf}`, borderRadius: 10, fontSize: 13, fontWeight: 600,
                textDecoration: "none", fontFamily: theme.sans, transition: "background 0.2s",
              }}
                onMouseEnter={e => e.target.style.background = theme.perfLight}
                onMouseLeave={e => e.target.style.background = "transparent"}
              >Performance Strategy Call</a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <footer style={{
        maxWidth: 1100, margin: "0 auto", padding: "32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>
        <div>
          <span style={{ fontFamily: theme.serif, fontSize: 18, color: theme.faint }}>Derrick Hutchinson</span>
          <span style={{ color: theme.faint + "60", margin: "0 8px" }}>|</span>
          <span style={{ fontSize: 12, color: theme.faint }}>Pain & Performance</span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: theme.faint, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = theme.accent}
            onMouseLeave={e => e.target.style.color = theme.faint}
          >Instagram</a>
          <a href={LINKS.linktree} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: theme.faint, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = theme.accent}
            onMouseLeave={e => e.target.style.color = theme.faint}
          >Linktree</a>
          <span style={{ fontSize: 12, color: theme.faint }}>derrick.painandperformance@gmail.com</span>
        </div>
      </footer>

      <div style={{ textAlign: "center", padding: "0 32px 24px" }}>
        <p style={{ fontSize: 11, color: theme.faint + "80", lineHeight: 1.5 }}>
          This site is for educational purposes only and does not constitute medical advice. Please consult a licensed healthcare provider for individualized treatment.
        </p>
      </div>
    </div>
  );
}