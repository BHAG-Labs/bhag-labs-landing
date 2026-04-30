import { useEffect } from "react";

export default function Bazaar() {
  useEffect(() => {
    window.location.href = "https://bazaar.bhaglabs.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to bazaar.bhaglabs.com...</p>
    </div>
  );
}
