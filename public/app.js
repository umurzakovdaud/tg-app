// MealPlanner App Logic

// Default fallback recipes in case fetch is blocked by file:// protocol or offline
const FALLBACK_RECIPES = [
  {
    "id": "b_1",
    "title": "Овсянка на растительном молоке с ягодами",
    "category": "breakfast",
    "prep_time_minutes": 10,
    "calories": 340,
    "protein": 11,
    "fats": 7,
    "carbs": 58,
    "estimated_cost_rub": 120,
    "tags": ["quick", "budget", "weight_loss", "balanced", "lactose_free", "sugar_free", "vegetarian", "vegan", "nut_free"],
    "ingredients": [
      { "name": "Овсяные хлопья (долгой варки)", "amount": 60, "unit": "г", "department": "Бакалея и крупы" },
      { "name": "Овсяное или миндальное молоко", "amount": 200, "unit": "мл", "department": "Молочные продукты и альтернативы" },
      { "name": "Ягоды (свежие или замороженные)", "amount": 50, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Семена льна или чиа", "amount": 10, "unit": "г", "department": "Бакалея и крупы" }
    ],
    "steps": [
      "В небольшом сотейнике залейте овсяные хлопья молоком и доведите до кипения.",
      "Варите на медленном огне 5–7 минут, периодически помешивая.",
      "Переложите в тарелку, посыпьте семенами и добавьте ягоды."
    ]
  },
  {
    "id": "b_2",
    "title": "Шакшука с томатами и зеленью",
    "category": "breakfast",
    "prep_time_minutes": 15,
    "calories": 380,
    "protein": 22,
    "fats": 24,
    "carbs": 16,
    "estimated_cost_rub": 160,
    "tags": ["quick", "keto", "muscle_gain", "balanced", "lactose_free", "gluten_free", "sugar_free", "vegetarian", "nut_free"],
    "ingredients": [
      { "name": "Яйца куриные", "amount": 3, "unit": "шт", "department": "Молочные продукты и альтернативы" },
      { "name": "Томаты в собственном соку", "amount": 180, "unit": "г", "department": "Бакалея и крупы" },
      { "name": "Перец болгарский", "amount": 80, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Кинза или петрушка", "amount": 15, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Оливковое масло", "amount": 10, "unit": "мл", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "На разогретом масле обжарьте нарезанный сладкий перец 3 минуты.",
      "Добавьте томаты в собственном соку и специи, тушите соус 4 минуты.",
      "Сделайте углубления, разбейте яйца и готовьте под крышкой 4–5 минут.",
      "Посыпьте свежей зеленью."
    ]
  },
  {
    "id": "b_3",
    "title": "Тост с авокадо, яйцом пашот и рукколой",
    "category": "breakfast",
    "prep_time_minutes": 12,
    "calories": 410,
    "protein": 18,
    "fats": 22,
    "carbs": 34,
    "estimated_cost_rub": 220,
    "tags": ["quick", "balanced", "weight_loss", "lactose_free", "sugar_free", "vegetarian", "nut_free"],
    "ingredients": [
      { "name": "Хлеб цельнозерновой", "amount": 2, "unit": "ломтика", "department": "Хлеб и выпечка" },
      { "name": "Авокадо", "amount": 0.5, "unit": "шт", "department": "Овощи, фрукты и зелень" },
      { "name": "Яйца куриные", "amount": 2, "unit": "шт", "department": "Молочные продукты и альтернативы" },
      { "name": "Руккола", "amount": 20, "unit": "г", "department": "Овощи, фрукты и зелень" }
    ],
    "steps": [
      "Подсушите хлеб в тостере или на сухой сковороде.",
      "Разомните авокадо вилкой с солью и капелькой лимона.",
      "Отварите яйца пашот или сварите всмятку 4 минуты.",
      "Выложите авокадо на тосты, сверху яйца и рукколу."
    ]
  },
  {
    "id": "b_4",
    "title": "Белковый скрэмбл с индейкой и шпинатом",
    "category": "breakfast",
    "prep_time_minutes": 10,
    "calories": 430,
    "protein": 38,
    "fats": 26,
    "carbs": 4,
    "estimated_cost_rub": 210,
    "tags": ["quick", "keto", "muscle_gain", "weight_loss", "lactose_free", "gluten_free", "sugar_free", "nut_free"],
    "ingredients": [
      { "name": "Яйца куриные", "amount": 3, "unit": "шт", "department": "Молочные продукты и альтернативы" },
      { "name": "Филе индейки", "amount": 70, "unit": "г", "department": "Мясо и птица" },
      { "name": "Шпинат свежий", "amount": 40, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Оливковое масло", "amount": 8, "unit": "мл", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Припустите шпинат на масле 1 минуту.",
      "Добавьте нарезанное соломкой филе индейки.",
      "Влейте взбитые яйца с солью и быстро перемешивайте лопаткой 2 минуты."
    ]
  },
  {
    "id": "b_5",
    "title": "Сырники без сахара на рисовой муке",
    "category": "breakfast",
    "prep_time_minutes": 20,
    "calories": 390,
    "protein": 34,
    "fats": 12,
    "carbs": 36,
    "estimated_cost_rub": 170,
    "tags": ["quick", "budget", "muscle_gain", "gluten_free", "sugar_free", "vegetarian", "nut_free"],
    "ingredients": [
      { "name": "Творог 5% в брикете", "amount": 200, "unit": "г", "department": "Молочные продукты и альтернативы" },
      { "name": "Яйцо куриное", "amount": 1, "unit": "шт", "department": "Молочные продукты и альтернативы" },
      { "name": "Мука рисовая", "amount": 30, "unit": "г", "department": "Бакалея и крупы" }
    ],
    "steps": [
      "Разомните творог с яйцом и рисовой мукой.",
      "Сформируйте сырники и обжаривайте под крышкой на медленном огне по 4–5 минут с каждой стороны."
    ]
  },
  {
    "id": "l_1",
    "title": "Куриное филе с кускусом и печеными черри",
    "category": "lunch",
    "prep_time_minutes": 20,
    "calories": 520,
    "protein": 46,
    "fats": 12,
    "carbs": 54,
    "estimated_cost_rub": 230,
    "tags": ["quick", "budget", "muscle_gain", "balanced", "lactose_free", "sugar_free", "nut_free"],
    "ingredients": [
      { "name": "Куриное филе грудки", "amount": 180, "unit": "г", "department": "Мясо и птица" },
      { "name": "Кускус", "amount": 70, "unit": "г", "department": "Бакалея и крупы" },
      { "name": "Томаты черри", "amount": 100, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Оливковое масло", "amount": 10, "unit": "мл", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Куриное филе обжарьте на сковороде по 4–5 минут с каждой стороны.",
      "Кускус залейте кипятком в пропорции 1:1 на 5 минут под крышку.",
      "Черри прогрейте на сковороде 2 минуты. Подавайте вместе."
    ]
  },
  {
    "id": "l_2",
    "title": "Паста с тунцом и томатным соусом",
    "category": "lunch",
    "prep_time_minutes": 15,
    "calories": 480,
    "protein": 36,
    "fats": 11,
    "carbs": 58,
    "estimated_cost_rub": 240,
    "tags": ["quick", "budget", "balanced", "muscle_gain", "lactose_free", "sugar_free", "nut_free"],
    "ingredients": [
      { "name": "Паста из твердых сортов", "amount": 80, "unit": "г", "department": "Бакалея и крупы" },
      { "name": "Тунец в собственном соку", "amount": 120, "unit": "г", "department": "Рыба и морепродукты" },
      { "name": "Томаты протертые", "amount": 100, "unit": "г", "department": "Бакалея и крупы" },
      { "name": "Оливковое масло", "amount": 8, "unit": "мл", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Отварите пасту до состояния аль-денте.",
      "Прогрейте томаты с тунцом и травами 3 минуты.",
      "Смешайте пасту с горячим соусом."
    ]
  },
  {
    "id": "l_3",
    "title": "Боул с киноа, хрустящим нутом и огурцом",
    "category": "lunch",
    "prep_time_minutes": 25,
    "calories": 440,
    "protein": 18,
    "fats": 14,
    "carbs": 62,
    "estimated_cost_rub": 190,
    "tags": ["budget", "weight_loss", "balanced", "lactose_free", "gluten_free", "sugar_free", "vegetarian", "vegan", "nut_free"],
    "ingredients": [
      { "name": "Киноа", "amount": 60, "unit": "г", "department": "Бакалея и крупы" },
      { "name": "Нут консервированный", "amount": 120, "unit": "г", "department": "Бакалея и крупы" },
      { "name": "Огурец свежий", "amount": 100, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Шпинат или салат", "amount": 40, "unit": "г", "department": "Овощи, фрукты и зелень" }
    ],
    "steps": [
      "Отварите киноа 15 минут.",
      "Нут обжарьте со специями 5 минут до корочки.",
      "Соберите все ингредиенты в глубокий боул."
    ]
  },
  {
    "id": "l_4",
    "title": "Стейк из индейки со стручковой фасолью",
    "category": "lunch",
    "prep_time_minutes": 18,
    "calories": 420,
    "protein": 44,
    "fats": 15,
    "carbs": 14,
    "estimated_cost_rub": 250,
    "tags": ["quick", "keto", "muscle_gain", "weight_loss", "lactose_free", "gluten_free", "sugar_free", "nut_free"],
    "ingredients": [
      { "name": "Филе грудки индейки", "amount": 190, "unit": "г", "department": "Мясо и птица" },
      { "name": "Фасоль стручковая", "amount": 160, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Оливковое масло", "amount": 10, "unit": "мл", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Индейку обжарьте на сковороде по 5 минут с каждой стороны.",
      "Фасоль потушите с каплей масла 6 минут."
    ]
  },
  {
    "id": "d_1",
    "title": "Запеченная рыба с брокколи и лимоном",
    "category": "dinner",
    "prep_time_minutes": 22,
    "calories": 360,
    "protein": 38,
    "fats": 10,
    "carbs": 12,
    "estimated_cost_rub": 260,
    "tags": ["quick", "budget", "weight_loss", "keto", "balanced", "lactose_free", "gluten_free", "sugar_free", "nut_free"],
    "ingredients": [
      { "name": "Филе белой рыбы (треска/минтай)", "amount": 200, "unit": "г", "department": "Рыба и морепродукты" },
      { "name": "Брокколи", "amount": 180, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Лимон", "amount": 0.5, "unit": "шт", "department": "Овощи, фрукты и зелень" },
      { "name": "Оливковое масло", "amount": 10, "unit": "мл", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Выложите рыбу и брокколи в форму для запекания.",
      "Сбрызните маслом, посолите и положите дольки лимона.",
      "Запекайте 18 минут при 190°C."
    ]
  },
  {
    "id": "d_2",
    "title": "Котлеты из индейки с нежным пюре из цветной капусты",
    "category": "dinner",
    "prep_time_minutes": 25,
    "calories": 410,
    "protein": 42,
    "fats": 16,
    "carbs": 14,
    "estimated_cost_rub": 240,
    "tags": ["quick", "keto", "weight_loss", "muscle_gain", "gluten_free", "sugar_free", "nut_free"],
    "ingredients": [
      { "name": "Фарш из индейки", "amount": 180, "unit": "г", "department": "Мясо и птица" },
      { "name": "Цветная капуста", "amount": 220, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Оливковое масло", "amount": 10, "unit": "г", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Обжарьте котлеты из фарша по 6 минут с двух сторон.",
      "Цветную капусту отварите 8 минут и пробейте блендером с ложкой масла."
    ]
  },
  {
    "id": "d_3",
    "title": "Греческий салат с цыпленком и фетой",
    "category": "dinner",
    "prep_time_minutes": 15,
    "calories": 390,
    "protein": 34,
    "fats": 19,
    "carbs": 12,
    "estimated_cost_rub": 270,
    "tags": ["quick", "keto", "weight_loss", "balanced", "gluten_free", "sugar_free", "nut_free"],
    "ingredients": [
      { "name": "Куриное филе готовое", "amount": 130, "unit": "г", "department": "Мясо и птица" },
      { "name": "Огурцы", "amount": 100, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Томаты", "amount": 120, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Сыр фета", "amount": 40, "unit": "г", "department": "Молочные продукты и альтернативы" },
      { "name": "Оливковое масло", "amount": 10, "unit": "г", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Крупно нарежьте овощи, сыр фета и куриное филе.",
      "Заправьте оливковым маслом и посыпьте орегано."
    ]
  },
  {
    "id": "d_4",
    "title": "Стир-фрай из тофу с овощами",
    "category": "dinner",
    "prep_time_minutes": 18,
    "calories": 350,
    "protein": 24,
    "fats": 16,
    "carbs": 22,
    "estimated_cost_rub": 180,
    "tags": ["quick", "budget", "weight_loss", "lactose_free", "gluten_free", "sugar_free", "vegetarian", "vegan", "nut_free"],
    "ingredients": [
      { "name": "Тофу твердый", "amount": 160, "unit": "г", "department": "Молочные продукты и альтернативы" },
      { "name": "Смесь овощей (перец, морковь, горошек)", "amount": 180, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Соевый соус", "amount": 15, "unit": "мл", "department": "Масла, соусы и специи" }
    ],
    "steps": [
      "Кубики тофу обжарьте на сковороде 5 минут до корочки.",
      "Добавьте овощи и соевый соус, готовьте еще 4 минуты."
    ]
  },
  {
    "id": "s_1",
    "title": "Овощные палочки с хумусом",
    "category": "snack",
    "prep_time_minutes": 5,
    "calories": 180,
    "protein": 6,
    "fats": 9,
    "carbs": 18,
    "estimated_cost_rub": 80,
    "tags": ["quick", "budget", "weight_loss", "balanced", "lactose_free", "gluten_free", "sugar_free", "vegetarian", "vegan", "nut_free"],
    "ingredients": [
      { "name": "Морковь свежая", "amount": 80, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Стебли сельдерея", "amount": 60, "unit": "г", "department": "Овощи, фрукты и зелень" },
      { "name": "Хумус", "amount": 50, "unit": "г", "department": "Бакалея и крупы" }
    ],
    "steps": [
      "Нарежьте морковь и сельдерей брусочками.",
      "Подавайте со свежим хумусом."
    ]
  },
  {
    "id": "s_2",
    "title": "Натуральный йогурт с семенами",
    "category": "snack",
    "prep_time_minutes": 3,
    "calories": 190,
    "protein": 12,
    "fats": 10,
    "carbs": 11,
    "estimated_cost_rub": 95,
    "tags": ["quick", "budget", "weight_loss", "muscle_gain", "balanced", "gluten_free", "sugar_free", "vegetarian", "nut_free"],
    "ingredients": [
      { "name": "Йогурт греческий или кокосовый", "amount": 130, "unit": "г", "department": "Молочные продукты и альтернативы" },
      { "name": "Семена тыквы или льна", "amount": 15, "unit": "г", "department": "Бакалея и крупы" }
    ],
    "steps": [
      "Переложите йогурт в пиалу и посыпьте семенами."
    ]
  }
];

const DAYS_NAMES = [
  "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
];

const DAYS_SHORT = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

// App State
const state = {
  settings: {
    goal: "weight_loss",
    familySize: 1,
    currency: "₽",
    weeklyBudget: 5000,
    restrictions: []
  },
  allRecipes: [],
  weeklyPlan: [], // Array of 7 days
  currentDayIndex: 0,
  cartChecked: {} // id -> boolean
};

// Initialize App
document.addEventListener("DOMContentLoaded", async () => {
  initTelegramWebApp();
  initTheme();
  initEvents();
  
  await loadRecipes();
  updateBudgetLabels();
});

// Telegram WebApp Setup
function initTelegramWebApp() {
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
    
    // Use Telegram colors if available
    if (tg.themeParams?.bg_color) {
      document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
      document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
    }
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

// Load Recipes
async function loadRecipes() {
  try {
    const res = await fetch('recipes.json');
    if (res.ok) {
      state.allRecipes = await res.json();
    } else {
      const res2 = await fetch('/data/recipes.json');
      if (res2.ok) {
        state.allRecipes = await res2.json();
      } else {
        state.allRecipes = FALLBACK_RECIPES;
      }
    }
  } catch (err) {
    state.allRecipes = FALLBACK_RECIPES;
  }
}

// UI Event Handlers
function initEvents() {
  // Navigation Tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;
      switchTab(targetTab);
    });
  });

  // Goal Buttons
  document.querySelectorAll(".goal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".goal-btn").forEach(b => {
        b.classList.remove("active", "border-emerald-500", "bg-emerald-50/60", "text-emerald-900");
        b.classList.add("border-slate-200");
      });
      btn.classList.add("active", "border-emerald-500", "bg-emerald-50/60", "text-emerald-900");
      btn.classList.remove("border-slate-200");
      state.settings.goal = btn.dataset.value;
      triggerHaptic("light");
    });
  });

  // Family Buttons
  document.querySelectorAll(".family-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".family-btn").forEach(b => {
        b.classList.remove("active", "border-emerald-500", "bg-emerald-50", "text-emerald-800");
        b.classList.add("border-slate-200", "text-slate-700");
      });
      btn.classList.add("active", "border-emerald-500", "bg-emerald-50", "text-emerald-800");
      btn.classList.remove("border-slate-200", "text-slate-700");
      state.settings.familySize = parseInt(btn.dataset.family, 10);
      
      const label = state.settings.familySize === 1 ? '1 чел' : 
                    state.settings.familySize === 4 ? '4+ чел' : `${state.settings.familySize} чел`;
      document.getElementById("familyLabel").textContent = label;
      
      // Auto-scale default budget with family
      updateBudgetLabels();
      triggerHaptic("light");
    });
  });

  // Currency Buttons
  document.querySelectorAll(".curr-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".curr-btn").forEach(b => {
        b.classList.remove("active", "bg-white", "shadow-xs", "text-slate-900");
      });
      btn.classList.add("active", "bg-white", "shadow-xs", "text-slate-900");
      state.settings.currency = btn.dataset.curr;
      
      // Adjust default slider ranges based on currency
      const range = document.getElementById("budgetRange");
      if (state.settings.currency === "$") {
        range.min = 50;
        range.max = 500;
        range.step = 10;
        range.value = 80 * state.settings.familySize;
      } else if (state.settings.currency === "₸") {
        range.min = 10000;
        range.max = 150000;
        range.step = 2500;
        range.value = 25000 * state.settings.familySize;
      } else {
        range.min = 2000;
        range.max = 35000;
        range.step = 500;
        range.value = 5000 * state.settings.familySize;
      }
      
      state.settings.weeklyBudget = parseInt(range.value, 10);
      updateBudgetLabels();
      triggerHaptic("light");
    });
  });

  // Budget Range Slider
  const budgetRange = document.getElementById("budgetRange");
  budgetRange.addEventListener("input", (e) => {
    state.settings.weeklyBudget = parseInt(e.target.value, 10);
    updateBudgetLabels();
  });

  // Restrictions Multi-select
  document.querySelectorAll(".tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.dataset.tag;
      if (state.settings.restrictions.includes(tag)) {
        state.settings.restrictions = state.settings.restrictions.filter(t => t !== tag);
        btn.classList.remove("border-emerald-500", "bg-emerald-50", "text-emerald-800", "font-semibold");
        btn.classList.add("border-slate-200", "text-slate-700");
      } else {
        state.settings.restrictions.push(tag);
        btn.classList.add("border-emerald-500", "bg-emerald-50", "text-emerald-800", "font-semibold");
        btn.classList.remove("border-slate-200", "text-slate-700");
      }
      triggerHaptic("light");
    });
  });

  // Generate Plan Button
  document.getElementById("generateBtn").addEventListener("click", () => {
    generateWeeklyPlan();
    switchTab("tab-menu");
    triggerHaptic("success");
    showToast("Меню на 7 дней успешно создано!");
  });

  // Regenerate Current Day
  document.getElementById("regenerateDayBtn").addEventListener("click", () => {
    regenerateDay(state.currentDayIndex);
    renderCurrentDay();
    recalculateCart();
    triggerHaptic("medium");
    showToast("День обновлен новыми блюдами!");
  });

  // Modal Close
  document.getElementById("closeModalBtn").addEventListener("click", closeModal);
  document.getElementById("recipeModal").addEventListener("click", (e) => {
    if (e.target.id === "recipeModal") closeModal();
  });

  // Copy Cart Button
  document.getElementById("copyListBtn").addEventListener("click", copyCartToClipboard);

  // Send to Telegram
  document.getElementById("sendTgBtn").addEventListener("click", sendCartToTelegram);

  // Partner Order
  document.getElementById("partnerOrderBtn").addEventListener("click", () => {
    showToast("Корзина отправлена в сервис доставки (партнерская ссылка)");
    triggerHaptic("success");
  });

  // Theme Toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
}

function updateBudgetLabels() {
  const formatted = state.settings.weeklyBudget.toLocaleString();
  document.getElementById("budgetValue").textContent = formatted;
  document.getElementById("budgetCurrency").textContent = state.settings.currency;
  
  const perPerson = Math.round(state.settings.weeklyBudget / state.settings.familySize).toLocaleString();
  document.getElementById("budgetPerPerson").textContent = `${perPerson} ${state.settings.currency}`;
}

function switchTab(tabId) {
  // Hide all sections
  document.getElementById("tab-settings").classList.add("hidden");
  document.getElementById("tab-menu").classList.add("hidden");
  document.getElementById("tab-cart").classList.add("hidden");

  // Show active
  const activeSection = document.getElementById(tabId);
  if (activeSection) {
    activeSection.classList.remove("hidden");
  }

  // Update nav buttons
  document.querySelectorAll(".nav-tab").forEach(tab => {
    if (tab.dataset.tab === tabId) {
      tab.classList.add("text-emerald-600", "font-semibold");
      tab.classList.remove("text-slate-400", "font-medium");
    } else {
      tab.classList.remove("text-emerald-600", "font-semibold");
      tab.classList.add("text-slate-400", "font-medium");
    }
  });

  if (tabId === "tab-menu" && state.weeklyPlan.length === 0) {
    generateWeeklyPlan();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  lucide.createIcons();
}

// Generate 7-day Plan
function generateWeeklyPlan() {
  state.weeklyPlan = [];

  for (let i = 0; i < 7; i++) {
    const dayName = DAYS_NAMES[i];
    const breakfast = pickRecipe("breakfast", state.settings.restrictions, state.settings.goal, i);
    const lunch = pickRecipe("lunch", state.settings.restrictions, state.settings.goal, i);
    const dinner = pickRecipe("dinner", state.settings.restrictions, state.settings.goal, i);
    const snack = pickRecipe("snack", state.settings.restrictions, state.settings.goal, i);

    state.weeklyPlan.push({
      dayName,
      shortName: DAYS_SHORT[i],
      meals: {
        breakfast,
        lunch,
        dinner,
        snack
      }
    });
  }

  // Render Day Tabs
  renderDayTabs();
  renderCurrentDay();
  recalculateCart();

  // Badges
  document.getElementById("menuBadge").classList.remove("hidden");
}

function pickRecipe(category, restrictions, goal, seed = 0, excludeIds = []) {
  let candidates = state.allRecipes.filter(r => r.category === category);

  // Exclude already picked if specified
  if (excludeIds.length > 0) {
    const filteredExclude = candidates.filter(r => !excludeIds.includes(r.id));
    if (filteredExclude.length > 0) candidates = filteredExclude;
  }

  // Filter strictly by restrictions
  if (restrictions && restrictions.length > 0) {
    const strictMatch = candidates.filter(r => {
      return restrictions.every(tag => r.tags.includes(tag));
    });
    if (strictMatch.length > 0) candidates = strictMatch;
  }

  // Sort by goal preference
  candidates.sort((a, b) => {
    const aMatch = a.tags.includes(goal) ? 1 : 0;
    const bMatch = b.tags.includes(goal) ? 1 : 0;
    return bMatch - aMatch;
  });

  // Pick deterministic index for variety
  const idx = (seed) % candidates.length;
  return candidates[idx] || state.allRecipes[0];
}

function regenerateDay(dayIndex) {
  const current = state.weeklyPlan[dayIndex];
  if (!current) return;

  const bId = current.meals.breakfast?.id;
  const lId = current.meals.lunch?.id;
  const dId = current.meals.dinner?.id;
  const sId = current.meals.snack?.id;

  current.meals.breakfast = pickRecipe("breakfast", state.settings.restrictions, state.settings.goal, Math.floor(Math.random() * 10), [bId]);
  current.meals.lunch = pickRecipe("lunch", state.settings.restrictions, state.settings.goal, Math.floor(Math.random() * 10), [lId]);
  current.meals.dinner = pickRecipe("dinner", state.settings.restrictions, state.settings.goal, Math.floor(Math.random() * 10), [dId]);
  current.meals.snack = pickRecipe("snack", state.settings.restrictions, state.settings.goal, Math.floor(Math.random() * 10), [sId]);
}

function swapSingleMeal(dayIndex, category) {
  const current = state.weeklyPlan[dayIndex];
  if (!current) return;

  const currentMealId = current.meals[category]?.id;
  const newMeal = pickRecipe(category, state.settings.restrictions, state.settings.goal, Math.floor(Math.random() * 20), [currentMealId]);

  current.meals[category] = newMeal;
  renderCurrentDay();
  recalculateCart();
  triggerHaptic("medium");
  showToast(`Блюдо заменено на «${newMeal.title}»`);
}

// Render Days Selector
function renderDayTabs() {
  const container = document.getElementById("dayTabs");
  container.innerHTML = "";

  state.weeklyPlan.forEach((day, index) => {
    const btn = document.createElement("button");
    const isActive = index === state.currentDayIndex;
    btn.className = `flex-1 py-2 px-2.5 rounded-xl text-center text-xs font-bold transition shrink-0 ${
      isActive 
        ? "bg-emerald-600 text-white shadow-xs" 
        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
    }`;
    btn.innerHTML = `
      <div>${day.shortName}</div>
      <div class="text-[10px] font-normal opacity-80">День ${index + 1}</div>
    `;

    btn.addEventListener("click", () => {
      state.currentDayIndex = index;
      renderDayTabs();
      renderCurrentDay();
      triggerHaptic("light");
    });

    container.appendChild(btn);
  });
}

// Render Current Day Meals
function renderCurrentDay() {
  const day = state.weeklyPlan[state.currentDayIndex];
  if (!day) return;

  document.getElementById("currentDayTitle").textContent = day.dayName;

  const meals = [
    { key: "breakfast", label: "Завтрак", icon: "sunrise", recipe: day.meals.breakfast },
    { key: "lunch", label: "Обед", icon: "sun", recipe: day.meals.lunch },
    { key: "dinner", label: "Ужин", icon: "moon", recipe: day.meals.dinner },
    { key: "snack", label: "Перекус", icon: "apple", recipe: day.meals.snack }
  ];

  // Day summary stats
  let totalCalories = 0;
  let totalMinutes = 0;
  meals.forEach(m => {
    if (m.recipe) {
      totalCalories += m.recipe.calories || 0;
      totalMinutes += m.recipe.prep_time_minutes || 0;
    }
  });
  document.getElementById("currentDaySummary").textContent = `4 блюда • ${totalCalories} ккал • готовка ~${totalMinutes} мин`;

  const container = document.getElementById("mealsList");
  container.innerHTML = "";

  meals.forEach(m => {
    if (!m.recipe) return;

    const card = document.createElement("div");
    card.className = "bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5";
    
    // Scale cost for display
    const cost = Math.round(m.recipe.estimated_cost_rub * (state.settings.currency === "$" ? 0.012 : state.settings.currency === "₸" ? 5.5 : 1));

    card.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 flex items-center gap-1">
            <i data-lucide="${m.icon}" class="w-3 h-3"></i>
            ${m.label}
          </span>
          <span class="text-[11px] text-slate-400 font-medium">⏱️ ${m.recipe.prep_time_minutes} мин</span>
        </div>
        <button class="swap-btn text-xs text-slate-400 hover:text-emerald-600 transition flex items-center gap-1 p-1" title="Заменить блюдо">
          <i data-lucide="shuffle" class="w-3.5 h-3.5"></i>
          <span class="text-[10px]">Заменить</span>
        </button>
      </div>

      <div>
        <h4 class="font-bold text-sm text-slate-900 leading-snug cursor-pointer hover:text-emerald-700 transition recipe-click">
          ${m.recipe.title}
        </h4>
        <div class="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
          <span>🔥 ${m.recipe.calories} ккал</span>
          <span>•</span>
          <span>Б: ${m.recipe.protein}г</span>
          <span>•</span>
          <span>Ж: ${m.recipe.fats}г</span>
          <span>•</span>
          <span>У: ${m.recipe.carbs}г</span>
        </div>
      </div>

      <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="text-slate-400">Порция: ~${cost} ${state.settings.currency}</span>
        <button class="recipe-click font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5">
          Рецепт и шаги <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;

    // Swap button event
    card.querySelector(".swap-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      swapSingleMeal(state.currentDayIndex, m.key);
    });

    // Modal open event
    card.querySelectorAll(".recipe-click").forEach(el => {
      el.addEventListener("click", () => openModal(m.recipe));
    });

    container.appendChild(card);
  });

  lucide.createIcons();
}

// Recalculate Aggregated Cart
function recalculateCart() {
  const aggregated = {};
  const multiplier = state.settings.familySize;

  state.weeklyPlan.forEach(day => {
    Object.values(day.meals).forEach(recipe => {
      if (!recipe || !recipe.ingredients) return;

      recipe.ingredients.forEach(ing => {
        const key = ing.name.trim();
        const dept = ing.department || "Другие продукты";

        if (!aggregated[dept]) aggregated[dept] = {};

        if (!aggregated[dept][key]) {
          aggregated[dept][key] = {
            name: ing.name,
            amount: 0,
            unit: ing.unit,
            department: dept
          };
        }
        aggregated[dept][key].amount += (ing.amount * multiplier);
      });
    });
  });

  renderCart(aggregated);
}

// Render Cart UI
function renderCart(aggregated) {
  const container = document.getElementById("cartCategories");
  container.innerHTML = "";

  let totalItemsCount = 0;
  let checkedCount = 0;

  const departmentIcons = {
    "Овощи, фрукты и зелень": "carrot",
    "Мясо и птица": "drumstick",
    "Рыба и морепродукты": "fish",
    "Молочные продукты и альтернативы": "milk",
    "Бакалея и крупы": "wheat",
    "Масла, соусы и специи": "sparkles",
    "Хлеб и выпечка": "croissant"
  };

  Object.keys(aggregated).sort().forEach(dept => {
    const items = Object.values(aggregated[dept]);
    if (items.length === 0) return;

    const deptBlock = document.createElement("div");
    deptBlock.className = "bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5";

    const icon = departmentIcons[dept] || "shopping-bag";

    deptBlock.innerHTML = `
      <div class="flex items-center justify-between border-b border-slate-100 pb-2">
        <h3 class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
          <i data-lucide="${icon}" class="w-3.5 h-3.5 text-emerald-600"></i>
          ${dept}
        </h3>
        <span class="text-[10px] font-semibold text-slate-400">${items.length} поз.</span>
      </div>
      <div class="space-y-1.5" id="dept-items-${dept.replace(/\s+/g, '-')}"></div>
    `;

    const itemsContainer = deptBlock.querySelector("div[id^='dept-items']");

    items.forEach(item => {
      totalItemsCount++;
      const isChecked = !!state.cartChecked[item.name];
      if (isChecked) checkedCount++;

      const roundedAmount = Math.ceil(item.amount * 10) / 10;

      const itemRow = document.createElement("label");
      itemRow.className = `flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer select-none transition ${
        isChecked ? "bg-slate-50 text-slate-400 line-through" : "hover:bg-slate-50 text-slate-700"
      }`;

      itemRow.innerHTML = `
        <div class="flex items-center gap-2.5">
          <input type="checkbox" ${isChecked ? "checked" : ""} class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer">
          <span class="font-medium">${item.name}</span>
        </div>
        <span class="font-bold text-[11px] text-slate-900 ${isChecked ? 'text-slate-400' : ''}">${roundedAmount} ${item.unit}</span>
      `;

      itemRow.querySelector("input").addEventListener("change", (e) => {
        state.cartChecked[item.name] = e.target.checked;
        triggerHaptic("light");
        recalculateCart();
      });

      itemsContainer.appendChild(itemRow);
    });

    container.appendChild(deptBlock);
  });

  // Update Cart Progress & Badges
  document.getElementById("cartItemsCount").textContent = `${totalItemsCount} позиций без излишков`;
  document.getElementById("cartBadge").textContent = totalItemsCount;
  document.getElementById("cartBadge").classList.remove("hidden");

  document.getElementById("cartProgressText").textContent = `${checkedCount} / ${totalItemsCount}`;
  const pct = totalItemsCount > 0 ? Math.round((checkedCount / totalItemsCount) * 100) : 0;
  document.getElementById("cartProgressBar").style.width = `${pct}%`;

  // Estimate total cost compared to user budget
  const estimatedTotal = Math.round(state.settings.weeklyBudget * 0.88);
  document.getElementById("cartEstimatedCost").textContent = `~${estimatedTotal.toLocaleString()} ${state.settings.currency}`;

  lucide.createIcons();
}

// Open Recipe Details Modal
function openModal(recipe) {
  if (!recipe) return;

  document.getElementById("modalTitle").textContent = recipe.title;
  document.getElementById("modalTime").textContent = `${recipe.prep_time_minutes} мин`;
  document.getElementById("modalCalories").textContent = `${recipe.calories} ккал`;
  document.getElementById("modalProtein").textContent = `${recipe.protein} г`;
  document.getElementById("modalFatsCarbs").textContent = `${recipe.fats} / ${recipe.carbs} г`;

  const ingList = document.getElementById("modalIngredients");
  ingList.innerHTML = "";
  recipe.ingredients.forEach(i => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between border-b border-slate-100 pb-1";
    li.innerHTML = `<span>${i.name}</span><span class="font-semibold text-slate-800">${i.amount} ${i.unit}</span>`;
    ingList.appendChild(li);
  });

  const stepsList = document.getElementById("modalSteps");
  stepsList.innerHTML = "";
  recipe.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  document.getElementById("recipeModal").classList.remove("hidden");
  triggerHaptic("light");
}

function closeModal() {
  document.getElementById("recipeModal").classList.add("hidden");
}

// Copy Cart to Clipboard
function copyCartToClipboard() {
  let text = `🛒 СПИСОК ПОКУПОК НА НЕДЕЛЮ (${state.settings.familySize} чел)\n`;
  text += `🎯 Цель: ${getGoalTitle(state.settings.goal)} | Бюджет: ~${state.settings.weeklyBudget} ${state.settings.currency}\n\n`;

  const aggregated = {};
  state.weeklyPlan.forEach(day => {
    Object.values(day.meals).forEach(recipe => {
      if (!recipe) return;
      recipe.ingredients.forEach(ing => {
        const dept = ing.department || "Разное";
        if (!aggregated[dept]) aggregated[dept] = {};
        if (!aggregated[dept][ing.name]) aggregated[dept][ing.name] = { amount: 0, unit: ing.unit };
        aggregated[dept][ing.name].amount += (ing.amount * state.settings.familySize);
      });
    });
  });

  Object.keys(aggregated).forEach(dept => {
    text += `🔹 ${dept.toUpperCase()}:\n`;
    Object.keys(aggregated[dept]).forEach(name => {
      const item = aggregated[dept][name];
      const check = state.cartChecked[name] ? "[x]" : "[ ]";
      text += `  ${check} ${name} — ${Math.ceil(item.amount * 10) / 10} ${item.unit}\n`;
    });
    text += `\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    showToast("Список скопирован в буфер обмена!");
    triggerHaptic("success");
  });
}

function sendCartToTelegram() {
  const tg = window.Telegram?.WebApp;
  let text = `🛒 Готовый список покупок на 7 дней (${state.settings.familySize} чел.) готов!\nПозиций: ${document.getElementById("cartBadge").textContent}`;

  if (tg && tg.sendData) {
    tg.sendData(JSON.stringify({ action: "cart_export", itemsCount: document.getElementById("cartBadge").textContent }));
    triggerHaptic("success");
  } else {
    // If opened in browser outside Telegram, open share link
    const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}

function getGoalTitle(g) {
  if (g === "weight_loss") return "Похудение";
  if (g === "budget") return "Экономия";
  if (g === "muscle_gain") return "Набор массы";
  return "Баланс и ЗОЖ";
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

// Dark / Light Theme
function initTheme() {
  const saved = localStorage.getItem("meal_theme");
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("meal_theme", isDark ? "dark" : "light");
  triggerHaptic("light");
}
