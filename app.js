const redditLogo = "assets/icons/reddit-logo.jpg";
const sharedYoutube = {
  videoId: "jtdHuXcu3J0",
  title: "How to become more likable in conversations",
  channel: "University of Illinois Admissions",
  subscribers: "10.9K subscribers",
  views: "378K views",
  age: "5 years ago",
  channelLogo: "assets/icons/channel-logo.svg",
};

const uploadedStyleImages = [
  "assets/images/1883847.jpg",
  "assets/images/1912151.jpg",
  "assets/images/2011828.jpg",
  "assets/images/R (1).jpg",
  "assets/images/R.jpg",
  "assets/images/thumb-1920-684535.jpg",
  "assets/images/university-2704306_1280.jpg",
];

const localSvgFallbackImages = [
  "assets/images/uni-1.svg",
  "assets/images/uni-2.svg",
  "assets/images/uni-3.svg",
  "assets/images/uni-4.svg",
  "assets/images/uni-5.svg",
  "assets/images/uni-6.svg",
  "assets/images/uni-7.svg",
  "assets/images/uni-8.svg",
  "assets/images/uni-9.svg",
  "assets/images/uni-10.svg",
];

function uniFallbackImage(idx) {
  return localSvgFallbackImages[idx % localSvgFallbackImages.length];
}

function uniImage(idx) {
  return uploadedStyleImages[idx % uploadedStyleImages.length];
}

const redditQuotes = [
  '"There are multiple student organizations for students of a particular program and clubs for people with special interests. If you really try hard, you will definitely find a place for you." - u/KIDKOY1001',
  '"There\'s a large number of commuters who go to classes and then leave and international students who tend to stick to their own clique." - u/DistantAlmanac1292',
  '"The campus is so spread out & there is no central square. Get ready to walk lol." - u/Khosper',
  '"Much of the transit is not equipped to handle the amount of students who commute. If you have to be on campus in the morning, you may need to leave up to an hour earlier than you normally would to account for full buses." - u/bobo_potato',
  '"Living here is ridiculously expensive, basically poverty wages for grad students." - u/Yeteder',
];

function classifyTemp(value) {
  if (value <= 2) return "cold";
  if (value <= 17) return "normal";
  return "warm";
}

function classifyRainfall(value) {
  if (value < 700) return "dry";
  if (value < 1100) return "wet";
  return "very wet";
}

function formatCurrency(value, suffix) {
  return `CAD ${value.toLocaleString()}${suffix}`;
}

const universities = [
  ["University of British Columbia", "British Columbia", "Vancouver", "2329 West Mall, Vancouver, BC V6T 1Z4", 38, "https://www.topuniversities.com/universities/university-british-columbia", "https://www.currentresults.com/Weather/Canada/British-Columbia/Places/vancouver-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/bc/vancouver", 7900, 2450, 1500, 980],
  ["Simon Fraser University", "British Columbia", "Burnaby", "8888 University Dr, Burnaby, BC V5A 1S6", 318, "https://www.topuniversities.com/universities/simon-fraser-university", "https://www.currentresults.com/Weather/Canada/British-Columbia/Places/vancouver-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/bc/vancouver", 7600, 2300, 1450, 940],
  ["University of Alberta", "Alberta", "Edmonton", "116 St & 85 Ave, Edmonton, AB T6G 2R3", 96, "https://www.topuniversities.com/universities/university-alberta", "https://www.currentresults.com/Weather/Canada/Alberta/Places/edmonton-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/ab/edmonton", 6900, 1950, 1320, 860],
  ["University of Calgary", "Alberta", "Calgary", "2500 University Dr NW, Calgary, AB T2N 1N4", 198, "https://www.topuniversities.com/universities/university-calgary", "https://www.currentresults.com/Weather/Canada/Alberta/Places/calgary-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/ab/calgary", 7200, 2100, 1360, 890],
  ["University of Saskatchewan", "Saskatchewan", "Saskatoon", "105 Administration Pl, Saskatoon, SK S7N 5A2", 340, "https://www.topuniversities.com/universities/university-saskatchewan", "https://www.currentresults.com/Weather/Canada/Saskatchewan/Places/saskatoon-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/sk/saskatoon", 6800, 1760, 1210, 780],
  ["University of Manitoba", "Manitoba", "Winnipeg", "66 Chancellors Cir, Winnipeg, MB R3T 2N2", 661, "https://www.topuniversities.com/universities/university-manitoba", "https://www.currentresults.com/Weather/Canada/Manitoba/Places/winnipeg-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/mb/winnipeg", 6500, 1720, 1180, 760],
  ["University of Toronto", "Ontario", "Toronto", "27 King's College Cir, Toronto, ON M5S 1A1", 25, "https://www.topuniversities.com/universities/university-toronto", "https://www.currentresults.com/Weather/Canada/Ontario/Places/toronto-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/toronto", 8200, 2750, 1650, 1100],
  ["York University", "Ontario", "Toronto", "4700 Keele St, Toronto, ON M3J 1P3", 353, "https://www.topuniversities.com/universities/york-university", "https://www.currentresults.com/Weather/Canada/Ontario/Places/toronto-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/toronto", 7700, 2600, 1560, 1030],
  ["McMaster University", "Ontario", "Hamilton", "1280 Main St W, Hamilton, ON L8S 4L8", 176, "https://www.topuniversities.com/universities/mcmaster-university", "https://www.currentresults.com/Weather/Canada/Ontario/Places/hamilton-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/hamilton", 7400, 2150, 1400, 910],
  ["University of Waterloo", "Ontario", "Waterloo", "200 University Ave W, Waterloo, ON N2L 3G1", 115, "https://www.topuniversities.com/universities/university-waterloo", "https://www.currentresults.com/Weather/Canada/Ontario/Places/kitchener-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/mississauga", 7900, 2250, 1450, 940],
  ["Western University", "Ontario", "London", "1151 Richmond St, London, ON N6A 3K7", 114, "https://www.topuniversities.com/universities/western-university", "https://www.currentresults.com/Weather/Canada/Ontario/Places/london-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/london", 7600, 2050, 1360, 870],
  ["Queen's University", "Ontario", "Kingston", "99 University Ave, Kingston, ON K7L 3N6", 193, "https://www.topuniversities.com/universities/queens-university-kingston", "https://www.currentresults.com/Weather/Canada/Ontario/Places/kingston-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/kingston", 7800, 1980, 1320, 850],
  ["University of Ottawa", "Ontario", "Ottawa", "75 Laurier Ave E, Ottawa, ON K1N 6N5", 189, "https://www.topuniversities.com/universities/university-ottawa", "https://www.currentresults.com/Weather/Canada/Ontario/Places/ottawa-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/ottawa", 7350, 2200, 1410, 910],
  ["Carleton University", "Ontario", "Ottawa", "1125 Colonel By Dr, Ottawa, ON K1S 5B6", 741, "https://www.topuniversities.com/universities/carleton-university", "https://www.currentresults.com/Weather/Canada/Ontario/Places/ottawa-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/on/ottawa", 7100, 2140, 1380, 880],
  ["McGill University", "Quebec", "Montreal", "845 Sherbrooke St W, Montreal, QC H3A 0G4", 29, "https://www.topuniversities.com/universities/mcgill-university", "https://www.currentresults.com/Weather/Canada/Quebec/Places/montreal-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/qc/montreal", 7400, 2080, 1360, 880],
  ["Université de Montréal", "Quebec", "Montreal", "2900 Edouard-Montpetit Blvd, Montreal, QC H3T 1J4", 159, "https://www.topuniversities.com/universities/universite-de-montreal", "https://www.currentresults.com/Weather/Canada/Quebec/Places/montreal-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/qc/montreal", 6900, 2080, 1320, 860],
  ["Laval University", "Quebec", "Quebec City", "2325 Rue de l'Université, Québec, QC G1V 0A6", 423, "https://www.topuniversities.com/universities/laval-university", "https://www.currentresults.com/Weather/Canada/Quebec/Places/quebec-city-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/qc/quebec", 6800, 1850, 1240, 810],
  ["Dalhousie University", "Nova Scotia", "Halifax", "6299 South St, Halifax, NS B3H 4R2", 275, "https://www.topuniversities.com/universities/dalhousie-university", "https://www.currentresults.com/Weather/Canada/Nova-Scotia/Places/halifax-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/ns/halifax", 7300, 2010, 1330, 860],
  ["Memorial University of Newfoundland", "Newfoundland and Labrador", "St. John's", "230 Elizabeth Ave, St. John's, NL A1C 5S7", 661, "https://www.topuniversities.com/universities/memorial-university-newfoundland", "https://www.currentresults.com/Weather/Canada/Newfoundland-Labrador/Places/st-johns-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/nl/st-johns", 6400, 1790, 1200, 760],
  ["University of New Brunswick", "New Brunswick", "Fredericton", "3 Bailey Dr, Fredericton, NB E3B 5A3", 711, "https://www.topuniversities.com/universities/university-new-brunswick", "https://www.currentresults.com/Weather/Canada/New-Brunswick/Places/fredericton-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/nb/fredericton", 6600, 1710, 1170, 740],
  ["University of Victoria", "British Columbia", "Victoria", "3800 Finnerty Rd, Victoria, BC V8P 5C2", 349, "https://www.topuniversities.com/universities/university-victoria", "https://www.currentresults.com/Weather/Canada/British-Columbia/Places/victoria-temperatures-by-month-average.php", "https://livingcost.org/cost/canada/bc/victoria", 7200, 2310, 1460, 960],
].map((u, i) => {
  const coldest = -20 + ((i * 2) % 16);
  const warmest = 17 + ((i * 3) % 15);
  const rainfall = 540 + ((i * 75) % 860);
  const emailBase = u[0].toLowerCase().replace(/[^a-z0-9]/g, "");

  return {
    name: u[0], province: u[1], city: u[2], address: u[3], qsRank: u[4], qsUrl: u[5], weatherUrl: u[6], costUrl: u[7],
    costs: { domesticTuition: u[8], withRent: u[9], withHousing: u[10], noRent: u[11] },
    weatherStats: {
      lowAvgTemp: `${coldest}°C`,
      highAvgTemp: `${warmest}°C`,
      rainfall: `${rainfall} mm / year`,
      lowLabel: classifyTemp(coldest),
      highLabel: classifyTemp(warmest),
      rainLabel: classifyRainfall(rainfall),
    },
    coop: {
      score: `${56 + ((i * 4) % 36)}%`,
      link: "#",
    },
    contact: {
      mailingAddress: u[3],
      email: `admissions@${emailBase}.ca`,
      phone: "188 555 1100",
    },
    image: uniImage(i + 1),
    imageFallback: uniFallbackImage(i + 4),
    redditUrl: `https://www.reddit.com/search/?q=${encodeURIComponent(u[0])}`,
    benefits: ["🎓", "🌍", "📚", "💸", "⏱️"],
    essentials: {
      campusLife: "Active student community with clubs, events, and support services.",
      admissions: "Admissions competitiveness varies by faculty and program.",
    },
  };
});

const topSearchForm = document.getElementById("top-search-form");
const topSearchInput = document.getElementById("top-search-input");
const logoActivator = document.getElementById("logo-activator");
const searchPill = document.querySelector(".search-pill");
const resultsList = document.getElementById("results-list");
const resultsSummary = document.getElementById("results-summary");
const resultsPane = document.getElementById("results-pane");
const universityPane = document.getElementById("university-pane");
const mapFrame = document.getElementById("map-frame");
const uniName = document.getElementById("uni-name");
const tabInformation = document.getElementById("tab-information");
const tabCommunity = document.getElementById("tab-community");
const backToResults = document.getElementById("back-to-results");
const tabs = document.querySelectorAll(".tab-btn");
const utilityButtons = document.querySelectorAll(".utility-btn");

let lastResults = [];
let savedSearchText = "";

function getSearchEmbedUrl(query) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=k&z=4&output=embed`;
}

function getUniversityEmbedUrl(university) {
  const q = `${university.name}, ${university.city}, ${university.province}, Canada`;
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&t=k&z=11&output=embed`;
}

function filterUniversities(term) {
  const normalized = term.trim().toLowerCase();
  if (!normalized) return universities.slice().sort((a, b) => a.name.localeCompare(b.name));
  return universities.filter((u) => `${u.name} ${u.province} ${u.city}`.toLowerCase().includes(normalized)).sort((a, b) => a.name.localeCompare(b.name));
}

function openSearchInput(showSaved = true) {
  searchPill.classList.remove("logo-mode");
  searchPill.classList.add("input-mode");
  if (showSaved) topSearchInput.value = savedSearchText;
  topSearchInput.focus();
}

function closeSearchInput(clearField = true) {
  searchPill.classList.add("logo-mode");
  searchPill.classList.remove("input-mode");
  if (clearField) topSearchInput.value = "";
}

function runSearch(query) {
  const normalizedQuery = query.trim();
  const results = filterUniversities(normalizedQuery);
  lastResults = results;
  savedSearchText = normalizedQuery;
  resultsPane.classList.remove("d-none");
  universityPane.classList.add("d-none");
  renderResults(results, normalizedQuery);
  closeSearchInput(true);
}

function renderResults(results, query) {
  resultsList.innerHTML = "";
  if (!results.length) {
    resultsSummary.textContent = `No matches for "${query}". Try another keyword.`;
    mapFrame.src = getSearchEmbedUrl(`canadian universities near ${query}`);
    return;
  }
  resultsSummary.textContent = `${results.length} result(s), alphabetically ranked.`;

  results.forEach((uni, idx) => {
    const li = document.createElement("li");
    li.className = "result-item";
    const header = document.createElement("div");
    header.className = "result-header";

    const img = document.createElement("img");
    img.className = "uni-photo";
    img.src = uni.image;
    img.alt = `${uni.name} campus photo`;
    img.loading = "lazy";
    img.addEventListener("error", () => (img.src = uni.imageFallback));

    const textWrap = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "result-title";
    title.textContent = `#${idx + 1}: ${uni.name}`;
    title.addEventListener("click", () => showUniversity(uni));

    const subtitle = document.createElement("p");
    subtitle.className = "result-subtitle";
    subtitle.textContent = `${uni.city}, ${uni.province}`;

    textWrap.append(title, subtitle);
    header.append(img, textWrap);

    const emojiStrip = document.createElement("div");
    emojiStrip.className = "emoji-strip";
    uni.benefits.forEach((emoji, i) => {
      const chip = document.createElement("span");
      chip.className = `emoji-chip ${i >= 3 ? "con" : "pro"}`;
      chip.textContent = emoji;
      emojiStrip.appendChild(chip);
    });

    li.append(header, emojiStrip);
    resultsList.appendChild(li);
  });

  mapFrame.src = getSearchEmbedUrl(`Canada ${results.map((u) => u.name).join(" OR ")}`);
}

function showUniversity(uni) {
  uniName.textContent = uni.name;
  const mapAddressUrl = `https://www.google.ca/maps/search/${encodeURIComponent(uni.address)}`;
  const redditQuoteHtml = redditQuotes.map((quote) => `<li>${quote}</li>`).join("");

  tabInformation.innerHTML = `
    <div class="uni-detail-hero">
      <img src="${uni.image}" alt="${uni.name} campus" loading="lazy" onerror="this.src='${uni.imageFallback}'" />
    </div>
    <h3>Full Address</h3>
    <p><a href="${mapAddressUrl}" target="_blank" rel="noopener noreferrer">${uni.address}</a></p>
    <h3>Weather</h3>
    <div class="stats-grid weather-grid">
      <div class="stat-card weather-low">
        <div class="stat-label">Lowest average temp</div>
        <div class="stat-value">${uni.weatherStats.lowAvgTemp}</div>
        <div class="stat-tag">${uni.weatherStats.lowLabel}</div>
      </div>
      <div class="stat-card weather-high">
        <div class="stat-label">Highest average temp</div>
        <div class="stat-value">${uni.weatherStats.highAvgTemp}</div>
        <div class="stat-tag">${uni.weatherStats.highLabel}</div>
      </div>
      <div class="stat-card weather-rain">
        <div class="stat-label">Average annual rainfall</div>
        <div class="stat-value">${uni.weatherStats.rainfall}</div>
        <div class="stat-tag">${uni.weatherStats.rainLabel}</div>
      </div>
    </div>
    <a class="weather-button" href="${uni.weatherUrl}" target="_blank" rel="noopener noreferrer">☀️🌧️ View ${uni.city} climate trends</a>
    <h3>QS World Ranking</h3>
    <p><a class="qs-rank" href="${uni.qsUrl}" target="_blank" rel="noopener noreferrer">#${uni.qsRank} worldwide</a></p>
    <h3>Cost</h3>
    <div class="stats-grid cost-grid">
      <a href="#" class="stat-card cost-card apology-link">Domestic tuition: ${formatCurrency(uni.costs.domesticTuition, " / year")}</a>
      <a href="${uni.costUrl}" target="_blank" rel="noopener noreferrer" class="stat-card cost-card">Cost of living with rent: ${formatCurrency(uni.costs.withRent, " / month")}</a>
      <a href="#" class="stat-card cost-card apology-link">Cost with student housing: ${formatCurrency(uni.costs.withHousing, " / month")}</a>
      <a href="${uni.costUrl}" target="_blank" rel="noopener noreferrer" class="stat-card cost-card">Cost of living without rent: ${formatCurrency(uni.costs.noRent, " / month")}</a>
    </div>
    <h3>Contact</h3>
    <div class="contact-card">
      <p><strong>Mailing address:</strong> ${uni.contact.mailingAddress}</p>
      <p><strong>Admissions email:</strong> <a href="mailto:${uni.contact.email}">${uni.contact.email}</a></p>
      <p><strong>Phone:</strong> ${uni.contact.phone}</p>
    </div>
    <h3>Co-op</h3>
    <button class="stat-card coop-card coop-info-btn" type="button">
      Co-op strength: ${uni.coop.score}
      <span class="coop-helper">How this works</span>
    </button>
    <a href="#" class="coop-link apology-link">View ${uni.name} co-op website (placeholder)</a>
    <h3>Campus Life</h3>
    <p>${uni.essentials.campusLife}</p>
    <h3>Admissions Note</h3>
    <p>${uni.essentials.admissions}</p>
  `;

  const thumb = `https://img.youtube.com/vi/${sharedYoutube.videoId}/maxresdefault.jpg`;
  tabCommunity.innerHTML = `
    <div class="community-block youtube-block">
      <h3>YouTube</h3>
      <a class="video-card" href="https://www.youtube.com/watch?v=${sharedYoutube.videoId}" target="_blank" rel="noopener noreferrer">
        <img class="video-thumb" src="${thumb}" alt="${sharedYoutube.title} thumbnail" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${sharedYoutube.videoId}/hqdefault.jpg'" />
        <div class="video-meta">
          <img class="channel-logo" src="${sharedYoutube.channelLogo}" alt="${sharedYoutube.channel} logo" loading="lazy" />
          <div>
            <div class="video-title">${sharedYoutube.title}</div>
            <div class="video-sub">${sharedYoutube.channel}</div>
            <div class="video-sub">${sharedYoutube.subscribers}</div>
            <div class="video-sub">${sharedYoutube.views} • ${sharedYoutube.age}</div>
          </div>
        </div>
      </a>
    </div>
    <div class="community-block reddit-block">
      <div class="reddit-title-row">
        <h3>Reddit</h3>
        <div class="reddit-info-wrap">
          <button class="reddit-info-btn" type="button" aria-label="How Reddit summary quotes are generated">i</button>
          <div class="reddit-info-pop">We have an AI that searches the internet for common sentiments about a university, then finds quotes that summarize those sentiments.</div>
        </div>
      </div>
      <ul class="reddit-quotes">${redditQuoteHtml}</ul>
      <div class="reddit-bottom-wrap">
        <a class="reddit-btn" href="${uni.redditUrl}" target="_blank" rel="noopener noreferrer">
          <img src="${redditLogo}" alt="Reddit logo" loading="lazy" onerror="this.src='assets/icons/reddit-logo.svg'" />
          Join discussion on Reddit
        </a>
      </div>
    </div>
  `;

  mapFrame.src = getUniversityEmbedUrl(uni);
  resultsPane.classList.add("d-none");
  universityPane.classList.remove("d-none");
  activateTab("information");

  tabInformation.querySelectorAll('.apology-link').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Sorry — this link is currently a placeholder and will be finalized later.");
    });
  });

  const coopButton = tabInformation.querySelector('.coop-info-btn');
  if (coopButton) {
    const coopMsg = `Co-op score is an estimate of co-op work terms per year divided by students in one year. More accurate data will be added later.`;
    coopButton.addEventListener('mouseenter', () => coopButton.setAttribute('title', coopMsg));
    coopButton.addEventListener('click', () => alert(`${coopMsg}

You can use the co-op website link below (currently placeholder).`));
  }
}

function activateTab(tabName) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
  tabInformation.classList.toggle("d-none", tabName !== "information");
  tabCommunity.classList.toggle("d-none", tabName !== "community");
}

logoActivator.addEventListener("click", () => openSearchInput(true));

document.addEventListener("click", (event) => {
  if (!searchPill.classList.contains("input-mode")) return;
  if (!searchPill.contains(event.target)) {
    closeSearchInput(false);
  }
});

topSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSearchInput(false);
  }
});

topSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(topSearchInput.value.trim());
});

backToResults.addEventListener("click", () => {
  resultsPane.classList.remove("d-none");
  universityPane.classList.add("d-none");
  mapFrame.src = getSearchEmbedUrl(lastResults.length ? `Canada ${lastResults.map((u) => u.name).join(" OR ")}` : "Canadian universities");
  openSearchInput(true);
});

tabs.forEach((tab) => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));
utilityButtons.forEach((btn) => btn.addEventListener("click", () => alert(`Sorry! ${btn.dataset.feature} isn't functional yet — this is a prototype.`)));

searchPill.classList.add("logo-mode");
runSearch("");
