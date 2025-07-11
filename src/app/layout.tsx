import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCategories } from "@/lib/microcms";
import StagewiseToolbarLoader from "@/components/StagewiseToolbarLoader";

export const metadata: Metadata = {
  title: {
    default: "RIDE JOB Media - ドライバー業界の魅力を発見",
    template: "%s | RIDE JOB Media",
  },
  description:
    "RIDE JOB Mediaは、タクシー業界への転職を考えている方やライドシェアに興味がある方に向けて、業界の最新情報や働き方、収入、制度の変化をご紹介するメディアです。",
  openGraph: {
    title: "RIDE JOB Media - ドライバー業界の魅力を発見",
    description:
      "RIDE JOB Mediaは、タクシー業界への転職を考えている方やライドシェアに興味がある方に向けて、業界の最新情報や働き方、収入、制度の変化をご紹介するメディアです。",
    url: "https://ridejob.jp/", // TODO: 更新する場合は実サイトのURLに変更してください
    siteName: "RIDE JOB Media",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/media/OGP.png", // public ディレクトリに配置した OGP 画像（大文字）
        width: 1200,
        height: 630,
        alt: "RIDE JOB Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIDE JOB Media - ドライバー業界の魅力を発見",
    description:
      "RIDE JOB Mediaは、タクシー業界への転職を考えている方やライドシェアに興味がある方に向けて、業界の最新情報や働き方、収入、制度の変化をご紹介するメディアです。",
    images: [
      {
        url: "/media/OGP.png",
        alt: "RIDE JOB Media",
      },
    ],
  },
  icons: {
    icon: "/media/favicon.png",
    shortcut: "/media/favicon.png",
    apple: "/media/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { contents: categories } = await getCategories();
  return (
    <html lang="ja">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Header categories={categories} />
        <StagewiseToolbarLoader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
