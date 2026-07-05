KING OS Build 1504 Front Group Booking Test

新增前台團體訂房功能：
1. booking.html 加入「訂房模式」：一般訂房、團體訂房 4–30人、大型團體 31人以上。
2. 團體模式可輸入團體總人數，系統自動計算需要房間數。
3. 前台可產生 KING / AMIN / I DO 本館方案與跨館 AI 方案。
4. 送出訂單後，order 物件新增 groupReservation，後台可判斷為 group_booking。
5. 團體訂單會保留人數、房數、房型組合、跨館方案資料，方便後台智慧排房。
6. CSS 加入 group-plan-card / group-planner 樣式，維持黑金風格。

測試路徑：booking.html
測試方式：選擇訂房模式 → 團體訂房 4–30人 或 大型團體 31人以上 → 輸入人數 → 查詢可訂方案 → 選擇團體方案 → 填寫資料 → 送出。
