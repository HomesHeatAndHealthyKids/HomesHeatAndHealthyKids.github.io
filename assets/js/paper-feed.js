async function fetchPaperMetadata(doi) {
    const apiUrl = `https://api.crossref.org/works/${encodeURIComponent(doi)}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const title = data.message.title ? data.message.title[0] : "";
        let abstract = data.message.abstract ? data.message.abstract : "";
        abstract = abstract.length > 1000 ? abstract.substring(0, 1000) + "..." : abstract;
        let authors = data.message.author ? data.message.author.map(a => `${a.given} ${a.family}`).join(", ") : "";
        authors = authors.length > 300 ? authors.substring(0, 300) + "..." : authors;
        const publicationDate = data.message.published ? data.message.published["date-parts"][0].join("-") : "";

        return { title, abstract, authors, publicationDate, doi };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { title: "", abstract: "", authors: "", publicationDate: "", doi };
    }
}

async function displayPapers() {
    const hhhkDois = [
       "10.12688/wellcomeopenres.24692.1"
    ];
    await displayPaperList(hhhkDois, "hhhk");
}

async function displayPaperList(dois, containerId) {
    const container = document.getElementById(containerId);

    for (const doi of dois) {
        const paper = await fetchPaperMetadata(doi);
        const paperDiv = document.createElement("div");
        paperDiv.innerHTML = `
            <article class="research-card papers">
            <h3>${paper.title}</h3>
            <p class="meta">Peer-reviewed paper</p>
            <p><strong>Authors:</strong> ${paper.authors}</p>
            <p><strong>Publication Date:</strong> ${paper.publicationDate}</p>
            <p>${paper.abstract}</p>
            <a href="https://doi.org/${paper.doi}" target="_blank">Go to publication</a>
            <hr>
            </article>
        `;
        container.appendChild(paperDiv);
    }
}

window.onload = displayPapers;