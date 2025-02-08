"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        {/* Logo Section */}
        <div className="-mt-5">
          <Image src="/ecosort-logo.png" alt="logo" width={200} height={200} />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <Link href="/" passHref>
            <Button
              variant={pathname === "/" ? "default" : "ghost"}
              className="w-full justify-start"
            >
              Home
            </Button>
          </Link>
          <Link href="/gallery" passHref>
            <Button
              variant={pathname === "/gallery" ? "default" : "ghost"}
              className="w-full justify-start"
            >
              Gallery
            </Button>
          </Link>
          <Link href="/data" passHref>
            <Button
              variant={pathname === "/data" ? "default" : "ghost"}
              className="w-full justify-start"
            >
              Data Display
            </Button>
          </Link>
          <Link href="/model" passHref>
            <Button
              variant={pathname === "/model" ? "default" : "ghost"}
              className="w-full justify-start"
            >
              Model Integration
            </Button>
          </Link>
        </nav>

        {/* Chatbot Section */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Your Chatbot
          </h3>
          <Link href="/chatbot" passHref>
            <Button
              variant={pathname === "/chatbot" ? "default" : "ghost"}
              className="w-full justify-start"
            >
              Open Chatbot
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}