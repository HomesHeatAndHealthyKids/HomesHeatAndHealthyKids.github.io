document.addEventListener("DOMContentLoaded", () => {
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".research-card");


buttons.forEach(button => {
button.addEventListener("click", () => {
buttons.forEach(b => b.classList.remove("active"));
button.classList.add("active");


const filter = button.dataset.filter;


cards.forEach(card => {
if (filter === "all" || card.classList.contains(filter)) {
card.classList.remove("hidden");
} else {
card.classList.add("hidden");
}
});
});
});
});