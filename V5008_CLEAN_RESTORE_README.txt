KING OS V5008 GITHUB CLEAN RESTORE

用途：
- 清除上一版 Working Copy 產生的 -2 重複檔問題
- 保留正確檔名：index.html / en.html / zh.html / cn.html / ja.html / ko.html / admin.html
- 保留 GitHub Pages 必要檔案：.nojekyll / _headers / service-worker.js / manifest.webmanifest

重要：
如果 GitHub 目前已經存在 *-2.html、*-2.css、*-2.js，單純 Upload ZIP 不會自動刪除遠端舊檔。
最乾淨方式：重新 Clone 乾淨版本後，用這包覆蓋，再 Commit + Push。

建議上傳方式：
1. 解壓縮本 ZIP
2. 用 Working Copy 重新 Clone Kingos-5001
3. 把本資料夾內容覆蓋進 Kingos-5001
4. Commit 訊息：V5008 clean restore
5. Push

不要使用：
- Keep Both
- 會產生 -2 的匯入方式

