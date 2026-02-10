const redditLogo = "https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-180x180.png";
const sharedYoutube = {
  videoId: "jtdHuXcu3J0",
  title: "How to become more likable in conversations",
  channel: "University of Illinois Admissions",
  subscribers: "10.9K subscribers",
  views: "378K views",
  age: "5 years ago",
  channelLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Illinois_Fighting_Illini_logo.svg/240px-Illinois_Fighting_Illini_logo.svg.png",
};

const uploadedStyleImages = [
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cambridge_-_King%27s_College.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Cambridge_University%2C_King%27s_College%2C_Cambridge_UK.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/55/Princeton_University_Nassau_Hall.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Royce_Hall%2C_UCLA.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/McKeldin_Library.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/70/Cambridge_University_Trinity_College.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Harvard_University_-_Massachusetts_Hall.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/12/Florida_State_University_Westcott_Building.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/University_College%2C_Oxford.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9f/University_College%2C_University_of_Toronto%2C_Toronto%2C_Ontario_%2832676549034%29.jpg",
];

function uniImage(idx) {
  return uploadedStyleImages[idx % uploadedStyleImages.length];
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
].map((u, i) => ({
  name: u[0], province: u[1], city: u[2], address: u[3], qsRank: u[4], qsUrl: u[5], weatherUrl: u[6], costUrl: u[7],
  costs: { domesticTuition: u[8], withRent: u[9], withHousing: u[10], noRent: u[11] },
  image: uniImage(i + 1),
  imageFallback: uniImage(i + 4),
  redditUrl: `https://www.reddit.com/search/?q=${encodeURIComponent(u[0])}`,
  benefits: ["🎓", "🌍", "📚", "💸", "⏱️"],
  essentials: {
    campusLife: "Active student community with clubs, events, and support services.",
    admissions: "Admissions competitiveness varies by faculty and program.",
  },
}));

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

  tabInformation.innerHTML = `
    <div class="uni-detail-hero">
      <img src="${uni.image}" alt="${uni.name} campus" loading="lazy" onerror="this.src='${uni.imageFallback}'" />
    </div>
    <h3>Full Address</h3>
    <p>${uni.address}</p>
    <h3>Weather</h3>
    <a class="weather-button" href="${uni.weatherUrl}" target="_blank" rel="noopener noreferrer">☀️🌧️ View ${uni.city} climate trends</a>
    <h3>QS World Ranking</h3>
    <p><a class="qs-rank" href="${uni.qsUrl}" target="_blank" rel="noopener noreferrer">#${uni.qsRank} worldwide</a></p>
    <h3>Cost</h3>
    <ul>
      <li><a href="#" class="apology-link" data-reason="tuition">Domestic tuition: CAD ${uni.costs.domesticTuition.toLocaleString()} / year</a></li>
      <li><a href="${uni.costUrl}" target="_blank" rel="noopener noreferrer">Cost of living with rent: CAD ${uni.costs.withRent.toLocaleString()} / month</a></li>
      <li><a href="#" class="apology-link" data-reason="housing">Cost with student housing: CAD ${uni.costs.withHousing.toLocaleString()} / month</a></li>
      <li><a href="${uni.costUrl}" target="_blank" rel="noopener noreferrer">Cost of living without rent: CAD ${uni.costs.noRent.toLocaleString()} / month</a></li>
    </ul>
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
      <h3>Reddit</h3>
      <div class="reddit-bottom-wrap">
        <a class="reddit-btn" href="${uni.redditUrl}" target="_blank" rel="noopener noreferrer">
          <img src="${redditLogo}" alt="Reddit logo" loading="lazy" />
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
      alert("Sorry — this cost value is currently a placeholder and will be finalized later.");
    });
  });
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
