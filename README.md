# 雨瑤美業 — 一頁式形象網站

顱骶鬆筋・日式小顏・芳香療癒・養髮調理

## 專案結構

```
massage/
├── index.html   # 主頁面（HTML）
├── styles.css   # 樣式（純 CSS，無框架）
├── script.js    # 互動邏輯（行動選單、滾動動畫）
└── README.md
```

## 頁面區塊

| 區塊 | 說明 |
|------|------|
| Hero | 主視覺 + 雙 CTA（LINE 預約 / 看服務價格） |
| 為什麼選我們 | 三大特色（專業療癒師 / 獨立空間 / 嚴選精油） |
| 服務項目 | 四大療程卡片 + 價格 + 首體優惠 |
| 環境介紹 | 三張空間照片 Gallery |
| 客戶體驗 | 六則五星真實回饋 |
| 常見問題 | 五題 FAQ（手風琴） |
| 預約 CTA | LINE 加好友 + LINE ID 搜尋 |
| Footer | 營業時間 / 聯絡方式 |

## 使用方式

純靜態網站，不需安裝任何套件，直接用瀏覽器開啟即可：

```bash
open index.html
```

或部署至任意靜態託管服務（GitHub Pages、Netlify、Vercel 等）。

## 自訂修改

- **LINE 連結**：搜尋 `lin.ee/MrgSyQm` 或 `@430iuwis` 替換為你的 LINE 連結與 ID
- **價格**：在 `index.html` 的 `.service-card__meta` 區塊修改
- **圖片**：替換 `<img>` 與 `background-image` 的 URL 為自有圖片
- **配色**：在 `styles.css` 開頭的 `:root` 區塊調整 CSS 變數

## 技術

- 純 HTML / CSS / JavaScript，零相依套件
- Google Fonts（Noto Serif TC + Noto Sans TC）
- RWD 響應式設計（手機 / 平板 / 桌面）
- IntersectionObserver 滾動淡入動畫
- 右下角浮動 LINE 預約按鈕
