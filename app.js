const redditLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Reddit_alien_logo.svg/64px-Reddit_alien_logo.svg.png";

const qsWorldRankings = {
  "University of Toronto": 25,
  "McGill University": 29,
  "University of British Columbia": 38,
  "University of Alberta": 96,
  "University of Waterloo": 115,
  "Western University": 114,
  "Université de Montréal": 159,
  "McMaster University": 176,
  "University of Ottawa": 189,
  "Queen's University": 193,
  "University of Calgary": 198,
  "Dalhousie University": 275,
  "Simon Fraser University": 318,
  "University of Saskatchewan": 340,
  "University of Victoria": 349,
  "University of Manitoba": 661,
  "York University": 353,
  "Carleton University": 741,
  "Laval University": 423,
  "Memorial University of Newfoundland": 661,
  "University of New Brunswick": 711,
};

const universities = [
  {
    name: "University of British Columbia",
    province: "British Columbia",
    city: "Vancouver",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/UBC_-_Irving_K._Barber_Learning_Centre.jpg/640px-UBC_-_Irving_K._Barber_Learning_Centre.jpg",
    imageFallback: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/British-Columbia/Places/vancouver-temperatures-by-month-average.php",
    youtubeVideoId: "kY6f9QpP5kM",
    youtubeTitle: "UBC Campus Tour",
    redditUrl: "https://www.reddit.com/r/UBC/",
    benefits: ["💼", "🧪", "🌊", "💸", "📈"],
    essentials: {
      tuition: "Placeholder: CAD 8k–12k domestic / CAD 38k–55k international",
      campusLife: "Large campus with active clubs and major co-op opportunities.",
      admissions: "Competitive admission averages in most faculties.",
    },
  },
  {
    name: "Simon Fraser University",
    province: "British Columbia",
    city: "Burnaby",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/British-Columbia/Places/vancouver-temperatures-by-month-average.php",
    youtubeVideoId: "T6vA4jY0e18",
    youtubeTitle: "SFU Student Experience",
    redditUrl: "https://www.reddit.com/r/simonfraser/",
    benefits: ["📚", "🏙️", "🌲", "💸", "⛰️"],
    essentials: {
      tuition: "Placeholder: CAD 7k–11k domestic / CAD 30k–42k international",
      campusLife: "Mountain-top campus with strong commuter and club culture.",
      admissions: "Moderately competitive with program-based variation.",
    },
  },
  {
    name: "University of Alberta",
    province: "Alberta",
    city: "Edmonton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/University_of_Alberta%2C_Edmonton%2C_Alberta_%2828447273501%29.jpg/640px-University_of_Alberta%2C_Edmonton%2C_Alberta_%2828447273501%29.jpg",
    imageFallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Alberta/Places/edmonton-temperatures-by-month-average.php",
    youtubeVideoId: "p2R8h8Y2B6o",
    youtubeTitle: "University of Alberta Tour",
    redditUrl: "https://www.reddit.com/r/uAlberta/",
    benefits: ["🔬", "💰", "🧑‍🤝‍🧑", "❄️", "🏙️"],
    essentials: {
      tuition: "Placeholder: CAD 7k–11k domestic / CAD 30k–45k international",
      campusLife: "Strong student union and active research community.",
      admissions: "Competitive averages vary by faculty demand.",
    },
  },
  {
    name: "University of Calgary",
    province: "Alberta",
    city: "Calgary",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Alberta/Places/calgary-temperatures-by-month-average.php",
    youtubeVideoId: "0SpR8Nf6M4Y",
    youtubeTitle: "UCalgary Campus Life",
    redditUrl: "https://www.reddit.com/r/UCalgary/",
    benefits: ["⛰️", "⚙️", "💼", "❄️", "🚗"],
    essentials: {
      tuition: "Placeholder: CAD 7k–12k domestic / CAD 28k–40k international",
      campusLife: "Prairie city feel with strong engineering and business pathways.",
      admissions: "Program competitiveness varies across faculties.",
    },
  },
  {
    name: "University of Saskatchewan",
    province: "Saskatchewan",
    city: "Saskatoon",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Saskatchewan/Places/saskatoon-temperatures-by-month-average.php",
    youtubeVideoId: "FxrM8N4Vby0",
    youtubeTitle: "U of S Campus Tour",
    redditUrl: "https://www.reddit.com/r/usask/",
    benefits: ["🌾", "🩺", "💰", "❄️", "🏙️"],
    essentials: {
      tuition: "Placeholder: CAD 7k–10k domestic / CAD 24k–38k international",
      campusLife: "Supportive campus with growing student communities.",
      admissions: "Generally accessible with select competitive programs.",
    },
  },
  {
    name: "University of Manitoba",
    province: "Manitoba",
    city: "Winnipeg",
    image: "https://images.unsplash.com/photo-1541339907198-aa1c6b0eaa52?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Manitoba/Places/winnipeg-temperatures-by-month-average.php",
    youtubeVideoId: "0Jr6V7sI4_w",
    youtubeTitle: "University of Manitoba Overview",
    redditUrl: "https://www.reddit.com/r/umanitoba/",
    benefits: ["💰", "🧪", "🏒", "❄️", "🌬️"],
    essentials: {
      tuition: "Placeholder: CAD 6k–10k domestic / CAD 22k–35k international",
      campusLife: "Large prairie university with diverse faculties.",
      admissions: "Varies by faculty and entry route.",
    },
  },
  {
    name: "University of Toronto",
    province: "Ontario",
    city: "Toronto",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_College%2C_University_of_Toronto%2C_Toronto%2C_Ontario_%2832676549034%29.jpg/640px-University_College%2C_University_of_Toronto%2C_Toronto%2C_Ontario_%2832676549034%29.jpg",
    imageFallback: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/toronto-temperatures-by-month-average.php",
    youtubeVideoId: "fk4x0V6Aq6Q",
    youtubeTitle: "UofT Campus Tour",
    redditUrl: "https://www.reddit.com/r/UofT/",
    benefits: ["🏆", "🔬", "🧭", "💸", "👥"],
    essentials: {
      tuition: "Placeholder: CAD 6.5k–15k domestic / CAD 45k–67k international",
      campusLife: "Three campuses with major city access and huge networks.",
      admissions: "Very competitive for selective streams.",
    },
  },
  {
    name: "York University",
    province: "Ontario",
    city: "Toronto",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/toronto-temperatures-by-month-average.php",
    youtubeVideoId: "fWfR3IP9Q7Q",
    youtubeTitle: "York University Student Life",
    redditUrl: "https://www.reddit.com/r/yorku/",
    benefits: ["🌍", "🚇", "📚", "👥", "💸"],
    essentials: {
      tuition: "Placeholder: CAD 7k–11k domestic / CAD 30k–40k international",
      campusLife: "Large commuter-focused urban campus with diverse programs.",
      admissions: "Varies significantly by program.",
    },
  },
  {
    name: "McMaster University",
    province: "Ontario",
    city: "Hamilton",
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/hamilton-temperatures-by-month-average.php",
    youtubeVideoId: "6M5VK6Qw6Y4",
    youtubeTitle: "McMaster Day in the Life",
    redditUrl: "https://www.reddit.com/r/McMaster/",
    benefits: ["🩺", "🧩", "🤝", "📈", "💼"],
    essentials: {
      tuition: "Placeholder: CAD 6.5k–11.5k domestic / CAD 28k–48k international",
      campusLife: "Close-knit campus and strong student supports.",
      admissions: "Highly competitive for health-focused streams.",
    },
  },
  {
    name: "University of Waterloo",
    province: "Ontario",
    city: "Waterloo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/University_of_Waterloo_-_Davis_Centre.jpg/640px-University_of_Waterloo_-_Davis_Centre.jpg",
    imageFallback: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/kitchener-temperatures-by-month-average.php",
    youtubeVideoId: "sxA9xNjf8iQ",
    youtubeTitle: "Waterloo Co-op Explained",
    redditUrl: "https://www.reddit.com/r/uwaterloo/",
    benefits: ["💻", "🧠", "🤝", "📚", "⏱️"],
    essentials: {
      tuition: "Placeholder: CAD 9k–15k domestic / CAD 40k–63k international",
      campusLife: "Fast-paced co-op terms and tech/startup ecosystem.",
      admissions: "Very competitive for CS/engineering.",
    },
  },
  {
    name: "Western University",
    province: "Ontario",
    city: "London",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/UWO_UCC.jpg/640px-UWO_UCC.jpg",
    imageFallback: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/london-temperatures-by-month-average.php",
    youtubeVideoId: "iWjL5mW5u9A",
    youtubeTitle: "Western Campus Tour",
    redditUrl: "https://www.reddit.com/r/uwo/",
    benefits: ["🕸️", "📊", "🎉", "🚗", "📉"],
    essentials: {
      tuition: "Placeholder: CAD 7k–14k domestic / CAD 32k–58k international",
      campusLife: "Vibrant residence life and strong alumni network.",
      admissions: "Competitive cutoffs vary by faculty.",
    },
  },
  {
    name: "Queen's University",
    province: "Ontario",
    city: "Kingston",
    image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/kingston-temperatures-by-month-average.php",
    youtubeVideoId: "3uEO3W9r3is",
    youtubeTitle: "Queen's University Tour",
    redditUrl: "https://www.reddit.com/r/queensuniversity/",
    benefits: ["🏛️", "📘", "🎉", "💸", "📈"],
    essentials: {
      tuition: "Placeholder: CAD 7k–13k domestic / CAD 30k–50k international",
      campusLife: "Traditional campus town with strong school spirit.",
      admissions: "Competitive for commerce and health programs.",
    },
  },
  {
    name: "University of Ottawa",
    province: "Ontario",
    city: "Ottawa",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/ottawa-temperatures-by-month-average.php",
    youtubeVideoId: "Y5Q3nBIv8hI",
    youtubeTitle: "uOttawa Student Experience",
    redditUrl: "https://www.reddit.com/r/geegees/",
    benefits: ["🗣️", "🏛️", "💼", "🚲", "❄️"],
    essentials: {
      tuition: "Placeholder: CAD 7.5k–12k domestic / CAD 35k–53k international",
      campusLife: "Capital-city opportunities and bilingual options.",
      admissions: "Averages differ by faculty and stream.",
    },
  },
  {
    name: "Carleton University",
    province: "Ontario",
    city: "Ottawa",
    image: "https://images.unsplash.com/photo-1523240798132-8757214e76e9?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Ontario/Places/ottawa-temperatures-by-month-average.php",
    youtubeVideoId: "k5b9xK8N0uM",
    youtubeTitle: "Carleton Campus Tour",
    redditUrl: "https://www.reddit.com/r/CarletonU/",
    benefits: ["🛰️", "✍️", "🏛️", "❄️", "📈"],
    essentials: {
      tuition: "Placeholder: CAD 7k–11k domestic / CAD 28k–42k international",
      campusLife: "Riverfront campus and strong co-op culture.",
      admissions: "Program-specific cutoffs.",
    },
  },
  {
    name: "McGill University",
    province: "Quebec",
    city: "Montreal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/McGill_University_Montreal.jpg/640px-McGill_University_Montreal.jpg",
    imageFallback: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Quebec/Places/montreal-temperatures-by-month-average.php",
    youtubeVideoId: "B7kQf0O2j5k",
    youtubeTitle: "McGill Campus Walkthrough",
    redditUrl: "https://www.reddit.com/r/mcgill/",
    benefits: ["🌍", "🏛️", "🎭", "📈", "🗣️"],
    essentials: {
      tuition: "Placeholder: CAD 3k–12k domestic tiers / CAD 28k–60k international",
      campusLife: "Urban bilingual environment with global peers.",
      admissions: "High academic standards in many faculties.",
    },
  },
  {
    name: "Université de Montréal",
    province: "Quebec",
    city: "Montreal",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Quebec/Places/montreal-temperatures-by-month-average.php",
    youtubeVideoId: "f5f3f6z2WfA",
    youtubeTitle: "UdeM Campus Overview",
    redditUrl: "https://www.reddit.com/r/montreal/",
    benefits: ["🇫🇷", "🔬", "🏙️", "❄️", "📚"],
    essentials: {
      tuition: "Placeholder: CAD 4k–11k domestic tiers / CAD 24k–45k international",
      campusLife: "French-language powerhouse in Montreal.",
      admissions: "Varies by program and language background.",
    },
  },
  {
    name: "Laval University",
    province: "Quebec",
    city: "Quebec City",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1523240798132-8757214e76e9?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Quebec/Places/quebec-city-temperatures-by-month-average.php",
    youtubeVideoId: "5tV7fd5l5b8",
    youtubeTitle: "Laval University Tour",
    redditUrl: "https://www.reddit.com/r/quebeccity/",
    benefits: ["🇫🇷", "🏰", "🔬", "❄️", "📉"],
    essentials: {
      tuition: "Placeholder: CAD 4k–10k domestic / CAD 21k–38k international",
      campusLife: "Classic Quebec City setting with strong French culture.",
      admissions: "Program-based and language-dependent criteria.",
    },
  },
  {
    name: "Dalhousie University",
    province: "Nova Scotia",
    city: "Halifax",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Nova-Scotia/Places/halifax-temperatures-by-month-average.php",
    youtubeVideoId: "i2aDkV4iQqY",
    youtubeTitle: "Dalhousie Campus Tour",
    redditUrl: "https://www.reddit.com/r/dalhousie/",
    benefits: ["🌊", "🩺", "⚓", "🌧️", "💰"],
    essentials: {
      tuition: "Placeholder: CAD 8k–12k domestic / CAD 24k–40k international",
      campusLife: "Coastal city atmosphere and strong professional programs.",
      admissions: "Competitive by faculty.",
    },
  },
  {
    name: "Memorial University of Newfoundland",
    province: "Newfoundland and Labrador",
    city: "St. John's",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/Newfoundland-Labrador/Places/st-johns-temperatures-by-month-average.php",
    youtubeVideoId: "6g28pWm5HkU",
    youtubeTitle: "Memorial University Campus",
    redditUrl: "https://www.reddit.com/r/newfoundland/",
    benefits: ["💰", "🌊", "🧑‍🤝‍🧑", "🌧️", "🛫"],
    essentials: {
      tuition: "Placeholder: CAD 6k–9k domestic / CAD 12k–24k international",
      campusLife: "Affordable Atlantic campus with close community feel.",
      admissions: "Generally accessible with select competitive programs.",
    },
  },
  {
    name: "University of New Brunswick",
    province: "New Brunswick",
    city: "Fredericton",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1523240798132-8757214e76e9?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/New-Brunswick/Places/fredericton-temperatures-by-month-average.php",
    youtubeVideoId: "xwS0Dq4lSWQ",
    youtubeTitle: "UNB Student Life",
    redditUrl: "https://www.reddit.com/r/newbrunswickcanada/",
    benefits: ["⚙️", "🌲", "💰", "❄️", "🚌"],
    essentials: {
      tuition: "Placeholder: CAD 7k–10k domestic / CAD 18k–30k international",
      campusLife: "Smaller city atmosphere with engaged student life.",
      admissions: "Program-specific requirements.",
    },
  },
  {
    name: "University of Victoria",
    province: "British Columbia",
    city: "Victoria",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    imageFallback: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
    weatherUrl:
      "https://www.currentresults.com/Weather/Canada/British-Columbia/Places/victoria-temperatures-by-month-average.php",
    youtubeVideoId: "v_d6hCAeYBs",
    youtubeTitle: "UVic Campus Walk",
    redditUrl: "https://www.reddit.com/r/uvic/",
    benefits: ["🌤️", "🌲", "🚲", "💸", "🏝️"],
    essentials: {
      tuition: "Placeholder: CAD 6k–10k domestic / CAD 26k–40k international",
      campusLife: "Mild climate and coastal lifestyle near campus.",
      admissions: "Moderate competitiveness by program.",
    },
  },
];

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

  return universities
    .filter((uni) => {
      const haystack = `${uni.name} ${uni.province} ${uni.city}`.toLowerCase();
      return haystack.includes(normalized);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function openSearchInput(showSaved = true) {
  searchPill.classList.remove("logo-mode");
  searchPill.classList.add("input-mode");
  if (showSaved) {
    topSearchInput.value = savedSearchText;
  }
  topSearchInput.focus();
  topSearchInput.select();
}

function closeSearchInput() {
  searchPill.classList.add("logo-mode");
  searchPill.classList.remove("input-mode");
  topSearchInput.value = "";
}

function runSearch(query) {
  const normalizedQuery = query.trim();
  const results = filterUniversities(normalizedQuery);
  lastResults = results;
  savedSearchText = normalizedQuery;

  resultsPane.classList.remove("d-none");
  universityPane.classList.add("d-none");
  renderResults(results, normalizedQuery);
  closeSearchInput();
}

function getCommunityMeta(uni) {
  return {
    views: uni.youtubeViews || "224K views",
    age: uni.youtubeAge || "6 months ago",
    channel: uni.youtubeChannel || uni.name,
    channelLogo:
      uni.youtubeChannelLogo ||
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/YouTube_social_white_circle_%282017%29.svg/96px-YouTube_social_white_circle_%282017%29.svg.png",
  };
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

    uni.benefits.slice(0, 5).forEach((emoji, i) => {
      const chip = document.createElement("span");
      chip.className = `emoji-chip ${i >= 3 ? "con" : "pro"}`;
      chip.textContent = emoji;
      emojiStrip.appendChild(chip);
    });

    li.append(header, emojiStrip);
    resultsList.appendChild(li);
  });

  mapFrame.src = getSearchEmbedUrl(`Canada ${results.map((uni) => uni.name).join(" OR ")}`);
}

function showUniversity(uni) {
  uniName.textContent = uni.name;

  tabInformation.innerHTML = `
    <div class="uni-detail-hero">
      <img src="${uni.image}" alt="${uni.name} campus" loading="lazy" onerror="this.src='${uni.imageFallback}'" />
    </div>
    <h3>Location</h3>
    <p>${uni.city}, ${uni.province}, Canada</p>
    <h3>Weather</h3>
    <a class="weather-button" href="${uni.weatherUrl}" target="_blank" rel="noopener noreferrer">☀️🌧️ View ${uni.city} climate trends</a>
    <h3>QS World Ranking</h3>
    <p class="qs-rank">${qsWorldRankings[uni.name] ? `#${qsWorldRankings[uni.name]} worldwide` : "Ranking placeholder"}</p>
    <h3>Tuition Snapshot</h3>
    <p>${uni.essentials.tuition}</p>
    <h3>Campus Life</h3>
    <p>${uni.essentials.campusLife}</p>
    <h3>Admissions Note</h3>
    <p>${uni.essentials.admissions}</p>
  `;

  const thumb = `https://img.youtube.com/vi/${uni.youtubeVideoId}/maxresdefault.jpg`;
  const meta = getCommunityMeta(uni);
  tabCommunity.innerHTML = `
    <div class="community-block youtube-block">
      <h3>YouTube</h3>
      <a class="video-card" href="https://www.youtube.com/watch?v=${uni.youtubeVideoId}" target="_blank" rel="noopener noreferrer">
        <img class="video-thumb" src="${thumb}" alt="${uni.youtubeTitle} thumbnail" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${uni.youtubeVideoId}/hqdefault.jpg'" />
        <div class="video-meta">
          <img class="channel-logo" src="${meta.channelLogo}" alt="${meta.channel} logo" loading="lazy" />
          <div>
            <div class="video-title">${uni.youtubeTitle}</div>
            <div class="video-sub">${meta.channel}</div>
            <div class="video-sub">${meta.views} • ${meta.age}</div>
          </div>
        </div>
      </a>
    </div>
    <div class="community-block reddit-block">
      <h3>Reddit</h3>
      <a class="reddit-btn" href="${uni.redditUrl}" target="_blank" rel="noopener noreferrer">
        <img src="${redditLogo}" alt="Reddit logo" loading="lazy" />
        Join discussion on Reddit
      </a>
    </div>
  `;

  mapFrame.src = getUniversityEmbedUrl(uni);
  resultsPane.classList.add("d-none");
  universityPane.classList.remove("d-none");
  activateTab("information");
}

function activateTab(tabName) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("active", isActive);
  });
  tabInformation.classList.toggle("d-none", tabName !== "information");
  tabCommunity.classList.toggle("d-none", tabName !== "community");
}

logoActivator.addEventListener("click", () => openSearchInput(true));

topSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSearchInput();
  }
});

topSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(topSearchInput.value.trim());
});

backToResults.addEventListener("click", () => {
  resultsPane.classList.remove("d-none");
  universityPane.classList.add("d-none");
  mapFrame.src = getSearchEmbedUrl(
    lastResults.length ? `Canada ${lastResults.map((uni) => uni.name).join(" OR ")}` : "Canadian universities"
  );
  openSearchInput(true);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});

utilityButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`Sorry! ${btn.dataset.feature} isn't functional yet — this is a prototype.`);
  });
});

searchPill.classList.add("logo-mode");
runSearch("");
