const universities = [
  {
    id: "ubc",
    name: "University of British Columbia",
    province: "British Columbia",
    city: "Vancouver",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/UBC_-_Irving_K._Barber_Learning_Centre.jpg/640px-UBC_-_Irving_K._Barber_Learning_Centre.jpg",
    imageFallback: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/British-Columbia/Places/vancouver-temperatures-by-month-average.php",
    benefits: [
      { emoji: "💼", type: "pro", note: "Strong co-op and career pathways" },
      { emoji: "🧪", type: "pro", note: "Top research opportunities" },
      { emoji: "🌊", type: "pro", note: "Great Vancouver setting" },
      { emoji: "💸", type: "con", note: "Higher living costs in Vancouver" },
      { emoji: "📈", type: "con", note: "Competitive entry requirements" },
    ],
    essentials: {
      tuition: "Placeholder: CAD 8,000–12,000 domestic / CAD 38,000–55,000 international",
      campusLife: "Large campus with active clubs, co-op pathways, and strong athletics culture.",
      admissions: "Placeholder: competitive admission with strong Grade 11/12 average requirements.",
    },
    community: {
      youtube: [{ label: "Campus tour", url: "https://www.youtube.com/results?search_query=UBC+campus+tour" }],
      reddit: [{ label: "r/UBC", url: "https://www.reddit.com/r/UBC/" }],
    },
  },
  {
    id: "ualberta",
    name: "University of Alberta",
    province: "Alberta",
    city: "Edmonton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/University_of_Alberta%2C_Edmonton%2C_Alberta_%2828447273501%29.jpg/640px-University_of_Alberta%2C_Edmonton%2C_Alberta_%2828447273501%29.jpg",
    imageFallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Alberta/Places/edmonton-temperatures-by-month-average.php",
    benefits: [
      { emoji: "🔬", type: "pro", note: "Research intensive environment" },
      { emoji: "💰", type: "pro", note: "Strong value for cost" },
      { emoji: "🧑‍🤝‍🧑", type: "pro", note: "Supportive student community" },
      { emoji: "❄️", type: "con", note: "Very cold winters" },
      { emoji: "🏙️", type: "con", note: "Smaller city vibe vs Toronto/Vancouver" },
    ],
    essentials: {
      tuition: "Placeholder: CAD 7,000–11,000 domestic / CAD 30,000–45,000 international",
      campusLife: "Strong student union, winter-friendly facilities, and active career fairs.",
      admissions: "Placeholder: competitive averages vary by faculty and program demand.",
    },
    community: {
      youtube: [{ label: "Campus tour", url: "https://www.youtube.com/results?search_query=University+of+Alberta+campus+tour" }],
      reddit: [{ label: "r/uAlberta", url: "https://www.reddit.com/r/uAlberta/" }],
    },
  },
  {
    id: "waterloo",
    name: "University of Waterloo",
    province: "Ontario",
    city: "Waterloo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/University_of_Waterloo_-_Davis_Centre.jpg/640px-University_of_Waterloo_-_Davis_Centre.jpg",
    imageFallback: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/kitchener-temperatures-by-month-average.php",
    benefits: [
      { emoji: "💻", type: "pro", note: "Excellent tech pipeline" },
      { emoji: "🧠", type: "pro", note: "Strong math/engineering culture" },
      { emoji: "🤝", type: "pro", note: "Famous co-op placements" },
      { emoji: "📚", type: "con", note: "Heavy workload" },
      { emoji: "⏱️", type: "con", note: "Fast-paced terms and co-op cycles" },
    ],
    essentials: {
      tuition: "Placeholder: CAD 9,000–15,000 domestic / CAD 40,000–63,000 international",
      campusLife: "Fast-paced academic culture with startup-friendly student communities.",
      admissions: "Placeholder: highly competitive for engineering and CS programs.",
    },
    community: {
      youtube: [{ label: "Student life", url: "https://www.youtube.com/results?search_query=Waterloo+co-op+student+life" }],
      reddit: [{ label: "r/uwaterloo", url: "https://www.reddit.com/r/uwaterloo/" }],
    },
  },
  {
    id: "mcgill",
    name: "McGill University",
    province: "Quebec",
    city: "Montreal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/McGill_University_Montreal.jpg/640px-McGill_University_Montreal.jpg",
    imageFallback: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Quebec/Places/montreal-temperatures-by-month-average.php",
    benefits: [
      { emoji: "🌍", type: "pro", note: "Global reputation" },
      { emoji: "🏛️", type: "pro", note: "Historic downtown campus" },
      { emoji: "🎭", type: "pro", note: "Great Montreal culture" },
      { emoji: "📈", type: "con", note: "Competitive admissions" },
      { emoji: "🗣️", type: "con", note: "French can be helpful off-campus" },
    ],
    essentials: {
      tuition: "Placeholder: CAD 3,000–12,000 Quebec/domestic tiers / CAD 28,000–60,000 international",
      campusLife: "Urban campus experience with strong international student presence.",
      admissions: "Placeholder: high academic cutoffs in many faculties.",
    },
    community: {
      youtube: [{ label: "Student experience", url: "https://www.youtube.com/results?search_query=McGill+student+experience" }],
      reddit: [{ label: "r/mcgill", url: "https://www.reddit.com/r/mcgill/" }],
    },
  },
  {
    id: "utoronto",
    name: "University of Toronto",
    province: "Ontario",
    city: "Toronto",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_College%2C_University_of_Toronto%2C_Toronto%2C_Ontario_%2832676549034%29.jpg/640px-University_College%2C_University_of_Toronto%2C_Toronto%2C_Ontario_%2832676549034%29.jpg",
    imageFallback: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/toronto-temperatures-by-month-average.php",
    benefits: [
      { emoji: "🏆", type: "pro", note: "Top ranking and reputation" },
      { emoji: "🔬", type: "pro", note: "Major research opportunities" },
      { emoji: "🧭", type: "pro", note: "Huge range of programs" },
      { emoji: "💸", type: "con", note: "Expensive city and living costs" },
      { emoji: "👥", type: "con", note: "Large classes in early years" },
    ],
    essentials: {
      tuition: "Placeholder: CAD 6,500–15,000 domestic / CAD 45,000–67,000 international",
      campusLife: "Three campuses with major city access and large student communities.",
      admissions: "Placeholder: very competitive for selective programs and streams.",
    },
    community: {
      youtube: [{ label: "UofT student stories", url: "https://www.youtube.com/results?search_query=University+of+Toronto+student+life" }],
      reddit: [{ label: "r/UofT", url: "https://www.reddit.com/r/UofT/" }],
    },
  },
  {
    id: "uwo",
    name: "Western University",
    province: "Ontario",
    city: "London",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/UWO_UCC.jpg/640px-UWO_UCC.jpg",
    imageFallback: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/london-temperatures-by-month-average.php",
    benefits: [
      { emoji: "🕸️", type: "pro", note: "Strong alumni network" },
      { emoji: "📊", type: "pro", note: "Strong business pathway" },
      { emoji: "🎉", type: "pro", note: "Active campus life" },
      { emoji: "🚗", type: "con", note: "Less transit than major metros" },
      { emoji: "📉", type: "con", note: "Selective for popular programs" },
    ],
    essentials: {
      tuition: "Placeholder: CAD 7,000–14,000 domestic / CAD 32,000–58,000 international",
      campusLife: "Vibrant residence and club scene with strong school spirit.",
      admissions: "Placeholder: competitive averages vary by faculty and major.",
    },
    community: {
      youtube: [{ label: "Western campus tour", url: "https://www.youtube.com/results?search_query=Western+University+campus+tour" }],
      reddit: [{ label: "r/uwo", url: "https://www.reddit.com/r/uwo/" }],
    },
  },
];

const topSearchForm = document.getElementById("top-search-form");
const topSearchInput = document.getElementById("top-search-input");
const resultsList = document.getElementById("results-list");
const resultsSummary = document.getElementById("results-summary");
const resultsPane = document.getElementById("results-pane");
const universityPane = document.getElementById("university-pane");
const mapFrame = document.getElementById("map-frame");
const uniName = document.getElementById("uni-name");
const tabEssentials = document.getElementById("tab-essentials");
const tabCommunity = document.getElementById("tab-community");
const backToResults = document.getElementById("back-to-results");
const tabs = document.querySelectorAll(".tab");
const utilityButtons = document.querySelectorAll(".utility-btn");

let lastResults = [];

function getSearchEmbedUrl(query) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=4&output=embed`;
}

function getUniversityEmbedUrl(university) {
  const q = `${university.name}, ${university.city}, ${university.province}, Canada`;
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=11&output=embed`;
}

function filterUniversities(term) {
  const normalized = term.trim().toLowerCase();
  if (!normalized) return universities.slice().sort((a, b) => a.name.localeCompare(b.name));

  return universities
    .filter((uni) => {
      const haystack = `${uni.name} ${uni.province} ${uni.city}`.toLowerCase();
      return haystack.includes(normalized);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function runSearch(query) {
  const results = filterUniversities(query);
  lastResults = results;

  topSearchInput.value = query;
  resultsPane.classList.remove("hidden");
  universityPane.classList.add("hidden");
  renderResults(results, query);
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
    li.style.setProperty("--order", String(idx));

    const header = document.createElement("div");
    header.className = "result-header";

    const img = document.createElement("img");
    img.className = "uni-photo";
    img.src = uni.image;
    img.alt = `${uni.name} campus photo`;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.src = uni.imageFallback;
    });

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

    uni.benefits.slice(0, 5).forEach((point) => {
      const chip = document.createElement("span");
      chip.className = `emoji-chip ${point.type === "con" ? "con" : "pro"}`;
      chip.textContent = point.emoji;
      chip.title = point.note;
      emojiStrip.appendChild(chip);
    });

    li.append(header, emojiStrip);
    resultsList.appendChild(li);
  });

  mapFrame.src = getSearchEmbedUrl(`Canada ${results.map((uni) => uni.name).join(" OR ")}`);
}

function showUniversity(uni) {
  uniName.textContent = uni.name;

  const essentialsEmoji = uni.benefits.map((item) => `<li>${item.emoji} ${item.note}</li>`).join("");

  tabEssentials.innerHTML = `
    <div class="uni-detail-hero">
      <img src="${uni.image}" alt="${uni.name} campus" loading="lazy" onerror="this.src='${uni.imageFallback}'" />
    </div>
    <h3>Location</h3>
    <p>${uni.city}, ${uni.province}, Canada</p>
    <h3>Weather</h3>
    <a class="weather-button" href="${uni.weatherUrl}" target="_blank" rel="noopener noreferrer">☀️🌧️ View ${uni.city} climate trends</a>
    <h3>Tuition Snapshot</h3>
    <p>${uni.essentials.tuition}</p>
    <h3>Campus Life</h3>
    <p>${uni.essentials.campusLife}</p>
    <h3>Admissions Note</h3>
    <p>${uni.essentials.admissions}</p>
    <h3>Main Pros / Cons</h3>
    <ul>${essentialsEmoji}</ul>
  `;

  tabCommunity.innerHTML = `
    <h3>YouTube Links</h3>
    <ul>${uni.community.youtube
      .map((item) => `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a></li>`)
      .join("")}</ul>
    <h3>Reddit Links</h3>
    <ul>${uni.community.reddit
      .map((item) => `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a></li>`)
      .join("")}</ul>
  `;

  mapFrame.src = getUniversityEmbedUrl(uni);
  resultsPane.classList.add("hidden");
  universityPane.classList.remove("hidden");
  activateTab("essentials");
}

function activateTab(tabName) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
  tabEssentials.classList.toggle("hidden", tabName !== "essentials");
  tabCommunity.classList.toggle("hidden", tabName !== "community");
}

topSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(topSearchInput.value.trim());
});

backToResults.addEventListener("click", () => {
  resultsPane.classList.remove("hidden");
  universityPane.classList.add("hidden");
  mapFrame.src = getSearchEmbedUrl(
    lastResults.length ? `Canada ${lastResults.map((uni) => uni.name).join(" OR ")}` : "Canadian universities"
  );
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});

utilityButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`Sorry! ${btn.dataset.feature} isn't functional yet — this is a prototype.`);
  });
});

runSearch("");
