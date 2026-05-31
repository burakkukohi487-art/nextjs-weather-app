# nextjs-weather-app

Next.js練習の続き(天気チェックアプリ)

## デモ

https://nextjs-weather-app-ruby.vercel.app/

## 機能

- 都市名で現在の天気を検索
- 天気アイコンを表示
- 気温・体感温度・湿度・風速を表示

## 環境変数

`.env.local` に以下を設定：

```env
NEXT_PUBLIC_WEATHER_API_KEY=「api_key」
```

### 起動方法

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く。