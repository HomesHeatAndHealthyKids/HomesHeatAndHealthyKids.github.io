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
        "title": "7 Days, 100 Scientists - Dynamic Earth",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "images/resources/chilly_people.png",
        "date": "2026-04-10",
        "description": "The team were at Dynamic Earth for 3 days to engage with children about the impact of housing on health.",
        "url": "https://www.edinburghscience.co.uk/wp-content/uploads/2026/02/ESF-Programme-2026.pdf"
  },
  {
        "title": "Four Days Inside Government",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "images/resources/arctic_blast.png",
        "date": "2026-04-20",
        "description": "Livvy Swann reflects on her Royal Society Policy Pairing Scheme experience, exploring policymaking and science communication",
        "url": "https://usher.ed.ac.uk/news-events/features/four-days-inside-government-reflections-from-the-royal-society-policy-pairing-scheme"
  },
  {
        "title": "Health and Housing Linkage Across TREs",
        "type": "Presentation",
        "categories": ["presentations"],
        "image": "images/resources/house_group.png",
        "date": "2026-05-27",
        "description": "Dr Jess Butler (Lead Data Scientist, NHS Grampian)  presented on her work linking Health and Housing Data across Trusted Research Environments. The project used a novel linkage of housing and health data to analyse the health of vulnerable populations, meet local needs and track impact",
        "url": "https://teams.microsoft.com/l/meetingrecap?driveId=b%21fmrZLNnF0EqtA53iQU_xMYUAfovptFxAocbWexc5ke9hIHLFeqw3QphVCCvBHfeh&driveItemId=01QWYW7NJQY6F673P7RZD2SWB7JEFZMDBK&sitePath=https%3A%2F%2Fuoe-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Foswann_ed_ac_uk%2FIQAwx4vv7f-OR6lYP0kLlgwqAaHY7KYc99WfwKj0wLxddXM&fileUrl=https%3A%2F%2Fuoe-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Foswann_ed_ac_uk%2FIQAwx4vv7f-OR6lYP0kLlgwqAaHY7KYc99WfwKj0wLxddXM&iCalUid=040000008200E00074C5B7101A82E00800000000346BE8A23AE8DC010000000000000000100000006FAE66E514897F45893934224A962080&threadId=19%3Ameeting_OTUzNDI4MDEtMzM4Yy00NjQ5LWIzNzMtZTM4ZWE4ZWY4YTQw%40thread.v2&organizerId=6b008deb-e397-4785-a709-e89e9372c23a&tenantId=2e9f06b0-1669-4589-8789-10a06934dc61&callId=534168b4-8680-46f5-8dda-c940ab5c6831&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapChiclet"
  },
  {
  
        "title": "Healthy Urban Places Seminar - Healthy Homes Special",
        "type": "Presentation",
        "categories": ["presentations"],
        "image": "images/resources/boilers.png",
        "date": "2026-03--25",
        "description": "Livvy talks to Born In Bradford about understanding the connections between underheated homes and preschool children's respiratory health in Scotland.",
        "url": "https://borninbradford.nhs.uk/events/healthy-urban-places-seminar-healthy-homes-special/"
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
        "title": "Glasgow Science Festival - Staying Warm and Well",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "https://www.gla.ac.uk/media/Media_1065394_smxx.jpg",
        "date": "2026-06-13",
        "description": "The team will be at Glasgow University to engage with children about the impact of housing on health, and to explore potential interventions to improve health outcomes.",
        "url": "https://www.gla.ac.uk/events/sciencefestival/gsf2026/cheers/programme/allevents/arcdgms/"
  },
  {        
        "title": "Castlebrae Community Science Festival",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "images/resources/parent_with_child.png",
        "date": "2026-03-27",
        "description": "The Community Science Festival is happening at Castlebrae Community Campus! Join us for an afternoon filled with exciting experiments, hands-on activities, and interactive demonstrations.",
        "url": "https://www.eventbrite.co.uk/e/community-science-festival-castlebrae-2026-tickets-1983762665534?aff=oddtdtcreator"
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
	},
    {
        "title": "Homes, Heat and Healthy Kids - UKIEG Conference",
        "type": "Presentation",
        "date": "2026-06-25",
        "categories": ["presentations"],
        "image": "images/resources/house_with_germs.png",
        "description": "Tim Wilding presented on the SHCS. Caroline presented on the Warmer Kiwi's study. And Eleanor Harrison won best poster presentation.",
        "url": "https://hestia-network.org/ukieg-conference-agm/"
	},
    {        
        "title": "Orkney Science Festival",
        "type": "Engagement",
        "categories": ["engagements"],
        "image": "images/resources/parent_with_child.png",
        "date": "2026-09-05",
        "description": "The Orkney International Science Festival will return this year. Join the team for an exciting time in the beatiful Orkney Islands.",
        "url": "https://www.orkney.com/events/orkney-international-science-festival"
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
  const comingUpButton = document.querySelector(".news button:last-child");
  
  comingUpButton.addEventListener("click", () => {
    cards.forEach(card => {
        filter = "";
        buttons.forEach( b =>
                        { 
                            if (b.classList.contains("active")) {filter = b.dataset.filter;} 
                        });

        const date = new Date(card.querySelector(".card-content p").textContent.trim());
        if (date > new Date() && (card.classList.contains(filter) || filter === "all")) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }

    });
  });

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