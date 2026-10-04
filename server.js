const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// คีย์ที่อนุญาต
const VALID_KEYS = [
  "STELLA-2026",
  "STELLA-FREE"
];

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Stella Key System</title>
      </head>
      <body style="font-family:Arial;text-align:center;padding:50px">
        <h1>🌌 Stella HUB Key System</h1>
        <p>ระบบคีย์ทำงานแล้ว</p>
        <p>ใส่คีย์เพื่อใช้งาน Stella HUB</p>
      </body>
    </html>
  `);
});

app.get("/check", (req, res) => {
  const key = req.query.key;

  if (!key) {
    return res.json({
      success: false,
      message: "กรุณาใส่คีย์"
    });
  }

  if (VALID_KEYS.includes(key)) {
    return res.json({
      success: true,
      message: "คีย์ถูกต้อง"
    });
  }

  return res.json({
    success: false,
    message: "คีย์ไม่ถูกต้อง"
  });
});

app.listen(PORT, () => {
  console.log(`Stella Key System running on port ${PORT}`);
});
