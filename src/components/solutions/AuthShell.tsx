import { useState } from "react";
import { motion } from "framer-motion";
import { Chrome } from "lucide-react";

interface Props {
  product: string;
  tagline: string;
  onAuth: () => void;
}

const AuthShell = ({ product, tagline, onAuth }: Props) => {
  const [mode, setMode] = useState<"signup" | "signin">("signup");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth();
  };

  return (
    <div className="min-h-[calc(100vh-40px)] section-light paper-texture flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-2 border border-foreground/20 pointer-events-none" />
        <div className="border-2 border-foreground bg-cream relative">
          <div className="bg-forest text-cream px-6 py-3 text-center">
            <span className="section-label text-ochre">{product}</span>
          </div>
          <div className="p-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-2 text-center">
              {mode === "signup" ? "Start Building" : "Welcome Back"}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-6">{tagline}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider mb-1.5 font-medium">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider mb-1.5 font-medium">Password</label>
                <input
                  type="password"
                  required
                  placeholder={mode === "signup" ? "Create a password" : "Enter your password"}
                  className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary py-3 font-semibold text-primary-foreground text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                {mode === "signup" ? "Start Building →" : "Sign In →"}
              </button>
            </form>

            <div className="diamond-divider text-foreground/30 my-6">
              <span className="text-xs select-none">◆</span>
            </div>

            <button
              type="button"
              onClick={onAuth}
              className="w-full flex items-center justify-center gap-2 border-2 border-foreground/30 py-2.5 text-sm font-medium text-foreground hover:bg-cream-dark transition-colors"
            >
              <Chrome className="w-4 h-4" /> Continue with Google
            </button>

            <p className="text-xs text-center text-muted-foreground mt-6">
              {mode === "signup" ? "Already have an account?" : "New here?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
                className="text-terracotta font-semibold hover:underline"
              >
                {mode === "signup" ? "Sign in" : "Sign up"}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthShell;
