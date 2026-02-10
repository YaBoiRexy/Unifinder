const redditLogo = "https://i.imgur.com/u7osQv8.jpg";
const sharedYoutube = {
  videoId: "jtdHuXcu3J0",
  title: "Campus Tour with Kaitlin!",
  channel: "University of Illinois Admissions",
  subscribers: "10.9K subscribers",
  views: "378K views",
  age: "5 years ago",
  channelLogo: "assets/icons/channel-logo.svg",
};

const uploadedStyleImages = [
  "https://i.imgur.com/EJdHWiK.jpg",
  "https://i.imgur.com/NcrFYyE.jpg",
  "https://i.imgur.com/S6vl3bg.jpg",
  "https://i.imgur.com/oPrkAM0.jpg",
  "https://i.imgur.com/mE3FIVS.jpg",
  "https://i.imgur.com/Ztt110y.jpg",
  "https://i.imgur.com/hZXCCjz.jpg",
  "https://i.imgur.com/aD2cm1B.jpg",
  "https://i.imgur.com/gFM5HuG.jpg",
  "https://i.imgur.com/gIeja9B.jpg",
];

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

const universitySeedData = [
  ["University of British Columbia", "British Columbia", "Vancouver", "2329 West Mall, Vancouver, BC V6T 1Z4"],
  ["Simon Fraser University", "British Columbia", "Burnaby", "8888 University Dr, Burnaby, BC V5A 1S6"],
  ["University of Alberta", "Alberta", "Edmonton", "116 St & 85 Ave, Edmonton, AB T6G 2R3"],
  ["University of Calgary", "Alberta", "Calgary", "2500 University Dr NW, Calgary, AB T2N 1N4"],
  ["University of Saskatchewan", "Saskatchewan", "Saskatoon", "105 Administration Pl, Saskatoon, SK S7N 5A2"],
  ["University of Manitoba", "Manitoba", "Winnipeg", "66 Chancellors Cir, Winnipeg, MB R3T 2N2"],
  ["University of Toronto", "Ontario", "Toronto", "27 King's College Cir, Toronto, ON M5S 1A1"],
  ["York University", "Ontario", "Toronto", "4700 Keele St, Toronto, ON M3J 1P3"],
  ["McMaster University", "Ontario", "Hamilton", "1280 Main St W, Hamilton, ON L8S 4L8"],
  ["University of Waterloo", "Ontario", "Waterloo", "200 University Ave W, Waterloo, ON N2L 3G1"],
  ["Western University", "Ontario", "London", "1151 Richmond St, London, ON N6A 3K7"],
  ["Queen's University", "Ontario", "Kingston", "99 University Ave, Kingston, ON K7L 3N6"],
  ["University of Ottawa", "Ontario", "Ottawa", "75 Laurier Ave E, Ottawa, ON K1N 6N5"],
  ["Carleton University", "Ontario", "Ottawa", "1125 Colonel By Dr, Ottawa, ON K1S 5B6"],
  ["McGill University", "Quebec", "Montreal", "845 Sherbrooke St W, Montreal, QC H3A 0G4"],
  ["Université de Montréal", "Quebec", "Montreal", "2900 Edouard-Montpetit Blvd, Montreal, QC H3T 1J4"],
  ["Laval University", "Quebec", "Quebec City", "2325 Rue de l'Université, Québec, QC G1V 0A6"],
  ["Dalhousie University", "Nova Scotia", "Halifax", "6299 South St, Halifax, NS B3H 4R2"],
  ["Memorial University of Newfoundland", "Newfoundland and Labrador", "St. John's", "230 Elizabeth Ave, St. John's, NL A1C 5S7"],
  ["University of New Brunswick", "New Brunswick", "Fredericton", "3 Bailey Dr, Fredericton, NB E3B 5A3"],
  ["University of Victoria", "British Columbia", "Victoria", "3800 Finnerty Rd, Victoria, BC V8P 5C2"],
  ["Ontario Tech University", "Ontario", "Oshawa", "2000 Simcoe St N, Oshawa, ON L1G 0C5"],
  ["Toronto Metropolitan University", "Ontario", "Toronto", "350 Victoria St, Toronto, ON M5B 2K3"],
  ["Trent University", "Ontario", "Peterborough", "1600 W Bank Dr, Peterborough, ON K9L 0G2"],
  ["Brock University", "Ontario", "St. Catharines", "1812 Sir Isaac Brock Way, St. Catharines, ON L2S 3A1"],
  ["Wilfrid Laurier University", "Ontario", "Waterloo", "75 University Ave W, Waterloo, ON N2L 3C5"],
  ["Nipissing University", "Ontario", "North Bay", "100 College Dr, North Bay, ON P1B 8L7"],
  ["Lakehead University", "Ontario", "Thunder Bay", "955 Oliver Rd, Thunder Bay, ON P7B 5E1"],
  ["Laurentian University", "Ontario", "Sudbury", "935 Ramsey Lake Rd, Sudbury, ON P3E 2C6"],
  ["Algoma University", "Ontario", "Sault Ste. Marie", "1520 Queen St E, Sault Ste. Marie, ON P6A 2G4"],
  ["University of Guelph", "Ontario", "Guelph", "50 Stone Rd E, Guelph, ON N1G 2W1"],
  ["University of Windsor", "Ontario", "Windsor", "401 Sunset Ave, Windsor, ON N9B 3P4"],
  ["Bishop's University", "Quebec", "Sherbrooke", "2600 College St, Sherbrooke, QC J1M 1Z7"],
  ["Concordia University", "Quebec", "Montreal", "1455 De Maisonneuve Blvd W, Montreal, QC H3G 1M8"],
  ["Université du Québec à Montréal", "Quebec", "Montreal", "405 Rue Sainte-Catherine E, Montreal, QC H2L 2C4"],
  ["Université du Québec à Trois-Rivières", "Quebec", "Trois-Rivières", "3351 Bd des Forges, Trois-Rivières, QC G9A 5H7"],
  ["Université du Québec à Chicoutimi", "Quebec", "Saguenay", "555 Bd de l'Université, Chicoutimi, QC G7H 2B1"],
  ["Université de Sherbrooke", "Quebec", "Sherbrooke", "2500 Bd de l'Université, Sherbrooke, QC J1K 2R1"],
  ["HEC Montréal", "Quebec", "Montreal", "3000 Chemin de la Côte-Sainte-Catherine, Montreal, QC H3T 2A7"],
  ["Polytechnique Montréal", "Quebec", "Montreal", "2500 Chem. de Polytechnique, Montreal, QC H3T 1J4"],
  ["Université du Québec en Outaouais", "Quebec", "Gatineau", "283 Bd Alexandre-Taché, Gatineau, QC J8X 3X7"],
  ["Université du Québec à Rimouski", "Quebec", "Rimouski", "300 Allée des Ursulines, Rimouski, QC G5L 3A1"],
  ["University of Prince Edward Island", "Prince Edward Island", "Charlottetown", "550 University Ave, Charlottetown, PE C1A 4P3"],
  ["Acadia University", "Nova Scotia", "Wolfville", "15 University Ave, Wolfville, NS B4P 2R6"],
  ["St. Francis Xavier University", "Nova Scotia", "Antigonish", "5005 Chapel Square, Antigonish, NS B2G 2W5"],
  ["Cape Breton University", "Nova Scotia", "Sydney", "1250 Grand Lake Rd, Sydney, NS B1M 1A2"],
  ["Mount Saint Vincent University", "Nova Scotia", "Halifax", "166 Bedford Hwy, Halifax, NS B3M 2J6"],
  ["Saint Mary's University", "Nova Scotia", "Halifax", "923 Robie St, Halifax, NS B3H 3C3"],
  ["Université Sainte-Anne", "Nova Scotia", "Church Point", "1695 Route 1, Church Point, NS B0W 1M0"],
  ["Mount Allison University", "New Brunswick", "Sackville", "62 York St, Sackville, NB E4L 1E2"],
  ["St. Thomas University", "New Brunswick", "Fredericton", "51 Dineen Dr, Fredericton, NB E3B 5G3"],
  ["Université de Moncton", "New Brunswick", "Moncton", "18 Antonine-Maillet Ave, Moncton, NB E1A 3E9"],
  ["Brandon University", "Manitoba", "Brandon", "270 18th St, Brandon, MB R7A 6A9"],
  ["Université de Saint-Boniface", "Manitoba", "Winnipeg", "200 Av. de la Cathédrale, Winnipeg, MB R2H 0H7"],
  ["University of Winnipeg", "Manitoba", "Winnipeg", "515 Portage Ave, Winnipeg, MB R3B 2E9"],
  ["First Nations University of Canada", "Saskatchewan", "Regina", "1 First Nations Way, Regina, SK S4S 7K2"],
  ["University of Regina", "Saskatchewan", "Regina", "3737 Wascana Pkwy, Regina, SK S4S 0A2"],
  ["MacEwan University", "Alberta", "Edmonton", "10700 104 Ave NW, Edmonton, AB T5J 4S2"],
  ["Mount Royal University", "Alberta", "Calgary", "4825 Mt Royal Gate SW, Calgary, AB T3E 6K6"],
  ["Athabasca University", "Alberta", "Athabasca", "1 University Dr, Athabasca, AB T9S 3A3"],
  ["Ambrose University", "Alberta", "Calgary", "150 Ambrose Cir SW, Calgary, AB T3H 0L5"],
  ["Concordia University of Edmonton", "Alberta", "Edmonton", "7128 Ada Blvd NW, Edmonton, AB T5B 4E4"],
  ["University of Lethbridge", "Alberta", "Lethbridge", "4401 University Dr W, Lethbridge, AB T1K 3M4"],
  ["Trinity Western University", "British Columbia", "Langley", "7600 Glover Rd, Langley Twp, BC V2Y 1Y1"],
  ["University of the Fraser Valley", "British Columbia", "Abbotsford", "33844 King Rd, Abbotsford, BC V2S 7M8"],
  ["Vancouver Island University", "British Columbia", "Nanaimo", "900 Fifth St, Nanaimo, BC V9R 5S5"],
  ["Thompson Rivers University", "British Columbia", "Kamloops", "805 TRU Way, Kamloops, BC V2C 0C8"],
  ["Royal Roads University", "British Columbia", "Victoria", "2005 Sooke Rd, Victoria, BC V9B 5Y2"],
  ["British Columbia Institute of Technology", "British Columbia", "Burnaby", "3700 Willingdon Ave, Burnaby, BC V5G 3H2"],
  ["Capilano University", "British Columbia", "North Vancouver", "2055 Purcell Way, North Vancouver, BC V7J 3H5"],
  ["Kwantlen Polytechnic University", "British Columbia", "Surrey", "12666 72 Ave, Surrey, BC V3W 2M8"],
  ["University Canada West", "British Columbia", "Vancouver", "626 W Pender St, Vancouver, BC V6B 1V9"],
  ["University of Northern British Columbia", "British Columbia", "Prince George", "3333 University Way, Prince George, BC V2N 4Z9"],
  ["Quest University", "British Columbia", "Squamish", "3200 University Blvd, Squamish, BC V8B 0N8"],
  ["Yukon University", "Yukon", "Whitehorse", "500 University Dr, Whitehorse, YT Y1A 5K4"],
  ["Aurora College", "Northwest Territories", "Yellowknife", "5004 54 St, Yellowknife, NT X1A 2R3"],
  ["Nunavut Arctic College", "Nunavut", "Iqaluit", "PO Box 600, Iqaluit, NU X0A 0H0"],
  ["Redeemer University", "Ontario", "Hamilton", "777 Garner Rd E, Ancaster, ON L9K 1J4"],
  ["Canadian Mennonite University", "Manitoba", "Winnipeg", "500 Shaftesbury Blvd, Winnipeg, MB R3P 2N2"],
  ["Crandall University", "New Brunswick", "Moncton", "333 Gorge Rd, Moncton, NB E1G 3H9"],
  ["Kings University", "Alberta", "Edmonton", "9125 50 St NW, Edmonton, AB T6B 2H3"],
  ["University of King's College", "Nova Scotia", "Halifax", "6350 Coburg Rd, Halifax, NS B3H 2A1"],
  ["Burman University", "Alberta", "Lacombe", "6730 University Dr, Lacombe, AB T4L 2E5"],
  ["Providence University College", "Manitoba", "Otterburne", "10 College Crescent, Otterburne, MB R0A 1G0"],
  ["Adler University", "British Columbia", "Vancouver", "520 Seymour St, Vancouver, BC V6B 3J5"],
  ["Emily Carr University of Art + Design", "British Columbia", "Vancouver", "520 E 1st Ave, Vancouver, BC V5T 0H2"],
  ["OCAD University", "Ontario", "Toronto", "100 McCaul St, Toronto, ON M5T 1W1"],
  ["University of St. Michael's College", "Ontario", "Toronto", "81 St Mary St, Toronto, ON M5S 1J4"],
  ["Dominican University College", "Ontario", "Ottawa", "96 Empress Ave, Ottawa, ON K1R 7G3"],
  ["Campion College", "Saskatchewan", "Regina", "3737 Wascana Pkwy, Regina, SK S4S 0A2"],
  ["Luther College", "Saskatchewan", "Regina", "3737 Wascana Pkwy, Regina, SK S4S 0A2"],
  ["St. Thomas More College", "Saskatchewan", "Saskatoon", "1437 College Dr, Saskatoon, SK S7N 0W6"],
  ["St. Mary's University Calgary", "Alberta", "Calgary", "14500 Bannister Rd SE, Calgary, AB T2X 1Z4"],
  ["Vancouver School of Theology", "British Columbia", "Vancouver", "6015 Walter Gage Rd, Vancouver, BC V6T 1Z1"],
  ["The King's University", "Alberta", "Edmonton", "9125 50 St NW, Edmonton, AB T6B 2H3"],
  ["Trinity College", "Ontario", "Toronto", "6 Hoskin Ave, Toronto, ON M5S 1H8"],
  ["Wycliffe College", "Ontario", "Toronto", "5 Hoskin Ave, Toronto, ON M5S 1H7"],
  ["Regis College", "Ontario", "Toronto", "100 Wellesley St W, Toronto, ON M5S 2Z5"],
  ["College universitaire dominicain", "Ontario", "Ottawa", "96 Empress Ave, Ottawa, ON K1R 7G3"],
  ["Huron University", "Ontario", "London", "1349 Western Rd, London, ON N6G 1H3"],
  ["Brescia University College", "Ontario", "London", "1285 Western Rd, London, ON N6G 1H2"],
  ["King's University College", "Ontario", "London", "266 Epworth Ave, London, ON N6A 2M3"],
  ["St. Jerome's University", "Ontario", "Waterloo", "290 Westmount Rd N, Waterloo, ON N2L 3G3"],
  ["Renison University College", "Ontario", "Waterloo", "240 Westmount Rd N, Waterloo, ON N2L 3G4"],
  ["Conrad Grebel University College", "Ontario", "Waterloo", "140 Westmount Rd N, Waterloo, ON N2L 3G6"],
  ["University of Sudbury", "Ontario", "Sudbury", "935 Ramsey Lake Rd, Sudbury, ON P3E 2C6"],
];

const aliasMap = {
  "University of British Columbia": ["UBC", "UBC VANCOUVER"],
  "University of Toronto": ["UOFT", "U OF T", "UFT"],
  "University of Alberta": ["UOFA", "U OF A"],
  "University of Calgary": ["UOFC", "U OF C"],
  "University of Waterloo": ["UWATERLOO", "UW"],
  "McMaster University": ["MAC", "MCMASTER", "MACU"],
  "York University": ["YORKU", "YU"],
  "Queen's University": ["QUEENS", "QU"],
  "Western University": ["UWO", "WESTERN"],
  "University of Ottawa": ["UOTTAWA", "U OF O"],
  "Carleton University": ["CARLETON", "CU"],
  "Université de Montréal": ["UDM"],
  "Université du Québec à Montréal": ["UQAM"],
  "Université du Québec à Trois-Rivières": ["UQTR"],
  "Université du Québec à Chicoutimi": ["UQAC"],
  "Université du Québec en Outaouais": ["UQO"],
  "Université du Québec à Rimouski": ["UQAR"],
  "McGill University": ["MCGILL"],
  "Simon Fraser University": ["SFU"],
  "University of Victoria": ["UVIC"],
  "University of Manitoba": ["UMANITOBA", "U OF M"],
  "University of Saskatchewan": ["USASK"],
  "University of New Brunswick": ["UNB"],
  "University of Windsor": ["UWINDSOR"],
  "University of Guelph": ["UGUELPH"],
  "Wilfrid Laurier University": ["WLU", "LAURIER"],
  "Toronto Metropolitan University": ["TMU", "RYERSON"],
  "Ontario Tech University": ["OTU", "UOIT"],
  "OCAD University": ["OCAD"],
  "HEC Montréal": ["HEC"],
  "Polytechnique Montréal": ["POLY MTL", "POLYMTL"],
  "British Columbia Institute of Technology": ["BCIT"],
  "Kwantlen Polytechnic University": ["KPU"],
  "University of Northern British Columbia": ["UNBC"],
  "Trinity Western University": ["TWU"],
  "University of Winnipeg": ["UWINNIPEG"],
  "Memorial University of Newfoundland": ["MUN"],
  "Dalhousie University": ["DAL", "DALHOUSIE"],
  "University of Prince Edward Island": ["UPEI"],
  "University of Lethbridge": ["ULETH"],
  "MacEwan University": ["MACEWAN"],
  "Mount Royal University": ["MRU"],
  "Athabasca University": ["AU"],
  "University Canada West": ["UCW"],
  "Yukon University": ["YUUKON"],
  "Nunavut Arctic College": ["NAC"],
  "Aurora College": ["ACNWT"],
};

function normalizeSearchText(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const universities = universitySeedData.slice(0, 100).map((u, i) => {
  const coldest = -20 + ((i * 2) % 16);
  const warmest = 17 + ((i * 3) % 15);
  const rainfall = 540 + ((i * 75) % 860);
  const emailBase = u[0].toLowerCase().replace(/[^a-z0-9]/g, "");
  const qsRank = 25 + ((i * 17) % 770);
  const provinceSlug = u[1].toLowerCase().replace(/\s+/g, '-');
  const citySlug = u[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return {
    name: u[0], province: u[1], city: u[2], address: u[3], qsRank,
    qsUrl: `https://www.topuniversities.com/universities/${encodeURIComponent(u[0].toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-'))}`,
    weatherUrl: `https://www.currentresults.com/Weather/Canada/${encodeURIComponent(u[1].replace(/\s+/g, '-'))}/Places/${citySlug}-temperatures-by-month-average.php`,
    costUrl: `https://livingcost.org/cost/canada/${provinceSlug.slice(0,2)}/${citySlug}`,
    costs: {
      domesticTuition: 6200 + ((i * 180) % 2600),
      withRent: 1650 + ((i * 95) % 1300),
      withHousing: 1150 + ((i * 70) % 700),
      noRent: 760 + ((i * 43) % 420),
    },
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
    aliases: aliasMap[u[0]] || [],
    normalizedAliases: (aliasMap[u[0]] || []).map(normalizeSearchText),
    image: uniImage(i + 1),
    redditUrl: `https://www.reddit.com/search/?q=${encodeURIComponent(u[0])}`,
    benefits: ["🎓", "🌍", "📚", "💸", "⏱️"],
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
  const normalizedToken = normalizeSearchText(term.trim());
  if (!normalized) return universities.slice().sort((a, b) => a.name.localeCompare(b.name));
  return universities.filter((u) => {
    const hay = `${u.name} ${u.province} ${u.city}`.toLowerCase();
    return hay.includes(normalized) || u.normalizedAliases.includes(normalizedToken);
  }).sort((a, b) => a.name.localeCompare(b.name));
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
      <img src="${uni.image}" alt="${uni.name} campus" loading="lazy" />
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
    <h3>Co-op</h3>
    <button class="stat-card coop-card coop-info-btn" type="button">
      Co-op strength: ${uni.coop.score}
      <span class="coop-helper">How this works</span>
    </button>
    <a href="#" class="coop-link apology-link">View ${uni.name} co-op website (placeholder)</a>
    <h3>Contact</h3>
    <div class="contact-card">
      <p><strong>Mailing address:</strong> ${uni.contact.mailingAddress}</p>
      <p><strong>Admissions email:</strong> <a href="mailto:${uni.contact.email}">${uni.contact.email}</a></p>
      <p><strong>Phone:</strong> ${uni.contact.phone}</p>
    </div>
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
