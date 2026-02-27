// mediumService.js

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
async function loadMedium() {

  const mediumItems = await loadMediumJSON({
    limit: 2,          // Show only the latest 5 items
  });
  const grid = document.getElementById('researchGrid');
  grid.innerHTML = ''; // Clear existing content
 
  mediumItems.forEach(item => {
    const card = document.createElement('article');
    card.className = `frontpage-card ${item.categories.join(' ')}`;

    card.innerHTML = `
      <div class="frontcard-image">
        <span class="card-badge">${item.type}</span>
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="card-content">
        <h4>${item.title}</h4>
        <p>${item.date ? `<span class="icon fa-regular fa-calendar accent1"></span> ${item.date}` : ''}</p>
        <p>${truncateText(item.description, 250)}</p>
        <a href="${item.url}" target="_blank" rel="noopener">Read more →</a>
      </div>
    `;

    grid.appendChild(card);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  loadMedium();
      // 🔔 Listen for background updates
  window.addEventListener("mediumFeedUpdated", (event) => {
        console.log("Feed updated in background");
        loadMedium(); // Re-render with new data
    });
});
