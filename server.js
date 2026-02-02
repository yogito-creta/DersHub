const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// 🔥 AI'ye soru soran endpoint
app.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.json({ answer: "Bune len, soru boş 😐" });
  }

  try {
    // ⚠️ BURAYA GROK API BAĞLAYACAKSIN
    // Şimdilik demo cevap
    const aiAnswer = `
Bu soru şöyle çözülür:
1) Konuyu tanı
2) Mantığını anla
3) Benzer örnek çöz

Direkt cevap vermiyorum lan, öğren diye 😎
`;

    res.json({ answer: aiAnswer });
  } catch (err) {
    res.json({ answer: "AI çöktü lan 💥" });
  }
});

app.listen(PORT, () => {
  console.log("DersHub çalışıyor len 👉 " + PORT);
});