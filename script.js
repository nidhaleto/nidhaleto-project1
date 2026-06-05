// انتظار تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {

  // تأثير عند الضغط على البطاقات (للهاتف)
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.add("active");

      setTimeout(() => {
        card.classList.remove("active");
      }, 200);
    });
  });

  // رسالة ترحيب (تظهر مرة واحدة فقط)
  if (!localStorage.getItem("visited_arabe")) {
    alert("hello in my siteweb to ");
    localStorage.setItem("visited_arabe", "true");
  }

});
