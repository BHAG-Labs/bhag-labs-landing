import { useEffect } from "react";

export default function Sigint() {
  useEffect(() => {
    window.location.href = "https://sigint.bhaglabs.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to sigint.bhaglabs.com...</p>
    </div>
  );
}
