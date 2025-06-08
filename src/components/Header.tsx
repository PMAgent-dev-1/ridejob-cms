import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              RIDE JOB
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                RIDE JOBについて
              </Link>
              <Link href="/category/company-interview" className="text-sm text-gray-600 hover:text-blue-600">
                企業取材
              </Link>
              <Link href="/blogs" className="text-sm text-gray-600 hover:text-blue-600">
                最新記事
              </Link>
            </nav>
          </div>
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">お問い合わせ</Button>
          </Link>
        </div>
      </div>
    </header>
  );
} 