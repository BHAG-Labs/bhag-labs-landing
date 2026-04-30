import { useEffect } from "react";

export default function Hissa() {
  useEffect(() => {
    window.location.href = "https://hissa.bhaglabs.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to hissa.bhaglabs.com...</p>
    </div>
  );
}
