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
    github_id: "Barbell_Bench_Press_-_Medium_Grip",
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

  // Exercise Video & Technique Modal
  document.getElementById("closeVideoModalBtn").addEventListener("click", () => closeExerciseVideoModal());
  document.getElementById("replayVideoBtn").addEventListener("click", () => {
    const v = document.getElementById("exerciseVideoElement");
    if (v) {
      v.currentTime = 0;
      v.play();
    }
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
      <div class="flex items-center gap-3 cursor-pointer flex-1 mr-2 open-video-trigger" data-ex-id="${ex.id}">
        <div class="w-8 h-8 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-xs font-black text-emerald-400 shrink-0">
          ${idx + 1}
        </div>
        <div>
          <h4 class="text-xs font-bold text-white hover:text-emerald-400 transition">${ex.name}</h4>
          <p class="text-[10px] text-slate-400">4 подхода • 8-12 повт. • ${ex.equipment}</p>
        </div>
      </div>
      <button class="px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-dark-950 transition info-btn flex items-center gap-1.5 text-xs font-bold shrink-0" title="Видео и техника">
        <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
        <span>Видео</span>
      </button>
    `;

    card.querySelector(".info-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openExerciseVideoModal(ex.id);
    });

    card.querySelector(".open-video-trigger").addEventListener("click", () => {
      openExerciseVideoModal(ex.id);
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
        <h3 class="text-xs font-black text-white hover:text-emerald-400 transition cursor-pointer active-ex-link" data-ex-id="${exItem.id}">
          ${exIdx + 1}. ${exItem.name}
        </h3>
        <button class="active-video-btn text-emerald-400 hover:text-white flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 transition" data-ex-id="${exItem.id}">
          <i data-lucide="play" class="w-3 h-3 fill-current"></i>
          <span>Видео</span>
        </button>
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

    card.querySelector(".active-ex-link").addEventListener("click", () => {
      openExerciseVideoModal(exItem.id);
    });
    card.querySelector(".active-video-btn").addEventListener("click", () => {
      openExerciseVideoModal(exItem.id);
    });

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

// Exercise Video & Technique Modal
function openExerciseVideoModal(exerciseId) {
  const ex = EXERCISES_DB.find(e => e.id === exerciseId);
  if (!ex) return;

  document.getElementById("videoExerciseTitle").textContent = ex.name;
  document.getElementById("videoExerciseMuscle").textContent = ex.muscle_ru;
  document.getElementById("videoEquipmentTag").textContent = `Оборудование: ${ex.equipment}`;

  // GitHub Exercise DB Images
  const ghId = ex.github_id || "Barbell_Bench_Press_-_Medium_Grip";
  const img0 = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ghId}/0.jpg`;
  const img1 = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ghId}/1.jpg`;

  // Preload images
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
      btn0.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-500 text-dark-950 shadow-sm transition";
      btn1.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-dark-800/90 text-slate-400 hover:text-white border border-dark-700/50 transition";
    } else {
      btn1.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-500 text-dark-950 shadow-sm transition";
      btn0.className = "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-dark-800/90 text-slate-400 hover:text-white border border-dark-700/50 transition";
    }
  }

  // Set initial phase
  setPhase(0);

  // Clear previous timer if any
  if (state.exercisePhaseTimer) clearInterval(state.exercisePhaseTimer);

  // Automatically cycle between Phase 0 and Phase 1 every 1250ms
  state.exercisePhaseTimer = setInterval(() => {
    setPhase(currentPhase === 0 ? 1 : 0);
  }, 1250);

  // Manual Phase button clicks
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

  // Direct YouTube search link
  const ytQuery = encodeURIComponent(`техника выполнения ${ex.name}`);
  document.getElementById("youtubeVideoLink").href = `https://www.youtube.com/results?search_query=${ytQuery}`;

  // Steps
  const stepsList = document.getElementById("exerciseStepsList");
  stepsList.innerHTML = "";
  (ex.steps || [
    "Примите устойчивое исходное положение, зафиксируйте корпус.",
    "На вдохе выполните подконтрольное движение по заданной траектории.",
    "На выдохе вернитесь в исходную точку, сделав пиковое сокращение."
  ]).forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  // Mistakes
  const mistakesList = document.getElementById("exerciseMistakesList");
  mistakesList.innerHTML = "";
  (ex.mistakes || [
    "Использование слишком тяжелого веса и читинг корпусом.",
    "Отсутствие контроля в негативной фазе движения.",
    "Задержка дыхания на максимальном усилии."
  ]).forEach(mistake => {
    const li = document.createElement("li");
    li.textContent = mistake;
    mistakesList.appendChild(li);
  });

  // Anatomy & Breathing
  document.getElementById("targetMusclesLabel").textContent = ex.primary || ex.muscle_ru;
  document.getElementById("synergistMusclesLabel").textContent = ex.secondary || "Кор, мышцы-стабилизаторы";
  document.getElementById("breathingLabel").textContent = ex.breathing || "Вдох при растяжении, выдох на сокращении";

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
    card.className = "bg-dark-850 p-3.5 rounded-2xl border border-dark-700/60 space-y-2 cursor-pointer hover:border-emerald-500/50 transition";
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-bold text-white hover:text-emerald-400 transition">${ex.name}</h4>
        <span class="text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">${ex.muscle_ru}</span>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-400">
        <span>Оборудование: ${ex.equipment}</span>
        <span class="text-emerald-400 flex items-center gap-1 font-bold text-[10px]">
          <i data-lucide="play" class="w-3 h-3 fill-current"></i> Смотреть видео
        </span>
      </div>
    `;
    card.addEventListener("click", () => {
      openExerciseVideoModal(ex.id);
    });
    container.appendChild(card);
  });

  lucide.createIcons();
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
