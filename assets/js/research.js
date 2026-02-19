/*
  Data structure example (you can keep adding objects like this)
*/
const researchItems = [
	{
        "title": "Cold Homes and Child Health",
        "type": "Engagement",
        "date": "2025-09-01",
        "categories": ["engagements"],
        "image": "images/favicon.png",
        "description": "Why housing warmth matters for children’s health.",
        "url": "#"
	},
	{
        "title": "Energy Efficiency and Hospital Admissions",
        "type": "Paper",
        "date": "2025-10-01",
        "categories": ["papers"],
        "image": "images/pic03.jpg",
        "description": "Statistical analysis of energy ratings and paediatric admissions.",
        "url": "#"
	},
	{
        "title": "Homes, Heat and Healthy Kids",
        "type": "Presentation",
        "date": "2025-11-01",
        "categories": ["presentations"],
        "image": "images/banner.jpg",
        "description": "Presented at the UK Public Health Science Conference.",
        "url": "#"
	},
    {
        "title": "The Impact of Home Energy Efficiency Measures on Children’s Respiratory Health",
        "type": "Paper",
        "categories": ["papers"],
        "image": "images/pic01.jpg",
        "date": "2025-12-01",
        "description": "Scoping review examining the association between home energy efficiency measures and children's respiratory health, and exploring potential downsides.",
        "url": "https://doi.org/10.12688/wellcomeopenres.24692.1"
    },
    {
        "title": "Early Childhood Respiratory Infections - Plan",
        "type": "Presentation",
        "categories": ["presentations"],
        "image": "images/pic02.jpg",
        "date": "2026-03-10",
        "description": "This talk will describe some of the planned analysis of a linked dataset containing housing data, primary and secondary healthcare – infection counts stratified by housing characteristics, socioeconomic measures, local climate, and annual pollution exposures.",
        "url": "https://doi.org/10.12688/wellcomeopenres.24692.1"
    },
    {
        "title": "Household Interventions",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "images/pic03.jpg",
        "date": "2026-04-10 - 2026-04-12",
        "description": "The team will be at Dynamic Earth to engage with children about the impact of housing on health, and to explore potential interventions to improve health outcomes.",
        "url": "https://doi.org/10.12688/wellcomeopenres.24692.1"
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
        <strong>${item.title}</strong>
        <p>${item.date ? `${item.date} : ` : ''}${item.description}</p>
        <a href="${item.url}" target="_blank" rel="noopener">Read more →</a>
      </div>
    `;

    grid.appendChild(card);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  loadResearch();
  setupFilters();
});



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
  setupFilters();
});

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