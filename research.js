const researchItems = [
{
title: "Cold Homes and Child Health",
type: "Blog",
categories: ["blogs"],
image: "images/research/cold-homes.jpg",
description: "Why housing warmth matters for children’s health.",
url: "#"
},
{
title: "Energy Efficiency and Hospital Admissions",
type: "Paper",
categories: ["papers"],
image: "images/research/energy-paper.jpg",
description: "Statistical analysis of energy ratings and paediatric admissions.",
url: "#"
},
{
title: "Homes, Heat and Healthy Kids",
type: "Presentation",
categories: ["presentations"],
image: "images/research/presentation.jpg",
description: "Presented at the UK Public Health Science Conference.",
url: "#"
}
];


function loadResearch() {
const grid = document.getElementById('researchGrid');


researchItems.forEach(item => {
const card = document.createElement('article');
card.className = `research-card ${item.categories.join(' ')}`;


card.innerHTML = `
<div class="card-image">
<span class="card-badge">${item.type}</span>
<img src="${item.image}" alt="${item.title}">
</div>
<div class="card-content">
<h3>${item.title}</h3>
<p>${item.description}</p>
<a href="${item.url}">Read more →</a>
</div>
`;


grid.appendChild(card);
});
}


function setupFilters() {
const buttons = document.querySelectorAll('.filters button');


buttons.forEach(button => {
button.addEventListener('click', () => {
buttons.forEach(b => b.classList.remove('active'));
button.classList.add('active');


const filter = button.dataset.filter;
document.querySelectorAll('.research-card').forEach(card => {
card.classList.toggle('hidden', filter !== 'all' && !card.classList.contains(filter));
});
});
});
}


document.addEventListener('DOMContentLoaded', () => {
loadResearch();
setupFilters();
});
```javascript
async function loadResearch() {
const response = await fetch('research.json');
const items = await response.json();


const grid = document.getElementById('researchGrid');


items.forEach(item => {
const card = document.createElement('article');
card.className = `research-card ${item.categories.join(' ')}`;


card.innerHTML = `
<div class="card-image">
<span class="card-badge">${item.type}</span>
<img src="${item.image}" alt="${item.title}">
</div>
<div class="card-content">
<h3>${item.title}</h3>
<p>${item.description}</p>
<a href="${item.url}">Read more →</a>
</div>
`;


grid.appendChild(card);
});
}

function setupFilters() {
const buttons = document.querySelectorAll('.filters button');


buttons.forEach(button => {
button.addEventListener('click', () => {
buttons.forEach(b => b.classList.remove('active'));
button.classList.add('active');


const filter = button.dataset.filter;
document.querySelectorAll('.research-card').forEach(card => {
card.classList.toggle('hidden', filter !== 'all' && !card.classList.contains(filter));
});
});
});
}


document.addEventListener('DOMContentLoaded', async () => {
await loadResearch();
setupFilters();
});
```javascript
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