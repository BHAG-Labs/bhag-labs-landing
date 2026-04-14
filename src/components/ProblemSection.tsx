import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const ProblemSection = () => (
  <AnimatedSection className="section-padding">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <SectionLabel>The Reality</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Innovation Programs Are Stuck in the{" "}
          <span className="gradient-text">Stone Age.</span>
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Most universities and accelerators still run startup programs using spreadsheets,
            Google Docs, and disconnected tools. Mentors can't see what teams are doing. Founders
            submit weekly updates into a void. Hypotheses live in notebooks that nobody reviews.
          </p>
          <p>
            The result? Programs can't measure progress. Founders don't learn the right methodology.
            And the best ideas die — not because they were bad, but because nobody helped validate
            them in time.
          </p>
          <p>
            Meanwhile, the best programs in the world have moved to structured, software-driven
            approaches built on the Lean LaunchPad methodology — where every assumption is tracked,
            every interview is logged, and every pivot is documented.
          </p>
          <p className="text-foreground font-semibold">
            BHAG Labs brings that rigor to every program, at every scale.
          </p>
        </div>
      </div>

      {/* Illustration: disconnected graph */}
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
          {/* Scattered nodes */}
          {[
            { cx: 80, cy: 100, r: 20, color: "hsl(0 60% 50%)", opacity: 0.6 },
            { cx: 200, cy: 60, r: 15, color: "hsl(40 70% 50%)", opacity: 0.5 },
            { cx: 320, cy: 120, r: 18, color: "hsl(0 60% 50%)", opacity: 0.6 },
            { cx: 100, cy: 250, r: 22, color: "hsl(40 70% 50%)", opacity: 0.5 },
            { cx: 250, cy: 200, r: 16, color: "hsl(0 60% 50%)", opacity: 0.6 },
            { cx: 340, cy: 280, r: 20, color: "hsl(40 70% 50%)", opacity: 0.5 },
            { cx: 160, cy: 340, r: 14, color: "hsl(0 60% 50%)", opacity: 0.6 },
            { cx: 300, cy: 350, r: 18, color: "hsl(40 70% 50%)", opacity: 0.5 },
          ].map((node, i) => (
            <g key={i}>
              <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} opacity={node.opacity} />
              <line
                x1={node.cx + node.r + 5}
                y1={node.cy}
                x2={node.cx + node.r + 20 + Math.random() * 30}
                y2={node.cy + (Math.random() - 0.5) * 40}
                stroke="hsl(0 60% 50%)"
                strokeWidth="1.5"
                opacity="0.3"
                strokeDasharray="4 4"
              />
            </g>
          ))}
          {/* Big X marks */}
          {[[150, 150], [280, 230], [200, 300]].map(([x, y], i) => (
            <g key={`x${i}`} opacity="0.25">
              <line x1={x - 12} y1={y - 12} x2={x + 12} y2={y + 12} stroke="hsl(0 70% 55%)" strokeWidth="3" />
              <line x1={x + 12} y1={y - 12} x2={x - 12} y2={y + 12} stroke="hsl(0 70% 55%)" strokeWidth="3" />
            </g>
          ))}
          <text x="200" y="395" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="12" fontFamily="Inter">
            Disconnected. Untracked. Invisible.
          </text>
        </svg>
      </div>
    </div>
  </AnimatedSection>
);

export default ProblemSection;
