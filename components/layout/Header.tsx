"use client";

import { Coffee } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { theme } from "@/lib/theme";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Estates", href: "/estates" },
    { name: "Beans", href: "/beans" },
    { name: "Processing", href: "/processing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8" style={{ color: theme.colors.primary.DEFAULT }} />
              <span className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>
                Coffee Frenzy
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-[#8B4513] text-white"
                      : "text-gray-700 hover:bg-[#8B4513]/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNav
            navigation={navigation}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
          />
        </div>
      </nav>
    </header>
  );
}