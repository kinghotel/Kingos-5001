KING OS V312 後台系統說明

後台網址：
- 電腦 / 平板：admin.html
- 訂房後台入口：booking-admin.html（會自動導向 admin.html#booking）
- 清潔人員入口：cleaning-staff.html
- 手機版後台：mobile-admin.html

測試登入：
- 帳號：admin
- 密碼：87654321

V312 新增 / 修正：
1. 後台總覽：可查看最新訂單、入住率、待清掃、客人問題、訂單金額。
2. 訂單後台：可搜尋訂單、旅館、房型、付款狀態與入住狀態。
3. 排房 / 房況：可查看每間房目前狀態：空房、入住、已排、待清掃、維修。
4. 清潔後台：以看板方式查看待清掃、進行中、完成、維修。
5. AI 問答同步：後台 AI 回答新增或修改後，會同步到 AI 管家頁面。
6. 未來一年月價格：以 12 個月份欄位調整每個旅館 / 房型售價。
7. 價格資料會儲存在 localStorage：king_monthly_prices_v312。
8. AI 問答資料會儲存在 localStorage：king_ai_custom_faq_v312。

正式營運建議：
- Cloudflare Pages 網址可設定 /admin.html 作為管理入口。
- 後台一定要加 Cloudflare Access 或 Worker Token，不建議只靠前端密碼。
- Beds24 / Stripe / PayPay / Email 發送應放 Cloudflare Worker，不要放前端 HTML。
- 清潔人員入口可單獨設定簡單密碼或限定裝置 IP。
