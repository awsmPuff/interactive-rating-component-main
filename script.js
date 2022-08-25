const rates = document.querySelector(".rate"),
      thankYou = document.querySelector(".thank-you"),
      submitBtn = document.querySelector(".submit"),
      result = document.querySelector(".rating"),
      nums = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    rates.classList.add("hidden");
})

nums.forEach(num => {
    num.addEventListener("click", () => {
        result.innerHTML = num.innerHTML;
    })
});
