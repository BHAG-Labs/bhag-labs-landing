import { ArrowLeft } from "lucide-react";

interface Props {
  name: string;
}

const SolutionHeader = ({ name }: Props) => (
  <div className="bg-charcoal text-cream w-full">
    <div className="max-w-[1200px] mx-auto px-4 h-10 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
      <a href="/" className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
        <ArrowLeft className="w-3 h-3" /> BHAG Labs
      </a>
      <span className="hidden sm:block text-ochre font-semibold">{name} BY BHAG LABS</span>
      <span className="text-cream/50">India's Startup Toolkit</span>
    </div>
  </div>
);

export default SolutionHeader;
