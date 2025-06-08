# RIDE JOB メディアサイト

ドライバー業界の魅力や最新情報を発信するメディアサイトです。

## 概要

このプロジェクトは、Next.js (App Router) を使用して構築された、ドライバー業界に特化したメディアサイトのフロントエンドです。
ヘッドレスCMSであるmicroCMSと連携し、記事やスライダーなどのコンテンツを管理しています。

## ✨ 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) 14 (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) v4
- **ヘッドレスCMS**: [microCMS](https://microcms.io/)
- **UIコンポーネント**: [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **カルーセル**: [Embla Carousel](https://www.embla-carousel.com/)

## 🚀 環境構築

### 1. リポジトリをクローン

```bash
git clone https://github.com/Kei5665/ridejob-cms.git
cd ridejob-cms
```

### 2. パッケージをインストール

このプロジェクトでは `pnpm` を使用します。

```bash
pnpm install
```

### 3. 環境変数を設定

プロジェクトのルートに `.env.local` ファイルを作成し、以下の内容を記述してください。
値はご自身のmicroCMS環境に合わせて設定してください。

```.env.local
MICROCMS_SERVICE_DOMAIN="YOUR_SERVICE_DOMAIN"
MICROCMS_API_KEY="YOUR_API_KEY"
```

## 💻 開発

以下のコマンドを実行すると、開発サーバーが起動します。

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、サイトを確認できます。

## ☁️ デプロイ

このアプリケーションは、[Vercel](https://vercel.com/) へのデプロイが推奨されています。
リポジトリをVercelアカウントに連携し、環境変数を設定するだけで簡単にデプロイできます。
