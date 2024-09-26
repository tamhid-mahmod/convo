"use client";

import { useAuthActions } from "@convex-dev/auth/react";

import { Button } from "@/components/ui/button";

// ----------------------------------------------------------------------

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div>
      Looged in!
      <Button onClick={() => void signOut()}>Sign out</Button>
    </div>
  );
}
