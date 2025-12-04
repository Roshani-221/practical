document.getElementById("colorBtn").addEventListener("click", function () {
    const colors = ["#f4f4f4", "#ffe5e5", "#e5ffe5", "#e5ecff", "#fff0cc"];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
});
