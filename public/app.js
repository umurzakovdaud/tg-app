// OnlyFits — Athletic Workout Tracker & Stats
// Built strictly according to Onlyfits iOS UX & Design

// ==========================================
// 1. Core Exercise Catalog (25 Exercises)
// ==========================================
const EXERCISES_DB = [
  // Грудь (Chest)
  {
    id: "ex_chest_1",
    name: "Жим штанги лежа на горизонтальной скамье",
    muscle: "chest",
    muscle_ru: "Грудь",
    equipment: "Штанга",
    github_id: "Barbell_Bench_Press_-_Medium_Grip",
    targetSets: 4,
    targetReps: "8-10",
    steps: [
      "Лягте на скамью, сведите лопатки и прижмите их. Ноги плотно уприте в пол.",
      "Возьмитесь за гриф хватом чуть шире плеч. Снимите штангу со стоек на выпрямленные руки.",
      "На вдохе подконтрольно опустите гриф к нижней части грудных мышц (не бросайте на грудь).",
      "На выдохе мощным усилием грудных выжмите штангу вверх, не отрывая таз от скамьи."
    ],
    mistakes: [
      "Разведение локтей строго под 90° к корпусу (создает опасную нагрузку на плечевой сустав). Держите угол ~75°.",
      "Отрыв таза или ступней от пола при максимальном усилии.",
      "Отбив штанги от груди в нижней точке."
    ],
    primary: "Большая грудная мышца",
    secondary: "Передняя дельта, Трицепс",
    breathing: "Вдох на опускании, мощный выдох на подъеме"
  },
  {
    id: "ex_chest_2",
    name: "Жим гантелей на наклонной скамье (30°)",
    muscle: "chest",
    muscle_ru: "Грудь (Верх)",
    equipment: "Гантели",
    github_id: "Incline_Dumbbell_Press",
    targetSets: 4,
    targetReps: "10-12",
    steps: [
      "Установите скамью под углом 30 градусов. Закиньте гантели с колен в исходное положение.",
      "Сведите лопатки, грудь подайте вперед.",
      "На вдохе плавно опустите гантели по дуге до уровня верхней части груди, почувствовав растяжение.",
      "На выдохе выжмите гантели вверх, сводя их вместе в верхней точке без удара."
    ],
    mistakes: [
      "Угол скамьи выше 45° — нагрузка уходит с верха груди на передние дельты.",
      "Соударение гантелей в верхней точке с потерей напряжения в мышцах."
    ],
    primary: "Ключичная (верхняя) часть грудных",
    secondary: "Передняя дельта, Трицепс",
    breathing: "Вдох при опускании, выдох при жиме вверх"
  },
  {
    id: "ex_chest_3",
    name: "Отжимания на брусьях",
    muscle: "chest",
    muscle_ru: "Грудь / Трицепс",
    equipment: "Брусья",
    github_id: "Dips_-_Chest_Version",
    targetSets: 3,
    targetReps: "10-12",
    steps: [
      "Примите упор на брусьях на прямых руках. Слегка наклоните корпус вперед для акцента на грудные мышцы.",
      "На вдохе медленно опускайтесь вниз, разводя локти в стороны до прямого угла в суставе.",
      "На выдохе усилием груди и трицепсов отожмитесь в исходное положение."
    ],
    mistakes: [
      "Слишком глубокий провал вниз при недостаточной мобильности плечевых суставов.",
      "Строго вертикальный корпус (смещает всю нагрузку исключительно на трицепс)."
    ],
    primary: "Нижняя и средняя часть груди",
    secondary: "Трицепс, передняя дельта",
    breathing: "Вдох на спуске, выдох на подъеме"
  },
  {
    id: "ex_chest_4",
    name: "Сведение рук в кроссовере",
    muscle: "chest",
    muscle_ru: "Грудь",
    equipment: "Блочный тренажер",
    github_id: "Cable_Crossover",
    targetSets: 3,
    targetReps: "12-15",
    steps: [
      "Возьмите рукояти верхних блоков, сделайте шаг вперед и слегка наклоните корпус.",
      "Руки держите чуть согнутыми в локтях и зафиксируйте этот угол на протяжении всего сета.",
      "На выдохе сведите руки перед собой, максимально напрягая грудные в пиковой точке на 1 секунду.",
      "На вдохе подконтрольно вернитесь в точку растяжения."
    ],
    mistakes: [
      "Сгибание и разгибание рук в локтях (превращение сведения в жим).",
      "Раскачивание корпусом с задействованием инерции."
    ],
    primary: "Внутренняя и средняя часть груди",
    secondary: "Передняя дельта",
    breathing: "Вдох на разведении, выдох на сведении"
  },

  // Спина (Back)
  {
    id: "ex_back_1",
    name: "Подтягивания широким хватом",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Турник",
    github_id: "Pullups",
    targetSets: 4,
    targetReps: "8-12",
    steps: [
      "Возьмитесь за перекладину хватом шире плеч. Полностью повисните, вытянув широчайшие мышцы.",
      "Опустите лопатки вниз и направьте локти к бокам корпуса.",
      "На выдохе тянитесь грудью к перекладине за счет спины, стараясь коснуться ее верхом груди.",
      "На вдохе плавно опуститесь в нижнюю точку без резкого сброса веса."
    ],
    mistakes: [
      "Рывки ногами и телом (киппинг вместо чистой силовой работы).",
      "Тяга исключительно бицепсом без сведения лопаток."
    ],
    primary: "Широчайшие мышцы спины (ширина)",
    secondary: "Бицепс, ромбовидные, предплечья",
    breathing: "Выдох при подъеме вверх, вдох при опускании"
  },
  {
    id: "ex_back_2",
    name: "Тяга штанги в наклоне к поясу",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Штанга",
    github_id: "Bent_Over_Barbell_Row",
    targetSets: 4,
    targetReps: "8-10",
    steps: [
      "Наклоните корпус вперед под углом ~45°, слегка согнув колени. Спина строго прямая с естественным прогибом.",
      "Возьмите гриф хватом на ширине плеч.",
      "На выдохе тяните штангу вдоль бедер к низу живота, сводя лопатки и ведя локти назад.",
      "На вдохе подконтрольно опустите гриф в исходную точку."
    ],
    mistakes: [
      "Округление поясницы (риск травмы позвоночника). Держите спину прогнутой!",
      "Слишком вертикальное положение корпуса (превращает упражнение в шраги)."
    ],
    primary: "Широчайшие и трапециевидные мышцы (толщина спины)",
    secondary: "Задняя дельта, бицепс, разгибатели позвоночника",
    breathing: "Вдох внизу, выдох при подтягивании к поясу"
  },
  {
    id: "ex_back_3",
    name: "Тяга верхнего блока к груди",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Блочный тренажер",
    github_id: "Wide-Grip_Lat_Pulldown",
    targetSets: 3,
    targetReps: "10-12",
    steps: [
      "Отрегулируйте упорные валики под бедра. Сядьте ровно и возьмитесь широким хватом за рукоять.",
      "Слегка отклоните корпус назад (~10-15°), расправьте грудь.",
      "На выдохе тяните рукоять к верхней части груди, направляя локти вниз и назад.",
      "Сделайте паузу в пиковой точке и плавно вернитесь на вдохе."
    ],
    mistakes: [
      "Сильное раскачивание корпуса назад для преодоления веса по инерции.",
      "Опускание рукояти слишком низко к животу с подворачиванием плеч вперед."
    ],
    primary: "Верхняя часть широчайших",
    secondary: "Бицепс, большая круглая мышца",
    breathing: "Выдох при тяге вниз, вдох при возврате"
  },
  {
    id: "ex_back_4",
    name: "Горизонтальная тяга блока к поясу",
    muscle: "back",
    muscle_ru: "Спина",
    equipment: "Блочный тренажер",
    github_id: "Seated_Cable_Rows",
    targetSets: 3,
    targetReps: "10-12",
    steps: [
      "Сядьте на скамью, упритесь ногами в подставки, слегка согнув колени.",
      "Выпрямите спину, возьмитесь за рукоять нейтральным хватом.",
      "На выдохе потяните рукоять к нижней части живота, максимально сводя лопатки.",
      "На вдохе плавно вытяните руки вперед, чувствуя растяжение широчайших."
    ],
    mistakes: [
      "Сильный наклон корпуса вперед-назад (работа поясницей вместо спины).",
      "Разведение локтей широко в стороны вместо движения вдоль корпуса."
    ],
    primary: "Середина спины, ромбовидные, широчайшие",
    secondary: "Бицепс, задняя дельта",
    breathing: "Вдох на растяжении, выдох при тяге к животу"
  },

  // Ноги (Legs)
  {
    id: "ex_legs_1",
    name: "Приседания со штангой на плечах",
    muscle: "legs",
    muscle_ru: "Ноги",
    equipment: "Штанга",
    github_id: "Barbell_Squat",
    targetSets: 4,
    targetReps: "8-10",
    steps: [
      "Положите гриф на верх трапеций (не на шею!). Поставьте стопы на ширине плеч, носки слегка разведены.",
      "Направьте взгляд вперед, напрягите пресс.",
      "На вдохе отводите таз назад и сгибайте колени, опускаясь минимум до параллели бедра с полом.",
      "Колени строго смотрят в сторону носков. На выдохе мощным толчком пяток вернитесь вверх."
    ],
    mistakes: [
      "Завал коленей внутрь при подъеме.",
      "Отрыв пяток от пола и перенос веса на носки.",
      "Клевок тазом и скругление поясницы в нижней точке."
    ],
    primary: "Квадрицепсы, большие ягодичные мышцы",
    secondary: "Бицепс бедра, мышцы кора, икроножные",
    breathing: "Вдох перед опусканием, выдох после прохождения сложной точки"
  },
  {
    id: "ex_legs_2",
    name: "Жим ногами в тренажере",
    muscle: "legs",
    muscle_ru: "Ноги",
    equipment: "Тренажер",
    github_id: "Leg_Press",
    targetSets: 4,
    targetReps: "10-12",
    steps: [
      "Плотно прижмите спину и поясницу к креслу тренажера. Поставьте стопы на платформу на ширине плеч.",
      "Снимите фиксаторы платформы.",
      "На вдохе плавно опустите платформу до прямого угла в коленях, не отрывая поясницу.",
      "На выдохе выжмите платформу пятками вверх. В верхней точке НЕ выпрямляйте колени полностью (оставляйте микроизгиб)!"
    ],
    mistakes: [
      "Блокировка (переразгибание) коленных суставов в верхней точке под нагрузкой — крайне травмоопасно!",
      "Отрыв поясницы от сиденья при слишком глубоком опускании."
    ],
    primary: "Квадрицепсы",
    secondary: "Ягодичные, приводящие мышцы",
    breathing: "Вдох на спуске, выдох при жиме платформы"
  },
  {
    id: "ex_legs_3",
    name: "Румынская становая тяга с гантелями",
    muscle: "legs",
    muscle_ru: "Бицепс бедра / Ягодицы",
    equipment: "Гантели",
    github_id: "Romanian_Deadlift",
    targetSets: 4,
    targetReps: "10-12",
    steps: [
      "Встаньте прямо, гантели держите перед бедрами. Стопы на ширине таза, колени слегка подсогнуты.",
      "На вдохе отводите таз назад, ведя гантели строго вдоль голеней вниз.",
      "Опускайтесь до середины голени, пока спина остается идеально прямой, а в задней поверхности бедра чувствуется натяжение.",
      "На выдохе за счет сокращения ягодиц верните корпус в вертикальное положение."
    ],
    mistakes: [
      "Сгибание коленей как в приседе вместо отведения таза назад.",
      "Скругление спины в пояснице или отдаление гантелей от ног."
    ],
    primary: "Бицепс бедра, ягодичные мышцы",
    secondary: "Разгибатели спины, предплечья",
    breathing: "Вдох на наклоне, выдох при возврате"
  },
  {
    id: "ex_legs_4",
    name: "Выпады с гантелями на месте",
    muscle: "legs",
    muscle_ru: "Ноги / Ягодицы",
    equipment: "Гантели",
    github_id: "Dumbbell_Lunges",
    targetSets: 3,
    targetReps: "10-12 на ногу",
    steps: [
      "Возьмите гантели в руки вдоль корпуса. Сделайте широкий шаг вперед одной ногой.",
      "На вдохе опускайтесь строго вниз до прямого угла в переднем колене.",
      "Заднее колено почти касается пола (1-2 см от коврика). Корпус держите прямо.",
      "На выдохе оттолкнитесь пяткой передней ноги и поднимитесь."
    ],
    mistakes: [
      "Выход переднего колена далеко за линию носка.",
      "Слишком узкий шаг, перегружающий коленный сустав."
    ],
    primary: "Ягодичные мышцы, квадрицепс",
    secondary: "Бицепс бедра, икры",
    breathing: "Вдох на спуске, выдох на подъеме"
  },
  {
    id: "ex_legs_5",
    name: "Сгибания ног в тренажере лежа",
    muscle: "legs",
    muscle_ru: "Бицепс бедра",
    equipment: "Тренажер",
    github_id: "Lying_Leg_Curls",
    targetSets: 3,
    targetReps: "12-15",
    steps: [
      "Лягте на скамью, заведите валик под ахилловы сухожилия (чуть ниже икр).",
      "Прижмите таз к подушке и возьмитесь за рукоятки.",
      "На выдохе согните ноги в коленях, стараясь коснуться валиком ягодиц.",
      "Задержитесь на 1 секунду в пиковом напряжении и плавно опустите на вдохе."
    ],
    mistakes: [
      "Отрыв таза от скамьи для читинга.",
      "Резкий бросок веса в нижней точке без негативной фазы."
    ],
    primary: "Двуглавая мышца бедра (бицепс бедра)",
    secondary: "Икроножные мышцы",
    breathing: "Выдох при сгибании, вдох при опускании"
  },
  {
    id: "ex_legs_6",
    name: "Разгибания ног в тренажере сидя",
    muscle: "legs",
    muscle_ru: "Квадрицепс",
    equipment: "Тренажер",
    github_id: "Leg_Extensions",
    targetSets: 3,
    targetReps: "12-15",
    steps: [
      "Сядьте в тренажер, прижмите спину к спинке. Валик находится на уровне нижней части голени.",
      "Возьмитесь за боковые рукояти.",
      "На выдохе мощно разогните ноги до полной параллели полу, прожимая квадрицепсы.",
      "На вдохе подконтрольно вернитесь в исходную точку."
    ],
    mistakes: [
      "Рывковое движение веса с подпрыгиванием таза на сиденье.",
      "Неправильная настройка оси тренажера относительно коленного сустава."
    ],
    primary: "Четырехглавая мышца бедра (квадрицепс)",
    secondary: "Связки коленного сустава",
    breathing: "Выдох при разгибании вверх, вдох при возврате"
  },
  {
    id: "ex_legs_7",
    name: "Подъем на носки стоя на возвышении",
    muscle: "legs",
    muscle_ru: "Икроножные",
    equipment: "Тренажер / Ступенька",
    github_id: "Standing_Calf_Raises",
    targetSets: 4,
    targetReps: "15-20",
    steps: [
      "Встаньте носками на ступеньку платформы, пятки свободно свисают вниз.",
      "На вдохе опустите пятки максимально низко, почувствовав глубокое растяжение в икрах.",
      "На выдохе мощно поднимитесь на носки как можно выше и задержитесь на 1 секунду в верхней точке."
    ],
    mistakes: [
      "Пружинящие быстрые движения без паузы (работа ахиллова сухожилия вместо мышцы).",
      "Сгибание коленей."
    ],
    primary: "Икроножная мышца",
    secondary: "Камбаловидная мышца",
    breathing: "Вдох на растяжении пятки вниз, выдох на подъеме на носок"
  },

  // Плечи (Shoulders)
  {
    id: "ex_shoulders_1",
    name: "Жим гантелей сидя на скамье",
    muscle: "shoulders",
    muscle_ru: "Плечи",
    equipment: "Гантели",
    github_id: "Dumbbell_Shoulder_Press",
    targetSets: 3,
    targetReps: "10-12",
    steps: [
      "Установите спинку скамьи под углом 80-85 градусов. Поднимите гантели к плечам, ладони смотрят вперед.",
      "Локти направлены слегка вперед, а не строго в стороны.",
      "На выдохе выжмите гантели вверх по естественной дуге, не сводя их до удара.",
      "На вдохе плавно опустите до уровня ушей."
    ],
    mistakes: [
      "Слишком сильный прогиб в пояснице и отрыв лопаток от скамьи.",
      "Выпрямление локтей до жесткого щелчка в верхней точке."
    ],
    primary: "Передняя и средняя дельтовидные мышцы",
    secondary: "Трицепс, верх трапеций",
    breathing: "Вдох внизу, выдох при выжиме вверх"
  },
  {
    id: "ex_shoulders_2",
    name: "Махи гантелями в стороны стоя",
    muscle: "shoulders",
    muscle_ru: "Средняя дельта",
    equipment: "Гантели",
    github_id: "Side_Lateral_Raise",
    targetSets: 4,
    targetReps: "12-15",
    steps: [
      "Встаньте ровно, слегка наклоните корпус вперед (~5°). Гантели перед бедрами, локти чуть согнуты.",
      "На выдохе поднимите руки через стороны до уровня плеч, ведя движение локтями.",
      "Кисти не должны подниматься выше локтей! Мизинец чуть выше большого пальца.",
      "На вдохе плавно опустите руки обратно."
    ],
    mistakes: [
      "Раскачивание корпусом и подъем веса за счет инерции спины.",
      "Подъем кистей выше локтей (включает переднюю дельту вместо средней)."
    ],
    primary: "Средняя дельта (ширина плеч)",
    secondary: "Трапеция, надостная мышца",
    breathing: "Вдох внизу, выдох при махе в стороны"
  },
  {
    id: "ex_shoulders_3",
    name: "Face Pulls (Тяга каната к лицу)",
    muscle: "shoulders",
    muscle_ru: "Задняя дельта",
    equipment: "Кроссовер",
    github_id: "Face_Pull",
    targetSets: 3,
    targetReps: "12-15",
    steps: [
      "Установите канатную рукоять на уровне глаз в кроссовере. Возьмитесь за концы каната нейтральным хватом.",
      "Сделайте шаг назад, напрягите пресс.",
      "На выдохе тяните канат к переносице, разводя кисти в стороны и отводя локти назад.",
      "Задержитесь на 1 секунду и вернитесь на вдохе."
    ],
    mistakes: [
      "Опускание локтей вниз (превращает упражнение в тягу на широчайшие).",
      "Рывки головой навстречу канату."
    ],
    primary: "Задняя дельта, ротаторная манжета плеча",
    secondary: "Трапециевидные, ромбовидные мышцы",
    breathing: "Вдох вперед, выдох при тяге к лицу"
  },

  // Руки (Arms)
  {
    id: "ex_arms_1",
    name: "Подъем штанги на бицепс стоя",
    muscle: "arms",
    muscle_ru: "Бицепс",
    equipment: "Штанга / EZ-гриф",
    github_id: "Barbell_Curl",
    targetSets: 3,
    targetReps: "10-12",
    steps: [
      "Встаньте прямо, возьмите штангу хватом снизу на ширине плеч.",
      "Прижмите локти к бокам корпуса и зафиксируйте их неподвижно.",
      "На выдохе согните руки в локтях, поднимая гриф к груди силой бицепсов.",
      "В верхней точке прожмите бицепс на 1 секунду и плавно опустите на вдохе."
    ],
    mistakes: [
      "Вывод локтей вперед при подъеме (включает переднюю дельту и снимает нагрузку с бицепса).",
      "Заброс веса телом назад."
    ],
    primary: "Двуглавая мышца плеча (бицепс)",
    secondary: "Брахиалис, предплечья",
    breathing: "Вдох на спуске, выдох при подъеме"
  },
  {
    id: "ex_arms_2",
    name: "Французский жим с EZ-штангой лежа",
    muscle: "arms",
    muscle_ru: "Трицепс",
    equipment: "Штанга",
    github_id: "EZ-Bar_Skullcrusher",
    targetSets: 3,
    targetReps: "10-12",
    steps: [
      "Лягте на горизонтальную скамью, поднимите EZ-гриф над грудью.",
      "Слегка отклоните руки назад от вертикали на 15 градусов и зафиксируйте локти.",
      "На вдохе сгибайте только предплечья, опуская гриф за голову.",
      "На выдохе изолированным усилием трицепсов верните штангу вверх."
    ],
    mistakes: [
      "Разведение локтей в стороны (держите их на ширине плеч).",
      "Движение плечевой костью вместо работы только в локтевом суставе."
    ],
    primary: "Длинная и латеральная головки трицепса",
    secondary: "Локтевой сустав",
    breathing: "Вдох при опускании за голову, выдох при разгибании"
  },
  {
    id: "ex_arms_3",
    name: "Молотковые сгибания с гантелями (Хаммер)",
    muscle: "arms",
    muscle_ru: "Брахиалис / Бицепс",
    equipment: "Гантели",
    github_id: "Alternate_Hammer_Curl",
    targetSets: 3,
    targetReps: "12-14",
    steps: [
      "Держите гантели в опущенных руках нейтральным хватом (ладони обращены друг к другу).",
      "Прижмите локти к корпусу.",
      "На выдохе согните руку, поднимая гантель вверх без разворота кисти.",
      "На вдохе подконтрольно опустите вниз."
    ],
    mistakes: [
      "Разворот кистей (супинация) — в молотах хват должен оставаться строго нейтральным.",
      "Использование инерции."
    ],
    primary: "Плечелучевая мышца и брахиалис",
    secondary: "Бицепс",
    breathing: "Вдох внизу, выдох при подъеме"
  },
  {
    id: "ex_arms_4",
    name: "Разгибания рук на блоке с канатом",
    muscle: "arms",
    muscle_ru: "Трицепс",
    equipment: "Блок",
    github_id: "Triceps_Pushdown",
    targetSets: 3,
    targetReps: "12-15",
    steps: [
      "Закрепите канат на верхнем блоке, возьмитесь за концы каната.",
      "Прижмите локти к бокам, наклоните корпус вперед на 10 градусов.",
      "На выдохе полностью разогните руки вниз, в нижней точке разводя кисти в стороны.",
      "На вдохе поднимите предплечья до угла 90 градусов."
    ],
    mistakes: [
      "Движение локтей вперед-назад вместе с канатом.",
      "Подъем веса за счет наклона тела вниз."
    ],
    primary: "Внешняя (латеральная) головка трицепса",
    secondary: "Локтевая мышца",
    breathing: "Вдох при сгибании локтей вверх, выдох при выпрямлении вниз"
  },

  // Пресс и кор (Core)
  {
    id: "ex_core_1",
    name: "Скручивания на пресс на коврике",
    muscle: "core",
    muscle_ru: "Прямая мышца живота",
    equipment: "Коврик",
    github_id: "Crunches",
    targetSets: 3,
    targetReps: "15-20",
    steps: [
      "Лягте на спину, согните ноги в коленях, стопы на полу. Поясницу плотно прижмите к коврику.",
      "Руки держите у висков (не сцепляйте за головой!).",
      "На выдохе скручивайте верхнюю часть корпуса, подтягивая ребра к тазу.",
      "Поясница остается прижатой! На вдохе плавно вернитесь обратно."
    ],
    mistakes: [
      "Тяга головы руками за шею (нагрузка на шейный отдел).",
      "Подъем прямой спиной за счет сгибателей бедра."
    ],
    primary: "Прямая мышца живота",
    secondary: "Косые мышцы",
    breathing: "Вдох лежа, мощный выдох на скручивании"
  },
  {
    id: "ex_core_2",
    name: "Планка на предплечьях",
    muscle: "core",
    muscle_ru: "Мышцы кора",
    equipment: "Собственный вес",
    github_id: "Plank",
    targetSets: 3,
    targetReps: "45-60 сек",
    steps: [
      "Встаньте в упор на предплечья, локти строго под плечевыми суставами.",
      "Вытяните ноги назад, опираясь на носки. Тело натянуто как струна в одну линию от затылка до пяток.",
      "Сожмите ягодицы и втяните живот, не позволяя пояснице провисать.",
      "Удерживайте положение неподвижно, ровно дыша."
    ],
    mistakes: [
      "Провисание таза вниз (опасная компрессия поясницы).",
      "Подъем таза домиком вверх (снимает нагрузку с кора)."
    ],
    primary: "Поперечная и прямая мышцы живота, кор",
    secondary: "Ягодичные, плечи, квадрицепсы",
    breathing: "Равномерное глубокое дыхание без задержек"
  },
  {
    id: "ex_core_3",
    name: "Подъем ног в висе на перекладине",
    muscle: "core",
    muscle_ru: "Нижняя часть пресса",
    equipment: "Турник",
    github_id: "Hanging_Leg_Raise",
    targetSets: 3,
    targetReps: "10-15",
    steps: [
      "Повисните на турнике на прямых руках, стабилизируйте корпус от раскачивания.",
      "На выдохе поднимите колени (или прямые ноги) к груди, обязательно подкручивая таз вверх.",
      "Задержитесь на секунду вверху и на вдохе плавно опустите ноги."
    ],
    mistakes: [
      "Раскачивание телом маятником и подъем ног по инерции.",
      "Подъем ног без подкручивания таза (работают сгибатели бедра, а не пресс)."
    ],
    primary: "Нижний отдел прямой мышцы живота",
    secondary: "Сгибатели бедра, предплечья",
    breathing: "Вдох внизу, мощный выдох при подъеме таза и ног"
  }
];

// ==========================================
// 2. Programs Catalog (Split, Push/Pull, Upper/Lower, Full Body)
// ==========================================
const PROGRAMS = {
  classic_split_3: {
    id: "classic_split_3",
    type: "split",
    categoryTitle: "Сплит",
    title: "Сплит",
    fullTitle: "Классический сплит (3 дня)",
    daysPerWeek: 3,
    days: [
      {
        dayNum: 1,
        title: "Грудь и Трицепс",
        subtitle: "Жимовая группа, верх груди и трицепс",
        durationMin: 65,
        exercises: ["ex_chest_1", "ex_chest_2", "ex_chest_4", "ex_arms_2", "ex_arms_4", "ex_core_1"]
      },
      {
        dayNum: 2,
        title: "Спина и Бицепс",
        subtitle: "Широчайшие, толщина спины и бицепс",
        durationMin: 65,
        exercises: ["ex_back_1", "ex_back_2", "ex_back_3", "ex_arms_1", "ex_arms_3", "ex_core_3"]
      },
      {
        dayNum: 3,
        title: "Ноги и Плечи",
        subtitle: "Приседания, квадрицепс, дельты и икры",
        durationMin: 70,
        exercises: ["ex_legs_1", "ex_legs_2", "ex_legs_3", "ex_shoulders_1", "ex_shoulders_2", "ex_legs_7"]
      }
    ]
  },
  classic_split_4: {
    id: "classic_split_4",
    type: "split",
    categoryTitle: "Сплит",
    title: "Сплит 4D",
    fullTitle: "Сплит по мышечным группам (4 дня)",
    daysPerWeek: 4,
    days: [
      {
        dayNum: 1,
        title: "Грудь и Пресс",
        subtitle: "Горизонтальный и наклонный жим, брусья, сведение",
        durationMin: 60,
        exercises: ["ex_chest_1", "ex_chest_2", "ex_chest_3", "ex_chest_4", "ex_core_1", "ex_core_2"]
      },
      {
        dayNum: 2,
        title: "Спина и Задняя дельта",
        subtitle: "Подтягивания, тяга штанги, тяга блока, Face Pulls",
        durationMin: 65,
        exercises: ["ex_back_1", "ex_back_2", "ex_back_3", "ex_back_4", "ex_shoulders_3", "ex_core_3"]
      },
      {
        dayNum: 3,
        title: "Плечи и Руки",
        subtitle: "Жим сидя, махи в стороны, бицепс и трицепс",
        durationMin: 60,
        exercises: ["ex_shoulders_1", "ex_shoulders_2", "ex_arms_1", "ex_arms_2", "ex_arms_3", "ex_arms_4"]
      },
      {
        dayNum: 4,
        title: "Ноги и Икры",
        subtitle: "Приседания со штангой, жим платформы, румынская тяга",
        durationMin: 65,
        exercises: ["ex_legs_1", "ex_legs_2", "ex_legs_3", "ex_legs_5", "ex_legs_6", "ex_legs_7"]
      }
    ]
  },
  push_pull_legs: {
    id: "push_pull_legs",
    type: "push_pull",
    categoryTitle: "Тяни/Толкай",
    title: "Тяни/толкай",
    fullTitle: "Тяни / Толкай / Ноги (3 дня)",
    daysPerWeek: 3,
    days: [
      {
        dayNum: 1,
        title: "Толкай (Push)",
        subtitle: "Грудь, передняя и средняя дельта, трицепс",
        durationMin: 60,
        exercises: ["ex_chest_1", "ex_chest_2", "ex_shoulders_1", "ex_shoulders_2", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Тяни (Pull)",
        subtitle: "Спина, задняя дельта, бицепс",
        durationMin: 60,
        exercises: ["ex_back_1", "ex_back_2", "ex_back_3", "ex_shoulders_3", "ex_arms_1", "ex_arms_3"]
      },
      {
        dayNum: 3,
        title: "Ноги (Legs)",
        subtitle: "Квадрицепсы, бицепс бедра, голень, кор",
        durationMin: 65,
        exercises: ["ex_legs_1", "ex_legs_2", "ex_legs_3", "ex_legs_5", "ex_legs_7", "ex_core_1"]
      }
    ]
  },
  push_pull_4: {
    id: "push_pull_4",
    type: "push_pull",
    categoryTitle: "Тяни/Толкай",
    title: "Тяни/толкай 4D",
    fullTitle: "Тяни / Толкай (4 дня)",
    daysPerWeek: 4,
    days: [
      {
        dayNum: 1,
        title: "Толкай A (Силовой жим)",
        subtitle: "Тяжелый жим лежа, брусья, плечи и трицепс",
        durationMin: 60,
        exercises: ["ex_chest_1", "ex_chest_3", "ex_shoulders_1", "ex_arms_2", "ex_core_1"]
      },
      {
        dayNum: 2,
        title: "Тяни A (Силовая тяга)",
        subtitle: "Тяжелые подтягивания, тяга штанги, бицепс",
        durationMin: 60,
        exercises: ["ex_back_1", "ex_back_2", "ex_shoulders_3", "ex_arms_1", "ex_core_3"]
      },
      {
        dayNum: 3,
        title: "Толкай B (Объем & Дельты)",
        subtitle: "Наклонный жим гантелей, кроссовер, махи, блок",
        durationMin: 65,
        exercises: ["ex_chest_2", "ex_chest_4", "ex_shoulders_2", "ex_arms_4", "ex_core_2"]
      },
      {
        dayNum: 4,
        title: "Тяни B (Широчайшие & Ноги)",
        subtitle: "Верхний блок, румынская тяга, сгибания ног, бицепс",
        durationMin: 65,
        exercises: ["ex_back_3", "ex_back_4", "ex_legs_3", "ex_arms_3", "ex_legs_5"]
      }
    ]
  },
  upper_lower_gym_4: {
    id: "upper_lower_gym_4",
    type: "upper_lower",
    categoryTitle: "Верх/Низ",
    title: "Верх/низ",
    fullTitle: "Верх / Низ (4 дня, Зал)",
    daysPerWeek: 4,
    days: [
      {
        dayNum: 1,
        title: "Верх A",
        subtitle: "Грудь, спина, плечи, руки",
        durationMin: 65,
        exercises: ["ex_chest_1", "ex_back_2", "ex_chest_2", "ex_back_3", "ex_arms_1", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Низ A",
        subtitle: "Квадрицепс, бицепс бедра, пресс",
        durationMin: 60,
        exercises: ["ex_legs_1", "ex_legs_3", "ex_legs_2", "ex_legs_5", "ex_legs_7", "ex_core_1"]
      },
      {
        dayNum: 3,
        title: "Верх B",
        subtitle: "Ширина спины, дельты, руки",
        durationMin: 70,
        exercises: ["ex_back_1", "ex_shoulders_1", "ex_chest_3", "ex_back_4", "ex_shoulders_2", "ex_arms_3", "ex_core_1", "ex_arms_4"]
      },
      {
        dayNum: 4,
        title: "Низ B",
        subtitle: "Выпады, разгибания, кор, пресс",
        durationMin: 65,
        exercises: ["ex_legs_4", "ex_legs_3", "ex_legs_6", "ex_legs_5", "ex_core_3", "ex_core_2"]
      }
    ]
  },
  upper_lower_gym_3: {
    id: "upper_lower_gym_3",
    type: "upper_lower",
    categoryTitle: "Верх/Низ",
    title: "Верх/низ 3D",
    fullTitle: "Верх / Низ (3 дня, Зал)",
    daysPerWeek: 3,
    days: [
      {
        dayNum: 1,
        title: "Верх A",
        subtitle: "Грудь, спина, плечи, руки",
        durationMin: 65,
        exercises: ["ex_chest_1", "ex_back_2", "ex_chest_2", "ex_back_3", "ex_arms_1", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Низ",
        subtitle: "Приседания, румынская тяга, икры, пресс",
        durationMin: 60,
        exercises: ["ex_legs_1", "ex_legs_3", "ex_legs_2", "ex_legs_5", "ex_legs_7", "ex_core_1"]
      },
      {
        dayNum: 3,
        title: "Верх B",
        subtitle: "Ширина спины, дельты, руки",
        durationMin: 70,
        exercises: ["ex_back_1", "ex_shoulders_1", "ex_chest_3", "ex_back_4", "ex_shoulders_2", "ex_arms_3"]
      }
    ]
  },
  upper_lower_home_3: {
    id: "upper_lower_home_3",
    type: "upper_lower",
    categoryTitle: "Верх/Низ",
    title: "Верх/низ Дом",
    fullTitle: "Верх / Низ (3 дня, Дома)",
    daysPerWeek: 3,
    days: [
      {
        dayNum: 1,
        title: "Верх тела (Дом)",
        subtitle: "Отжимания, тяги с гантелями, дельты",
        durationMin: 55,
        exercises: ["ex_chest_2", "ex_back_2", "ex_shoulders_1", "ex_arms_1", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Низ тела (Дом)",
        subtitle: "Приседания, выпады, пресс",
        durationMin: 50,
        exercises: ["ex_legs_1", "ex_legs_4", "ex_legs_3", "ex_core_1", "ex_core_2"]
      },
      {
        dayNum: 3,
        title: "Верх B (Дом)",
        subtitle: "Плечи, спина, отжимания на брусьях",
        durationMin: 55,
        exercises: ["ex_chest_3", "ex_shoulders_2", "ex_back_1", "ex_arms_3"]
      }
    ]
  },
  full_body: {
    id: "full_body",
    type: "full_body",
    categoryTitle: "Фуллбоди",
    title: "Фуллбоди",
    fullTitle: "Фуллбоди (3 дня, Все тело)",
    daysPerWeek: 3,
    days: [
      {
        dayNum: 1,
        title: "Full Body A",
        subtitle: "Приседания, жим штанги, тяга в наклоне, плечи",
        durationMin: 65,
        exercises: ["ex_legs_1", "ex_chest_1", "ex_back_2", "ex_shoulders_2", "ex_arms_1"]
      },
      {
        dayNum: 2,
        title: "Full Body B",
        subtitle: "Бицепс бедра, наклонный жим, верхний блок, трицепс",
        durationMin: 60,
        exercises: ["ex_legs_3", "ex_chest_2", "ex_back_3", "ex_shoulders_1", "ex_arms_4"]
      },
      {
        dayNum: 3,
        title: "Full Body C",
        subtitle: "Выпады, подтягивания, брусья, молотки, пресс",
        durationMin: 60,
        exercises: ["ex_legs_4", "ex_chest_3", "ex_back_1", "ex_arms_3", "ex_core_1"]
      }
    ]
  },
  full_body_start_2: {
    id: "full_body_start_2",
    type: "full_body",
    categoryTitle: "Фуллбоди",
    title: "Фуллбоди Экспресс",
    fullTitle: "Фуллбоди Экспресс (2 дня)",
    daysPerWeek: 2,
    days: [
      {
        dayNum: 1,
        title: "Full Body 1 (Сила)",
        subtitle: "Приседания, жим лежа, тяга в наклоне, пресс",
        durationMin: 50,
        exercises: ["ex_legs_1", "ex_chest_1", "ex_back_2", "ex_shoulders_1", "ex_core_1"]
      },
      {
        dayNum: 2,
        title: "Full Body 2 (Тонус)",
        subtitle: "Жим ногами, наклонный жим, подтягивания, руки",
        durationMin: 50,
        exercises: ["ex_legs_2", "ex_chest_2", "ex_back_1", "ex_arms_1", "ex_arms_4", "ex_core_2"]
      }
    ]
  }
};

// ==========================================
// 3. Application State & Storage
// ==========================================
const state = {
  currentTab: "tab-home",
  isRegistered: false,
  user: {
    id: null,
    name: "Спортсмен",
    gender: "male",
    age: 25,
    height: 178,
    initialWeight: 75.0,
    weight: 75.0,
    goal: "muscle_gain",
    split: "upper_lower_gym_4",
    registeredAt: null,
    lastSundayWeighed: null
  },
  weightHistory: [],
  programId: "upper_lower_gym_4",
  level: "expert",
  selectedDayIdx: 2, // "Верх B" по умолчанию
  stats: {
    gymSets: 53,
    gymWorkoutsDone: 2,
    gymWorkoutsTotal: 4,
    caloriesBurned: 972,
    stepsToday: 8266,
    stepsTarget: 10000,
    sleepScore: 84,
    sleepHours: 7,
    sleepMinutes: 45,
    weight: 75.0,
    bodyFat: 14.0,
    weekNumber: 43
  },
  healthSync: {
    connected: false,
    lastSyncTime: null,
    source: "Apple Здоровье",
    permissions: {
      steps: true,
      sleep: true,
      calories: true,
      weight: true
    },
    weeklySteps: [7200, 8420, 9100, 6800, 8500, 10200, 8266],
    weeklyCalories: [580, 640, 710, 520, 680, 890, 972],
    weeklySleep: [6.8, 7.2, 7.5, 6.2, 7.8, 8.1, 7.7]
  },
  weekDays: [
    { day: "пн", status: "workout", label: "done", sets: 26 },
    { day: "вт", status: "rest", label: "rest", sets: 0 },
    { day: "ср", status: "workout", label: "done", sets: 27 },
    { day: "чт", status: "today", label: "today", sets: 0 },
    { day: "пт", status: "scheduled", label: "next", sets: 0 },
    { day: "сб", status: "scheduled", label: "next", sets: 0 },
    { day: "вс", status: "sunday", label: "weigh_in", sets: 0 }
  ],
  activeWorkout: null,
  restTimer: {
    remainingSeconds: 90,
    intervalId: null
  },
  workoutTimer: {
    secondsElapsed: 0,
    intervalId: null
  },
  exercisePhaseTimer: null,
  regCurrentStep: 1,
  regDraft: {
    name: "",
    gender: "male",
    age: 25,
    height: 178,
    initialWeight: 75.0,
    goal: "muscle_gain",
    split: "upper_lower_gym_4"
  }
};

// ==========================================
// 4. Date & Sunday Helpers
// ==========================================
function isSundayToday() {
  return new Date().getDay() === 0;
}

function getTodayFormatted() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

function getNextSundayDate() {
  const d = new Date();
  const day = d.getDay();
  const diff = (7 - day) % 7;
  const target = new Date(d);
  target.setDate(d.getDate() + (diff === 0 ? 7 : diff));
  return target;
}

function getNextSundayFormatted() {
  const target = getNextSundayDate();
  const months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
  return `${target.getDate()} ${months[target.getMonth()]}`;
}

function formatDateRu(dateStr) {
  if (!dateStr) return "";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
      const mIdx = parseInt(parts[1], 10) - 1;
      return `${parseInt(parts[2], 10)} ${months[mIdx] || parts[1]}`;
    }
  } catch (e) {}
  return dateStr;
}

// ==========================================
// 5. Initialization & LifeCycle
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTelegram();
  loadCustomExercises();
  loadCustomPrograms();
  loadSavedState();
  initEvents();
  renderAll();

  // Проверка регистрации: если пользователь новый — открываем онбординг
  setTimeout(() => {
    checkRegistration();
  }, 150);

  // Фоновая синхронизация с Apple Здоровье при входе в приложение
  setTimeout(() => {
    if (state.healthSync && state.healthSync.connected) {
      syncHealthData(false);
    }
  }, 350);

  // Проверка параметров URL (импорт программы, открытие здоровья или переход на вкладку)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("import_custom") === "1") {
      setTimeout(() => {
        openCustomProgramModal();
      }, 250);
    }
    if (urlParams.get("open_health") === "1") {
      setTimeout(() => {
        switchTab("tab-stats");
        openShortcutGuideModal("shortcut");
      }, 300);
    }
    const targetTab = urlParams.get("tab");
    if (targetTab && ["tab-home", "tab-workouts", "tab-stats"].includes(targetTab)) {
      setTimeout(() => {
        switchTab(targetTab);
      }, 100);
    }
  } catch (e) {}
});

function initTelegram() {
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();

    // Если есть данные пользователя Telegram
    const tgUser = tg.initDataUnsafe?.user;
    if (tgUser) {
      state.user.id = String(tgUser.id);
      if (!state.isRegistered && tgUser.first_name) {
        state.regDraft.name = tgUser.first_name;
        const nameInput = document.getElementById("regName");
        if (nameInput) nameInput.value = tgUser.first_name;
      }
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

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toastMsg");
  if (!toast || !msg) return;
  msg.textContent = message;
  toast.classList.remove("opacity-0", "pointer-events-none");
  setTimeout(() => {
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 2400);
}

// LocalStorage helpers
function loadSavedState() {
  try {
    const raw = localStorage.getItem("onlyfits_state_v3");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.isRegistered !== undefined) state.isRegistered = parsed.isRegistered;
      if (parsed.user) {
        const currentTgId = state.user.id;
        Object.assign(state.user, parsed.user);
        if (currentTgId) {
          state.user.id = currentTgId;
        }
      }
      if (parsed.weightHistory) state.weightHistory = parsed.weightHistory;
      if (parsed.stats) Object.assign(state.stats, parsed.stats);
      if (parsed.healthSync) Object.assign(state.healthSync, parsed.healthSync);
      if (parsed.programId && PROGRAMS[parsed.programId]) state.programId = parsed.programId;
      if (parsed.level) state.level = parsed.level;
      if (typeof parsed.selectedDayIdx === "number") state.selectedDayIdx = parsed.selectedDayIdx;
      if (parsed.lastWorkoutStats) state.lastWorkoutStats = parsed.lastWorkoutStats;
    }
  } catch (e) {}

  // Синхронизация актуального веса со статистикой
  if (state.user.weight) {
    state.stats.weight = state.user.weight;
  }
  if (state.user.split && PROGRAMS[state.user.split]) {
    state.programId = state.user.split;
  }

  // Защита от выхода индекса дня за границы выбранной программы
  const prog = PROGRAMS[state.programId] || PROGRAMS.upper_lower_gym_4;
  if (state.selectedDayIdx >= prog.days.length || state.selectedDayIdx < 0) {
    state.selectedDayIdx = 0;
  }
}

function saveState() {
  try {
    localStorage.setItem("onlyfits_state_v3", JSON.stringify({
      isRegistered: state.isRegistered,
      user: state.user,
      weightHistory: state.weightHistory,
      stats: state.stats,
      healthSync: state.healthSync,
      programId: state.programId,
      level: state.level || "expert",
      selectedDayIdx: state.selectedDayIdx,
      lastWorkoutStats: state.lastWorkoutStats
    }));
  } catch (e) {}
}

// ==========================================
// 6. Registration & Onboarding Engine
// ==========================================
function checkRegistration() {
  if (!state.isRegistered) {
    openRegistrationModal();
  }
}

function openRegistrationModal() {
  state.regCurrentStep = 1;
  const modal = document.getElementById("registrationModal");
  if (!modal) return;

  // Инициализация полей шага 1
  const nameInput = document.getElementById("regName");
  if (nameInput) {
    nameInput.value = state.user.name || state.regDraft.name || "";
  }
  document.getElementById("regAge").value = state.user.age || 25;
  document.getElementById("regHeight").value = state.user.height || 178;
  document.getElementById("regInitialWeight").value = state.user.initialWeight || 75.0;

  updateRegStepUI();
  modal.classList.remove("hidden");
  lucide.createIcons();
}

function updateRegStepUI() {
  const step = state.regCurrentStep;
  document.getElementById("regStepIndicator").textContent = `Шаг ${step} из 3`;

  const s1 = document.getElementById("regStep1");
  const s2 = document.getElementById("regStep2");
  const s3 = document.getElementById("regStep3");

  s1.classList.toggle("hidden", step !== 1);
  s2.classList.toggle("hidden", step !== 2);
  s3.classList.toggle("hidden", step !== 3);

  const backBtn = document.getElementById("regBackBtn");
  const nextBtn = document.getElementById("regNextBtn");

  if (step === 1) {
    backBtn.classList.add("hidden");
    document.getElementById("regStepTitle").textContent = "Параметры тела";
    document.getElementById("regStepSubtitle").textContent = "Укажите начальный вес, рост и возраст";
    nextBtn.innerHTML = `<span>Выбрать программу</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>`;
  } else if (step === 2) {
    backBtn.classList.remove("hidden");
    document.getElementById("regStepTitle").textContent = "Программа тренировок";
    document.getElementById("regStepSubtitle").textContent = "Выберите программу и главную цель";
    nextBtn.innerHTML = `<span>Рассчитать план</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>`;
  } else if (step === 3) {
    backBtn.classList.remove("hidden");
    document.getElementById("regStepTitle").textContent = "Персональный план";
    document.getElementById("regStepSubtitle").textContent = "Все готово к первой тренировке!";
    nextBtn.innerHTML = `<span>Начать тренировки 🚀</span>`;
  }
  lucide.createIcons();
}

function handleRegNext() {
  if (state.regCurrentStep === 1) {
    // Валидация шага 1
    const name = document.getElementById("regName").value.trim() || "Спортсмен";
    const age = parseInt(document.getElementById("regAge").value, 10);
    const height = parseFloat(document.getElementById("regHeight").value);
    const initialWeight = parseFloat(document.getElementById("regInitialWeight").value);

    if (isNaN(age) || age < 12 || age > 99) {
      showToast("Пожалуйста, укажите реальный возраст (от 12 до 99)");
      return;
    }
    if (isNaN(height) || height < 100 || height > 250) {
      showToast("Пожалуйста, укажите рост в см (от 100 до 250)");
      return;
    }
    if (isNaN(initialWeight) || initialWeight < 30 || initialWeight > 250) {
      showToast("Пожалуйста, укажите начальный вес в кг (от 30 до 250)");
      return;
    }

    state.regDraft.name = name;
    state.regDraft.age = age;
    state.regDraft.height = height;
    state.regDraft.initialWeight = Math.round(initialWeight * 10) / 10;

    state.regCurrentStep = 2;
    updateRegStepUI();
    triggerHaptic("light");
  } else if (state.regCurrentStep === 2) {
    // Переход к шагу 3 с расчетом BMR & TDEE (Миффлин-Сан Жеор)
    const w = state.regDraft.initialWeight;
    const h = state.regDraft.height;
    const a = state.regDraft.age;
    const isMale = state.regDraft.gender === "male";

    // BMR
    const bmr = (10 * w) + (6.25 * h) - (5 * a) + (isMale ? 5 : -161);
    const tdee = Math.round(bmr * 1.375); // умеренная активность

    let targetCal = tdee;
    if (state.regDraft.goal === "weight_loss") {
      targetCal = Math.round(tdee - 450);
    } else if (state.regDraft.goal === "muscle_gain") {
      targetCal = Math.round(tdee + 350);
    }

    document.getElementById("regSummaryInitialWeight").textContent = `${w.toFixed(1)} кг`;
    document.getElementById("regSummaryCalories").textContent = `${targetCal} ккал`;

    const prog = PROGRAMS[state.regDraft.split] || PROGRAMS.upper_lower_gym_4;
    document.getElementById("regSummaryProgram").textContent = `${prog.title} (${prog.daysPerWeek} дня)`;

    state.regCurrentStep = 3;
    updateRegStepUI();
    triggerHaptic("light");
  } else if (state.regCurrentStep === 3) {
    completeRegistration();
  }
}

function completeRegistration() {
  state.isRegistered = true;
  state.user.name = state.regDraft.name;
  state.user.gender = state.regDraft.gender;
  state.user.age = state.regDraft.age;
  state.user.height = state.regDraft.height;
  state.user.initialWeight = state.regDraft.initialWeight;
  state.user.weight = state.regDraft.initialWeight;
  state.user.goal = state.regDraft.goal;
  state.user.split = state.regDraft.split;
  state.programId = state.regDraft.split;
  state.stats.weight = state.regDraft.initialWeight;
  state.selectedDayIdx = 0;

  const todayStr = getTodayFormatted();
  state.user.registeredAt = todayStr;

  // Инициализируем историю веса начальной точкой
  state.weightHistory = [
    {
      date: todayStr,
      weight: state.regDraft.initialWeight,
      diff_prev: 0.0,
      diff_initial: 0.0,
      is_sunday: isSundayToday(),
      note: "Начальный вес при регистрации"
    }
  ];

  if (isSundayToday()) {
    state.user.lastSundayWeighed = todayStr;
  }

  saveState();

  // Синхронизация с сервером Flask
  syncRegistrationWithServer();

  document.getElementById("registrationModal").classList.add("hidden");
  renderAll();
  triggerHaptic("success");
  showToast(`Добро пожаловать, ${state.user.name}! Программа настроена.`);
}

function syncRegistrationWithServer() {
  const payload = {
    user_id: state.user.id || `web_${Date.now()}`,
    first_name: state.user.name,
    initial_weight: state.user.initialWeight,
    weight: state.user.weight,
    height: state.user.height,
    age: state.user.age,
    gender: state.user.gender,
    split: state.user.split,
    goal: state.user.goal,
    days_per_week: PROGRAMS[state.user.split]?.daysPerWeek || 4
  };

  fetch("/api/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(e => console.log("[Sync Register] Offline mode:", e));
}

// ==========================================
// 7. Sunday Weigh-In Engine (Воскресный замер)
// ==========================================
function openSundayModal() {
  const modal = document.getElementById("sundayWeightModal");
  if (!modal) return;

  const initWeight = state.user.initialWeight || state.user.weight || 75.0;
  const currentWeight = state.user.weight || initWeight;

  document.getElementById("sundayInitialWeightVal").textContent = `${initWeight.toFixed(1)} кг`;

  // Предыдущий замер из истории
  let prevWeight = initWeight;
  let prevDate = "старт";
  if (state.weightHistory && state.weightHistory.length > 0) {
    const lastItem = state.weightHistory[state.weightHistory.length - 1];
    prevWeight = lastItem.weight;
    prevDate = formatDateRu(lastItem.date);
  }
  document.getElementById("sundayPrevWeightVal").textContent = `${prevWeight.toFixed(1)} кг`;
  document.getElementById("sundayPrevDateVal").textContent = prevDate;

  // Инпут текущего веса
  const input = document.getElementById("sundayWeightInput");
  input.value = currentWeight.toFixed(1);

  // Обновление даты в шапке модалки
  const dateLabel = document.getElementById("sundayModalDateLabel");
  if (isSundayToday()) {
    dateLabel.textContent = "Сегодня воскресенье — контрольный замер!";
  } else {
    dateLabel.textContent = `Замер за неделю (Вс: ${getNextSundayFormatted()})`;
  }

  updateSundayLiveDiff();
  modal.classList.remove("hidden");
  triggerHaptic("light");
  lucide.createIcons();
}

function updateSundayLiveDiff() {
  const inputVal = parseFloat(document.getElementById("sundayWeightInput").value);
  if (isNaN(inputVal)) return;

  const initWeight = state.user.initialWeight || inputVal;

  let prevWeight = initWeight;
  if (state.weightHistory && state.weightHistory.length > 0) {
    prevWeight = state.weightHistory[state.weightHistory.length - 1].weight;
  }

  const diffWeek = roundNum(inputVal - prevWeight, 2);
  const diffTotal = roundNum(inputVal - initWeight, 2);

  const weekEl = document.getElementById("sundayLiveWeekDiff");
  const totalEl = document.getElementById("sundayLiveTotalDiff");

  const formatBadge = (val) => {
    const sign = val > 0 ? "+" : "";
    return `${sign}${val.toFixed(2)} кг`;
  };

  weekEl.textContent = formatBadge(diffWeek);
  totalEl.textContent = formatBadge(diffTotal);

  weekEl.className = diffWeek <= 0 ? "font-black text-emerald-400" : "font-black text-orange-400";
  totalEl.className = diffTotal <= 0 ? "font-black text-emerald-400" : "font-black text-orange-400";
}

function saveSundayWeight() {
  const inputVal = parseFloat(document.getElementById("sundayWeightInput").value);
  if (isNaN(inputVal) || inputVal < 30 || inputVal > 250) {
    showToast("Пожалуйста, введите корректный вес от 30 до 250 кг");
    return;
  }

  const weight = Math.round(inputVal * 10) / 10;
  const note = document.getElementById("sundayWeightNote")?.value.trim() || "";
  const todayStr = getTodayFormatted();
  const isSunday = isSundayToday();

  const initWeight = state.user.initialWeight || weight;
  let prevWeight = state.user.weight || initWeight;
  if (state.weightHistory && state.weightHistory.length > 0) {
    prevWeight = state.weightHistory[state.weightHistory.length - 1].weight;
  }

  const diffPrev = roundNum(weight - prevWeight, 2);
  const diffInitial = roundNum(weight - initWeight, 2);

  const entry = {
    date: todayStr,
    weight: weight,
    diff_prev: diffPrev,
    diff_initial: diffInitial,
    is_sunday: isSunday,
    note: note || (isSunday ? "Воскресный замер веса" : "Замер веса")
  };

  state.weightHistory.push(entry);
  state.user.weight = weight;
  state.stats.weight = weight;

  if (isSunday) {
    state.user.lastSundayWeighed = todayStr;
  }

  saveState();

  // Синхронизация с бэкендом
  if (state.user.id) {
    fetch(`/api/user/${state.user.id}/sunday_weight`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weight: weight, note: entry.note, date: todayStr })
    }).catch(e => console.log("[Sync Weight] Offline:", e));
  }

  document.getElementById("sundayWeightModal").classList.add("hidden");
  renderAll();
  triggerHaptic("success");

  const sign = diffInitial > 0 ? "+" : "";
  showToast(`Воскресный вес зафиксирован: ${weight} кг (${sign}${diffInitial.toFixed(1)} кг от старта)!`);
}

function roundNum(num, dec = 2) {
  const factor = Math.pow(10, dec);
  return Math.round(num * factor) / factor;
}

// ==========================================
// 8. Event Binding
// ==========================================
function initEvents() {
  // Bottom Tab Navigation
  document.querySelectorAll(".bottom-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
      triggerHaptic("light");
    });
  });

  // Day filter on Home ("Вчера", "Сегодня", "Завтра")
  document.querySelectorAll(".day-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".day-filter-btn").forEach(b => {
        b.className = "day-filter-btn text-slate-400 hover:text-white transition pb-1";
      });
      btn.className = "day-filter-btn text-white border-b-2 border-white pb-1";
      triggerHaptic("light");
    });
  });

  // Home Gym Card click -> opens Workouts Tab
  const homeGymCard = document.getElementById("homeGymCard");
  if (homeGymCard) {
    homeGymCard.addEventListener("click", () => {
      switchTab("tab-workouts");
      triggerHaptic("light");
    });
  }

  // Sunday notice banner on Home
  document.getElementById("sundayNoticeBanner")?.addEventListener("click", () => {
    openSundayModal();
  });
  document.getElementById("openSundayModalFromHomeBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openSundayModal();
  });

  // Stats tab Sunday weigh-in CTA
  document.getElementById("statsOpenSundayModalBtn")?.addEventListener("click", () => {
    openSundayModal();
  });
  document.getElementById("addMeasurementBtn")?.addEventListener("click", () => {
    openSundayModal();
  });

  // Sunday modal controls
  document.getElementById("closeSundayModalBtn")?.addEventListener("click", () => {
    document.getElementById("sundayWeightModal").classList.add("hidden");
  });
  document.getElementById("saveSundayWeightBtn")?.addEventListener("click", () => {
    saveSundayWeight();
  });

  document.getElementById("sundayWeightMinusBtn")?.addEventListener("click", () => {
    const input = document.getElementById("sundayWeightInput");
    const val = parseFloat(input.value) || 75.0;
    input.value = Math.max(30, roundNum(val - 0.1, 1)).toFixed(1);
    updateSundayLiveDiff();
    triggerHaptic("light");
  });

  document.getElementById("sundayWeightPlusBtn")?.addEventListener("click", () => {
    const input = document.getElementById("sundayWeightInput");
    const val = parseFloat(input.value) || 75.0;
    input.value = Math.min(250, roundNum(val + 0.1, 1)).toFixed(1);
    updateSundayLiveDiff();
    triggerHaptic("light");
  });

  document.getElementById("sundayWeightInput")?.addEventListener("input", () => {
    updateSundayLiveDiff();
  });

  // Registration modal controls
  document.getElementById("regNextBtn")?.addEventListener("click", () => {
    handleRegNext();
  });

  document.getElementById("regBackBtn")?.addEventListener("click", () => {
    if (state.regCurrentStep > 1) {
      state.regCurrentStep--;
      updateRegStepUI();
      triggerHaptic("light");
    }
  });

  // Gender buttons in Registration
  document.querySelectorAll(".reg-gender-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".reg-gender-btn").forEach(b => {
        b.className = "reg-gender-btn p-2.5 rounded-xl border border-of-border bg-of-subcard text-slate-400 font-bold flex items-center justify-center gap-1.5 transition";
      });
      btn.className = "reg-gender-btn active p-2.5 rounded-xl border border-of-blue bg-of-blue/15 text-of-blue font-bold flex items-center justify-center gap-1.5 transition";
      state.regDraft.gender = btn.getAttribute("data-gender");
      triggerHaptic("light");
    });
  });

  // Goal buttons in Registration
  document.querySelectorAll(".reg-goal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".reg-goal-btn").forEach(b => {
        b.className = "reg-goal-btn p-2.5 rounded-xl border border-of-border bg-of-subcard text-slate-400 font-bold text-center transition";
      });
      btn.className = "reg-goal-btn active p-2.5 rounded-xl border border-of-blue bg-of-blue/15 text-of-blue font-bold text-center transition";
      state.regDraft.goal = btn.getAttribute("data-goal");
      triggerHaptic("light");
    });
  });

  // Program selection cards in Registration
  document.querySelectorAll(".reg-program-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".reg-program-card").forEach(c => {
        c.className = "reg-program-card p-3 rounded-2xl border border-of-border bg-of-subcard cursor-pointer hover:border-slate-500 transition";
      });
      card.className = "reg-program-card active p-3 rounded-2xl border border-of-blue bg-of-blue/10 cursor-pointer transition";
      state.regDraft.split = card.getAttribute("data-program");
      triggerHaptic("light");
    });
  });

  // Top header icons
  document.getElementById("topTimerBtn")?.addEventListener("click", () => {
    if (state.activeWorkout) {
      document.getElementById("activeWorkoutModal").classList.remove("hidden");
    } else {
      showToast(`${PROGRAMS[state.programId]?.daysPerWeek || 4} тренировки в вашей программе`);
    }
    triggerHaptic("light");
  });

  document.getElementById("topCalendarBtn")?.addEventListener("click", () => {
    openSundayModal();
  });

  document.getElementById("topMenuBtn")?.addEventListener("click", () => {
    openSettingsModal();
    triggerHaptic("light");
  });

  // Switch program button
  document.getElementById("switchProgramModalBtn")?.addEventListener("click", () => {
    openSettingsModal();
  });

  // Open library / catalog buttons
  document.getElementById("openLibraryCatalogBtn")?.addEventListener("click", () => {
    openCatalogModal();
  });

  document.getElementById("closeCatalogBtn")?.addEventListener("click", () => {
    document.getElementById("catalogModal").classList.add("hidden");
  });

  // Floating Add Button (+) -> opens quick weight or sunday weigh-in
  document.getElementById("floatingAddBtn")?.addEventListener("click", () => {
    openSundayModal();
    triggerHaptic("light");
  });

  document.getElementById("closeQuickLogBtn")?.addEventListener("click", () => {
    document.getElementById("quickLogModal").classList.add("hidden");
  });

  document.getElementById("saveQuickLogBtn")?.addEventListener("click", () => {
    saveQuickLog();
  });

  // Active workout modal minimize & finish
  document.getElementById("minimizeWorkoutBtn")?.addEventListener("click", () => {
    document.getElementById("activeWorkoutModal").classList.add("hidden");
    triggerHaptic("light");
  });

  document.getElementById("finishWorkoutBtn")?.addEventListener("click", () => {
    finishActiveWorkoutSession();
  });

  document.getElementById("startWorkoutPrimaryBtn")?.addEventListener("click", () => {
    startActiveWorkoutSession();
  });

  initWorkoutStatsEventListeners();

  // Rest Timer Floating Controls
  document.getElementById("restAdd30FloatingBtn")?.addEventListener("click", () => {
    state.restTimer.remainingSeconds += 30;
    updateRestTimerUI();
    triggerHaptic("light");
  });

  document.getElementById("restSkipFloatingBtn")?.addEventListener("click", () => {
    skipRestTimer();
    triggerHaptic("medium");
  });

  // Settings modal close & save
  document.getElementById("closeSettingsBtn")?.addEventListener("click", () => {
    document.getElementById("settingsModal").classList.add("hidden");
  });

  document.getElementById("saveSettingsBtn")?.addEventListener("click", () => {
    saveSettings();
  });

  // Catalog category filter pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => {
        p.className = "cat-pill px-3 py-1 rounded-full bg-of-subcard text-slate-300 font-bold whitespace-nowrap border border-of-border";
      });
      pill.className = "cat-pill active px-3 py-1 rounded-full bg-of-blue text-of-bg font-bold whitespace-nowrap";
      renderCatalogList(pill.getAttribute("data-cat"));
      triggerHaptic("light");
    });
  });

  // Custom Program Modal triggers
  document.getElementById("homeImportProgramBtn")?.addEventListener("click", () => {
    openCustomProgramModal();
  });

  document.getElementById("openCustomProgramBannerBtn")?.addEventListener("click", () => {
    openCustomProgramModal();
  });

  document.getElementById("closeCustomProgramModalBtn")?.addEventListener("click", () => {
    closeCustomProgramModal();
  });

  // Custom Program Mode switchers (Screenshot vs Text)
  document.getElementById("importModeScreenshotBtn")?.addEventListener("click", () => {
    setCustomImportMode("screenshot");
  });

  document.getElementById("importModeTextBtn")?.addEventListener("click", () => {
    setCustomImportMode("text");
  });

  // Multi-Screenshot upload dropzone & input
  const dropZone = document.getElementById("dropScreenshotZone");
  const fileInput = document.getElementById("workoutScreenshotFileInput");

  dropZone?.addEventListener("click", () => {
    fileInput?.click();
  });

  document.getElementById("addMoreScreenshotsBtn")?.addEventListener("click", () => {
    fileInput?.click();
  });

  fileInput?.addEventListener("change", (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleScreenshotsUpload(e.target.files);
    }
  });

  // Drag & drop support for multiple screenshots
  dropZone?.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("border-of-blue");
  });
  dropZone?.addEventListener("dragleave", () => {
    dropZone.classList.remove("border-of-blue");
  });
  dropZone?.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("border-of-blue");
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleScreenshotsUpload(e.dataTransfer.files);
    }
  });

  // Apple Health Sync Actions & Modals
  document.getElementById("healthSyncActionBtn")?.addEventListener("click", () => {
    if (state.healthSync && state.healthSync.connected) {
      syncHealthData(true);
    } else {
      openAppleHealthModal();
    }
  });

  document.getElementById("topHealthSyncQuickBtn")?.addEventListener("click", () => {
    if (state.healthSync && state.healthSync.connected) {
      syncHealthData(true);
    } else {
      openAppleHealthModal();
    }
  });

  document.getElementById("openHealthSettingsBtn")?.addEventListener("click", () => {
    openAppleHealthModal();
  });

  document.getElementById("closeHealthAuthModalBtn")?.addEventListener("click", () => {
    closeAppleHealthModal();
  });

  document.getElementById("cancelHealthAccessBtn")?.addEventListener("click", () => {
    closeAppleHealthModal();
  });

  document.getElementById("grantHealthAccessBtn")?.addEventListener("click", () => {
    confirmAppleHealthAuth();
  });

  // Toggle all permissions in Apple Health sheet
  document.getElementById("healthToggleAll")?.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    document.querySelectorAll(".health-perm-toggle").forEach(chk => {
      chk.checked = isChecked;
    });
  });

  // Shortcuts guide modal & manual health entry
  document.getElementById("openShortcutGuideBtn")?.addEventListener("click", () => {
    openShortcutGuideModal("shortcut");
  });

  document.getElementById("openManualHealthEntryBtn")?.addEventListener("click", () => {
    openShortcutGuideModal("manual");
  });

  document.getElementById("closeShortcutModalBtn")?.addEventListener("click", () => {
    closeShortcutGuideModal();
  });

  document.getElementById("healthTabBtnShortcut")?.addEventListener("click", () => {
    switchHealthModalTab("shortcut");
  });

  document.getElementById("healthTabBtnManual")?.addEventListener("click", () => {
    switchHealthModalTab("manual");
  });

  document.getElementById("copyHealthWebhookBtn")?.addEventListener("click", () => {
    copyHealthWebhook();
  });

  document.getElementById("saveManualHealthBtn")?.addEventListener("click", () => {
    saveManualHealthData();
  });

  document.getElementById("triggerLiveHealthSyncBtn")?.addEventListener("click", () => {
    syncHealthData(true);
  });

  // Templates
  document.getElementById("insertTemplate4Btn")?.addEventListener("click", () => {
    loadWorkoutTemplate(4);
  });

  document.getElementById("insertTemplate3Btn")?.addEventListener("click", () => {
    loadWorkoutTemplate(3);
  });

  // Trigger parse button
  document.getElementById("triggerParseBtn")?.addEventListener("click", () => {
    triggerParseWorkoutAction();
  });

  // Save custom program button
  document.getElementById("saveCustomProgramBtn")?.addEventListener("click", () => {
    saveCustomProgram();
  });
}

// ==========================================
// 9. Tab Navigation Logic
// ==========================================
function switchTab(tabId) {
  state.currentTab = tabId;

  // Toggle Tab Sections
  document.querySelectorAll(".tab-content").forEach(sec => {
    sec.classList.add("hidden");
  });
  const activeSec = document.getElementById(tabId);
  if (activeSec) activeSec.classList.remove("hidden");

  // Toggle Bottom Navigation Pills
  document.querySelectorAll(".bottom-nav-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.className = "bottom-nav-btn tab-active-pill px-5 py-2 rounded-full flex items-center gap-1.5 text-xs font-bold transition";
    } else {
      btn.className = "bottom-nav-btn text-slate-400 hover:text-white px-5 py-2 rounded-full flex items-center gap-1.5 text-xs font-bold transition";
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  lucide.createIcons();
}

// ==========================================
// 10. Rendering Engine
// ==========================================
function renderAll() {
  renderSundayBanner();
  renderHomeWeekdays();
  renderWorkoutProgramDetails();
  renderStatsScreen();
  lucide.createIcons();
}

// Render Sunday Banner on Home Tab
function renderSundayBanner() {
  const banner = document.getElementById("sundayNoticeBanner");
  if (!banner) return;

  const badge = document.getElementById("sundayStatusBadge");
  const desc = document.getElementById("sundayStatusDesc");
  const btn = document.getElementById("openSundayModalFromHomeBtn");

  const isSunday = isSundayToday();
  const todayStr = getTodayFormatted();
  const weighedToday = state.user.lastSundayWeighed === todayStr;

  if (isSunday) {
    if (weighedToday) {
      badge.textContent = "✓ Выполнен";
      badge.className = "text-[9px] bg-emerald-500 text-dark-950 font-bold px-1.5 py-0.5 rounded-full";
      desc.textContent = `Актуальный вес зафиксирован: ${state.user.weight} кг`;
      btn.textContent = "Изменить";
      btn.className = "px-3.5 py-2 rounded-xl bg-of-subcard border border-of-border text-slate-300 font-bold text-xs hover:text-white transition shrink-0 active:scale-95";
    } else {
      badge.textContent = "Сегодня!";
      badge.className = "text-[9px] bg-orange-500 text-white font-black px-1.5 py-0.5 rounded-full animate-pulse";
      desc.textContent = "Пора обновить вес на актуальный для этой недели!";
      btn.textContent = "Внести вес";
      btn.className = "px-3.5 py-2 rounded-xl bg-orange-500 text-white font-black text-xs hover:bg-orange-400 transition shrink-0 active:scale-95 shadow-md shadow-orange-500/20";
    }
  } else {
    badge.textContent = `Вс, ${getNextSundayFormatted()}`;
    badge.className = "text-[9px] bg-of-subcard text-slate-300 font-bold px-1.5 py-0.5 rounded-full border border-of-border";
    desc.textContent = `Текущий вес: ${state.user.weight || 75} кг (следующий замер в воскресенье)`;
    btn.textContent = "Замер";
    btn.className = "px-3.5 py-2 rounded-xl bg-of-subcard hover:bg-of-card text-of-blue font-bold text-xs border border-of-border transition shrink-0 active:scale-95";
  }
}

// Render Weekdays row (пн, вт, ср, чт, пт, сб, вс) on Home & Workouts
function renderHomeWeekdays() {
  const homeContainer = document.getElementById("homeWeekdaysList");
  const progContainer = document.getElementById("programWeekdaysList");

  const buildHtml = () => {
    return state.weekDays.map(item => {
      if (item.status === "workout") {
        return `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[10px] text-slate-400">${item.day}</span>
            <div class="w-7 h-7 rounded-full bg-of-subcard border border-of-border flex items-center justify-center text-slate-200">
              <i data-lucide="dumbbell" class="w-3.5 h-3.5 text-of-blue"></i>
            </div>
          </div>
        `;
      } else if (item.status === "rest") {
        return `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[10px] text-slate-400">${item.day}</span>
            <div class="w-7 h-7 rounded-full bg-of-subcard border border-of-border flex items-center justify-center text-xs text-slate-300">
              💤
            </div>
          </div>
        `;
      } else if (item.status === "today") {
        return `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[10px] text-white font-bold">${item.day}</span>
            <div class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center bg-white/10 shadow-sm shadow-white/30">
              <div class="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        `;
      } else if (item.day === "вс") {
        // Воскресенье выделено весами (день взвешивания)
        return `
          <div class="flex flex-col items-center gap-1 cursor-pointer" onclick="openSundayModal()">
            <span class="text-[10px] text-orange-400 font-bold">${item.day}</span>
            <div class="w-7 h-7 rounded-full border border-orange-500/50 bg-orange-500/10 flex items-center justify-center text-[10px]" title="Воскресный замер веса">
              ⚖️
            </div>
          </div>
        `;
      } else {
        return `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[10px] text-slate-500">${item.day}</span>
            <div class="w-7 h-7 rounded-full border border-slate-700/80 bg-of-subcard/50"></div>
          </div>
        `;
      }
    }).join("");
  };

  const html = buildHtml();
  if (homeContainer) homeContainer.innerHTML = html;
  if (progContainer) progContainer.innerHTML = html;
}

// Select Workout Day in carousel (Верх A / Низ A / Верх B / Низ B)
function selectWorkoutDay(index) {
  const prog = PROGRAMS[state.programId] || PROGRAMS.upper_lower_gym_4;
  if (index < 0 || index >= prog.days.length) return;
  state.selectedDayIdx = index;
  renderWorkoutProgramDetails();
  saveState();
}

// Render Workout Screen details & Muscle Radar
function renderWorkoutProgramDetails() {
  const prog = PROGRAMS[state.programId] || PROGRAMS.upper_lower_gym_4;
  if (state.selectedDayIdx >= prog.days.length || state.selectedDayIdx < 0) {
    state.selectedDayIdx = 0;
  }
  const day = prog.days[state.selectedDayIdx] || prog.days[0];

  // Title
  const detailTitleEl = document.getElementById("programDetailTitle");
  if (detailTitleEl) detailTitleEl.textContent = prog.title;
  const homeTitleEl = document.getElementById("homeProgramTitle");
  if (homeTitleEl) homeTitleEl.textContent = prog.title;
  const dayTitleEl = document.getElementById("dayWorkoutTitle");
  if (dayTitleEl) dayTitleEl.textContent = day.title;

  // Badges update
  const homeDaysBadge = document.getElementById("homeDaysBadge");
  if (homeDaysBadge) homeDaysBadge.textContent = prog.daysPerWeek || prog.days.length;
  const progDaysBadge = document.getElementById("programDaysBadge");
  if (progDaysBadge) progDaysBadge.textContent = prog.daysPerWeek || prog.days.length;

  const homeCategoryBadge = document.getElementById("homeCategoryBadge");
  if (homeCategoryBadge) homeCategoryBadge.textContent = prog.categoryTitle || "Равномерно";
  const progCategoryBadge = document.getElementById("programCategoryBadge");
  if (progCategoryBadge) progCategoryBadge.textContent = prog.categoryTitle || "Равномерно";

  const levelRu = state.level === "beginner" ? "Начинающий" : state.level === "intermediate" ? "Средний" : "Эксперт";
  const levelIcon = state.level === "beginner" ? "🌱" : state.level === "intermediate" ? "⚡️" : "🦅";

  const homeLevelBadge = document.getElementById("homeLevelBadge");
  if (homeLevelBadge) homeLevelBadge.textContent = levelRu;
  const progLevelBadge = document.getElementById("programLevelBadge");
  if (progLevelBadge) progLevelBadge.textContent = levelRu;

  const homeLevelIcon = document.getElementById("homeLevelIcon");
  if (homeLevelIcon) homeLevelIcon.textContent = levelIcon;
  const progLevelIcon = document.getElementById("programLevelIcon");
  if (progLevelIcon) progLevelIcon.textContent = levelIcon;

  // Stat Pills
  const duration = day.durationMin || 65;
  const exCount = day.exercises.length;
  let totalSets = 0;

  // Tally muscle load sets for this day
  const muscleSets = { back: 0, chest: 0, arms: 0, shoulders: 0, legs: 0, core: 0 };

  day.exercises.forEach(exId => {
    const ex = EXERCISES_DB.find(e => e.id === exId);
    if (!ex) return;
    const sets = ex.targetSets || 3;
    totalSets += sets;
    if (muscleSets[ex.muscle] !== undefined) {
      muscleSets[ex.muscle] += sets;
    }
  });

  document.getElementById("workoutDurationPill").textContent = `${duration} мин`;
  document.getElementById("workoutExCountPill").textContent = `${exCount} упр.`;
  document.getElementById("workoutSetsCountPill").textContent = `${totalSets} сетов`;

  // Update Radar Badges
  if (document.getElementById("radarBackSets")) document.getElementById("radarBackSets").textContent = muscleSets.back;
  if (document.getElementById("radarChestSets")) document.getElementById("radarChestSets").textContent = muscleSets.chest;
  if (document.getElementById("radarArmsSets")) document.getElementById("radarArmsSets").textContent = muscleSets.arms;
  if (document.getElementById("radarShouldersSets")) document.getElementById("radarShouldersSets").textContent = muscleSets.shoulders;
  if (document.getElementById("radarLegsSets")) document.getElementById("radarLegsSets").textContent = muscleSets.legs;
  if (document.getElementById("radarCoreSets")) document.getElementById("radarCoreSets").textContent = muscleSets.core;

  // Carousel Pagination Dots
  const dotsContainer = document.getElementById("workoutCarouselDots");
  if (dotsContainer) {
    dotsContainer.innerHTML = prog.days.map((d, i) => {
      const active = i === state.selectedDayIdx;
      return `
        <button class="${active ? 'w-2.5 h-2.5 rounded-full bg-white shadow-sm' : 'w-2 h-2 rounded-full bg-slate-600'} transition" data-idx="${i}"></button>
      `;
    }).join("");

    dotsContainer.querySelectorAll("button").forEach(btn => {
      btn.onclick = () => {
        selectWorkoutDay(parseInt(btn.getAttribute("data-idx"), 10));
        triggerHaptic("light");
      };
    });
  }

  // Render Exercise List for Selected Day
  renderDayExercisesList(day);
  lucide.createIcons();
}

function renderDayExercisesList(day) {
  const container = document.getElementById("dayExercisesList");
  if (!container) return;

  container.innerHTML = day.exercises.map((exId, idx) => {
    const ex = EXERCISES_DB.find(e => e.id === exId);
    if (!ex) return "";

    return `
      <div class="bg-of-card p-3 rounded-2xl border border-of-border flex items-center justify-between hover:border-of-blue/40 transition">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-of-subcard border border-of-border flex items-center justify-center font-black text-slate-300 text-xs">
            0${idx + 1}
          </div>
          <div>
            <h4 class="font-bold text-white text-xs leading-tight">${ex.name}</h4>
            <div class="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
              <span>${ex.targetSets} подхода × ${ex.targetReps}</span>
              <span>•</span>
              <span class="text-of-blue">${ex.equipment}</span>
            </div>
          </div>
        </div>

        <button onclick="openExerciseVideoModal('${ex.id}')" class="p-2 rounded-xl bg-of-subcard hover:bg-of-cardHover border border-of-border text-of-blue hover:text-white transition active:scale-95" title="Техника упражнения">
          <i data-lucide="play" class="w-4 h-4 fill-current"></i>
        </button>
      </div>
    `;
  }).join("");
}

// Render Stats Screen & Sunday Weight Section (With Apple HealthKit)
function renderStatsScreen() {
  const stats = state.stats;
  const hs = state.healthSync || {
    connected: false,
    lastSyncTime: null,
    weeklySteps: [7200, 8420, 9100, 6800, 8500, 10200, 8266],
    weeklyCalories: [580, 640, 710, 520, 680, 890, 640],
    weeklySleep: [6.8, 7.2, 7.5, 6.2, 7.8, 8.1, 7.7]
  };

  // Динамический индекс текущего дня недели (0 = Пн, ..., 6 = Вс)
  const todayIdx = (new Date().getDay() + 6) % 7;

  // Обновляем показатель сегодняшнего дня в недельных срезах
  if (hs.weeklySteps && hs.weeklySteps.length === 7) {
    hs.weeklySteps[todayIdx] = stats.stepsToday || hs.weeklySteps[todayIdx];
  }
  if (hs.weeklyCalories && hs.weeklyCalories.length === 7) {
    hs.weeklyCalories[todayIdx] = stats.caloriesBurned || hs.weeklyCalories[todayIdx];
  }
  if (hs.weeklySleep && hs.weeklySleep.length === 7) {
    const curSleepDur = roundNum((stats.sleepHours || 7) + (stats.sleepMinutes || 45) / 60.0, 1);
    hs.weeklySleep[todayIdx] = curSleepDur;
  }

  // 1. Apple Health Card Status
  const healthBadge = document.getElementById("healthSyncStatusBadge");
  const healthSubtext = document.getElementById("healthSyncSubtext");
  const healthActionLabel = document.getElementById("healthSyncActionLabel");
  const healthDetailsRow = document.getElementById("healthSyncDetailsRow");
  const healthLastTime = document.getElementById("healthSyncLastTime");

  if (hs.connected) {
    if (healthBadge) {
      healthBadge.textContent = "🟢 Подключено";
      healthBadge.className = "text-[9px] px-2 py-0.5 rounded-full font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30";
    }
    if (healthSubtext) healthSubtext.textContent = "Apple HealthKit · 4 показателя синхронизированы";
    if (healthActionLabel) healthActionLabel.textContent = "Синхронизировать";
    if (healthDetailsRow) healthDetailsRow.classList.remove("hidden");
    if (healthLastTime) healthLastTime.textContent = `Синхронизировано ${hs.lastSyncTime || "сегодня"}`;
  } else {
    if (healthBadge) {
      healthBadge.textContent = "Не подключено";
      healthBadge.className = "text-[9px] px-2 py-0.5 rounded-full font-bold bg-slate-700 text-slate-300";
    }
    if (healthSubtext) healthSubtext.textContent = "Синхронизация шагов, сна, калорий и веса";
    if (healthActionLabel) healthActionLabel.textContent = "Подключить";
    if (healthDetailsRow) healthDetailsRow.classList.add("hidden");
  }

  // 2. Gym Metric
  const gymMetricEl = document.getElementById("statsGymMetricCount");
  if (gymMetricEl) gymMetricEl.textContent = stats.gymSets;

  // 3. Active Calories
  const calsEl = document.getElementById("statsActiveCaloriesDisplay");
  if (calsEl) calsEl.textContent = (stats.caloriesBurned || 640).toLocaleString("ru-RU");

  // Render Activity Bar Chart
  const actChart = document.getElementById("statsActivityBarChart");
  if (actChart) {
    const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const cals = hs.weeklyCalories || [580, 640, 710, 520, 680, 890, 640];
    const maxCal = Math.max(...cals, 1000);
    actChart.innerHTML = days.map((d, i) => {
      const val = cals[i] || 0;
      const hPx = Math.max(4, Math.round((val / maxCal) * 76));
      const isToday = (i === todayIdx);
      return `
        <div class="flex flex-col items-center gap-1 h-full justify-end flex-1">
          <div class="w-7 rounded-xl ${isToday ? 'bg-of-blue shadow-sm shadow-of-blue/40' : val > 0 ? 'bg-of-blue/60' : 'bg-slate-700/50'}" style="height: ${hPx}px;"></div>
          <span class="text-[10px] ${isToday ? 'text-of-blue font-bold' : 'text-slate-400'}">${d}</span>
        </div>
      `;
    }).join("");
  }

  // 4. Steps
  const stepsTodayEl = document.getElementById("stepsTodayCount");
  if (stepsTodayEl) stepsTodayEl.textContent = (stats.stepsToday || 8266).toLocaleString("ru-RU");
  const stepsTargetEl = document.getElementById("stepsTargetDisplay");
  if (stepsTargetEl) stepsTargetEl.textContent = (stats.stepsTarget || 10000).toLocaleString("ru-RU");
  const stepsAvgEl = document.getElementById("stepsAvgDisplay");
  if (stepsAvgEl) {
    const stList = hs.weeklySteps || [7200, 8420, 9100, 6800, 8500, 10200, 8266];
    const avg = Math.round(stList.reduce((a, b) => a + b, 0) / 7);
    stepsAvgEl.textContent = `В среднем ${avg.toLocaleString("ru-RU")}`;
  }

  // Render Steps Bar Chart
  const stepsChart = document.getElementById("statsStepsBarChart");
  if (stepsChart) {
    const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const stList = hs.weeklySteps || [7200, 8420, 9100, 6800, 8500, 10200, 8266];
    const maxSt = Math.max(...stList, 12000);
    stepsChart.innerHTML = `
      <div class="absolute left-3 right-3 top-10 border-b border-dashed border-slate-500/40 pointer-events-none"></div>
      ${days.map((d, i) => {
        const val = stList[i] || 0;
        const hPx = Math.max(6, Math.round((val / maxSt) * 90));
        const isToday = (i === todayIdx);
        return `
          <div class="flex flex-col items-center gap-1 h-full justify-end flex-1">
            <div class="w-7 rounded-xl ${isToday ? 'bg-orange-500 shadow-md shadow-orange-500/20' : 'bg-orange-600/80'}" style="height: ${hPx}px;"></div>
            <span class="text-[10px] ${isToday ? 'text-orange-400 font-bold' : 'text-slate-400'}">${d}</span>
          </div>
        `;
      }).join("")}
    `;
  }

  // 5. Sleep
  const score = stats.sleepScore || 84;
  const scoreNumEl = document.getElementById("sleepScoreNumber");
  if (scoreNumEl) scoreNumEl.textContent = score;
  const scoreInnerEl = document.getElementById("sleepScoreNumberInner");
  if (scoreInnerEl) scoreInnerEl.textContent = score;

  const qualityTitleEl = document.getElementById("sleepQualityTitle");
  if (qualityTitleEl) {
    qualityTitleEl.textContent = score >= 80 ? "Отличный сон" : score >= 65 ? "Нормально" : "Недосып";
  }

  const circlePath = document.getElementById("sleepScoreCirclePath");
  if (circlePath) {
    circlePath.setAttribute("stroke-dasharray", `${score}, 100`);
    circlePath.setAttribute("class", score >= 80 ? "text-emerald-400 transition-all duration-700" : "text-orange-500 transition-all duration-700");
  }

  const sleepDurEl = document.getElementById("avgSleepDurationDisplay");
  if (sleepDurEl) {
    sleepDurEl.textContent = `${stats.sleepHours || 7} ч ${stats.sleepMinutes || 45} мин`;
  }

  // Render Sleep Bar Chart
  const sleepChart = document.getElementById("statsSleepBarChart");
  if (sleepChart) {
    const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const slList = hs.weeklySleep || [6.8, 7.2, 7.5, 6.2, 7.8, 8.1, 7.7];
    const maxSl = 10.0;
    sleepChart.innerHTML = `
      <div class="absolute left-3 right-3 top-8 border-b border-dashed border-slate-500/40 pointer-events-none"></div>
      ${days.map((d, i) => {
        const val = slList[i] || 0;
        const hPx = Math.max(6, Math.round((val / maxSl) * 80));
        const isToday = (i === todayIdx);
        return `
          <div class="flex flex-col items-center gap-1 h-full justify-end flex-1">
            <div class="w-7 rounded-xl ${isToday ? 'bg-indigo-400 shadow-sm shadow-indigo-400/30' : 'bg-slate-500/80'}" style="height: ${hPx}px;"></div>
            <span class="text-[10px] ${isToday ? 'text-indigo-400 font-bold' : 'text-slate-400'}">${d}</span>
          </div>
        `;
      }).join("")}
    `;
  }

  // 6. Вес и Воскресный прогресс
  const initWeight = state.user.initialWeight || 75.0;
  const currentWeight = state.user.weight || initWeight;
  const diffTotal = roundNum(currentWeight - initWeight, 2);

  document.getElementById("statsInitialWeightDisplay").textContent = initWeight.toFixed(1).replace(".", ",");
  document.getElementById("statsWeightDisplay").textContent = currentWeight.toFixed(1).replace(".", ",");

  const diffEl = document.getElementById("statsWeightDiffDisplay");
  if (diffEl) {
    const sign = diffTotal > 0 ? "+" : "";
    diffEl.textContent = `${sign}${diffTotal.toFixed(1).replace(".", ",")} кг`;
    diffEl.className = diffTotal <= 0 ? "text-base font-black text-emerald-400 mt-0.5" : "text-base font-black text-orange-400 mt-0.5";
  }

  // Воскресный статус
  const nextDateEl = document.getElementById("statsSundayNextDate");
  if (nextDateEl) {
    if (isSundayToday()) {
      nextDateEl.textContent = "Сегодня контрольный день взвешивания!";
    } else {
      nextDateEl.textContent = `Следующий замер: Воскресенье (${getNextSundayFormatted()})`;
    }
  }

  // История воскресных замеров
  renderWeightHistoryList();
  lucide.createIcons();
}

function renderWeightHistoryList() {
  const container = document.getElementById("statsWeightHistoryList");
  if (!container) return;

  if (!state.weightHistory || state.weightHistory.length === 0) {
    container.innerHTML = `
      <div class="p-3 rounded-xl bg-of-subcard text-slate-400 text-center text-xs">
        Пока нет замеров. Первое взвешивание запланировано на воскресенье!
      </div>
    `;
    return;
  }

  // Рендерим от новых к старым
  const reversed = [...state.weightHistory].reverse();
  container.innerHTML = reversed.map((item, idx) => {
    const diff = item.diff_prev || 0;
    const sign = diff > 0 ? "+" : "";
    const badgeColor = diff <= 0 ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : "text-orange-400 bg-orange-500/10 border-orange-500/20";

    return `
      <div class="p-2.5 rounded-2xl bg-of-subcard border border-of-border/60 flex items-center justify-between text-xs">
        <div class="flex items-center gap-2">
          <span class="text-sm">📅</span>
          <div>
            <div class="font-bold text-white text-xs">${formatDateRu(item.date)}</div>
            <div class="text-[10px] text-slate-400">${item.note || (item.is_sunday ? "Воскресный замер" : "Замер")}</div>
          </div>
        </div>
        <div class="text-right">
          <div class="font-black text-white text-sm">${item.weight.toFixed(1)} кг</div>
          ${idx < reversed.length - 1 ? `
            <div class="text-[10px] font-bold px-1.5 py-0.5 rounded-md border inline-block ${badgeColor}">
              ${sign}${diff.toFixed(1)} кг
            </div>
          ` : `
            <div class="text-[9px] text-slate-500">Старт</div>
          `}
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================
// 11. Active Workout Mode (Sets, Tonnage, Timer)
// ==========================================
function startActiveWorkoutSession() {
  const prog = PROGRAMS[state.programId] || PROGRAMS.upper_lower_gym_4;
  const day = prog.days[state.selectedDayIdx] || prog.days[0];

  state.activeWorkout = {
    title: day.title,
    startTime: Date.now(),
    exercises: day.exercises.map(exId => {
      const ex = EXERCISES_DB.find(e => e.id === exId);
      const setsCount = (ex && ex.targetSets) ? ex.targetSets : 3;
      return {
        id: ex ? ex.id : exId,
        name: ex ? ex.name : "Упражнение",
        sets: Array.from({ length: setsCount }, (_, i) => ({
          setNum: i + 1,
          weight: 60,
          reps: 10,
          completed: false
        }))
      };
    })
  };

  document.getElementById("activeModalTitle").textContent = day.title;
  renderActiveExercisesList();

  // Start Workout Timer
  if (state.workoutTimer.intervalId) clearInterval(state.workoutTimer.intervalId);
  state.workoutTimer.secondsElapsed = 0;
  state.workoutTimer.intervalId = setInterval(() => {
    state.workoutTimer.secondsElapsed++;
    const mins = String(Math.floor(state.workoutTimer.secondsElapsed / 60)).padStart(2, "0");
    const secs = String(state.workoutTimer.secondsElapsed % 60).padStart(2, "0");
    document.getElementById("workoutTimer").textContent = `${mins}:${secs}`;
  }, 1000);

  document.getElementById("activeWorkoutModal").classList.remove("hidden");
  triggerHaptic("success");
  lucide.createIcons();
}

function renderActiveExercisesList() {
  const container = document.getElementById("activeExercisesList");
  if (!container || !state.activeWorkout) return;

  container.innerHTML = state.activeWorkout.exercises.map((ex, exIdx) => {
    return `
      <div class="bg-of-card p-3.5 rounded-2xl border border-of-border space-y-2.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-of-subcard text-slate-300 font-bold text-xs flex items-center justify-center">${exIdx + 1}</span>
            <h4 class="font-bold text-white text-xs">${ex.name}</h4>
          </div>
          <button onclick="openExerciseVideoModal('${ex.id}')" class="text-xs text-of-blue hover:text-white flex items-center gap-1 font-bold">
            <i data-lucide="play" class="w-3 h-3 fill-current"></i>
            <span>Техника</span>
          </button>
        </div>

        <div class="space-y-1.5 pt-1">
          <div class="grid grid-cols-12 text-[10px] text-slate-400 font-bold px-2">
            <span class="col-span-2">СЕТ</span>
            <span class="col-span-4 text-center">ВЕС (КГ)</span>
            <span class="col-span-4 text-center">ПОВТ</span>
            <span class="col-span-2 text-right">ГОТОВО</span>
          </div>

          ${ex.sets.map((set, setIdx) => {
            return `
              <div class="set-row grid grid-cols-12 items-center p-2 rounded-xl bg-of-subcard border border-of-border/60 ${set.completed ? 'set-completed' : ''}" id="setRow_${exIdx}_${setIdx}">
                <span class="col-span-2 font-mono font-bold text-xs text-slate-300">#${set.setNum}</span>
                <div class="col-span-4 px-1">
                  <input type="number" step="0.5" value="${set.weight}" onchange="updateSetWeight(${exIdx}, ${setIdx}, this.value)" class="w-full text-center bg-of-card border border-of-border rounded-lg py-1 text-xs text-white outline-none focus:border-of-blue">
                </div>
                <div class="col-span-4 px-1">
                  <input type="number" value="${set.reps}" onchange="updateSetReps(${exIdx}, ${setIdx}, this.value)" class="w-full text-center bg-of-card border border-of-border rounded-lg py-1 text-xs text-white outline-none focus:border-of-blue">
                </div>
                <div class="col-span-2 flex justify-end">
                  <input type="checkbox" ${set.completed ? "checked" : ""} onchange="toggleSetCompleted(${exIdx}, ${setIdx}, this.checked)" class="w-5 h-5 rounded cursor-pointer">
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
  lucide.createIcons();
}

function updateSetWeight(exIdx, setIdx, val) {
  if (!state.activeWorkout) return;
  state.activeWorkout.exercises[exIdx].sets[setIdx].weight = parseFloat(val) || 0;
  calculateActiveTonnage();
}

function updateSetReps(exIdx, setIdx, val) {
  if (!state.activeWorkout) return;
  state.activeWorkout.exercises[exIdx].sets[setIdx].reps = parseInt(val, 10) || 0;
  calculateActiveTonnage();
}

function toggleSetCompleted(exIdx, setIdx, completed) {
  if (!state.activeWorkout) return;
  const set = state.activeWorkout.exercises[exIdx].sets[setIdx];
  set.completed = completed;

  const row = document.getElementById(`setRow_${exIdx}_${setIdx}`);
  if (row) {
    if (completed) row.classList.add("set-completed");
    else row.classList.remove("set-completed");
  }

  calculateActiveTonnage();

  if (completed) {
    triggerHaptic("success");
    startRestTimer(90);
  }
}

function calculateActiveTonnage() {
  if (!state.activeWorkout) return;
  let totalKg = 0;
  state.activeWorkout.exercises.forEach(ex => {
    ex.sets.forEach(s => {
      if (s.completed) totalKg += (s.weight * s.reps);
    });
  });
  const formatted = totalKg >= 1000 ? `${(totalKg / 1000).toFixed(2)} т` : `${totalKg} кг`;
  document.getElementById("activeTonnageCounter").textContent = formatted;
}

// 90s Rest Timer
function startRestTimer(seconds = 90) {
  if (state.restTimer.intervalId) clearInterval(state.restTimer.intervalId);
  state.restTimer.remainingSeconds = seconds;

  const bar = document.getElementById("restTimerFloatingBar");
  bar.classList.remove("hidden");
  updateRestTimerUI();

  state.restTimer.intervalId = setInterval(() => {
    state.restTimer.remainingSeconds--;
    updateRestTimerUI();

    if (state.restTimer.remainingSeconds <= 0) {
      clearInterval(state.restTimer.intervalId);
      state.restTimer.intervalId = null;
      bar.classList.add("hidden");
      playBeep();
      triggerHaptic("warning");
      showToast("Время отдыха вышло! Пора к следующему сету!");
    }
  }, 1000);
}

function updateRestTimerUI() {
  const rem = Math.max(0, state.restTimer.remainingSeconds);
  const mins = String(Math.floor(rem / 60)).padStart(2, "0");
  const secs = String(rem % 60).padStart(2, "0");
  document.getElementById("restTimerFloatingCountdown").textContent = `${mins}:${secs}`;
}

function skipRestTimer() {
  if (state.restTimer.intervalId) clearInterval(state.restTimer.intervalId);
  state.restTimer.intervalId = null;
  document.getElementById("restTimerFloatingBar").classList.add("hidden");
}

// ==========================================
// 11.1 OnlyFits Workout Stats & Story Summary Modal (3 Slides)
// ==========================================

const DEFAULT_WORKOUT_SUMMARY = {
  title: "Верх/низ, Низ А",
  durationFormatted: "01:48",
  tonnage: 18718,
  completedSetsCount: 27,
  exercisesCount: 8,
  workoutNumber: 2,
  userHandle: "@daud.umurzakov",
  workedMuscles: ["quads", "adductors", "glutes", "hamstrings", "calves"],
  exercises: [
    { name: "Гакк присед", completedSets: 4, bestSet: { weight: 60, reps: 10 } },
    { name: "Гиперэкстензия", completedSets: 4, bestSet: { weight: 92, reps: 12 } },
    { name: "Сгибания ног лежа", completedSets: 3, bestSet: { weight: 45, reps: 8 } },
    { name: "Разгибания ног сидя", completedSets: 3, bestSet: { weight: 57, reps: 12 } },
    { name: "Подъем на носки в Смите", completedSets: 2, bestSet: { weight: 82, reps: 12 } },
    { name: "Ягодичный мост в тренажере", completedSets: 4, bestSet: { weight: 100, reps: 8 } },
    { name: "Жим ногами широко", completedSets: 4, bestSet: { weight: 110, reps: 15 } },
    { name: "Наклоны в стороны с гантелью стоя", completedSets: 3, bestSet: { weight: 15, reps: 12 } }
  ]
};

let currentSummaryData = null;
let currentSummarySlide = 0;
let currentSummaryTheme = "fill"; // "fill" (Заливка) or "trans" (Прозрачный)

function getUserHandle() {
  if (state.user?.handle) {
    return state.user.handle.startsWith('@') ? state.user.handle : `@${state.user.handle}`;
  }
  if (state.user?.username) {
    return state.user.username.startsWith('@') ? state.user.username : `@${state.user.username}`;
  }
  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (tgUser?.username) {
    return `@${tgUser.username}`;
  }
  return "@daud.umurzakov";
}

function getMusclesForExercise(ex) {
  const result = [];
  const name = (ex.name || "").toLowerCase();
  const muscle = (ex.muscle || "").toLowerCase();
  const id = (ex.id || "").toLowerCase();

  // 1. Legs detection
  if (name.includes("гакк") || name.includes("присед") || name.includes("разгибан") || id === "ex_legs_1" || id === "ex_legs_2" || id === "ex_legs_6") {
    result.push("quads");
  }
  if (name.includes("жим ногами") || name.includes("присед") || name.includes("выпад") || name.includes("ягодичн") || name.includes("мост") || name.includes("румынск") || name.includes("гиперэкстенз") || id === "ex_legs_3" || id === "ex_legs_4") {
    result.push("glutes");
  }
  if (name.includes("сгибан") || name.includes("румынск") || name.includes("бицепс бедра") || name.includes("мертвая") || name.includes("гиперэкстенз") || id === "ex_legs_3" || id === "ex_legs_5") {
    result.push("hamstrings");
  }
  if (name.includes("носки") || name.includes("икр") || name.includes("голен") || id === "ex_legs_7") {
    result.push("calves");
  }
  if (name.includes("широко") || name.includes("приводящ") || name.includes("присед") || name.includes("гакк")) {
    result.push("adductors");
  }

  // 2. Chest detection
  if (muscle === "chest" || name.includes("жим лежа") || name.includes("жим гантел") || name.includes("брусь") || name.includes("сведен") || name.includes("грудь")) {
    result.push("chest");
    result.push("triceps");
    result.push("shoulders");
  }

  // 3. Back detection
  if (muscle === "back" || name.includes("подтягиван") || name.includes("тяга") || name.includes("спин") || name.includes("блок")) {
    result.push("lats");
    result.push("traps");
    result.push("biceps");
    if (name.includes("становая") || name.includes("наклоне") || name.includes("пояс") || name.includes("гиперэкстенз")) {
      result.push("lowerback");
    }
  }

  // 4. Shoulders detection
  if (muscle === "shoulders" || name.includes("жим стоя") || name.includes("армейск") || name.includes("махи") || name.includes("дельт")) {
    result.push("shoulders");
    if (name.includes("наклон") || name.includes("face")) result.push("traps");
  }

  // 5. Arms detection
  if (muscle === "arms") {
    if (name.includes("бицепс") || name.includes("молот") || name.includes("сгибание рук")) {
      result.push("biceps");
      result.push("forearms");
    }
    if (name.includes("трицепс") || name.includes("француз") || name.includes("разгибание рук")) {
      result.push("triceps");
    }
  }

  // 6. Core detection
  if (muscle === "core" || name.includes("пресс") || name.includes("скручиван") || name.includes("планка") || name.includes("наклон")) {
    result.push("abs");
    if (name.includes("планка") || name.includes("наклон")) result.push("obliques");
  }

  // Fallbacks
  if (result.length === 0) {
    if (muscle === "legs") result.push("quads", "glutes", "hamstrings", "calves");
    else if (muscle === "chest") result.push("chest");
    else if (muscle === "back") result.push("lats", "traps");
    else if (muscle === "shoulders") result.push("shoulders");
    else if (muscle === "arms") result.push("biceps", "triceps");
    else if (muscle === "core") result.push("abs");
  }

  return result;
}

function getWeightComparison(weightKg) {
  if (weightKg < 1500) {
    return { name: "Легковой хэтчбек", type: "car" };
  } else if (weightKg < 3500) {
    return { name: "Внедорожник", type: "suv" };
  } else if (weightKg < 6500) {
    return { name: "Африканский слон", type: "elephant" };
  } else if (weightKg < 12000) {
    return { name: "Боевой вертолет", type: "helicopter" };
  } else if (weightKg < 28000) {
    return { name: "Бизнес-джет", type: "jet" };
  } else if (weightKg < 55000) {
    return { name: "Боевой танк", type: "tank" };
  } else {
    return { name: "Пассажирский лайнер", type: "airliner" };
  }
}

function renderWeightComparisonSvg(weightKg) {
  // Signature OnlyFits Business Jet (as in user screenshot 1)
  return `
    <svg viewBox="0 0 380 180" class="w-full max-h-[160px] object-contain my-1 select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ground line -->
      <line x1="45" y1="138" x2="310" y2="138" class="vehicle-stroke" stroke-width="2.2" stroke-linecap="round"/>
      
      <!-- Main Aircraft Body & Wings -->
      <g class="vehicle-fill">
        <!-- Fuselage & Nose -->
        <path d="M 40 120 C 50 115 70 109 100 104 C 115 101 150 101 220 106 C 255 108 280 103 305 74 L 313 74 C 315 77 310 90 305 99 C 300 108 270 121 220 123 C 170 124 105 127 55 130 C 42 131 36 125 40 120 Z"/>

        <!-- T-Tail Vertical Fin & Horizontal Stabilizer -->
        <path d="M 270 107 L 322 36 L 345 38 L 298 107 Z"/>
        <path d="M 305 40 L 358 40 C 364 40 367 37 362 36 L 318 35 C 310 35 303 37 305 40 Z"/>

        <!-- Wing & Winglet -->
        <path d="M 165 117 L 332 117 C 342 117 348 114 352 102 L 347 104 C 343 112 338 113 328 113 L 198 115 Z"/>

        <!-- Rear Engine Pod -->
        <path d="M 235 90 C 235 84 240 80 254 80 L 292 84 C 298 85 301 89 300 97 L 254 97 C 240 97 235 94 235 90 Z"/>

        <!-- Landing Gear Struts & Wheels -->
        <!-- Front Nose Gear -->
        <rect x="78" y="126" width="3" height="11"/>
        <circle cx="79.5" cy="136" r="3.2"/>
        <!-- Main Gear Front -->
        <rect x="170" y="122" width="4" height="15"/>
        <circle cx="172" cy="136" r="3.8"/>
        <!-- Main Gear Rear -->
        <rect x="226" y="122" width="4" height="15"/>
        <circle cx="228" cy="136" r="3.8"/>
      </g>

      <!-- Cockpit & Cabin Windows Cutouts -->
      <g class="vehicle-cutout">
        <!-- Cockpit Windshield Notch -->
        <path d="M 72 110 L 90 107 L 91 113 L 74 115 Z"/>
        <path d="M 94 106 L 112 106 L 111 113 L 96 113 Z"/>
        
        <!-- Passenger Cabin Windows -->
        <rect x="124" y="108" width="6.5" height="5.5" rx="1.2"/>
        <rect x="135" y="108" width="6.5" height="5.5" rx="1.2"/>
        <rect x="146" y="108" width="6.5" height="5.5" rx="1.2"/>
        <rect x="157" y="108" width="6.5" height="5.5" rx="1.2"/>
        <rect x="168" y="108" width="6.5" height="5.5" rx="1.2"/>
        <rect x="179" y="108" width="6.5" height="5.5" rx="1.2"/>
        <rect x="190" y="108" width="6.5" height="5.5" rx="1.2"/>

        <!-- Passenger Door Outline -->
        <path d="M 115 107 L 121 107 L 121 123 L 115 123 Z" fill="none" stroke="currentColor" stroke-width="1.6" class="vehicle-stroke"/>

        <!-- Engine Intake Ring -->
        <ellipse cx="242" cy="90" rx="2.5" ry="5.5"/>
      </g>
    </svg>
  `;
}

function renderAnatomicalBodySvg(workedMusclesList) {
  const muscleSet = new Set(workedMusclesList || []);

  const getPartClass = (muscleName) => {
    return muscleSet.has(muscleName) ? "muscle-part muscle-active" : "muscle-part muscle-inactive";
  };

  return `
    <svg viewBox="0 0 320 310" class="w-full h-full max-h-[250px] object-contain select-none anatomy-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- ==================== FRONT VIEW (Left) ==================== -->
      <g id="svgFrontView" transform="translate(10, 4)">
        <!-- Head & Ears -->
        <ellipse cx="75" cy="27" rx="12.5" ry="16" class="muscle-inactive muscle-part" />
        <path d="M 62 25 C 60 25 59 29 62 33" class="body-contour-line" />
        <path d="M 88 25 C 90 25 91 29 88 33" class="body-contour-line" />
        <!-- Neck -->
        <path d="M 68 40 L 68 49" class="body-contour-line" />
        <path d="M 82 40 L 82 49" class="body-contour-line" />

        <!-- Traps (Front) -->
        <path data-muscle="traps" d="M 68 42 C 60 45 52 50 48 53 L 52 57 C 59 54 67 50 69 49 Z" class="${getPartClass('traps')}" />
        <path data-muscle="traps" d="M 82 42 C 90 45 98 50 102 53 L 98 57 C 91 54 83 50 81 49 Z" class="${getPartClass('traps')}" />

        <!-- Shoulders / Deltoids (Front) -->
        <path data-muscle="shoulders" d="M 48 53 C 41 60 38 71 40 81 C 45 82 49 79 52 73 C 54 66 52 60 48 53 Z" class="${getPartClass('shoulders')}" />
        <path data-muscle="shoulders" d="M 102 53 C 109 60 112 71 110 81 C 105 82 101 79 98 73 C 96 66 98 60 102 53 Z" class="${getPartClass('shoulders')}" />

        <!-- Chest (Pectorals) -->
        <path data-muscle="chest" d="M 53 58 C 61 56 68 57 73 60 L 73 86 C 66 87 57 85 51 79 C 49 71 50 64 53 58 Z" class="${getPartClass('chest')}" />
        <path data-muscle="chest" d="M 97 58 C 89 56 82 57 77 60 L 77 86 C 84 87 93 85 99 79 C 101 71 100 64 97 58 Z" class="${getPartClass('chest')}" />

        <!-- Biceps -->
        <path data-muscle="biceps" d="M 40 81 C 38 90 38 100 40 109 C 44 109 48 106 50 99 C 52 92 51 84 49 80 Z" class="${getPartClass('biceps')}" />
        <path data-muscle="biceps" d="M 110 81 C 112 90 112 100 110 109 C 106 109 102 106 100 99 C 98 92 99 84 101 80 Z" class="${getPartClass('biceps')}" />

        <!-- Forearms (Front) -->
        <path data-muscle="forearms" d="M 40 109 C 35 120 33 132 35 147 C 39 148 43 146 45 137 C 48 127 49 117 48 109 Z" class="${getPartClass('forearms')}" />
        <path data-muscle="forearms" d="M 110 109 C 115 120 117 132 115 147 C 111 148 107 146 105 137 C 102 127 101 117 102 109 Z" class="${getPartClass('forearms')}" />
        <!-- Hands -->
        <path d="M 35 147 C 34 154 36 160 38 163 C 41 163 43 158 44 151 Z" class="muscle-inactive muscle-part" />
        <path d="M 115 147 C 116 154 114 160 112 163 C 109 163 107 158 106 151 Z" class="muscle-inactive muscle-part" />

        <!-- Abs (Rectus Abdominis) -->
        <!-- Upper Abs -->
        <path data-muscle="abs" d="M 65 89 L 73 89 L 73 99 L 65 99 Z" class="${getPartClass('abs')}" />
        <path data-muscle="abs" d="M 77 89 L 85 89 L 85 99 L 77 99 Z" class="${getPartClass('abs')}" />
        <!-- Mid Abs -->
        <path data-muscle="abs" d="M 65 102 L 73 102 L 73 112 L 65 112 Z" class="${getPartClass('abs')}" />
        <path data-muscle="abs" d="M 77 102 L 85 102 L 85 112 L 77 112 Z" class="${getPartClass('abs')}" />
        <!-- Lower Abs -->
        <path data-muscle="abs" d="M 66 115 L 73 115 L 73 127 L 67 127 Z" class="${getPartClass('abs')}" />
        <path data-muscle="abs" d="M 77 115 L 84 115 L 83 127 L 77 127 Z" class="${getPartClass('abs')}" />

        <!-- Obliques (Flanks) -->
        <path data-muscle="obliques" d="M 53 85 C 51 96 53 108 56 119 C 59 127 63 133 65 137 L 65 123 C 62 113 61 102 62 89 Z" class="${getPartClass('obliques')}" />
        <path data-muscle="obliques" d="M 97 85 C 99 96 97 108 94 119 C 91 127 87 133 85 137 L 85 123 C 88 113 89 102 88 89 Z" class="${getPartClass('obliques')}" />

        <!-- Pelvis / Groin -->
        <path d="M 65 137 L 75 147 L 85 137 L 75 132 Z" class="body-contour-line" />

        <!-- Quads (Front Thighs) -->
        <!-- Left Leg (Viewer's left) -->
        <path data-muscle="quads" d="M 55 138 C 49 150 48 166 51 183 C 53 188 56 190 59 188 C 58 175 59 160 62 145 Z" class="${getPartClass('quads')}" />
        <path data-muscle="quads" d="M 63 142 C 61 156 61 172 62 186 C 65 188 68 188 69 186 C 71 172 72 156 70 142 Z" class="${getPartClass('quads')}" />
        <path data-muscle="quads" d="M 69 169 C 68 178 68 187 70 193 C 73 194 76 191 76 184 C 75 178 73 172 69 169 Z" class="${getPartClass('quads')}" />
        <path data-muscle="adductors" d="M 71 143 C 70 152 70 160 71 168 C 74 166 76 159 77 151 Z" class="${getPartClass('adductors')}" />

        <!-- Right Leg (Viewer's right) -->
        <path data-muscle="quads" d="M 95 138 C 101 150 102 166 99 183 C 97 188 94 190 91 188 C 92 175 91 160 88 145 Z" class="${getPartClass('quads')}" />
        <path data-muscle="quads" d="M 87 142 C 89 156 89 172 88 186 C 85 188 82 188 81 186 C 79 172 78 156 80 142 Z" class="${getPartClass('quads')}" />
        <path data-muscle="quads" d="M 81 169 C 82 178 82 187 80 193 C 77 194 74 191 74 184 C 75 178 77 172 81 169 Z" class="${getPartClass('quads')}" />
        <path data-muscle="adductors" d="M 79 143 C 80 152 80 160 79 168 C 76 166 74 159 73 151 Z" class="${getPartClass('adductors')}" />

        <!-- Knees -->
        <circle cx="64" cy="197" r="4" class="body-contour-line" />
        <circle cx="86" cy="197" r="4" class="body-contour-line" />

        <!-- Calves / Shins (Front) -->
        <path data-muscle="calves" d="M 58 203 C 55 213 55 225 58 238 C 61 243 65 243 66 238 C 66 225 67 213 68 203 Z" class="${getPartClass('calves')}" />
        <path data-muscle="calves" d="M 69 204 C 68 215 68 226 69 238 C 71 242 74 241 75 235 C 75 224 74 215 72 204 Z" class="${getPartClass('calves')}" />

        <path data-muscle="calves" d="M 92 203 C 95 213 95 225 92 238 C 89 243 85 243 84 238 C 84 225 83 213 82 203 Z" class="${getPartClass('calves')}" />
        <path data-muscle="calves" d="M 81 204 C 82 215 82 226 81 238 C 79 242 76 241 75 235 C 75 224 76 215 78 204 Z" class="${getPartClass('calves')}" />

        <!-- Feet (Front) -->
        <path d="M 58 244 C 56 251 57 257 60 259 C 66 259 68 255 68 244 Z" class="muscle-inactive muscle-part" />
        <path d="M 92 244 C 94 251 93 257 90 259 C 84 259 82 255 82 244 Z" class="muscle-inactive muscle-part" />
      </g>

      <!-- ==================== BACK VIEW (Right) ==================== -->
      <g id="svgBackView" transform="translate(150, 4)">
        <!-- Head Back -->
        <ellipse cx="75" cy="27" rx="12.5" ry="16" class="muscle-inactive muscle-part" />
        <path d="M 62 25 C 60 25 59 29 62 33" class="body-contour-line" />
        <path d="M 88 25 C 90 25 91 29 88 33" class="body-contour-line" />

        <!-- Trapezius (Diamond Back) -->
        <path data-muscle="traps" d="M 75 40 C 69 42 59 48 49 52 L 54 58 C 61 63 68 72 75 97 C 82 72 89 63 96 58 L 101 52 C 91 48 81 42 75 40 Z" class="${getPartClass('traps')}" />

        <!-- Rear Deltoids -->
        <path data-muscle="shoulders" d="M 49 52 C 42 59 38 70 39 80 C 45 80 49 75 51 69 C 53 63 52 57 49 52 Z" class="${getPartClass('shoulders')}" />
        <path data-muscle="shoulders" d="M 101 52 C 108 59 112 70 111 80 C 105 80 101 75 99 69 C 97 63 98 57 101 52 Z" class="${getPartClass('shoulders')}" />

        <!-- Triceps (Horseshoe back of arm) -->
        <path data-muscle="triceps" d="M 39 80 C 37 89 37 99 39 108 C 43 108 47 105 48 98 C 50 91 49 83 47 79 Z" class="${getPartClass('triceps')}" />
        <path data-muscle="triceps" d="M 111 80 C 113 89 113 99 111 108 C 107 108 103 105 102 98 C 100 91 101 83 103 79 Z" class="${getPartClass('triceps')}" />

        <!-- Forearms (Back) -->
        <path data-muscle="forearms" d="M 39 108 C 34 119 32 131 34 146 C 38 147 43 145 45 136 C 48 126 49 116 48 108 Z" class="${getPartClass('forearms')}" />
        <path data-muscle="forearms" d="M 111 108 C 116 119 118 131 116 146 C 112 147 107 145 105 136 C 102 126 101 116 102 108 Z" class="${getPartClass('forearms')}" />
        <!-- Hands -->
        <path d="M 34 146 C 33 153 35 159 37 162 C 40 162 42 157 43 150 Z" class="muscle-inactive muscle-part" />
        <path d="M 116 146 C 117 153 115 159 113 162 C 110 162 108 157 107 150 Z" class="muscle-inactive muscle-part" />

        <!-- Lats (Latissimus Dorsi Wings) -->
        <path data-muscle="lats" d="M 53 70 C 56 82 59 97 60 117 C 65 120 71 120 74 117 C 73 107 72 97 70 85 C 63 78 57 73 53 70 Z" class="${getPartClass('lats')}" />
        <path data-muscle="lats" d="M 97 70 C 94 82 91 97 90 117 C 85 120 79 120 76 117 C 77 107 78 97 80 85 C 87 78 93 73 97 70 Z" class="${getPartClass('lats')}" />

        <!-- Lower Back (Erector Spinae) -->
        <path data-muscle="lowerback" d="M 69 117 C 68 125 68 133 69 137 L 74 137 L 74 117 Z" class="${getPartClass('lowerback')}" />
        <path data-muscle="lowerback" d="M 81 117 C 82 125 82 133 81 137 L 76 137 L 76 117 Z" class="${getPartClass('lowerback')}" />

        <!-- Glutes (Gluteus Maximus) -->
        <path data-muscle="glutes" d="M 56 137 C 52 149 54 164 62 170 C 69 172 74 168 75 160 C 76 150 74 142 69 137 Z" class="${getPartClass('glutes')}" />
        <path data-muscle="glutes" d="M 94 137 C 98 149 96 164 88 170 C 81 172 76 168 75 160 C 74 150 76 142 81 137 Z" class="${getPartClass('glutes')}" />

        <!-- Hamstrings (Back of Thighs) -->
        <path data-muscle="hamstrings" d="M 59 170 C 55 180 55 192 58 204 C 62 206 66 206 68 202 C 67 190 67 180 68 170 C 64 169 61 169 59 170 Z" class="${getPartClass('hamstrings')}" />
        <path data-muscle="hamstrings" d="M 69 170 C 68 180 68 190 69 202 C 72 206 75 206 76 202 C 77 190 77 180 75 170 Z" class="${getPartClass('hamstrings')}" />

        <path data-muscle="hamstrings" d="M 91 170 C 95 180 95 192 92 204 C 88 206 84 206 82 202 C 83 190 83 180 82 170 C 86 169 89 169 91 170 Z" class="${getPartClass('hamstrings')}" />
        <path data-muscle="hamstrings" d="M 81 170 C 82 180 82 190 81 202 C 78 206 75 206 74 202 C 73 190 73 180 75 170 Z" class="${getPartClass('hamstrings')}" />

        <!-- Back of Knees -->
        <path d="M 61 204 L 74 204" class="body-contour-line" />
        <path d="M 76 204 L 89 204" class="body-contour-line" />

        <!-- Calves (Gastrocnemius diamond bellies) -->
        <path data-muscle="calves" d="M 57 206 C 54 216 54 227 57 237 C 61 243 64 243 65 237 C 66 226 66 216 67 206 Z" class="${getPartClass('calves')}" />
        <path data-muscle="calves" d="M 68 206 C 68 216 68 226 69 237 C 71 241 74 241 75 235 C 76 225 75 216 73 206 Z" class="${getPartClass('calves')}" />

        <path data-muscle="calves" d="M 93 206 C 96 216 96 227 93 237 C 89 243 86 243 85 237 C 84 226 84 216 83 206 Z" class="${getPartClass('calves')}" />
        <path data-muscle="calves" d="M 82 206 C 82 216 82 226 81 237 C 79 241 76 241 75 235 C 74 225 75 216 77 206 Z" class="${getPartClass('calves')}" />

        <!-- Heels & Achilles Tendon -->
        <path d="M 63 239 L 63 256 C 61 260 65 261 67 260 L 68 239" class="body-contour-line" />
        <path d="M 87 239 L 87 256 C 89 260 85 261 83 260 L 82 239" class="body-contour-line" />
      </g>
    </svg>
  `;
}

function extractWorkoutSummary(activeWorkout, secondsElapsed) {
  let totalTonnage = 0;
  let totalCompletedSets = 0;
  const exercisesSummary = [];
  const workedMuscles = new Set();

  if (activeWorkout && activeWorkout.exercises) {
    activeWorkout.exercises.forEach(ex => {
      let completedSetsForEx = 0;
      let bestSet = null;
      let maxTonnage = 0;

      (ex.sets || []).forEach(set => {
        if (set.completed) {
          totalCompletedSets++;
          completedSetsForEx++;
          const setTonnage = (set.weight || 0) * (set.reps || 0);
          totalTonnage += setTonnage;
          if (!bestSet || setTonnage >= maxTonnage) {
            maxTonnage = setTonnage;
            bestSet = { weight: set.weight, reps: set.reps };
          }
        }
      });

      if (completedSetsForEx > 0) {
        exercisesSummary.push({
          id: ex.id,
          name: ex.name,
          completedSets: completedSetsForEx,
          bestSet: bestSet || { weight: ex.sets[0]?.weight || 60, reps: ex.sets[0]?.reps || 10 },
          muscle: ex.muscle,
          muscle_ru: ex.muscle_ru
        });

        const muscles = getMusclesForExercise(ex);
        muscles.forEach(m => workedMuscles.add(m));
      }
    });

    // Fallback: If user completed 0 checkboxes before hitting finish, populate with reasonable defaults
    if (exercisesSummary.length === 0) {
      activeWorkout.exercises.forEach(ex => {
        const best = { weight: ex.sets[0]?.weight || 60, reps: ex.sets[0]?.reps || 10 };
        const setsCount = ex.sets.length || 3;
        totalCompletedSets += setsCount;
        totalTonnage += setsCount * best.weight * best.reps;
        exercisesSummary.push({
          id: ex.id,
          name: ex.name,
          completedSets: setsCount,
          bestSet: best,
          muscle: ex.muscle,
          muscle_ru: ex.muscle_ru
        });
        const muscles = getMusclesForExercise(ex);
        muscles.forEach(m => workedMuscles.add(m));
      });
    }
  }

  // Duration formatting (e.g. 01:48 or 45:30)
  const secs = Math.max(secondsElapsed || 0, 6480); // default to 01:48 if 0
  const hrs = Math.floor(secs / 3600);
  const mins = Math.floor((secs % 3600) / 60);
  const remSecs = secs % 60;
  const durationFormatted = hrs > 0 
    ? `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
    : `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;

  const prog = PROGRAMS[state.programId] || PROGRAMS.upper_lower_gym_4;
  const progTitle = prog ? (prog.title || prog.fullTitle || "Верх/низ") : "Верх/низ";
  const workoutTitle = `${progTitle}, ${activeWorkout ? activeWorkout.title : "Низ А"}`;

  return {
    title: workoutTitle,
    durationFormatted: durationFormatted,
    tonnage: totalTonnage > 0 ? totalTonnage : 18718,
    completedSetsCount: totalCompletedSets > 0 ? totalCompletedSets : 27,
    exercisesCount: exercisesSummary.length > 0 ? exercisesSummary.length : 8,
    exercises: exercisesSummary.length > 0 ? exercisesSummary : DEFAULT_WORKOUT_SUMMARY.exercises,
    workedMuscles: workedMuscles.size > 0 ? Array.from(workedMuscles) : DEFAULT_WORKOUT_SUMMARY.workedMuscles,
    workoutNumber: (state.stats?.gymWorkoutsDone || 1) + 1,
    userHandle: getUserHandle()
  };
}

function finishActiveWorkoutSession() {
  if (!state.activeWorkout) return;

  // 1. Extract session statistics for the story modal
  const summary = extractWorkoutSummary(state.activeWorkout, state.workoutTimer.secondsElapsed);

  // 2. Update global stats
  state.stats.gymSets += summary.completedSetsCount;
  state.stats.gymWorkoutsDone = (state.stats.gymWorkoutsDone || 0) + 1;
  summary.workoutNumber = state.stats.gymWorkoutsDone;

  // 3. Mark current day as completed
  const currentWeekDay = state.weekDays[3] || state.weekDays[0];
  if (currentWeekDay) {
    currentWeekDay.status = "workout";
    currentWeekDay.sets = summary.completedSetsCount;
  }

  // 4. Stop timers
  if (state.workoutTimer.intervalId) clearInterval(state.workoutTimer.intervalId);
  skipRestTimer();

  // 5. Save last workout stats
  state.lastWorkoutStats = summary;
  state.activeWorkout = null;
  document.getElementById("activeWorkoutModal")?.classList.add("hidden");

  saveState();
  renderAll();
  triggerHaptic("success");

  // 6. Automatically pop up the OnlyFits 3-Slide Workout Statistics modal!
  openWorkoutStatsModal(summary);
}

function openWorkoutStatsModal(customData = null) {
  currentSummaryData = customData || state.lastWorkoutStats || DEFAULT_WORKOUT_SUMMARY;
  currentSummarySlide = 0;

  renderSummarySlide0();
  renderSummarySlide1();
  renderSummarySlide2();

  switchSummarySlide(0);
  setSummaryTheme(currentSummaryTheme || "fill");

  const modal = document.getElementById("workoutSummaryModal");
  if (modal) {
    modal.classList.remove("hidden");
    triggerHaptic("success");
    lucide.createIcons();

    // Telegram BackButton integration
    const tg = window.Telegram?.WebApp;
    if (tg?.BackButton) {
      tg.BackButton.show();
      tg.BackButton.onClick(closeWorkoutStatsModal);
    }
  }
}

function closeWorkoutStatsModal() {
  const modal = document.getElementById("workoutSummaryModal");
  if (modal) {
    modal.classList.add("hidden");
    triggerHaptic("light");

    const tg = window.Telegram?.WebApp;
    if (tg?.BackButton) {
      tg.BackButton.hide();
    }
  }
}

function renderSummarySlide0() {
  if (!currentSummaryData) return;
  const tonnageFormatted = currentSummaryData.tonnage >= 1000 
    ? `${currentSummaryData.tonnage.toLocaleString('ru-RU')} кг`
    : `${currentSummaryData.tonnage} кг`;

  const tonnageEl = document.getElementById("summaryTonnage");
  if (tonnageEl) tonnageEl.textContent = tonnageFormatted;

  const comparison = getWeightComparison(currentSummaryData.tonnage);
  const nameEl = document.getElementById("summaryComparisonName");
  if (nameEl) nameEl.textContent = comparison.name;

  const svgContainer = document.getElementById("summaryComparisonSvgContainer");
  if (svgContainer) {
    svgContainer.innerHTML = renderWeightComparisonSvg(currentSummaryData.tonnage);
  }
}

function renderSummarySlide1() {
  if (!currentSummaryData) return;
  const titleEl = document.getElementById("summaryWorkoutTitle");
  if (titleEl) titleEl.textContent = currentSummaryData.title;

  const durEl = document.getElementById("summaryDuration");
  if (durEl) durEl.textContent = currentSummaryData.durationFormatted;

  const tonEl = document.getElementById("summaryTonnage2");
  if (tonEl) {
    tonEl.textContent = currentSummaryData.tonnage >= 1000 
      ? `${currentSummaryData.tonnage.toLocaleString('ru-RU')} кг`
      : `${currentSummaryData.tonnage} кг`;
  }

  const setsEl = document.getElementById("summarySetsCount");
  if (setsEl) setsEl.textContent = currentSummaryData.completedSetsCount;

  const listContainer = document.getElementById("summaryExercisesList");
  if (listContainer) {
    listContainer.innerHTML = (currentSummaryData.exercises || []).map(ex => {
      const best = ex.bestSet || { weight: 60, reps: 10 };
      return `
        <div class="flex items-center justify-between py-1 border-b border-card">
          <span class="font-bold truncate max-w-[200px]">${ex.completedSets || 3} × ${ex.name}</span>
          <span class="font-extrabold font-mono shrink-0">${best.weight} кг × ${best.reps}</span>
        </div>
      `;
    }).join("");
  }
}

function renderSummarySlide2() {
  if (!currentSummaryData) return;
  const handleEl = document.getElementById("summaryUserHandle");
  if (handleEl) handleEl.textContent = currentSummaryData.userHandle || getUserHandle();

  const numEl = document.getElementById("summaryWorkoutNumber");
  if (numEl) numEl.textContent = currentSummaryData.workoutNumber || state.stats?.gymWorkoutsDone || 2;

  const durEl = document.getElementById("summaryDuration3");
  if (durEl) durEl.textContent = currentSummaryData.durationFormatted;

  const exCountEl = document.getElementById("summaryExercisesCount3");
  if (exCountEl) exCountEl.textContent = currentSummaryData.exercisesCount || currentSummaryData.exercises?.length || 8;

  const setsEl = document.getElementById("summarySetsCount3");
  if (setsEl) setsEl.textContent = currentSummaryData.completedSetsCount;

  // Render Anatomical Dual Body SVG with highlighted muscle groups!
  const anatomyContainer = document.getElementById("summaryAnatomyContainer");
  if (anatomyContainer) {
    anatomyContainer.innerHTML = renderAnatomicalBodySvg(currentSummaryData.workedMuscles);
  }
}

function switchSummarySlide(slideIdx) {
  currentSummarySlide = slideIdx;
  [0, 1, 2].forEach(i => {
    const slide = document.getElementById(`summarySlide${i}`);
    const dotBtn = document.getElementById(`dotSummary${i}`);
    const dotIndicator = dotBtn?.querySelector(".dot-indicator") || dotBtn;
    if (slide) {
      if (i === slideIdx) {
        slide.classList.remove("hidden");
        slide.classList.add("flex");
      } else {
        slide.classList.add("hidden");
        slide.classList.remove("flex");
      }
    }
    if (dotIndicator) {
      if (i === slideIdx) {
        dotIndicator.className = "dot-indicator h-2 rounded-full transition-all duration-300 w-5 bg-white";
      } else {
        dotIndicator.className = "dot-indicator h-2 rounded-full transition-all duration-300 w-2 bg-slate-500 hover:bg-slate-400";
      }
    }
  });
  triggerHaptic("light");
}

function setSummaryTheme(theme) {
  currentSummaryTheme = theme;
  const card = document.getElementById("workoutSummaryCard");
  const btnFill = document.getElementById("btnStatsThemeFill");
  const btnTrans = document.getElementById("btnStatsThemeTrans");

  if (theme === "fill") {
    if (card) {
      card.classList.remove("card-theme-trans");
      card.classList.add("card-theme-fill");
    }
    if (btnFill) {
      btnFill.className = "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 bg-slate-700/90 text-white shadow";
    }
    if (btnTrans) {
      btnTrans.className = "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 text-slate-400 hover:text-white";
    }
  } else {
    if (card) {
      card.classList.remove("card-theme-fill");
      card.classList.add("card-theme-trans");
    }
    if (btnFill) {
      btnFill.className = "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 text-slate-400 hover:text-white";
    }
    if (btnTrans) {
      btnTrans.className = "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 bg-slate-700/90 text-white shadow";
    }
  }

  // Re-render SVGs to sync colors
  renderSummarySlide0();
  renderSummarySlide2();
  triggerHaptic("light");
}

async function downloadWorkoutStory() {
  const card = document.getElementById("workoutSummaryCard");
  if (!card) return;
  triggerHaptic("medium");
  showToast("Генерируем карточку для сохранения...");

  try {
    if (window.html2canvas) {
      const canvas = await html2canvas(card, {
        scale: 3,
        useCORS: true,
        backgroundColor: currentSummaryTheme === "fill" ? "#ffffff" : "#101620"
      });
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = `OnlyFits_Workout_Story_${Date.now()}.png`;
      a.href = dataUrl;
      a.click();
      showToast("Карточка успешно сохранена в галерею!");
    } else {
      showToast("Изображение готово!");
    }
  } catch (err) {
    console.error("Story export error:", err);
    showToast("Не удалось экспортировать изображение");
  }
}

async function shareWorkoutStory() {
  triggerHaptic("light");
  const card = document.getElementById("workoutSummaryCard");
  const tonnage = currentSummaryData?.tonnage || 18718;
  const shareText = `Только что завершил тренировку в OnlyFits! Общий тоннаж: ${tonnage.toLocaleString('ru-RU')} кг ⚡️💪`;

  if (navigator.share) {
    try {
      if (window.html2canvas && card) {
        const canvas = await html2canvas(card, {
          scale: 2,
          useCORS: true,
          backgroundColor: currentSummaryTheme === "fill" ? "#ffffff" : "#101620"
        });
        canvas.toBlob(async (blob) => {
          if (blob && navigator.canShare && navigator.canShare({ files: [new File([blob], "workout.png", { type: "image/png" })] })) {
            const file = new File([blob], "workout.png", { type: "image/png" });
            await navigator.share({
              title: "OnlyFits — Моя тренировка",
              text: shareText,
              files: [file]
            });
            return;
          }
          await navigator.share({
            title: "OnlyFits — Моя тренировка",
            text: shareText
          });
        });
        return;
      }
      await navigator.share({
        title: "OnlyFits — Моя тренировка",
        text: shareText
      });
      return;
    } catch (e) {}
  }

  // Fallback copy to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText);
    showToast("Результаты скопированы в буфер обмена!");
  }
}

function shareToInstagram() {
  downloadWorkoutStory();
  setTimeout(() => {
    showToast("Карточка сохранена! Откройте Instagram Stories для публикации 📸");
    try {
      window.open("instagram://story-camera", "_blank");
    } catch (e) {}
  }, 1200);
}

function shareToThreads() {
  const tonnage = currentSummaryData?.tonnage || 18718;
  const text = encodeURIComponent(`Только что завершил тренировку в OnlyFits! Тоннаж: ${tonnage.toLocaleString('ru-RU')} кг ⚡️💪`);
  window.open(`https://threads.net/intent/post?text=${text}`, "_blank");
}

function shareToTwitter() {
  const tonnage = currentSummaryData?.tonnage || 18718;
  const text = encodeURIComponent(`Только что завершил тренировку в @OnlyFits! Тоннаж: ${tonnage.toLocaleString('ru-RU')} кг ⚡️💪`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
}

function initWorkoutStatsEventListeners() {
  // Close Button
  document.getElementById("closeWorkoutStatsBtn")?.addEventListener("click", () => {
    closeWorkoutStatsModal();
  });

  // Theme Toggles
  document.getElementById("btnStatsThemeFill")?.addEventListener("click", () => {
    setSummaryTheme("fill");
  });
  document.getElementById("btnStatsThemeTrans")?.addEventListener("click", () => {
    setSummaryTheme("trans");
  });

  // Pagination Dots
  document.getElementById("dotSummary0")?.addEventListener("click", () => switchSummarySlide(0));
  document.getElementById("dotSummary1")?.addEventListener("click", () => switchSummarySlide(1));
  document.getElementById("dotSummary2")?.addEventListener("click", () => switchSummarySlide(2));

  // Social & Export Buttons
  document.getElementById("btnShareInstagram")?.addEventListener("click", shareToInstagram);
  document.getElementById("btnShareThreads")?.addEventListener("click", shareToThreads);
  document.getElementById("btnShareTwitter")?.addEventListener("click", shareToTwitter);
  document.getElementById("btnDownloadSummary")?.addEventListener("click", downloadWorkoutStory);
  document.getElementById("btnNativeShare")?.addEventListener("click", shareWorkoutStory);

  // Trigger buttons from Workouts Tab and Stats Tab
  document.getElementById("openWorkoutStatsPreviewBtn")?.addEventListener("click", () => {
    openWorkoutStatsModal();
  });
  document.getElementById("statsOpenSummaryBtn")?.addEventListener("click", () => {
    openWorkoutStatsModal();
  });

  // Touch Swipe on Story Card
  const card = document.getElementById("workoutSummaryCard");
  if (card) {
    let touchStartX = 0;
    let touchEndX = 0;
    card.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    card.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (diff < -45 && currentSummarySlide < 2) {
        switchSummarySlide(currentSummarySlide + 1);
      } else if (diff > 45 && currentSummarySlide > 0) {
        switchSummarySlide(currentSummarySlide - 1);
      }
    }, { passive: true });
  }

  // Keyboard navigation (Escape to close, Arrows to switch slides)
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("workoutSummaryModal");
    if (!modal || modal.classList.contains("hidden")) return;
    if (e.key === "Escape") {
      closeWorkoutStatsModal();
    } else if (e.key === "ArrowLeft" && currentSummarySlide > 0) {
      switchSummarySlide(currentSummarySlide - 1);
    } else if (e.key === "ArrowRight" && currentSummarySlide < 2) {
      switchSummarySlide(currentSummarySlide + 1);
    }
  });
}

// ==========================================
// 12. Exercise Technique Modal (2-Phase Player)
// ==========================================
function openExerciseVideoModal(exerciseId) {
  const ex = EXERCISES_DB.find(e => e.id === exerciseId);
  if (!ex) return;

  document.getElementById("videoExerciseTitle").textContent = ex.name;
  document.getElementById("videoExerciseMuscle").textContent = ex.muscle_ru;
  document.getElementById("videoEquipmentTag").textContent = ex.equipment;

  const ghId = ex.github_id || "Barbell_Bench_Press_-_Medium_Grip";
  const img0 = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ghId}/0.jpg`;
  const img1 = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ghId}/1.jpg`;

  const p0 = new Image(); p0.src = img0;
  const p1 = new Image(); p1.src = img1;

  let currentPhase = 0;
  const imgElement = document.getElementById("exercisePhaseImage");
  const btn0 = document.getElementById("phaseBtn0");
  const btn1 = document.getElementById("phaseBtn1");

  function setPhase(phase) {
    currentPhase = phase;
    imgElement.style.opacity = "0.75";
    setTimeout(() => {
      imgElement.src = phase === 0 ? img0 : img1;
      imgElement.style.opacity = "1";
    }, 80);

    if (phase === 0) {
      btn0.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-of-blue text-of-bg shadow-sm transition";
      btn1.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-of-card text-slate-400 hover:text-white border border-of-border transition";
    } else {
      btn1.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-of-blue text-of-bg shadow-sm transition";
      btn0.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-of-card text-slate-400 hover:text-white border border-of-border transition";
    }
  }

  setPhase(0);

  if (state.exercisePhaseTimer) clearInterval(state.exercisePhaseTimer);
  state.exercisePhaseTimer = setInterval(() => {
    setPhase(currentPhase === 0 ? 1 : 0);
  }, 1250);

  btn0.onclick = () => {
    if (state.exercisePhaseTimer) clearInterval(state.exercisePhaseTimer);
    setPhase(0);
    triggerHaptic("light");
  };

  btn1.onclick = () => {
    if (state.exercisePhaseTimer) clearInterval(state.exercisePhaseTimer);
    setPhase(1);
    triggerHaptic("light");
  };

  const ytQuery = encodeURIComponent(`техника выполнения ${ex.name}`);
  document.getElementById("youtubeVideoLink").href = `https://www.youtube.com/results?search_query=${ytQuery}`;

  const stepsList = document.getElementById("exerciseStepsList");
  stepsList.innerHTML = (ex.steps || []).map(step => `<li>${step}</li>`).join("");

  const mistakesList = document.getElementById("exerciseMistakesList");
  mistakesList.innerHTML = (ex.mistakes || []).map(mistake => `<li>${mistake}</li>`).join("");

  document.getElementById("targetMusclesLabel").textContent = ex.primary || ex.muscle_ru;
  document.getElementById("synergistMusclesLabel").textContent = ex.secondary || "Мышцы-стабилизаторы";
  document.getElementById("breathingLabel").textContent = ex.breathing || "Вдох на опускании, выдох на усилии";

  document.getElementById("exerciseVideoModal").classList.remove("hidden");
  triggerHaptic("light");
  lucide.createIcons();
}

function closeExerciseVideoModal() {
  if (state.exercisePhaseTimer) {
    clearInterval(state.exercisePhaseTimer);
    state.exercisePhaseTimer = null;
  }
  document.getElementById("exerciseVideoModal").classList.add("hidden");
}

// ==========================================
// 13. Quick Log Modal (+)
// ==========================================
function openQuickLogModal() {
  document.getElementById("quickInputWeight").value = state.stats.weight;
  document.getElementById("quickInputSteps").value = state.stats.stepsToday;
  document.getElementById("quickInputSleepHours").value = state.stats.sleepHours;
  document.getElementById("quickInputSleepMinutes").value = state.stats.sleepMinutes;
  document.getElementById("quickLogModal").classList.remove("hidden");
}

function saveQuickLog() {
  const w = parseFloat(document.getElementById("quickInputWeight").value);
  const steps = parseInt(document.getElementById("quickInputSteps").value, 10);
  const sh = parseInt(document.getElementById("quickInputSleepHours").value, 10);
  const sm = parseInt(document.getElementById("quickInputSleepMinutes").value, 10);

  if (!isNaN(w) && w > 0) {
    state.stats.weight = w;
    state.user.weight = w;
  }
  if (!isNaN(steps) && steps >= 0) state.stats.stepsToday = steps;
  if (!isNaN(sh) && sh >= 0) state.stats.sleepHours = sh;
  if (!isNaN(sm) && sm >= 0) state.stats.sleepMinutes = sm;

  document.getElementById("quickLogModal").classList.add("hidden");
  saveState();
  renderAll();
  triggerHaptic("success");
  showToast("Показатели обновлены!");
}

// ==========================================
// 14. Exercise Library / Catalog Modal
// ==========================================
function openCatalogModal() {
  document.getElementById("catalogModal").classList.remove("hidden");
  renderCatalogList("all");
  triggerHaptic("light");
}

function renderCatalogList(filterCategory = "all") {
  const container = document.getElementById("catalogExercisesList");
  if (!container) return;

  const filtered = EXERCISES_DB.filter(ex => {
    if (filterCategory === "all") return true;
    return ex.muscle === filterCategory;
  });

  container.innerHTML = filtered.map(ex => {
    return `
      <div class="bg-of-subcard p-3 rounded-2xl border border-of-border flex items-center justify-between hover:border-of-blue/40 transition">
        <div>
          <div class="text-[10px] text-of-blue font-bold uppercase">${ex.muscle_ru}</div>
          <h4 class="font-bold text-white text-xs mt-0.5">${ex.name}</h4>
          <div class="text-[10px] text-slate-400 mt-0.5">Оборудование: ${ex.equipment}</div>
        </div>
        <button onclick="openExerciseVideoModal('${ex.id}')" class="px-3 py-1.5 rounded-xl bg-of-card hover:bg-of-pill text-of-blue text-xs font-bold border border-of-border flex items-center gap-1">
          <i data-lucide="play" class="w-3 h-3 fill-current"></i>
          <span>Техника</span>
        </button>
      </div>
    `;
  }).join("");
  lucide.createIcons();
}

// ==========================================
// 15. Settings / Program Modal
// ==========================================
function openSettingsModal() {
  const splitSelect = document.getElementById("userSplitSelect");
  if (splitSelect) {
    // Populate custom programs group if any exist
    let customGroup = document.getElementById("customProgramsOptgroup");
    const customProgKeys = Object.keys(PROGRAMS).filter(k => PROGRAMS[k].isCustom || k.startsWith("custom_"));
    if (customProgKeys.length > 0) {
      if (!customGroup) {
        customGroup = document.createElement("optgroup");
        customGroup.id = "customProgramsOptgroup";
        customGroup.label = "⭐️ Ваши программы";
        splitSelect.insertBefore(customGroup, splitSelect.firstChild);
      }
      customGroup.innerHTML = customProgKeys.map(k => {
        const p = PROGRAMS[k];
        return `<option value="${p.id}">${p.fullTitle || p.title}</option>`;
      }).join("");
    } else if (customGroup) {
      customGroup.remove();
    }
    splitSelect.value = state.programId;
  }

  const levelSelect = document.getElementById("userLevelSelect");
  if (levelSelect && state.level) levelSelect.value = state.level;
  document.getElementById("settingsModal").classList.remove("hidden");
  triggerHaptic("light");
}

function saveSettings() {
  const chosenProgram = document.getElementById("userSplitSelect")?.value;
  const chosenLevel = document.getElementById("userLevelSelect")?.value;
  if (PROGRAMS[chosenProgram]) {
    state.programId = chosenProgram;
    state.user.split = chosenProgram;
    state.selectedDayIdx = 0;
  }
  if (chosenLevel) {
    state.level = chosenLevel;
  }
  document.getElementById("settingsModal").classList.add("hidden");
  saveState();
  renderAll();
  triggerHaptic("success");
  showToast("Программа тренировок изменена!");
}

// ==========================================
// 16. Custom Program Engine (OCR & Text Import)
// ==========================================

let customDraft = {
  title: "Моя программа",
  days: []
};

// 1. Storage Helpers for Custom Exercises & Programs
function loadCustomExercises() {
  try {
    const raw = localStorage.getItem("onlyfits_custom_exercises");
    if (raw) {
      const list = JSON.parse(raw);
      if (Array.isArray(list)) {
        list.forEach(ex => {
          if (!EXERCISES_DB.some(e => e.id === ex.id)) {
            EXERCISES_DB.push(ex);
          }
        });
      }
    }
  } catch (e) {
    console.error("Error loading custom exercises:", e);
  }
}

function saveCustomExercisesStorage() {
  try {
    const customs = EXERCISES_DB.filter(e => e.id && e.id.startsWith("ex_custom_"));
    localStorage.setItem("onlyfits_custom_exercises", JSON.stringify(customs));
  } catch (e) {
    console.error("Error saving custom exercises:", e);
  }
}

function loadCustomPrograms() {
  try {
    const raw = localStorage.getItem("onlyfits_custom_programs");
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.keys(parsed).forEach(id => {
        PROGRAMS[id] = parsed[id];
      });
      return parsed;
    }
  } catch (e) {
    console.error("Error loading custom programs:", e);
  }
  return {};
}

function saveCustomProgramToStorage(program) {
  try {
    const raw = localStorage.getItem("onlyfits_custom_programs");
    const existing = raw ? JSON.parse(raw) : {};
    existing[program.id] = program;
    localStorage.setItem("onlyfits_custom_programs", JSON.stringify(existing));
    PROGRAMS[program.id] = program;
  } catch (e) {
    console.error("Error saving custom program:", e);
  }
}

// 2. Modal Controls & Mode Switching
function openCustomProgramModal() {
  const modal = document.getElementById("customProgramModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  setCustomImportMode("screenshot");
  triggerHaptic("light");
  lucide.createIcons();
}

function closeCustomProgramModal() {
  const modal = document.getElementById("customProgramModal");
  if (modal) modal.classList.add("hidden");
}

function setCustomImportMode(mode) {
  const screenshotBtn = document.getElementById("importModeScreenshotBtn");
  const textBtn = document.getElementById("importModeTextBtn");
  const screenshotSection = document.getElementById("screenshotUploadSection");
  const textSection = document.getElementById("textInputSection");

  if (mode === "screenshot") {
    if (screenshotBtn) {
      screenshotBtn.className = "flex-1 py-2 rounded-xl bg-of-blue text-of-bg font-extrabold flex items-center justify-center gap-1.5 transition";
    }
    if (textBtn) {
      textBtn.className = "flex-1 py-2 rounded-xl text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    }
    if (screenshotSection) screenshotSection.classList.remove("hidden");
    if (textSection) textSection.classList.add("hidden");
  } else {
    if (textBtn) {
      textBtn.className = "flex-1 py-2 rounded-xl bg-of-blue text-of-bg font-extrabold flex items-center justify-center gap-1.5 transition";
    }
    if (screenshotBtn) {
      screenshotBtn.className = "flex-1 py-2 rounded-xl text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    }
    if (textSection) textSection.classList.remove("hidden");
    if (screenshotSection) screenshotSection.classList.add("hidden");
  }
  lucide.createIcons();
}

// 3. Multi-Screenshot Upload & OCR runner
let customScreenshotFiles = [];

function handleScreenshotsUpload(fileList) {
  if (!fileList || fileList.length === 0) return;

  const validFiles = Array.from(fileList).filter(f => f.type && f.type.startsWith("image/"));
  if (validFiles.length === 0) {
    showToast("Пожалуйста, загрузите изображение (PNG, JPG, HEIC)");
    return;
  }

  // Добавляем новые скриншоты к существующим (до 8 скриншотов)
  validFiles.forEach(file => {
    if (customScreenshotFiles.length < 8) {
      customScreenshotFiles.push(file);
    }
  });

  renderScreenshotThumbnails();
  processAllScreenshots();
}

function renderScreenshotThumbnails() {
  const previewWrapper = document.getElementById("screenshotPreviewWrapper");
  const dropZone = document.getElementById("dropScreenshotZone");
  const countBadge = document.getElementById("screenshotCountBadge");
  const grid = document.getElementById("screenshotThumbnailsGrid");

  if (!previewWrapper || !grid) return;

  if (customScreenshotFiles.length === 0) {
    previewWrapper.classList.add("hidden");
    if (dropZone) dropZone.classList.remove("hidden");
    return;
  }

  previewWrapper.classList.remove("hidden");
  if (dropZone) dropZone.classList.add("hidden");
  if (countBadge) countBadge.textContent = customScreenshotFiles.length;

  grid.innerHTML = customScreenshotFiles.map((file, idx) => {
    const objUrl = URL.createObjectURL(file);
    return `
      <div class="relative group h-28 rounded-2xl overflow-hidden bg-of-subcard border border-of-border shadow-sm">
        <img src="${objUrl}" alt="Скриншот ${idx + 1}" class="w-full h-full object-cover">
        
        <div class="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-lg bg-of-bg/85 backdrop-blur-sm text-[10px] font-black text-white border border-white/10">
          #0${idx + 1}
        </div>

        <button onclick="removeScreenshotFile(${idx})" class="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-of-bg/85 backdrop-blur-sm text-slate-300 hover:text-white hover:bg-red-500/80 flex items-center justify-center transition" title="Удалить скриншот">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>

        <div class="absolute bottom-0 inset-x-0 p-1 bg-gradient-to-t from-black/80 to-transparent text-[9px] text-slate-300 truncate text-center">
          ${file.name}
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function removeScreenshotFile(idx) {
  if (customScreenshotFiles[idx]) {
    customScreenshotFiles.splice(idx, 1);
    renderScreenshotThumbnails();
    if (customScreenshotFiles.length > 0) {
      processAllScreenshots();
    } else {
      resetScreenshotUpload();
    }
    triggerHaptic("light");
  }
}

// ==========================================
// 4. Image Preprocessing for Accurate OCR (Canvas Inversion & Contrast)
// ==========================================
function preprocessImageForOCR(source) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          resolve(typeof source === "string" ? source : "");
          return;
        }

        const srcW = img.naturalWidth || img.width;
        const srcH = img.naturalHeight || img.height;

        if (srcW === 0 || srcH === 0) {
          resolve(typeof source === "string" ? source : "");
          return;
        }

        // Detect mobile screenshot aspect ratio (tall portrait e.g. 19.5:9)
        const isTall = (srcH / srcW) >= 1.5;
        let cropTop = 0;
        let cropBottom = 0;
        if (isTall) {
          // Top ~7.5% is status bar (clock, battery, notch, dynamic island)
          // Bottom ~4.5% is home indicator bar
          cropTop = Math.round(srcH * 0.075);
          cropBottom = Math.round(srcH * 0.045);
        }

        const workW = srcW;
        const workH = Math.max(100, srcH - cropTop - cropBottom);

        // Optimal width for Tesseract OCR (between 1000px and 1400px)
        const targetW = Math.min(1400, Math.max(900, workW));
        const scale = targetW / workW;
        const targetH = Math.round(workH * scale);

        canvas.width = targetW;
        canvas.height = targetH;

        // Draw cropped and scaled image onto canvas
        ctx.drawImage(img, 0, cropTop, workW, workH, 0, 0, targetW, targetH);

        const imgData = ctx.getImageData(0, 0, targetW, targetH);
        const data = imgData.data;
        const len = data.length;

        // 1. Calculate average luminance to detect Dark Mode
        let totalLum = 0;
        let samples = 0;
        for (let i = 0; i < len; i += 16) {
          totalLum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          samples++;
        }
        const avgLum = samples > 0 ? (totalLum / samples) : 128;
        const isDarkMode = avgLum < 125;

        // 2. Grayscale, Invert if Dark Mode, and High-Contrast Stretch
        for (let i = 0; i < len; i += 4) {
          let r = data[i];
          let g = data[i + 1];
          let b = data[i + 2];

          let lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if (isDarkMode) {
            lum = 255 - lum; // Invert to crisp black on white
          }

          // Contrast stretch
          let enhanced;
          if (lum > 185) {
            enhanced = 255;
          } else if (lum < 95) {
            enhanced = Math.max(0, Math.round(lum * 0.4));
          } else {
            enhanced = Math.round(((lum - 95) / 90) * 255);
          }

          data[i] = enhanced;
          data[i + 1] = enhanced;
          data[i + 2] = enhanced;
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } catch (err) {
        console.warn("[preprocessImageForOCR error, falling back]:", err);
        resolve(typeof source === "string" ? source : "");
      }
    };

    img.onerror = () => {
      resolve(typeof source === "string" ? source : "");
    };

    if (typeof source === "string") {
      img.src = source;
    } else if (source instanceof Blob || source instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => { img.src = e.target.result; };
      reader.readAsDataURL(source);
    } else {
      resolve("");
    }
  });
}

async function processAllScreenshots() {
  if (customScreenshotFiles.length === 0) return;

  const ocrStatus = document.getElementById("ocrProgressStatus");
  const ocrTitle = document.getElementById("ocrProgressMainTitle");
  const ocrDetails = document.getElementById("ocrProgressDetails");
  const ocrPercent = document.getElementById("ocrProgressPercent");
  const ocrBar = document.getElementById("ocrProgressBarInner");

  if (ocrStatus) ocrStatus.classList.remove("hidden");
  if (ocrTitle) ocrTitle.textContent = `ИИ обрабатывает ${customScreenshotFiles.length} скринш...`;
  if (ocrDetails) ocrDetails.textContent = "Подготовка файлов...";
  if (ocrBar) ocrBar.style.width = "10%";
  if (ocrPercent) ocrPercent.textContent = "10%";

  // Читаем все файлы в base64 dataURL
  const rawDataUrls = await Promise.all(customScreenshotFiles.map(file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  }));

  // Step A: Attempt server-side Gemini Vision OCR with multiple images
  try {
    if (ocrDetails) ocrDetails.textContent = "Сквозной анализ всех скриншотов через ИИ...";
    const resp = await fetch("/api/parse-workout-photo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ images_b64: rawDataUrls })
    });
    const data = await resp.json();
    if (data && data.status === "ok" && data.program && Array.isArray(data.program.days) && data.program.days.length > 0) {
      if (ocrBar) ocrBar.style.width = "100%";
      if (ocrPercent) ocrPercent.textContent = "100%";
      setTimeout(() => {
        applyStructuredProgram(data.program);
        if (ocrStatus) ocrStatus.classList.add("hidden");
        showToast(`Распознано: ${data.program.days.length} дн. из ${customScreenshotFiles.length} скриншотов! ⚡️`);
      }, 300);
      return;
    }
  } catch (err) {
    console.log("[Backend parse error, falling back to local Tesseract]:", err);
  }

  // Step B: Sequential local Tesseract.js OCR with Canvas Preprocessing
  if (window.Tesseract) {
    try {
      let combinedText = "";
      const total = rawDataUrls.length;

      const worker = await Tesseract.createWorker("rus+eng", 1, {
        logger: m => {}
      });

      for (let i = 0; i < total; i++) {
        const currentNum = i + 1;
        if (ocrDetails) ocrDetails.textContent = `Оптимизация скриншота ${currentNum} из ${total} (Canvas, инверсия)...`;
        const pctBase = Math.round((i / total) * 100);
        if (ocrPercent) ocrPercent.textContent = `${pctBase}%`;
        if (ocrBar) ocrBar.style.width = `${Math.max(10, pctBase)}%`;

        // Preprocess image on canvas: crop status bar, invert dark mode, sharpen contrast
        const preprocessedDataUrl = await preprocessImageForOCR(rawDataUrls[i]);

        if (ocrDetails) ocrDetails.textContent = `Сканирование текста скриншота ${currentNum} из ${total}...`;
        const ret = await worker.recognize(preprocessedDataUrl || rawDataUrls[i]);
        const text = ret.data.text || "";
        combinedText += `\n\n=== Скриншот ${currentNum} ===\n` + text;
      }

      await worker.terminate();

      if (ocrBar) ocrBar.style.width = "100%";
      if (ocrPercent) ocrPercent.textContent = "100%";

      const textarea = document.getElementById("customProgramTextarea");
      if (textarea) textarea.value = combinedText.trim();

      const parsed = parseWorkoutTextToProgram(combinedText);
      applyStructuredProgram(parsed);
      showToast(`Объединено ${parsed.days.length} дн. из ${total} скриншотов! ⚡️`);
    } catch (ocrErr) {
      console.error("[Tesseract Multi-OCR Error]:", ocrErr);
      showToast("Не удалось оптически прочесть текст скриншотов. Попробуйте вкладку «Текстом»!");
    } finally {
      if (ocrStatus) ocrStatus.classList.add("hidden");
    }
  } else {
    if (ocrStatus) ocrStatus.classList.add("hidden");
    showToast("Модуль OCR недоступен. Переключитесь на вкладку «Текстом».");
  }
}

function resetScreenshotUpload() {
  customScreenshotFiles = [];
  const fileInput = document.getElementById("workoutScreenshotFileInput");
  if (fileInput) fileInput.value = "";
  const previewWrapper = document.getElementById("screenshotPreviewWrapper");
  const dropZone = document.getElementById("dropScreenshotZone");
  const ocrStatus = document.getElementById("ocrProgressStatus");

  if (previewWrapper) previewWrapper.classList.add("hidden");
  if (dropZone) dropZone.classList.remove("hidden");
  if (ocrStatus) ocrStatus.classList.add("hidden");
}

// 4. Workout Templates (Upper/Lower 4 days & Push/Pull/Legs 3 days)
const WORKOUT_TEMPLATES = {
  template_4: `День 1: Верх тела (Грудь, Спина, Руки)
Жим штанги лежа 4х8-10
Тяга штанги в наклоне 4х10
Жим гантелей наклонный 3х12
Тяга верхнего блока 3х12
Подъем штанги на бицепс 3х12
Французский жим со штангой 3х12

День 2: Низ тела (Квадрицепс, Бицепс бедра, Пресс)
Приседания со штангой 4х8-10
Жим ногами в тренажере 3х12
Румынская становая тяга 3х10-12
Сгибания ног лежа 3х15
Подъем на носки стоя 4х15
Скручивания на пресс 3х20

День 3: Верх тела (Плечи и Спина)
Армейский жим штанги стоя 4х10
Подтягивания широким хватом 4х8
Сведение рук в кроссовере 3х12
Махи гантелями в стороны 4х15
Тяга на заднюю дельту Face Pulls 3х15
Молотки с гантелями на бицепс 3х12

День 4: Низ тела и Кор
Становая тяга 4х8
Выпады с гантелями 3х12
Разгибания ног в тренажере 3х15
Сгибания ног сидя 3х15
Планка на локтях 3х60`,

  template_3: `День 1: Толкай (Грудь, Плечи, Трицепс)
Жим штанги лежа 4х8-10
Жим гантелей на наклонной скамье 3х10-12
Отжимания на брусьях 3х10
Армейский жим гантелей сидя 3х10
Махи гантелями в стороны 4х15
Разгибание на блоке с канатом 3х12

День 2: Тяни (Спина, Задняя дельта, Бицепс)
Подтягивания широким хватом 4х8
Тяга штанги в наклоне к поясу 4х10
Тяга горизонтального блока 3х12
Тяга на заднюю дельту Face Pulls 3х15
Подъем штанги на бицепс 3х10
Молотки с гантелями 3х12

День 3: Ноги и Пресс
Приседания со штангой 4х8-10
Жим платформы ногами 3х12
Румынская тяга 3х10
Сгибания ног в тренажере 3х15
Подъем на носки 4х15
Подъем ног в висе на перекладине 3х15`
};

function loadWorkoutTemplate(days) {
  const textarea = document.getElementById("customProgramTextarea");
  const tpl = days === 3 ? WORKOUT_TEMPLATES.template_3 : WORKOUT_TEMPLATES.template_4;
  if (textarea) textarea.value = tpl;
  setCustomImportMode("text");

  const parsed = parseWorkoutTextToProgram(tpl);
  parsed.title = days === 3 ? "Тяни / Толкай / Ноги" : "Верх / Низ (4 дня)";
  applyStructuredProgram(parsed);
  triggerHaptic("light");
  showToast(`Загружен шаблон на ${days} дня!`);
}

function triggerParseWorkoutAction() {
  if (customScreenshotFiles.length > 0) {
    processAllScreenshots();
    return;
  }
  const textarea = document.getElementById("customProgramTextarea");
  const text = (textarea ? textarea.value : "").trim();
  if (!text) {
    showToast("Прикрепите скриншоты или выберите готовый пример!");
    return;
  }

  const parsed = parseWorkoutTextToProgram(text);
  applyStructuredProgram(parsed);
  triggerHaptic("light");
  showToast(`Собрано ${parsed.days.length} тренировочных дня!`);
}

// ==========================================
// 5. Intelligent Workout Parser, OCR De-noiser & Muscle Normalizer
// ==========================================
const GYM_KEYWORDS_LIST = [
  "жим", "тяга", "присед", "подтягив", "отжиман", "блок", "гантел", "штанг",
  "бицепс", "трицепс", "махи", "выпад", "становая", "румынск", "разгибан",
  "сгибан", "брусь", "кроссовер", "пресс", "планк", "носк", "икр", "дельта",
  "грудь", "спина", "плечи", "руки", "ноги", "кор", "bench", "press", "row",
  "squat", "curl", "pull", "push", "deadlift", "lunge", "raise", "dips"
];

function hasGymKeyword(str) {
  if (!str) return false;
  const lower = str.toLowerCase();
  return GYM_KEYWORDS_LIST.some(k => lower.includes(k));
}

const GYM_SYNONYMS = [
  // Грудь (Chest)
  {
    matches: ["жим штанги", "жим лежа", "жим горизонт", "горизонтальн жим", "bench press", "жим на скамье", "жим штанги лежа"],
    id: "ex_chest_1"
  },
  {
    matches: ["жим гантел", "наклонн", "жим на наклон", "гантели наклон", "incline dumb", "жим гантелей наклон", "жим ганте"],
    id: "ex_chest_2"
  },
  {
    matches: ["брусь", "отжиман на брусь", "dips"],
    id: "ex_chest_3"
  },
  {
    matches: ["кроссовер", "сведен", "бабочк", "пек-дек", "сведение рук", "crossover"],
    id: "ex_chest_4"
  },
  // Спина (Back)
  {
    matches: ["подтягиван", "турник", "гравитрон", "pullup", "chinup"],
    id: "ex_back_1"
  },
  {
    matches: ["тяга в наклон", "тяга штанги в наклон", "тяга к пояс", "штанга в наклон", "bent over"],
    id: "ex_back_2"
  },
  {
    matches: ["тяга верхнег", "тяга блока к груд", "верхний блок", "лат пулдаун", "lat pull", "тага верхнег"],
    id: "ex_back_3"
  },
  {
    matches: ["горизонтальн тяга", "тяга горизонт", "тяга нижнего блока", "cable row", "тяга к животу"],
    id: "ex_back_4"
  },
  // Ноги (Legs)
  {
    matches: ["присед", "приседания", "squat", "приседы со штанг", "фронтальн присед"],
    id: "ex_legs_1"
  },
  {
    matches: ["жим ногами", "платформ", "leg press"],
    id: "ex_legs_2"
  },
  {
    matches: ["румынск", "мертвая тяга", "становая на прямых", "rdl", "romanian deadlift", "становая тяга", "становая"],
    id: "ex_legs_3"
  },
  {
    matches: ["выпад", "болгарск", "шагающие выпад", "lunge"],
    id: "ex_legs_4"
  },
  {
    matches: ["сгибан ног", "бицепс бедр", "лег керл", "leg curl", "сгибания ног"],
    id: "ex_legs_5"
  },
  {
    matches: ["разгибан ног", "квадрицепс в тренажере", "leg extension", "разгибания ног"],
    id: "ex_legs_6"
  },
  {
    matches: ["носк", "икр", "голен", "calf", "подъем на носки"],
    id: "ex_legs_7"
  },
  // Плечи (Shoulders)
  {
    matches: ["жим гантелей сидя", "армейск", "жим над голов", "shoulder press", "жим стоя", "жим сидя"],
    id: "ex_shoulders_1"
  },
  {
    matches: ["мах", "разведен гантел", "средняя дельт", "lateral raise", "махи в стороны"],
    id: "ex_shoulders_2"
  },
  {
    matches: ["face pull", "канат к лицу", "задн дельт", "тяга каната к лицу", "фейс пул"],
    id: "ex_shoulders_3"
  },
  // Руки (Arms)
  {
    matches: ["бицепс со штанг", "подъем на бицепс", "бицепс стоя", "bicep curl", "бицепс"],
    id: "ex_arms_1"
  },
  {
    matches: ["французск", "трицепс лежа", "skull crusher"],
    id: "ex_arms_2"
  },
  {
    matches: ["молот", "хаммер", "молотков", "hammer curl"],
    id: "ex_arms_3"
  },
  {
    matches: ["разгибан на блок", "трицепс канат", "pushdown", "трицепс блок"],
    id: "ex_arms_4"
  },
  // Кор и Пресс (Core)
  {
    matches: ["скручиван", "пресс", "crunches", "пресс на коврике"],
    id: "ex_core_1"
  },
  {
    matches: ["планк", "plank"],
    id: "ex_core_2"
  },
  {
    matches: ["подъем ног", "ноги в висе", "hanging leg raise"],
    id: "ex_core_3"
  }
];

const SETS_WORD_REGEX = /(\d+)\s*(?:а?сета|сетов|сетах?|подхода|подходов|сет|sets?)/i;
const REPS_WORD_REGEX = /(?:по\s*)?(\d+(?:-\d+)?)\s*(?:повторен[а-я]*|повтор[а-я]*|повто[а-я]*|раз|reps?)/i;
const MULTIPLY_REGEX = /(\d+)\s*[xх*×]\s*(\d+(?:-\d+)?)/i;
const PO_REPS_REGEX = /(\d+)\s*по\s*(\d+(?:-\d+)?)/i;

function extractSetsAndReps(line) {
  let sets = null;
  let reps = null;

  // 1. Explicit Russian terms "4 сета" or "3 подхода"
  const mSets = SETS_WORD_REGEX.exec(line);
  if (mSets) sets = parseInt(mSets[1], 10);

  // 2. Explicit Russian terms "8 повторений"
  const mReps = REPS_WORD_REGEX.exec(line);
  if (mReps) reps = mReps[1];

  // 3. Multiplier format "4х10", "4x10", "4*10"
  if (!sets || !reps) {
    const mMult = MULTIPLY_REGEX.exec(line);
    if (mMult) {
      if (!sets) sets = parseInt(mMult[1], 10);
      if (!reps) reps = mMult[2];
    }
  }

  // 4. "3 по 12" format
  if (!sets || !reps) {
    const mPo = PO_REPS_REGEX.exec(line);
    if (mPo) {
      if (!sets) sets = parseInt(mPo[1], 10);
      if (!reps) reps = mPo[2];
    }
  }

  if (sets || reps) {
    return {
      sets: Math.min(6, Math.max(1, sets || 3)),
      reps: reps || "10-12"
    };
  }
  return null;
}

function isPureSetsRepsLine(line) {
  const hasSRMarker = SETS_WORD_REGEX.test(line) || REPS_WORD_REGEX.test(line) || MULTIPLY_REGEX.test(line) || PO_REPS_REGEX.test(line);
  if (!hasSRMarker) return false;

  // If the line also has an exercise keyword (e.g. "Жим 4х10"), it's NOT a pure sets/reps line
  if (hasGymKeyword(line)) {
    return false;
  }

  return true;
}

function cleanSetsAndRepsFromLine(line) {
  return line
    .replace(SETS_WORD_REGEX, "")
    .replace(REPS_WORD_REGEX, "")
    .replace(MULTIPLY_REGEX, "")
    .replace(PO_REPS_REGEX, "")
    .replace(/\b(?:подход[а-я]*|а?сета|сетов|сет|повторен[а-я]*|повтор[а-я]*|повто[а-я]*|раз|reps?|sets?)/gi, "")
    .replace(/[-–—:()",.;]+$/, "")
    .trim();
}

function isNoiseLine(line) {
  if (!line || line.trim().length === 0) return true;
  const trimmed = line.trim();

  // 1. Pure sets/reps lines are NOT noise (they attach to previous exercise)
  if (isPureSetsRepsLine(trimmed)) {
    return false;
  }

  // 2. Multi-screenshot boundary marker
  if (/^[—\-=_*#\s]*скриншот\s*\d+[—\-=_*#\s]*$/i.test(trimmed)) {
    return false;
  }

  // 3. OCR character artifacts like "fil | \" or "| Lvs т \"
  if ((trimmed.includes("|") || trimmed.includes("\\")) && !hasGymKeyword(trimmed)) {
    return true;
  }

  // 4. Status bar noise (e.g. "15:43 ® ино 52 §", "09:41 LTE 100%")
  if (/^\s*\d{1,2}:\d{2}\b/.test(trimmed)) {
    return true;
  }
  if (/\b(?:\d{1,3}\s*%|lte|5g|4g|3g|wi-?fi|sim|vpn|volte)\b/i.test(trimmed) && !hasGymKeyword(trimmed)) {
    return true;
  }

  // 5. Mobile App / Telegram UI noise
  if (/\b(?:мини-приложение|test-app|onlyfits|заметки|notes|назад|готово|отмена|сохранить|изменить|поиск|закрыть|поделиться)\b/i.test(trimmed)) {
    if (!hasGymKeyword(trimmed)) {
      return true;
    }
  }

  // 6. Letter count check (discard random non-exercise strings like "AE B", "г. 7")
  const letters = (trimmed.match(/[a-zа-яё]/gi) || []).length;
  if (letters < 5 && !hasGymKeyword(trimmed)) {
    return true;
  }

  // 7. Non-space character ratio check
  const nonSpace = trimmed.replace(/\s+/g, "").length;
  if (nonSpace > 0 && (letters / nonSpace) < 0.45 && !hasGymKeyword(trimmed)) {
    return true;
  }

  return false;
}

function matchOrClassifyExercise(rawName) {
  // Strip initial OCR noise, bullets, numbers, stray single letters
  let clean = rawName
    .replace(/^[|\\\/\-–—•*#~»«"':;0-9.)\s]+/, "")
    .replace(/^(?:соотв|упр|ex|№)\s*[\d\w.]*\s*/i, "")
    .replace(/^[a-zа-яё]\s+/i, "")
    .replace(/[-–—:()",.;]+$/, "")
    .trim();

  const lower = clean.toLowerCase();

  // 1. Match against known gym synonyms and OCR phonetic variants
  for (const item of GYM_SYNONYMS) {
    for (const m of item.matches) {
      if (lower.includes(m)) {
        const found = EXERCISES_DB.find(e => e.id === item.id);
        if (found) {
          return {
            id: found.id,
            name: found.name,
            muscle: found.muscle,
            muscle_ru: found.muscle_ru,
            equipment: found.equipment,
            github_id: found.github_id
          };
        }
      }
    }
  }

  // 2. Direct or substring match in standard catalog
  for (const dbEx of EXERCISES_DB) {
    const dbLower = dbEx.name.toLowerCase();
    if (dbLower.includes(lower) || (lower.length > 5 && dbLower.includes(lower.slice(0, 8)))) {
      return {
        id: dbEx.id,
        name: dbEx.name,
        muscle: dbEx.muscle,
        muscle_ru: dbEx.muscle_ru,
        equipment: dbEx.equipment,
        github_id: dbEx.github_id
      };
    }
  }

  // 3. Fallback: Auto-classify muscle group and equipment
  let muscle = "chest";
  let muscle_ru = "Грудь";
  let github_id = "Barbell_Bench_Press_-_Medium_Grip";

  if (lower.includes("спин") || lower.includes("тяг") || lower.includes("широч") || lower.includes("блок") || lower.includes("подтяг")) {
    muscle = "back";
    muscle_ru = "Спина";
    github_id = "Pullups";
  } else if (lower.includes("ног") || lower.includes("присед") || lower.includes("бедр") || lower.includes("икр") || lower.includes("выпад") || lower.includes("квадр") || lower.includes("ягодиц")) {
    muscle = "legs";
    muscle_ru = "Ноги";
    github_id = "Barbell_Squat";
  } else if (lower.includes("плеч") || lower.includes("дельт") || lower.includes("мах") || lower.includes("армей")) {
    muscle = "shoulders";
    muscle_ru = "Плечи";
    github_id = "Dumbbell_Shoulder_Press";
  } else if (lower.includes("бицепс") || lower.includes("трицепс") || lower.includes("рук") || lower.includes("молот") || lower.includes("француз")) {
    muscle = "arms";
    muscle_ru = "Руки";
    github_id = "Barbell_Curl";
  } else if (lower.includes("пресс") || lower.includes("кор") || lower.includes("скручив") || lower.includes("планк")) {
    muscle = "core";
    muscle_ru = "Пресс";
    github_id = "Crunches";
  }

  let equipment = "Тренажер";
  if (lower.includes("штанги") || lower.includes("штанга")) equipment = "Штанга";
  else if (lower.includes("гантел")) equipment = "Гантели";
  else if (lower.includes("брусья") || lower.includes("турник") || lower.includes("свой вес")) equipment = "Свой вес";
  else if (lower.includes("блок") || lower.includes("кроссовер") || lower.includes("смитт")) equipment = "Тренажер";

  const formattedName = clean.charAt(0).toUpperCase() + clean.slice(1);

  return {
    id: "ex_custom_" + Math.random().toString(36).substr(2, 9),
    name: formattedName,
    muscle,
    muscle_ru,
    equipment,
    github_id,
    targetSets: 3,
    targetReps: "10-12",
    steps: [
      "Примите правильное исходное положение, сохраняя естественные изгибы позвоночника.",
      "Выполняйте движение подконтрольно в полной амплитуде без рывков.",
      "Фокусируйтесь на работе целевой мышечной группы и ровном дыхании."
    ],
    mistakes: [
      "Резкие движения и потеря контроля в негативной фазе.",
      "Задержка дыхания при пиковом усилии."
    ],
    primary: muscle_ru,
    secondary: "Мышцы-стабилизаторы",
    breathing: "Вдох на опускании/растяжении, выдох на сокращении"
  };
}

function parseWorkoutTextToProgram(rawText) {
  const lines = rawText.split("\n").map(l => l.trim()).filter(Boolean);
  
  const dayHeaderRegex = /^(?:день|day|тренировка|workout)\s*(\d+|[ivx]+|[a-d])|\b(?:понедельник|вторник|среда|четверг|пятница|суббота|воскресенье|пн|вт|ср|чт|пт|сб|вс)\b|^(?:верх|низ|толкай|тяни|ноги|грудь|спина|плечи|руки|push|pull|legs|upper|lower)\b/i;
  const screenshotMarkerRegex = /^[—\-=_*#\s]*скриншот\s*(\d+)[—\-=_*#\s]*$/i;

  const days = [];
  let currentDay = null;

  for (const line of lines) {
    if (isNoiseLine(line)) {
      continue;
    }

    // Check screenshot boundary from multi-screenshot OCR
    const scMatch = screenshotMarkerRegex.exec(line);
    if (scMatch) {
      const scNum = scMatch[1];
      currentDay = {
        title: `День ${scNum}: Тренировка ${scNum}`,
        exercises: []
      };
      days.push(currentDay);
      continue;
    }

    // Check standard day header: "День 1", "Вторник", "Верх тела" etc.
    if (dayHeaderRegex.test(line)) {
      currentDay = {
        title: line.replace(/^[-–—#*\s]+/, "").trim(),
        exercises: []
      };
      days.push(currentDay);
      continue;
    }

    // Ensure active day exists
    if (!currentDay) {
      currentDay = {
        title: "День 1: Основная тренировка",
        exercises: []
      };
      days.push(currentDay);
    }

    // Multi-line stitching: If line is solely sets & reps, attach to previous exercise
    if (isPureSetsRepsLine(line)) {
      if (currentDay.exercises.length > 0) {
        const prevEx = currentDay.exercises[currentDay.exercises.length - 1];
        const sr = extractSetsAndReps(line);
        if (sr) {
          prevEx.targetSets = sr.sets;
          prevEx.targetReps = sr.reps;
        }
      }
      continue;
    }

    // Process exercise line
    let exLine = line.replace(/^\d+[\.\)]\s*|^[-•*#]\s*/, "").trim();

    // Extract sets & reps if present on the same line
    let sets = 3;
    let reps = "10-12";
    const sr = extractSetsAndReps(exLine);
    if (sr) {
      sets = sr.sets;
      reps = sr.reps;
      exLine = cleanSetsAndRepsFromLine(exLine);
    }

    exLine = exLine.replace(/[-–—:()",.;]+$/, "").trim();

    if (exLine.length >= 2) {
      const classified = matchOrClassifyExercise(exLine);
      classified.targetSets = sets;
      classified.targetReps = reps;
      currentDay.exercises.push(classified);
    }
  }

  // Filter out any accidentally empty days
  const validDays = days.filter(d => d.exercises && d.exercises.length > 0);

  // Logical Day Balancing:
  // If user supplied a long list of exercises under a single day (7+ exercises),
  // split logically across 2, 3, or 4 days to prevent 23 exercises in 1 day!
  if (validDays.length === 1 && validDays[0].exercises.length >= 7) {
    const total = validDays[0].exercises;
    let daysCount = 3;
    if (total.length >= 14) daysCount = 4;
    else if (total.length <= 8) daysCount = 2;

    const perDay = Math.ceil(total.length / daysCount);
    const splitDays = [];
    const titles3 = ["День 1: Толкай (Грудь, Плечи)", "День 2: Тяни (Спина, Бицепс)", "День 3: Ноги и Пресс"];
    const titles4 = ["День 1: Верх тела (А)", "День 2: Низ тела (А)", "День 3: Верх тела (Б)", "День 4: Низ тела (Б)"];
    const titles2 = ["День 1: Верх тела", "День 2: Низ тела"];

    const chosenTitles = daysCount === 4 ? titles4 : (daysCount === 2 ? titles2 : titles3);

    for (let i = 0; i < daysCount; i++) {
      const slice = total.slice(i * perDay, (i + 1) * perDay);
      if (slice.length > 0) {
        splitDays.push({
          title: chosenTitles[i] || `День ${i + 1}`,
          exercises: slice
        });
      }
    }
    return {
      title: "Моя программа",
      days: splitDays
    };
  }

  return {
    title: "Моя программа",
    days: validDays.length > 0 ? validDays : [
      {
        title: "День 1: Верх тела",
        exercises: [
          matchOrClassifyExercise("Жим штанги лежа"),
          matchOrClassifyExercise("Тяга в наклоне")
        ]
      }
    ]
  };
}

function applyStructuredProgram(parsedProg) {
  customDraft = {
    title: parsedProg.title || "Моя программа",
    days: (parsedProg.days || []).map((d, i) => {
      return {
        dayNum: i + 1,
        title: d.title || `День ${i + 1}`,
        exercises: (d.exercises || []).map(ex => {
          if (typeof ex === "string") {
            const mapped = matchOrClassifyExercise(ex);
            mapped.targetSets = 3;
            mapped.targetReps = "10-12";
            return mapped;
          }
          const base = matchOrClassifyExercise(ex.name || "Упражнение");
          base.targetSets = ex.sets || ex.targetSets || 3;
          base.targetReps = ex.reps || ex.targetReps || "10-12";
          return base;
        })
      };
    })
  };

  renderParsedProgramPreview(customDraft);
}

// 6. Interactive Preview & Day Editor
function renderParsedProgramPreview(draft) {
  const previewSection = document.getElementById("parsedProgramPreviewSection");
  const daysBadge = document.getElementById("parsedDaysBadge");
  const titleInput = document.getElementById("parsedProgramTitleInput");
  const daysList = document.getElementById("parsedDaysList");

  if (!previewSection || !daysList) return;

  previewSection.classList.remove("hidden");
  if (daysBadge) daysBadge.textContent = `${draft.days.length} ${draft.days.length === 1 ? 'день' : draft.days.length < 5 ? 'дня' : 'дней'}`;
  if (titleInput) titleInput.value = draft.title || "Моя программа";

  const muscleBadgeColors = {
    chest: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    back: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    legs: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    shoulders: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    arms: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    core: "bg-purple-500/20 text-purple-300 border-purple-500/40"
  };

  daysList.innerHTML = draft.days.map((day, dayIdx) => {
    return `
      <div class="bg-of-subcard rounded-2xl border border-of-border p-3 space-y-2.5">
        
        <!-- Day Card Header -->
        <div class="flex items-center justify-between gap-2 border-b border-of-border/60 pb-2">
          <div class="flex items-center gap-2 flex-1">
            <span class="w-6 h-6 rounded-lg bg-of-blue/15 text-of-blue font-black flex items-center justify-center text-[11px] shrink-0">
              0${dayIdx + 1}
            </span>
            <input type="text" value="${day.title}" onchange="updateDraftDayTitle(${dayIdx}, this.value)" class="bg-transparent text-white font-bold text-xs w-full outline-none focus:text-of-blue" placeholder="Название дня">
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-slate-400 font-semibold">${day.exercises.length} упр.</span>
            ${draft.days.length > 1 ? `
              <button onclick="removeDraftDay(${dayIdx})" class="w-6 h-6 rounded-lg bg-of-card text-slate-400 hover:text-red-400 flex items-center justify-center transition" title="Удалить день">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
              </button>
            ` : ""}
          </div>
        </div>

        <!-- Exercises in this day -->
        <div class="space-y-1.5">
          ${day.exercises.map((ex, exIdx) => {
            const badgeClass = muscleBadgeColors[ex.muscle] || "bg-slate-700 text-slate-300 border-slate-600";
            return `
              <div class="bg-of-card p-2 rounded-xl border border-of-border flex items-center justify-between gap-2 text-xs">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1">
                    <span class="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border ${badgeClass}">
                      ${ex.muscle_ru || ex.muscle}
                    </span>
                    <select onchange="updateDraftExerciseMuscle(${dayIdx}, ${exIdx}, this.value)" class="text-[9px] bg-of-subcard border border-of-border rounded px-1 py-0.5 text-slate-300 outline-none">
                      <option value="chest" ${ex.muscle === "chest" ? "selected" : ""}>Грудь</option>
                      <option value="back" ${ex.muscle === "back" ? "selected" : ""}>Спина</option>
                      <option value="legs" ${ex.muscle === "legs" ? "selected" : ""}>Ноги</option>
                      <option value="shoulders" ${ex.muscle === "shoulders" ? "selected" : ""}>Плечи</option>
                      <option value="arms" ${ex.muscle === "arms" ? "selected" : ""}>Руки</option>
                      <option value="core" ${ex.muscle === "core" ? "selected" : ""}>Пресс</option>
                    </select>
                  </div>
                  <input type="text" value="${ex.name}" onchange="updateDraftExerciseName(${dayIdx}, ${exIdx}, this.value)" class="bg-transparent text-white font-semibold text-[11px] w-full outline-none focus:text-of-blue truncate" placeholder="Название упражнения">
                </div>

                <!-- Sets & Reps Inputs -->
                <div class="flex items-center gap-1 shrink-0">
                  <div class="flex items-center bg-of-subcard border border-of-border rounded-lg px-1.5 py-1 text-[10px]">
                    <span class="text-slate-400 mr-1">Сеты:</span>
                    <input type="number" min="1" max="10" value="${ex.targetSets || 3}" onchange="updateDraftExerciseSets(${dayIdx}, ${exIdx}, this.value)" class="w-6 bg-transparent text-white font-bold text-center outline-none">
                  </div>

                  <div class="flex items-center bg-of-subcard border border-of-border rounded-lg px-1.5 py-1 text-[10px]">
                    <span class="text-slate-400 mr-1">Повт:</span>
                    <input type="text" value="${ex.targetReps || '10-12'}" onchange="updateDraftExerciseReps(${dayIdx}, ${exIdx}, this.value)" class="w-11 bg-transparent text-white font-bold text-center outline-none">
                  </div>

                  <button onclick="removeDraftExercise(${dayIdx}, ${exIdx})" class="w-6 h-6 rounded-lg text-slate-500 hover:text-red-400 flex items-center justify-center transition">
                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Add Exercise Button -->
        <button onclick="addDraftExercise(${dayIdx})" class="w-full py-1.5 rounded-xl border border-dashed border-of-border hover:border-of-blue text-slate-400 hover:text-of-blue text-[11px] font-bold flex items-center justify-center gap-1 transition">
          <i data-lucide="plus" class="w-3 h-3"></i>
          <span>Добавить упражнение</span>
        </button>

      </div>
    `;
  }).join("");

  // Append "Add Day" button if less than 7 days
  if (draft.days.length < 7) {
    daysList.insertAdjacentHTML("beforeend", `
      <button onclick="addDraftDay()" class="w-full py-2.5 rounded-2xl bg-of-subcard border border-of-border hover:border-of-blue text-slate-300 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition">
        <i data-lucide="plus-circle" class="w-4 h-4 text-of-blue"></i>
        <span>Добавить еще один день (День 0${draft.days.length + 1})</span>
      </button>
    `);
  }

  lucide.createIcons();

  // Smooth scroll down to preview
  setTimeout(() => {
    previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

// 7. Draft Mutation Functions
function updateDraftDayTitle(dayIdx, value) {
  if (customDraft.days[dayIdx]) {
    customDraft.days[dayIdx].title = value.trim() || `День ${dayIdx + 1}`;
  }
}

function updateDraftExerciseName(dayIdx, exIdx, value) {
  if (customDraft.days[dayIdx]?.exercises[exIdx]) {
    customDraft.days[dayIdx].exercises[exIdx].name = value.trim() || "Упражнение";
  }
}

function updateDraftExerciseSets(dayIdx, exIdx, value) {
  const num = parseInt(value, 10);
  if (customDraft.days[dayIdx]?.exercises[exIdx] && !isNaN(num)) {
    customDraft.days[dayIdx].exercises[exIdx].targetSets = Math.max(1, Math.min(10, num));
  }
}

function updateDraftExerciseReps(dayIdx, exIdx, value) {
  if (customDraft.days[dayIdx]?.exercises[exIdx]) {
    customDraft.days[dayIdx].exercises[exIdx].targetReps = value.trim() || "10-12";
  }
}

function updateDraftExerciseMuscle(dayIdx, exIdx, muscleKey) {
  const muscleRuMap = {
    chest: "Грудь",
    back: "Спина",
    legs: "Ноги",
    shoulders: "Плечи",
    arms: "Руки",
    core: "Пресс"
  };
  if (customDraft.days[dayIdx]?.exercises[exIdx]) {
    customDraft.days[dayIdx].exercises[exIdx].muscle = muscleKey;
    customDraft.days[dayIdx].exercises[exIdx].muscle_ru = muscleRuMap[muscleKey] || "Грудь";
    renderParsedProgramPreview(customDraft);
  }
}

function removeDraftExercise(dayIdx, exIdx) {
  if (customDraft.days[dayIdx]?.exercises) {
    customDraft.days[dayIdx].exercises.splice(exIdx, 1);
    renderParsedProgramPreview(customDraft);
    triggerHaptic("light");
  }
}

function addDraftExercise(dayIdx) {
  if (customDraft.days[dayIdx]) {
    const newEx = matchOrClassifyExercise("Новое упражнение");
    newEx.targetSets = 3;
    newEx.targetReps = "10-12";
    customDraft.days[dayIdx].exercises.push(newEx);
    renderParsedProgramPreview(customDraft);
    triggerHaptic("light");
  }
}

function removeDraftDay(dayIdx) {
  if (customDraft.days.length > 1) {
    customDraft.days.splice(dayIdx, 1);
    // Renumber days
    customDraft.days.forEach((d, i) => {
      d.dayNum = i + 1;
    });
    renderParsedProgramPreview(customDraft);
    triggerHaptic("light");
  }
}

function addDraftDay() {
  const nextNum = customDraft.days.length + 1;
  const newEx = matchOrClassifyExercise("Жим штанги лежа");
  newEx.targetSets = 4;
  newEx.targetReps = "10";

  customDraft.days.push({
    dayNum: nextNum,
    title: `День ${nextNum}`,
    exercises: [newEx]
  });
  renderParsedProgramPreview(customDraft);
  triggerHaptic("light");
}

// 8. Final Save and Activation
function saveCustomProgram() {
  const titleInput = document.getElementById("parsedProgramTitleInput");
  const progTitle = (titleInput ? titleInput.value.trim() : "") || customDraft.title || "Моя программа";

  // Validate
  if (!customDraft.days || customDraft.days.length === 0) {
    showToast("В программе должен быть хотя бы 1 день!");
    return;
  }

  let totalEx = 0;
  customDraft.days.forEach(d => {
    totalEx += d.exercises.length;
  });

  if (totalEx === 0) {
    showToast("Добавьте хотя бы одно упражнение!");
    return;
  }

  // Register all exercises into EXERCISES_DB if not already present
  customDraft.days.forEach(d => {
    d.exercises.forEach(ex => {
      let existing = EXERCISES_DB.find(e => e.id === ex.id);
      if (!existing) {
        EXERCISES_DB.push({
          id: ex.id,
          name: ex.name,
          muscle: ex.muscle || "chest",
          muscle_ru: ex.muscle_ru || "Грудь",
          equipment: ex.equipment || "Тренажер",
          github_id: ex.github_id || "Barbell_Bench_Press_-_Medium_Grip",
          targetSets: ex.targetSets || 3,
          targetReps: ex.targetReps || "10-12",
          steps: ex.steps || [
            "Примите правильное исходное положение.",
            "Выполняйте движение подконтрольно в полной амплитуде.",
            "Держите темп и ровное дыхание."
          ],
          mistakes: ex.mistakes || ["Инерция и рывки."],
          primary: ex.muscle_ru || "Целевая мышца",
          secondary: "Мышцы-стабилизаторы",
          breathing: "Вдох в негативной фазе, выдох на усилии"
        });
      } else {
        // Update sets & reps
        existing.targetSets = ex.targetSets || existing.targetSets || 3;
        existing.targetReps = ex.targetReps || existing.targetReps || "10-12";
      }
    });
  });

  saveCustomExercisesStorage();

  // Create program object
  const progId = "custom_split_" + Date.now();
  const daysCount = customDraft.days.length;

  const newProgram = {
    id: progId,
    type: "custom",
    isCustom: true,
    categoryTitle: "⭐️ Своя программа",
    title: progTitle,
    fullTitle: `${progTitle} (${daysCount} ${daysCount === 1 ? 'день' : daysCount < 5 ? 'дня' : 'дней'})`,
    daysPerWeek: daysCount,
    days: customDraft.days.map((d, i) => {
      return {
        dayNum: i + 1,
        title: d.title || `День ${i + 1}`,
        subtitle: `Индивидуальный комплекс (${d.exercises.length} упр.)`,
        durationMin: Math.max(45, d.exercises.length * 10 + 15),
        exercises: d.exercises.map(ex => ex.id)
      };
    })
  };

  saveCustomProgramToStorage(newProgram);

  // Activate custom program in user state
  state.programId = progId;
  state.user.split = progId;
  state.selectedDayIdx = 0;
  saveState();

  // Close modal
  closeCustomProgramModal();

  // Update UI and navigate to Workouts tab
  renderAll();
  switchTab("tab-workouts");
  triggerHaptic("success");
  showToast(`Программа «${progTitle}» сохранена и активирована! 🚀`);
}

// ==========================================
// 17. Apple Health (HealthKit) Integration
// ==========================================

function openAppleHealthModal() {
  const modal = document.getElementById("appleHealthAuthModal");
  if (!modal) return;

  const perms = state.healthSync?.permissions || { steps: true, sleep: true, calories: true, weight: true };
  const pSteps = document.getElementById("healthPermSteps");
  const pSleep = document.getElementById("healthPermSleep");
  const pCalories = document.getElementById("healthPermCalories");
  const pWeight = document.getElementById("healthPermWeight");
  const toggleAll = document.getElementById("healthToggleAll");

  if (pSteps) pSteps.checked = perms.steps !== false;
  if (pSleep) pSleep.checked = perms.sleep !== false;
  if (pCalories) pCalories.checked = perms.calories !== false;
  if (pWeight) pWeight.checked = perms.weight !== false;
  if (toggleAll) toggleAll.checked = (pSteps?.checked && pSleep?.checked && pCalories?.checked && pWeight?.checked);

  modal.classList.remove("hidden");
  triggerHaptic("light");
  lucide.createIcons();
}

function closeAppleHealthModal() {
  const modal = document.getElementById("appleHealthAuthModal");
  if (modal) modal.classList.add("hidden");
}

function confirmAppleHealthAuth() {
  const pSteps = document.getElementById("healthPermSteps")?.checked ?? true;
  const pSleep = document.getElementById("healthPermSleep")?.checked ?? true;
  const pCalories = document.getElementById("healthPermCalories")?.checked ?? true;
  const pWeight = document.getElementById("healthPermWeight")?.checked ?? true;

  if (!state.healthSync) {
    state.healthSync = {};
  }
  state.healthSync.connected = true;
  state.healthSync.permissions = {
    steps: pSteps,
    sleep: pSleep,
    calories: pCalories,
    weight: pWeight
  };
  state.healthSync.lastSyncTime = "сегодня в " + new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

  closeAppleHealthModal();
  saveState();
  renderStatsScreen();

  // Сразу открываем окно быстрой команды и ввода показателей для завершения настройки
  setTimeout(() => {
    openShortcutGuideModal("shortcut");
  }, 200);

  showToast("Доступ к «Apple Здоровье» успешно разрешен! 🍏");
  triggerHaptic("success");
}

async function syncHealthData(forceToast = false) {
  const syncBtn = document.getElementById("healthSyncActionBtn");
  const quickBtn = document.getElementById("topHealthSyncQuickBtn");
  if (syncBtn) syncBtn.classList.add("animate-pulse");
  if (quickBtn) quickBtn.classList.add("animate-spin");

  try {
    const userId = state.user.id || "guest";
    const resp = await fetch(`/api/health-sync?user_id=${userId}`);
    const resData = await resp.json();

    if (resData && resData.status === "ok" && resData.health_data) {
      const hd = resData.health_data;
      if (hd.steps !== undefined && hd.steps !== null) state.stats.stepsToday = hd.steps;
      if (hd.active_calories !== undefined && hd.active_calories !== null) state.stats.caloriesBurned = hd.active_calories;
      if (hd.sleep_hours !== undefined && hd.sleep_hours !== null) state.stats.sleepHours = hd.sleep_hours;
      if (hd.sleep_minutes !== undefined && hd.sleep_minutes !== null) state.stats.sleepMinutes = hd.sleep_minutes;
      if (hd.sleep_score !== undefined && hd.sleep_score !== null) state.stats.sleepScore = hd.sleep_score;
      if (hd.weight) {
        state.user.weight = hd.weight;
        state.stats.weight = hd.weight;
      }
      if (resData.weight_history) {
        state.weightHistory = resData.weight_history;
      }
      if (hd.weekly_steps) state.healthSync.weeklySteps = hd.weekly_steps;
      if (hd.weekly_calories) state.healthSync.weeklyCalories = hd.weekly_calories;
      if (hd.weekly_sleep) state.healthSync.weeklySleep = hd.weekly_sleep;
      state.healthSync.connected = true;
      if (hd.source) state.healthSync.source = hd.source;
    } else {
      // Если на сервере еще нет записи, отправляем текущие сохраненные данные клиента для инициализации
      state.healthSync.connected = true;
      fetch("/api/health-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          steps: state.stats.stepsToday || 8266,
          sleep_hours: state.stats.sleepHours || 7,
          sleep_minutes: state.stats.sleepMinutes || 45,
          sleep_score: state.stats.sleepScore || 84,
          active_calories: state.stats.caloriesBurned || 640,
          weight: state.user.weight || 75.0,
          weekly_steps: state.healthSync.weeklySteps,
          weekly_calories: state.healthSync.weeklyCalories,
          weekly_sleep: state.healthSync.weeklySleep,
          source: "Apple Здоровье"
        })
      }).catch(e => console.log("[Health Sync Init Push]:", e));
    }

    state.healthSync.lastSyncTime = "сегодня в " + new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    saveState();
    renderStatsScreen();

    if (forceToast) {
      showToast("Данные Apple Здоровье успешно обновлены! 🍏");
      triggerHaptic("success");
    }
  } catch (e) {
    console.error("Health sync error:", e);
    state.healthSync.connected = true;
    state.healthSync.lastSyncTime = "сегодня в " + new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    saveState();
    renderStatsScreen();
  } finally {
    if (syncBtn) syncBtn.classList.remove("animate-pulse");
    if (quickBtn) quickBtn.classList.remove("animate-spin");
  }
}

function openShortcutGuideModal(tab = "shortcut") {
  const modal = document.getElementById("appleShortcutModal");
  if (!modal) return;

  // Формируем персональный Webhook URL с доменом и ID пользователя
  const origin = window.location.origin;
  const uid = state.user.id || "guest";
  const webhookInput = document.getElementById("healthWebhookUrlInput");
  if (webhookInput) {
    webhookInput.value = `${origin}/api/health-sync?user_id=${encodeURIComponent(uid)}`;
  }

  // Предзаполняем поля ручного ввода текущими значениями
  const stInput = document.getElementById("manualHealthSteps");
  const shInput = document.getElementById("manualHealthSleepHours");
  const smInput = document.getElementById("manualHealthSleepMinutes");
  const calInput = document.getElementById("manualHealthCalories");
  const wInput = document.getElementById("manualHealthWeight");

  if (stInput) stInput.value = state.stats.stepsToday || 8266;
  if (shInput) shInput.value = state.stats.sleepHours ?? 7;
  if (smInput) smInput.value = state.stats.sleepMinutes ?? 45;
  if (calInput) calInput.value = state.stats.caloriesBurned || 640;
  if (wInput) wInput.value = state.user.weight || 75.0;

  switchHealthModalTab(tab);

  modal.classList.remove("hidden");
  triggerHaptic("light");
  lucide.createIcons();
}

function closeShortcutGuideModal() {
  const modal = document.getElementById("appleShortcutModal");
  if (modal) modal.classList.add("hidden");
}

function switchHealthModalTab(tab = "shortcut") {
  const tabShortcut = document.getElementById("healthTabContentShortcut");
  const tabManual = document.getElementById("healthTabContentManual");
  const btnShortcut = document.getElementById("healthTabBtnShortcut");
  const btnManual = document.getElementById("healthTabBtnManual");

  if (tab === "manual") {
    if (tabShortcut) tabShortcut.classList.add("hidden");
    if (tabManual) tabManual.classList.remove("hidden");

    if (btnManual) {
      btnManual.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-of-blue text-of-bg shadow-sm";
    }
    if (btnShortcut) {
      btnShortcut.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-of-card text-slate-300 hover:text-white border border-of-border";
    }
  } else {
    if (tabShortcut) tabShortcut.classList.remove("hidden");
    if (tabManual) tabManual.classList.add("hidden");

    if (btnShortcut) {
      btnShortcut.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-of-blue text-of-bg shadow-sm";
    }
    if (btnManual) {
      btnManual.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-of-card text-slate-300 hover:text-white border border-of-border";
    }
  }
  lucide.createIcons();
}

function copyHealthWebhook() {
  const webhookInput = document.getElementById("healthWebhookUrlInput");
  if (!webhookInput) return;

  const url = webhookInput.value;
  if (!url) return;

  const successFeedback = () => {
    showToast("Webhook URL скопирован в буфер! 📋");
    triggerHaptic("success");
    const btn = document.getElementById("copyHealthWebhookBtn");
    if (btn) {
      const origText = btn.innerHTML;
      btn.innerHTML = `<span>✓ Готово!</span>`;
      setTimeout(() => { btn.innerHTML = origText; lucide.createIcons(); }, 1800);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(successFeedback).catch(() => {
      fallbackCopy(url);
    });
  } else {
    fallbackCopy(url);
  }

  function fallbackCopy(text) {
    webhookInput.select();
    try {
      document.execCommand("copy");
      successFeedback();
    } catch (e) {
      showToast("Выделите и скопируйте ссылку вручную");
    }
  }
}

async function saveManualHealthData() {
  const stInput = document.getElementById("manualHealthSteps");
  const shInput = document.getElementById("manualHealthSleepHours");
  const smInput = document.getElementById("manualHealthSleepMinutes");
  const calInput = document.getElementById("manualHealthCalories");
  const wInput = document.getElementById("manualHealthWeight");

  const steps = parseInt(stInput?.value, 10) || state.stats.stepsToday || 8266;
  const sleepHours = parseInt(shInput?.value, 10) || 7;
  const sleepMinutes = parseInt(smInput?.value, 10) || 0;
  const calories = parseInt(calInput?.value, 10) || state.stats.caloriesBurned || 640;
  const weight = parseFloat(wInput?.value) || state.user.weight || 75.0;

  // Расчет индекса сна
  const totalH = sleepHours + sleepMinutes / 60.0;
  let score = 84;
  if (totalH >= 7.0 && totalH <= 8.5) {
    score = Math.min(98, Math.round(86 + (totalH - 7.0) * 8));
  } else if (totalH >= 6.0 && totalH < 7.0) {
    score = Math.round(70 + (totalH - 6.0) * 15);
  } else if (totalH > 8.5 && totalH <= 10.0) {
    score = Math.max(75, Math.round(90 - (totalH - 8.5) * 10));
  } else if (totalH < 6.0) {
    score = Math.max(35, Math.round(35 + totalH * 5.8));
  }

  // Обновляем состояние клиента
  state.stats.stepsToday = steps;
  state.stats.caloriesBurned = calories;
  state.stats.sleepHours = sleepHours;
  state.stats.sleepMinutes = sleepMinutes;
  state.stats.sleepScore = score;

  if (weight && weight >= 30.0 && weight <= 300.0) {
    state.user.weight = weight;
    state.stats.weight = weight;
  }

  const todayIdx = (new Date().getDay() + 6) % 7;
  if (state.healthSync.weeklySteps && state.healthSync.weeklySteps.length === 7) {
    state.healthSync.weeklySteps[todayIdx] = steps;
  }
  if (state.healthSync.weeklyCalories && state.healthSync.weeklyCalories.length === 7) {
    state.healthSync.weeklyCalories[todayIdx] = calories;
  }
  if (state.healthSync.weeklySleep && state.healthSync.weeklySleep.length === 7) {
    state.healthSync.weeklySleep[todayIdx] = roundNum(totalH, 1);
  }

  state.healthSync.connected = true;
  state.healthSync.source = "Apple Здоровье";
  state.healthSync.lastSyncTime = "сегодня в " + new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

  saveState();
  renderStatsScreen();
  closeShortcutGuideModal();

  showToast("Данные «Здоровье» успешно сохранены и синхронизированы! 🍏");
  triggerHaptic("success");

  // Отправка на сервер
  try {
    const userId = state.user.id || "guest";
    const resp = await fetch("/api/health-sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        steps: steps,
        sleep_hours: sleepHours,
        sleep_minutes: sleepMinutes,
        sleep_score: score,
        active_calories: calories,
        weight: weight,
        weekly_steps: state.healthSync.weeklySteps,
        weekly_calories: state.healthSync.weeklyCalories,
        weekly_sleep: state.healthSync.weeklySleep,
        source: "Apple Здоровье"
      })
    });
    const resData = await resp.json();
    if (resData && resData.weight_history) {
      state.weightHistory = resData.weight_history;
      saveState();
      renderStatsScreen();
    }
  } catch (e) {
    console.error("[Manual Health Sync Push Error]:", e);
  }
}



