### **【再作成】ridejob.jp 要件定義**

#### **2. 技術スタック**
-   **フレームワーク**: Next.js (App Router)
-   **言語**: TypeScript
-   **スタイリング**: Tailwind CSS
-   **CMS**: microCMS
-   **デプロイ先**: Vercel

#### **3. ページ構成と機能**

| ページ名 | 新URL | 実装方法 / 備考 |
| :--- | :--- | :--- |
| トップページ | `/` | 新着記事・カテゴリ一覧などを表示 |
| カテゴリ一覧 | `/category/[slug]` | 記事一覧 + ページネーション |
| 記事詳細 | `/blogs/[slug]` | 本文、目次、関連記事などを表示 |
| **特定技能外国人LP** | `/ssw` | **CMSを使わず静的に実装** |
| **ライドジョブとは** | `/about` | **CMSを使わず静的に実装** |
| **お問い合わせ** | `/contact` | **フォーム送信内容はLarkにWebhook通知** |

#### **4. CMS (microCMS) のAPI設計**
-   **ブログ (`blogs`)**
    -   `title` (テキスト)
    -   `content` (リッチエディタ)
    -   `eyecatch` (画像)
    -   `category` (カテゴリへの参照)
    -   `slug` (テキスト): **URL用。**
-   **カテゴリ (`categories`)**
    -   `name` (テキスト)
    -   `slug` (テキスト)
