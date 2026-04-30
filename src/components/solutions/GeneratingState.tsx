import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  messages: string[];
  onDone: () => void;
  duration?: number;
}

const GeneratingState = ({ messages, onDone, duration = 2800 }: Props) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % messages.length);
    }, 700);
    const timeout = setTimeout(onDone, duration);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [messages.length, onDone, duration]);

  return (
    <div className="min-h-[calc(100vh-40px)] bg-charcoal text-cream flex flex-col items-center justify-center px-6">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="text-ochre text-7xl mb-10"
      >
        ◆
      </motion.div>
      <motion.p
        key={idx}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-xl md:text-2xl text-cream/90 text-center max-w-md min-h-[64px]"
      >
        {messages[idx]}
      </motion.p>
      <div className="mt-12 w-full max-w-md h-[2px] bg-cream/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          className="h-full bg-terracotta"
        />
      </div>
    </div>
  );
};

export default GeneratingState;
