import { useEffect } from "react";

export default function Vyapaar() {
  useEffect(() => {
    window.location.href = "https://vyapaar.bhaglabs.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to vyapaar.bhaglabs.com...</p>
    </div>
  );
}
