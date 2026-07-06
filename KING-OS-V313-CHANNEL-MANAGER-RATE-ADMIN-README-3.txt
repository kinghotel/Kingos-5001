KING OS V313 Channel Manager / Rate Admin 說明

新增後台網址：
- admin.html#channel ：OTA 同步 / 比價建議
- rate-admin.html ：直接進入 OTA 同步 / 比價後台

新增功能：
1. KING OS 後台可設定 Channel Manager 供應商。
2. 可選 Airbnb / Agoda / Booking.com / Google Hotels 同步對象。
3. 可選同步項目：房價、房況、訂單、最少住宿天數與停售規則。
4. 新增附近旅館比價建議：輸入附近最低價、平均價、最高價、入住率、日期類型，即時計算建議售價。
5. 建議售價可套用到未來一年月價格表。

重要：
目前 V313 是前端後台管理與本機資料同步版本。
正式同步到 Airbnb / Agoda / Booking.com 必須透過 Beds24 或其他 Channel Manager 的 API，由 Cloudflare Worker 端保存 API Key 並執行同步。
不要把 Beds24 / OTA API Key 寫在前端 HTML 或 JS。

建議正式架構：
KING OS 後台 → Cloudflare Worker API → Beds24 Channel Manager → Airbnb / Agoda / Booking.com / Google Hotels
