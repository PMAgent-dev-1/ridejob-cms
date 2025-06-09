"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Category } from "@/types/microcms";
import { Menu, X } from "lucide-react";

export function Header({ categories }: { categories: Category[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // 初期チェック
    checkScreenSize();

    // リサイズイベントリスナー
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navLinks = [
    ...categories.map((category) => ({
      href: `/category/${category.slug}`,
      label: category.name,
      id: category.id,
    })),
    { href: "/about", label: "RIDE JOBについて", id: "about" },
    { href: "https://ridejob-cms.online/ssw", label: "特定技能外国人", id: "ssw" },
  ];

  return (
    <header className="bg-white border-b py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div>
              <Image
                src="/logo.png"
                alt="RIDE JOB"
                width={160}
                height={48}
                priority
                className="h-12 w-auto"
              />
              <p className="text-xs text-blue-600 text-center font-bold">ライドジョブ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {isLargeScreen && (
            <div className="flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link key={link.id} href={link.href} className="text-sm text-gray-600 hover:text-blue-600 whitespace-nowrap">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link href="/contact" className="ml-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          {!isLargeScreen && (
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="p-2"
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && !isLargeScreen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
          <div className="w-full flex justify-end mb-8">
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center w-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-xl font-semibold text-gray-800 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-8" onClick={() => setIsMenuOpen(false)}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-6 text-xl">
                お問い合わせ
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 