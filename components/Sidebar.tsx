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
        {/* <h2 className="text-xl font-semibold mb-6">Navigation</h2>
         */}
        <div className="-mt-5">
          <Image src="/ecosort-logo.png" alt="logo" width={200} height={200} />
        </div>
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
      </div>
    </div>
  );
}
