'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="font-primary text-2xl">This should use JetBrains Mono</div>
      <Button onClick={() => setShow((v) => !v)}>
        Toggle Accordion Up Animation
      </Button>
      <div
        className={`mt-4 bg-gray-200 p-4 rounded transition-all overflow-hidden ${show ? "animate-accordion-up" : ""
          }`}
        // style={{ height: show ? "100px" : "0px" }}
      >
        Accordion Content
      </div>
      Home Page
    </div>
  );
}
