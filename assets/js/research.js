/*
  Data structure example (you can keep adding objects like this)
*/

const researchItems = [
  {
        "title": "Beyond Remuneration for Patient and Public Involvement Group Members",
        "type": "Presentation",
        "categories": ["presentations"],
        "image": "images/resources/house_with_heart.png",
        "date": "2026-07-16",
        "description": "Tracy will be displaying her poster at International Population Data Linkage Network 2026 in Rotterdam.",
        "url": "https://ipdln.org/2026-ipdln-conference/"
  },
  {
        "title": "Household Interventions",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "images/resources/chilly_people.png",
        "date": "2026-04-10",
        "description": "The team will be at Dynamic Earth for 3 days to engage with children about the impact of housing on health, and to explore potential interventions to improve health outcomes.",
        "url": "https://www.edinburghscience.co.uk/event/university-of-edinburgh-7-days-100-scientists/"
  },
  {
        "title": "Early Childhood Respiratory Infections - Plan",
        "type": "Presentation",
        "categories": ["presentations"],
        "image": "images/resources/radiator.png",
        "date": "2026-03-10",
        "description": "This talk will describe some of the planned analysis of a linked Lothians-region dataset containing housing data, primary and secondary healthcare.",
        "url": "https://www.strath.ac.uk/engineering/architecture/"
  },
  {
        "title": "The Impact of Home Energy Efficiency Measures on Children’s Respiratory Health",
        "type": "Paper",
        "categories": ["papers"],
        "image": "images/resources/jumper_with_concerns.jpg",
        "date": "2025-11-22",
        "description": "Scoping review examining the association between home energy efficiency measures and children's respiratory health, and exploring potential downsides.",
        "url": "https://doi.org/10.12688/wellcomeopenres.24692.1"
  },
	{
        "title": "Homes, Heat and Healthy Kids - HDR UK Conference",
        "type": "Presentation",
        "date": "2025-10-15",
        "categories": ["presentations"],
        "image": "images/resources/house_group.png",
        "description": "Livvy Swann presents on the Homes, Heat and Healthy Kids study and the role of underheated homes in preschool respiratory health at the Health Data Research UK Conference.",
        "url": "https://www.hdruk.ac.uk/about/hdr-uk-conference/health-data-research-uk-conference-2025-agenda/"
	}
  ];

  // Ideally this would be loaded from a separate Javascript or API, but for simplicity we're hardcoding it here.
 async function loadMediumJSON(options = {}) {
    const {
        limit = null,
        cacheMinutes = 30
    } = options;

    const cacheKey = "mediumFeedCache";
    const cacheTTL = cacheMinutes * 60 * 1000;

    const cached = getCachedFeed(cacheKey, cacheTTL);

    // 🔥 If cached exists, return immediately (fast UI)
    if (cached) {
        // Trigger background refresh (don’t await)
        refreshInBackground(cacheKey);

        return applyLimit(cached, limit);
    }

    // No cache → fetch normally
    const fresh = await fetchMediumFeed();
    setCachedFeed(cacheKey, fresh);

    return applyLimit(fresh, limit);
}

async function refreshInBackground(cacheKey) {
    try {
        const freshData = await fetchMediumFeed();
        const current = getCachedFeed(cacheKey, Infinity);

        // Compare JSON to detect change
        if (JSON.stringify(freshData) !== JSON.stringify(current)) {
            setCachedFeed(cacheKey, freshData);

            // 🔔 Notify the app that new data is available
            window.dispatchEvent(
                new CustomEvent("mediumFeedUpdated", {
                    detail: freshData
                })
            );
        }
    } catch (err) {
        console.log("Background refresh failed (ignored):", err);
    }
}
function getCachedFeed(key, ttl) {
    const stored = localStorage.getItem(key);

    if (!stored) return null;

    const parsed = JSON.parse(stored);

    if (Date.now() - parsed.timestamp > ttl) {
        localStorage.removeItem(key);
        return null;
    }

    return parsed.data;
}

function setCachedFeed(key, data) {
    const payload = {
        timestamp: Date.now(),
        data: data
    };

    localStorage.setItem(key, JSON.stringify(payload));
}
function applyLimit(array, limit) {
    if (!limit) return array;
    return array.slice(0, limit);
}

async function fetchMediumFeed() {
    const mediumNames = ["@hhhk_83035"];
    const endpoint = "https://api.rss2json.com/v1/api.json";

    const responses = await Promise.all(
        mediumNames.map(name =>
            fetch(`${endpoint}?rss_url=${encodeURIComponent(
                `https://medium.com/feed/${name}`
            )}`)
        )
    );

    const jsonData = await Promise.all(responses.map(r => r.json()));

    const articles = [];

    jsonData.forEach(feed => {
        if (feed.status === "ok") {
            feed.items.forEach(item => {
                articles.push(transformItem(item));
            });
        }
    });

    articles.sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate));

    return articles;
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;

    const trimmed = text.substring(0, maxLength);
    return trimmed.substring(0, trimmed.lastIndexOf(" ")) + "...";
}

function transformItem(item) {
    const cleanDescription = stripHtml(item.description);

    return {
        title: item.title,
        type: "Blog",
        date: item.pubDate,
        categories: ["blogs"],
        image: extractImage(item.description),
        description: cleanDescription,
        url: item.link
    };
}
function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}

function extractImage(description) {
    const match = description.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : "images/resources/radiator.png";
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


function mergeFeeds(blogArray, otherArray) {
    const combined = [...blogArray, ...otherArray];

    combined.sort((a, b) => new Date(b.date) - new Date(a.date));

    return combined;
}

async function loadResearch() {

  const mediumItems = await loadMediumJSON();
  const grid = document.getElementById('researchGrid');
  grid.innerHTML = ''; // Clear existing content
  const allItems = mergeFeeds(researchItems, mediumItems);

  
  allItems.forEach(item => {
    const card = document.createElement('article');
    card.className = `research-card ${item.categories.join(' ')}`;

    card.innerHTML = `
      <div class="card-image">
        <span class="card-badge">${item.type}</span>
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="card-content">
        <h4>${item.title}</h4>
        <p>${item.date ? `<span class="icon fa-regular fa-calendar accent1"></span> ${formatDate(item.date)}` : ''}</p>
        <p>${truncateText(item.description, 150)}</p>
        <a href="${item.url}" target="_blank" rel="noopener">Read more →</a>
      </div>
    `;

    grid.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", async () => {
    loadResearch();

    // 🔔 Listen for background updates
    window.addEventListener("mediumFeedUpdated", (event) => {
        console.log("Feed updated in background");
        loadResearch(); // Re-render with new data
    });
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