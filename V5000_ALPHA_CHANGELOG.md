# KING OS V5000 Alpha-1 修改清單

## 本版基底
- 以 `KING-OS-V4206-V4096-HEADER-CLEAN-CARDS(1).zip` 為基底。

## 已修改
- `admin.html`

## 新增功能
1. 後台左側版本改為 **OS V5000**。
2. 新增 **V5000 即時營運 Dashboard**：今日入住、今日退房、今日在住、今日空房、今日營收、入住率、同步狀態。
3. 新增右下快速鍵提示：F2 姓名、F3 房號、F4 複製上一筆、Esc 離開。
4. 姓名欄位加入必填提示，避免未命名訂單。
5. 新增 V5000 build badge，方便現場確認版本。
6. 新增 `KING_OS_V5000_LAST_SNAPSHOT` 本機快照，儲存／取消／啟動時保留保護點。
7. Dashboard 會依目前旅館、今日日期與訂單資料自動計算。

## 保留功能
- 保留既有月曆、拖曳、雲端同步、LocalStorage 備份、Supabase 設定、快速填單、複製上一筆、取消釋放日期。

## 測試重點
1. 開啟 `admin.html` 後確認出現 V5000 Dashboard。
2. 新增訂單時姓名空白不可儲存。
3. 儲存訂單後 Dashboard 數字更新。
4. 按 F2 / F3 / F4 / Esc 測試快速鍵。
5. 檢查 Cloudflare 部署後手機、1920x1080 是否正常顯示。

## 建議 Commit 訊息
`KING OS V5000 Alpha-1 PMS dashboard and fast entry safety`
