# Vercelデプロイ戦略

このドキュメントは、`ridejob-cms`および`ssw-app`プロジェクトをVercelにデプロイするための戦略を概説します。

## 概要

このプロジェクトは、2つの独立したNext.jsアプリケーションを含むモノレポとして構成されています。
1.  `ridejob-cms`: メインのウェブサイト
2.  `ssw-app`: メインサイトのサブパス配下で提供されることを目的としたセカンダリアプリケーション

ここでの目標は、ユーザーが別のアプリケーションを操作していることに気づくことなく、メインドメインのサブパス（例: `https://ridejob.jp/ssw/`）経由で `ssw-app` にアクセスできるようにすることです。これは、Vercelのモノレポサポートと、リバースプロキシとして機能するNext.jsの`rewrites`機能を活用することで実現されます。

## Vercelプロジェクト設定

Vercel上で、同じGitリポジトリにリンクされた2つの個別のプロジェクトを作成する必要があります。

### 1. メインサイト (`ridejob-cms`)

-   **Vercelプロジェクト名**: メインアプリケーションの名前（例: `ridejob-cms`）
-   **フレームワークプリセット**: Next.js
-   **ルートディレクトリ**: `ridejob-cms`
-   **ドメイン**: プライマリドメイン（例: `ridejob.jp`）をこのプロジェクトに割り当てます。

### 2. サブサイト (`ssw-app`)

-   **Vercelプロジェクト名**: サブアプリケーションの名前（例: `ssw-app`）
-   **フレームワークプリセット**: Next.js
-   **ルートディレクトリ**: `ridejob-cms/ssw-app`
-   **ドメイン**: カスタムドメインは不要です。Vercelによって自動生成されるデプロイメントURL（例: `ssw-app-xxxx.vercel.app`）を使用します。

## Next.js設定

### `ssw-app` の設定

`ssw-app`内のすべてのアセットとリンクがサブパスから正しく機能するように、`next.config.mjs`に`basePath`を設定します。

**ファイル**: `ridejob-cms/ssw-app/next.config.mjs`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ssw',
  reactStrictMode: true,
  // ...その他の設定
};

export default nextConfig;
```

### `ridejob-cms` の設定 (リライトルール)

メインアプリケーションである`ridejob-cms`は、`/ssw`で始まるすべてのリクエストを、デプロイ済みの`ssw-app`にプロキシするように設定されます。これはNext.jsの設定で`rewrites`を使用して行います。

**ファイル**: `ridejob-cms/next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/ssw/:path*',
        // 重要: このURLを、Vercel上のssw-appの実際のデプロイメントURLに置き換えてください。
        destination: 'https://your-ssw-app-deployment-url.vercel.app/ssw/:path*',
      },
    ]
  }
};

export default nextConfig;
```

## デプロイ手順

1.  **`ssw-app`のデプロイ**: コードをプッシュし、まずVercel上で`ssw-app`プロジェクトをデプロイします。
2.  **デプロイメントURLの取得**: デプロイが完了したら、Vercelによって`ssw-app`に割り当てられた本番URLをコピーします。
3.  **設定の更新**: コピーしたURLを`ridejob-cms/next.config.ts`の`destination`フィールドに貼り付けます。
4.  **`ridejob-cms`のデプロイ**: 設定の変更をコミットしてプッシュします。Vercelが正しいリライトルールで`ridejob-cms`プロジェクトをデプロイします。

これらの手順の後、`https://your-domain.com/`はメインサイトを提供し、`https://your-domain.com/ssw/`は透過的に`ssw-app`を提供します。 