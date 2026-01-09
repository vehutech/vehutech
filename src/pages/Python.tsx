import React, { useState } from "react";
import {
  Code,
  Target,
  BookOpen,
  Users,
  Trophy,
  Github,
  MessageCircle,
  ChevronRight,
  Zap,
  Brain,
  Database,
  Cpu,
  Globe,
  Heart,
  ExternalLink,
} from "lucide-react";

interface BlurTextProp {
  text: string;
  delay: number;
  animateBy?: string;
  direction?: string;
  className?: string;
  onAnimationComplete?: () => void;
}

const BlurText = ({
  text,
  delay,
  className = "",
  onAnimationComplete,
}: BlurTextProp) => {
  React.useEffect(() => {
    const timer = setTimeout(
      () => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      },
      delay * text.split(" ").length + 2000,
    );
    return () => clearTimeout(timer);
  }, [delay, text, onAnimationComplete]);

  return (
    <div
      className={`${className} animate-in fade-in slide-in-from-bottom-4 duration-1000`}
    >
      {text}
    </div>
  );
};

interface TrueFocusProp {
  sentence: string;
  borderColor: string;
}

const TrueFocus = ({ sentence, borderColor }: TrueFocusProp) => {
  return (
    <div className="relative">
      <div
        className="text-6xl sm:text-8xl mb-4 font-bold text-custom-gradient animate-in fade-in slide-in-from-left-4 duration-1000 delay-1000"
        style={{ borderColor }}
      >
        {sentence}
      </div>
    </div>
  );
};

interface SquaresProps {
  speed?: number;
  squareSize?: number;
  direction?: string;
  borderColor: string;
  hoverFillColor?: string;
}

const Squares = ({ borderColor }: SquaresProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-1 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border transition-all duration-300 hover:bg-primary/20"
              style={{
                borderColor,
                animationDelay: `${i * 0.1}s`,
                animation: `float ${3 + (i % 3)}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
};

const LearnPython = () => {
  const isDark = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${isDark ? "dark" : ""}`}
    >
      {/* Hero Section */}
      <section className="relative pt-30">
        <div className="absolute w-full flex items-center justify-between">
          {/* texts */}
          <div className="sm:px-40 px-4">
            {!isAnimationComplete ? (
              <BlurText
                text="100 Days of"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl sm:text-8xl mb-4 font-bold text-foreground"
                onAnimationComplete={handleAnimationComplete}
              />
            ) : (
              <TrueFocus
                sentence="Python Mastery"
                borderColor={isDark ? "#11e5fb" : "#2653fb"}
              />
            )}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg">
              Master Python from beginner to expert through disciplined,
              structured learning and hands-on projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-custom-gradient text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-custom-lg">
                <Github className="w-5 h-5" />
                Get Started
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground border border-border rounded-xl font-semibold hover:bg-muted transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-screen z-0">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor={isDark ? "#2a2f36" : "#e2d1a3"}
            hoverFillColor={isDark ? "#11e5fb" : "#2653fb"}
          />
        </div>
        <div className="absolute top-0 w-full h-full opacity-30 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-custom border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                About This Challenge
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                This challenge is not just about writing Python code daily—it's
                about{" "}
                <strong className="text-foreground">
                  mastering Python deeply
                </strong>
                . We'll explore:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-foreground">
                      In-depth Python concepts and abstractions beyond just
                      using libraries
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-foreground">
                      Zen programming: writing clean, efficient, and scalable
                      code
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-foreground">
                      Full-stack Python development (backend & frontend)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-foreground">
                      AI and machine learning model building
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">
                    Final Project
                  </span>
                </div>
                <p className="text-foreground">
                  Building an <strong>image recognition application</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-custom border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                What You'll Learn
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              Each day, we'll tackle new topics, building from fundamentals to
              advanced concepts:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Python Core",
                  desc: "Syntax, Data Structures, OOP",
                },
                {
                  icon: Cpu,
                  title: "Algorithm Design",
                  desc: "Problem Solving",
                },
                {
                  icon: Globe,
                  title: "Django Backend",
                  desc: "Backend Development",
                },
                {
                  icon: ExternalLink,
                  title: "Frontend Tools",
                  desc: "Python-based Frontend",
                },
                { icon: Brain, title: "AI & ML", desc: "Machine Learning" },
                {
                  icon: Database,
                  title: "Deep Learning",
                  desc: "Image Recognition",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-muted/50 rounded-xl border border-border hover:border-accent/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-foreground">
                We'll be using <strong className="text-primary">Django</strong>{" "}
                (instead of Flask/FastAPI) and{" "}
                <strong className="text-primary">MySQL</strong> as our database
                of choice.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-custom border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Learning Resources
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              We'll be leveraging high-quality books, videos, and the{" "}
              <strong className="text-foreground">Harvard CS50 course</strong>{" "}
              and quite a handful of others as our foundation.
            </p>
          </div>
        </section>

        {/* How to Participate */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-custom border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                How to Participate
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  text: "Fork this repository and clone it to your local machine.",
                },
                {
                  step: 2,
                  text: "Create a new folder for each day (e.g., Day_01).",
                },
                {
                  step: 3,
                  text: "Solve the challenge for the day and push your work.",
                },
                { step: 4, text: "Engage with others on our Discord Server." },
                {
                  step: 5,
                  text: "Get first hand information from our WhatsApp Community.",
                },
                {
                  step: 6,
                  text: "Share your progress on social media using #100DaysOfPython and #deeppython",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl"
                >
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <p className="text-foreground pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-custom border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Goals of This Challenge
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Build a strong coding discipline and track record",
                "Master Python from core principles to real-world applications",
                "Develop an AI-powered image recognition project",
                "Open up sponsorship and financial opportunities",
              ].map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl"
                >
                  <Trophy className="w-5 h-5 text-accent mt-1" />
                  <span className="text-foreground">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect & Collaborate */}
        <section className="mb-16">
          <div className="bg-custom-gradient rounded-2xl p-8 shadow-custom-lg">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Connect & Collaborate
                </h2>
              </div>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join our Discord community for discussions, mentorship, and
                networking opportunities. Let's make this challenge impactful!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-custom-lg">
                  <MessageCircle className="w-5 h-5" />
                  Join Discord
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
                  <ExternalLink className="w-5 h-5" />
                  WhatsApp Community
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground">
            Ready to transform your Python skills? Let's code together! 🚀
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              #100DaysOfPython
            </span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              #deeppython
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LearnPython;
