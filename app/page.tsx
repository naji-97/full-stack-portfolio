'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="font-primary text-2xl">This should use JetBrains Mono</div>
      
    </div>
  );
}
