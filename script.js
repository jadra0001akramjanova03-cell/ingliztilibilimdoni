
const QUESTION_COUNT = 10;
const TIME_LIMIT = 10;

const WORDS = {
  A1: [
    ["apple", "olma", "I eat an apple every day."],
    ["book", "kitob", "I read a book at night."],
    ["house", "uy", "My house is very small."],
    ["water", "suv", "Please give me some water."],
    ["friend", "do‘st", "My friend is very kind."],
    ["school", "maktab", "We go to school every morning."],
    ["family", "oila", "My family is very important."],
    ["happy", "xursand", "She is happy today."],
    ["beautiful", "chiroyli", "This is a beautiful flower."],
    ["teacher", "o‘qituvchi", "Our teacher is very helpful."],
    ["student", "talaba", "The student is in the classroom."],
    ["window", "deraza", "Please open the window."],
    ["table", "stol", "The book is on the table."],
    ["chair", "stul", "Sit on this chair."],
    ["morning", "ertalab", "I drink tea in the morning."],
    ["evening", "kechqurun", "We walk in the evening."],
    ["weather", "ob-havo", "The weather is nice today."],
    ["garden", "bog‘", "There are flowers in the garden."],
    ["yellow", "sariq", "The sun looks yellow."],
    ["window", "deraza", "I can see a tree through the window."],
    ["mother", "ona", "My mother cooks dinner."],
    ["brother", "aka yoki uka", "My brother plays football."],
    ["picture", "rasm", "There is a picture on the wall."],
    ["breakfast", "nonushta", "I have breakfast at seven."],
    ["holiday", "ta’til", "We travel during the holiday."]
  ],

  A2: [
    ["arrive", "yetib kelmoq", "We arrive at school at eight."],
    ["borrow", "qarzga olmoq", "Can I borrow your pen?"],
    ["careful", "ehtiyotkor", "Be careful when you cross the road."],
    ["decide", "qaror qilmoq", "I need to decide today."],
    ["different", "boshqacha", "These two books are different."],
    ["enough", "yetarli", "We have enough time."],
    ["famous", "mashhur", "This city is famous for its history."],
    ["friendly", "do‘stona", "Our neighbours are friendly."],
    ["healthy", "sog‘lom", "Fruit is part of a healthy diet."],
    ["improve", "yaxshilamoq", "I want to improve my English."],
    ["journey", "sayohat", "The journey took three hours."],
    ["kitchen", "oshxona", "My father is in the kitchen."],
    ["language", "til", "English is an international language."],
    ["message", "xabar", "I received your message."],
    ["opinion", "fikr", "What is your opinion?"],
    ["perhaps", "balki", "Perhaps we can meet tomorrow."],
    ["quiet", "tinch", "The library is usually quiet."],
    ["remember", "eslamoq", "Please remember my advice."],
    ["surprise", "hayrat", "The gift was a surprise."],
    ["travel", "sayohat qilmoq", "They travel every summer."],
    ["useful", "foydali", "This website is very useful."],
    ["village", "qishloq", "My grandparents live in a village."],
    ["wonderful", "ajoyib", "We had a wonderful day."],
    ["invite", "taklif qilmoq", "I want to invite my friends."],
    ["expensive", "qimmat", "This phone is too expensive."]
  ],

  B1: [
    ["achieve", "erishmoq", "You can achieve your goals with effort."],
    ["advantage", "afzallik", "Learning online has an advantage."],
    ["behaviour", "xulq-atvor", "Good behaviour is important at school."],
    ["challenge", "qiyinchilik", "Every challenge teaches us something."],
    ["community", "hamjamiyat", "The community organised an event."],
    ["confident", "o‘ziga ishongan", "She feels confident before the exam."],
    ["consequence", "oqibat", "Every decision has a consequence."],
    ["convenient", "qulay", "Online shopping is convenient."],
    ["creative", "ijodkor", "He is a creative designer."],
    ["environment", "atrof-muhit", "We should protect the environment."],
    ["experience", "tajriba", "This job gave me valuable experience."],
    ["generous", "saxiy", "Our neighbour is very generous."],
    ["independent", "mustaqil", "Students should become independent."],
    ["influence", "ta’sir", "Friends can influence our decisions."],
    ["knowledge", "bilim", "Knowledge helps people grow."],
    ["opportunity", "imkoniyat", "This is a great opportunity."],
    ["organise", "tashkil qilmoq", "We need to organise the meeting."],
    ["persuade", "ko‘ndirmoq", "He tried to persuade his friend."],
    ["prepare", "tayyorlanmoq", "I prepare for my exams every day."],
    ["relationship", "munosabat", "Trust is important in a relationship."],
    ["responsible", "mas’uliyatli", "She is responsible for the project."],
    ["solution", "yechim", "We found a solution to the problem."],
    ["successful", "muvaffaqiyatli", "The event was successful."],
    ["valuable", "qimmatli", "Time is a valuable resource."],
    ["volunteer", "ko‘ngilli", "I work as a volunteer."]
  ],

  B2: [
    ["acquire", "egallamoq", "Students acquire new skills through practice."],
    ["adequate", "yetarli", "We need adequate information."],
    ["ambitious", "ulkan maqsadli", "She is an ambitious young professional."],
    ["apparent", "ravshan", "The difference was apparent."],
    ["approach", "yondashuv", "We need a different approach."],
    ["assess", "baholamoq", "Teachers assess students regularly."],
    ["assumption", "taxmin", "Your assumption may be incorrect."],
    ["beneficial", "foydali", "Regular reading is beneficial."],
    ["complex", "murakkab", "This is a complex issue."],
    ["contribute", "hissa qo‘shmoq", "Everyone can contribute to the project."],
    ["controversial", "bahsli", "The topic became controversial."],
    ["decline", "pasaymoq", "Sales began to decline."],
    ["demonstrate", "namoyish qilmoq", "The experiment demonstrates the idea."],
    ["efficient", "samarali", "We need an efficient system."],
    ["emphasise", "ta’kidlamoq", "The report emphasises education."],
    ["establish", "tashkil etmoq", "They established a new company."],
    ["evaluate", "tahlil qilib baholamoq", "We must evaluate the results."],
    ["evident", "yaqqol", "It became evident that she was right."],
    ["flexible", "moslashuvchan", "A flexible schedule is helpful."],
    ["implement", "amalga oshirmoq", "The school will implement a new plan."],
    ["inevitable", "muqarrar", "Some changes are inevitable."],
    ["maintain", "saqlab turmoq", "It is important to maintain quality."],
    ["significant", "muhim", "The research showed significant results."],
    ["substantial", "sezilarli", "The company made substantial progress."],
    ["theory", "nazariya", "The theory needs further research."]
  ],

  C1: [
    ["ambiguous", "ikki ma’noli", "His answer was deliberately ambiguous."],
    ["articulate", "aniq ifoda etmoq", "She can articulate complex ideas."],
    ["coherent", "izchil", "The report presents a coherent argument."],
    ["compelling", "ishonarli", "He gave a compelling explanation."],
    ["comprehensive", "batafsil va keng qamrovli", "We need a comprehensive review."],
    ["contemplate", "chuqur o‘ylamoq", "She began to contemplate her future."],
    ["contradict", "zid kelmoq", "The evidence seems to contradict the claim."],
    ["crucial", "nihoyatda muhim", "Communication is crucial for teamwork."],
    ["diminish", "kamaytirmoq", "The new policy may diminish costs."],
    ["elaborate", "batafsil tushuntirmoq", "Could you elaborate on your point?"],
    ["endeavour", "sa’y-harakat", "Their endeavour was successful."],
    ["exaggerate", "bo‘rttirmoq", "Do not exaggerate the situation."],
    ["feasible", "amalga oshirish mumkin bo‘lgan", "The proposal seems feasible."],
    ["formulate", "shakllantirmoq", "We need to formulate a strategy."],
    ["inherent", "ajralmas", "Risk is inherent in every decision."],
    ["intricate", "murakkab va nozik", "The design contains intricate details."],
    ["justify", "asoslab bermoq", "You must justify your decision."],
    ["mitigate", "yumshatmoq", "The plan aims to mitigate risks."],
    ["notion", "tushuncha", "The notion of success differs between people."],
    ["plausible", "ishonarli bo‘lishi mumkin", "That is a plausible explanation."],
    ["preliminary", "dastlabki", "These are preliminary findings."],
    ["profound", "chuqur", "The book had a profound impact."],
    ["reluctant", "istaksiz", "He was reluctant to accept the offer."],
    ["scrutinise", "sinchiklab tekshirmoq", "Experts scrutinise every detail."],
    ["subsequent", "keyingi", "Subsequent events changed the situation."]
  ],

  C2: [
    ["aberration", "me’yordan chetga chiqish", "The result was an aberration from the usual pattern."],
    ["acrimonious", "keskin va adovatli", "The discussion became acrimonious."],
    ["alleviate", "yengillashtirmoq", "The measures may alleviate the problem."],
    ["anachronism", "davrga mos kelmaydigan hodisa", "The old rule seems like an anachronism."],
    ["assiduous", "tirishqoq va quntli", "Her assiduous work impressed the team."],
    ["belligerent", "tajovuzkor", "His belligerent attitude caused tension."],
    ["capricious", "beqaror va injiq", "The weather was capricious."],
    ["conundrum", "murakkab jumboq", "The issue remains a conundrum."],
    ["deleterious", "zararli", "The policy had deleterious effects."],
    ["disseminate", "tarqatmoq", "The organisation disseminates information."],
    ["ephemeral", "o‘tkinchi", "Fame can be ephemeral."],
    ["equivocal", "noaniq va ikki ma’noli", "His response was equivocal."],
    ["exacerbate", "yanada kuchaytirmoq", "The delay could exacerbate the problem."],
    ["fastidious", "o‘ta talabchan", "She is fastidious about accuracy."],
    ["fortuitous", "tasodifiy va omadli", "Their meeting was fortuitous."],
    ["gregarious", "kirishimli", "He is naturally gregarious."],
    ["intransigent", "murosasiz", "The two sides remained intransigent."],
    ["juxtapose", "yonma-yon qo‘ymoq", "The artist juxtaposes old and new styles."],
    ["meticulous", "nihoyatda sinchkov", "The researcher kept meticulous records."],
    ["obfuscate", "chalkashtirmoq", "The explanation only served to obfuscate the issue."],
    ["ostensible", "tashqi ko‘rinishdagi", "The ostensible reason was financial."],
    ["perfunctory", "yuzaki va e’tiborsiz", "He gave a perfunctory reply."],
    ["quintessential", "eng tipik namunaviy", "She is the quintessential professional."],
    ["recalcitrant", "bo‘ysunmas", "The recalcitrant group rejected the proposal."],
    ["ubiquitous", "hamma joyda uchraydigan", "Smartphones have become ubiquitous."]
  ]
};

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const currentLevel = document.getElementById("currentLevel");
const questionCounter = document.getElementById("questionCounter");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");
const timerText = document.getElementById("timerText");
const timerCircle = document.getElementById("timerCircle");
const questionType = document.getElementById("questionType");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const feedback = document.getElementById("feedback");
const answeredCount = document.getElementById("answeredCount");

const nextBtn = document.getElementById("nextBtn");
const quitBtn = document.getElementById("quitBtn");
const againBtn = document.getElementById("againBtn");
const reviewBtn = document.getElementById("reviewBtn");
const homeBtn = document.getElementById("homeBtn");
const reviewElement = document.getElementById("reviewElement");

let selectedLevel = "";
let questions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let advanceTimeout = null;
let answered = false;

let previousSets = {};

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function makeQuestions(level) {
  const words = WORDS[level];

  const generated = [];

  words.forEach((item, index) => {
    const [word, meaning, sentence] = item;

    const blankSentence = sentence.replace(
      new RegExp("\\b" + word + "\\b", "i"),
      "________"
    );

    const otherWords = words.filter((_, i) => i !== index);

    const meaningOptions = shuffle([
      meaning,
      ...shuffle(otherWords).slice(0, 3).map(x => x[1])
    ]);

    const englishOptions = shuffle([
      word,
      ...shuffle(otherWords).slice(0, 3).map(x => x[0])
    ]);

    // 1. Inglizcha so‘zning tarjimasi
    generated.push({
      type: "SO‘Z BOYLIGI",
      question: `"${word}" so‘zining o‘zbekcha ma’nosini toping.`,
      options: meaningOptions,
      correct: meaning
    });

    // 2. O‘zbekcha so‘zning inglizcha tarjimasi
    generated.push({
      type: "TARJIMA",
      question: `"${meaning}" so‘zining inglizcha tarjimasini toping.`,
      options: englishOptions,
      correct: word
    });

    // 3. Gapni to‘ldirish
    generated.push({
      type: "GAPNI TO‘LDIRING",
      question: `Bo‘sh joyni to‘g‘ri so‘z bilan to‘ldiring:\n${blankSentence}`,
      options: englishOptions,
      correct: word
    });

    // 4. Gapdagi so‘z ma’nosini aniqlash
    generated.push({
      type: "MATN TAHLILI",
      question: `Quyidagi gapda "${word}" so‘zi qanday ma’noni anglatadi?\n${sentence}`,
      options: meaningOptions,
      correct: meaning
    });
  });

  return shuffle(generated);
}

function getTenQuestions(level) {
  const allQuestions = makeQuestions(level);
  const previous = previousSets[level] || [];

  let selected = [];
  let attempts = 0;

  do {
    selected = shuffle(allQuestions).slice(0, QUESTION_COUNT);
    attempts++;

    const newIds = selected.map(q => q.question).sort().join("|");
    if (newIds !== previous.join("|")) break;

  } while (attempts < 30);

  previousSets[level] = selected.map(q => q.question).sort();
  return selected;
}

function startQuiz(level) {
  clearInterval(timerInterval);
  clearTimeout(advanceTimeout);

  selectedLevel = level;
  questions = getTenQuestions(level);
  currentQuestion = 0;
  score = 0;
  userAnswers = [];

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  currentLevel.textContent = level;

  showQuestion();
}

function showQuestion() {
  clearInterval(timerInterval);
  clearTimeout(advanceTimeout);

  answered = false;
  timeLeft = TIME_LIMIT;

  const q = questions[currentQuestion];

  questionCounter.textContent = `${currentQuestion + 1} / ${QUESTION_COUNT}`;
  progressPercent.textContent =
    `${Math.round((currentQuestion / QUESTION_COUNT) * 100)}%`;
  progressBar.style.width =
    `${(currentQuestion / QUESTION_COUNT) * 100}%`;

  questionType.textContent = q.type;
  questionText.textContent = q.question;

  feedback.textContent = "";
  feedback.className = "feedback";

  nextBtn.classList.add("hidden");
  answerOptions.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      selectAnswer(option);
    });

    answerOptions.appendChild(button);
  });

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);

  answeredCount.textContent =
    `Javoblar: ${userAnswers.length} / ${QUESTION_COUNT}`;
}

function updateTimer() {
  timerText.textContent = timeLeft;

  if (timeLeft <= 3) {
    timerCircle.classList.add("danger");
  } else {
    timerCircle.classList.remove("danger");
  }

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    selectAnswer(null);
    return;
  }

  timeLeft--;
}

function selectAnswer(answer) {
  if (answered) return;

  answered = true;
  clearInterval(timerInterval);

  const q = questions[currentQuestion];
  const isCorrect = answer === q.correct;

  if (isCorrect) {
    score++;
    feedback.textContent = "✓ To‘g‘ri javob! Ajoyib!";
    feedback.className = "feedback good";
  } else if (answer === null) {
    feedback.textContent = `Vaqt tugadi! To‘g‘ri javob: ${q.correct}`;
    feedback.className = "feedback bad";
  } else {
    feedback.textContent = `✕ Noto‘g‘ri! To‘g‘ri javob: ${q.correct}`;
    feedback.className = "feedback bad";
  }

  userAnswers.push({
    question: q.question,
    chosen: answer,
    correct: q.correct,
    isCorrect
  });

  [...answerOptions.children].forEach(button => {
    button.disabled = true;

    if (button.textContent === q.correct) {
      button.classList.add("correct");
    }

    if (button.textContent === answer && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  answeredCount.textContent =
    `Javoblar: ${userAnswers.length} / ${QUESTION_COUNT}`;

  nextBtn.textContent =
    currentQuestion === QUESTION_COUNT - 1
      ? "Natijani ko‘rish →"
      : "Keyingi savol →";

  nextBtn.classList.remove("hidden");

  advanceTimeout = setTimeout(() => {
    nextQuestion();
  }, 2500);
}

function nextQuestion() {
  if (!answered) return;

  clearTimeout(advanceTimeout);

  currentQuestion++;

  if (currentQuestion >= QUESTION_COUNT) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  clearInterval(timerInterval);
  clearTimeout(advanceTimeout);

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const correct = score;
  const wrong = userAnswers.filter(a => a.chosen !== null && !a.isCorrect).length;
  const skipped = userAnswers.filter(a => a.chosen === null).length;
  const percentage = Math.round((correct / QUESTION_COUNT) * 100);

  document.getElementById("scoreText").textContent =
    `${correct}/${QUESTION_COUNT}`;

  document.getElementById("percentageText").textContent =
    `${percentage}%`;

  document.getElementById("correctCount").textContent = correct;
  document.getElementById("wrongCount").textContent = wrong;
  document.getElementById("skippedCount").textContent = skipped;

  const title = document.getElementById("resultTitle");
  const message = document.getElementById("resultMessage");

  if (percentage >= 90) {
    title.textContent = "Ajoyib natija!";
    message.textContent = "Siz juda yaxshi bilim namoyish qildingiz!";
  } else if (percentage >= 70) {
    title.textContent = "Juda yaxshi!";
    message.textContent = "Bilimingiz yaxshi. Yana mashq qiling!";
  } else if (percentage >= 50) {
    title.textContent = "Yaxshi harakat!";
    message.textContent = "Natijangizni yanada yaxshilash mumkin.";
  } else {
    title.textContent = "Mashq qilishda davom eting!";
    message.textContent = "Xatolaringizni tahlil qiling va qayta urinib ko‘ring.";
  }

  progressBar.style.width = "100%";
  progressPercent.textContent = "100%";

  reviewElement.classList.add("hidden");
  reviewElement.innerHTML = "";
  reviewBtn.textContent = "Javoblarni ko‘rish";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showReview() {
  if (!reviewElement.classList.contains("hidden")) {
    reviewElement.classList.add("hidden");
    reviewBtn.textContent = "Javoblarni ko‘rish";
    return;
  }

  reviewElement.innerHTML = "";

  userAnswers.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "review-item";

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${item.question}`;

    const chosen = document.createElement("p");
    chosen.textContent =
      `Sizning javobingiz: ${item.chosen ?? "Javob berilmadi"}`;
    chosen.className = item.isCorrect ? "review-correct" : "review-wrong";

    const correct = document.createElement("p");
    correct.textContent = `To‘g‘ri javob: ${item.correct}`;
    correct.className = "review-correct";

    card.append(heading, chosen, correct);
    reviewElement.appendChild(card);
  });

  reviewElement.classList.remove("hidden");
  reviewBtn.textContent = "Javoblarni yashirish";

  reviewElement.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function returnHome() {
  clearInterval(timerInterval);
  clearTimeout(advanceTimeout);

  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  reviewElement.classList.add("hidden");
  reviewElement.innerHTML = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Darajani tanlash
document.querySelectorAll(".level-card").forEach(card => {
  card.addEventListener("click", () => {
    startQuiz(card.dataset.level);
  });
});

// Keyingi savol
nextBtn.addEventListener("click", nextQuestion);

// Qayta test
againBtn.addEventListener("click", () => {
  startQuiz(selectedLevel);
});

// Javoblarni ko‘rish
reviewBtn.addEventListener("click", showReview);

// Bosh sahifaga qaytish
homeBtn.addEventListener("click", returnHome);

// Testdan chiqish
quitBtn.addEventListener("click", () => {
  const confirmQuit = confirm(
    "Testdan chiqishni xohlaysizmi? Joriy natijangiz yakunlanadi."
  );

  if (confirmQuit) {
    showResult();
  }
});
