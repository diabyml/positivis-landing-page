const hamberger = document.querySelector(".hamburger");

hamberger.addEventListener("click", () => {
  const navigation = document.querySelector(".mobile-navigation");
  navigation.classList.toggle("active");
});
