/* =====================================================================
   💐 DANH SÁCH LỜI CHÚC 20/10 CHO GIA ĐÌNH
   - Bà Ngoại (gõ: Ngoại, bà ngoại, bà...)
   - Mẹ Hiếu (gõ: Hiếu, mẹ Hiếu, mẹ...)
   - Chị Hằng (gõ: Hằng, chị Hằng, chị Cả...)
   - Chị Hiệu (gõ: Hiệu, chị Hiệu, chị 2...)
   - Chị Huế (gõ: Huế, chị Huế, chị 3...)
   - Chị Loan (gõ: Loan, chị Loan, bác sĩ Loan, chị 4...)
   ===================================================================== */
const FAMILY = [
  {
    id: "ngoai",
    ten: "Ngoại",
    danhXung: "Bà Ngoại",
    tenMacDinh: "Bà Ngoại",
    vaiTro: "Kính gửi",
    avatar: "👵",
    mau: "#f6c177",
    goiY: ["ngoại", "ngoai", "bà ngoại", "ba ngoai", "bà", "ba", "bà yêu", "ngoại yêu", "ngoai yeu", "bà ngoại yêu"],
    loiChuc: [
      "Bà Ngoại ơi, nhân ngày Phụ nữ Việt Nam 20/10, chúng cháu kính chúc Ngoại thật nhiều sức khỏe, sống lâu trăm tuổi và lúc nào cũng an vui bên đàn con cháu.",
      "Cả một đời Ngoại tảo tần hôm sớm, chịu thương chịu khó vun vén cho đại gia đình mình. Từng bữa cơm dẻo canh ngọt, từng câu chuyện cổ tích ngày xưa, từng lời răn dạy ân cần của Ngoại… luôn là hành trang quý báu nhất trong trái tim chúng cháu.",
      "Cháu mong Ngoại mỗi ngày đều ăn ngon miệng, ngủ tròn giấc, chân tay dẻo dai khỏe khoắn, không còn nhức mỏi mỗi khi trái gió trở trời. Mỗi lần cả nhà quây quần sum họp, chỉ cần thấy nụ cười hiền từ của Ngoại là chúng cháu đều cảm thấy ấm áp và bình yên đến lạ.",
      "Chúng cháu yêu thương và kính chúc Bà Ngoại mãi luôn mạnh khỏe, trường thọ! 🌸",
    ],
    ky: "— Đứa cháu ngoại luôn yêu thương Bà Ngoại",
  },
  {
    id: "me",
    ten: "Hiếu",
    danhXung: "Mẹ",
    tenMacDinh: "Mẹ Hiếu",
    vaiTro: "Kính gửi",
    avatar: "👩‍🌾",
    mau: "#ff7aa2",
    goiY: ["hiếu", "hieu", "mẹ hiếu", "me hieu", "mẹ", "me", "má", "ma", "u", "mẹ yêu", "me yeu", "mom", "bà hiếu"],
    loiChuc: [
      "Mẹ Hiếu ơi, nhân ngày 20/10, con chúc mẹ luôn dồi dào sức khỏe, tinh thần an nhiên, trẻ trung và ngập tràn niềm vui!",
      "Con thương mẹ nhiều lắm. Con biết mỗi ngày của mẹ đều bắt đầu từ lúc trời còn chưa tỏ mặt người: hết quần quật ngoài đồng áng, lại chăm chút cho đàn gà, đàn vịt, rồi lại vội vã tất bật chợ búa buôn bán ngược xuôi. Bao nhiêu nắng gắt mưa dầm, bao nhiêu nhọc nhằn vất vả mẹ đều lặng lẽ gánh hết trên vai, chỉ để cho chúng con được ăn học đủ đầy, ấm no và nên người.",
      "Hôm nay là ngày của mẹ, con chúc mẹ ruộng đồng mùa nào cũng trúng lớn bội thu, đàn gà đàn vịt luôn béo khỏe mau lớn, chợ búa lúc nào cũng buôn may bán đắt, khách mua nườm nượp. Nhưng điều con mong mỏi nhất là mẹ biết tự thương lấy mình, chịu nghỉ ngơi nhiều hơn và để chúng con được phụng dưỡng, chăm lo cho mẹ.",
      "Cảm ơn mẹ vì tất cả những hy sinh thầm lặng. Con yêu Mẹ Hiếu nhiều hơn bất cứ điều gì trên đời! ❤️",
    ],
    ky: "— Đứa con luôn thương Mẹ Hiếu thật nhiều",
  },
  {
    id: "chi-hang",
    ten: "Hằng",
    danhXung: "Chị",
    tenMacDinh: "Chị Hằng",
    vaiTro: "Thân gửi",
    avatar: "👩‍👧‍👧",
    mau: "#ff9ec4",
    goiY: ["hằng", "hang", "chị hằng", "chi hang", "chị cả", "chi ca", "chị 1", "chị một", "chị lớn", "chị đầu"],
    loiChuc: [
      "Chị Hằng ơi, chúc chị một ngày 20/10 thật rạng rỡ, ngập tràn hạnh phúc và nhận được thật nhiều yêu thương!",
      "Làm mẹ của ba cô công chúa nhỏ đáng yêu — một cô con gái lớn ngoan ngoãn và một cặp sinh đôi hai bé gái kháu khỉnh — em biết chị bận rộn và vất vả gấp mấy lần người khác. Tổ ấm nhỏ có tận bốn nàng công chúa xinh đẹp (tính cả mẹ Hằng nữa nha!), lúc nào cũng ríu rít tiếng cười, thật là hạnh phúc và ấm áp biết bao.",
      "Em chúc chị luôn xinh đẹp tươi trẻ, dẻo dai khỏe mạnh và có thêm thật nhiều thời gian dành cho bản thân. Chúc cô con gái cả luôn học giỏi, chăm ngoan và là cánh tay đắc lực giúp mẹ chăm sóc hai em gái nhỏ; chúc hai cô công chúa sinh đôi hay ăn chóng lớn, khỏe mạnh, đáng yêu và ngoan ngoãn để mẹ Hằng bớt vất vả nha 🌸",
      "Cảm ơn chị vì đã luôn là người chị cả tuyệt vời nhất trần đời. Em thương chị Hằng nhiều! 💐",
    ],
    ky: "— Em út của Chị Hằng",
  },
  {
    id: "chi-hieu",
    ten: "Hiệu",
    danhXung: "Chị",
    tenMacDinh: "Chị Hiệu",
    vaiTro: "Thân gửi",
    avatar: "👩‍👧",
    mau: "#c39bff",
    goiY: ["hiệu", "hieu", "chị hiệu", "chi hieu", "chị 2", "chi 2", "chị hai", "chi hai", "chị thứ hai", "chị thứ 2"],
    loiChuc: [
      "Gửi chị Hiệu thân yêu, chúc chị một ngày 20/10 ngập tràn niềm vui, nhận được thật nhiều hoa thơm và những món quà xinh xắn!",
      "Chúc chị luôn giữ được nét dịu dàng, trẻ trung, rạng rỡ; công việc làm ăn lúc nào cũng thuận buồm xuôi gió, may mắn hanh thông; mái ấm nhỏ luôn ấm áp tiếng cười và ngập tràn hạnh phúc.",
      "Chúc em bé nhà chị luôn khỏe mạnh, ngoan ngoãn, thông minh, mau lớn và luôn là niềm tự hào lớn lao của mẹ. Có một người mẹ đảm đang, chu đáo và dịu hiền như chị Hiệu, bé chắc chắn là đứa trẻ hạnh phúc nhất rồi.",
      "Em mong nụ cười lúc nào cũng nở trên môi chị, vì mỗi khi thấy chị vui là cả nhà mình đều thấy ấm áp vô cùng. Em thương chị Hiệu nhiều! 🌷",
    ],
    ky: "— Em út của Chị Hiệu",
  },
  {
    id: "chi-hue",
    ten: "Huế",
    danhXung: "Chị",
    tenMacDinh: "Chị Huế",
    vaiTro: "Thân gửi",
    avatar: "👩‍👦",
    mau: "#7fd1c7",
    goiY: ["huế", "hue", "chị huế", "chi hue", "chị 3", "chi 3", "chị ba", "chi ba", "chị thứ ba", "chị thứ 3"],
    loiChuc: [
      "Chị Huế ơi, chúc chị 20/10 thật vui vẻ, ngọt ngào và lúc nào cũng ngập tràn tiếng cười nha!",
      "Chúc chị mãi giữ được nguồn năng lượng tươi trẻ, tích cực và lạc quan. Chúc mọi dự định trong công việc lẫn cuộc sống của chị đều suôn sẻ, may mắn và đạt được kết quả như ý muốn.",
      "Chúc cậu con trai cưng của chị luôn khỏe mạnh, hiếu động, thông minh và thật ngoan, lớn lên sẽ trở thành một chàng trai chững chạc, biết yêu thương và che chở cho mẹ Huế. Giờ chị đã có chàng 'vệ sĩ nhí' kề bên rồi, nhưng đừng quên vẫn luôn có em út ủng hộ chị hết mình nhé!",
      "Chúc chị một ngày 20/10 thật đặc biệt, được yêu chiều hết nấc! ✨",
    ],
    ky: "— Em út của Chị Huế",
  },
  {
    id: "chi-loan",
    ten: "Loan",
    danhXung: "Chị",
    tenMacDinh: "Chị Loan",
    vaiTro: "Thân gửi",
    avatar: "👩‍⚕️",
    mau: "#8ec5ff",
    goiY: ["loan", "chị loan", "chi loan", "chị 4", "chi 4", "chị tư", "chi tu", "chị thứ tư", "chị thứ 4", "bác sĩ loan", "bac si loan", "bác sĩ", "bac si", "chị bác sĩ", "doctor"],
    loiChuc: [
      "Gửi chị Loan — người bác sĩ tuyệt vời và là niềm tự hào của cả gia đình mình! 🩺",
      "Mỗi ngày chị khoác trên mình chiếc áo blouse trắng, dốc lòng chăm sóc sức khỏe cho biết bao bệnh nhân. Những ca trực dài xuyên đêm, những phút giây căng thẳng cứu người… em biết chị đã hy sinh và nỗ lực rất nhiều. Hôm nay là 20/10, đến lượt chị phải được nghỉ ngơi, được yêu thương và chiều chuộng nha.",
      "Em chúc chị luôn mạnh khỏe, giữ vững bàn tay vàng tài hoa và trái tim nhân hậu, ấm áp. Chúc sự nghiệp y khoa của chị ngày càng thăng tiến rực rỡ, mỗi ca trực đều bình an thuận lợi. Và chị nhớ nhé: chị chăm sóc cho sức khỏe của mọi người, nhưng cũng phải biết ăn ngủ đúng giờ và giữ gìn sức khỏe cho chính mình nữa đấy!",
      "Cả nhà luôn yêu thương và tự hào về chị Loan rất nhiều! ❤️",
    ],
    ky: "— Em út của Chị Loan",
  },
  {
    id: "linh",
    ten: "Linh",
    danhXung: "Bạn",
    tenMacDinh: "Linh",
    vaiTro: "Thân gửi bạn",
    avatar: "🌸",
    mau: "#70d6ff",
    goiY: ["linh", "ban linh", "bạn linh", "linh ơi", "linh oi", "nguyễn linh", "linh linh"],
    loiChuc: [
      "Chào Linh nhé! Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn một ngày thật nhiều niềm vui, luôn tươi cười rạng rỡ và nhận được thật nhiều hoa cùng những lời chúc tốt đẹp nhất!",
      "Rất vui và may mắn vì chúng mình là những người bạn tốt của nhau. Cảm ơn Linh vì luôn là một cô bạn hòa đồng, dễ thương, luôn sẵn sàng lắng nghe, chia sẻ và đồng hành cùng tôi trong học tập, công việc cũng như những câu chuyện thường ngày.",
      "Chúc Linh lúc nào cũng tràn đầy năng lượng tích cực, luôn yêu đời, ngày càng xinh đẹp, mọi dự định công việc đều thuận buồm xuôi gió, gặt hái thật nhiều thành công và kiếm được thật nhiều tiền nha!",
      "Chúc cho tình bạn của chúng mình luôn bền vững, lúc nào cũng vui vẻ, đi ăn đi cà phê hay làm gì cũng đều hợp cạ như bây giờ! ✨🎉",
    ],
    ky: "— Người bạn luôn quý mến Linh",
  },
  {
    id: "hung",
    ten: "Hùng",
    danhXung: "",
    tenMacDinh: "Hùng",
    vaiTro: "Ủa alo? Gửi 'công chúa'",
    avatar: "💅",
    mau: "#ffd166",
    goiY: ["hùng", "hung", "thằng hùng", "thang hung", "em hùng", "em hung", "chú hùng", "chu hung", "hùng ơi", "hung oi", "cu hùng", "cu hung", "hung 💅"],
    loiChuc: [
      "Ủa alo Hùng ơi? Hôm nay là 20/10 — ngày Phụ nữ Việt Nam nha cu! Tự nhiên mò vào nhập tên mở quà chi vậy? Tính làm 'chị em phụ nữ' hay tính tranh giành hoa quà với các chị em gái thế hả 🤣",
      "Cơ mà thôi, lỡ bấm vào rồi thì cũng 'chúc mừng' Hùng nhé! Chúc 'nàng thơ' Hùng ngày 20/10 bớt lầy lại, đẹp trai phong độ hơn, da dẻ mịn màng, chăm chỉ ngoan ngoãn và bớt nghịch ngợm lại nha 💅✨",
      "Nhớ là hôm nay nhiệm vụ của đấng mày râu là phải chủ động quét nhà, rửa bát, đi mua hoa quà về tặng bà, tặng mẹ và các chị đấy nhé. Liệu mà hoàn thành nhiệm vụ cho tử tế, lười là bị 'xử đẹp' ráng chịu đấy 😆",
      "Đùa tí cho vui thôi! Chúc cu Hùng luôn mạnh khỏe, học tập và công việc luôn thuận lợi, mau mau kiếm được thật nhiều tiền và sớm có người yêu để ngày này năm sau còn có người mà tặng quà nha! Chúc 20/10 vui vẻ nhé chàng trai! 🎉🔥",
    ],
    ky: "— Người đang canh chừng cu Hùng 👀😆",
  },
];

/* =====================================================================
   CÂU NÓI TRUYỀN CẢM HỨNG CHO GIA ĐÌNH
   ===================================================================== */
const QUOTES = [
  "“Gia đình là nơi bão dừng sau cánh cửa, và nụ cười của Ngoại, của Mẹ Hiếu, của các chị là ánh nắng ấm áp nhất soi sáng đường đời em đi.”",
  "“Hôm nay 20/10, chúc những người phụ nữ tuyệt vời nhất đời em luôn rạng rỡ như những đóa hoa, bình an và hạnh phúc trọn vẹn.”",
  "“Cảm ơn vì đã là một gia đình — nơi có Ngoại che chở, có Mẹ tần tảo, và có các chị luôn yêu thương, nhường nhịn em từng ngày.”",
  "“Mỗi người một công việc, một cuộc sống riêng — nhưng chỉ cần quây quần bên mâm cơm gia đình, chúng ta lại là những người hạnh phúc nhất trần gian.”",
];

/* =====================================================================
   TIỆN ÍCH & TRUY VẤN DOM
   ===================================================================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const screens = {
  gate: $("#screen-gate"),
  home: $("#screen-home"),
  envelope: $("#screen-envelope"),
  card: $("#screen-card"),
};

let currentPerson = null;
let typingToken = 0;
let skipTyping = false;
let heartCount = 0;
let currentQuote = 0;

/* ---------- Chuẩn hóa chuỗi & tìm người ---------- */
function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .trim()
    .replace(/đ/g, "d")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findPerson(raw) {
  if (!raw) return null;
  const rawClean = raw.trim();
  const lower = rawClean.toLowerCase();
  const q = normalize(rawClean);
  if (!q) return null;

  // 1. Phân biệt chính xác giữa Mẹ "Hiếu" và Chị "Hiệu" nếu có gõ dấu
  if (/hiếu/.test(lower)) return FAMILY.find((p) => p.id === "me");
  if (/hiệu/.test(lower)) return FAMILY.find((p) => p.id === "chi-hieu");

  // 2. Nếu gõ "ngoại" hoặc "bà"
  if (q.includes("ngoai") || q === "ba" || q === "ba ngoai") {
    return FAMILY.find((p) => p.id === "ngoai");
  }

  // 3. Nếu gõ không dấu "hieu":
  if (q === "hieu") {
    // Ưu tiên Mẹ Hiếu
    return FAMILY.find((p) => p.id === "me");
  }
  if (q.includes("me") && q.includes("hieu")) return FAMILY.find((p) => p.id === "me");
  if (q.includes("chi") && q.includes("hieu")) return FAMILY.find((p) => p.id === "chi-hieu");

  // 4. Nếu gõ "linh" hoặc chứa "linh"
  if (q === "linh" || q.split(" ").includes("linh") || lower.includes("linh")) {
    return FAMILY.find((p) => p.id === "linh");
  }

  // 5. Nếu gõ "hùng" hoặc chứa "hung" (trêu cu Hùng)
  if (q === "hung" || q.split(" ").includes("hung") || lower.includes("hùng") || lower.includes("hung")) {
    return FAMILY.find((p) => p.id === "hung");
  }

  // 6. Khớp với gợi ý của từng người
  for (const person of FAMILY) {
    const keys = [
      person.id,
      person.ten,
      person.tenMacDinh,
      `${person.danhXung} ${person.ten}`,
      ...person.goiY,
    ]
      .map(normalize)
      .filter(Boolean);

    if (keys.includes(q)) return person;
  }

  // 7. Khớp chứa từ khóa (vd "tôi là hằng", "gửi chị huế", "bác sĩ loan")
  for (const person of FAMILY) {
    const normName = normalize(person.ten);
    if (normName && q.split(" ").includes(normName)) return person;
  }

  return null;
}

function displayName(p) {
  if (p.id === "ngoai") return "Bà Ngoại";
  if (p.id === "me") return "Mẹ Hiếu";
  if (p.id === "linh") return "Linh";
  if (p.id === "hung") return "Hùng 💅";
  return `${p.danhXung} ${p.ten}`;
}

/* ---------- Chuyển đổi màn hình ---------- */
function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    const active = key === name;
    el.classList.toggle("active", active);
    el.setAttribute("aria-hidden", String(!active));
  });

  if (name === "home") {
    $("#hero")?.classList.add("revealed");
    initScrollReveals();
  }
}

/* =====================================================================
   ÂM THANH (WEB AUDIO API TỰ TỔNG HỢP — KHÔNG CẦN FILE NGOÀI)
   ===================================================================== */
let audioCtx = null;
let isMusicPlaying = false;
let musicInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playNote(freq, type = "sine", duration = 1.2, startDelay = 0, gainLevel = 0.15) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const startTime = ctx.currentTime + startDelay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);

  // Hiệu ứng âm lượng chuông ngân (decay tự nhiên)
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

// Chuỗi nốt nhạc ngân vang như chuông gió khi mở quà
function playMagicalChime() {
  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98]; // C5, E5, G5, C6, E6, G6
  notes.forEach((freq, idx) => {
    playNote(freq, "sine", 1.8, idx * 0.09, 0.12);
  });
}

// Tiếng lật phong bì nhẹ nhàng
function playUnsealSound() {
  playNote(440, "sine", 0.6, 0, 0.08);
  playNote(880, "triangle", 0.9, 0.15, 0.06);
}

// Tiếng gõ chữ lách cách êm ái
function playTypeSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const freq = 400 + Math.random() * 200;
  playNote(freq, "sine", 0.06, 0, 0.03);
}

// Tiếng 'pop' dễ thương khi thả tim
function playPopSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  playNote(600 + Math.random() * 150, "triangle", 0.2, 0, 0.12);
}

// Giai điệu hộp nhạc ru êm dịu phong cách Á Đông (ngũ cung)
const MUSIC_BOX_MELODY = [
  523.25, 587.33, 659.25, 783.99, 880.00, 1046.5, 880.00, 783.99,
  659.25, 783.99, 880.00, 1046.5, 1174.66, 1046.5, 880.00, 659.25,
  587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 440.00, 523.25
];
let melodyStep = 0;

function startMusic() {
  if (isMusicPlaying) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();
  isMusicPlaying = true;
  $("#music-btn")?.classList.add("playing");
  clearInterval(musicInterval);
  musicInterval = setInterval(() => {
    if (!isMusicPlaying) return;
    const freq = MUSIC_BOX_MELODY[melodyStep % MUSIC_BOX_MELODY.length];
    playNote(freq, "sine", 1.8, 0, 0.08);
    // Nốt đệm âm trầm cách 2 nhịp
    if (melodyStep % 4 === 0) {
      playNote(freq / 2, "sine", 2.2, 0, 0.05);
    }
    melodyStep++;
  }, 450);
}

function pauseMusic() {
  if (!isMusicPlaying) return;
  isMusicPlaying = false;
  clearInterval(musicInterval);
  $("#music-btn")?.classList.remove("playing");
}

function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
    toast("Đã tắt nhạc nền 🎵");
  } else {
    startMusic();
    toast("Đang phát giai điệu hộp nhạc du dương 🎶");
  }
}

$("#music-btn")?.addEventListener("click", toggleMusic);

/* =====================================================================
   MỞ QUÀ & CHUYỂN TIẾP THIỆP
   ===================================================================== */
function isGuestPerson(person) {
  return !!(person && (person.id === "hung" || person.id === "linh"));
}

function updateFamilyTreeAccess(person) {
  const isGuest = isGuestPerson(person);
  const familySec = $("#family");
  const scrollCue = $("#scroll-cue");

  if (isGuest) {
    // Ẩn và khóa phần cây gia đình hoàn toàn khi Hùng hoặc Linh đăng nhập
    if (familySec) {
      familySec.classList.add("locked-tree");
      familySec.style.display = "none";
      familySec.setAttribute("aria-hidden", "true");
    }
    if (scrollCue) {
      scrollCue.style.display = "none";
    }
    const treeContainer = $("#tree");
    if (treeContainer) {
      treeContainer.innerHTML = `
        <div class="tree-locked-notice">
          <span class="tree-lock-icon">🔒</span>
          <h3>Khu Vực Cây Gia Đình Đã Khóa Bảo Mật</h3>
          <p>Khu vực Cây gia đình và các lá thư riêng chỉ dành riêng cho các thành viên trong gia đình. Cảm ơn ${displayName(person)} đã ghé thăm! 💐</p>
        </div>
      `;
    }
  } else {
    // Mở lại bình thường cho nội bộ gia đình
    if (familySec) {
      familySec.classList.remove("locked-tree");
      familySec.style.display = "";
      familySec.removeAttribute("aria-hidden");
    }
    if (scrollCue) {
      scrollCue.style.display = "";
    }
    renderFamilyTree();
  }
}

async function openFor(person, isFromGate = false) {
  // Nếu đang là Hùng hoặc Linh đăng nhập, chặn mở thiệp của người trong gia đình
  if (isGuestPerson(currentPerson) && person.id !== currentPerson.id) {
    toast("🚫 Cây gia đình đã bị khóa riêng tư cho nội bộ gia đình!");
    return;
  }

  currentPerson = person;
  updateFamilyTreeAccess(person);
  document.title = `Gửi ${displayName(person)} – Chúc Mừng 20/10 💐`;

  // Mở âm thanh và phát nhạc nền nếu chưa chạy
  getAudioContext();
  startMusic();

  // Cập nhật tên lên phong bì
  $("#env-letter-name").textContent = displayName(person);
  $("#env-hint").textContent = `Có một bức thư gửi riêng cho ${displayName(person)}...`;
  screens.envelope.classList.remove("open");

  if (isFromGate) {
    const giftBtn = $("#gift-btn");
    giftBtn?.classList.add("open");
    playMagicalChime();

    // Nổ pháo hoa rực rỡ ngay từ hộp quà
    const rect = giftBtn ? giftBtn.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
    launchFireworkBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, person.mau);
    burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 70, person.mau);

    await sleep(1200);
  }

  // Chuyển sang phong bì
  showScreen("envelope");
  await sleep(1000);

  // Mở nắp phong bì
  $("#envelope")?.classList.add("open");
  playUnsealSound();
  await sleep(1700);

  // Chuyển sang thiệp chúc
  renderCard(person);
  showScreen("card");
  screens.card.scrollTop = 0;

  // Bắn pháo hoa chào mừng thiệp
  const cardRect = $("#card")?.getBoundingClientRect() || { left: window.innerWidth / 2, top: 200, width: 0 };
  launchFireworkBurst(cardRect.left + cardRect.width / 2, Math.max(cardRect.top + 60, 100), person.mau);
  burstConfetti(cardRect.left + cardRect.width / 2, Math.max(cardRect.top + 60, 100), 80, person.mau);

  await sleep(600);
  typeWish(person);
}

function renderCard(person) {
  const card = $("#card");
  card.style.setProperty("--accent", person.mau);
  $("#card-avatar").textContent = person.avatar;
  $("#card-role").textContent = person.vaiTro;
  $("#card-name").textContent = displayName(person);
  $("#card-body").innerHTML = "";
  $("#card-sign").textContent = person.ky;
  $("#card-sign").classList.remove("show");

  // Nút xem cây gia đình: Nếu là Hùng hoặc Linh thì ẨN HOÀN TOÀN
  const viewFamBtn = $("#view-family-btn");
  if (viewFamBtn) {
    if (isGuestPerson(person)) {
      viewFamBtn.style.display = "none";
    } else {
      viewFamBtn.style.display = "";
      viewFamBtn.textContent = "🌿 Vườn hoa & Cây gia đình";
    }
  }

  // Reset thả tim
  heartCount = 0;
  const countEl = $("#heart-count");
  if (countEl) countEl.textContent = "0";
}

/* ---------- Hiệu ứng gõ chữ từng ký tự ---------- */
async function typeWish(person) {
  const token = ++typingToken;
  skipTyping = false;
  const cardBody = $("#card-body");
  const cardSign = $("#card-sign");
  cardBody.innerHTML = "";
  cardSign.classList.remove("show");

  for (const text of person.loiChuc) {
    const p = document.createElement("p");
    p.classList.add("typing");
    cardBody.appendChild(p);

    const chars = Array.from(text);
    for (let i = 0; i < chars.length; i++) {
      if (token !== typingToken) return;
      if (skipTyping) {
        p.textContent = text;
        break;
      }
      p.textContent += chars[i];
      if (i % 4 === 0) playTypeSound();
      await sleep(/[,.!?…:;]/.test(chars[i]) ? 160 : 22);
    }
    p.classList.remove("typing");
    if (!skipTyping) await sleep(260);
  }

  if (token !== typingToken) return;
  cardSign.classList.add("show");
  const r = cardSign.getBoundingClientRect();
  burstConfetti(r.left + r.width / 2, r.top, 35, person.mau);
}

// Bấm vào vùng văn bản để hiện toàn bộ không cần đợi gõ
$("#card-body")?.addEventListener("click", () => {
  skipTyping = true;
});

$("#replay-btn")?.addEventListener("click", () => {
  if (currentPerson) typeWish(currentPerson);
});

/* ---------- Thả tim với số đếm & tim bay ---------- */
$("#heart-btn")?.addEventListener("click", (e) => {
  heartCount++;
  const countEl = $("#heart-count");
  if (countEl) countEl.textContent = String(heartCount);

  const btn = $("#heart-btn");
  btn?.classList.remove("pop");
  void btn?.offsetWidth;
  btn?.classList.add("pop");

  playPopSound();

  // Tạo tim bay lên
  createFloatingHeart(e.clientX, e.clientY);
  createFloatingHeart(e.clientX + (Math.random() * 40 - 20), e.clientY);

  if (heartCount % 5 === 0) {
    burstConfetti(e.clientX, e.clientY, 30, currentPerson?.mau || "#ff7aa2");
  }
});

function createFloatingHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  const hearts = ["❤️", "💖", "🌸", "💕", "✨", "🌷"];
  heart.textContent = hearts[(Math.random() * hearts.length) | 0];

  const dx = (Math.random() - 0.5) * 160;
  const rot = (Math.random() - 0.5) * 60;
  const s = 18 + Math.random() * 20;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.setProperty("--dx", `${dx}px`);
  heart.style.setProperty("--rot", `${rot}deg`);
  heart.style.setProperty("--s", `${s}px`);

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1900);
}

/* ---------- Điều hướng các nút ---------- */
$("#back-btn")?.addEventListener("click", () => {
  typingToken++;
  currentPerson = null;
  updateFamilyTreeAccess(null);
  document.title = "Chúc Mừng 20/10 – Gửi Những Người Phụ Nữ Tuyệt Vời Nhất";
  history.replaceState(null, "", location.pathname);

  // Đặt lại hộp quà ở gate
  $("#gift-btn")?.classList.remove("open");
  const gateInput = $("#gate-input");
  if (gateInput) gateInput.value = "";
  $("#gate-msg").textContent = "";

  showScreen("gate");
});

$("#view-family-btn")?.addEventListener("click", () => {
  if (isGuestPerson(currentPerson)) {
    toast("🚫 Cây gia đình đã bị khóa riêng tư cho nội bộ gia đình!");
    return;
  }
  showScreen("home");
  setTimeout(() => {
    $("#family")?.scrollIntoView({ behavior: "smooth" });
  }, 300);
});

$("#gate-explore-btn")?.addEventListener("click", () => {
  showScreen("home");
});

$("#foot-back-gate")?.addEventListener("click", () => {
  showScreen("gate");
});

$("#scroll-cue")?.addEventListener("click", () => {
  if (isGuestPerson(currentPerson)) return;
  $("#family")?.scrollIntoView({ behavior: "smooth" });
});

/* ---------- Copy link chia sẻ riêng ---------- */
$("#copy-btn")?.addEventListener("click", async () => {
  if (!currentPerson) return;
  const url = `${location.href.split(/[?#]/)[0]}?ten=${encodeURIComponent(currentPerson.id)}`;
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  toast(`Đã sao chép link thiệp của ${displayName(currentPerson)} 💌`);
});

function toast(msg) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2800);
}

/* =====================================================================
   XỬ LÝ ĐĂNG NHẬP (TẠI GATE & TẠI TRANG CHỦ)
   ===================================================================== */
function handleLoginAttempt(inputEl, wrapEl, msgEl, isFromGate = false) {
  const value = inputEl.value.trim();
  const person = findPerson(value);

  if (!person) {
    wrapEl.classList.remove("shake");
    void wrapEl.offsetWidth;
    wrapEl.classList.add("shake");

    if (!value) {
      msgEl.textContent = "Bạn hãy nhập tên trước đã nha 💕";
    } else {
      msgEl.textContent = `Chưa tìm thấy thiệp cho “${value}”. Bạn vui lòng kiểm tra lại tên nhé 🌸`;
    }
    return;
  }

  msgEl.textContent = "";
  openFor(person, isFromGate);
}

// Form ở cổng mở quà (Gate)
$("#gate-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  handleLoginAttempt($("#gate-input"), $("#gate-input-wrap"), $("#gate-msg"), true);
});

// Chạm vào hộp quà khi đang ở Gate
$("#gift-btn")?.addEventListener("click", () => {
  const input = $("#gate-input");
  if (input && input.value.trim()) {
    handleLoginAttempt(input, $("#gate-input-wrap"), $("#gate-msg"), true);
  } else {
    // Nếu chưa nhập tên, nhấp nháy form và focus vào ô nhập
    $("#gate-input-wrap")?.classList.add("shake");
    setTimeout(() => $("#gate-input-wrap")?.classList.remove("shake"), 600);
    $("#gate-msg").textContent = "Nhập tên của bạn để mở khóa lá thư bí mật nha 🎁";
    input?.focus();
    playPopSound();
  }
});

// Form ở trang chủ (Hero)
$("#name-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  handleLoginAttempt($("#name-input"), $("#home-input-wrap"), $("#form-msg"), false);
});

/* =====================================================================
   MODAL BẢO MẬT KHÓA THƯ TRÊN CÂY GIA ĐÌNH
   ===================================================================== */
let modalPendingPerson = null;

function openLockModalFor(person) {
  modalPendingPerson = person;
  const modal = $("#lock-modal");
  const targetNameEl = $("#modal-target-name");
  const modalInput = $("#modal-input");
  const modalMsg = $("#modal-msg");

  if (targetNameEl) targetNameEl.textContent = displayName(person);
  if (modalInput) modalInput.value = "";
  if (modalMsg) modalMsg.textContent = "";

  modal?.classList.add("open");
  modal?.setAttribute("aria-hidden", "false");
  setTimeout(() => modalInput?.focus(), 250);
}

function closeLockModal() {
  const modal = $("#lock-modal");
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
  modalPendingPerson = null;
}

$("#modal-close-btn")?.addEventListener("click", closeLockModal);
$("#modal-overlay")?.addEventListener("click", closeLockModal);

// Xác minh tên khi người dùng bấm mở khóa trên modal
$("#modal-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!modalPendingPerson) return;

  const inputEl = $("#modal-input");
  const wrapEl = $("#modal-input-wrap");
  const msgEl = $("#modal-msg");
  const value = inputEl ? inputEl.value.trim() : "";
  const matchedPerson = findPerson(value);

  // KHÓA BẢO MẬT: CHỈ ĐƯỢC PHÉP MỞ NẾU NHẬP ĐÚNG TÊN CỦA CHÍNH NGƯỜI ĐÓ!
  if (!matchedPerson || matchedPerson.id !== modalPendingPerson.id) {
    wrapEl?.classList.remove("shake");
    void wrapEl?.offsetWidth;
    wrapEl?.classList.add("shake");
    playPopSound();
    msgEl.textContent = `🚫 Không đúng tên! Lá thư này được bảo mật riêng cho ${displayName(modalPendingPerson)}. Bạn không thể đọc thư của người khác nhé 🤫`;
    return;
  }

  // Nếu nhập đúng tên:
  closeLockModal();
  openFor(modalPendingPerson, false);
});

/* =====================================================================
   DỰNG CÂY GIA ĐÌNH TƯƠNG TÁC (FAMILY TREE ĐÃ KHÓA BẢO MẬT)
   ===================================================================== */
function renderFamilyTree() {
  const treeContainer = $("#tree");
  if (!treeContainer) return;

  if (isGuestPerson(currentPerson)) {
    treeContainer.innerHTML = `
      <div class="tree-locked-notice">
        <span class="tree-lock-icon">🔒</span>
        <h3>Khu Vực Cây Gia Đình Đã Khóa Bảo Mật</h3>
        <p>Khu vực Cây gia đình và các lá thư riêng chỉ dành riêng cho các thành viên trong gia đình. Cảm ơn ${displayName(currentPerson)} đã ghé thăm! 💐</p>
      </div>
    `;
    return;
  }

  const ngoai = FAMILY.find((p) => p.id === "ngoai");
  const me = FAMILY.find((p) => p.id === "me");
  const sisters = FAMILY.filter((p) => p.id.startsWith("chi-"));

  treeContainer.innerHTML = `
    <!-- Tầng 1: Bà Ngoại -->
    <div class="tree-row tier-1">
      <div class="node" data-id="${ngoai.id}" style="--accent: ${ngoai.mau}">
        <div class="node-avatar">${ngoai.avatar}</div>
        <h3 class="node-name">${displayName(ngoai)}</h3>
        <span class="node-cta">🌸 Mở thiệp →</span>
      </div>
    </div>

    <!-- Tầng 2: Mẹ Hiếu -->
    <div class="tree-row tier-2">
      <div class="node" data-id="${me.id}" style="--accent: ${me.mau}">
        <div class="node-avatar">${me.avatar}</div>
        <h3 class="node-name">${displayName(me)}</h3>
        <span class="node-cta">🌸 Mở thiệp →</span>
      </div>
    </div>

    <!-- Tầng 3: 4 Chị em -->
    <div class="tree-row tier-3">
      ${sisters
        .map(
          (sis) => `
        <div class="node" data-id="${sis.id}" style="--accent: ${sis.mau}">
          <div class="node-avatar">${sis.avatar}</div>
          <h3 class="node-name">${displayName(sis)}</h3>
          <span class="node-cta">🌸 Mở thiệp →</span>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  // Gắn sự kiện click mở ngay thiệp của người đó
  treeContainer.querySelectorAll(".node").forEach((node) => {
    node.addEventListener("click", () => {
      const id = node.getAttribute("data-id");
      const person = FAMILY.find((p) => p.id === id);
      if (person) openFor(person, false);
    });

    // Hiệu ứng 3D Parallax khi rê chuột vào node
    node.addEventListener("mousemove", (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y - rect.height / 2) / (rect.height / 2)) * -10;
      const ry = ((x - rect.width / 2) / (rect.width / 2)) * 10;
      node.style.setProperty("--rx", `${rx}deg`);
      node.style.setProperty("--ry", `${ry}deg`);
      node.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      node.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    });

    node.addEventListener("mouseleave", () => {
      node.style.setProperty("--rx", "0deg");
      node.style.setProperty("--ry", "0deg");
    });
  });
}

/* =====================================================================
   BĂNG CHUYỀN DANH NGÔN (QUOTE CAROUSEL)
   ===================================================================== */
function initQuotes() {
  const textEl = $("#quote-text");
  const dotsEl = $("#quote-dots");
  if (!textEl || !dotsEl) return;

  dotsEl.innerHTML = QUOTES.map(
    (_, i) => `<button type="button" aria-label="Câu ${i + 1}" class="${i === 0 ? "on" : ""}"></button>`
  ).join("");

  function showQuote(idx) {
    currentQuote = (idx + QUOTES.length) % QUOTES.length;
    textEl.classList.add("out");
    setTimeout(() => {
      textEl.textContent = QUOTES[currentQuote];
      textEl.classList.remove("out");
      $$("#quote-dots button").forEach((btn, i) => {
        btn.classList.toggle("on", i === currentQuote);
      });
    }, 350);
  }

  showQuote(0);
  setInterval(() => showQuote(currentQuote + 1), 6500);

  $$("#quote-dots button").forEach((btn, i) => {
    btn.addEventListener("click", () => showQuote(i));
  });
}

/* =====================================================================
   HIỆU ỨNG TÁCH KÝ TỰ TIÊU ĐỀ HERO
   ===================================================================== */
function splitTitleLetters() {
  $$("[data-split]").forEach((el) => {
    const text = el.textContent.trim();
    el.innerHTML = text
      .split(" ")
      .map(
        (word) =>
          `<span class="word">${Array.from(word)
            .map((ch) => `<span class="ch">${ch}</span>`)
            .join("")}</span>`
      )
      .join(" ");
  });

  let index = 0;
  $$(".hero .title .ch").forEach((ch) => {
    ch.style.setProperty("--i", String(index++));
  });
}

/* =====================================================================
   HIỆU ỨNG CUỘN (INTERSECTION OBSERVER)
   ===================================================================== */
function initScrollReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    },
    { threshold: 0.15 }
  );

  $$(".reveal").forEach((el, idx) => {
    el.style.setProperty("--rd", `${(idx % 4) * 0.14}s`);
    observer.observe(el);
  });
}

/* =====================================================================
   HIỆU ỨNG NGHIÊNG BỨC THƯ 3D (PARALLAX TILT & GLARE CHUYÊN NGHIỆP)
   ===================================================================== */
const cardEl = $("#card");
if (cardEl) {
  let targetRx = 0, targetRy = 0;
  let currentRx = 0, currentRy = 0;
  let isTilting = false;

  function updateTilt() {
    if (!isTilting) {
      currentRx += (0 - currentRx) * 0.12;
      currentRy += (0 - currentRy) * 0.12;
    } else {
      currentRx += (targetRx - currentRx) * 0.18;
      currentRy += (targetRy - currentRy) * 0.18;
    }

    cardEl.style.setProperty("--rx", `${currentRx.toFixed(2)}deg`);
    cardEl.style.setProperty("--ry", `${currentRy.toFixed(2)}deg`);

    if (Math.abs(currentRx) > 0.04 || Math.abs(currentRy) > 0.04 || isTilting) {
      requestAnimationFrame(updateTilt);
    }
  }

  function handleCardTilt(clientX, clientY, rect) {
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    targetRx = ((y - rect.height / 2) / (rect.height / 2)) * -14;
    targetRy = ((x - rect.width / 2) / (rect.width / 2)) * 14;

    cardEl.style.setProperty("--mx", `${((x / rect.width) * 100).toFixed(1)}%`);
    cardEl.style.setProperty("--my", `${((y / rect.height) * 100).toFixed(1)}%`);

    if (!isTilting) {
      isTilting = true;
      requestAnimationFrame(updateTilt);
    }
  }

  cardEl.addEventListener("mousemove", (e) => {
    const rect = cardEl.getBoundingClientRect();
    handleCardTilt(e.clientX, e.clientY, rect);
  });

  cardEl.addEventListener("mouseleave", () => {
    isTilting = false;
    targetRx = 0;
    targetRy = 0;
  });

  cardEl.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches[0]) {
        const rect = cardEl.getBoundingClientRect();
        handleCardTilt(e.touches[0].clientX, e.touches[0].clientY, rect);
      }
    },
    { passive: true }
  );

  cardEl.addEventListener("touchend", () => {
    isTilting = false;
    targetRx = 0;
    targetRy = 0;
  });

  // Hỗ trợ cảm biến con quay hồi chuyển trên điện thoại (Gyroscope tilt)
  if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== "function") {
    window.addEventListener(
      "deviceorientation",
      (e) => {
        if (!screens.card.classList.contains("active")) return;
        const gamma = e.gamma; // trục trái - phải (-90 đến 90)
        const beta = e.beta;   // trục trước - sau (-180 đến 180)
        if (gamma !== null && beta !== null) {
          targetRy = Math.max(Math.min(gamma * 0.45, 14), -14);
          targetRx = Math.max(Math.min((beta - 45) * 0.35, 14), -14);
          if (!isTilting) {
            isTilting = true;
            requestAnimationFrame(updateTilt);
          }
        }
      },
      { passive: true }
    );
  }
}

/* =====================================================================
   HIỆU ỨNG NGHIÊNG BỨC THƯ TAY GỬI CẢ NHÀ (.paper)
   ===================================================================== */
const paperEl = $(".paper");
if (paperEl) {
  paperEl.addEventListener("mousemove", (e) => {
    const rect = paperEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const prx = ((y - rect.height / 2) / (rect.height / 2)) * -8;
    const pry = ((x - rect.width / 2) / (rect.width / 2)) * 8;
    paperEl.style.setProperty("--prx", `${prx.toFixed(2)}deg`);
    paperEl.style.setProperty("--pry", `${pry.toFixed(2)}deg`);
  });

  paperEl.addEventListener("mouseleave", () => {
    paperEl.style.setProperty("--prx", "0deg");
    paperEl.style.setProperty("--pry", "0deg");
  });
}

/* =====================================================================
   CANVAS LỚP SAU: CÁNH HOA ĐÀO / HOA HỒNG RƠI 3D (FX-BACK)
   ===================================================================== */
const canvasBack = $("#fx-back");
const ctxBack = canvasBack.getContext("2d");
let W = 0, H = 0;
let petals = [];
const PETAL_COLORS = ["#ffb3c7", "#ff8fab", "#ffc8dd", "#f7a1c4", "#ffd6e0", "#ffe5ec", "#f9bec7"];

function resizeCanvases() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;

  [canvasBack, canvasFront].forEach((cv) => {
    if (!cv) return;
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + "px";
    cv.style.height = H + "px";
    const ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  });

  const count = W < 600 ? 28 : 50;
  while (petals.length < count) petals.push(createPetal(true));
  petals.length = count;
}

function createPetal(randomY = false) {
  return {
    x: Math.random() * W,
    y: randomY ? Math.random() * H : -25,
    size: 7 + Math.random() * 11,
    vy: 0.5 + Math.random() * 0.9,
    vx: -0.4 + Math.random() * 0.8,
    rot: Math.random() * Math.PI * 2,
    vr: (Math.random() - 0.5) * 0.03,
    flip: Math.random() * Math.PI * 2,
    vf: 0.015 + Math.random() * 0.025,
    color: PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0],
    alpha: 0.45 + Math.random() * 0.5,
  };
}

function drawPetal(ctx, p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rot);
  ctx.scale(1, 0.35 + Math.abs(Math.sin(p.flip)) * 0.65);
  ctx.globalAlpha = p.alpha;
  ctx.fillStyle = p.color;
  const s = p.size;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.9, -s * 0.6, s * 0.7, s * 0.6, 0, s);
  ctx.bezierCurveTo(-s * 0.7, s * 0.6, -s * 0.9, -s * 0.6, 0, -s);
  ctx.fill();
  ctx.restore();
}

/* =====================================================================
   CANVAS LỚP TRƯỚC: PHÁO HOA & PHÁO TIM RỰC RỠ (FX-FRONT)
   ===================================================================== */
const canvasFront = $("#fx-front");
const ctxFront = canvasFront.getContext("2d");
const fireworks = [];
const confettiParticles = [];

// Pháo hoa nổ bung thành chùm sao
function launchFireworkBurst(x, y, baseColor = "#ff7aa2") {
  const sparkColors = [baseColor, "#ffd700", "#ff69b4", "#00ffff", "#ffffff", "#ff80df"];
  const count = 55;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.2;
    const speed = 2.5 + Math.random() * 5.5;
    fireworks.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: 0.012 + Math.random() * 0.01,
      color: sparkColors[(Math.random() * sparkColors.length) | 0],
      size: 2.5 + Math.random() * 3,
      trail: [],
    });
  }
}

// Pháo tim và kim tuyến rơi xoay
function burstConfetti(x, y, count = 60, accent = "#ff7aa2") {
  const colors = [accent, "#f6c177", "#ffb3c7", "#ffffff", "#ff7aa2", "#a77bff"];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.5 + Math.random() * 7;
    confettiParticles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2.8,
      size: 8 + Math.random() * 12,
      life: 1,
      decay: 0.009 + Math.random() * 0.012,
      rot: (Math.random() - 0.5) * 0.6,
      color: colors[(Math.random() * colors.length) | 0],
      isHeart: Math.random() < 0.65,
    });
  }
}

function drawHeartPath(ctx, s) {
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.25);
  ctx.bezierCurveTo(0, -s * 0.5, -s * 0.5, -s * 0.5, -s * 0.5, -s * 0.2);
  ctx.bezierCurveTo(-s * 0.5, s * 0.1, 0, s * 0.3, 0, s * 0.5);
  ctx.bezierCurveTo(0, s * 0.3, s * 0.5, s * 0.1, s * 0.5, -s * 0.2);
  ctx.bezierCurveTo(s * 0.5, -s * 0.5, 0, -s * 0.5, 0, -s * 0.25);
}

/* =====================================================================
   VÒNG LẶP CHUYỂN ĐỘNG CHÍNH (ANIMATION LOOP)
   ===================================================================== */
function animate() {
  // 1. Vẽ cánh hoa rơi ở lớp nền
  ctxBack.clearRect(0, 0, W, H);
  for (const p of petals) {
    p.flip += p.vf;
    p.rot += p.vr;
    p.x += p.vx + Math.sin(p.flip) * 0.5;
    p.y += p.vy;
    if (p.y > H + 30 || p.x < -40 || p.x > W + 40) {
      Object.assign(p, createPetal(false));
    }
    drawPetal(ctxBack, p);
  }

  // 2. Vẽ pháo hoa và pháo tim ở lớp trước
  ctxFront.clearRect(0, 0, W, H);

  // Pháo hoa tia sáng
  for (let i = fireworks.length - 1; i >= 0; i--) {
    const f = fireworks[i];
    f.vy += 0.08; // trọng lực
    f.vx *= 0.98;
    f.vy *= 0.98;
    f.x += f.vx;
    f.y += f.vy;
    f.alpha -= f.decay;

    if (f.alpha <= 0) {
      fireworks.splice(i, 1);
      continue;
    }

    ctxFront.save();
    ctxFront.globalAlpha = Math.max(f.alpha, 0);
    ctxFront.fillStyle = f.color;
    ctxFront.shadowColor = f.color;
    ctxFront.shadowBlur = 10;
    ctxFront.beginPath();
    ctxFront.arc(f.x, f.y, f.size, 0, Math.PI * 2);
    ctxFront.fill();
    ctxFront.restore();
  }

  // Pháo tim rơi
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const c = confettiParticles[i];
    c.vy += 0.1;
    c.vx *= 0.985;
    c.x += c.vx;
    c.y += c.vy;
    c.life -= c.decay;

    if (c.life <= 0) {
      confettiParticles.splice(i, 1);
      continue;
    }

    ctxFront.save();
    ctxFront.translate(c.x, c.y);
    ctxFront.rotate(c.rot);
    ctxFront.globalAlpha = Math.max(c.life, 0);
    ctxFront.fillStyle = c.color;

    if (c.isHeart) {
      drawHeartPath(ctxFront, c.size);
      ctxFront.fill();
    } else {
      ctxFront.fillRect(-c.size * 0.2, -c.size * 0.4, c.size * 0.4, c.size * 0.8);
    }
    ctxFront.restore();
  }

  requestAnimationFrame(animate);
}

/* =====================================================================
   KHỞI TẠO ỨNG DỤNG
   ===================================================================== */
window.addEventListener("resize", resizeCanvases);

// Kích hoạt audio và tự động phát nhạc nền êm dịu khi người dùng tương tác lần đầu
const startOnFirstGesture = () => {
  getAudioContext();
  startMusic();
  window.removeEventListener("pointerdown", startOnFirstGesture);
  window.removeEventListener("touchstart", startOnFirstGesture);
  window.removeEventListener("keydown", startOnFirstGesture);
};
window.addEventListener("pointerdown", startOnFirstGesture);
window.addEventListener("touchstart", startOnFirstGesture);
window.addEventListener("keydown", startOnFirstGesture);

// Khởi chạy các khối
splitTitleLetters();
renderFamilyTree();
initQuotes();
resizeCanvases();
animate();

// Kiểm tra tham số URL ?ten=... hoặc ?name=... để mở thẳng thiệp
const urlParam = new URLSearchParams(location.search).get("ten") || new URLSearchParams(location.search).get("name");
if (urlParam) {
  const directPerson = findPerson(urlParam);
  if (directPerson) {
    setTimeout(() => openFor(directPerson, false), 400);
  }
}
