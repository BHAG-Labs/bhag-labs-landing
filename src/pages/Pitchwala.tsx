import { useEffect } from "react";

export default function Pitchwala() {
  useEffect(() => {
    window.location.href = "https://pitchwala.bhaglabs.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to pitchwala.bhaglabs.com...</p>
    </div>
  );
}
