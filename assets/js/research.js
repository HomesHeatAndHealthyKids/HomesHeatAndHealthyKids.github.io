/*
  Data structure example (you can keep adding objects like this)
*/
const researchItems = [
  {
        "title": "Beyond Remuneration for Patient and Public Involvement Group Members",
        "type": "Presentation",
        "categories": ["presentations"],
        "image": "images/resources/house_with_heart.png",
        "date": "16th July 2026",
        "description": "Tracy will be displaying her poster at International Population Data Linkage Network 2026 in Rotterdam.",
        "url": "https://ipdln.org/2026-ipdln-conference/"
  },
  {
        "title": "Household Interventions",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "images/resources/chilly_people.png",
        "date": "10th April 2026",
        "description": "The team will be at Dynamic Earth for 3 days to engage with children about the impact of housing on health, and to explore potential interventions to improve health outcomes.",
        "url": "https://www.edinburghscience.co.uk/event/university-of-edinburgh-7-days-100-scientists/"
  },
  {
        "title": "Early Childhood Respiratory Infections - Plan",
        "type": "Presentation",
        "categories": ["presentations"],
        "image": "images/resources/radiator.png",
        "date": "10th March 2026",
        "description": "This talk will describe some of the planned analysis of a linked Lothians-region dataset containing housing data, primary and secondary healthcare.",
        "url": "https://www.strath.ac.uk/engineering/architecture/"
  },
  {
        "title": "The Impact of Home Energy Efficiency Measures on Children’s Respiratory Health",
        "type": "Paper",
        "categories": ["papers"],
        "image": "images/resources/jumper_with_concerns.jpg",
        "date": "22nd November 2025",
        "description": "Scoping review examining the association between home energy efficiency measures and children's respiratory health, and exploring potential downsides.",
        "url": "https://doi.org/10.12688/wellcomeopenres.24692.1"
  },
	{
        "title": "Homes, Heat and Healthy Kids - HDR UK Conference",
        "type": "Presentation",
        "date": "15th October 2025",
        "categories": ["presentations"],
        "image": "images/resources/house_group.png",
        "description": "Livvy Swann presents on the Homes, Heat and Healthy Kids study and the role of underheated homes in preschool respiratory health at the Health Data Research UK Conference.",
        "url": "https://www.hdruk.ac.uk/about/hdr-uk-conference/health-data-research-uk-conference-2025-agenda/"
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
        <h4>${item.title}</h4>
        <p>${item.date ? `<span class="icon fa-regular fa-calendar accent1"></span> ${item.date}` : ''}</p>
        <p>${item.description}</p>
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