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
// 2. Programs Catalog (Upper/Lower Split)
// ==========================================
const PROGRAMS = {
  upper_lower_gym_4: {
    id: "upper_lower_gym_4",
    title: "Верх/низ",
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
    title: "Верх / Низ (3 дня)",
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
  push_pull_legs: {
    id: "push_pull_legs",
    title: "Push / Pull / Legs",
    daysPerWeek: 3,
    days: [
      {
        dayNum: 1,
        title: "Push (Жим)",
        subtitle: "Грудь, плечи, трицепс",
        durationMin: 60,
        exercises: ["ex_chest_1", "ex_chest_2", "ex_shoulders_1", "ex_shoulders_2", "ex_arms_4"]
      },
      {
        dayNum: 2,
        title: "Pull (Тяга)",
        subtitle: "Спина, задняя дельта, бицепс",
        durationMin: 60,
        exercises: ["ex_back_1", "ex_back_2", "ex_back_3", "ex_shoulders_3", "ex_arms_1"]
      },
      {
        dayNum: 3,
        title: "Legs (Ноги)",
        subtitle: "Квадрицепсы, бицепс бедра, икры",
        durationMin: 65,
        exercises: ["ex_legs_1", "ex_legs_2", "ex_legs_3", "ex_legs_7", "ex_core_1"]
      }
    ]
  },
  full_body: {
    id: "full_body",
    title: "Full Body (3 дня)",
    daysPerWeek: 3,
    days: [
      {
        dayNum: 1,
        title: "Full Body A",
        subtitle: "Грудь, спина, квадрицепс, руки",
        durationMin: 60,
        exercises: ["ex_legs_1", "ex_chest_1", "ex_back_2", "ex_shoulders_2", "ex_arms_1"]
      },
      {
        dayNum: 2,
        title: "Full Body B",
        subtitle: "Бицепс бедра, плечи, спина",
        durationMin: 60,
        exercises: ["ex_legs_3", "ex_chest_2", "ex_back_3", "ex_shoulders_1", "ex_arms_4"]
      },
      {
        dayNum: 3,
        title: "Full Body C",
        subtitle: "Выпады, брусья, подтягивания, пресс",
        durationMin: 60,
        exercises: ["ex_legs_4", "ex_chest_3", "ex_back_1", "ex_arms_3", "ex_core_1"]
      }
    ]
  }
};

// ==========================================
// 3. Application State
// ==========================================
const state = {
  currentTab: "tab-home",
  programId: "upper_lower_gym_4",
  selectedDayIdx: 2, // Default: "Верх B" (matches Screenshot 5!)
  stats: {
    gymSets: 53,
    gymWorkoutsDone: 2,
    gymWorkoutsTotal: 4,
    caloriesBurned: 972,
    stepsToday: 8266,
    stepsTarget: 6000,
    sleepScore: 63,
    sleepHours: 5,
    sleepMinutes: 46,
    weight: 77.0,
    bodyFat: 14.0,
    weekNumber: 43
  },
  weekDays: [
    { day: "пн", status: "workout", label: "done", sets: 26 },
    { day: "вт", status: "rest", label: "rest", sets: 0 },
    { day: "ср", status: "workout", label: "done", sets: 27 },
    { day: "чт", status: "today", label: "today", sets: 0 },
    { day: "пт", status: "scheduled", label: "next", sets: 0 },
    { day: "сб", status: "scheduled", label: "next", sets: 0 },
    { day: "вс", status: "scheduled", label: "next", sets: 0 }
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
  exercisePhaseTimer: null
};

// ==========================================
// 4. Initialization & LifeCycle
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTelegram();
  loadSavedState();
  initEvents();
  renderAll();
});

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
  }, 2200);
}

// LocalStorage helpers
function loadSavedState() {
  try {
    const raw = localStorage.getItem("onlyfits_data_v2");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.stats) Object.assign(state.stats, parsed.stats);
      if (parsed.programId) state.programId = parsed.programId;
      if (typeof parsed.selectedDayIdx === "number") state.selectedDayIdx = parsed.selectedDayIdx;
    }
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem("onlyfits_data_v2", JSON.stringify({
      stats: state.stats,
      programId: state.programId,
      selectedDayIdx: state.selectedDayIdx
    }));
  } catch (e) {}
}

// ==========================================
// 5. Event Binding
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

  // Top header icons
  document.getElementById("topTimerBtn")?.addEventListener("click", () => {
    if (state.activeWorkout) {
      document.getElementById("activeWorkoutModal").classList.remove("hidden");
    } else {
      showToast("3 тренировки запланировано на этой неделе");
    }
    triggerHaptic("light");
  });

  document.getElementById("topCalendarBtn")?.addEventListener("click", () => {
    showToast(`Неделя ${state.stats.weekNumber} · Октябрь`);
    triggerHaptic("light");
  });

  document.getElementById("topMenuBtn")?.addEventListener("click", () => {
    openSettingsModal();
    triggerHaptic("light");
  });

  // Customize home screen button
  document.getElementById("customizeHomeBtn")?.addEventListener("click", () => {
    showToast("Главный экран настроен по умолчанию");
    triggerHaptic("light");
  });

  // Start workout primary CTA
  document.getElementById("startWorkoutPrimaryBtn")?.addEventListener("click", () => {
    startActiveWorkoutSession();
  });

  // Workout carousel dots
  document.querySelectorAll("#workoutCarouselDots button").forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-idx"), 10);
      selectWorkoutDay(idx);
      triggerHaptic("light");
    });
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

  // Floating Add Button (+)
  document.getElementById("floatingAddBtn")?.addEventListener("click", () => {
    openQuickLogModal();
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
}

// ==========================================
// 6. Tab Navigation Logic
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
// 7. Rendering Engine
// ==========================================
function renderAll() {
  renderHomeWeekdays();
  renderWorkoutProgramDetails();
  renderStatsScreen();
  lucide.createIcons();
}

// Render Weekdays row (пн, вт, ср, чт, пт, сб, вс) on Home & Workouts
function renderHomeWeekdays() {
  const homeContainer = document.getElementById("homeWeekdaysList");
  const progContainer = document.getElementById("programWeekdaysList");

  const buildHtml = () => {
    return state.weekDays.map(item => {
      if (item.status === "workout") {
        // Dumbbell icon for completed workout day
        return `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[10px] text-slate-400">${item.day}</span>
            <div class="w-7 h-7 rounded-full bg-of-subcard border border-of-border flex items-center justify-center text-slate-200">
              <i data-lucide="dumbbell" class="w-3.5 h-3.5 text-of-blue"></i>
            </div>
          </div>
        `;
      } else if (item.status === "rest") {
        // Sleeping face emoji / zzz for rest day
        return `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[10px] text-slate-400">${item.day}</span>
            <div class="w-7 h-7 rounded-full bg-of-subcard border border-of-border flex items-center justify-center text-xs text-slate-300">
              💤
            </div>
          </div>
        `;
      } else if (item.status === "today") {
        // Today highlighted circle
        return `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[10px] text-white font-bold">${item.day}</span>
            <div class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center bg-white/10 shadow-sm shadow-white/30">
              <div class="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        `;
      } else {
        // Future scheduled circle
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
  const day = prog.days[state.selectedDayIdx] || prog.days[0];

  // Title
  document.getElementById("programDetailTitle").textContent = prog.title;
  document.getElementById("homeProgramTitle").textContent = prog.title;
  document.getElementById("dayWorkoutTitle").textContent = day.title;

  // Stat Pills
  const duration = day.durationMin || 70;
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
  document.getElementById("radarBackSets").textContent = muscleSets.back;
  document.getElementById("radarChestSets").textContent = muscleSets.chest;
  document.getElementById("radarArmsSets").textContent = muscleSets.arms;
  document.getElementById("radarShouldersSets").textContent = muscleSets.shoulders;
  document.getElementById("radarLegsSets").textContent = muscleSets.legs;
  document.getElementById("radarCoreSets").textContent = muscleSets.core;

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

// Render Stats Screen from state (Screenshots 1, 2, 3)
function renderStatsScreen() {
  document.getElementById("statsGymMetricCount").textContent = state.stats.gymSets;
  document.getElementById("stepsTodayCount").textContent = state.stats.stepsToday.toLocaleString("ru-RU");
  document.getElementById("sleepScoreNumber").textContent = state.stats.sleepScore;
  document.getElementById("avgSleepDurationDisplay").textContent = `${state.stats.sleepHours} ч ${state.stats.sleepMinutes} мин`;
  document.getElementById("statsWeightDisplay").textContent = state.stats.weight.toFixed(1).replace(".", ",");
  document.getElementById("statsFatDisplay").textContent = state.stats.bodyFat.toFixed(1).replace(".", ",");
}

// ==========================================
// 8. Active Workout Mode (Sets, Tonnage, Timer)
// ==========================================
function startActiveWorkoutSession() {
  const prog = PROGRAMS[state.programId] || PROGRAMS.upper_lower_gym_4;
  const day = prog.days[state.selectedDayIdx] || prog.days[0];

  state.activeWorkout = {
    title: day.title,
    startTime: Date.now(),
    exercises: day.exercises.map(exId => {
      const ex = EXERCISES_DB.find(e => e.id === exId);
      const setsCount = ex.targetSets || 3;
      return {
        id: ex.id,
        name: ex.name,
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

function finishActiveWorkoutSession() {
  if (!state.activeWorkout) return;

  let completedSetsCount = 0;
  state.activeWorkout.exercises.forEach(ex => {
    ex.sets.forEach(s => { if (s.completed) completedSetsCount++; });
  });

  state.stats.gymSets += completedSetsCount;
  state.stats.gymWorkoutsDone = Math.min(4, state.stats.gymWorkoutsDone + 1);

  // Mark Thursday as done
  state.weekDays[3].status = "workout";

  if (state.workoutTimer.intervalId) clearInterval(state.workoutTimer.intervalId);
  skipRestTimer();

  state.activeWorkout = null;
  document.getElementById("activeWorkoutModal").classList.add("hidden");

  saveState();
  renderAll();
  triggerHaptic("success");
  showToast("Тренировка успешно завершена! Данные внесены в статистику.");
}

// ==========================================
// 9. Exercise Technique Modal (2-Phase Player)
// ==========================================
function openExerciseVideoModal(exerciseId) {
  const ex = EXERCISES_DB.find(e => e.id === exerciseId);
  if (!ex) return;

  document.getElementById("videoExerciseTitle").textContent = ex.name;
  document.getElementById("videoExerciseMuscle").textContent = ex.muscle_ru;
  document.getElementById("videoEquipmentTag").textContent = ex.equipment;

  // GitHub Exercise DB Images (Guaranteed 200 OK from Raw CDN)
  const ghId = ex.github_id || "Barbell_Bench_Press_-_Medium_Grip";
  const img0 = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ghId}/0.jpg`;
  const img1 = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ghId}/1.jpg`;

  // Preload
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

  // Direct YouTube Tutorial
  const ytQuery = encodeURIComponent(`техника выполнения ${ex.name}`);
  document.getElementById("youtubeVideoLink").href = `https://www.youtube.com/results?search_query=${ytQuery}`;

  // Steps
  const stepsList = document.getElementById("exerciseStepsList");
  stepsList.innerHTML = (ex.steps || []).map(step => `<li>${step}</li>`).join("");

  // Mistakes
  const mistakesList = document.getElementById("exerciseMistakesList");
  mistakesList.innerHTML = (ex.mistakes || []).map(mistake => `<li>${mistake}</li>`).join("");

  // Anatomy & Breathing
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
// 10. Quick Log Modal (+)
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

  if (!isNaN(w) && w > 0) state.stats.weight = w;
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
// 11. Exercise Library / Catalog Modal
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
// 12. Settings / Program Modal
// ==========================================
function openSettingsModal() {
  document.getElementById("userSplitSelect").value = state.programId;
  document.getElementById("settingsModal").classList.remove("hidden");
  triggerHaptic("light");
}

function saveSettings() {
  const chosenProgram = document.getElementById("userSplitSelect").value;
  if (PROGRAMS[chosenProgram]) {
    state.programId = chosenProgram;
    state.selectedDayIdx = 0;
  }
  document.getElementById("settingsModal").classList.add("hidden");
  saveState();
  renderAll();
  triggerHaptic("success");
  showToast("Программа тренировок изменена!");
}
