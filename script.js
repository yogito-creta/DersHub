async function askAI() {
  const question = document.getElementById("question").value;
  const answerBox = document.getElementById("answer");

  answerBox.textContent = "Düşünüyorum lan 🤔...";

  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  answerBox.textContent = data.answer;
}