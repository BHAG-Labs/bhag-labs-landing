import { useEffect } from "react";

export default function Yantra() {
  useEffect(() => {
    window.location.href = "https://yantra.bhaglabs.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to yantra.bhaglabs.com...</p>
    </div>
  );
}
