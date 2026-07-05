KING OS V5000 PRO 整合版

整合來源：
1. KING-OS-V1200-SMART-ROOM-ASSIGNMENT-FIX.zip 作為主架構，保留後台、智慧排房、assets、api、service-worker、manifest。
2. KING-OS-V4206-V4096-HEADER-CLEAN-CARDS.zip 覆蓋最新前台 UI、Header、Cards、首頁與新版 admin.html。

部署方式：
- GitHub Pages / Cloudflare Pages 請上傳「解壓後的全部檔案」，不要只上傳 ZIP。
- 根目錄必須能看到 index.html。
- 後台入口：/admin.html 或 /admin/

重要保留：
- 前台首頁 index.html
- 後台 admin.html
- assets/、api/、config/、data/
- service-worker.js、manifest.webmanifest
- 舊版 localStorage 訂單讀取與合併邏輯
- Supabase 設定與同步預留

版本：V5000-PRO-MERGED
