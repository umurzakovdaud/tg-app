// OnlyFits — Client Logic & State Management

// Core Exercise Catalog
const EXERCISES_DB = [
  // Грудь (Chest)
  {
    id: "ex_chest_1",
    name: "Жим штанги лежа на горизонтальной скамье",
    muscle: "chest",
    muscle_ru: "Грудь",
    equipment: "Штанга",
    tips: "Сведите лопатки, упритесь ногами в пол. Опускайте штангу подконтрольно к нижней части груди."
  },
  {
    id: "ex_chest_2",
    name: "Жим гантелей на наклонной скамье (30°)",
    muscle: "chest",
    muscle_ru: "Грудь",
    equipment: "Гантели",
    tips: "Акцент на верхний пучок грудных. В верхней точке не соударяйте гантели."
  },
  {
    id: "ex_chest_3",
    name: "Отжимания на брусьях",
    muscle: "chest",
    muscle_ru: "Грудь / Трицепс",
    equipment: "Брусья",
    tips: "Наклоните корпус вперед для акцента на грудь. Опускайтесь до прямого угла в локтях."
  },
  {
    id: "ex_chest_4",
    name: "Сведение рук в кроссовере",
    muscle: "chest",
    muscle_ru: "Грудь",
    equipment: "Блочный тренажер",
    tips: "Фиксируйте локти слегка согнутыми, сводите руки за счет сокращения груди."
  },

  // Спина (Back)
  {
    id: "ex_back_1",
    name: "Подтягивания широким хватом",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Турник",
    tips: "Тянитесь грудью к перекладине, сводя лопатки. Избегайте рывков ногами."
  },
  {
    id: "ex_back_2",
    name: "Тяга штанги в наклоне",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Штанга",
    tips: "Держите спину прямо с естественным прогибом в пояснице. Тяните гриф к низу живота."
  },
  {
    id: "ex_back_3",
    name: "Тяга верхнего блока к груди",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Блочный тренажер",
    tips: "Отклонитесь слегка назад, тяните рукоять к ключицам, чувствуя широчайшие мышцы."
  },
  {
    id: "ex_back_4",
    name: "Горизонтальная тяга блока к поясу",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Блочный тренажер",
    tips: "Не раскачивайтесь корпусом, пиковое сокращение в точке касания живота."
  },

  // Ноги (Legs)
  {
    id: "ex_legs_1",
    name: "Приседания со штангой на плечах",
    muscle: "legs",
    muscle_ru: "Ноги",
    equipment: "Штанга",
    tips: "Колени сонаправлены с носками, глубина приседа — минимум до параллели бедра с полом."
  },
  {
    id: "ex_legs_2",
    name: "Жим ногами в тренажере",
    muscle: "legs",
    muscle_ru: "Ноги",
    equipment: "Тренажер",
    tips: "Не отрывайте поясницу от спинки. В верхней точке не блокируйте колени (не выпрямляйте до конца)."
  },
  {
    id: "ex_legs_3",
    name: "Румынская становая тяга с гантелями",
    muscle: "legs",
    muscle_ru: "Бицепс бедра / Ягодицы",
    equipment: "Гантели",
    tips: "Отводите таз назад, чувствуя растяжение задней поверхности бедра. Колени слегка согнуты."
  },
  {
    id: "ex_legs_4",
    name: "Выпады с гантелями на месте",
    muscle: "legs",
    muscle_ru: "Ноги / Ягодицы",
    equipment: "Гантели",
    tips: "Шагайте широко, переднее колено не выходит за носок, угол в колене 90°."
  },

  // Плечи (Shoulders)
  {
    id: "ex_shoulders_1",
    name: "Жим гантелей сидя",
    muscle: "shoulders",
    muscle_ru: "Плечи",
    equipment: "Гантели",
    tips: "Спинка скамьи под углом 80-85°. Выжимайте гантели вверх по дуге, не сводя их вместе."
  },
  {
    id: "ex_shoulders_2",
    name: "Махи гантелями в стороны",
    muscle: "shoulders",
    muscle_ru: "Средняя дельта",
    equipment: "Гантели",
    tips: "Локти ведут движение и находятся чуть выше кистей. Работайте без читинга корпусом."
  },
  {
    id: "ex_shoulders_3",
    name: "Face Pulls (Тяга каната к лицу)",
    muscle: "shoulders",
    muscle_ru: "Задняя дельта",
    equipment: "Кроссовер",
    tips: "Тяните канат к уровню глаз, разводя кисти в стороны и сводя лопатки."
  },

  // Руки (Arms)
  {
    id: "ex_arms_1",
    name: "Подъем штанги на бицепс стоя",
    muscle: "arms",
    muscle_ru: "Бицепс",
    equipment: "Штанга / EZ-гриф",
    tips: "Прижмите локти к корпусу, не раскачивайтесь. Сокращайте бицепс в верхней точке."
  },
  {
    id: "ex_arms_2",
    name: "Французский жим с EZ-штангой лежа",
    muscle: "arms",
    muscle_ru: "Трицепс",
    equipment: "Штанга",
    tips: "Локти зафиксированы на ширине плеч и слегка отклонены назад от вертикали."
  },
  {
    id: "ex_arms_3",
    name: "Молотковые сгибания с гантелями",
    muscle: "arms",
    muscle_ru: "Брахиалис / Бицепс",
    equipment: "Гантели",
    tips: "Хват нейтральный (ладони смотрят друг на друга). Отличная проработка толщины руки."
  },
  {
    id: "ex_arms_4",
    name: "Разгибания рук на блоке с канатом",
    muscle: "arms",
    muscle_ru: "Трицепс",
    equipment: "Блок",
    tips: "В нижней точке разводите концы каната в стороны для максимального сокращения."
  },

  // Изоляция ног и икры
  {
    id: "ex_legs_5",
    name: "Сгибания ног в тренажере лежа",
    muscle: "legs",
    muscle_ru: "Бицепс бедра",
    equipment: "Тренажер",
    tips: "Не отрывайте таз от скамьи, задержитесь на 1 секунду в точке пикового сокращения."
  },
  {
    id: "ex_legs_6",
    name: "Разгибания ног в тренажере сидя",
    muscle: "legs",
    muscle_ru: "Квадрицепс",
    equipment: "Тренажер",
    tips: "Отрегулируйте валик над голеностопом, выпрямляйте ноги мощно, но без рывков."
  },
  {
    id: "ex_legs_7",
    name: "Подъем на носки стоя на возвышении",
    muscle: "legs",
    muscle_ru: "Икроножные",
    equipment: "Тренажер / Ступенька",
    tips: "Опускайте пятки максимально глубоко для растяжения, в верхней точке вставайте на носки."
  },

  // Пресс и кор (Core)
  {
    id: "ex_core_1",
    name: "Скручивания на пресс на коврике",
    muscle: "core",
    muscle_ru: "Прямая мышца живота",
    equipment: "Коврик",
    tips: "Прижмите поясницу к полу, скручивайте корпус ребрами к тазу, делая выдох."
  },
  {
    id: "ex_core_2",
    name: "Планка на предплечьях",
    muscle: "core",
    muscle_ru: "Мышцы кора",
    equipment: "Собственный вес",
    tips: "Тело в одну прямую линию, напрягите ягодицы и пресс, не прогибайтесь в пояснице."
  },
  {
    id: "ex_core_3",
    name: "Подъем ног в висе на перекладине",
    muscle: "core",
    muscle_ru: "Нижняя часть пресса",
    equipment: "Турник",
    tips: "Подкручивайте таз вверх, а не просто поднимайте ноги за счет сгибателей бедра."
  }
];

// Programs Database — Flagship Onlyfits Upper/Lower Split
const PROGRAMS = {
  upper_lower_gym_4: {
    title: "Верх / Низ (4 дня, Зал)",
    days: [
      {
        dayNum: 1,
        title: "Верх тела A",
        subtitle: "Грудь, спина, плечи, руки",
        exercises: ["ex_chest_1", "ex_back_2", "ex_chest_2", "ex_back_3", "ex_arms_1", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Низ тела A",
        subtitle: "Квадрицепс, бицепс бедра, пресс",
        exercises: ["ex_legs_1", "ex_legs_3", "ex_legs_2", "ex_legs_5", "ex_legs_7", "ex_core_1"]
      },
      {
        dayNum: 3,
        title: "Верх тела B",
        subtitle: "Ширина спины, дельты, руки",
        exercises: ["ex_back_1", "ex_shoulders_1", "ex_chest_3", "ex_back_4", "ex_shoulders_2", "ex_arms_3"]
      },
      {
        dayNum: 4,
        title: "Низ тела B",
        subtitle: "Выпады, разгибания, кор, пресс",
        exercises: ["ex_legs_4", "ex_legs_3", "ex_legs_6", "ex_legs_5", "ex_core_3", "ex_core_2"]
      }
    ]
  },
  upper_lower_gym_3: {
    title: "Верх / Низ (3 дня, Зал)",
    days: [
      {
        dayNum: 1,
        title: "Верх тела A",
        subtitle: "Грудь, спина, плечи, руки",
        exercises: ["ex_chest_1", "ex_back_2", "ex_chest_2", "ex_back_3", "ex_arms_1", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Низ тела",
        subtitle: "Приседания, румынская тяга, икры, пресс",
        exercises: ["ex_legs_1", "ex_legs_3", "ex_legs_2", "ex_legs_5", "ex_legs_7", "ex_core_1"]
      },
      {
        dayNum: 3,
        title: "Верх тела B",
        subtitle: "Ширина спины, дельты, руки",
        exercises: ["ex_back_1", "ex_shoulders_1", "ex_chest_3", "ex_back_4", "ex_shoulders_2", "ex_arms_3"]
      }
    ]
  },
  upper_lower_home_3: {
    title: "Верх / Низ (3 дня, Дом)",
    days: [
      {
        dayNum: 1,
        title: "Верх тела (Дом)",
        subtitle: "Отжимания, тяги с гантелями, плечи",
        exercises: ["ex_chest_2", "ex_back_2", "ex_shoulders_1", "ex_arms_1", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Низ тела (Дом)",
        subtitle: "Приседания, выпады, пресс",
        exercises: ["ex_legs_1", "ex_legs_4", "ex_legs_3", "ex_core_1", "ex_core_2"]
      },
      {
        dayNum: 3,
        title: "Верх тела B (Дом)",
        subtitle: "Плечи, спина, отжимания на брусьях",
        exercises: ["ex_chest_3", "ex_shoulders_2", "ex_back_1", "ex_arms_3"]
      }
    ]
  },
  push_pull_legs: {
    title: "Push / Pull / Legs (3 дня, Зал)",
    days: [
      {
        dayNum: 1,
        title: "Push (Грудь, Плечи, Трицепс)",
        subtitle: "Жимы, разводки, трицепс",
        exercises: ["ex_chest_1", "ex_chest_2", "ex_shoulders_1", "ex_shoulders_2", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Pull (Спина, Бицепс, Задняя дельта)",
        subtitle: "Тяги, подтягивания, бицепс",
        exercises: ["ex_back_1", "ex_back_2", "ex_back_3", "ex_shoulders_3", "ex_arms_1"]
      },
      {
        dayNum: 3,
        title: "Legs (Ноги и Пресс)",
        subtitle: "Приседания, румынская тяга, икры",
        exercises: ["ex_legs_1", "ex_legs_2", "ex_legs_3", "ex_legs_7", "ex_core_1"]
      }
    ]
  },
  full_body: {
    title: "Full Body (3 дня)",
    days: [
      {
        dayNum: 1,
        title: "Full Body A",
        subtitle: "Все тело: грудь, квадрицепс, спина",
        exercises: ["ex_legs_1", "ex_chest_1", "ex_back_2", "ex_shoulders_2", "ex_arms_1"]
      },
      {
        dayNum: 2,
        title: "Full Body B",
        subtitle: "Все тело: бицепс бедра, плечи, спина",
        exercises: ["ex_legs_3", "ex_chest_2", "ex_back_3", "ex_shoulders_1", "ex_arms_4"]
      },
      {
        dayNum: 3,
        title: "Full Body C",
        subtitle: "Все тело: выпады, брусья, подтягивания",
        exercises: ["ex_legs_4", "ex_chest_3", "ex_back_1", "ex_arms_3", "ex_core_1"]
      }
    ]
  }
};

// Application State
const state = {
  profile: {
    goal: "muscle_gain",
    split: "upper_lower",
    weight: 74.5,
    height: 180,
    age: 25,
    location: "gym",
    daysPerWeek: 4,
    streak: 3
  },
  selectedDayIndex: 0,
  activeWorkout: null, // session object when workout is in progress
  restTimer: {
    intervalId: null,
    remainingSeconds: 90
  },
  workoutTimer: {
    intervalId: null,
    secondsElapsed: 0
  },
  nutrition: {
    waterMl: 1500,
    meals: [
      {
        id: "m_1",
        type: "breakfast",
        type_ru: "Завтрак",
        items: [
          { name: "Овсяная каша на молоке с ягодами", calories: 340, protein: 12, fats: 7, carbs: 55 },
          { name: "Яйца вареные (2 шт)", calories: 140, protein: 13, fats: 10, carbs: 1 }
        ]
      },
      {
        id: "m_2",
        type: "lunch",
        type_ru: "Обед",
        items: [
          { name: "Куриная грудка гриль (160г)", calories: 260, protein: 48, fats: 5, carbs: 0 },
          { name: "Рис басмати отварной (150г)", calories: 210, protein: 5, fats: 1, carbs: 45 },
          { name: "Салат из свежих овощей с маслом", calories: 110, protein: 2, fats: 8, carbs: 7 }
        ]
      },
      {
        id: "m_3",
        type: "dinner",
        type_ru: "Ужин",
        items: [
          { name: "Запеченный минтай с брокколи", calories: 240, protein: 32, fats: 4, carbs: 12 }
        ]
      },
      {
        id: "m_4",
        type: "snack",
        type_ru: "Перекус",
        items: [
          { name: "Греческий йогурт 2% с орехами", calories: 120, protein: 12, fats: 4, carbs: 6 }
        ]
      }
    ]
  },
  measurements: {
    waist: 78,
    chest: 102,
    hips: 96,
    biceps: 36.5
  },
  stats: {
    totalWorkouts: 14,
    totalTonnage: 42.5,
    bestStreak: 12
  }
};

// Init application
document.addEventListener("DOMContentLoaded", () => {
  initTelegram();
  loadSavedState();
  initEvents();
  renderAll();
});

// Telegram WebApp Setup
function initTelegram() {
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
  }
}

function triggerHaptic(type = "light") {
  const tg = window.Telegram?.WebApp;
  if (tg?.HapticFeedback) {
    if (type === "success") tg.HapticFeedback.notificationOccurred("success");
    else if (type === "warning") tg.HapticFeedback.notificationOccurred("warning");
    else tg.HapticFeedback.impactOccurred(type);
  }
}

// LocalStorage helpers
function loadSavedState() {
  try {
    const saved = localStorage.getItem("onlyfits_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state.profile, parsed.profile || {});
      Object.assign(state.measurements, parsed.measurements || {});
      Object.assign(state.stats, parsed.stats || {});
      if (parsed.nutrition) state.nutrition = parsed.nutrition;
    }
  } catch (e) {
    console.error("Failed to load saved state", e);
  }
}

function saveState() {
  try {
    localStorage.setItem("onlyfits_state", JSON.stringify({
      profile: state.profile,
      measurements: state.measurements,
      stats: state.stats,
      nutrition: state.nutrition
    }));
  } catch (e) {}
}

// Event Bindings
function initEvents() {
  // Navigation Tabs
  document.querySelectorAll(".bottom-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.tab;
      switchTab(targetId);
      triggerHaptic("light");
    });
  });

  // Profile Modal
  document.getElementById("profileBtn").addEventListener("click", () => openProfileModal());
  document.getElementById("changeProgramBtn").addEventListener("click", () => openProfileModal());
  document.getElementById("closeProfileBtn").addEventListener("click", () => closeProfileModal());
  document.getElementById("saveProfileBtn").addEventListener("click", () => saveProfileSettings());

  // Location buttons
  document.querySelectorAll(".loc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".loc-btn").forEach(b => {
        b.classList.remove("active", "border-emerald-500", "bg-emerald-500/10", "text-emerald-400");
        b.classList.add("border-dark-700", "bg-dark-800", "text-slate-400");
      });
      btn.classList.add("active", "border-emerald-500", "bg-emerald-500/10", "text-emerald-400");
      btn.classList.remove("border-dark-700", "bg-dark-800", "text-slate-400");
      state.profile.location = btn.dataset.loc;
      triggerHaptic("light");
    });
  });

  // Days buttons
  document.querySelectorAll(".days-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".days-btn").forEach(b => {
        b.classList.remove("active", "border-emerald-500", "bg-emerald-500/10", "text-emerald-400");
        b.classList.add("border-dark-700", "text-slate-400");
      });
      btn.classList.add("active", "border-emerald-500", "bg-emerald-500/10", "text-emerald-400");
      btn.classList.remove("border-dark-700", "text-slate-400");
      state.profile.daysPerWeek = parseInt(btn.dataset.days, 10);
      triggerHaptic("light");
    });
  });

  // Start Active Workout
  document.getElementById("startWorkoutBtn").addEventListener("click", () => {
    startActiveWorkout();
  });

  document.getElementById("finishWorkoutBtn").addEventListener("click", () => {
    finishActiveWorkout();
  });

  // Rest Timer Controls
  document.getElementById("skipRestBtn").addEventListener("click", () => {
    stopRestTimer();
  });
  document.getElementById("add30sBtn").addEventListener("click", () => {
    state.restTimer.remainingSeconds += 30;
    updateRestTimerDisplay();
    triggerHaptic("light");
  });

  // Exercise Catalog Modal
  document.getElementById("openCatalogBtn").addEventListener("click", () => openCatalogModal());
  document.getElementById("closeCatalogBtn").addEventListener("click", () => closeCatalogModal());

  // Muscle filter buttons in catalog
  document.querySelectorAll(".muscle-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".muscle-filter").forEach(b => {
        b.classList.remove("active", "bg-emerald-500", "text-dark-950");
        b.classList.add("bg-dark-800", "text-slate-400");
      });
      btn.classList.add("active", "bg-emerald-500", "text-dark-950");
      btn.classList.remove("bg-dark-800", "text-slate-400");
      renderCatalogList(btn.dataset.muscle);
      triggerHaptic("light");
    });
  });

  // Water Tracker
  document.getElementById("addWaterBtn").addEventListener("click", () => {
    state.nutrition.waterMl += 250;
    document.getElementById("waterCurrent").textContent = state.nutrition.waterMl.toLocaleString();
    triggerHaptic("success");
    showToast("+250 мл воды добавлено!");
    saveState();
  });

  // AI Photo Scanner
  document.getElementById("aiPhotoBtn").addEventListener("click", () => openAiModal());
  document.getElementById("closeAiModalBtn").addEventListener("click", () => closeAiModal());

  const dropZone = document.getElementById("dropPhotoZone");
  const fileInput = document.getElementById("mealPhotoInput");
  dropZone.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", handlePhotoSelected);

  document.getElementById("aiAddMealBtn").addEventListener("click", () => {
    addAiMealToDiary();
  });

  // Weight Log
  document.getElementById("logWeightBtn").addEventListener("click", () => {
    const val = prompt("Введите ваш вес сегодня (кг):", state.profile.weight);
    if (val && !isNaN(parseFloat(val))) {
      state.profile.weight = parseFloat(val);
      document.getElementById("currentWeightDisplay").textContent = state.profile.weight;
      calculateTargetMacros();
      saveState();
      triggerHaptic("success");
      showToast("Вес сохранен!");
    }
  });

  // Body Measurements
  document.getElementById("editMeasurementsBtn").addEventListener("click", () => {
    const waist = prompt("Талия (см):", state.measurements.waist);
    const chest = prompt("Грудь (см):", state.measurements.chest);
    const hips = prompt("Бедра (см):", state.measurements.hips);
    const biceps = prompt("Бицепс (см):", state.measurements.biceps);

    if (waist) state.measurements.waist = parseFloat(waist);
    if (chest) state.measurements.chest = parseFloat(chest);
    if (hips) state.measurements.hips = parseFloat(hips);
    if (biceps) state.measurements.biceps = parseFloat(biceps);

    renderMeasurements();
    saveState();
    triggerHaptic("success");
    showToast("Замеры обновлены!");
  });
}

function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
  const active = document.getElementById(tabId);
  if (active) active.classList.remove("hidden");

  document.querySelectorAll(".bottom-tab").forEach(tab => {
    if (tab.dataset.tab === tabId) {
      tab.classList.add("text-emerald-400", "font-bold");
      tab.classList.remove("text-slate-400", "font-semibold");
    } else {
      tab.classList.remove("text-emerald-400", "font-bold");
      tab.classList.add("text-slate-400", "font-semibold");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  lucide.createIcons();
}

// Render Master
function renderAll() {
  renderProfile();
  renderProgramSchedule();
  renderCurrentDayExercises();
  renderNutrition();
  renderMeasurements();
  lucide.createIcons();
}

function renderProfile() {
  document.getElementById("streakCount").textContent = state.profile.streak;
  document.getElementById("currentWeightDisplay").textContent = state.profile.weight;

  const goalText = state.profile.goal === "weight_loss" ? "Похудение" : 
                   state.profile.goal === "muscle_gain" ? "Набор массы" : "Рельеф и форма";
  document.getElementById("programGoalBadge").textContent = goalText;
}

function getActiveProgram() {
  const { split, location, daysPerWeek } = state.profile;
  if (split === "push_pull_legs") return PROGRAMS.push_pull_legs;
  if (split === "full_body") return PROGRAMS.full_body;

  // Upper / Lower (Стандарт Onlyfits)
  if (location === "home") {
    return PROGRAMS.upper_lower_home_3;
  }
  return daysPerWeek === 4 ? PROGRAMS.upper_lower_gym_4 : PROGRAMS.upper_lower_gym_3;
}

// Render Week Program Grid
function renderProgramSchedule() {
  const program = getActiveProgram();
  const container = document.getElementById("weekScheduleGrid");
  container.innerHTML = "";

  program.days.forEach((day, idx) => {
    const isSelected = idx === state.selectedDayIndex;
    const btn = document.createElement("button");
    btn.className = `p-3 rounded-2xl text-left border transition ${
      isSelected 
        ? "bg-emerald-500/10 border-emerald-500 text-white" 
        : "bg-dark-850 border-dark-700/60 text-slate-400 hover:border-slate-500"
    }`;

    btn.innerHTML = `
      <div class="text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-emerald-400' : 'text-slate-500'}">День ${day.dayNum}</div>
      <div class="text-xs font-bold mt-0.5 text-white truncate">${day.title}</div>
      <div class="text-[9px] text-slate-400 mt-1">${day.exercises.length} упр.</div>
    `;

    btn.addEventListener("click", () => {
      state.selectedDayIndex = idx;
      renderProgramSchedule();
      renderCurrentDayExercises();
      triggerHaptic("light");
    });

    container.appendChild(btn);
  });
}

function renderCurrentDayExercises() {
  const program = getActiveProgram();
  const currentDay = program.days[state.selectedDayIndex] || program.days[0];

  document.getElementById("currentWorkoutTitle").textContent = currentDay.title;
  document.getElementById("currentWorkoutSubtitle").textContent = currentDay.subtitle;
  document.getElementById("workoutDayLabel").textContent = `День ${currentDay.dayNum} из ${program.days.length}`;

  const container = document.getElementById("dayExercisesList");
  container.innerHTML = "";

  currentDay.exercises.forEach((exId, idx) => {
    const ex = EXERCISES_DB.find(e => e.id === exId);
    if (!ex) return;

    const card = document.createElement("div");
    card.className = "bg-dark-900 p-3.5 rounded-2xl border border-dark-700/80 flex items-center justify-between";

    card.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-xs font-black text-emerald-400">
          ${idx + 1}
        </div>
        <div>
          <h4 class="text-xs font-bold text-white">${ex.name}</h4>
          <p class="text-[10px] text-slate-400">4 подхода • 8-12 повт. • ${ex.equipment}</p>
        </div>
      </div>
      <button class="p-2 text-slate-400 hover:text-white transition info-btn" title="Техника">
        <i data-lucide="info" class="w-4 h-4"></i>
      </button>
    `;

    card.querySelector(".info-btn").addEventListener("click", () => {
      alert(`💡 Техника выполнения: ${ex.name}\n\n${ex.tips}`);
    });

    container.appendChild(card);
  });

  lucide.createIcons();
}

// ==================== ACTIVE WORKOUT ENGINE ====================

function startActiveWorkout() {
  const program = getActiveProgram();
  const currentDay = program.days[state.selectedDayIndex] || program.days[0];

  // Initialize active workout session
  state.activeWorkout = {
    dayTitle: currentDay.title,
    startTime: Date.now(),
    exercises: currentDay.exercises.map(exId => {
      const ex = EXERCISES_DB.find(e => e.id === exId);
      return {
        id: exId,
        name: ex ? ex.name : "Упражнение",
        sets: [
          { setNum: 1, prev: "80 кг × 10", weight: 80, reps: 10, done: false },
          { setNum: 2, prev: "80 кг × 10", weight: 80, reps: 10, done: false },
          { setNum: 3, prev: "85 кг × 8", weight: 85, reps: 8, done: false },
          { setNum: 4, prev: "85 кг × 8", weight: 85, reps: 8, done: false }
        ]
      };
    })
  };

  document.getElementById("activeModalTitle").textContent = currentDay.title;
  renderActiveWorkoutExercises();

  // Start timer
  startWorkoutTimer();

  document.getElementById("activeWorkoutModal").classList.remove("hidden");
  triggerHaptic("success");
}

function renderActiveWorkoutExercises() {
  const container = document.getElementById("activeExercisesContainer");
  container.innerHTML = "";

  state.activeWorkout.exercises.forEach((exItem, exIdx) => {
    const card = document.createElement("div");
    card.className = "bg-dark-900 p-4 rounded-3xl border border-dark-700/80 space-y-3";

    card.innerHTML = `
      <div class="flex items-center justify-between border-b border-dark-700/60 pb-2">
        <h3 class="text-xs font-black text-white">${exIdx + 1}. ${exItem.name}</h3>
        <span class="text-[10px] text-slate-400 font-bold">${exItem.sets.length} сета</span>
      </div>

      <div class="space-y-1.5" id="sets-container-${exIdx}">
        <div class="grid grid-cols-12 gap-2 text-[10px] uppercase font-bold text-slate-500 px-2 pb-1">
          <div class="col-span-2">Сет</div>
          <div class="col-span-3">Пред.</div>
          <div class="col-span-3">Кг</div>
          <div class="col-span-2">Повт</div>
          <div class="col-span-2 text-right">Статус</div>
        </div>
      </div>
    `;

    const setsContainer = card.querySelector(`#sets-container-${exIdx}`);

    exItem.sets.forEach((set, setIdx) => {
      const row = document.createElement("div");
      row.className = `grid grid-cols-12 gap-2 items-center p-2 rounded-xl text-xs transition border ${
        set.done 
          ? "bg-emerald-500/10 border-emerald-500/30 text-white" 
          : "bg-dark-850 border-dark-700/60 text-slate-300"
      }`;

      row.innerHTML = `
        <div class="col-span-2 font-bold">${set.setNum}</div>
        <div class="col-span-3 text-[10px] text-slate-400 truncate">${set.prev}</div>
        <div class="col-span-3">
          <input type="number" value="${set.weight}" class="w-full bg-dark-800 text-white font-bold rounded-lg px-2 py-1 border border-dark-700 text-center outline-none focus:border-emerald-500" ${set.done ? 'disabled' : ''}>
        </div>
        <div class="col-span-2">
          <input type="number" value="${set.reps}" class="w-full bg-dark-800 text-white font-bold rounded-lg px-2 py-1 border border-dark-700 text-center outline-none focus:border-emerald-500" ${set.done ? 'disabled' : ''}>
        </div>
        <div class="col-span-2 text-right">
          <button class="set-check-btn w-7 h-7 rounded-lg flex items-center justify-center transition ${
            set.done ? 'bg-emerald-500 text-dark-950 font-black' : 'bg-dark-800 border border-dark-700 text-slate-400 hover:text-white'
          }">
            ${set.done ? '✓' : ''}
          </button>
        </div>
      `;

      // Check set click
      row.querySelector(".set-check-btn").addEventListener("click", () => {
        set.done = !set.done;
        triggerHaptic("success");
        renderActiveWorkoutExercises();

        if (set.done) {
          startRestTimer(90);
        }
      });

      setsContainer.appendChild(row);
    });

    container.appendChild(card);
  });
}

function startWorkoutTimer() {
  state.workoutTimer.secondsElapsed = 0;
  if (state.workoutTimer.intervalId) clearInterval(state.workoutTimer.intervalId);

  state.workoutTimer.intervalId = setInterval(() => {
    state.workoutTimer.secondsElapsed++;
    const mins = String(Math.floor(state.workoutTimer.secondsElapsed / 60)).padStart(2, "0");
    const secs = String(state.workoutTimer.secondsElapsed % 60).padStart(2, "0");
    document.getElementById("workoutTimer").textContent = `${mins}:${secs}`;
  }, 1000);
}

function startRestTimer(seconds = 90) {
  state.restTimer.remainingSeconds = seconds;
  document.getElementById("restTimerBar").classList.remove("hidden");
  updateRestTimerDisplay();

  if (state.restTimer.intervalId) clearInterval(state.restTimer.intervalId);

  state.restTimer.intervalId = setInterval(() => {
    state.restTimer.remainingSeconds--;
    updateRestTimerDisplay();

    if (state.restTimer.remainingSeconds <= 0) {
      stopRestTimer();
      triggerHaptic("warning");
      showToast("⏰ Время отдыха вышло! Начинайте следующий подход.");
    }
  }, 1000);
}

function updateRestTimerDisplay() {
  const m = String(Math.floor(state.restTimer.remainingSeconds / 60)).padStart(2, "0");
  const s = String(state.restTimer.remainingSeconds % 60).padStart(2, "0");
  document.getElementById("restTimerDisplay").textContent = `${m}:${s}`;
}

function stopRestTimer() {
  if (state.restTimer.intervalId) clearInterval(state.restTimer.intervalId);
  document.getElementById("restTimerBar").classList.add("hidden");
  triggerHaptic("light");
}

function finishActiveWorkout() {
  if (!confirm("Завершить тренировку и сохранить результаты?")) return;

  // Tonnage calculation
  let totalTonnageKg = 0;
  let totalSetsDone = 0;

  state.activeWorkout.exercises.forEach(ex => {
    ex.sets.forEach(s => {
      if (s.done) {
        totalTonnageKg += (s.weight * s.reps);
        totalSetsDone++;
      }
    });
  });

  const durationMin = Math.round(state.workoutTimer.secondsElapsed / 60) || 1;

  // Update overall stats
  state.stats.totalWorkouts += 1;
  state.stats.totalTonnage = Math.round((state.stats.totalTonnage + (totalTonnageKg / 1000)) * 10) / 10;
  state.profile.streak += 1;

  // Clean timers
  if (state.workoutTimer.intervalId) clearInterval(state.workoutTimer.intervalId);
  stopRestTimer();

  document.getElementById("activeWorkoutModal").classList.add("hidden");
  saveState();
  renderAll();

  triggerHaptic("success");
  alert(`🔥 Отличная работа!\n\nТренировка завершена за ${durationMin} мин.\nВыполнено подходов: ${totalSetsDone}\nСуммарный тоннаж: ${totalTonnageKg.toLocaleString()} кг\nСерия: ${state.profile.streak} дня подряд!`);
}

// ==================== NUTRITION & MACROS ENGINE ====================

function calculateTargetMacros() {
  // Mifflin-St Jeor formula
  const { weight, height, age, goal } = state.profile;
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  const tdee = bmr * 1.4;

  let target = tdee;
  if (goal === "weight_loss") target = tdee - 450;
  else if (goal === "muscle_gain") target = tdee + 350;

  const targetCalories = Math.round(target);
  const targetProtein = Math.round(weight * 2.0); // 2g per kg
  const targetFats = Math.round(weight * 0.9);   // 0.9g per kg
  const remainingCals = targetCalories - (targetProtein * 4 + targetFats * 9);
  const targetCarbs = Math.max(50, Math.round(remainingCals / 4));

  return { targetCalories, targetProtein, targetFats, targetCarbs };
}

function renderNutrition() {
  const targets = calculateTargetMacros();

  // Sum up logged meals
  let eatenCalories = 0;
  let eatenProtein = 0;
  let eatenFats = 0;
  let eatenCarbs = 0;

  state.nutrition.meals.forEach(meal => {
    meal.items.forEach(item => {
      eatenCalories += item.calories;
      eatenProtein += item.protein;
      eatenFats += item.fats;
      eatenCarbs += item.carbs;
    });
  });

  const remaining = Math.max(0, targets.targetCalories - eatenCalories);

  document.getElementById("eatenCalories").textContent = eatenCalories.toLocaleString();
  document.getElementById("targetCalories").textContent = targets.targetCalories.toLocaleString();
  document.getElementById("remainingCalories").textContent = `${remaining.toLocaleString()} ккал`;

  const calPct = Math.min(100, Math.round((eatenCalories / targets.targetCalories) * 100));
  document.getElementById("caloriesBar").style.width = `${calPct}%`;

  document.getElementById("proteinCurrent").textContent = eatenProtein;
  document.getElementById("proteinTarget").textContent = targets.targetProtein;
  document.getElementById("proteinBar").style.width = `${Math.min(100, Math.round((eatenProtein / targets.targetProtein) * 100))}%`;

  document.getElementById("fatsCurrent").textContent = eatenFats;
  document.getElementById("fatsTarget").textContent = targets.targetFats;
  document.getElementById("fatsBar").style.width = `${Math.min(100, Math.round((eatenFats / targets.targetFats) * 100))}%`;

  document.getElementById("carbsCurrent").textContent = eatenCarbs;
  document.getElementById("carbsTarget").textContent = targets.targetCarbs;
  document.getElementById("carbsBar").style.width = `${Math.min(100, Math.round((eatenCarbs / targets.targetCarbs) * 100))}%`;

  document.getElementById("waterCurrent").textContent = state.nutrition.waterMl.toLocaleString();

  // Render Meals List
  const container = document.getElementById("mealsTrackerList");
  container.innerHTML = "";

  state.nutrition.meals.forEach(m => {
    let mealCals = 0;
    m.items.forEach(i => mealCals += i.calories);

    const block = document.createElement("div");
    block.className = "bg-dark-900 p-3.5 rounded-2xl border border-dark-700/80 space-y-2";

    block.innerHTML = `
      <div class="flex items-center justify-between border-b border-dark-700/60 pb-1.5">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-white">${m.type_ru}</span>
          <span class="text-[10px] text-emerald-400 font-semibold">${mealCals} ккал</span>
        </div>
        <button class="add-food-btn text-xs text-slate-400 hover:text-emerald-400 transition flex items-center gap-1 font-semibold">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Добавить</span>
        </button>
      </div>
      <div class="space-y-1" id="items-${m.id}"></div>
    `;

    const itemsContainer = block.querySelector(`#items-${m.id}`);
    m.items.forEach(item => {
      const row = document.createElement("div");
      row.className = "flex items-center justify-between text-xs py-1 text-slate-300";
      row.innerHTML = `
        <span class="truncate max-w-[200px]">${item.name}</span>
        <div class="text-slate-400 text-[11px] shrink-0">
          <span>${item.calories} ккал</span>
          <span class="text-[10px] text-slate-500"> (Б:${item.protein} Ж:${item.fats} У:${item.carbs})</span>
        </div>
      `;
      itemsContainer.appendChild(row);
    });

    block.querySelector(".add-food-btn").addEventListener("click", () => {
      const name = prompt("Название продукта:");
      const cals = prompt("Калории (ккал):", "250");
      if (name && cals) {
        m.items.push({
          name: name,
          calories: parseInt(cals, 10),
          protein: Math.round(parseInt(cals, 10) * 0.08),
          fats: Math.round(parseInt(cals, 10) * 0.03),
          carbs: Math.round(parseInt(cals, 10) * 0.12)
        });
        renderNutrition();
        saveState();
        triggerHaptic("success");
      }
    });

    container.appendChild(block);
  });

  lucide.createIcons();
}

// AI Photo Scanner Logic
function openAiModal() {
  document.getElementById("aiModal").classList.remove("hidden");
  document.getElementById("aiAnalysisResult").classList.add("hidden");
  triggerHaptic("light");
}

function closeAiModal() {
  document.getElementById("aiModal").classList.add("hidden");
}

function handlePhotoSelected(e) {
  const file = e.target.files[0];
  if (!file) return;

  const dropZone = document.getElementById("dropPhotoZone");
  dropZone.innerHTML = `
    <div class="animate-pulse space-y-2">
      <div class="text-2xl">⚡️</div>
      <div class="text-xs font-bold text-emerald-400">ИИ анализирует фото тарелки...</div>
      <div class="text-[10px] text-slate-400">Определение ингредиентов и веса порции</div>
    </div>
  `;

  setTimeout(() => {
    dropZone.innerHTML = `
      <div class="text-xs font-bold text-emerald-400">✓ Фото успешно проанализировано</div>
    `;
    document.getElementById("aiAnalysisResult").classList.remove("hidden");
    triggerHaptic("success");
  }, 1200);
}

function addAiMealToDiary() {
  const lunch = state.nutrition.meals.find(m => m.type === "lunch") || state.nutrition.meals[0];
  lunch.items.push({
    name: "Куриная грудка с рисом и овощами (ИИ-скан)",
    calories: 480,
    protein: 42,
    fats: 8,
    carbs: 55
  });

  closeAiModal();
  renderNutrition();
  saveState();
  triggerHaptic("success");
  showToast("Блюдо с фото успешно добавлено в обед!");
}

// Exercise Catalog
function openCatalogModal() {
  document.getElementById("catalogModal").classList.remove("hidden");
  renderCatalogList("all");
  triggerHaptic("light");
}

function closeCatalogModal() {
  document.getElementById("catalogModal").classList.add("hidden");
}

function renderCatalogList(filter = "all") {
  const container = document.getElementById("catalogList");
  container.innerHTML = "";

  const filtered = filter === "all" ? EXERCISES_DB : EXERCISES_DB.filter(e => e.muscle === filter);

  filtered.forEach(ex => {
    const card = document.createElement("div");
    card.className = "bg-dark-850 p-3 rounded-2xl border border-dark-700/60 space-y-1.5";
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-bold text-white">${ex.name}</h4>
        <span class="text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">${ex.muscle_ru}</span>
      </div>
      <p class="text-[11px] text-slate-400">${ex.tips}</p>
      <div class="text-[10px] text-slate-500 font-medium">Оборудование: ${ex.equipment}</div>
    `;
    container.appendChild(card);
  });
}

// Profile Modal
function openProfileModal() {
  document.getElementById("inputWeight").value = state.profile.weight;
  document.getElementById("inputHeight").value = state.profile.height;
  document.getElementById("inputAge").value = state.profile.age;
  document.getElementById("userGoalSelect").value = state.profile.goal;
  if (document.getElementById("userSplitSelect")) {
    document.getElementById("userSplitSelect").value = state.profile.split || "upper_lower";
  }
  document.getElementById("profileModal").classList.remove("hidden");
  triggerHaptic("light");
}

function closeProfileModal() {
  document.getElementById("profileModal").classList.add("hidden");
}

function saveProfileSettings() {
  state.profile.weight = parseFloat(document.getElementById("inputWeight").value) || 75;
  state.profile.height = parseFloat(document.getElementById("inputHeight").value) || 180;
  state.profile.age = parseInt(document.getElementById("inputAge").value, 10) || 25;
  state.profile.goal = document.getElementById("userGoalSelect").value;
  if (document.getElementById("userSplitSelect")) {
    state.profile.split = document.getElementById("userSplitSelect").value;
  }

  state.selectedDayIndex = 0;
  closeProfileModal();
  saveState();
  renderAll();
  triggerHaptic("success");
  showToast("Параметры программы сохранены!");
}

function renderMeasurements() {
  document.getElementById("waistDisplay").textContent = `${state.measurements.waist} см`;
  document.getElementById("chestDisplay").textContent = `${state.measurements.chest} см`;
  document.getElementById("hipsDisplay").textContent = `${state.measurements.hips} см`;
  document.getElementById("armDisplay").textContent = `${state.measurements.biceps} см`;

  document.getElementById("totalWorkoutsCount").textContent = state.stats.totalWorkouts;
  document.getElementById("totalTonnageCount").textContent = `${state.stats.totalTonnage} т`;
  document.getElementById("bestStreakCount").textContent = state.stats.bestStreak;
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.remove("opacity-0");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");
  }, 2500);
}
