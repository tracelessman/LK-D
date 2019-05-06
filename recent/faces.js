const faces = [
  {
    no: 1,
    codes: "1F600",
    char: "😀",
    name: "grinning face",
    keywords: "face | grin | grinning face"
  },
  {
    no: 2,
    codes: "1F601",
    char: "😁",
    name: "beaming face with smiling eyes",
    keywords: "beaming face with smiling eyes | eye | face | grin | smile"
  },
  {
    no: 3,
    codes: "1F602",
    char: "😂",
    name: "face with tears of joy",
    keywords: "face | face with tears of joy | joy | laugh | tear"
  },
  {
    no: 4,
    codes: "1F923",
    char: "🤣",
    name: "rolling on the floor laughing",
    keywords: "face | floor | laugh | rolling | rolling on the floor laughing"
  },
  {
    no: 5,
    codes: "1F603",
    char: "😃",
    name: "grinning face with big eyes",
    keywords: "face | grinning face with big eyes | mouth | open | smile"
  },
  {
    no: 6,
    codes: "1F604",
    char: "😄",
    name: "grinning face with smiling eyes",
    keywords: "eye | face | grinning face with smiling eyes | mouth | open | smile"
  },
  {
    no: 7,
    codes: "1F605",
    char: "😅",
    name: "grinning face with sweat",
    keywords: "cold | face | grinning face with sweat | open | smile | sweat"
  },
  {
    no: 8,
    codes: "1F606",
    char: "😆",
    name: "grinning squinting face",
    keywords: "face | grinning squinting face | laugh | mouth | open | satisfied | smile"
  },
  {
    no: 9,
    codes: "1F609",
    char: "😉",
    name: "winking face",
    keywords: "face | wink | winking face"
  },
  {
    no: 10,
    codes: "1F60A",
    char: "😊",
    name: "smiling face with smiling eyes",
    keywords: "blush | eye | face | smile | smiling face with smiling eyes"
  },
  {
    no: 11,
    codes: "1F60B",
    char: "😋",
    name: "face savoring food",
    keywords: "delicious | face | face savoring food | savouring | smile | um | yum"
  },
  {
    no: 12,
    codes: "1F60E",
    char: "😎",
    name: "smiling face with sunglasses",
    keywords: "bright | cool | eye | eyewear | face | glasses | smile | smiling face with sunglasses | sun | sunglasses"
  },
  {
    no: 13,
    codes: "1F60D",
    char: "😍",
    name: "smiling face with heart-eyes",
    keywords: "eye | face | love | smile | smiling face with heart-eyes"
  },
  {
    no: 14,
    codes: "1F618",
    char: "😘",
    name: "face blowing a kiss",
    keywords: "face | face blowing a kiss | kiss"
  },
  {
    no: 16,
    codes: "1F617",
    char: "😗",
    name: "kissing face",
    keywords: "face | kiss | kissing face"
  },
  {
    no: 17,
    codes: "1F619",
    char: "😙",
    name: "kissing face with smiling eyes",
    keywords: "eye | face | kiss | kissing face with smiling eyes | smile"
  },
  {
    no: 18,
    codes: "1F61A",
    char: "😚",
    name: "kissing face with closed eyes",
    keywords: "closed | eye | face | kiss | kissing face with closed eyes"
  },
  {
    no: 20,
    codes: "1F642",
    char: "🙂",
    name: "slightly smiling face",
    keywords: "face | slightly smiling face | smile"
  },
  {
    no: 21,
    codes: "1F917",
    char: "🤗",
    name: "hugging face",
    keywords: "face | hug | hugging"
  },
  {
    no: 23,
    codes: "1F914",
    char: "🤔",
    name: "thinking face",
    keywords: "face | thinking"
  },
  {
    no: 25,
    codes: "1F610",
    char: "😐",
    name: "neutral face",
    keywords: "deadpan | face | neutral"
  },
  {
    no: 26,
    codes: "1F611",
    char: "😑",
    name: "expressionless face",
    keywords: "expressionless | face | inexpressive | unexpressive"
  },
  {
    no: 27,
    codes: "1F636",
    char: "😶",
    name: "face without mouth",
    keywords: "face | face without mouth | mouth | quiet | silent"
  },
  {
    no: 28,
    codes: "1F644",
    char: "🙄",
    name: "face with rolling eyes",
    keywords: "eyes | face | face with rolling eyes | rolling"
  },
  {
    no: 29,
    codes: "1F60F",
    char: "😏",
    name: "smirking face",
    keywords: "face | smirk | smirking face"
  },
  {
    no: 30,
    codes: "1F623",
    char: "😣",
    name: "persevering face",
    keywords: "face | persevere | persevering face"
  },
  {
    no: 31,
    codes: "1F625",
    char: "😥",
    name: "sad but relieved face",
    keywords: "disappointed | face | relieved | sad but relieved face | whew"
  },
  {
    no: 32,
    codes: "1F62E",
    char: "😮",
    name: "face with open mouth",
    keywords: "face | face with open mouth | mouth | open | sympathy"
  },
  {
    no: 33,
    codes: "1F910",
    char: "🤐",
    name: "zipper-mouth face",
    keywords: "face | mouth | zipper | zipper-mouth face"
  },
  {
    no: 34,
    codes: "1F62F",
    char: "😯",
    name: "hushed face",
    keywords: "face | hushed | stunned | surprised"
  },
  {
    no: 35,
    codes: "1F62A",
    char: "😪",
    name: "sleepy face",
    keywords: "face | sleep | sleepy face"
  },
  {
    no: 36,
    codes: "1F62B",
    char: "😫",
    name: "tired face",
    keywords: "face | tired"
  },
  {
    no: 37,
    codes: "1F634",
    char: "😴",
    name: "sleeping face",
    keywords: "face | sleep | sleeping face | zzz"
  },
  {
    no: 38,
    codes: "1F60C",
    char: "😌",
    name: "relieved face",
    keywords: "face | relieved"
  },
  {
    no: 39,
    codes: "1F61B",
    char: "😛",
    name: "face with tongue",
    keywords: "face | face with tongue | tongue"
  },
  {
    no: 40,
    codes: "1F61C",
    char: "😜",
    name: "winking face with tongue",
    keywords: "eye | face | joke | tongue | wink | winking face with tongue"
  },
  {
    no: 41,
    codes: "1F61D",
    char: "😝",
    name: "squinting face with tongue",
    keywords: "eye | face | horrible | squinting face with tongue | taste | tongue"
  },
  {
    no: 42,
    codes: "1F924",
    char: "🤤",
    name: "drooling face",
    keywords: "drooling | face"
  },
  {
    no: 43,
    codes: "1F612",
    char: "😒",
    name: "unamused face",
    keywords: "face | unamused | unhappy"
  },
  {
    no: 44,
    codes: "1F613",
    char: "😓",
    name: "downcast face with sweat",
    keywords: "cold | downcast face with sweat | face | sweat"
  },
  {
    no: 45,
    codes: "1F614",
    char: "😔",
    name: "pensive face",
    keywords: "dejected | face | pensive"
  },
  {
    no: 46,
    codes: "1F615",
    char: "😕",
    name: "confused face",
    keywords: "confused | face"
  },
  {
    no: 47,
    codes: "1F643",
    char: "🙃",
    name: "upside-down face",
    keywords: "face | upside-down"
  },
  {
    no: 48,
    codes: "1F911",
    char: "🤑",
    name: "money-mouth face",
    keywords: "face | money | money-mouth face | mouth"
  },
  {
    no: 49,
    codes: "1F632",
    char: "😲",
    name: "astonished face",
    keywords: "astonished | face | shocked | totally"
  },
  {
    no: 51,
    codes: "1F641",
    char: "🙁",
    name: "slightly frowning face",
    keywords: "face | frown | slightly frowning face"
  },
  {
    no: 52,
    codes: "1F616",
    char: "😖",
    name: "confounded face",
    keywords: "confounded | face"
  },
  {
    no: 53,
    codes: "1F61E",
    char: "😞",
    name: "disappointed face",
    keywords: "disappointed | face"
  },
  {
    no: 54,
    codes: "1F61F",
    char: "😟",
    name: "worried face",
    keywords: "face | worried"
  },
  {
    no: 55,
    codes: "1F624",
    char: "😤",
    name: "face with steam from nose",
    keywords: "face | face with steam from nose | triumph | won"
  },
  {
    no: 56,
    codes: "1F622",
    char: "😢",
    name: "crying face",
    keywords: "cry | crying face | face | sad | tear"
  },
  {
    no: 57,
    codes: "1F62D",
    char: "😭",
    name: "loudly crying face",
    keywords: "cry | face | loudly crying face | sad | sob | tear"
  },
  {
    no: 58,
    codes: "1F626",
    char: "😦",
    name: "frowning face with open mouth",
    keywords: "face | frown | frowning face with open mouth | mouth | open"
  },
  {
    no: 59,
    codes: "1F627",
    char: "😧",
    name: "anguished face",
    keywords: "anguished | face"
  },
  {
    no: 60,
    codes: "1F628",
    char: "😨",
    name: "fearful face",
    keywords: "face | fear | fearful | scared"
  },
  {
    no: 61,
    codes: "1F629",
    char: "😩",
    name: "weary face",
    keywords: "face | tired | weary"
  },
  {
    no: 63,
    codes: "1F62C",
    char: "😬",
    name: "grimacing face",
    keywords: "face | grimace | grimacing face"
  },
  {
    no: 64,
    codes: "1F630",
    char: "😰",
    name: "anxious face with sweat",
    keywords: "anxious face with sweat | blue | cold | face | mouth | open | rushed | sweat"
  },
  {
    no: 65,
    codes: "1F631",
    char: "😱",
    name: "face screaming in fear",
    keywords: "face | face screaming in fear | fear | fearful | munch | scared | scream"
  },
  {
    no: 68,
    codes: "1F633",
    char: "😳",
    name: "flushed face",
    keywords: "dazed | face | flushed"
  },
  {
    no: 70,
    codes: "1F635",
    char: "😵",
    name: "dizzy face",
    keywords: "dizzy | face"
  },
  {
    no: 71,
    codes: "1F621",
    char: "😡",
    name: "pouting face",
    keywords: "angry | face | mad | pouting | rage | red"
  },
  {
    no: 72,
    codes: "1F620",
    char: "😠",
    name: "angry face",
    keywords: "angry | face | mad"
  },
  {
    no: 74,
    codes: "1F637",
    char: "😷",
    name: "face with medical mask",
    keywords: "cold | doctor | face | face with medical mask | mask | medicine | sick"
  },
  {
    no: 75,
    codes: "1F912",
    char: "🤒",
    name: "face with thermometer",
    keywords: "face | face with thermometer | ill | sick | thermometer"
  },
  {
    no: 76,
    codes: "1F915",
    char: "🤕",
    name: "face with head-bandage",
    keywords: "bandage | face | face with head-bandage | hurt | injury"
  },
  {
    no: 77,
    codes: "1F922",
    char: "🤢",
    name: "nauseated face",
    keywords: "face | nauseated | vomit"
  },
  {
    no: 79,
    codes: "1F927",
    char: "🤧",
    name: "sneezing face",
    keywords: "face | gesundheit | sneeze | sneezing face"
  },
  {
    no: 80,
    codes: "1F607",
    char: "😇",
    name: "smiling face with halo",
    keywords: "angel | face | fairy tale | fantasy | halo | innocent | smile | smiling face with halo"
  },
  {
    no: 81,
    codes: "1F920",
    char: "🤠",
    name: "cowboy hat face",
    keywords: "cowboy | cowgirl | face | hat"
  },
  {
    no: 85,
    codes: "1F925",
    char: "🤥",
    name: "lying face",
    keywords: "face | lie | lying face | pinocchio"
  },
  {
    no: 89,
    codes: "1F913",
    char: "🤓",
    name: "nerd face",
    keywords: "face | geek | nerd"
  },
  {
    no: 90,
    codes: "1F608",
    char: "😈",
    name: "smiling face with horns",
    keywords: "face | fairy tale | fantasy | horns | smile | smiling face with horns"
  },
  {
    no: 91,
    codes: "1F47F",
    char: "👿",
    name: "angry face with horns",
    keywords: "angry face with horns | demon | devil | face | fairy tale | fantasy | imp"
  },
  {
    no: 92,
    codes: "1F921",
    char: "🤡",
    name: "clown face",
    keywords: "clown | face"
  },
  {
    no: 93,
    codes: "1F479",
    char: "👹",
    name: "ogre",
    keywords: "creature | face | fairy tale | fantasy | monster | ogre | troll"
  },
  {
    no: 94,
    codes: "1F47A",
    char: "👺",
    name: "goblin",
    keywords: "creature | face | fairy tale | fantasy | goblin | monster"
  },
  {
    no: 95,
    codes: "1F480",
    char: "💀",
    name: "skull",
    keywords: "death | face | fairy tale | monster | skull"
  },
  {
    no: 96,
    codes: "2620",
    char: "☠",
    name: "skull and crossbones",
    keywords: "crossbones | death | face | monster | skull | skull and crossbones"
  },
  {
    no: 97,
    codes: "1F47B",
    char: "👻",
    name: "ghost",
    keywords: "creature | face | fairy tale | fantasy | ghost | monster"
  },
  {
    no: 98,
    codes: "1F47D",
    char: "👽",
    name: "alien",
    keywords: "alien | creature | extraterrestrial | face | fairy tale | fantasy | monster | ufo"
  },
  {
    no: 99,
    codes: "1F47E",
    char: "👾",
    name: "alien monster",
    keywords: "alien | creature | extraterrestrial | face | fairy tale | fantasy | monster | ufo"
  },
  {
    no: 100,
    codes: "1F916",
    char: "🤖",
    name: "robot face",
    keywords: "face | monster | robot"
  },
  {
    no: 101,
    codes: "1F4A9",
    char: "💩",
    name: "pile of poo",
    keywords: "comic | dung | face | monster | pile of poo | poo | poop"
  },
  {
    no: 102,
    codes: "1F63A",
    char: "😺",
    name: "grinning cat face",
    keywords: "cat | face | grinning cat face | mouth | open | smile"
  },
  {
    no: 103,
    codes: "1F638",
    char: "😸",
    name: "grinning cat face with smiling eyes",
    keywords: "cat | eye | face | grin | grinning cat face with smiling eyes | smile"
  },
  {
    no: 104,
    codes: "1F639",
    char: "😹",
    name: "cat face with tears of joy",
    keywords: "cat | cat face with tears of joy | face | joy | tear"
  },
  {
    no: 105,
    codes: "1F63B",
    char: "😻",
    name: "smiling cat face with heart-eyes",
    keywords: "cat | eye | face | love | smile | smiling cat face with heart-eyes"
  },
  {
    no: 106,
    codes: "1F63C",
    char: "😼",
    name: "cat face with wry smile",
    keywords: "cat | cat face with wry smile | face | ironic | smile | wry"
  },
  {
    no: 107,
    codes: "1F63D",
    char: "😽",
    name: "kissing cat face",
    keywords: "cat | eye | face | kiss | kissing cat face"
  },
  {
    no: 108,
    codes: "1F640",
    char: "🙀",
    name: "weary cat face",
    keywords: "cat | face | oh | surprised | weary"
  },
  {
    no: 109,
    codes: "1F63F",
    char: "😿",
    name: "crying cat face",
    keywords: "cat | cry | crying cat face | face | sad | tear"
  },
  {
    no: 110,
    codes: "1F63E",
    char: "😾",
    name: "pouting cat face",
    keywords: "cat | face | pouting"
  },
  {
    no: 111,
    codes: "1F648",
    char: "🙈",
    name: "see-no-evil monkey",
    keywords: "evil | face | forbidden | gesture | monkey | no | not | prohibited | see | see-no-evil monkey"
  },
  {
    no: 112,
    codes: "1F649",
    char: "🙉",
    name: "hear-no-evil monkey",
    keywords: "evil | face | forbidden | gesture | hear | hear-no-evil monkey | monkey | no | not | prohibited"
  },
  {
    no: 113,
    codes: "1F64A",
    char: "🙊",
    name: "speak-no-evil monkey",
    keywords: "evil | face | forbidden | gesture | monkey | no | not | prohibited | speak | speak-no-evil monkey"
  },
  {
    no: 114,
    codes: "1F476",
    char: "👶",
    name: "baby",
    keywords: "baby | young"
  },
  {
    no: 116,
    codes: "1F466",
    char: "👦",
    name: "boy",
    keywords: "boy | young"
  },
  {
    no: 117,
    codes: "1F467",
    char: "👧",
    name: "girl",
    keywords: "girl | Virgo | young | zodiac"
  },
  {
    no: 119,
    codes: "1F468",
    char: "👨",
    name: "man",
    keywords: "man"
  },
  {
    no: 120,
    codes: "1F469",
    char: "👩",
    name: "woman",
    keywords: "woman"
  },
  {
    no: 122,
    codes: "1F474",
    char: "👴",
    name: "old man",
    keywords: "man | old"
  },
  {
    no: 123,
    codes: "1F475",
    char: "👵",
    name: "old woman",
    keywords: "old | woman"
  },
  {
    no: 124,
    codes: "1F468 200D 2695 FE0F",
    char: "👨‍⚕️",
    name: "man health worker",
    keywords: "doctor | healthcare | man | man health worker | nurse | therapist"
  },
  {
    no: 125,
    codes: "1F469 200D 2695 FE0F",
    char: "👩‍⚕️",
    name: "woman health worker",
    keywords: "doctor | healthcare | nurse | therapist | woman | woman health worker"
  },
  {
    no: 126,
    codes: "1F468 200D 1F393",
    char: "👨‍🎓",
    name: "man student",
    keywords: "graduate | man | student"
  },
  {
    no: 127,
    codes: "1F469 200D 1F393",
    char: "👩‍🎓",
    name: "woman student",
    keywords: "graduate | student | woman"
  },
  {
    no: 128,
    codes: "1F468 200D 1F3EB",
    char: "👨‍🏫",
    name: "man teacher",
    keywords: "instructor | man | professor | teacher"
  },
  {
    no: 129,
    codes: "1F469 200D 1F3EB",
    char: "👩‍🏫",
    name: "woman teacher",
    keywords: "instructor | professor | teacher | woman"
  },
  {
    no: 130,
    codes: "1F468 200D 2696 FE0F",
    char: "👨‍⚖️",
    name: "man judge",
    keywords: "justice | man | man judge | scales"
  },
  {
    no: 131,
    codes: "1F469 200D 2696 FE0F",
    char: "👩‍⚖️",
    name: "woman judge",
    keywords: "judge | scales | woman"
  },
  {
    no: 132,
    codes: "1F468 200D 1F33E",
    char: "👨‍🌾",
    name: "man farmer",
    keywords: "farmer | gardener | man | rancher"
  },
  {
    no: 133,
    codes: "1F469 200D 1F33E",
    char: "👩‍🌾",
    name: "woman farmer",
    keywords: "farmer | gardener | rancher | woman"
  },
  {
    no: 134,
    codes: "1F468 200D 1F373",
    char: "👨‍🍳",
    name: "man cook",
    keywords: "chef | cook | man"
  },
  {
    no: 135,
    codes: "1F469 200D 1F373",
    char: "👩‍🍳",
    name: "woman cook",
    keywords: "chef | cook | woman"
  },
  {
    no: 136,
    codes: "1F468 200D 1F527",
    char: "👨‍🔧",
    name: "man mechanic",
    keywords: "electrician | man | mechanic | plumber | tradesperson"
  },
  {
    no: 137,
    codes: "1F469 200D 1F527",
    char: "👩‍🔧",
    name: "woman mechanic",
    keywords: "electrician | mechanic | plumber | tradesperson | woman"
  },
  {
    no: 138,
    codes: "1F468 200D 1F3ED",
    char: "👨‍🏭",
    name: "man factory worker",
    keywords: "assembly | factory | industrial | man | worker"
  },
  {
    no: 139,
    codes: "1F469 200D 1F3ED",
    char: "👩‍🏭",
    name: "woman factory worker",
    keywords: "assembly | factory | industrial | woman | worker"
  },
  {
    no: 140,
    codes: "1F468 200D 1F4BC",
    char: "👨‍💼",
    name: "man office worker",
    keywords: "architect | business | man | man office worker | manager | office | white-collar"
  },
  {
    no: 141,
    codes: "1F469 200D 1F4BC",
    char: "👩‍💼",
    name: "woman office worker",
    keywords: "architect | business | manager | office | white-collar | woman | woman office worker"
  },
  {
    no: 142,
    codes: "1F468 200D 1F52C",
    char: "👨‍🔬",
    name: "man scientist",
    keywords: "biologist | chemist | engineer | man | mathematician | physicist | scientist"
  },
  {
    no: 143,
    codes: "1F469 200D 1F52C",
    char: "👩‍🔬",
    name: "woman scientist",
    keywords: "biologist | chemist | engineer | mathematician | physicist | scientist | woman"
  },
  {
    no: 144,
    codes: "1F468 200D 1F4BB",
    char: "👨‍💻",
    name: "man technologist",
    keywords: "coder | developer | inventor | man | software | technologist"
  },
  {
    no: 145,
    codes: "1F469 200D 1F4BB",
    char: "👩‍💻",
    name: "woman technologist",
    keywords: "coder | developer | inventor | software | technologist | woman"
  },
  {
    no: 146,
    codes: "1F468 200D 1F3A4",
    char: "👨‍🎤",
    name: "man singer",
    keywords: "actor | entertainer | man | rock | singer | star"
  },
  {
    no: 147,
    codes: "1F469 200D 1F3A4",
    char: "👩‍🎤",
    name: "woman singer",
    keywords: "actor | entertainer | rock | singer | star | woman"
  },
  {
    no: 148,
    codes: "1F468 200D 1F3A8",
    char: "👨‍🎨",
    name: "man artist",
    keywords: "artist | man | palette"
  },
  {
    no: 149,
    codes: "1F469 200D 1F3A8",
    char: "👩‍🎨",
    name: "woman artist",
    keywords: "artist | palette | woman"
  },
  {
    no: 150,
    codes: "1F468 200D 2708 FE0F",
    char: "👨‍✈️",
    name: "man pilot",
    keywords: "man | pilot | plane"
  },
  {
    no: 151,
    codes: "1F469 200D 2708 FE0F",
    char: "👩‍✈️",
    name: "woman pilot",
    keywords: "pilot | plane | woman"
  },
  {
    no: 152,
    codes: "1F468 200D 1F680",
    char: "👨‍🚀",
    name: "man astronaut",
    keywords: "astronaut | man | rocket"
  },
  {
    no: 153,
    codes: "1F469 200D 1F680",
    char: "👩‍🚀",
    name: "woman astronaut",
    keywords: "astronaut | rocket | woman"
  },
  {
    no: 154,
    codes: "1F468 200D 1F692",
    char: "👨‍🚒",
    name: "man firefighter",
    keywords: "firefighter | firetruck | man"
  },
  {
    no: 155,
    codes: "1F469 200D 1F692",
    char: "👩‍🚒",
    name: "woman firefighter",
    keywords: "firefighter | firetruck | woman"
  },
  {
    no: 156,
    codes: "1F46E",
    char: "👮",
    name: "police officer",
    keywords: "cop | officer | police"
  },
  {
    no: 157,
    codes: "1F46E 200D 2642 FE0F",
    char: "👮‍♂️",
    name: "man police officer",
    keywords: "cop | man | officer | police"
  },
  {
    no: 158,
    codes: "1F46E 200D 2640 FE0F",
    char: "👮‍♀️",
    name: "woman police officer",
    keywords: "cop | officer | police | woman"
  },
  {
    no: 159,
    codes: "1F575",
    char: "🕵",
    name: "detective",
    keywords: "detective | sleuth | spy"
  },
  {
    no: 160,
    codes: "1F575 FE0F 200D 2642 FE0F",
    char: "🕵️‍♂️",
    name: "man detective",
    keywords: "detective | man | sleuth | spy"
  },
  {
    no: 161,
    codes: "1F575 FE0F 200D 2640 FE0F",
    char: "🕵️‍♀️",
    name: "woman detective",
    keywords: "detective | sleuth | spy | woman"
  },
  {
    no: 162,
    codes: "1F482",
    char: "💂",
    name: "guard",
    keywords: "guard"
  },
  {
    no: 163,
    codes: "1F482 200D 2642 FE0F",
    char: "💂‍♂️",
    name: "man guard",
    keywords: "guard | man"
  },
  {
    no: 164,
    codes: "1F482 200D 2640 FE0F",
    char: "💂‍♀️",
    name: "woman guard",
    keywords: "guard | woman"
  },
  {
    no: 165,
    codes: "1F477",
    char: "👷",
    name: "construction worker",
    keywords: "construction | hat | worker"
  },
  {
    no: 166,
    codes: "1F477 200D 2642 FE0F",
    char: "👷‍♂️",
    name: "man construction worker",
    keywords: "construction | man | worker"
  },
  {
    no: 167,
    codes: "1F477 200D 2640 FE0F",
    char: "👷‍♀️",
    name: "woman construction worker",
    keywords: "construction | woman | worker"
  },
  {
    no: 168,
    codes: "1F934",
    char: "🤴",
    name: "prince",
    keywords: "prince"
  },
  {
    no: 169,
    codes: "1F478",
    char: "👸",
    name: "princess",
    keywords: "fairy tale | fantasy | princess"
  },
  {
    no: 170,
    codes: "1F473",
    char: "👳",
    name: "person wearing turban",
    keywords: "person wearing turban | turban"
  },
  {
    no: 171,
    codes: "1F473 200D 2642 FE0F",
    char: "👳‍♂️",
    name: "man wearing turban",
    keywords: "man | man wearing turban | turban"
  },
  {
    no: 172,
    codes: "1F473 200D 2640 FE0F",
    char: "👳‍♀️",
    name: "woman wearing turban",
    keywords: "turban | woman | woman wearing turban"
  },
  {
    no: 173,
    codes: "1F472",
    char: "👲",
    name: "man with Chinese cap",
    keywords: "gua pi mao | hat | man | man with Chinese cap"
  },
  {
    no: 174,
    codes: "1F9D5",
    char: "🧕",
    name: "woman with headscarf",
    keywords: "headscarf | hijab | mantilla | tichel | woman with headscarf | bandana | head kerchief"
  },
  {
    no: 175,
    codes: "1F9D4",
    char: "🧔",
    name: "bearded person",
    keywords: "beard | bearded person | bewhiskered"
  },
  {
    no: 176,
    codes: "1F471",
    char: "👱",
    name: "blond-haired person",
    keywords: "blond | blond-haired person"
  },
  {
    no: 177,
    codes: "1F471 200D 2642 FE0F",
    char: "👱‍♂️",
    name: "blond-haired man",
    keywords: "blond | blond-haired man | man"
  },
  {
    no: 178,
    codes: "1F471 200D 2640 FE0F",
    char: "👱‍♀️",
    name: "blond-haired woman",
    keywords: "blond-haired woman | blonde | woman"
  },
  {
    no: 179,
    codes: "1F468 200D 1F9B0",
    char: "👨‍🦰",
    name: "⊛ man, red haired",
    keywords: ""
  },
  {
    no: 180,
    codes: "1F469 200D 1F9B0",
    char: "👩‍🦰",
    name: "⊛ woman, red haired",
    keywords: ""
  },
  {
    no: 181,
    codes: "1F468 200D 1F9B1",
    char: "👨‍🦱",
    name: "⊛ man, curly haired",
    keywords: ""
  },
  {
    no: 182,
    codes: "1F469 200D 1F9B1",
    char: "👩‍🦱",
    name: "⊛ woman, curly haired",
    keywords: ""
  },
  {
    no: 183,
    codes: "1F468 200D 1F9B2",
    char: "👨‍🦲",
    name: "⊛ man, bald",
    keywords: ""
  },
  {
    no: 184,
    codes: "1F469 200D 1F9B2",
    char: "👩‍🦲",
    name: "⊛ woman, bald",
    keywords: ""
  },
  {
    no: 185,
    codes: "1F468 200D 1F9B3",
    char: "👨‍🦳",
    name: "⊛ man, white haired",
    keywords: ""
  },
  {
    no: 186,
    codes: "1F469 200D 1F9B3",
    char: "👩‍🦳",
    name: "⊛ woman, white haired",
    keywords: ""
  },
  {
    no: 187,
    codes: "1F935",
    char: "🤵",
    name: "man in tuxedo",
    keywords: "groom | man | man in tuxedo | tuxedo"
  },
  {
    no: 188,
    codes: "1F470",
    char: "👰",
    name: "bride with veil",
    keywords: "bride | bride with veil | veil | wedding"
  },
  {
    no: 189,
    codes: "1F930",
    char: "🤰",
    name: "pregnant woman",
    keywords: "pregnant | woman"
  },
  {
    no: 190,
    codes: "1F931",
    char: "🤱",
    name: "breast-feeding",
    keywords: "baby | breast | breast-feeding | nursing"
  },
  {
    no: 191,
    codes: "1F47C",
    char: "👼",
    name: "baby angel",
    keywords: "angel | baby | face | fairy tale | fantasy"
  },
  {
    no: 192,
    codes: "1F385",
    char: "🎅",
    name: "Santa Claus",
    keywords: "celebration | Christmas | claus | father | santa | Santa Claus"
  },
  {
    no: 193,
    codes: "1F936",
    char: "🤶",
    name: "Mrs. Claus",
    keywords: "celebration | Christmas | claus | mother | Mrs. | Mrs. Claus"
  },
  {
    no: 194,
    codes: "1F9B8",
    char: "🦸",
    name: "⊛ superhero",
    keywords: "good | hero | heroine | superpowers"
  },
  {
    no: 195,
    codes: "1F9B8 200D 2640 FE0F",
    char: "🦸‍♀️",
    name: "⊛ woman superhero",
    keywords: ""
  },
  {
    no: 196,
    codes: "1F9B8 200D 2642 FE0F",
    char: "🦸‍♂️",
    name: "⊛ man superhero",
    keywords: ""
  },
  {
    no: 197,
    codes: "1F9B9",
    char: "🦹",
    name: "⊛ supervillain",
    keywords: "bad | criminal | evil | superpowers | villain"
  },
  {
    no: 198,
    codes: "1F9B9 200D 2640 FE0F",
    char: "🦹‍♀️",
    name: "⊛ woman supervillain",
    keywords: ""
  },
  {
    no: 199,
    codes: "1F9B9 200D 2642 FE0F",
    char: "🦹‍♂️",
    name: "⊛ man supervillain",
    keywords: ""
  },
  {
    no: 200,
    codes: "1F9D9",
    char: "🧙",
    name: "mage",
    keywords: "mage | sorcerer | sorceress | witch | wizard"
  },
  {
    no: 201,
    codes: "1F9D9 200D 2640 FE0F",
    char: "🧙‍♀️",
    name: "woman mage",
    keywords: "sorceress | witch | woman mage"
  },
  {
    no: 202,
    codes: "1F9D9 200D 2642 FE0F",
    char: "🧙‍♂️",
    name: "man mage",
    keywords: "man mage | sorcerer | wizard"
  },
  {
    no: 203,
    codes: "1F9DA",
    char: "🧚",
    name: "fairy",
    keywords: "fairy | Oberon | Puck | Titania"
  },
  {
    no: 204,
    codes: "1F9DA 200D 2640 FE0F",
    char: "🧚‍♀️",
    name: "woman fairy",
    keywords: "Titania | woman fairy"
  },
  {
    no: 205,
    codes: "1F9DA 200D 2642 FE0F",
    char: "🧚‍♂️",
    name: "man fairy",
    keywords: "man fairy | Oberon | Puck"
  },
  {
    no: 206,
    codes: "1F9DB",
    char: "🧛",
    name: "vampire",
    keywords: "Dracula | undead | vampire"
  },
  {
    no: 207,
    codes: "1F9DB 200D 2640 FE0F",
    char: "🧛‍♀️",
    name: "woman vampire",
    keywords: "undead | woman vampire"
  },
  {
    no: 208,
    codes: "1F9DB 200D 2642 FE0F",
    char: "🧛‍♂️",
    name: "man vampire",
    keywords: "Dracula | man vampire | undead"
  },
  {
    no: 209,
    codes: "1F9DC",
    char: "🧜",
    name: "merperson",
    keywords: "mermaid | merman | merperson | merwoman"
  },
  {
    no: 210,
    codes: "1F9DC 200D 2640 FE0F",
    char: "🧜‍♀️",
    name: "mermaid",
    keywords: "mermaid | merwoman"
  },
  {
    no: 211,
    codes: "1F9DC 200D 2642 FE0F",
    char: "🧜‍♂️",
    name: "merman",
    keywords: "merman | Triton"
  },
  {
    no: 212,
    codes: "1F9DD",
    char: "🧝",
    name: "elf",
    keywords: "elf | magical | LOTR style"
  },
  {
    no: 213,
    codes: "1F9DD 200D 2640 FE0F",
    char: "🧝‍♀️",
    name: "woman elf",
    keywords: "magical | woman elf"
  },
  {
    no: 214,
    codes: "1F9DD 200D 2642 FE0F",
    char: "🧝‍♂️",
    name: "man elf",
    keywords: "magical | man elf"
  },
  {
    no: 215,
    codes: "1F9DE",
    char: "🧞",
    name: "genie",
    keywords: "djinn | genie | (non-human color)"
  },
  {
    no: 216,
    codes: "1F9DE 200D 2640 FE0F",
    char: "🧞‍♀️",
    name: "woman genie",
    keywords: "djinn | woman genie"
  },
  {
    no: 217,
    codes: "1F9DE 200D 2642 FE0F",
    char: "🧞‍♂️",
    name: "man genie",
    keywords: "djinn | man genie"
  },
  {
    no: 218,
    codes: "1F9DF",
    char: "🧟",
    name: "zombie",
    keywords: "undead | walking dead | zombie | (non-human color)"
  },
  {
    no: 219,
    codes: "1F9DF 200D 2640 FE0F",
    char: "🧟‍♀️",
    name: "woman zombie",
    keywords: "undead | walking dead | woman zombie"
  },
  {
    no: 220,
    codes: "1F9DF 200D 2642 FE0F",
    char: "🧟‍♂️",
    name: "man zombie",
    keywords: "man zombie | undead | walking dead"
  },
  {
    no: 221,
    codes: "1F64D",
    char: "🙍",
    name: "person frowning",
    keywords: "frown | gesture | person frowning"
  },
  {
    no: 222,
    codes: "1F64D 200D 2642 FE0F",
    char: "🙍‍♂️",
    name: "man frowning",
    keywords: "frowning | gesture | man"
  },
  {
    no: 223,
    codes: "1F64D 200D 2640 FE0F",
    char: "🙍‍♀️",
    name: "woman frowning",
    keywords: "frowning | gesture | woman"
  },
  {
    no: 224,
    codes: "1F64E",
    char: "🙎",
    name: "person pouting",
    keywords: "gesture | person pouting | pouting"
  },
  {
    no: 225,
    codes: "1F64E 200D 2642 FE0F",
    char: "🙎‍♂️",
    name: "man pouting",
    keywords: "gesture | man | pouting"
  },
  {
    no: 226,
    codes: "1F64E 200D 2640 FE0F",
    char: "🙎‍♀️",
    name: "woman pouting",
    keywords: "gesture | pouting | woman"
  },
  {
    no: 227,
    codes: "1F645",
    char: "🙅",
    name: "person gesturing NO",
    keywords: "forbidden | gesture | hand | no | not | person gesturing NO | prohibited"
  },
  {
    no: 228,
    codes: "1F645 200D 2642 FE0F",
    char: "🙅‍♂️",
    name: "man gesturing NO",
    keywords: "forbidden | gesture | hand | man | man gesturing NO | no | prohibited"
  },
  {
    no: 229,
    codes: "1F645 200D 2640 FE0F",
    char: "🙅‍♀️",
    name: "woman gesturing NO",
    keywords: "forbidden | gesture | hand | no | prohibited | woman | woman gesturing NO"
  },
  {
    no: 230,
    codes: "1F646",
    char: "🙆",
    name: "person gesturing OK",
    keywords: "gesture | hand | OK | person gesturing OK"
  },
  {
    no: 231,
    codes: "1F646 200D 2642 FE0F",
    char: "🙆‍♂️",
    name: "man gesturing OK",
    keywords: "gesture | hand | man | man gesturing OK | OK"
  },
  {
    no: 232,
    codes: "1F646 200D 2640 FE0F",
    char: "🙆‍♀️",
    name: "woman gesturing OK",
    keywords: "gesture | hand | OK | woman | woman gesturing OK"
  },
  {
    no: 233,
    codes: "1F481",
    char: "💁",
    name: "person tipping hand",
    keywords: "hand | help | information | person tipping hand | sassy | tipping"
  },
  {
    no: 234,
    codes: "1F481 200D 2642 FE0F",
    char: "💁‍♂️",
    name: "man tipping hand",
    keywords: "man | man tipping hand | sassy | tipping hand"
  },
  {
    no: 235,
    codes: "1F481 200D 2640 FE0F",
    char: "💁‍♀️",
    name: "woman tipping hand",
    keywords: "sassy | tipping hand | woman | woman tipping hand"
  },
  {
    no: 236,
    codes: "1F64B",
    char: "🙋",
    name: "person raising hand",
    keywords: "gesture | hand | happy | person raising hand | raised"
  },
  {
    no: 237,
    codes: "1F64B 200D 2642 FE0F",
    char: "🙋‍♂️",
    name: "man raising hand",
    keywords: "gesture | man | man raising hand | raising hand"
  },
  {
    no: 238,
    codes: "1F64B 200D 2640 FE0F",
    char: "🙋‍♀️",
    name: "woman raising hand",
    keywords: "gesture | raising hand | woman | woman raising hand"
  },
  {
    no: 239,
    codes: "1F647",
    char: "🙇",
    name: "person bowing",
    keywords: "apology | bow | gesture | person bowing | sorry"
  },
  {
    no: 240,
    codes: "1F647 200D 2642 FE0F",
    char: "🙇‍♂️",
    name: "man bowing",
    keywords: "apology | bowing | favor | gesture | man | sorry"
  },
  {
    no: 241,
    codes: "1F647 200D 2640 FE0F",
    char: "🙇‍♀️",
    name: "woman bowing",
    keywords: "apology | bowing | favor | gesture | sorry | woman"
  },
  {
    no: 242,
    codes: "1F926",
    char: "🤦",
    name: "person facepalming",
    keywords: "disbelief | exasperation | face | palm | person facepalming"
  },
  {
    no: 243,
    codes: "1F926 200D 2642 FE0F",
    char: "🤦‍♂️",
    name: "man facepalming",
    keywords: "disbelief | exasperation | facepalm | man | man facepalming"
  },
  {
    no: 244,
    codes: "1F926 200D 2640 FE0F",
    char: "🤦‍♀️",
    name: "woman facepalming",
    keywords: "disbelief | exasperation | facepalm | woman | woman facepalming"
  },
  {
    no: 245,
    codes: "1F937",
    char: "🤷",
    name: "person shrugging",
    keywords: "doubt | ignorance | indifference | person shrugging | shrug"
  },
  {
    no: 246,
    codes: "1F937 200D 2642 FE0F",
    char: "🤷‍♂️",
    name: "man shrugging",
    keywords: "doubt | ignorance | indifference | man | man shrugging | shrug"
  },
  {
    no: 247,
    codes: "1F937 200D 2640 FE0F",
    char: "🤷‍♀️",
    name: "woman shrugging",
    keywords: "doubt | ignorance | indifference | shrug | woman | woman shrugging"
  },
  {
    no: 248,
    codes: "1F486",
    char: "💆",
    name: "person getting massage",
    keywords: "face | massage | person getting massage | salon"
  },
  {
    no: 249,
    codes: "1F486 200D 2642 FE0F",
    char: "💆‍♂️",
    name: "man getting massage",
    keywords: "face | man | man getting massage | massage"
  },
  {
    no: 250,
    codes: "1F486 200D 2640 FE0F",
    char: "💆‍♀️",
    name: "woman getting massage",
    keywords: "face | massage | woman | woman getting massage"
  },
  {
    no: 251,
    codes: "1F487",
    char: "💇",
    name: "person getting haircut",
    keywords: "barber | beauty | haircut | parlor | person getting haircut"
  },
  {
    no: 252,
    codes: "1F487 200D 2642 FE0F",
    char: "💇‍♂️",
    name: "man getting haircut",
    keywords: "haircut | man | man getting haircut"
  },
  {
    no: 253,
    codes: "1F487 200D 2640 FE0F",
    char: "💇‍♀️",
    name: "woman getting haircut",
    keywords: "haircut | woman | woman getting haircut"
  },
  {
    no: 254,
    codes: "1F6B6",
    char: "🚶",
    name: "person walking",
    keywords: "hike | person walking | walk | walking"
  },
  {
    no: 255,
    codes: "1F6B6 200D 2642 FE0F",
    char: "🚶‍♂️",
    name: "man walking",
    keywords: "hike | man | man walking | walk"
  },
  {
    no: 256,
    codes: "1F6B6 200D 2640 FE0F",
    char: "🚶‍♀️",
    name: "woman walking",
    keywords: "hike | walk | woman | woman walking"
  },
  {
    no: 257,
    codes: "1F3C3",
    char: "🏃",
    name: "person running",
    keywords: "marathon | person running | running"
  },
  {
    no: 258,
    codes: "1F3C3 200D 2642 FE0F",
    char: "🏃‍♂️",
    name: "man running",
    keywords: "man | marathon | racing | running"
  },
  {
    no: 259,
    codes: "1F3C3 200D 2640 FE0F",
    char: "🏃‍♀️",
    name: "woman running",
    keywords: "marathon | racing | running | woman"
  },
  {
    no: 260,
    codes: "1F483",
    char: "💃",
    name: "woman dancing",
    keywords: "dancing | woman"
  },
  {
    no: 261,
    codes: "1F57A",
    char: "🕺",
    name: "man dancing",
    keywords: "dance | man | man dancing"
  },
  {
    no: 262,
    codes: "1F46F",
    char: "👯",
    name: "people with bunny ears",
    keywords: "bunny ear | dancer | partying | people with bunny ears"
  },
  {
    no: 263,
    codes: "1F46F 200D 2642 FE0F",
    char: "👯‍♂️",
    name: "men with bunny ears",
    keywords: "bunny ear | dancer | men | men with bunny ears | partying"
  },
  {
    no: 264,
    codes: "1F46F 200D 2640 FE0F",
    char: "👯‍♀️",
    name: "women with bunny ears",
    keywords: "bunny ear | dancer | partying | women | women with bunny ears"
  },
  {
    no: 265,
    codes: "1F9D6",
    char: "🧖",
    name: "person in steamy room",
    keywords: "person in steamy room | sauna | steam room | hamam | steambath"
  },
  {
    no: 266,
    codes: "1F9D6 200D 2640 FE0F",
    char: "🧖‍♀️",
    name: "woman in steamy room",
    keywords: "sauna | steam room | woman in steamy room"
  },
  {
    no: 267,
    codes: "1F9D6 200D 2642 FE0F",
    char: "🧖‍♂️",
    name: "man in steamy room",
    keywords: "man in steamy room | sauna | steam room"
  },
  {
    no: 268,
    codes: "1F9D7",
    char: "🧗",
    name: "person climbing",
    keywords: "climber | person climbing"
  },
  {
    no: 269,
    codes: "1F9D7 200D 2640 FE0F",
    char: "🧗‍♀️",
    name: "woman climbing",
    keywords: "climber | woman climbing"
  },
  {
    no: 270,
    codes: "1F9D7 200D 2642 FE0F",
    char: "🧗‍♂️",
    name: "man climbing",
    keywords: "climber | man climbing"
  },
  {
    no: 271,
    codes: "1F9D8",
    char: "🧘",
    name: "person in lotus position",
    keywords: "meditation | person in lotus position | yoga | serenity"
  },
  {
    no: 272,
    codes: "1F9D8 200D 2640 FE0F",
    char: "🧘‍♀️",
    name: "woman in lotus position",
    keywords: "meditation | woman in lotus position | yoga"
  },
  {
    no: 273,
    codes: "1F9D8 200D 2642 FE0F",
    char: "🧘‍♂️",
    name: "man in lotus position",
    keywords: "man in lotus position | meditation | yoga"
  },
  {
    no: 274,
    codes: "1F6C0",
    char: "🛀",
    name: "person taking bath",
    keywords: "bath | bathtub | person taking bath"
  },
  {
    no: 275,
    codes: "1F6CC",
    char: "🛌",
    name: "person in bed",
    keywords: "hotel | person in bed | sleep"
  },
  {
    no: 276,
    codes: "1F574",
    char: "🕴",
    name: "man in suit levitating",
    keywords: "business | man | man in suit levitating | suit"
  },
  {
    no: 277,
    codes: "1F5E3",
    char: "🗣",
    name: "speaking head",
    keywords: "face | head | silhouette | speak | speaking"
  },
  {
    no: 278,
    codes: "1F464",
    char: "👤",
    name: "bust in silhouette",
    keywords: "bust | bust in silhouette | silhouette"
  },
  {
    no: 279,
    codes: "1F465",
    char: "👥",
    name: "busts in silhouette",
    keywords: "bust | busts in silhouette | silhouette"
  },
  {
    no: 280,
    codes: "1F93A",
    char: "🤺",
    name: "person fencing",
    keywords: "fencer | fencing | person fencing | sword"
  },
  {
    no: 281,
    codes: "1F3C7",
    char: "🏇",
    name: "horse racing",
    keywords: "horse | jockey | racehorse | racing"
  },
  {
    no: 282,
    codes: "26F7",
    char: "⛷",
    name: "skier",
    keywords: "ski | skier | snow"
  },
  {
    no: 283,
    codes: "1F3C2",
    char: "🏂",
    name: "snowboarder",
    keywords: "ski | snow | snowboard | snowboarder"
  },
  {
    no: 284,
    codes: "1F3CC",
    char: "🏌",
    name: "person golfing",
    keywords: "ball | golf | person golfing"
  },
  {
    no: 285,
    codes: "1F3CC FE0F 200D 2642 FE0F",
    char: "🏌️‍♂️",
    name: "man golfing",
    keywords: "golf | man | man golfing"
  },
  {
    no: 286,
    codes: "1F3CC FE0F 200D 2640 FE0F",
    char: "🏌️‍♀️",
    name: "woman golfing",
    keywords: "golf | woman | woman golfing"
  },
  {
    no: 287,
    codes: "1F3C4",
    char: "🏄",
    name: "person surfing",
    keywords: "person surfing | surfing"
  },
  {
    no: 288,
    codes: "1F3C4 200D 2642 FE0F",
    char: "🏄‍♂️",
    name: "man surfing",
    keywords: "man | surfing"
  },
  {
    no: 289,
    codes: "1F3C4 200D 2640 FE0F",
    char: "🏄‍♀️",
    name: "woman surfing",
    keywords: "surfing | woman"
  },
  {
    no: 290,
    codes: "1F6A3",
    char: "🚣",
    name: "person rowing boat",
    keywords: "boat | person rowing boat | rowboat"
  },
  {
    no: 291,
    codes: "1F6A3 200D 2642 FE0F",
    char: "🚣‍♂️",
    name: "man rowing boat",
    keywords: "boat | man | man rowing boat | rowboat"
  },
  {
    no: 292,
    codes: "1F6A3 200D 2640 FE0F",
    char: "🚣‍♀️",
    name: "woman rowing boat",
    keywords: "boat | rowboat | woman | woman rowing boat"
  },
  {
    no: 293,
    codes: "1F3CA",
    char: "🏊",
    name: "person swimming",
    keywords: "person swimming | swim"
  },
  {
    no: 294,
    codes: "1F3CA 200D 2642 FE0F",
    char: "🏊‍♂️",
    name: "man swimming",
    keywords: "man | man swimming | swim"
  },
  {
    no: 295,
    codes: "1F3CA 200D 2640 FE0F",
    char: "🏊‍♀️",
    name: "woman swimming",
    keywords: "swim | woman | woman swimming"
  },
  {
    no: 296,
    codes: "26F9",
    char: "⛹",
    name: "person bouncing ball",
    keywords: "ball | person bouncing ball"
  },
  {
    no: 297,
    codes: "26F9 FE0F 200D 2642 FE0F",
    char: "⛹️‍♂️",
    name: "man bouncing ball",
    keywords: "ball | man | man bouncing ball"
  },
  {
    no: 298,
    codes: "26F9 FE0F 200D 2640 FE0F",
    char: "⛹️‍♀️",
    name: "woman bouncing ball",
    keywords: "ball | woman | woman bouncing ball"
  },
  {
    no: 299,
    codes: "1F3CB",
    char: "🏋",
    name: "person lifting weights",
    keywords: "lifter | person lifting weights | weight"
  },
  {
    no: 300,
    codes: "1F3CB FE0F 200D 2642 FE0F",
    char: "🏋️‍♂️",
    name: "man lifting weights",
    keywords: "man | man lifting weights | weight lifter"
  },
  {
    no: 301,
    codes: "1F3CB FE0F 200D 2640 FE0F",
    char: "🏋️‍♀️",
    name: "woman lifting weights",
    keywords: "weight lifter | woman | woman lifting weights"
  },
  {
    no: 302,
    codes: "1F6B4",
    char: "🚴",
    name: "person biking",
    keywords: "bicycle | biking | cyclist | person biking"
  },
  {
    no: 303,
    codes: "1F6B4 200D 2642 FE0F",
    char: "🚴‍♂️",
    name: "man biking",
    keywords: "bicycle | biking | cyclist | man"
  },
  {
    no: 304,
    codes: "1F6B4 200D 2640 FE0F",
    char: "🚴‍♀️",
    name: "woman biking",
    keywords: "bicycle | biking | cyclist | woman"
  },
  {
    no: 305,
    codes: "1F6B5",
    char: "🚵",
    name: "person mountain biking",
    keywords: "bicycle | bicyclist | bike | cyclist | mountain | person mountain biking"
  },
  {
    no: 306,
    codes: "1F6B5 200D 2642 FE0F",
    char: "🚵‍♂️",
    name: "man mountain biking",
    keywords: "bicycle | bike | cyclist | man | man mountain biking | mountain"
  },
  {
    no: 307,
    codes: "1F6B5 200D 2640 FE0F",
    char: "🚵‍♀️",
    name: "woman mountain biking",
    keywords: "bicycle | bike | biking | cyclist | mountain | woman"
  },
  {
    no: 308,
    codes: "1F3CE",
    char: "🏎",
    name: "racing car",
    keywords: "car | racing"
  },
  {
    no: 309,
    codes: "1F3CD",
    char: "🏍",
    name: "motorcycle",
    keywords: "motorcycle | racing"
  },
  {
    no: 310,
    codes: "1F938",
    char: "🤸",
    name: "person cartwheeling",
    keywords: "cartwheel | gymnastics | person cartwheeling"
  },
  {
    no: 311,
    codes: "1F938 200D 2642 FE0F",
    char: "🤸‍♂️",
    name: "man cartwheeling",
    keywords: "cartwheel | gymnastics | man | man cartwheeling"
  },
  {
    no: 312,
    codes: "1F938 200D 2640 FE0F",
    char: "🤸‍♀️",
    name: "woman cartwheeling",
    keywords: "cartwheel | gymnastics | woman | woman cartwheeling"
  },
  {
    no: 313,
    codes: "1F93C",
    char: "🤼",
    name: "people wrestling",
    keywords: "people wrestling | wrestle | wrestler"
  },
  {
    no: 314,
    codes: "1F93C 200D 2642 FE0F",
    char: "🤼‍♂️",
    name: "men wrestling",
    keywords: "men | men wrestling | wrestle"
  },
  {
    no: 315,
    codes: "1F93C 200D 2640 FE0F",
    char: "🤼‍♀️",
    name: "women wrestling",
    keywords: "women | women wrestling | wrestle"
  },
  {
    no: 316,
    codes: "1F93D",
    char: "🤽",
    name: "person playing water polo",
    keywords: "person playing water polo | polo | water"
  },
  {
    no: 317,
    codes: "1F93D 200D 2642 FE0F",
    char: "🤽‍♂️",
    name: "man playing water polo",
    keywords: "man | man playing water polo | water polo"
  },
  {
    no: 318,
    codes: "1F93D 200D 2640 FE0F",
    char: "🤽‍♀️",
    name: "woman playing water polo",
    keywords: "water polo | woman | woman playing water polo"
  },
  {
    no: 319,
    codes: "1F93E",
    char: "🤾",
    name: "person playing handball",
    keywords: "ball | handball | person playing handball"
  },
  {
    no: 320,
    codes: "1F93E 200D 2642 FE0F",
    char: "🤾‍♂️",
    name: "man playing handball",
    keywords: "handball | man | man playing handball"
  },
  {
    no: 321,
    codes: "1F93E 200D 2640 FE0F",
    char: "🤾‍♀️",
    name: "woman playing handball",
    keywords: "handball | woman | woman playing handball"
  },
  {
    no: 322,
    codes: "1F939",
    char: "🤹",
    name: "person juggling",
    keywords: "balance | juggle | multitask | person juggling | skill"
  },
  {
    no: 323,
    codes: "1F939 200D 2642 FE0F",
    char: "🤹‍♂️",
    name: "man juggling",
    keywords: "juggling | man | multitask"
  },
  {
    no: 324,
    codes: "1F939 200D 2640 FE0F",
    char: "🤹‍♀️",
    name: "woman juggling",
    keywords: "juggling | multitask | woman"
  },
  {
    no: 325,
    codes: "1F46B",
    char: "👫",
    name: "man and woman holding hands",
    keywords: "couple | hand | hold | man | man and woman holding hands | woman"
  },
  {
    no: 326,
    codes: "1F46C",
    char: "👬",
    name: "two men holding hands",
    keywords: "couple | Gemini | hand | hold | man | twins | two men holding hands | zodiac"
  },
  {
    no: 327,
    codes: "1F46D",
    char: "👭",
    name: "two women holding hands",
    keywords: "couple | hand | hold | two women holding hands | woman"
  },
  {
    no: 328,
    codes: "1F48F",
    char: "💏",
    name: "kiss",
    keywords: "couple | kiss"
  },
  {
    no: 329,
    codes: "1F469 200D 2764 FE0F 200D 1F48B 200D 1F468",
    char: "👩‍❤️‍💋‍👨",
    name: "kiss: woman, man",
    keywords: "couple | kiss | man | woman"
  },
  {
    no: 330,
    codes: "1F468 200D 2764 FE0F 200D 1F48B 200D 1F468",
    char: "👨‍❤️‍💋‍👨",
    name: "kiss: man, man",
    keywords: "couple | kiss | man"
  },
  {
    no: 331,
    codes: "1F469 200D 2764 FE0F 200D 1F48B 200D 1F469",
    char: "👩‍❤️‍💋‍👩",
    name: "kiss: woman, woman",
    keywords: "couple | kiss | woman"
  },
  {
    no: 332,
    codes: "1F491",
    char: "💑",
    name: "couple with heart",
    keywords: "couple | couple with heart | love"
  },
  {
    no: 333,
    codes: "1F469 200D 2764 FE0F 200D 1F468",
    char: "👩‍❤️‍👨",
    name: "couple with heart: woman, man",
    keywords: "couple | couple with heart | love | man | woman"
  },
  {
    no: 334,
    codes: "1F468 200D 2764 FE0F 200D 1F468",
    char: "👨‍❤️‍👨",
    name: "couple with heart: man, man",
    keywords: "couple | couple with heart | love | man"
  },
  {
    no: 335,
    codes: "1F469 200D 2764 FE0F 200D 1F469",
    char: "👩‍❤️‍👩",
    name: "couple with heart: woman, woman",
    keywords: "couple | couple with heart | love | woman"
  },
  {
    no: 336,
    codes: "1F46A",
    char: "👪",
    name: "family",
    keywords: "family"
  },
  {
    no: 337,
    codes: "1F468 200D 1F469 200D 1F466",
    char: "👨‍👩‍👦",
    name: "family: man, woman, boy",
    keywords: "boy | family | man | woman"
  },
  {
    no: 338,
    codes: "1F468 200D 1F469 200D 1F467",
    char: "👨‍👩‍👧",
    name: "family: man, woman, girl",
    keywords: "family | girl | man | woman"
  },
  {
    no: 339,
    codes: "1F468 200D 1F469 200D 1F467 200D 1F466",
    char: "👨‍👩‍👧‍👦",
    name: "family: man, woman, girl, boy",
    keywords: "boy | family | girl | man | woman"
  },
  {
    no: 340,
    codes: "1F468 200D 1F469 200D 1F466 200D 1F466",
    char: "👨‍👩‍👦‍👦",
    name: "family: man, woman, boy, boy",
    keywords: "boy | family | man | woman"
  },
  {
    no: 341,
    codes: "1F468 200D 1F469 200D 1F467 200D 1F467",
    char: "👨‍👩‍👧‍👧",
    name: "family: man, woman, girl, girl",
    keywords: "family | girl | man | woman"
  },
  {
    no: 342,
    codes: "1F468 200D 1F468 200D 1F466",
    char: "👨‍👨‍👦",
    name: "family: man, man, boy",
    keywords: "boy | family | man"
  },
  {
    no: 343,
    codes: "1F468 200D 1F468 200D 1F467",
    char: "👨‍👨‍👧",
    name: "family: man, man, girl",
    keywords: "family | girl | man"
  },
  {
    no: 344,
    codes: "1F468 200D 1F468 200D 1F467 200D 1F466",
    char: "👨‍👨‍👧‍👦",
    name: "family: man, man, girl, boy",
    keywords: "boy | family | girl | man"
  },
  {
    no: 345,
    codes: "1F468 200D 1F468 200D 1F466 200D 1F466",
    char: "👨‍👨‍👦‍👦",
    name: "family: man, man, boy, boy",
    keywords: "boy | family | man"
  },
  {
    no: 346,
    codes: "1F468 200D 1F468 200D 1F467 200D 1F467",
    char: "👨‍👨‍👧‍👧",
    name: "family: man, man, girl, girl",
    keywords: "family | girl | man"
  },
  {
    no: 347,
    codes: "1F469 200D 1F469 200D 1F466",
    char: "👩‍👩‍👦",
    name: "family: woman, woman, boy",
    keywords: "boy | family | woman"
  },
  {
    no: 348,
    codes: "1F469 200D 1F469 200D 1F467",
    char: "👩‍👩‍👧",
    name: "family: woman, woman, girl",
    keywords: "family | girl | woman"
  },
  {
    no: 349,
    codes: "1F469 200D 1F469 200D 1F467 200D 1F466",
    char: "👩‍👩‍👧‍👦",
    name: "family: woman, woman, girl, boy",
    keywords: "boy | family | girl | woman"
  },
  {
    no: 350,
    codes: "1F469 200D 1F469 200D 1F466 200D 1F466",
    char: "👩‍👩‍👦‍👦",
    name: "family: woman, woman, boy, boy",
    keywords: "boy | family | woman"
  },
  {
    no: 351,
    codes: "1F469 200D 1F469 200D 1F467 200D 1F467",
    char: "👩‍👩‍👧‍👧",
    name: "family: woman, woman, girl, girl",
    keywords: "family | girl | woman"
  },
  {
    no: 352,
    codes: "1F468 200D 1F466",
    char: "👨‍👦",
    name: "family: man, boy",
    keywords: "boy | family | man"
  },
  {
    no: 353,
    codes: "1F468 200D 1F466 200D 1F466",
    char: "👨‍👦‍👦",
    name: "family: man, boy, boy",
    keywords: "boy | family | man"
  },
  {
    no: 354,
    codes: "1F468 200D 1F467",
    char: "👨‍👧",
    name: "family: man, girl",
    keywords: "family | girl | man"
  },
  {
    no: 355,
    codes: "1F468 200D 1F467 200D 1F466",
    char: "👨‍👧‍👦",
    name: "family: man, girl, boy",
    keywords: "boy | family | girl | man"
  },
  {
    no: 356,
    codes: "1F468 200D 1F467 200D 1F467",
    char: "👨‍👧‍👧",
    name: "family: man, girl, girl",
    keywords: "family | girl | man"
  },
  {
    no: 357,
    codes: "1F469 200D 1F466",
    char: "👩‍👦",
    name: "family: woman, boy",
    keywords: "boy | family | woman"
  },
  {
    no: 358,
    codes: "1F469 200D 1F466 200D 1F466",
    char: "👩‍👦‍👦",
    name: "family: woman, boy, boy",
    keywords: "boy | family | woman"
  },
  {
    no: 359,
    codes: "1F469 200D 1F467",
    char: "👩‍👧",
    name: "family: woman, girl",
    keywords: "family | girl | woman"
  },
  {
    no: 360,
    codes: "1F469 200D 1F467 200D 1F466",
    char: "👩‍👧‍👦",
    name: "family: woman, girl, boy",
    keywords: "boy | family | girl | woman"
  },
  {
    no: 361,
    codes: "1F469 200D 1F467 200D 1F467",
    char: "👩‍👧‍👧",
    name: "family: woman, girl, girl",
    keywords: "family | girl | woman"
  },
  {
    no: 362,
    codes: "1F933",
    char: "🤳",
    name: "selfie",
    keywords: "camera | phone | selfie"
  },
  {
    no: 363,
    codes: "1F4AA",
    char: "💪",
    name: "flexed biceps",
    keywords: "biceps | comic | flex | flexed biceps | muscle"
  },
  {
    no: 364,
    codes: "1F9B5",
    char: "🦵",
    name: "⊛ leg",
    keywords: "kick | limb"
  },
  {
    no: 365,
    codes: "1F9B6",
    char: "🦶",
    name: "⊛ foot",
    keywords: "kick | stomp"
  },
  {
    no: 366,
    codes: "1F448",
    char: "👈",
    name: "backhand index pointing left",
    keywords: "backhand | backhand index pointing left | finger | hand | index | point"
  },
  {
    no: 367,
    codes: "1F449",
    char: "👉",
    name: "backhand index pointing right",
    keywords: "backhand | backhand index pointing right | finger | hand | index | point"
  },
  {
    no: 368,
    codes: "261D",
    char: "☝",
    name: "index pointing up",
    keywords: "finger | hand | index | index pointing up | point | up"
  },
  {
    no: 369,
    codes: "1F446",
    char: "👆",
    name: "backhand index pointing up",
    keywords: "backhand | backhand index pointing up | finger | hand | index | point | up"
  },
  {
    no: 370,
    codes: "1F595",
    char: "🖕",
    name: "middle finger",
    keywords: "finger | hand | middle finger"
  },
  {
    no: 371,
    codes: "1F447",
    char: "👇",
    name: "backhand index pointing down",
    keywords: "backhand | backhand index pointing down | down | finger | hand | index | point"
  },
  {
    no: 372,
    codes: "270C",
    char: "✌",
    name: "victory hand",
    keywords: "hand | v | victory"
  },
  {
    no: 373,
    codes: "1F91E",
    char: "🤞",
    name: "crossed fingers",
    keywords: "cross | crossed fingers | finger | hand | luck"
  },
  {
    no: 374,
    codes: "1F596",
    char: "🖖",
    name: "vulcan salute",
    keywords: "finger | hand | spock | vulcan | vulcan salute"
  },
  {
    no: 375,
    codes: "1F918",
    char: "🤘",
    name: "sign of the horns",
    keywords: "finger | hand | horns | rock-on | sign of the horns"
  },
  {
    no: 376,
    codes: "1F919",
    char: "🤙",
    name: "call me hand",
    keywords: "call | call me hand | hand"
  },
  {
    no: 377,
    codes: "1F590",
    char: "🖐",
    name: "hand with fingers splayed",
    keywords: "finger | hand | hand with fingers splayed | splayed"
  },
  {
    no: 378,
    codes: "270B",
    char: "✋",
    name: "raised hand",
    keywords: "hand | raised hand"
  },
  {
    no: 379,
    codes: "1F44C",
    char: "👌",
    name: "OK hand",
    keywords: "hand | OK"
  },
  {
    no: 380,
    codes: "1F44D",
    char: "👍",
    name: "thumbs up",
    keywords: "+1 | hand | thumb | thumbs up | up"
  },
  {
    no: 381,
    codes: "1F44E",
    char: "👎",
    name: "thumbs down",
    keywords: "-1 | down | hand | thumb | thumbs down"
  },
  {
    no: 382,
    codes: "270A",
    char: "✊",
    name: "raised fist",
    keywords: "clenched | fist | hand | punch | raised fist"
  },
  {
    no: 383,
    codes: "1F44A",
    char: "👊",
    name: "oncoming fist",
    keywords: "clenched | fist | hand | oncoming fist | punch"
  },
  {
    no: 384,
    codes: "1F91B",
    char: "🤛",
    name: "left-facing fist",
    keywords: "fist | left-facing fist | leftwards"
  },
  {
    no: 385,
    codes: "1F91C",
    char: "🤜",
    name: "right-facing fist",
    keywords: "fist | right-facing fist | rightwards"
  },
  {
    no: 386,
    codes: "1F91A",
    char: "🤚",
    name: "raised back of hand",
    keywords: "backhand | raised | raised back of hand"
  },
  {
    no: 387,
    codes: "1F44B",
    char: "👋",
    name: "waving hand",
    keywords: "hand | wave | waving"
  },
  {
    no: 388,
    codes: "1F91F",
    char: "🤟",
    name: "love-you gesture",
    keywords: "hand | ILY | love-you gesture"
  },
  {
    no: 389,
    codes: "270D",
    char: "✍",
    name: "writing hand",
    keywords: "hand | write | writing hand"
  },
  {
    no: 390,
    codes: "1F44F",
    char: "👏",
    name: "clapping hands",
    keywords: "clap | clapping hands | hand"
  },
  {
    no: 391,
    codes: "1F450",
    char: "👐",
    name: "open hands",
    keywords: "hand | open | open hands"
  },
  {
    no: 392,
    codes: "1F64C",
    char: "🙌",
    name: "raising hands",
    keywords: "celebration | gesture | hand | hooray | raised | raising hands"
  },
  {
    no: 393,
    codes: "1F932",
    char: "🤲",
    name: "palms up together",
    keywords: "palms up together | prayer | cupped hands"
  },
  {
    no: 394,
    codes: "1F64F",
    char: "🙏",
    name: "folded hands",
    keywords: "ask | bow | folded | folded hands | gesture | hand | please | pray | thanks"
  },
  {
    no: 395,
    codes: "1F91D",
    char: "🤝",
    name: "handshake",
    keywords: "agreement | hand | handshake | meeting | shake"
  },
  {
    no: 396,
    codes: "1F485",
    char: "💅",
    name: "nail polish",
    keywords: "care | cosmetics | manicure | nail | polish"
  },
  {
    no: 397,
    codes: "1F442",
    char: "👂",
    name: "ear",
    keywords: "body | ear"
  },
  {
    no: 398,
    codes: "1F443",
    char: "👃",
    name: "nose",
    keywords: "body | nose"
  },
  {
    no: 399,
    codes: "1F9B0",
    char: "🦰",
    name: "⊛ red-haired",
    keywords: "ginger | redhead"
  },
  {
    no: 400,
    codes: "1F9B1",
    char: "🦱",
    name: "⊛ curly-haired",
    keywords: "afro | curly | ringlets"
  },
  {
    no: 401,
    codes: "1F9B2",
    char: "🦲",
    name: "⊛ bald",
    keywords: "chemotherapy | hairless | no hair | shaven"
  },
  {
    no: 402,
    codes: "1F9B3",
    char: "🦳",
    name: "⊛ white-haired",
    keywords: "gray | hair | old | white"
  },
  {
    no: 403,
    codes: "1F463",
    char: "👣",
    name: "footprints",
    keywords: "clothing | footprint | footprints | print"
  },
  {
    no: 404,
    codes: "1F440",
    char: "👀",
    name: "eyes",
    keywords: "eye | eyes | face"
  },
  {
    no: 405,
    codes: "1F441",
    char: "👁",
    name: "eye",
    keywords: "body | eye"
  },
  {
    no: 406,
    codes: "1F441 FE0F 200D 1F5E8 FE0F",
    char: "👁️‍🗨️",
    name: "eye in speech bubble",
    keywords: "eye | eye in speech bubble | speech bubble | witness"
  },
  {
    no: 407,
    codes: "1F9E0",
    char: "🧠",
    name: "brain",
    keywords: "brain | intelligent"
  },
  {
    no: 408,
    codes: "1F9B4",
    char: "🦴",
    name: "⊛ bone",
    keywords: "skeleton"
  },
  {
    no: 409,
    codes: "1F9B7",
    char: "🦷",
    name: "⊛ tooth",
    keywords: "dentist"
  },
  {
    no: 410,
    codes: "1F445",
    char: "👅",
    name: "tongue",
    keywords: "body | tongue"
  },
  {
    no: 411,
    codes: "1F444",
    char: "👄",
    name: "mouth",
    keywords: "lips | mouth"
  },
  {
    no: 412,
    codes: "1F48B",
    char: "💋",
    name: "kiss mark",
    keywords: "kiss | kiss mark | lips"
  },
  {
    no: 413,
    codes: "1F498",
    char: "💘",
    name: "heart with arrow",
    keywords: "arrow | cupid | heart with arrow"
  },
  {
    no: 414,
    codes: "2764",
    char: "❤",
    name: "red heart",
    keywords: "heart | red heart"
  },
  {
    no: 415,
    codes: "1F493",
    char: "💓",
    name: "beating heart",
    keywords: "beating | beating heart | heartbeat | pulsating"
  },
  {
    no: 416,
    codes: "1F494",
    char: "💔",
    name: "broken heart",
    keywords: "break | broken | broken heart"
  },
  {
    no: 417,
    codes: "1F495",
    char: "💕",
    name: "two hearts",
    keywords: "love | two hearts"
  },
  {
    no: 418,
    codes: "1F496",
    char: "💖",
    name: "sparkling heart",
    keywords: "excited | sparkle | sparkling heart"
  },
  {
    no: 419,
    codes: "1F497",
    char: "💗",
    name: "growing heart",
    keywords: "excited | growing | growing heart | nervous | pulse"
  },
  {
    no: 420,
    codes: "1F499",
    char: "💙",
    name: "blue heart",
    keywords: "blue | blue heart"
  },
  {
    no: 421,
    codes: "1F49A",
    char: "💚",
    name: "green heart",
    keywords: "green | green heart"
  },
  {
    no: 422,
    codes: "1F49B",
    char: "💛",
    name: "yellow heart",
    keywords: "yellow | yellow heart"
  },
  {
    no: 423,
    codes: "1F9E1",
    char: "🧡",
    name: "orange heart",
    keywords: "orange | orange heart"
  },
  {
    no: 424,
    codes: "1F49C",
    char: "💜",
    name: "purple heart",
    keywords: "purple | purple heart"
  },
  {
    no: 425,
    codes: "1F5A4",
    char: "🖤",
    name: "black heart",
    keywords: "black | black heart | evil | wicked"
  },
  {
    no: 426,
    codes: "1F49D",
    char: "💝",
    name: "heart with ribbon",
    keywords: "heart with ribbon | ribbon | valentine"
  },
  {
    no: 427,
    codes: "1F49E",
    char: "💞",
    name: "revolving hearts",
    keywords: "revolving | revolving hearts"
  },
  {
    no: 428,
    codes: "1F49F",
    char: "💟",
    name: "heart decoration",
    keywords: "heart | heart decoration"
  },
  {
    no: 429,
    codes: "2763",
    char: "❣",
    name: "heavy heart exclamation",
    keywords: "exclamation | heavy heart exclamation | mark | punctuation"
  },
  {
    no: 430,
    codes: "1F48C",
    char: "💌",
    name: "love letter",
    keywords: "heart | letter | love | mail"
  },
  {
    no: 431,
    codes: "1F4A4",
    char: "💤",
    name: "zzz",
    keywords: "comic | sleep | zzz"
  },
  {
    no: 432,
    codes: "1F4A2",
    char: "💢",
    name: "anger symbol",
    keywords: "anger symbol | angry | comic | mad"
  },
  {
    no: 433,
    codes: "1F4A3",
    char: "💣",
    name: "bomb",
    keywords: "bomb | comic"
  },
  {
    no: 434,
    codes: "1F4A5",
    char: "💥",
    name: "collision",
    keywords: "boom | collision | comic"
  },
  {
    no: 435,
    codes: "1F4A6",
    char: "💦",
    name: "sweat droplets",
    keywords: "comic | splashing | sweat | sweat droplets"
  },
  {
    no: 436,
    codes: "1F4A8",
    char: "💨",
    name: "dashing away",
    keywords: "comic | dash | dashing away | running"
  },
  {
    no: 437,
    codes: "1F4AB",
    char: "💫",
    name: "dizzy",
    keywords: "comic | dizzy | star"
  },
  {
    no: 438,
    codes: "1F4AC",
    char: "💬",
    name: "speech balloon",
    keywords: "balloon | bubble | comic | dialog | speech"
  },
  {
    no: 439,
    codes: "1F5E8",
    char: "🗨",
    name: "left speech bubble",
    keywords: "dialog | left speech bubble | speech"
  },
  {
    no: 440,
    codes: "1F5EF",
    char: "🗯",
    name: "right anger bubble",
    keywords: "angry | balloon | bubble | mad | right anger bubble"
  },
  {
    no: 441,
    codes: "1F4AD",
    char: "💭",
    name: "thought balloon",
    keywords: "balloon | bubble | comic | thought"
  },
  {
    no: 442,
    codes: "1F573",
    char: "🕳",
    name: "hole",
    keywords: "hole"
  },
  {
    no: 443,
    codes: "1F453",
    char: "👓",
    name: "glasses",
    keywords: "clothing | eye | eyeglasses | eyewear | glasses"
  },
  {
    no: 444,
    codes: "1F576",
    char: "🕶",
    name: "sunglasses",
    keywords: "dark | eye | eyewear | glasses | sunglasses"
  },
  {
    no: 445,
    codes: "1F97D",
    char: "🥽",
    name: "⊛ goggles",
    keywords: "eye protection | swimming | welding"
  },
  {
    no: 446,
    codes: "1F97C",
    char: "🥼",
    name: "⊛ lab coat",
    keywords: "doctor | experiment | scientist"
  },
  {
    no: 447,
    codes: "1F454",
    char: "👔",
    name: "necktie",
    keywords: "clothing | necktie | tie"
  },
  {
    no: 448,
    codes: "1F455",
    char: "👕",
    name: "t-shirt",
    keywords: "clothing | shirt | t-shirt | tshirt"
  },
  {
    no: 449,
    codes: "1F456",
    char: "👖",
    name: "jeans",
    keywords: "clothing | jeans | pants | trousers"
  },
  {
    no: 450,
    codes: "1F9E3",
    char: "🧣",
    name: "scarf",
    keywords: "neck | scarf"
  },
  {
    no: 451,
    codes: "1F9E4",
    char: "🧤",
    name: "gloves",
    keywords: "gloves | hand"
  },
  {
    no: 452,
    codes: "1F9E5",
    char: "🧥",
    name: "coat",
    keywords: "coat | jacket"
  },
  {
    no: 453,
    codes: "1F9E6",
    char: "🧦",
    name: "socks",
    keywords: "socks | stocking"
  },
  {
    no: 454,
    codes: "1F457",
    char: "👗",
    name: "dress",
    keywords: "clothing | dress"
  },
  {
    no: 455,
    codes: "1F458",
    char: "👘",
    name: "kimono",
    keywords: "clothing | kimono"
  },
  {
    no: 456,
    codes: "1F459",
    char: "👙",
    name: "bikini",
    keywords: "bikini | clothing | swim"
  },
  {
    no: 457,
    codes: "1F45A",
    char: "👚",
    name: "woman’s clothes",
    keywords: "clothing | woman | woman’s clothes"
  },
  {
    no: 458,
    codes: "1F45B",
    char: "👛",
    name: "purse",
    keywords: "clothing | coin | purse"
  },
  {
    no: 459,
    codes: "1F45C",
    char: "👜",
    name: "handbag",
    keywords: "bag | clothing | handbag | purse"
  },
  {
    no: 460,
    codes: "1F45D",
    char: "👝",
    name: "clutch bag",
    keywords: "bag | clothing | clutch bag | pouch"
  },
  {
    no: 461,
    codes: "1F6CD",
    char: "🛍",
    name: "shopping bags",
    keywords: "bag | hotel | shopping | shopping bags"
  },
  {
    no: 462,
    codes: "1F392",
    char: "🎒",
    name: "backpack",
    keywords: "backpack | bag | rucksack | satchel | school"
  },
  {
    no: 463,
    codes: "1F45E",
    char: "👞",
    name: "man’s shoe",
    keywords: "clothing | man | man’s shoe | shoe"
  },
  {
    no: 464,
    codes: "1F45F",
    char: "👟",
    name: "running shoe",
    keywords: "athletic | clothing | running shoe | shoe | sneaker"
  },
  {
    no: 465,
    codes: "1F97E",
    char: "🥾",
    name: "⊛ hiking boot",
    keywords: "backpacking | boot | camping | hiking"
  },
  {
    no: 466,
    codes: "1F97F",
    char: "🥿",
    name: "⊛ flat shoe",
    keywords: "ballet flat | slip-on | slipper"
  },
  {
    no: 467,
    codes: "1F460",
    char: "👠",
    name: "high-heeled shoe",
    keywords: "clothing | heel | high-heeled shoe | shoe | woman"
  },
  {
    no: 468,
    codes: "1F461",
    char: "👡",
    name: "woman’s sandal",
    keywords: "clothing | sandal | shoe | woman | woman’s sandal"
  },
  {
    no: 469,
    codes: "1F462",
    char: "👢",
    name: "woman’s boot",
    keywords: "boot | clothing | shoe | woman | woman’s boot"
  },
  {
    no: 470,
    codes: "1F451",
    char: "👑",
    name: "crown",
    keywords: "clothing | crown | king | queen"
  },
  {
    no: 471,
    codes: "1F452",
    char: "👒",
    name: "woman’s hat",
    keywords: "clothing | hat | woman | woman’s hat"
  },
  {
    no: 472,
    codes: "1F3A9",
    char: "🎩",
    name: "top hat",
    keywords: "clothing | hat | top | tophat"
  },
  {
    no: 473,
    codes: "1F393",
    char: "🎓",
    name: "graduation cap",
    keywords: "cap | celebration | clothing | graduation | hat"
  },
  {
    no: 474,
    codes: "1F9E2",
    char: "🧢",
    name: "billed cap",
    keywords: "baseball cap | billed cap"
  },
  {
    no: 475,
    codes: "26D1",
    char: "⛑",
    name: "rescue worker’s helmet",
    keywords: "aid | cross | face | hat | helmet | rescue worker’s helmet"
  },
  {
    no: 476,
    codes: "1F4FF",
    char: "📿",
    name: "prayer beads",
    keywords: "beads | clothing | necklace | prayer | religion"
  },
  {
    no: 477,
    codes: "1F484",
    char: "💄",
    name: "lipstick",
    keywords: "cosmetics | lipstick | makeup"
  },
  {
    no: 478,
    codes: "1F48D",
    char: "💍",
    name: "ring",
    keywords: "diamond | ring"
  },
  {
    no: 479,
    codes: "1F48E",
    char: "💎",
    name: "gem stone",
    keywords: "diamond | gem | gem stone | jewel"
  },
  {
    no: 480,
    codes: "1F435",
    char: "🐵",
    name: "monkey face",
    keywords: "face | monkey"
  },
  {
    no: 481,
    codes: "1F412",
    char: "🐒",
    name: "monkey",
    keywords: "monkey"
  },
  {
    no: 482,
    codes: "1F98D",
    char: "🦍",
    name: "gorilla",
    keywords: "gorilla"
  },
  {
    no: 483,
    codes: "1F436",
    char: "🐶",
    name: "dog face",
    keywords: "dog | face | pet"
  },
  {
    no: 484,
    codes: "1F415",
    char: "🐕",
    name: "dog",
    keywords: "dog | pet"
  },
  {
    no: 485,
    codes: "1F429",
    char: "🐩",
    name: "poodle",
    keywords: "dog | poodle"
  },
  {
    no: 486,
    codes: "1F43A",
    char: "🐺",
    name: "wolf face",
    keywords: "face | wolf"
  },
  {
    no: 487,
    codes: "1F98A",
    char: "🦊",
    name: "fox face",
    keywords: "face | fox"
  },
  {
    no: 488,
    codes: "1F99D",
    char: "🦝",
    name: "⊛ raccoon",
    keywords: "curious | sly"
  },
  {
    no: 489,
    codes: "1F431",
    char: "🐱",
    name: "cat face",
    keywords: "cat | face | pet"
  },
  {
    no: 490,
    codes: "1F408",
    char: "🐈",
    name: "cat",
    keywords: "cat | pet"
  },
  {
    no: 491,
    codes: "1F981",
    char: "🦁",
    name: "lion face",
    keywords: "face | Leo | lion | zodiac"
  },
  {
    no: 492,
    codes: "1F42F",
    char: "🐯",
    name: "tiger face",
    keywords: "face | tiger"
  },
  {
    no: 493,
    codes: "1F405",
    char: "🐅",
    name: "tiger",
    keywords: "tiger"
  },
  {
    no: 494,
    codes: "1F406",
    char: "🐆",
    name: "leopard",
    keywords: "leopard"
  },
  {
    no: 495,
    codes: "1F434",
    char: "🐴",
    name: "horse face",
    keywords: "face | horse"
  },
  {
    no: 496,
    codes: "1F40E",
    char: "🐎",
    name: "horse",
    keywords: "equestrian | horse | racehorse | racing"
  },
  {
    no: 497,
    codes: "1F984",
    char: "🦄",
    name: "unicorn face",
    keywords: "face | unicorn"
  },
  {
    no: 498,
    codes: "1F993",
    char: "🦓",
    name: "zebra",
    keywords: "stripe | zebra"
  },
  {
    no: 499,
    codes: "1F98C",
    char: "🦌",
    name: "deer",
    keywords: "deer"
  },
  {
    no: 500,
    codes: "1F42E",
    char: "🐮",
    name: "cow face",
    keywords: "cow | face"
  },
  {
    no: 501,
    codes: "1F402",
    char: "🐂",
    name: "ox",
    keywords: "bull | ox | Taurus | zodiac"
  },
  {
    no: 502,
    codes: "1F403",
    char: "🐃",
    name: "water buffalo",
    keywords: "buffalo | water"
  },
  {
    no: 503,
    codes: "1F404",
    char: "🐄",
    name: "cow",
    keywords: "cow"
  },
  {
    no: 504,
    codes: "1F437",
    char: "🐷",
    name: "pig face",
    keywords: "face | pig"
  },
  {
    no: 505,
    codes: "1F416",
    char: "🐖",
    name: "pig",
    keywords: "pig | sow"
  },
  {
    no: 506,
    codes: "1F417",
    char: "🐗",
    name: "boar",
    keywords: "boar | pig"
  },
  {
    no: 507,
    codes: "1F43D",
    char: "🐽",
    name: "pig nose",
    keywords: "face | nose | pig"
  },
  {
    no: 508,
    codes: "1F40F",
    char: "🐏",
    name: "ram",
    keywords: "Aries | male | ram | sheep | zodiac"
  },
  {
    no: 509,
    codes: "1F411",
    char: "🐑",
    name: "ewe",
    keywords: "ewe | female | sheep"
  },
  {
    no: 510,
    codes: "1F410",
    char: "🐐",
    name: "goat",
    keywords: "Capricorn | goat | zodiac"
  },
  {
    no: 511,
    codes: "1F42A",
    char: "🐪",
    name: "camel",
    keywords: "camel | dromedary | hump"
  },
  {
    no: 512,
    codes: "1F42B",
    char: "🐫",
    name: "two-hump camel",
    keywords: "bactrian | camel | hump | two-hump camel"
  },
  {
    no: 513,
    codes: "1F999",
    char: "🦙",
    name: "⊛ llama",
    keywords: "alpaca | guanaco | vicuña | wool"
  },
  {
    no: 514,
    codes: "1F992",
    char: "🦒",
    name: "giraffe",
    keywords: "giraffe | spots"
  },
  {
    no: 515,
    codes: "1F418",
    char: "🐘",
    name: "elephant",
    keywords: "elephant"
  },
  {
    no: 516,
    codes: "1F98F",
    char: "🦏",
    name: "rhinoceros",
    keywords: "rhinoceros"
  },
  {
    no: 517,
    codes: "1F99B",
    char: "🦛",
    name: "⊛ hippopotamus",
    keywords: "hippo"
  },
  {
    no: 518,
    codes: "1F42D",
    char: "🐭",
    name: "mouse face",
    keywords: "face | mouse"
  },
  {
    no: 519,
    codes: "1F401",
    char: "🐁",
    name: "mouse",
    keywords: "mouse"
  },
  {
    no: 520,
    codes: "1F400",
    char: "🐀",
    name: "rat",
    keywords: "rat"
  },
  {
    no: 521,
    codes: "1F439",
    char: "🐹",
    name: "hamster face",
    keywords: "face | hamster | pet"
  },
  {
    no: 522,
    codes: "1F430",
    char: "🐰",
    name: "rabbit face",
    keywords: "bunny | face | pet | rabbit"
  },
  {
    no: 523,
    codes: "1F407",
    char: "🐇",
    name: "rabbit",
    keywords: "bunny | pet | rabbit"
  },
  {
    no: 524,
    codes: "1F43F",
    char: "🐿",
    name: "chipmunk",
    keywords: "chipmunk | squirrel"
  },
  {
    no: 525,
    codes: "1F994",
    char: "🦔",
    name: "hedgehog",
    keywords: "hedgehog | spiny"
  },
  {
    no: 526,
    codes: "1F987",
    char: "🦇",
    name: "bat",
    keywords: "bat | vampire"
  },
  {
    no: 527,
    codes: "1F43B",
    char: "🐻",
    name: "bear face",
    keywords: "bear | face"
  },
  {
    no: 528,
    codes: "1F428",
    char: "🐨",
    name: "koala",
    keywords: "bear | koala"
  },
  {
    no: 529,
    codes: "1F43C",
    char: "🐼",
    name: "panda face",
    keywords: "face | panda"
  },
  {
    no: 530,
    codes: "1F998",
    char: "🦘",
    name: "⊛ kangaroo",
    keywords: "Australia | joey | jump | marsupial"
  },
  {
    no: 531,
    codes: "1F9A1",
    char: "🦡",
    name: "⊛ badger",
    keywords: "honey badger | pester"
  },
  {
    no: 532,
    codes: "1F43E",
    char: "🐾",
    name: "paw prints",
    keywords: "feet | paw | paw prints | print"
  },
  {
    no: 533,
    codes: "1F983",
    char: "🦃",
    name: "turkey",
    keywords: "bird | turkey"
  },
  {
    no: 534,
    codes: "1F414",
    char: "🐔",
    name: "chicken",
    keywords: "bird | chicken"
  },
  {
    no: 535,
    codes: "1F413",
    char: "🐓",
    name: "rooster",
    keywords: "bird | rooster"
  },
  {
    no: 536,
    codes: "1F423",
    char: "🐣",
    name: "hatching chick",
    keywords: "baby | bird | chick | hatching"
  },
  {
    no: 537,
    codes: "1F424",
    char: "🐤",
    name: "baby chick",
    keywords: "baby | bird | chick"
  },
  {
    no: 538,
    codes: "1F425",
    char: "🐥",
    name: "front-facing baby chick",
    keywords: "baby | bird | chick | front-facing baby chick"
  },
  {
    no: 539,
    codes: "1F426",
    char: "🐦",
    name: "bird",
    keywords: "bird"
  },
  {
    no: 540,
    codes: "1F427",
    char: "🐧",
    name: "penguin",
    keywords: "bird | penguin"
  },
  {
    no: 541,
    codes: "1F54A",
    char: "🕊",
    name: "dove",
    keywords: "bird | dove | fly | peace"
  },
  {
    no: 542,
    codes: "1F985",
    char: "🦅",
    name: "eagle",
    keywords: "bird | eagle"
  },
  {
    no: 543,
    codes: "1F986",
    char: "🦆",
    name: "duck",
    keywords: "bird | duck"
  },
  {
    no: 544,
    codes: "1F9A2",
    char: "🦢",
    name: "⊛ swan",
    keywords: "bird | cygnet | ugly duckling"
  },
  {
    no: 545,
    codes: "1F989",
    char: "🦉",
    name: "owl",
    keywords: "bird | owl | wise"
  },
  {
    no: 546,
    codes: "1F99A",
    char: "🦚",
    name: "⊛ peacock",
    keywords: "bird | ostentatious | peahen | proud"
  },
  {
    no: 547,
    codes: "1F99C",
    char: "🦜",
    name: "⊛ parrot",
    keywords: "bird | pirate | talk"
  },
  {
    no: 548,
    codes: "1F438",
    char: "🐸",
    name: "frog face",
    keywords: "face | frog"
  },
  {
    no: 549,
    codes: "1F40A",
    char: "🐊",
    name: "crocodile",
    keywords: "crocodile"
  },
  {
    no: 550,
    codes: "1F422",
    char: "🐢",
    name: "turtle",
    keywords: "terrapin | tortoise | turtle"
  },
  {
    no: 551,
    codes: "1F98E",
    char: "🦎",
    name: "lizard",
    keywords: "lizard | reptile"
  },
  {
    no: 552,
    codes: "1F40D",
    char: "🐍",
    name: "snake",
    keywords: "bearer | Ophiuchus | serpent | snake | zodiac"
  },
  {
    no: 553,
    codes: "1F432",
    char: "🐲",
    name: "dragon face",
    keywords: "dragon | face | fairy tale"
  },
  {
    no: 554,
    codes: "1F409",
    char: "🐉",
    name: "dragon",
    keywords: "dragon | fairy tale"
  },
  {
    no: 555,
    codes: "1F995",
    char: "🦕",
    name: "sauropod",
    keywords: "brachiosaurus | brontosaurus | diplodocus | sauropod"
  },
  {
    no: 556,
    codes: "1F996",
    char: "🦖",
    name: "T-Rex",
    keywords: "T-Rex | Tyrannosaurus Rex"
  },
  {
    no: 557,
    codes: "1F433",
    char: "🐳",
    name: "spouting whale",
    keywords: "face | spouting | whale"
  },
  {
    no: 558,
    codes: "1F40B",
    char: "🐋",
    name: "whale",
    keywords: "whale"
  },
  {
    no: 559,
    codes: "1F42C",
    char: "🐬",
    name: "dolphin",
    keywords: "dolphin | flipper"
  },
  {
    no: 560,
    codes: "1F41F",
    char: "🐟",
    name: "fish",
    keywords: "fish | Pisces | zodiac"
  },
  {
    no: 561,
    codes: "1F420",
    char: "🐠",
    name: "tropical fish",
    keywords: "fish | tropical"
  },
  {
    no: 562,
    codes: "1F421",
    char: "🐡",
    name: "blowfish",
    keywords: "blowfish | fish"
  },
  {
    no: 563,
    codes: "1F988",
    char: "🦈",
    name: "shark",
    keywords: "fish | shark"
  },
  {
    no: 564,
    codes: "1F419",
    char: "🐙",
    name: "octopus",
    keywords: "octopus"
  },
  {
    no: 565,
    codes: "1F41A",
    char: "🐚",
    name: "spiral shell",
    keywords: "shell | spiral"
  },
  {
    no: 566,
    codes: "1F980",
    char: "🦀",
    name: "crab",
    keywords: "Cancer | crab | zodiac"
  },
  {
    no: 567,
    codes: "1F99E",
    char: "🦞",
    name: "⊛ lobster",
    keywords: "bisque | claws | seafood"
  },
  {
    no: 568,
    codes: "1F990",
    char: "🦐",
    name: "shrimp",
    keywords: "food | shellfish | shrimp | small"
  },
  {
    no: 569,
    codes: "1F991",
    char: "🦑",
    name: "squid",
    keywords: "food | molusc | squid"
  },
  {
    no: 570,
    codes: "1F40C",
    char: "🐌",
    name: "snail",
    keywords: "snail"
  },
  {
    no: 571,
    codes: "1F98B",
    char: "🦋",
    name: "butterfly",
    keywords: "butterfly | insect | pretty"
  },
  {
    no: 572,
    codes: "1F41B",
    char: "🐛",
    name: "bug",
    keywords: "bug | insect"
  },
  {
    no: 573,
    codes: "1F41C",
    char: "🐜",
    name: "ant",
    keywords: "ant | insect"
  },
  {
    no: 574,
    codes: "1F41D",
    char: "🐝",
    name: "honeybee",
    keywords: "bee | honeybee | insect"
  },
  {
    no: 575,
    codes: "1F41E",
    char: "🐞",
    name: "lady beetle",
    keywords: "beetle | insect | lady beetle | ladybird | ladybug"
  },
  {
    no: 576,
    codes: "1F997",
    char: "🦗",
    name: "cricket",
    keywords: "cricket | grasshopper | Orthoptera"
  },
  {
    no: 577,
    codes: "1F577",
    char: "🕷",
    name: "spider",
    keywords: "insect | spider"
  },
  {
    no: 578,
    codes: "1F578",
    char: "🕸",
    name: "spider web",
    keywords: "spider | web"
  },
  {
    no: 579,
    codes: "1F982",
    char: "🦂",
    name: "scorpion",
    keywords: "scorpio | Scorpio | scorpion | zodiac"
  },
  {
    no: 580,
    codes: "1F99F",
    char: "🦟",
    name: "⊛ mosquito",
    keywords: "disease | fever | insect | malaria | virus"
  },
  {
    no: 581,
    codes: "1F9A0",
    char: "🦠",
    name: "⊛ microbe",
    keywords: "amoeba | bacteria | virus"
  },
  {
    no: 582,
    codes: "1F490",
    char: "💐",
    name: "bouquet",
    keywords: "bouquet | flower"
  },
  {
    no: 583,
    codes: "1F338",
    char: "🌸",
    name: "cherry blossom",
    keywords: "blossom | cherry | flower"
  },
  {
    no: 584,
    codes: "1F4AE",
    char: "💮",
    name: "white flower",
    keywords: "flower | white flower"
  },
  {
    no: 585,
    codes: "1F3F5",
    char: "🏵",
    name: "rosette",
    keywords: "plant | rosette"
  },
  {
    no: 586,
    codes: "1F339",
    char: "🌹",
    name: "rose",
    keywords: "flower | rose"
  },
  {
    no: 587,
    codes: "1F940",
    char: "🥀",
    name: "wilted flower",
    keywords: "flower | wilted"
  },
  {
    no: 588,
    codes: "1F33A",
    char: "🌺",
    name: "hibiscus",
    keywords: "flower | hibiscus"
  },
  {
    no: 589,
    codes: "1F33B",
    char: "🌻",
    name: "sunflower",
    keywords: "flower | sun | sunflower"
  },
  {
    no: 590,
    codes: "1F33C",
    char: "🌼",
    name: "blossom",
    keywords: "blossom | flower"
  },
  {
    no: 591,
    codes: "1F337",
    char: "🌷",
    name: "tulip",
    keywords: "flower | tulip"
  },
  {
    no: 592,
    codes: "1F331",
    char: "🌱",
    name: "seedling",
    keywords: "seedling | young"
  },
  {
    no: 593,
    codes: "1F332",
    char: "🌲",
    name: "evergreen tree",
    keywords: "evergreen tree | tree"
  },
  {
    no: 594,
    codes: "1F333",
    char: "🌳",
    name: "deciduous tree",
    keywords: "deciduous | shedding | tree"
  },
  {
    no: 595,
    codes: "1F334",
    char: "🌴",
    name: "palm tree",
    keywords: "palm | tree"
  },
  {
    no: 596,
    codes: "1F335",
    char: "🌵",
    name: "cactus",
    keywords: "cactus | plant"
  },
  {
    no: 597,
    codes: "1F33E",
    char: "🌾",
    name: "sheaf of rice",
    keywords: "ear | grain | rice | sheaf of rice"
  },
  {
    no: 598,
    codes: "1F33F",
    char: "🌿",
    name: "herb",
    keywords: "herb | leaf"
  },
  {
    no: 599,
    codes: "2618",
    char: "☘",
    name: "shamrock",
    keywords: "plant | shamrock"
  },
  {
    no: 600,
    codes: "1F340",
    char: "🍀",
    name: "four leaf clover",
    keywords: "4 | clover | four | four-leaf clover | leaf"
  },
  {
    no: 601,
    codes: "1F341",
    char: "🍁",
    name: "maple leaf",
    keywords: "falling | leaf | maple"
  },
  {
    no: 602,
    codes: "1F342",
    char: "🍂",
    name: "fallen leaf",
    keywords: "fallen leaf | falling | leaf"
  },
  {
    no: 603,
    codes: "1F343",
    char: "🍃",
    name: "leaf fluttering in wind",
    keywords: "blow | flutter | leaf | leaf fluttering in wind | wind"
  },
  {
    no: 604,
    codes: "1F347",
    char: "🍇",
    name: "grapes",
    keywords: "fruit | grape | grapes"
  },
  {
    no: 605,
    codes: "1F348",
    char: "🍈",
    name: "melon",
    keywords: "fruit | melon"
  },
  {
    no: 606,
    codes: "1F349",
    char: "🍉",
    name: "watermelon",
    keywords: "fruit | watermelon"
  },
  {
    no: 607,
    codes: "1F34A",
    char: "🍊",
    name: "tangerine",
    keywords: "fruit | orange | tangerine"
  },
  {
    no: 608,
    codes: "1F34B",
    char: "🍋",
    name: "lemon",
    keywords: "citrus | fruit | lemon"
  },
  {
    no: 609,
    codes: "1F34C",
    char: "🍌",
    name: "banana",
    keywords: "banana | fruit"
  },
  {
    no: 610,
    codes: "1F34D",
    char: "🍍",
    name: "pineapple",
    keywords: "fruit | pineapple"
  },
  {
    no: 611,
    codes: "1F96D",
    char: "🥭",
    name: "⊛ mango",
    keywords: "shaker | tropical"
  },
  {
    no: 612,
    codes: "1F34E",
    char: "🍎",
    name: "red apple",
    keywords: "apple | fruit | red"
  },
  {
    no: 613,
    codes: "1F34F",
    char: "🍏",
    name: "green apple",
    keywords: "apple | fruit | green"
  },
  {
    no: 614,
    codes: "1F350",
    char: "🍐",
    name: "pear",
    keywords: "fruit | pear"
  },
  {
    no: 615,
    codes: "1F351",
    char: "🍑",
    name: "peach",
    keywords: "fruit | peach"
  },
  {
    no: 616,
    codes: "1F352",
    char: "🍒",
    name: "cherries",
    keywords: "berries | cherries | cherry | fruit | red"
  },
  {
    no: 617,
    codes: "1F353",
    char: "🍓",
    name: "strawberry",
    keywords: "berry | fruit | strawberry"
  },
  {
    no: 618,
    codes: "1F95D",
    char: "🥝",
    name: "kiwi fruit",
    keywords: "food | fruit | kiwi"
  },
  {
    no: 619,
    codes: "1F345",
    char: "🍅",
    name: "tomato",
    keywords: "fruit | tomato | vegetable"
  },
  {
    no: 620,
    codes: "1F965",
    char: "🥥",
    name: "coconut",
    keywords: "coconut | palm | piña colada"
  },
  {
    no: 621,
    codes: "1F951",
    char: "🥑",
    name: "avocado",
    keywords: "avocado | food | fruit"
  },
  {
    no: 622,
    codes: "1F346",
    char: "🍆",
    name: "eggplant",
    keywords: "aubergine | eggplant | vegetable"
  },
  {
    no: 623,
    codes: "1F954",
    char: "🥔",
    name: "potato",
    keywords: "food | potato | vegetable"
  },
  {
    no: 624,
    codes: "1F955",
    char: "🥕",
    name: "carrot",
    keywords: "carrot | food | vegetable"
  },
  {
    no: 625,
    codes: "1F33D",
    char: "🌽",
    name: "ear of corn",
    keywords: "corn | ear | ear of corn | maize | maze"
  },
  {
    no: 626,
    codes: "1F336",
    char: "🌶",
    name: "hot pepper",
    keywords: "hot | pepper"
  },
  {
    no: 627,
    codes: "1F952",
    char: "🥒",
    name: "cucumber",
    keywords: "cucumber | food | pickle | vegetable"
  },
  {
    no: 628,
    codes: "1F96C",
    char: "🥬",
    name: "⊛ leafy green",
    keywords: "bok choy | cabbage | kale | lettuce"
  },
  {
    no: 629,
    codes: "1F966",
    char: "🥦",
    name: "broccoli",
    keywords: "broccoli | wild cabbage"
  },
  {
    no: 630,
    codes: "1F344",
    char: "🍄",
    name: "mushroom",
    keywords: "mushroom | toadstool"
  },
  {
    no: 631,
    codes: "1F95C",
    char: "🥜",
    name: "peanuts",
    keywords: "food | nut | peanut | peanuts | vegetable"
  },
  {
    no: 632,
    codes: "1F330",
    char: "🌰",
    name: "chestnut",
    keywords: "chestnut | plant"
  },
  {
    no: 633,
    codes: "1F35E",
    char: "🍞",
    name: "bread",
    keywords: "bread | loaf"
  },
  {
    no: 634,
    codes: "1F950",
    char: "🥐",
    name: "croissant",
    keywords: "bread | crescent roll | croissant | food | french"
  },
  {
    no: 635,
    codes: "1F956",
    char: "🥖",
    name: "baguette bread",
    keywords: "baguette | bread | food | french"
  },
  {
    no: 636,
    codes: "1F968",
    char: "🥨",
    name: "pretzel",
    keywords: "pretzel | twisted | convoluted"
  },
  {
    no: 637,
    codes: "1F96F",
    char: "🥯",
    name: "⊛ bagel",
    keywords: "bakery | schmear"
  },
  {
    no: 638,
    codes: "1F95E",
    char: "🥞",
    name: "pancakes",
    keywords: "crêpe | food | hotcake | pancake | pancakes"
  },
  {
    no: 639,
    codes: "1F9C0",
    char: "🧀",
    name: "cheese wedge",
    keywords: "cheese | cheese wedge"
  },
  {
    no: 640,
    codes: "1F356",
    char: "🍖",
    name: "meat on bone",
    keywords: "bone | meat | meat on bone"
  },
  {
    no: 641,
    codes: "1F357",
    char: "🍗",
    name: "poultry leg",
    keywords: "bone | chicken | drumstick | leg | poultry"
  },
  {
    no: 642,
    codes: "1F969",
    char: "🥩",
    name: "cut of meat",
    keywords: "chop | cut of meat | lambchop | porkchop | steak"
  },
  {
    no: 643,
    codes: "1F953",
    char: "🥓",
    name: "bacon",
    keywords: "bacon | food | meat"
  },
  {
    no: 644,
    codes: "1F354",
    char: "🍔",
    name: "hamburger",
    keywords: "burger | hamburger"
  },
  {
    no: 645,
    codes: "1F35F",
    char: "🍟",
    name: "french fries",
    keywords: "french | fries"
  },
  {
    no: 646,
    codes: "1F355",
    char: "🍕",
    name: "pizza",
    keywords: "cheese | pizza | slice"
  },
  {
    no: 647,
    codes: "1F32D",
    char: "🌭",
    name: "hot dog",
    keywords: "frankfurter | hot dog | hotdog | sausage"
  },
  {
    no: 648,
    codes: "1F96A",
    char: "🥪",
    name: "sandwich",
    keywords: "bread | sandwich"
  },
  {
    no: 649,
    codes: "1F32E",
    char: "🌮",
    name: "taco",
    keywords: "mexican | taco"
  },
  {
    no: 650,
    codes: "1F32F",
    char: "🌯",
    name: "burrito",
    keywords: "burrito | mexican | wrap"
  },
  {
    no: 651,
    codes: "1F959",
    char: "🥙",
    name: "stuffed flatbread",
    keywords: "falafel | flatbread | food | gyro | kebab | stuffed"
  },
  {
    no: 652,
    codes: "1F95A",
    char: "🥚",
    name: "egg",
    keywords: "egg | food"
  },
  {
    no: 653,
    codes: "1F373",
    char: "🍳",
    name: "cooking",
    keywords: "cooking | egg | frying | pan"
  },
  {
    no: 654,
    codes: "1F958",
    char: "🥘",
    name: "shallow pan of food",
    keywords: "casserole | food | paella | pan | shallow | shallow pan of food"
  },
  {
    no: 655,
    codes: "1F372",
    char: "🍲",
    name: "pot of food",
    keywords: "pot | pot of food | stew"
  },
  {
    no: 656,
    codes: "1F963",
    char: "🥣",
    name: "bowl with spoon",
    keywords: "bowl with spoon | breakfast | cereal | congee | oatmeal | porridge"
  },
  {
    no: 657,
    codes: "1F957",
    char: "🥗",
    name: "green salad",
    keywords: "food | green | salad"
  },
  {
    no: 658,
    codes: "1F37F",
    char: "🍿",
    name: "popcorn",
    keywords: "popcorn"
  },
  {
    no: 659,
    codes: "1F9C2",
    char: "🧂",
    name: "⊛ salt",
    keywords: "condiment | shaker"
  },
  {
    no: 660,
    codes: "1F96B",
    char: "🥫",
    name: "canned food",
    keywords: "can | canned food"
  },
  {
    no: 661,
    codes: "1F371",
    char: "🍱",
    name: "bento box",
    keywords: "bento | box"
  },
  {
    no: 662,
    codes: "1F358",
    char: "🍘",
    name: "rice cracker",
    keywords: "cracker | rice"
  },
  {
    no: 663,
    codes: "1F359",
    char: "🍙",
    name: "rice ball",
    keywords: "ball | Japanese | rice"
  },
  {
    no: 664,
    codes: "1F35A",
    char: "🍚",
    name: "cooked rice",
    keywords: "cooked | rice"
  },
  {
    no: 665,
    codes: "1F35B",
    char: "🍛",
    name: "curry rice",
    keywords: "curry | rice"
  },
  {
    no: 666,
    codes: "1F35C",
    char: "🍜",
    name: "steaming bowl",
    keywords: "bowl | noodle | ramen | steaming"
  },
  {
    no: 667,
    codes: "1F35D",
    char: "🍝",
    name: "spaghetti",
    keywords: "pasta | spaghetti"
  },
  {
    no: 668,
    codes: "1F360",
    char: "🍠",
    name: "roasted sweet potato",
    keywords: "potato | roasted | sweet"
  },
  {
    no: 669,
    codes: "1F362",
    char: "🍢",
    name: "oden",
    keywords: "kebab | oden | seafood | skewer | stick"
  },
  {
    no: 670,
    codes: "1F363",
    char: "🍣",
    name: "sushi",
    keywords: "sushi"
  },
  {
    no: 671,
    codes: "1F364",
    char: "🍤",
    name: "fried shrimp",
    keywords: "fried | prawn | shrimp | tempura"
  },
  {
    no: 672,
    codes: "1F365",
    char: "🍥",
    name: "fish cake with swirl",
    keywords: "cake | fish | fish cake with swirl | pastry | swirl"
  },
  {
    no: 673,
    codes: "1F96E",
    char: "🥮",
    name: "⊛ moon cake",
    keywords: "autumn | festival | yuèbǐng"
  },
  {
    no: 674,
    codes: "1F361",
    char: "🍡",
    name: "dango",
    keywords: "dango | dessert | Japanese | skewer | stick | sweet"
  },
  {
    no: 675,
    codes: "1F95F",
    char: "🥟",
    name: "dumpling",
    keywords: "dumpling | empanada | gyōza | jiaozi | pierogi | potsticker"
  },
  {
    no: 676,
    codes: "1F960",
    char: "🥠",
    name: "fortune cookie",
    keywords: "fortune cookie | prophecy"
  },
  {
    no: 677,
    codes: "1F961",
    char: "🥡",
    name: "takeout box",
    keywords: "oyster pail | takeout box"
  },
  {
    no: 678,
    codes: "1F366",
    char: "🍦",
    name: "soft ice cream",
    keywords: "cream | dessert | ice | icecream | soft | sweet"
  },
  {
    no: 679,
    codes: "1F367",
    char: "🍧",
    name: "shaved ice",
    keywords: "dessert | ice | shaved | sweet"
  },
  {
    no: 680,
    codes: "1F368",
    char: "🍨",
    name: "ice cream",
    keywords: "cream | dessert | ice | sweet"
  },
  {
    no: 681,
    codes: "1F369",
    char: "🍩",
    name: "doughnut",
    keywords: "dessert | donut | doughnut | sweet"
  },
  {
    no: 682,
    codes: "1F36A",
    char: "🍪",
    name: "cookie",
    keywords: "cookie | dessert | sweet"
  },
  {
    no: 683,
    codes: "1F382",
    char: "🎂",
    name: "birthday cake",
    keywords: "birthday | cake | celebration | dessert | pastry | sweet"
  },
  {
    no: 684,
    codes: "1F370",
    char: "🍰",
    name: "shortcake",
    keywords: "cake | dessert | pastry | shortcake | slice | sweet"
  },
  {
    no: 685,
    codes: "1F9C1",
    char: "🧁",
    name: "⊛ cupcake",
    keywords: "bakery | sweet"
  },
  {
    no: 686,
    codes: "1F967",
    char: "🥧",
    name: "pie",
    keywords: "filling | pastry | pie | fruit | meat"
  },
  {
    no: 687,
    codes: "1F36B",
    char: "🍫",
    name: "chocolate bar",
    keywords: "bar | chocolate | dessert | sweet"
  },
  {
    no: 688,
    codes: "1F36C",
    char: "🍬",
    name: "candy",
    keywords: "candy | dessert | sweet"
  },
  {
    no: 689,
    codes: "1F36D",
    char: "🍭",
    name: "lollipop",
    keywords: "candy | dessert | lollipop | sweet"
  },
  {
    no: 690,
    codes: "1F36E",
    char: "🍮",
    name: "custard",
    keywords: "custard | dessert | pudding | sweet"
  },
  {
    no: 691,
    codes: "1F36F",
    char: "🍯",
    name: "honey pot",
    keywords: "honey | honeypot | pot | sweet"
  },
  {
    no: 692,
    codes: "1F37C",
    char: "🍼",
    name: "baby bottle",
    keywords: "baby | bottle | drink | milk"
  },
  {
    no: 693,
    codes: "1F95B",
    char: "🥛",
    name: "glass of milk",
    keywords: "drink | glass | glass of milk | milk"
  },
  {
    no: 694,
    codes: "2615",
    char: "☕",
    name: "hot beverage",
    keywords: "beverage | coffee | drink | hot | steaming | tea"
  },
  {
    no: 695,
    codes: "1F375",
    char: "🍵",
    name: "teacup without handle",
    keywords: "beverage | cup | drink | tea | teacup | teacup without handle"
  },
  {
    no: 696,
    codes: "1F376",
    char: "🍶",
    name: "sake",
    keywords: "bar | beverage | bottle | cup | drink | sake"
  },
  {
    no: 697,
    codes: "1F37E",
    char: "🍾",
    name: "bottle with popping cork",
    keywords: "bar | bottle | bottle with popping cork | cork | drink | popping"
  },
  {
    no: 698,
    codes: "1F377",
    char: "🍷",
    name: "wine glass",
    keywords: "bar | beverage | drink | glass | wine"
  },
  {
    no: 699,
    codes: "1F378",
    char: "🍸",
    name: "cocktail glass",
    keywords: "bar | cocktail | drink | glass"
  },
  {
    no: 700,
    codes: "1F379",
    char: "🍹",
    name: "tropical drink",
    keywords: "bar | drink | tropical"
  },
  {
    no: 701,
    codes: "1F37A",
    char: "🍺",
    name: "beer mug",
    keywords: "bar | beer | drink | mug"
  },
  {
    no: 702,
    codes: "1F37B",
    char: "🍻",
    name: "clinking beer mugs",
    keywords: "bar | beer | clink | clinking beer mugs | drink | mug"
  },
  {
    no: 703,
    codes: "1F942",
    char: "🥂",
    name: "clinking glasses",
    keywords: "celebrate | clink | clinking glasses | drink | glass"
  },
  {
    no: 704,
    codes: "1F943",
    char: "🥃",
    name: "tumbler glass",
    keywords: "glass | liquor | shot | tumbler | whisky"
  },
  {
    no: 705,
    codes: "1F964",
    char: "🥤",
    name: "cup with straw",
    keywords: "cup with straw | juice | soda | malt | soft drink | water"
  },
  {
    no: 706,
    codes: "1F962",
    char: "🥢",
    name: "chopsticks",
    keywords: "chopsticks | hashi | jeotgarak | kuaizi"
  },
  {
    no: 707,
    codes: "1F37D",
    char: "🍽",
    name: "fork and knife with plate",
    keywords: "cooking | fork | fork and knife with plate | knife | plate"
  },
  {
    no: 708,
    codes: "1F374",
    char: "🍴",
    name: "fork and knife",
    keywords: "cooking | cutlery | fork | fork and knife | knife"
  },
  {
    no: 709,
    codes: "1F944",
    char: "🥄",
    name: "spoon",
    keywords: "spoon | tableware"
  },
  {
    no: 710,
    codes: "1F52A",
    char: "🔪",
    name: "kitchen knife",
    keywords: "cooking | hocho | kitchen knife | knife | tool | weapon"
  },
  {
    no: 711,
    codes: "1F3FA",
    char: "🏺",
    name: "amphora",
    keywords: "amphora | Aquarius | cooking | drink | jug | tool | weapon | zodiac"
  },
  {
    no: 712,
    codes: "1F30D",
    char: "🌍",
    name: "globe showing Europe-Africa",
    keywords: "Africa | earth | Europe | globe | globe showing Europe-Africa | world"
  },
  {
    no: 713,
    codes: "1F30E",
    char: "🌎",
    name: "globe showing Americas",
    keywords: "Americas | earth | globe | globe showing Americas | world"
  },
  {
    no: 714,
    codes: "1F30F",
    char: "🌏",
    name: "globe showing Asia-Australia",
    keywords: "Asia | Australia | earth | globe | globe showing Asia-Australia | world"
  },
  {
    no: 715,
    codes: "1F310",
    char: "🌐",
    name: "globe with meridians",
    keywords: "earth | globe | globe with meridians | meridians | world"
  },
  {
    no: 716,
    codes: "1F5FA",
    char: "🗺",
    name: "world map",
    keywords: "map | world"
  },
  {
    no: 717,
    codes: "1F5FE",
    char: "🗾",
    name: "map of Japan",
    keywords: "Japan | map | map of Japan"
  },
  {
    no: 718,
    codes: "1F9ED",
    char: "🧭",
    name: "⊛ compass",
    keywords: "magnetic | navigation | orienteering"
  },
  {
    no: 719,
    codes: "1F3D4",
    char: "🏔",
    name: "snow-capped mountain",
    keywords: "cold | mountain | snow | snow-capped mountain"
  },
  {
    no: 720,
    codes: "26F0",
    char: "⛰",
    name: "mountain",
    keywords: "mountain"
  },
  {
    no: 721,
    codes: "1F30B",
    char: "🌋",
    name: "volcano",
    keywords: "eruption | mountain | volcano"
  },
  {
    no: 722,
    codes: "1F5FB",
    char: "🗻",
    name: "mount fuji",
    keywords: "fuji | mount fuji | mountain"
  },
  {
    no: 723,
    codes: "1F3D5",
    char: "🏕",
    name: "camping",
    keywords: "camping"
  },
  {
    no: 724,
    codes: "1F3D6",
    char: "🏖",
    name: "beach with umbrella",
    keywords: "beach | beach with umbrella | umbrella"
  },
  {
    no: 725,
    codes: "1F3DC",
    char: "🏜",
    name: "desert",
    keywords: "desert"
  },
  {
    no: 726,
    codes: "1F3DD",
    char: "🏝",
    name: "desert island",
    keywords: "desert | island"
  },
  {
    no: 727,
    codes: "1F3DE",
    char: "🏞",
    name: "national park",
    keywords: "national park | park"
  },
  {
    no: 728,
    codes: "1F3DF",
    char: "🏟",
    name: "stadium",
    keywords: "stadium"
  },
  {
    no: 729,
    codes: "1F3DB",
    char: "🏛",
    name: "classical building",
    keywords: "classical | classical building"
  },
  {
    no: 730,
    codes: "1F3D7",
    char: "🏗",
    name: "building construction",
    keywords: "building construction | construction"
  },
  {
    no: 731,
    codes: "1F9F1",
    char: "🧱",
    name: "⊛ brick",
    keywords: "bricks | clay | mortar | wall"
  },
  {
    no: 732,
    codes: "1F3D8",
    char: "🏘",
    name: "houses",
    keywords: "houses"
  },
  {
    no: 733,
    codes: "1F3DA",
    char: "🏚",
    name: "derelict house",
    keywords: "derelict | house"
  },
  {
    no: 734,
    codes: "1F3E0",
    char: "🏠",
    name: "house",
    keywords: "home | house"
  },
  {
    no: 735,
    codes: "1F3E1",
    char: "🏡",
    name: "house with garden",
    keywords: "garden | home | house | house with garden"
  },
  {
    no: 736,
    codes: "1F3E2",
    char: "🏢",
    name: "office building",
    keywords: "building | office building"
  },
  {
    no: 737,
    codes: "1F3E3",
    char: "🏣",
    name: "Japanese post office",
    keywords: "Japanese | Japanese post office | post"
  },
  {
    no: 738,
    codes: "1F3E4",
    char: "🏤",
    name: "post office",
    keywords: "European | post | post office"
  },
  {
    no: 739,
    codes: "1F3E5",
    char: "🏥",
    name: "hospital",
    keywords: "doctor | hospital | medicine"
  },
  {
    no: 740,
    codes: "1F3E6",
    char: "🏦",
    name: "bank",
    keywords: "bank | building"
  },
  {
    no: 741,
    codes: "1F3E8",
    char: "🏨",
    name: "hotel",
    keywords: "building | hotel"
  },
  {
    no: 742,
    codes: "1F3E9",
    char: "🏩",
    name: "love hotel",
    keywords: "hotel | love"
  },
  {
    no: 743,
    codes: "1F3EA",
    char: "🏪",
    name: "convenience store",
    keywords: "convenience | store"
  },
  {
    no: 744,
    codes: "1F3EB",
    char: "🏫",
    name: "school",
    keywords: "building | school"
  },
  {
    no: 745,
    codes: "1F3EC",
    char: "🏬",
    name: "department store",
    keywords: "department | store"
  },
  {
    no: 746,
    codes: "1F3ED",
    char: "🏭",
    name: "factory",
    keywords: "building | factory"
  },
  {
    no: 747,
    codes: "1F3EF",
    char: "🏯",
    name: "Japanese castle",
    keywords: "castle | Japanese"
  },
  {
    no: 748,
    codes: "1F3F0",
    char: "🏰",
    name: "castle",
    keywords: "castle | European"
  },
  {
    no: 749,
    codes: "1F492",
    char: "💒",
    name: "wedding",
    keywords: "chapel | romance | wedding"
  },
  {
    no: 750,
    codes: "1F5FC",
    char: "🗼",
    name: "Tokyo tower",
    keywords: "Tokyo | tower"
  },
  {
    no: 751,
    codes: "1F5FD",
    char: "🗽",
    name: "Statue of Liberty",
    keywords: "liberty | statue | Statue of Liberty"
  },
  {
    no: 752,
    codes: "26EA",
    char: "⛪",
    name: "church",
    keywords: "Christian | church | cross | religion"
  },
  {
    no: 753,
    codes: "1F54C",
    char: "🕌",
    name: "mosque",
    keywords: "islam | mosque | Muslim | religion"
  },
  {
    no: 754,
    codes: "1F54D",
    char: "🕍",
    name: "synagogue",
    keywords: "Jew | Jewish | religion | synagogue | temple"
  },
  {
    no: 755,
    codes: "26E9",
    char: "⛩",
    name: "shinto shrine",
    keywords: "religion | shinto | shrine"
  },
  {
    no: 756,
    codes: "1F54B",
    char: "🕋",
    name: "kaaba",
    keywords: "islam | kaaba | Muslim | religion"
  },
  {
    no: 757,
    codes: "26F2",
    char: "⛲",
    name: "fountain",
    keywords: "fountain"
  },
  {
    no: 758,
    codes: "26FA",
    char: "⛺",
    name: "tent",
    keywords: "camping | tent"
  },
  {
    no: 759,
    codes: "1F301",
    char: "🌁",
    name: "foggy",
    keywords: "fog | foggy"
  },
  {
    no: 760,
    codes: "1F303",
    char: "🌃",
    name: "night with stars",
    keywords: "night | night with stars | star"
  },
  {
    no: 761,
    codes: "1F3D9",
    char: "🏙",
    name: "cityscape",
    keywords: "city | cityscape"
  },
  {
    no: 762,
    codes: "1F304",
    char: "🌄",
    name: "sunrise over mountains",
    keywords: "morning | mountain | sun | sunrise | sunrise over mountains"
  },
  {
    no: 763,
    codes: "1F305",
    char: "🌅",
    name: "sunrise",
    keywords: "morning | sun | sunrise"
  },
  {
    no: 764,
    codes: "1F306",
    char: "🌆",
    name: "cityscape at dusk",
    keywords: "city | cityscape at dusk | dusk | evening | landscape | sun | sunset"
  },
  {
    no: 765,
    codes: "1F307",
    char: "🌇",
    name: "sunset",
    keywords: "dusk | sun | sunset"
  },
  {
    no: 766,
    codes: "1F309",
    char: "🌉",
    name: "bridge at night",
    keywords: "bridge | bridge at night | night"
  },
  {
    no: 767,
    codes: "2668",
    char: "♨",
    name: "hot springs",
    keywords: "hot | hotsprings | springs | steaming"
  },
  {
    no: 768,
    codes: "1F30C",
    char: "🌌",
    name: "milky way",
    keywords: "milky way | space"
  },
  {
    no: 769,
    codes: "1F3A0",
    char: "🎠",
    name: "carousel horse",
    keywords: "carousel | horse"
  },
  {
    no: 770,
    codes: "1F3A1",
    char: "🎡",
    name: "ferris wheel",
    keywords: "amusement park | ferris | wheel"
  },
  {
    no: 771,
    codes: "1F3A2",
    char: "🎢",
    name: "roller coaster",
    keywords: "amusement park | coaster | roller"
  },
  {
    no: 772,
    codes: "1F488",
    char: "💈",
    name: "barber pole",
    keywords: "barber | haircut | pole"
  },
  {
    no: 773,
    codes: "1F3AA",
    char: "🎪",
    name: "circus tent",
    keywords: "circus | tent"
  },
  {
    no: 774,
    codes: "1F682",
    char: "🚂",
    name: "locomotive",
    keywords: "engine | locomotive | railway | steam | train"
  },
  {
    no: 775,
    codes: "1F683",
    char: "🚃",
    name: "railway car",
    keywords: "car | electric | railway | train | tram | trolleybus"
  },
  {
    no: 776,
    codes: "1F684",
    char: "🚄",
    name: "high-speed train",
    keywords: "high-speed train | railway | shinkansen | speed | train"
  },
  {
    no: 777,
    codes: "1F685",
    char: "🚅",
    name: "bullet train",
    keywords: "bullet | railway | shinkansen | speed | train"
  },
  {
    no: 778,
    codes: "1F686",
    char: "🚆",
    name: "train",
    keywords: "railway | train"
  },
  {
    no: 779,
    codes: "1F687",
    char: "🚇",
    name: "metro",
    keywords: "metro | subway"
  },
  {
    no: 780,
    codes: "1F688",
    char: "🚈",
    name: "light rail",
    keywords: "light rail | railway"
  },
  {
    no: 781,
    codes: "1F689",
    char: "🚉",
    name: "station",
    keywords: "railway | station | train"
  },
  {
    no: 782,
    codes: "1F68A",
    char: "🚊",
    name: "tram",
    keywords: "tram | trolleybus"
  },
  {
    no: 783,
    codes: "1F69D",
    char: "🚝",
    name: "monorail",
    keywords: "monorail | vehicle"
  },
  {
    no: 784,
    codes: "1F69E",
    char: "🚞",
    name: "mountain railway",
    keywords: "car | mountain | railway"
  },
  {
    no: 785,
    codes: "1F68B",
    char: "🚋",
    name: "tram car",
    keywords: "car | tram | trolleybus"
  },
  {
    no: 786,
    codes: "1F68C",
    char: "🚌",
    name: "bus",
    keywords: "bus | vehicle"
  },
  {
    no: 787,
    codes: "1F68D",
    char: "🚍",
    name: "oncoming bus",
    keywords: "bus | oncoming"
  },
  {
    no: 788,
    codes: "1F68E",
    char: "🚎",
    name: "trolleybus",
    keywords: "bus | tram | trolley | trolleybus"
  },
  {
    no: 789,
    codes: "1F690",
    char: "🚐",
    name: "minibus",
    keywords: "bus | minibus"
  },
  {
    no: 790,
    codes: "1F691",
    char: "🚑",
    name: "ambulance",
    keywords: "ambulance | vehicle"
  },
  {
    no: 791,
    codes: "1F692",
    char: "🚒",
    name: "fire engine",
    keywords: "engine | fire | truck"
  },
  {
    no: 792,
    codes: "1F693",
    char: "🚓",
    name: "police car",
    keywords: "car | patrol | police"
  },
  {
    no: 793,
    codes: "1F694",
    char: "🚔",
    name: "oncoming police car",
    keywords: "car | oncoming | police"
  },
  {
    no: 794,
    codes: "1F695",
    char: "🚕",
    name: "taxi",
    keywords: "taxi | vehicle"
  },
  {
    no: 795,
    codes: "1F696",
    char: "🚖",
    name: "oncoming taxi",
    keywords: "oncoming | taxi"
  },
  {
    no: 796,
    codes: "1F697",
    char: "🚗",
    name: "automobile",
    keywords: "automobile | car"
  },
  {
    no: 797,
    codes: "1F698",
    char: "🚘",
    name: "oncoming automobile",
    keywords: "automobile | car | oncoming"
  },
  {
    no: 798,
    codes: "1F699",
    char: "🚙",
    name: "sport utility vehicle",
    keywords: "recreational | sport utility | sport utility vehicle"
  },
  {
    no: 799,
    codes: "1F69A",
    char: "🚚",
    name: "delivery truck",
    keywords: "delivery | truck"
  },
  {
    no: 800,
    codes: "1F69B",
    char: "🚛",
    name: "articulated lorry",
    keywords: "articulated lorry | lorry | semi | truck"
  },
  {
    no: 801,
    codes: "1F69C",
    char: "🚜",
    name: "tractor",
    keywords: "tractor | vehicle"
  },
  {
    no: 802,
    codes: "1F6B2",
    char: "🚲",
    name: "bicycle",
    keywords: "bicycle | bike"
  },
  {
    no: 803,
    codes: "1F6F4",
    char: "🛴",
    name: "kick scooter",
    keywords: "kick | scooter"
  },
  {
    no: 804,
    codes: "1F6F9",
    char: "🛹",
    name: "⊛ skateboard",
    keywords: "board"
  },
  {
    no: 805,
    codes: "1F6F5",
    char: "🛵",
    name: "motor scooter",
    keywords: "motor | scooter"
  },
  {
    no: 806,
    codes: "1F68F",
    char: "🚏",
    name: "bus stop",
    keywords: "bus | busstop | stop"
  },
  {
    no: 807,
    codes: "1F6E3",
    char: "🛣",
    name: "motorway",
    keywords: "highway | motorway | road"
  },
  {
    no: 808,
    codes: "1F6E4",
    char: "🛤",
    name: "railway track",
    keywords: "railway | railway track | train"
  },
  {
    no: 809,
    codes: "1F6E2",
    char: "🛢",
    name: "oil drum",
    keywords: "drum | oil"
  },
  {
    no: 810,
    codes: "26FD",
    char: "⛽",
    name: "fuel pump",
    keywords: "diesel | fuel | fuelpump | gas | pump | station"
  },
  {
    no: 811,
    codes: "1F6A8",
    char: "🚨",
    name: "police car light",
    keywords: "beacon | car | light | police | revolving"
  },
  {
    no: 812,
    codes: "1F6A5",
    char: "🚥",
    name: "horizontal traffic light",
    keywords: "horizontal traffic light | light | signal | traffic"
  },
  {
    no: 813,
    codes: "1F6A6",
    char: "🚦",
    name: "vertical traffic light",
    keywords: "light | signal | traffic | vertical traffic light"
  },
  {
    no: 814,
    codes: "1F6D1",
    char: "🛑",
    name: "stop sign",
    keywords: "octagonal | sign | stop"
  },
  {
    no: 815,
    codes: "1F6A7",
    char: "🚧",
    name: "construction",
    keywords: "barrier | construction"
  },
  {
    no: 816,
    codes: "2693",
    char: "⚓",
    name: "anchor",
    keywords: "anchor | ship | tool"
  },
  {
    no: 817,
    codes: "26F5",
    char: "⛵",
    name: "sailboat",
    keywords: "boat | resort | sailboat | sea | yacht"
  },
  {
    no: 818,
    codes: "1F6F6",
    char: "🛶",
    name: "canoe",
    keywords: "boat | canoe"
  },
  {
    no: 819,
    codes: "1F6A4",
    char: "🚤",
    name: "speedboat",
    keywords: "boat | speedboat"
  },
  {
    no: 820,
    codes: "1F6F3",
    char: "🛳",
    name: "passenger ship",
    keywords: "passenger | ship"
  },
  {
    no: 821,
    codes: "26F4",
    char: "⛴",
    name: "ferry",
    keywords: "boat | ferry | passenger"
  },
  {
    no: 822,
    codes: "1F6E5",
    char: "🛥",
    name: "motor boat",
    keywords: "boat | motor boat | motorboat"
  },
  {
    no: 823,
    codes: "1F6A2",
    char: "🚢",
    name: "ship",
    keywords: "boat | passenger | ship"
  },
  {
    no: 824,
    codes: "2708",
    char: "✈",
    name: "airplane",
    keywords: "aeroplane | airplane"
  },
  {
    no: 825,
    codes: "1F6E9",
    char: "🛩",
    name: "small airplane",
    keywords: "aeroplane | airplane | small airplane"
  },
  {
    no: 826,
    codes: "1F6EB",
    char: "🛫",
    name: "airplane departure",
    keywords: "aeroplane | airplane | check-in | departure | departures"
  },
  {
    no: 827,
    codes: "1F6EC",
    char: "🛬",
    name: "airplane arrival",
    keywords: "aeroplane | airplane | airplane arrival | arrivals | arriving | landing"
  },
  {
    no: 828,
    codes: "1F4BA",
    char: "💺",
    name: "seat",
    keywords: "chair | seat"
  },
  {
    no: 829,
    codes: "1F681",
    char: "🚁",
    name: "helicopter",
    keywords: "helicopter | vehicle"
  },
  {
    no: 830,
    codes: "1F69F",
    char: "🚟",
    name: "suspension railway",
    keywords: "railway | suspension"
  },
  {
    no: 831,
    codes: "1F6A0",
    char: "🚠",
    name: "mountain cableway",
    keywords: "cable | gondola | mountain | mountain cableway"
  },
  {
    no: 832,
    codes: "1F6A1",
    char: "🚡",
    name: "aerial tramway",
    keywords: "aerial | cable | car | gondola | tramway"
  },
  {
    no: 833,
    codes: "1F6F0",
    char: "🛰",
    name: "satellite",
    keywords: "satellite | space"
  },
  {
    no: 834,
    codes: "1F680",
    char: "🚀",
    name: "rocket",
    keywords: "rocket | space"
  },
  {
    no: 835,
    codes: "1F6F8",
    char: "🛸",
    name: "flying saucer",
    keywords: "flying saucer | UFO"
  },
  {
    no: 836,
    codes: "1F6CE",
    char: "🛎",
    name: "bellhop bell",
    keywords: "bell | bellhop | hotel"
  },
  {
    no: 837,
    codes: "1F9F3",
    char: "🧳",
    name: "⊛ luggage",
    keywords: "packing | travel"
  },
  {
    no: 838,
    codes: "231B",
    char: "⌛",
    name: "hourglass done",
    keywords: "hourglass done | sand | timer"
  },
  {
    no: 839,
    codes: "23F3",
    char: "⏳",
    name: "hourglass not done",
    keywords: "hourglass | hourglass not done | sand | timer"
  },
  {
    no: 840,
    codes: "231A",
    char: "⌚",
    name: "watch",
    keywords: "clock | watch"
  },
  {
    no: 841,
    codes: "23F0",
    char: "⏰",
    name: "alarm clock",
    keywords: "alarm | clock"
  },
  {
    no: 842,
    codes: "23F1",
    char: "⏱",
    name: "stopwatch",
    keywords: "clock | stopwatch"
  },
  {
    no: 843,
    codes: "23F2",
    char: "⏲",
    name: "timer clock",
    keywords: "clock | timer"
  },
  {
    no: 844,
    codes: "1F570",
    char: "🕰",
    name: "mantelpiece clock",
    keywords: "clock | mantelpiece clock"
  },
  {
    no: 845,
    codes: "1F55B",
    char: "🕛",
    name: "twelve o’clock",
    keywords: "00 | 12 | 12:00 | clock | o’clock | twelve"
  },
  {
    no: 846,
    codes: "1F567",
    char: "🕧",
    name: "twelve-thirty",
    keywords: "12 | 12:30 | 30 | clock | thirty | twelve | twelve-thirty"
  },
  {
    no: 847,
    codes: "1F550",
    char: "🕐",
    name: "one o’clock",
    keywords: "00 | 1 | 1:00 | clock | o’clock | one"
  },
  {
    no: 848,
    codes: "1F55C",
    char: "🕜",
    name: "one-thirty",
    keywords: "1 | 1:30 | 30 | clock | one | one-thirty | thirty"
  },
  {
    no: 849,
    codes: "1F551",
    char: "🕑",
    name: "two o’clock",
    keywords: "00 | 2 | 2:00 | clock | o’clock | two"
  },
  {
    no: 850,
    codes: "1F55D",
    char: "🕝",
    name: "two-thirty",
    keywords: "2 | 2:30 | 30 | clock | thirty | two | two-thirty"
  },
  {
    no: 851,
    codes: "1F552",
    char: "🕒",
    name: "three o’clock",
    keywords: "00 | 3 | 3:00 | clock | o’clock | three"
  },
  {
    no: 852,
    codes: "1F55E",
    char: "🕞",
    name: "three-thirty",
    keywords: "3 | 3:30 | 30 | clock | thirty | three | three-thirty"
  },
  {
    no: 853,
    codes: "1F553",
    char: "🕓",
    name: "four o’clock",
    keywords: "00 | 4 | 4:00 | clock | four | o’clock"
  },
  {
    no: 854,
    codes: "1F55F",
    char: "🕟",
    name: "four-thirty",
    keywords: "30 | 4 | 4:30 | clock | four | four-thirty | thirty"
  },
  {
    no: 855,
    codes: "1F554",
    char: "🕔",
    name: "five o’clock",
    keywords: "00 | 5 | 5:00 | clock | five | o’clock"
  },
  {
    no: 856,
    codes: "1F560",
    char: "🕠",
    name: "five-thirty",
    keywords: "30 | 5 | 5:30 | clock | five | five-thirty | thirty"
  },
  {
    no: 857,
    codes: "1F555",
    char: "🕕",
    name: "six o’clock",
    keywords: "00 | 6 | 6:00 | clock | o’clock | six"
  },
  {
    no: 858,
    codes: "1F561",
    char: "🕡",
    name: "six-thirty",
    keywords: "30 | 6 | 6:30 | clock | six | six-thirty | thirty"
  },
  {
    no: 859,
    codes: "1F556",
    char: "🕖",
    name: "seven o’clock",
    keywords: "00 | 7 | 7:00 | clock | o’clock | seven"
  },
  {
    no: 860,
    codes: "1F562",
    char: "🕢",
    name: "seven-thirty",
    keywords: "30 | 7 | 7:30 | clock | seven | seven-thirty | thirty"
  },
  {
    no: 861,
    codes: "1F557",
    char: "🕗",
    name: "eight o’clock",
    keywords: "00 | 8 | 8:00 | clock | eight | o’clock"
  },
  {
    no: 862,
    codes: "1F563",
    char: "🕣",
    name: "eight-thirty",
    keywords: "30 | 8 | 8:30 | clock | eight | eight-thirty | thirty"
  },
  {
    no: 863,
    codes: "1F558",
    char: "🕘",
    name: "nine o’clock",
    keywords: "00 | 9 | 9:00 | clock | nine | o’clock"
  },
  {
    no: 864,
    codes: "1F564",
    char: "🕤",
    name: "nine-thirty",
    keywords: "30 | 9 | 9:30 | clock | nine | nine-thirty | thirty"
  },
  {
    no: 865,
    codes: "1F559",
    char: "🕙",
    name: "ten o’clock",
    keywords: "00 | 10 | 10:00 | clock | o’clock | ten"
  },
  {
    no: 866,
    codes: "1F565",
    char: "🕥",
    name: "ten-thirty",
    keywords: "10 | 10:30 | 30 | clock | ten | ten-thirty | thirty"
  },
  {
    no: 867,
    codes: "1F55A",
    char: "🕚",
    name: "eleven o’clock",
    keywords: "00 | 11 | 11:00 | clock | eleven | o’clock"
  },
  {
    no: 868,
    codes: "1F566",
    char: "🕦",
    name: "eleven-thirty",
    keywords: "11 | 11:30 | 30 | clock | eleven | eleven-thirty | thirty"
  },
  {
    no: 869,
    codes: "1F311",
    char: "🌑",
    name: "new moon",
    keywords: "dark | moon | new moon"
  },
  {
    no: 870,
    codes: "1F312",
    char: "🌒",
    name: "waxing crescent moon",
    keywords: "crescent | moon | waxing"
  },
  {
    no: 871,
    codes: "1F313",
    char: "🌓",
    name: "first quarter moon",
    keywords: "first quarter moon | moon | quarter"
  },
  {
    no: 872,
    codes: "1F314",
    char: "🌔",
    name: "waxing gibbous moon",
    keywords: "gibbous | moon | waxing"
  },
  {
    no: 873,
    codes: "1F315",
    char: "🌕",
    name: "full moon",
    keywords: "full | moon"
  },
  {
    no: 874,
    codes: "1F316",
    char: "🌖",
    name: "waning gibbous moon",
    keywords: "gibbous | moon | waning"
  },
  {
    no: 875,
    codes: "1F317",
    char: "🌗",
    name: "last quarter moon",
    keywords: "last quarter moon | moon | quarter"
  },
  {
    no: 876,
    codes: "1F318",
    char: "🌘",
    name: "waning crescent moon",
    keywords: "crescent | moon | waning"
  },
  {
    no: 877,
    codes: "1F319",
    char: "🌙",
    name: "crescent moon",
    keywords: "crescent | moon"
  },
  {
    no: 878,
    codes: "1F31A",
    char: "🌚",
    name: "new moon face",
    keywords: "face | moon | new moon face"
  },
  {
    no: 879,
    codes: "1F31B",
    char: "🌛",
    name: "first quarter moon face",
    keywords: "face | first quarter moon face | moon | quarter"
  },
  {
    no: 880,
    codes: "1F31C",
    char: "🌜",
    name: "last quarter moon face",
    keywords: "face | last quarter moon face | moon | quarter"
  },
  {
    no: 881,
    codes: "1F321",
    char: "🌡",
    name: "thermometer",
    keywords: "thermometer | weather"
  },
  {
    no: 882,
    codes: "2600",
    char: "☀",
    name: "sun",
    keywords: "bright | rays | sun | sunny"
  },
  {
    no: 883,
    codes: "1F31D",
    char: "🌝",
    name: "full moon face",
    keywords: "bright | face | full | moon"
  },
  {
    no: 884,
    codes: "1F31E",
    char: "🌞",
    name: "sun with face",
    keywords: "bright | face | sun | sun with face"
  },
  {
    no: 885,
    codes: "2B50",
    char: "⭐",
    name: "star",
    keywords: "star"
  },
  {
    no: 886,
    codes: "1F31F",
    char: "🌟",
    name: "glowing star",
    keywords: "glittery | glow | glowing star | shining | sparkle | star"
  },
  {
    no: 887,
    codes: "1F320",
    char: "🌠",
    name: "shooting star",
    keywords: "falling | shooting | star"
  },
  {
    no: 888,
    codes: "2601",
    char: "☁",
    name: "cloud",
    keywords: "cloud | weather"
  },
  {
    no: 889,
    codes: "26C5",
    char: "⛅",
    name: "sun behind cloud",
    keywords: "cloud | sun | sun behind cloud"
  },
  {
    no: 890,
    codes: "26C8",
    char: "⛈",
    name: "cloud with lightning and rain",
    keywords: "cloud | cloud with lightning and rain | rain | thunder"
  },
  {
    no: 891,
    codes: "1F324",
    char: "🌤",
    name: "sun behind small cloud",
    keywords: "cloud | sun | sun behind small cloud"
  },
  {
    no: 892,
    codes: "1F325",
    char: "🌥",
    name: "sun behind large cloud",
    keywords: "cloud | sun | sun behind large cloud"
  },
  {
    no: 893,
    codes: "1F326",
    char: "🌦",
    name: "sun behind rain cloud",
    keywords: "cloud | rain | sun | sun behind rain cloud"
  },
  {
    no: 894,
    codes: "1F327",
    char: "🌧",
    name: "cloud with rain",
    keywords: "cloud | cloud with rain | rain"
  },
  {
    no: 895,
    codes: "1F328",
    char: "🌨",
    name: "cloud with snow",
    keywords: "cloud | cloud with snow | cold | snow"
  },
  {
    no: 896,
    codes: "1F329",
    char: "🌩",
    name: "cloud with lightning",
    keywords: "cloud | cloud with lightning | lightning"
  },
  {
    no: 897,
    codes: "1F32A",
    char: "🌪",
    name: "tornado",
    keywords: "cloud | tornado | whirlwind"
  },
  {
    no: 898,
    codes: "1F32B",
    char: "🌫",
    name: "fog",
    keywords: "cloud | fog"
  },
  {
    no: 899,
    codes: "1F32C",
    char: "🌬",
    name: "wind face",
    keywords: "blow | cloud | face | wind"
  },
  {
    no: 900,
    codes: "1F300",
    char: "🌀",
    name: "cyclone",
    keywords: "cyclone | dizzy | hurricane | twister | typhoon"
  },
  {
    no: 901,
    codes: "1F308",
    char: "🌈",
    name: "rainbow",
    keywords: "rain | rainbow"
  },
  {
    no: 902,
    codes: "1F302",
    char: "🌂",
    name: "closed umbrella",
    keywords: "closed umbrella | clothing | rain | umbrella"
  },
  {
    no: 903,
    codes: "2602",
    char: "☂",
    name: "umbrella",
    keywords: "clothing | rain | umbrella"
  },
  {
    no: 904,
    codes: "2614",
    char: "☔",
    name: "umbrella with rain drops",
    keywords: "clothing | drop | rain | umbrella | umbrella with rain drops"
  },
  {
    no: 905,
    codes: "26F1",
    char: "⛱",
    name: "umbrella on ground",
    keywords: "rain | sun | umbrella | umbrella on ground"
  },
  {
    no: 906,
    codes: "26A1",
    char: "⚡",
    name: "high voltage",
    keywords: "danger | electric | electricity | high voltage | lightning | voltage | zap"
  },
  {
    no: 907,
    codes: "2744",
    char: "❄",
    name: "snowflake",
    keywords: "cold | snow | snowflake"
  },
  {
    no: 908,
    codes: "2603",
    char: "☃",
    name: "snowman",
    keywords: "cold | snow | snowman"
  },
  {
    no: 909,
    codes: "26C4",
    char: "⛄",
    name: "snowman without snow",
    keywords: "cold | snow | snowman | snowman without snow"
  },
  {
    no: 910,
    codes: "2604",
    char: "☄",
    name: "comet",
    keywords: "comet | space"
  },
  {
    no: 911,
    codes: "1F525",
    char: "🔥",
    name: "fire",
    keywords: "fire | flame | tool"
  },
  {
    no: 912,
    codes: "1F4A7",
    char: "💧",
    name: "droplet",
    keywords: "cold | comic | drop | droplet | sweat"
  },
  {
    no: 913,
    codes: "1F30A",
    char: "🌊",
    name: "water wave",
    keywords: "ocean | water | wave"
  },
  {
    no: 914,
    codes: "1F383",
    char: "🎃",
    name: "jack-o-lantern",
    keywords: "celebration | halloween | jack | jack-o-lantern | lantern"
  },
  {
    no: 915,
    codes: "1F384",
    char: "🎄",
    name: "Christmas tree",
    keywords: "celebration | Christmas | tree"
  },
  {
    no: 916,
    codes: "1F386",
    char: "🎆",
    name: "fireworks",
    keywords: "celebration | fireworks"
  },
  {
    no: 917,
    codes: "1F387",
    char: "🎇",
    name: "sparkler",
    keywords: "celebration | fireworks | sparkle | sparkler"
  },
  {
    no: 918,
    codes: "1F9E8",
    char: "🧨",
    name: "⊛ firecracker",
    keywords: "dynamite | explosive | fireworks"
  },
  {
    no: 919,
    codes: "2728",
    char: "✨",
    name: "sparkles",
    keywords: "sparkle | sparkles | star"
  },
  {
    no: 920,
    codes: "1F388",
    char: "🎈",
    name: "balloon",
    keywords: "balloon | celebration"
  },
  {
    no: 921,
    codes: "1F389",
    char: "🎉",
    name: "party popper",
    keywords: "celebration | party | popper | tada"
  },
  {
    no: 922,
    codes: "1F38A",
    char: "🎊",
    name: "confetti ball",
    keywords: "ball | celebration | confetti"
  },
  {
    no: 923,
    codes: "1F38B",
    char: "🎋",
    name: "tanabata tree",
    keywords: "banner | celebration | Japanese | tanabata tree | tree"
  },
  {
    no: 924,
    codes: "1F38D",
    char: "🎍",
    name: "pine decoration",
    keywords: "bamboo | celebration | Japanese | pine | pine decoration"
  },
  {
    no: 925,
    codes: "1F38E",
    char: "🎎",
    name: "Japanese dolls",
    keywords: "celebration | doll | festival | Japanese | Japanese dolls"
  },
  {
    no: 926,
    codes: "1F38F",
    char: "🎏",
    name: "carp streamer",
    keywords: "carp | celebration | streamer"
  },
  {
    no: 927,
    codes: "1F390",
    char: "🎐",
    name: "wind chime",
    keywords: "bell | celebration | chime | wind"
  },
  {
    no: 928,
    codes: "1F391",
    char: "🎑",
    name: "moon viewing ceremony",
    keywords: "celebration | ceremony | moon | moon viewing ceremony"
  },
  {
    no: 929,
    codes: "1F9E7",
    char: "🧧",
    name: "⊛ red envelope",
    keywords: "gift | good luck | hóngbāo | lai see | money"
  },
  {
    no: 930,
    codes: "1F380",
    char: "🎀",
    name: "ribbon",
    keywords: "celebration | ribbon"
  },
  {
    no: 931,
    codes: "1F381",
    char: "🎁",
    name: "wrapped gift",
    keywords: "box | celebration | gift | present | wrapped"
  },
  {
    no: 932,
    codes: "1F397",
    char: "🎗",
    name: "reminder ribbon",
    keywords: "celebration | reminder | ribbon"
  },
  {
    no: 933,
    codes: "1F39F",
    char: "🎟",
    name: "admission tickets",
    keywords: "admission | admission tickets | ticket"
  },
  {
    no: 934,
    codes: "1F3AB",
    char: "🎫",
    name: "ticket",
    keywords: "admission | ticket"
  },
  {
    no: 935,
    codes: "1F396",
    char: "🎖",
    name: "military medal",
    keywords: "celebration | medal | military"
  },
  {
    no: 936,
    codes: "1F3C6",
    char: "🏆",
    name: "trophy",
    keywords: "prize | trophy"
  },
  {
    no: 937,
    codes: "1F3C5",
    char: "🏅",
    name: "sports medal",
    keywords: "medal | sports medal"
  },
  {
    no: 938,
    codes: "1F947",
    char: "🥇",
    name: "1st place medal",
    keywords: "1st place medal | first | gold | medal"
  },
  {
    no: 939,
    codes: "1F948",
    char: "🥈",
    name: "2nd place medal",
    keywords: "2nd place medal | medal | second | silver"
  },
  {
    no: 940,
    codes: "1F949",
    char: "🥉",
    name: "3rd place medal",
    keywords: "3rd place medal | bronze | medal | third"
  },
  {
    no: 941,
    codes: "26BD",
    char: "⚽",
    name: "soccer ball",
    keywords: "ball | football | soccer"
  },
  {
    no: 942,
    codes: "26BE",
    char: "⚾",
    name: "baseball",
    keywords: "ball | baseball"
  },
  {
    no: 943,
    codes: "1F94E",
    char: "🥎",
    name: "⊛ softball",
    keywords: "ball | glove | underarm"
  },
  {
    no: 944,
    codes: "1F3C0",
    char: "🏀",
    name: "basketball",
    keywords: "ball | basketball | hoop"
  },
  {
    no: 945,
    codes: "1F3D0",
    char: "🏐",
    name: "volleyball",
    keywords: "ball | game | volleyball"
  },
  {
    no: 946,
    codes: "1F3C8",
    char: "🏈",
    name: "american football",
    keywords: "american | ball | football"
  },
  {
    no: 947,
    codes: "1F3C9",
    char: "🏉",
    name: "rugby football",
    keywords: "ball | football | rugby"
  },
  {
    no: 948,
    codes: "1F3BE",
    char: "🎾",
    name: "tennis",
    keywords: "ball | racquet | tennis"
  },
  {
    no: 949,
    codes: "1F94F",
    char: "🥏",
    name: "⊛ flying disc",
    keywords: "ultimate"
  },
  {
    no: 950,
    codes: "1F3B3",
    char: "🎳",
    name: "bowling",
    keywords: "ball | bowling | game"
  },
  {
    no: 951,
    codes: "1F3CF",
    char: "🏏",
    name: "cricket game",
    keywords: "ball | bat | cricket game | game"
  },
  {
    no: 952,
    codes: "1F3D1",
    char: "🏑",
    name: "field hockey",
    keywords: "ball | field | game | hockey | stick"
  },
  {
    no: 953,
    codes: "1F3D2",
    char: "🏒",
    name: "ice hockey",
    keywords: "game | hockey | ice | puck | stick"
  },
  {
    no: 954,
    codes: "1F94D",
    char: "🥍",
    name: "⊛ lacrosse",
    keywords: "ball | goal | stick"
  },
  {
    no: 955,
    codes: "1F3D3",
    char: "🏓",
    name: "ping pong",
    keywords: "ball | bat | game | paddle | ping pong | table tennis"
  },
  {
    no: 956,
    codes: "1F3F8",
    char: "🏸",
    name: "badminton",
    keywords: "badminton | birdie | game | racquet | shuttlecock"
  },
  {
    no: 957,
    codes: "1F94A",
    char: "🥊",
    name: "boxing glove",
    keywords: "boxing | glove"
  },
  {
    no: 958,
    codes: "1F94B",
    char: "🥋",
    name: "martial arts uniform",
    keywords: "judo | karate | martial arts | martial arts uniform | taekwondo | uniform"
  },
  {
    no: 959,
    codes: "1F945",
    char: "🥅",
    name: "goal net",
    keywords: "goal | net"
  },
  {
    no: 960,
    codes: "26F3",
    char: "⛳",
    name: "flag in hole",
    keywords: "flag in hole | golf | hole"
  },
  {
    no: 961,
    codes: "26F8",
    char: "⛸",
    name: "ice skate",
    keywords: "ice | skate"
  },
  {
    no: 962,
    codes: "1F3A3",
    char: "🎣",
    name: "fishing pole",
    keywords: "fish | fishing pole | pole"
  },
  {
    no: 963,
    codes: "1F3BD",
    char: "🎽",
    name: "running shirt",
    keywords: "athletics | running | sash | shirt"
  },
  {
    no: 964,
    codes: "1F3BF",
    char: "🎿",
    name: "skis",
    keywords: "ski | skis | snow"
  },
  {
    no: 965,
    codes: "1F6F7",
    char: "🛷",
    name: "sled",
    keywords: "sled | sledge | sleigh | luge | toboggan"
  },
  {
    no: 966,
    codes: "1F94C",
    char: "🥌",
    name: "curling stone",
    keywords: "curling stone | game | rock"
  },
  {
    no: 967,
    codes: "1F3AF",
    char: "🎯",
    name: "direct hit",
    keywords: "bull | bullseye | dart | direct hit | eye | game | hit | target"
  },
  {
    no: 968,
    codes: "1F3B1",
    char: "🎱",
    name: "pool 8 ball",
    keywords: "8 | ball | billiard | eight | game | pool 8 ball"
  },
  {
    no: 969,
    codes: "1F52E",
    char: "🔮",
    name: "crystal ball",
    keywords: "ball | crystal | fairy tale | fantasy | fortune | tool"
  },
  {
    no: 970,
    codes: "1F9FF",
    char: "🧿",
    name: "⊛ nazar amulet",
    keywords: "bead | charm | evil-eye | nazar | talisman"
  },
  {
    no: 971,
    codes: "1F3AE",
    char: "🎮",
    name: "video game",
    keywords: "controller | game | video game"
  },
  {
    no: 972,
    codes: "1F579",
    char: "🕹",
    name: "joystick",
    keywords: "game | joystick | video game"
  },
  {
    no: 973,
    codes: "1F3B0",
    char: "🎰",
    name: "slot machine",
    keywords: "game | slot | slot machine"
  },
  {
    no: 974,
    codes: "1F3B2",
    char: "🎲",
    name: "game die",
    keywords: "dice | die | game"
  },
  {
    no: 975,
    codes: "1F9E9",
    char: "🧩",
    name: "⊛ jigsaw",
    keywords: "clue | interlocking | piece | puzzle"
  },
  {
    no: 976,
    codes: "1F9F8",
    char: "🧸",
    name: "⊛ teddy bear",
    keywords: "plaything | plush | stuffed | toy"
  },
  {
    no: 977,
    codes: "2660",
    char: "♠",
    name: "spade suit",
    keywords: "card | game | spade suit"
  },
  {
    no: 978,
    codes: "2665",
    char: "♥",
    name: "heart suit",
    keywords: "card | game | heart suit"
  },
  {
    no: 979,
    codes: "2666",
    char: "♦",
    name: "diamond suit",
    keywords: "card | diamond suit | game"
  },
  {
    no: 980,
    codes: "2663",
    char: "♣",
    name: "club suit",
    keywords: "card | club suit | game"
  },
  {
    no: 981,
    codes: "265F",
    char: "♟",
    name: "⊛ chess pawn",
    keywords: "chess | dupe | expendable | red shirt"
  },
  {
    no: 982,
    codes: "1F0CF",
    char: "🃏",
    name: "joker",
    keywords: "card | game | joker | wildcard"
  },
  {
    no: 983,
    codes: "1F004",
    char: "🀄",
    name: "mahjong red dragon",
    keywords: "game | mahjong | mahjong red dragon | red"
  },
  {
    no: 984,
    codes: "1F3B4",
    char: "🎴",
    name: "flower playing cards",
    keywords: "card | flower | flower playing cards | game | Japanese | playing"
  },
  {
    no: 985,
    codes: "1F3AD",
    char: "🎭",
    name: "performing arts",
    keywords: "art | mask | performing | performing arts | theater | theatre"
  },
  {
    no: 986,
    codes: "1F5BC",
    char: "🖼",
    name: "framed picture",
    keywords: "art | frame | framed picture | museum | painting | picture"
  },
  {
    no: 987,
    codes: "1F3A8",
    char: "🎨",
    name: "artist palette",
    keywords: "art | artist palette | museum | painting | palette"
  },
  {
    no: 988,
    codes: "1F9F5",
    char: "🧵",
    name: "⊛ thread",
    keywords: "needle | sewing | spool | string"
  },
  {
    no: 989,
    codes: "1F9F6",
    char: "🧶",
    name: "⊛ yarn",
    keywords: "ball | crochet | knit"
  },
  {
    no: 990,
    codes: "1F507",
    char: "🔇",
    name: "muted speaker",
    keywords: "mute | muted speaker | quiet | silent | speaker"
  },
  {
    no: 991,
    codes: "1F508",
    char: "🔈",
    name: "speaker low volume",
    keywords: "soft | speaker low volume"
  },
  {
    no: 992,
    codes: "1F509",
    char: "🔉",
    name: "speaker medium volume",
    keywords: "medium | speaker medium volume"
  },
  {
    no: 993,
    codes: "1F50A",
    char: "🔊",
    name: "speaker high volume",
    keywords: "loud | speaker high volume"
  },
  {
    no: 994,
    codes: "1F4E2",
    char: "📢",
    name: "loudspeaker",
    keywords: "loud | loudspeaker | public address"
  },
  {
    no: 995,
    codes: "1F4E3",
    char: "📣",
    name: "megaphone",
    keywords: "cheering | megaphone"
  },
  {
    no: 996,
    codes: "1F4EF",
    char: "📯",
    name: "postal horn",
    keywords: "horn | post | postal"
  },
  {
    no: 997,
    codes: "1F514",
    char: "🔔",
    name: "bell",
    keywords: "bell"
  },
  {
    no: 998,
    codes: "1F515",
    char: "🔕",
    name: "bell with slash",
    keywords: "bell | bell with slash | forbidden | mute | no | not | prohibited | quiet | silent"
  },
  {
    no: 999,
    codes: "1F3BC",
    char: "🎼",
    name: "musical score",
    keywords: "music | musical score | score"
  },
  {
    no: 1000,
    codes: "1F3B5",
    char: "🎵",
    name: "musical note",
    keywords: "music | musical note | note"
  },
  {
    no: 1001,
    codes: "1F3B6",
    char: "🎶",
    name: "musical notes",
    keywords: "music | musical notes | note | notes"
  },
  {
    no: 1002,
    codes: "1F399",
    char: "🎙",
    name: "studio microphone",
    keywords: "mic | microphone | music | studio"
  },
  {
    no: 1003,
    codes: "1F39A",
    char: "🎚",
    name: "level slider",
    keywords: "level | music | slider"
  },
  {
    no: 1004,
    codes: "1F39B",
    char: "🎛",
    name: "control knobs",
    keywords: "control | knobs | music"
  },
  {
    no: 1005,
    codes: "1F3A4",
    char: "🎤",
    name: "microphone",
    keywords: "karaoke | mic | microphone"
  },
  {
    no: 1006,
    codes: "1F3A7",
    char: "🎧",
    name: "headphone",
    keywords: "earbud | headphone"
  },
  {
    no: 1007,
    codes: "1F4FB",
    char: "📻",
    name: "radio",
    keywords: "radio | video"
  },
  {
    no: 1008,
    codes: "1F3B7",
    char: "🎷",
    name: "saxophone",
    keywords: "instrument | music | sax | saxophone"
  },
  {
    no: 1009,
    codes: "1F3B8",
    char: "🎸",
    name: "guitar",
    keywords: "guitar | instrument | music"
  },
  {
    no: 1010,
    codes: "1F3B9",
    char: "🎹",
    name: "musical keyboard",
    keywords: "instrument | keyboard | music | musical keyboard | piano"
  },
  {
    no: 1011,
    codes: "1F3BA",
    char: "🎺",
    name: "trumpet",
    keywords: "instrument | music | trumpet"
  },
  {
    no: 1012,
    codes: "1F3BB",
    char: "🎻",
    name: "violin",
    keywords: "instrument | music | violin"
  },
  {
    no: 1013,
    codes: "1F941",
    char: "🥁",
    name: "drum",
    keywords: "drum | drumsticks | music"
  },
  {
    no: 1014,
    codes: "1F4F1",
    char: "📱",
    name: "mobile phone",
    keywords: "cell | mobile | phone | telephone"
  },
  {
    no: 1015,
    codes: "1F4F2",
    char: "📲",
    name: "mobile phone with arrow",
    keywords: "arrow | call | cell | mobile | mobile phone with arrow | phone | receive | telephone"
  },
  {
    no: 1016,
    codes: "260E",
    char: "☎",
    name: "telephone",
    keywords: "phone | telephone"
  },
  {
    no: 1017,
    codes: "1F4DE",
    char: "📞",
    name: "telephone receiver",
    keywords: "phone | receiver | telephone"
  },
  {
    no: 1018,
    codes: "1F4DF",
    char: "📟",
    name: "pager",
    keywords: "pager"
  },
  {
    no: 1019,
    codes: "1F4E0",
    char: "📠",
    name: "fax machine",
    keywords: "fax | fax machine"
  },
  {
    no: 1020,
    codes: "1F50B",
    char: "🔋",
    name: "battery",
    keywords: "battery"
  },
  {
    no: 1021,
    codes: "1F50C",
    char: "🔌",
    name: "electric plug",
    keywords: "electric | electricity | plug"
  },
  {
    no: 1022,
    codes: "1F4BB",
    char: "💻",
    name: "laptop computer",
    keywords: "computer | laptop computer | pc | personal"
  },
  {
    no: 1023,
    codes: "1F5A5",
    char: "🖥",
    name: "desktop computer",
    keywords: "computer | desktop"
  },
  {
    no: 1024,
    codes: "1F5A8",
    char: "🖨",
    name: "printer",
    keywords: "computer | printer"
  },
  {
    no: 1025,
    codes: "2328",
    char: "⌨",
    name: "keyboard",
    keywords: "computer | keyboard"
  },
  {
    no: 1026,
    codes: "1F5B1",
    char: "🖱",
    name: "computer mouse",
    keywords: "computer | computer mouse"
  },
  {
    no: 1027,
    codes: "1F5B2",
    char: "🖲",
    name: "trackball",
    keywords: "computer | trackball"
  },
  {
    no: 1028,
    codes: "1F4BD",
    char: "💽",
    name: "computer disk",
    keywords: "computer | disk | minidisk | optical"
  },
  {
    no: 1029,
    codes: "1F4BE",
    char: "💾",
    name: "floppy disk",
    keywords: "computer | disk | floppy"
  },
  {
    no: 1030,
    codes: "1F4BF",
    char: "💿",
    name: "optical disk",
    keywords: "cd | computer | disk | optical"
  },
  {
    no: 1031,
    codes: "1F4C0",
    char: "📀",
    name: "dvd",
    keywords: "blu-ray | computer | disk | dvd | optical"
  },
  {
    no: 1032,
    codes: "1F9EE",
    char: "🧮",
    name: "⊛ abacus",
    keywords: "calculation"
  },
  {
    no: 1033,
    codes: "1F3A5",
    char: "🎥",
    name: "movie camera",
    keywords: "camera | cinema | movie"
  },
  {
    no: 1034,
    codes: "1F39E",
    char: "🎞",
    name: "film frames",
    keywords: "cinema | film | frames | movie"
  },
  {
    no: 1035,
    codes: "1F4FD",
    char: "📽",
    name: "film projector",
    keywords: "cinema | film | movie | projector | video"
  },
  {
    no: 1036,
    codes: "1F3AC",
    char: "🎬",
    name: "clapper board",
    keywords: "clapper | clapper board | movie"
  },
  {
    no: 1037,
    codes: "1F4FA",
    char: "📺",
    name: "television",
    keywords: "television | tv | video"
  },
  {
    no: 1038,
    codes: "1F4F7",
    char: "📷",
    name: "camera",
    keywords: "camera | video"
  },
  {
    no: 1039,
    codes: "1F4F8",
    char: "📸",
    name: "camera with flash",
    keywords: "camera | camera with flash | flash | video"
  },
  {
    no: 1040,
    codes: "1F4F9",
    char: "📹",
    name: "video camera",
    keywords: "camera | video"
  },
  {
    no: 1041,
    codes: "1F4FC",
    char: "📼",
    name: "videocassette",
    keywords: "tape | vhs | video | videocassette"
  },
  {
    no: 1042,
    codes: "1F50D",
    char: "🔍",
    name: "magnifying glass tilted left",
    keywords: "glass | magnifying | magnifying glass tilted left | search | tool"
  },
  {
    no: 1043,
    codes: "1F50E",
    char: "🔎",
    name: "magnifying glass tilted right",
    keywords: "glass | magnifying | magnifying glass tilted right | search | tool"
  },
  {
    no: 1044,
    codes: "1F56F",
    char: "🕯",
    name: "candle",
    keywords: "candle | light"
  },
  {
    no: 1045,
    codes: "1F4A1",
    char: "💡",
    name: "light bulb",
    keywords: "bulb | comic | electric | idea | light"
  },
  {
    no: 1046,
    codes: "1F526",
    char: "🔦",
    name: "flashlight",
    keywords: "electric | flashlight | light | tool | torch"
  },
  {
    no: 1047,
    codes: "1F3EE",
    char: "🏮",
    name: "red paper lantern",
    keywords: "bar | lantern | light | red | red paper lantern"
  },
  {
    no: 1048,
    codes: "1F4D4",
    char: "📔",
    name: "notebook with decorative cover",
    keywords: "book | cover | decorated | notebook | notebook with decorative cover"
  },
  {
    no: 1049,
    codes: "1F4D5",
    char: "📕",
    name: "closed book",
    keywords: "book | closed"
  },
  {
    no: 1050,
    codes: "1F4D6",
    char: "📖",
    name: "open book",
    keywords: "book | open"
  },
  {
    no: 1051,
    codes: "1F4D7",
    char: "📗",
    name: "green book",
    keywords: "book | green"
  },
  {
    no: 1052,
    codes: "1F4D8",
    char: "📘",
    name: "blue book",
    keywords: "blue | book"
  },
  {
    no: 1053,
    codes: "1F4D9",
    char: "📙",
    name: "orange book",
    keywords: "book | orange"
  },
  {
    no: 1054,
    codes: "1F4DA",
    char: "📚",
    name: "books",
    keywords: "book | books"
  },
  {
    no: 1055,
    codes: "1F4D3",
    char: "📓",
    name: "notebook",
    keywords: "notebook"
  },
  {
    no: 1056,
    codes: "1F4D2",
    char: "📒",
    name: "ledger",
    keywords: "ledger | notebook"
  },
  {
    no: 1057,
    codes: "1F4C3",
    char: "📃",
    name: "page with curl",
    keywords: "curl | document | page | page with curl"
  },
  {
    no: 1058,
    codes: "1F4DC",
    char: "📜",
    name: "scroll",
    keywords: "paper | scroll"
  },
  {
    no: 1059,
    codes: "1F4C4",
    char: "📄",
    name: "page facing up",
    keywords: "document | page | page facing up"
  },
  {
    no: 1060,
    codes: "1F4F0",
    char: "📰",
    name: "newspaper",
    keywords: "news | newspaper | paper"
  },
  {
    no: 1061,
    codes: "1F5DE",
    char: "🗞",
    name: "rolled-up newspaper",
    keywords: "news | newspaper | paper | rolled | rolled-up newspaper"
  },
  {
    no: 1062,
    codes: "1F4D1",
    char: "📑",
    name: "bookmark tabs",
    keywords: "bookmark | mark | marker | tabs"
  },
  {
    no: 1063,
    codes: "1F516",
    char: "🔖",
    name: "bookmark",
    keywords: "bookmark | mark"
  },
  {
    no: 1064,
    codes: "1F3F7",
    char: "🏷",
    name: "label",
    keywords: "label"
  },
  {
    no: 1065,
    codes: "1F4B0",
    char: "💰",
    name: "money bag",
    keywords: "bag | dollar | money | moneybag"
  },
  {
    no: 1066,
    codes: "1F4B4",
    char: "💴",
    name: "yen banknote",
    keywords: "bank | banknote | bill | currency | money | note | yen"
  },
  {
    no: 1067,
    codes: "1F4B5",
    char: "💵",
    name: "dollar banknote",
    keywords: "bank | banknote | bill | currency | dollar | money | note"
  },
  {
    no: 1068,
    codes: "1F4B6",
    char: "💶",
    name: "euro banknote",
    keywords: "bank | banknote | bill | currency | euro | money | note"
  },
  {
    no: 1069,
    codes: "1F4B7",
    char: "💷",
    name: "pound banknote",
    keywords: "bank | banknote | bill | currency | money | note | pound"
  },
  {
    no: 1070,
    codes: "1F4B8",
    char: "💸",
    name: "money with wings",
    keywords: "bank | banknote | bill | dollar | fly | money | money with wings | note | wings"
  },
  {
    no: 1071,
    codes: "1F4B3",
    char: "💳",
    name: "credit card",
    keywords: "bank | card | credit | money"
  },
  {
    no: 1072,
    codes: "1F9FE",
    char: "🧾",
    name: "⊛ receipt",
    keywords: "accounting | bookkeeping | evidence | proof"
  },
  {
    no: 1073,
    codes: "1F4B9",
    char: "💹",
    name: "chart increasing with yen",
    keywords: "bank | chart | chart increasing with yen | currency | graph | growth | market | money | rise | trend | upward | yen"
  },
  {
    no: 1074,
    codes: "1F4B1",
    char: "💱",
    name: "currency exchange",
    keywords: "bank | currency | exchange | money"
  },
  {
    no: 1075,
    codes: "1F4B2",
    char: "💲",
    name: "heavy dollar sign",
    keywords: "currency | dollar | heavy dollar sign | money"
  },
  {
    no: 1076,
    codes: "2709",
    char: "✉",
    name: "envelope",
    keywords: "email | envelope | letter"
  },
  {
    no: 1077,
    codes: "1F4E7",
    char: "📧",
    name: "e-mail",
    keywords: "e-mail | email | letter | mail"
  },
  {
    no: 1078,
    codes: "1F4E8",
    char: "📨",
    name: "incoming envelope",
    keywords: "e-mail | email | envelope | incoming | letter | mail | receive"
  },
  {
    no: 1079,
    codes: "1F4E9",
    char: "📩",
    name: "envelope with arrow",
    keywords: "arrow | down | e-mail | email | envelope | envelope with arrow | letter | mail | outgoing | sent"
  },
  {
    no: 1080,
    codes: "1F4E4",
    char: "📤",
    name: "outbox tray",
    keywords: "box | letter | mail | outbox | sent | tray"
  },
  {
    no: 1081,
    codes: "1F4E5",
    char: "📥",
    name: "inbox tray",
    keywords: "box | inbox | letter | mail | receive | tray"
  },
  {
    no: 1082,
    codes: "1F4E6",
    char: "📦",
    name: "package",
    keywords: "box | package | parcel"
  },
  {
    no: 1083,
    codes: "1F4EB",
    char: "📫",
    name: "closed mailbox with raised flag",
    keywords: "closed | closed mailbox with raised flag | mail | mailbox | postbox"
  },
  {
    no: 1084,
    codes: "1F4EA",
    char: "📪",
    name: "closed mailbox with lowered flag",
    keywords: "closed | closed mailbox with lowered flag | lowered | mail | mailbox | postbox"
  },
  {
    no: 1085,
    codes: "1F4EC",
    char: "📬",
    name: "open mailbox with raised flag",
    keywords: "mail | mailbox | open | open mailbox with raised flag | postbox"
  },
  {
    no: 1086,
    codes: "1F4ED",
    char: "📭",
    name: "open mailbox with lowered flag",
    keywords: "lowered | mail | mailbox | open | open mailbox with lowered flag | postbox"
  },
  {
    no: 1087,
    codes: "1F4EE",
    char: "📮",
    name: "postbox",
    keywords: "mail | mailbox | postbox"
  },
  {
    no: 1088,
    codes: "1F5F3",
    char: "🗳",
    name: "ballot box with ballot",
    keywords: "ballot | ballot box with ballot | box"
  },
  {
    no: 1089,
    codes: "270F",
    char: "✏",
    name: "pencil",
    keywords: "pencil"
  },
  {
    no: 1090,
    codes: "2712",
    char: "✒",
    name: "black nib",
    keywords: "black nib | nib | pen"
  },
  {
    no: 1091,
    codes: "1F58B",
    char: "🖋",
    name: "fountain pen",
    keywords: "fountain | pen"
  },
  {
    no: 1092,
    codes: "1F58A",
    char: "🖊",
    name: "pen",
    keywords: "ballpoint | pen"
  },
  {
    no: 1093,
    codes: "1F58C",
    char: "🖌",
    name: "paintbrush",
    keywords: "paintbrush | painting"
  },
  {
    no: 1094,
    codes: "1F58D",
    char: "🖍",
    name: "crayon",
    keywords: "crayon"
  },
  {
    no: 1095,
    codes: "1F4DD",
    char: "📝",
    name: "memo",
    keywords: "memo | pencil"
  },
  {
    no: 1096,
    codes: "1F4BC",
    char: "💼",
    name: "briefcase",
    keywords: "briefcase"
  },
  {
    no: 1097,
    codes: "1F4C1",
    char: "📁",
    name: "file folder",
    keywords: "file | folder"
  },
  {
    no: 1098,
    codes: "1F4C2",
    char: "📂",
    name: "open file folder",
    keywords: "file | folder | open"
  },
  {
    no: 1099,
    codes: "1F5C2",
    char: "🗂",
    name: "card index dividers",
    keywords: "card | dividers | index"
  },
  {
    no: 1100,
    codes: "1F4C5",
    char: "📅",
    name: "calendar",
    keywords: "calendar | date"
  },
  {
    no: 1101,
    codes: "1F4C6",
    char: "📆",
    name: "tear-off calendar",
    keywords: "calendar | tear-off calendar"
  },
  {
    no: 1102,
    codes: "1F5D2",
    char: "🗒",
    name: "spiral notepad",
    keywords: "note | pad | spiral | spiral notepad"
  },
  {
    no: 1103,
    codes: "1F5D3",
    char: "🗓",
    name: "spiral calendar",
    keywords: "calendar | pad | spiral"
  },
  {
    no: 1104,
    codes: "1F4C7",
    char: "📇",
    name: "card index",
    keywords: "card | index | rolodex"
  },
  {
    no: 1105,
    codes: "1F4C8",
    char: "📈",
    name: "chart increasing",
    keywords: "chart | chart increasing | graph | growth | trend | upward"
  },
  {
    no: 1106,
    codes: "1F4C9",
    char: "📉",
    name: "chart decreasing",
    keywords: "chart | chart decreasing | down | graph | trend"
  },
  {
    no: 1107,
    codes: "1F4CA",
    char: "📊",
    name: "bar chart",
    keywords: "bar | chart | graph"
  },
  {
    no: 1108,
    codes: "1F4CB",
    char: "📋",
    name: "clipboard",
    keywords: "clipboard"
  },
  {
    no: 1109,
    codes: "1F4CC",
    char: "📌",
    name: "pushpin",
    keywords: "pin | pushpin"
  },
  {
    no: 1110,
    codes: "1F4CD",
    char: "📍",
    name: "round pushpin",
    keywords: "pin | pushpin | round pushpin"
  },
  {
    no: 1111,
    codes: "1F4CE",
    char: "📎",
    name: "paperclip",
    keywords: "paperclip"
  },
  {
    no: 1112,
    codes: "1F587",
    char: "🖇",
    name: "linked paperclips",
    keywords: "link | linked paperclips | paperclip"
  },
  {
    no: 1113,
    codes: "1F4CF",
    char: "📏",
    name: "straight ruler",
    keywords: "ruler | straight edge | straight ruler"
  },
  {
    no: 1114,
    codes: "1F4D0",
    char: "📐",
    name: "triangular ruler",
    keywords: "ruler | set | triangle | triangular ruler"
  },
  {
    no: 1115,
    codes: "2702",
    char: "✂",
    name: "scissors",
    keywords: "cutting | scissors | tool"
  },
  {
    no: 1116,
    codes: "1F5C3",
    char: "🗃",
    name: "card file box",
    keywords: "box | card | file"
  },
  {
    no: 1117,
    codes: "1F5C4",
    char: "🗄",
    name: "file cabinet",
    keywords: "cabinet | file | filing"
  },
  {
    no: 1118,
    codes: "1F5D1",
    char: "🗑",
    name: "wastebasket",
    keywords: "wastebasket"
  },
  {
    no: 1119,
    codes: "1F512",
    char: "🔒",
    name: "locked",
    keywords: "closed | locked"
  },
  {
    no: 1120,
    codes: "1F513",
    char: "🔓",
    name: "unlocked",
    keywords: "lock | open | unlock | unlocked"
  },
  {
    no: 1121,
    codes: "1F50F",
    char: "🔏",
    name: "locked with pen",
    keywords: "ink | lock | locked with pen | nib | pen | privacy"
  },
  {
    no: 1122,
    codes: "1F510",
    char: "🔐",
    name: "locked with key",
    keywords: "closed | key | lock | locked with key | secure"
  },
  {
    no: 1123,
    codes: "1F511",
    char: "🔑",
    name: "key",
    keywords: "key | lock | password"
  },
  {
    no: 1124,
    codes: "1F5DD",
    char: "🗝",
    name: "old key",
    keywords: "clue | key | lock | old"
  },
  {
    no: 1125,
    codes: "1F528",
    char: "🔨",
    name: "hammer",
    keywords: "hammer | tool"
  },
  {
    no: 1126,
    codes: "26CF",
    char: "⛏",
    name: "pick",
    keywords: "mining | pick | tool"
  },
  {
    no: 1127,
    codes: "2692",
    char: "⚒",
    name: "hammer and pick",
    keywords: "hammer | hammer and pick | pick | tool"
  },
  {
    no: 1128,
    codes: "1F6E0",
    char: "🛠",
    name: "hammer and wrench",
    keywords: "hammer | hammer and wrench | spanner | tool | wrench"
  },
  {
    no: 1129,
    codes: "1F5E1",
    char: "🗡",
    name: "dagger",
    keywords: "dagger | knife | weapon"
  },
  {
    no: 1130,
    codes: "2694",
    char: "⚔",
    name: "crossed swords",
    keywords: "crossed | swords | weapon"
  },
  {
    no: 1131,
    codes: "1F52B",
    char: "🔫",
    name: "pistol",
    keywords: "gun | handgun | pistol | revolver | tool | weapon"
  },
  {
    no: 1132,
    codes: "1F3F9",
    char: "🏹",
    name: "bow and arrow",
    keywords: "archer | archery | arrow | bow | bow and arrow | Sagittarius | tool | weapon | zodiac"
  },
  {
    no: 1133,
    codes: "1F6E1",
    char: "🛡",
    name: "shield",
    keywords: "shield | weapon"
  },
  {
    no: 1134,
    codes: "1F527",
    char: "🔧",
    name: "wrench",
    keywords: "spanner | tool | wrench"
  },
  {
    no: 1135,
    codes: "1F529",
    char: "🔩",
    name: "nut and bolt",
    keywords: "bolt | nut | nut and bolt | tool"
  },
  {
    no: 1136,
    codes: "2699",
    char: "⚙",
    name: "gear",
    keywords: "cog | cogwheel | gear | tool"
  },
  {
    no: 1137,
    codes: "1F5DC",
    char: "🗜",
    name: "clamp",
    keywords: "clamp | compress | tool | vice"
  },
  {
    no: 1138,
    codes: "2696",
    char: "⚖",
    name: "balance scale",
    keywords: "balance | balance scale | justice | Libra | scales | tool | weight | zodiac"
  },
  {
    no: 1139,
    codes: "1F517",
    char: "🔗",
    name: "link",
    keywords: "link"
  },
  {
    no: 1140,
    codes: "26D3",
    char: "⛓",
    name: "chains",
    keywords: "chain | chains"
  },
  {
    no: 1141,
    codes: "1F9F0",
    char: "🧰",
    name: "⊛ toolbox",
    keywords: "chest | mechanic | tool"
  },
  {
    no: 1142,
    codes: "1F9F2",
    char: "🧲",
    name: "⊛ magnet",
    keywords: "attraction | horseshoe | magnetic"
  },
  {
    no: 1143,
    codes: "2697",
    char: "⚗",
    name: "alembic",
    keywords: "alembic | chemistry | tool"
  },
  {
    no: 1144,
    codes: "1F9EA",
    char: "🧪",
    name: "⊛ test tube",
    keywords: "chemist | chemistry | experiment | lab | science"
  },
  {
    no: 1145,
    codes: "1F9EB",
    char: "🧫",
    name: "⊛ petri dish",
    keywords: "bacteria | biologist | biology | culture | lab"
  },
  {
    no: 1146,
    codes: "1F9EC",
    char: "🧬",
    name: "⊛ dna",
    keywords: "biologist | evolution | gene | genetics | life"
  },
  {
    no: 1147,
    codes: "1F52C",
    char: "🔬",
    name: "microscope",
    keywords: "microscope | science | tool"
  },
  {
    no: 1148,
    codes: "1F52D",
    char: "🔭",
    name: "telescope",
    keywords: "science | telescope | tool"
  },
  {
    no: 1149,
    codes: "1F4E1",
    char: "📡",
    name: "satellite antenna",
    keywords: "antenna | dish | satellite"
  },
  {
    no: 1150,
    codes: "1F489",
    char: "💉",
    name: "syringe",
    keywords: "doctor | medicine | needle | shot | sick | syringe | tool"
  },
  {
    no: 1151,
    codes: "1F48A",
    char: "💊",
    name: "pill",
    keywords: "doctor | medicine | pill | sick"
  },
  {
    no: 1152,
    codes: "1F6AA",
    char: "🚪",
    name: "door",
    keywords: "door"
  },
  {
    no: 1153,
    codes: "1F6CF",
    char: "🛏",
    name: "bed",
    keywords: "bed | hotel | sleep"
  },
  {
    no: 1154,
    codes: "1F6CB",
    char: "🛋",
    name: "couch and lamp",
    keywords: "couch | couch and lamp | hotel | lamp"
  },
  {
    no: 1155,
    codes: "1F6BD",
    char: "🚽",
    name: "toilet",
    keywords: "toilet"
  },
  {
    no: 1156,
    codes: "1F6BF",
    char: "🚿",
    name: "shower",
    keywords: "shower | water"
  },
  {
    no: 1157,
    codes: "1F6C1",
    char: "🛁",
    name: "bathtub",
    keywords: "bath | bathtub"
  },
  {
    no: 1158,
    codes: "1F9F4",
    char: "🧴",
    name: "⊛ lotion bottle",
    keywords: "lotion | moisturizer | shampoo | sunscreen"
  },
  {
    no: 1159,
    codes: "1F9F7",
    char: "🧷",
    name: "⊛ safety pin",
    keywords: "diaper | punk rock"
  },
  {
    no: 1160,
    codes: "1F9F9",
    char: "🧹",
    name: "⊛ broom",
    keywords: "cleaning | sweeping | witch"
  },
  {
    no: 1161,
    codes: "1F9FA",
    char: "🧺",
    name: "⊛ basket",
    keywords: "farming | laundry | picnic"
  },
  {
    no: 1162,
    codes: "1F9FB",
    char: "🧻",
    name: "⊛ roll of paper",
    keywords: "paper towels | toilet paper"
  },
  {
    no: 1163,
    codes: "1F9FC",
    char: "🧼",
    name: "⊛ soap",
    keywords: "bar | bathing | cleaning | lather | soapdish"
  },
  {
    no: 1164,
    codes: "1F9FD",
    char: "🧽",
    name: "⊛ sponge",
    keywords: "absorbing | cleaning | porous"
  },
  {
    no: 1165,
    codes: "1F9EF",
    char: "🧯",
    name: "⊛ fire extinguisher",
    keywords: "extinguish | fire | quench"
  },
  {
    no: 1166,
    codes: "1F6D2",
    char: "🛒",
    name: "shopping cart",
    keywords: "cart | shopping | trolley"
  },
  {
    no: 1167,
    codes: "1F6AC",
    char: "🚬",
    name: "cigarette",
    keywords: "cigarette | smoking"
  },
  {
    no: 1168,
    codes: "26B0",
    char: "⚰",
    name: "coffin",
    keywords: "coffin | death"
  },
  {
    no: 1169,
    codes: "26B1",
    char: "⚱",
    name: "funeral urn",
    keywords: "ashes | death | funeral | urn"
  },
  {
    no: 1170,
    codes: "1F5FF",
    char: "🗿",
    name: "moai",
    keywords: "face | moai | moyai | statue"
  },
  {
    no: 1171,
    codes: "1F3E7",
    char: "🏧",
    name: "ATM sign",
    keywords: "atm | ATM sign | automated | bank | teller"
  },
  {
    no: 1172,
    codes: "1F6AE",
    char: "🚮",
    name: "litter in bin sign",
    keywords: "litter | litter bin | litter in bin sign"
  },
  {
    no: 1173,
    codes: "1F6B0",
    char: "🚰",
    name: "potable water",
    keywords: "drinking | potable | water"
  },
  {
    no: 1174,
    codes: "267F",
    char: "♿",
    name: "wheelchair symbol",
    keywords: "access | wheelchair symbol"
  },
  {
    no: 1175,
    codes: "1F6B9",
    char: "🚹",
    name: "men’s room",
    keywords: "lavatory | man | men’s room | restroom | wc"
  },
  {
    no: 1176,
    codes: "1F6BA",
    char: "🚺",
    name: "women’s room",
    keywords: "lavatory | restroom | wc | woman | women’s room"
  },
  {
    no: 1177,
    codes: "1F6BB",
    char: "🚻",
    name: "restroom",
    keywords: "lavatory | restroom | WC"
  },
  {
    no: 1178,
    codes: "1F6BC",
    char: "🚼",
    name: "baby symbol",
    keywords: "baby | baby symbol | changing"
  },
  {
    no: 1179,
    codes: "1F6BE",
    char: "🚾",
    name: "water closet",
    keywords: "closet | lavatory | restroom | water | wc"
  },
  {
    no: 1180,
    codes: "1F6C2",
    char: "🛂",
    name: "passport control",
    keywords: "control | passport"
  },
  {
    no: 1181,
    codes: "1F6C3",
    char: "🛃",
    name: "customs",
    keywords: "customs"
  },
  {
    no: 1182,
    codes: "1F6C4",
    char: "🛄",
    name: "baggage claim",
    keywords: "baggage | claim"
  },
  {
    no: 1183,
    codes: "1F6C5",
    char: "🛅",
    name: "left luggage",
    keywords: "baggage | left luggage | locker | luggage"
  },
  {
    no: 1184,
    codes: "26A0",
    char: "⚠",
    name: "warning",
    keywords: "warning"
  },
  {
    no: 1185,
    codes: "1F6B8",
    char: "🚸",
    name: "children crossing",
    keywords: "child | children crossing | crossing | pedestrian | traffic"
  },
  {
    no: 1186,
    codes: "26D4",
    char: "⛔",
    name: "no entry",
    keywords: "entry | forbidden | no | not | prohibited | traffic"
  },
  {
    no: 1187,
    codes: "1F6AB",
    char: "🚫",
    name: "prohibited",
    keywords: "entry | forbidden | no | not | prohibited"
  },
  {
    no: 1188,
    codes: "1F6B3",
    char: "🚳",
    name: "no bicycles",
    keywords: "bicycle | bike | forbidden | no | no bicycles | not | prohibited"
  },
  {
    no: 1189,
    codes: "1F6AD",
    char: "🚭",
    name: "no smoking",
    keywords: "forbidden | no | not | prohibited | smoking"
  },
  {
    no: 1190,
    codes: "1F6AF",
    char: "🚯",
    name: "no littering",
    keywords: "forbidden | litter | no | no littering | not | prohibited"
  },
  {
    no: 1191,
    codes: "1F6B1",
    char: "🚱",
    name: "non-potable water",
    keywords: "non-drinking | non-potable | water"
  },
  {
    no: 1192,
    codes: "1F6B7",
    char: "🚷",
    name: "no pedestrians",
    keywords: "forbidden | no | no pedestrians | not | pedestrian | prohibited"
  },
  {
    no: 1193,
    codes: "1F4F5",
    char: "📵",
    name: "no mobile phones",
    keywords: "cell | forbidden | mobile | no | no mobile phones | not | phone | prohibited | telephone"
  },
  {
    no: 1194,
    codes: "1F51E",
    char: "🔞",
    name: "no one under eighteen",
    keywords: "18 | age restriction | eighteen | forbidden | no | no one under eighteen | not | prohibited | underage"
  },
  {
    no: 1195,
    codes: "2622",
    char: "☢",
    name: "radioactive",
    keywords: "radioactive | sign"
  },
  {
    no: 1196,
    codes: "2623",
    char: "☣",
    name: "biohazard",
    keywords: "biohazard | sign"
  },
  {
    no: 1197,
    codes: "2B06",
    char: "⬆",
    name: "up arrow",
    keywords: "arrow | cardinal | direction | north | up arrow"
  },
  {
    no: 1198,
    codes: "2197",
    char: "↗",
    name: "up-right arrow",
    keywords: "arrow | direction | intercardinal | northeast | up-right arrow"
  },
  {
    no: 1199,
    codes: "27A1",
    char: "➡",
    name: "right arrow",
    keywords: "arrow | cardinal | direction | east | right arrow"
  },
  {
    no: 1200,
    codes: "2198",
    char: "↘",
    name: "down-right arrow",
    keywords: "arrow | direction | down-right arrow | intercardinal | southeast"
  },
  {
    no: 1201,
    codes: "2B07",
    char: "⬇",
    name: "down arrow",
    keywords: "arrow | cardinal | direction | down | south"
  },
  {
    no: 1202,
    codes: "2199",
    char: "↙",
    name: "down-left arrow",
    keywords: "arrow | direction | down-left arrow | intercardinal | southwest"
  },
  {
    no: 1203,
    codes: "2B05",
    char: "⬅",
    name: "left arrow",
    keywords: "arrow | cardinal | direction | left arrow | west"
  },
  {
    no: 1204,
    codes: "2196",
    char: "↖",
    name: "up-left arrow",
    keywords: "arrow | direction | intercardinal | northwest | up-left arrow"
  },
  {
    no: 1205,
    codes: "2195",
    char: "↕",
    name: "up-down arrow",
    keywords: "arrow | up-down arrow"
  },
  {
    no: 1206,
    codes: "2194",
    char: "↔",
    name: "left-right arrow",
    keywords: "arrow | left-right arrow"
  },
  {
    no: 1207,
    codes: "21A9",
    char: "↩",
    name: "right arrow curving left",
    keywords: "arrow | right arrow curving left"
  },
  {
    no: 1208,
    codes: "21AA",
    char: "↪",
    name: "left arrow curving right",
    keywords: "arrow | left arrow curving right"
  },
  {
    no: 1209,
    codes: "2934",
    char: "⤴",
    name: "right arrow curving up",
    keywords: "arrow | right arrow curving up"
  },
  {
    no: 1210,
    codes: "2935",
    char: "⤵",
    name: "right arrow curving down",
    keywords: "arrow | down | right arrow curving down"
  },
  {
    no: 1211,
    codes: "1F503",
    char: "🔃",
    name: "clockwise vertical arrows",
    keywords: "arrow | clockwise | clockwise vertical arrows | reload"
  },
  {
    no: 1212,
    codes: "1F504",
    char: "🔄",
    name: "counterclockwise arrows button",
    keywords: "anticlockwise | arrow | counterclockwise | counterclockwise arrows button | withershins"
  },
  {
    no: 1213,
    codes: "1F519",
    char: "🔙",
    name: "BACK arrow",
    keywords: "arrow | back | BACK arrow"
  },
  {
    no: 1214,
    codes: "1F51A",
    char: "🔚",
    name: "END arrow",
    keywords: "arrow | end | END arrow"
  },
  {
    no: 1215,
    codes: "1F51B",
    char: "🔛",
    name: "ON! arrow",
    keywords: "arrow | mark | on | ON! arrow"
  },
  {
    no: 1216,
    codes: "1F51C",
    char: "🔜",
    name: "SOON arrow",
    keywords: "arrow | soon | SOON arrow"
  },
  {
    no: 1217,
    codes: "1F51D",
    char: "🔝",
    name: "TOP arrow",
    keywords: "arrow | top | TOP arrow | up"
  },
  {
    no: 1218,
    codes: "1F6D0",
    char: "🛐",
    name: "place of worship",
    keywords: "place of worship | religion | worship"
  },
  {
    no: 1219,
    codes: "269B",
    char: "⚛",
    name: "atom symbol",
    keywords: "atheist | atom | atom symbol"
  },
  {
    no: 1220,
    codes: "1F549",
    char: "🕉",
    name: "om",
    keywords: "Hindu | om | religion"
  },
  {
    no: 1221,
    codes: "2721",
    char: "✡",
    name: "star of David",
    keywords: "David | Jew | Jewish | religion | star | star of David"
  },
  {
    no: 1222,
    codes: "2638",
    char: "☸",
    name: "wheel of dharma",
    keywords: "Buddhist | dharma | religion | wheel | wheel of dharma"
  },
  {
    no: 1223,
    codes: "262F",
    char: "☯",
    name: "yin yang",
    keywords: "religion | tao | taoist | yang | yin"
  },
  {
    no: 1224,
    codes: "271D",
    char: "✝",
    name: "latin cross",
    keywords: "Christian | cross | latin cross | religion"
  },
  {
    no: 1225,
    codes: "2626",
    char: "☦",
    name: "orthodox cross",
    keywords: "Christian | cross | orthodox cross | religion"
  },
  {
    no: 1226,
    codes: "262A",
    char: "☪",
    name: "star and crescent",
    keywords: "islam | Muslim | religion | star and crescent"
  },
  {
    no: 1227,
    codes: "262E",
    char: "☮",
    name: "peace symbol",
    keywords: "peace | peace symbol"
  },
  {
    no: 1228,
    codes: "1F54E",
    char: "🕎",
    name: "menorah",
    keywords: "candelabrum | candlestick | menorah | religion"
  },
  {
    no: 1229,
    codes: "1F52F",
    char: "🔯",
    name: "dotted six-pointed star",
    keywords: "dotted six-pointed star | fortune | star"
  },
  {
    no: 1230,
    codes: "2648",
    char: "♈",
    name: "Aries",
    keywords: "Aries | ram | zodiac"
  },
  {
    no: 1231,
    codes: "2649",
    char: "♉",
    name: "Taurus",
    keywords: "bull | ox | Taurus | zodiac"
  },
  {
    no: 1232,
    codes: "264A",
    char: "♊",
    name: "Gemini",
    keywords: "Gemini | twins | zodiac"
  },
  {
    no: 1233,
    codes: "264B",
    char: "♋",
    name: "Cancer",
    keywords: "Cancer | crab | zodiac"
  },
  {
    no: 1234,
    codes: "264C",
    char: "♌",
    name: "Leo",
    keywords: "Leo | lion | zodiac"
  },
  {
    no: 1235,
    codes: "264D",
    char: "♍",
    name: "Virgo",
    keywords: "Virgo | zodiac"
  },
  {
    no: 1236,
    codes: "264E",
    char: "♎",
    name: "Libra",
    keywords: "balance | justice | Libra | scales | zodiac"
  },
  {
    no: 1237,
    codes: "264F",
    char: "♏",
    name: "Scorpio",
    keywords: "Scorpio | scorpion | scorpius | zodiac"
  },
  {
    no: 1238,
    codes: "2650",
    char: "♐",
    name: "Sagittarius",
    keywords: "archer | Sagittarius | zodiac"
  },
  {
    no: 1239,
    codes: "2651",
    char: "♑",
    name: "Capricorn",
    keywords: "Capricorn | goat | zodiac"
  },
  {
    no: 1240,
    codes: "2652",
    char: "♒",
    name: "Aquarius",
    keywords: "Aquarius | bearer | water | zodiac"
  },
  {
    no: 1241,
    codes: "2653",
    char: "♓",
    name: "Pisces",
    keywords: "fish | Pisces | zodiac"
  },
  {
    no: 1242,
    codes: "26CE",
    char: "⛎",
    name: "Ophiuchus",
    keywords: "bearer | Ophiuchus | serpent | snake | zodiac"
  },
  {
    no: 1243,
    codes: "1F500",
    char: "🔀",
    name: "shuffle tracks button",
    keywords: "arrow | crossed | shuffle tracks button"
  },
  {
    no: 1244,
    codes: "1F501",
    char: "🔁",
    name: "repeat button",
    keywords: "arrow | clockwise | repeat | repeat button"
  },
  {
    no: 1245,
    codes: "1F502",
    char: "🔂",
    name: "repeat single button",
    keywords: "arrow | clockwise | once | repeat single button"
  },
  {
    no: 1246,
    codes: "25B6",
    char: "▶",
    name: "play button",
    keywords: "arrow | play | play button | right | triangle"
  },
  {
    no: 1247,
    codes: "23E9",
    char: "⏩",
    name: "fast-forward button",
    keywords: "arrow | double | fast | fast-forward button | forward"
  },
  {
    no: 1248,
    codes: "23ED",
    char: "⏭",
    name: "next track button",
    keywords: "arrow | next scene | next track | next track button | triangle"
  },
  {
    no: 1249,
    codes: "23EF",
    char: "⏯",
    name: "play or pause button",
    keywords: "arrow | pause | play | play or pause button | right | triangle"
  },
  {
    no: 1250,
    codes: "25C0",
    char: "◀",
    name: "reverse button",
    keywords: "arrow | left | reverse | reverse button | triangle"
  },
  {
    no: 1251,
    codes: "23EA",
    char: "⏪",
    name: "fast reverse button",
    keywords: "arrow | double | fast reverse button | rewind"
  },
  {
    no: 1252,
    codes: "23EE",
    char: "⏮",
    name: "last track button",
    keywords: "arrow | last track button | previous scene | previous track | triangle"
  },
  {
    no: 1253,
    codes: "1F53C",
    char: "🔼",
    name: "upwards button",
    keywords: "arrow | button | red | upwards button"
  },
  {
    no: 1254,
    codes: "23EB",
    char: "⏫",
    name: "fast up button",
    keywords: "arrow | double | fast up button"
  },
  {
    no: 1255,
    codes: "1F53D",
    char: "🔽",
    name: "downwards button",
    keywords: "arrow | button | down | downwards button | red"
  },
  {
    no: 1256,
    codes: "23EC",
    char: "⏬",
    name: "fast down button",
    keywords: "arrow | double | down | fast down button"
  },
  {
    no: 1257,
    codes: "23F8",
    char: "⏸",
    name: "pause button",
    keywords: "bar | double | pause | pause button | vertical"
  },
  {
    no: 1258,
    codes: "23F9",
    char: "⏹",
    name: "stop button",
    keywords: "square | stop | stop button"
  },
  {
    no: 1259,
    codes: "23FA",
    char: "⏺",
    name: "record button",
    keywords: "circle | record | record button"
  },
  {
    no: 1260,
    codes: "23CF",
    char: "⏏",
    name: "eject button",
    keywords: "eject | eject button"
  },
  {
    no: 1261,
    codes: "1F3A6",
    char: "🎦",
    name: "cinema",
    keywords: "camera | cinema | film | movie"
  },
  {
    no: 1262,
    codes: "1F505",
    char: "🔅",
    name: "dim button",
    keywords: "brightness | dim | dim button | low"
  },
  {
    no: 1263,
    codes: "1F506",
    char: "🔆",
    name: "bright button",
    keywords: "bright | bright button | brightness"
  },
  {
    no: 1264,
    codes: "1F4F6",
    char: "📶",
    name: "antenna bars",
    keywords: "antenna | antenna bars | bar | cell | mobile | phone | signal | telephone"
  },
  {
    no: 1265,
    codes: "1F4F3",
    char: "📳",
    name: "vibration mode",
    keywords: "cell | mobile | mode | phone | telephone | vibration"
  },
  {
    no: 1266,
    codes: "1F4F4",
    char: "📴",
    name: "mobile phone off",
    keywords: "cell | mobile | off | phone | telephone"
  },
  {
    no: 1267,
    codes: "2640",
    char: "♀",
    name: "female sign",
    keywords: "female sign | woman"
  },
  {
    no: 1268,
    codes: "2642",
    char: "♂",
    name: "male sign",
    keywords: "male sign | man"
  },
  {
    no: 1269,
    codes: "2695",
    char: "⚕",
    name: "medical symbol",
    keywords: "aesculapius | medical symbol | medicine | staff"
  },
  {
    no: 1270,
    codes: "267E",
    char: "♾",
    name: "⊛ infinity",
    keywords: "forever | unbounded | universal"
  },
  {
    no: 1271,
    codes: "267B",
    char: "♻",
    name: "recycling symbol",
    keywords: "recycle | recycling symbol"
  },
  {
    no: 1272,
    codes: "269C",
    char: "⚜",
    name: "fleur-de-lis",
    keywords: "fleur-de-lis"
  },
  {
    no: 1273,
    codes: "1F531",
    char: "🔱",
    name: "trident emblem",
    keywords: "anchor | emblem | ship | tool | trident"
  },
  {
    no: 1274,
    codes: "1F4DB",
    char: "📛",
    name: "name badge",
    keywords: "badge | name"
  },
  {
    no: 1275,
    codes: "1F530",
    char: "🔰",
    name: "Japanese symbol for beginner",
    keywords: "beginner | chevron | green | Japanese | Japanese symbol for beginner | leaf | tool | yellow"
  },
  {
    no: 1276,
    codes: "2B55",
    char: "⭕",
    name: "heavy large circle",
    keywords: "circle | heavy large circle | o"
  },
  {
    no: 1277,
    codes: "2705",
    char: "✅",
    name: "white heavy check mark",
    keywords: "check | mark | white heavy check mark"
  },
  {
    no: 1278,
    codes: "2611",
    char: "☑",
    name: "ballot box with check",
    keywords: "ballot | ballot box with check | box | check"
  },
  {
    no: 1279,
    codes: "2714",
    char: "✔",
    name: "heavy check mark",
    keywords: "check | heavy check mark | mark"
  },
  {
    no: 1280,
    codes: "2716",
    char: "✖",
    name: "heavy multiplication x",
    keywords: "cancel | heavy multiplication x | multiplication | multiply | x"
  },
  {
    no: 1281,
    codes: "274C",
    char: "❌",
    name: "cross mark",
    keywords: "cancel | cross mark | mark | multiplication | multiply | x"
  },
  {
    no: 1282,
    codes: "274E",
    char: "❎",
    name: "cross mark button",
    keywords: "cross mark button | mark | square"
  },
  {
    no: 1283,
    codes: "2795",
    char: "➕",
    name: "heavy plus sign",
    keywords: "heavy plus sign | math | plus"
  },
  {
    no: 1284,
    codes: "2796",
    char: "➖",
    name: "heavy minus sign",
    keywords: "heavy minus sign | math | minus"
  },
  {
    no: 1285,
    codes: "2797",
    char: "➗",
    name: "heavy division sign",
    keywords: "division | heavy division sign | math"
  },
  {
    no: 1286,
    codes: "27B0",
    char: "➰",
    name: "curly loop",
    keywords: "curl | curly loop | loop"
  },
  {
    no: 1287,
    codes: "27BF",
    char: "➿",
    name: "double curly loop",
    keywords: "curl | double | double curly loop | loop"
  },
  {
    no: 1288,
    codes: "303D",
    char: "〽",
    name: "part alternation mark",
    keywords: "mark | part | part alternation mark"
  },
  {
    no: 1289,
    codes: "2733",
    char: "✳",
    name: "eight-spoked asterisk",
    keywords: "asterisk | eight-spoked asterisk"
  },
  {
    no: 1290,
    codes: "2734",
    char: "✴",
    name: "eight-pointed star",
    keywords: "eight-pointed star | star"
  },
  {
    no: 1291,
    codes: "2747",
    char: "❇",
    name: "sparkle",
    keywords: "sparkle"
  },
  {
    no: 1292,
    codes: "203C",
    char: "‼",
    name: "double exclamation mark",
    keywords: "bangbang | double exclamation mark | exclamation | mark | punctuation"
  },
  {
    no: 1293,
    codes: "2049",
    char: "⁉",
    name: "exclamation question mark",
    keywords: "exclamation | interrobang | mark | punctuation | question"
  },
  {
    no: 1294,
    codes: "2753",
    char: "❓",
    name: "question mark",
    keywords: "mark | punctuation | question"
  },
  {
    no: 1295,
    codes: "2754",
    char: "❔",
    name: "white question mark",
    keywords: "mark | outlined | punctuation | question | white question mark"
  },
  {
    no: 1296,
    codes: "2755",
    char: "❕",
    name: "white exclamation mark",
    keywords: "exclamation | mark | outlined | punctuation | white exclamation mark"
  },
  {
    no: 1297,
    codes: "2757",
    char: "❗",
    name: "exclamation mark",
    keywords: "exclamation | mark | punctuation"
  },
  {
    no: 1298,
    codes: "3030",
    char: "〰",
    name: "wavy dash",
    keywords: "dash | punctuation | wavy"
  },
  {
    no: 1299,
    codes: "00A9",
    char: "©",
    name: "copyright",
    keywords: "copyright"
  },
  {
    no: 1300,
    codes: "00AE",
    char: "®",
    name: "registered",
    keywords: "registered"
  },
  {
    no: 1301,
    codes: "2122",
    char: "™",
    name: "trade mark",
    keywords: "mark | tm | trade mark | trademark"
  },
  {
    no: 1302,
    codes: "0023 FE0F 20E3",
    char: "#️⃣",
    name: "keycap: #",
    keywords: "keycap"
  },
  {
    no: 1303,
    codes: "002A FE0F 20E3",
    char: "*️⃣",
    name: "keycap: *",
    keywords: "keycap"
  },
  {
    no: 1304,
    codes: "0030 FE0F 20E3",
    char: "0️⃣",
    name: "keycap: 0",
    keywords: "keycap"
  },
  {
    no: 1305,
    codes: "0031 FE0F 20E3",
    char: "1️⃣",
    name: "keycap: 1",
    keywords: "keycap"
  },
  {
    no: 1306,
    codes: "0032 FE0F 20E3",
    char: "2️⃣",
    name: "keycap: 2",
    keywords: "keycap"
  },
  {
    no: 1307,
    codes: "0033 FE0F 20E3",
    char: "3️⃣",
    name: "keycap: 3",
    keywords: "keycap"
  },
  {
    no: 1308,
    codes: "0034 FE0F 20E3",
    char: "4️⃣",
    name: "keycap: 4",
    keywords: "keycap"
  },
  {
    no: 1309,
    codes: "0035 FE0F 20E3",
    char: "5️⃣",
    name: "keycap: 5",
    keywords: "keycap"
  },
  {
    no: 1310,
    codes: "0036 FE0F 20E3",
    char: "6️⃣",
    name: "keycap: 6",
    keywords: "keycap"
  },
  {
    no: 1311,
    codes: "0037 FE0F 20E3",
    char: "7️⃣",
    name: "keycap: 7",
    keywords: "keycap"
  },
  {
    no: 1312,
    codes: "0038 FE0F 20E3",
    char: "8️⃣",
    name: "keycap: 8",
    keywords: "keycap"
  },
  {
    no: 1313,
    codes: "0039 FE0F 20E3",
    char: "9️⃣",
    name: "keycap: 9",
    keywords: "keycap"
  },
  {
    no: 1314,
    codes: "1F51F",
    char: "🔟",
    name: "keycap: 10",
    keywords: "keycap"
  },
  {
    no: 1315,
    codes: "1F4AF",
    char: "💯",
    name: "hundred points",
    keywords: "100 | full | hundred | hundred points | score"
  },
  {
    no: 1316,
    codes: "1F520",
    char: "🔠",
    name: "input latin uppercase",
    keywords: "ABCD | input | latin | letters | uppercase"
  },
  {
    no: 1317,
    codes: "1F521",
    char: "🔡",
    name: "input latin lowercase",
    keywords: "abcd | input | latin | letters | lowercase"
  },
  {
    no: 1318,
    codes: "1F522",
    char: "🔢",
    name: "input numbers",
    keywords: "1234 | input | numbers"
  },
  {
    no: 1319,
    codes: "1F523",
    char: "🔣",
    name: "input symbols",
    keywords: "〒♪&% | input | input symbols"
  },
  {
    no: 1320,
    codes: "1F524",
    char: "🔤",
    name: "input latin letters",
    keywords: "abc | alphabet | input | latin | letters"
  },
  {
    no: 1321,
    codes: "1F170",
    char: "🅰",
    name: "A button (blood type)",
    keywords: "a | A button (blood type) | blood type"
  },
  {
    no: 1322,
    codes: "1F18E",
    char: "🆎",
    name: "AB button (blood type)",
    keywords: "ab | AB button (blood type) | blood type"
  },
  {
    no: 1323,
    codes: "1F171",
    char: "🅱",
    name: "B button (blood type)",
    keywords: "b | B button (blood type) | blood type"
  },
  {
    no: 1324,
    codes: "1F191",
    char: "🆑",
    name: "CL button",
    keywords: "cl | CL button"
  },
  {
    no: 1325,
    codes: "1F192",
    char: "🆒",
    name: "COOL button",
    keywords: "cool | COOL button"
  },
  {
    no: 1326,
    codes: "1F193",
    char: "🆓",
    name: "FREE button",
    keywords: "free | FREE button"
  },
  {
    no: 1327,
    codes: "2139",
    char: "ℹ",
    name: "information",
    keywords: "i | information"
  },
  {
    no: 1328,
    codes: "1F194",
    char: "🆔",
    name: "ID button",
    keywords: "id | ID button | identity"
  },
  {
    no: 1329,
    codes: "24C2",
    char: "Ⓜ",
    name: "circled M",
    keywords: "circle | circled M | m"
  },
  {
    no: 1330,
    codes: "1F195",
    char: "🆕",
    name: "NEW button",
    keywords: "new | NEW button"
  },
  {
    no: 1331,
    codes: "1F196",
    char: "🆖",
    name: "NG button",
    keywords: "ng | NG button"
  },
  {
    no: 1332,
    codes: "1F17E",
    char: "🅾",
    name: "O button (blood type)",
    keywords: "blood type | o | O button (blood type)"
  },
  {
    no: 1333,
    codes: "1F197",
    char: "🆗",
    name: "OK button",
    keywords: "OK | OK button"
  },
  {
    no: 1334,
    codes: "1F17F",
    char: "🅿",
    name: "P button",
    keywords: "P button | parking"
  },
  {
    no: 1335,
    codes: "1F198",
    char: "🆘",
    name: "SOS button",
    keywords: "help | sos | SOS button"
  },
  {
    no: 1336,
    codes: "1F199",
    char: "🆙",
    name: "UP! button",
    keywords: "mark | up | UP! button"
  },
  {
    no: 1337,
    codes: "1F19A",
    char: "🆚",
    name: "VS button",
    keywords: "versus | vs | VS button"
  },
  {
    no: 1338,
    codes: "1F201",
    char: "🈁",
    name: "Japanese “here” button",
    keywords: "“here” | Japanese | Japanese “here” button | katakana | ココ"
  },
  {
    no: 1339,
    codes: "1F202",
    char: "🈂",
    name: "Japanese “service charge” button",
    keywords: "“service charge” | Japanese | Japanese “service charge” button | katakana | サ"
  },
  {
    no: 1340,
    codes: "1F237",
    char: "🈷",
    name: "Japanese “monthly amount” button",
    keywords: "“monthly amount” | ideograph | Japanese | Japanese “monthly amount” button | 月"
  },
  {
    no: 1341,
    codes: "1F236",
    char: "🈶",
    name: "Japanese “not free of charge” button",
    keywords: "“not free of charge” | ideograph | Japanese | Japanese “not free of charge” button | 有"
  },
  {
    no: 1342,
    codes: "1F22F",
    char: "🈯",
    name: "Japanese “reserved” button",
    keywords: "“reserved” | ideograph | Japanese | Japanese “reserved” button | 指"
  },
  {
    no: 1343,
    codes: "1F250",
    char: "🉐",
    name: "Japanese “bargain” button",
    keywords: "“bargain” | ideograph | Japanese | Japanese “bargain” button | 得"
  },
  {
    no: 1344,
    codes: "1F239",
    char: "🈹",
    name: "Japanese “discount” button",
    keywords: "“discount” | ideograph | Japanese | Japanese “discount” button | 割"
  },
  {
    no: 1345,
    codes: "1F21A",
    char: "🈚",
    name: "Japanese “free of charge” button",
    keywords: "“free of charge” | ideograph | Japanese | Japanese “free of charge” button | 無"
  },
  {
    no: 1346,
    codes: "1F232",
    char: "🈲",
    name: "Japanese “prohibited” button",
    keywords: "“prohibited” | ideograph | Japanese | Japanese “prohibited” button | 禁"
  },
  {
    no: 1347,
    codes: "1F251",
    char: "🉑",
    name: "Japanese “acceptable” button",
    keywords: "“acceptable” | ideograph | Japanese | Japanese “acceptable” button | 可"
  },
  {
    no: 1348,
    codes: "1F238",
    char: "🈸",
    name: "Japanese “application” button",
    keywords: "“application” | ideograph | Japanese | Japanese “application” button | 申"
  },
  {
    no: 1349,
    codes: "1F234",
    char: "🈴",
    name: "Japanese “passing grade” button",
    keywords: "“passing grade” | ideograph | Japanese | Japanese “passing grade” button | 合"
  },
  {
    no: 1350,
    codes: "1F233",
    char: "🈳",
    name: "Japanese “vacancy” button",
    keywords: "“vacancy” | ideograph | Japanese | Japanese “vacancy” button | 空"
  },
  {
    no: 1351,
    codes: "3297",
    char: "㊗",
    name: "Japanese “congratulations” button",
    keywords: "“congratulations” | ideograph | Japanese | Japanese “congratulations” button | 祝"
  },
  {
    no: 1352,
    codes: "3299",
    char: "㊙",
    name: "Japanese “secret” button",
    keywords: "“secret” | ideograph | Japanese | Japanese “secret” button | 秘"
  },
  {
    no: 1353,
    codes: "1F23A",
    char: "🈺",
    name: "Japanese “open for business” button",
    keywords: "“open for business” | ideograph | Japanese | Japanese “open for business” button | 営"
  },
  {
    no: 1354,
    codes: "1F235",
    char: "🈵",
    name: "Japanese “no vacancy” button",
    keywords: "“no vacancy” | ideograph | Japanese | Japanese “no vacancy” button | 満"
  },
  {
    no: 1355,
    codes: "25AA",
    char: "▪",
    name: "black small square",
    keywords: "black small square | geometric | square"
  },
  {
    no: 1356,
    codes: "25AB",
    char: "▫",
    name: "white small square",
    keywords: "geometric | square | white small square"
  },
  {
    no: 1357,
    codes: "25FB",
    char: "◻",
    name: "white medium square",
    keywords: "geometric | square | white medium square"
  },
  {
    no: 1358,
    codes: "25FC",
    char: "◼",
    name: "black medium square",
    keywords: "black medium square | geometric | square"
  },
  {
    no: 1359,
    codes: "25FD",
    char: "◽",
    name: "white medium-small square",
    keywords: "geometric | square | white medium-small square"
  },
  {
    no: 1360,
    codes: "25FE",
    char: "◾",
    name: "black medium-small square",
    keywords: "black medium-small square | geometric | square"
  },
  {
    no: 1361,
    codes: "2B1B",
    char: "⬛",
    name: "black large square",
    keywords: "black large square | geometric | square"
  },
  {
    no: 1362,
    codes: "2B1C",
    char: "⬜",
    name: "white large square",
    keywords: "geometric | square | white large square"
  },
  {
    no: 1363,
    codes: "1F536",
    char: "🔶",
    name: "large orange diamond",
    keywords: "diamond | geometric | large orange diamond | orange"
  },
  {
    no: 1364,
    codes: "1F537",
    char: "🔷",
    name: "large blue diamond",
    keywords: "blue | diamond | geometric | large blue diamond"
  },
  {
    no: 1365,
    codes: "1F538",
    char: "🔸",
    name: "small orange diamond",
    keywords: "diamond | geometric | orange | small orange diamond"
  },
  {
    no: 1366,
    codes: "1F539",
    char: "🔹",
    name: "small blue diamond",
    keywords: "blue | diamond | geometric | small blue diamond"
  },
  {
    no: 1367,
    codes: "1F53A",
    char: "🔺",
    name: "red triangle pointed up",
    keywords: "geometric | red | red triangle pointed up"
  },
  {
    no: 1368,
    codes: "1F53B",
    char: "🔻",
    name: "red triangle pointed down",
    keywords: "down | geometric | red | red triangle pointed down"
  },
  {
    no: 1369,
    codes: "1F4A0",
    char: "💠",
    name: "diamond with a dot",
    keywords: "comic | diamond | diamond with a dot | geometric | inside"
  },
  {
    no: 1370,
    codes: "1F518",
    char: "🔘",
    name: "radio button",
    keywords: "button | geometric | radio"
  },
  {
    no: 1371,
    codes: "1F532",
    char: "🔲",
    name: "black square button",
    keywords: "black square button | button | geometric | square"
  },
  {
    no: 1372,
    codes: "1F533",
    char: "🔳",
    name: "white square button",
    keywords: "button | geometric | outlined | square | white square button"
  },
  {
    no: 1373,
    codes: "26AA",
    char: "⚪",
    name: "white circle",
    keywords: "circle | geometric | white circle"
  },
  {
    no: 1374,
    codes: "26AB",
    char: "⚫",
    name: "black circle",
    keywords: "black circle | circle | geometric"
  },
  {
    no: 1375,
    codes: "1F534",
    char: "🔴",
    name: "red circle",
    keywords: "circle | geometric | red"
  },
  {
    no: 1376,
    codes: "1F535",
    char: "🔵",
    name: "blue circle",
    keywords: "blue | circle | geometric"
  },
  {
    no: 1377,
    codes: "1F3C1",
    char: "🏁",
    name: "chequered flag",
    keywords: "checkered | chequered | chequered flag | racing"
  },
  {
    no: 1378,
    codes: "1F6A9",
    char: "🚩",
    name: "triangular flag",
    keywords: "post | triangular flag"
  },
  {
    no: 1379,
    codes: "1F38C",
    char: "🎌",
    name: "crossed flags",
    keywords: "celebration | cross | crossed | crossed flags | Japanese"
  },
  {
    no: 1380,
    codes: "1F3F4",
    char: "🏴",
    name: "black flag",
    keywords: "black flag | waving"
  },
  {
    no: 1381,
    codes: "1F3F3",
    char: "🏳",
    name: "white flag",
    keywords: "waving | white flag"
  },
  {
    no: 1382,
    codes: "1F3F3 FE0F 200D 1F308",
    char: "🏳️‍🌈",
    name: "rainbow flag",
    keywords: "rainbow | rainbow flag"
  },
  {
    no: 1383,
    codes: "1F3F4 200D 2620 FE0F",
    char: "🏴‍☠️",
    name: "⊛ pirate flag",
    keywords: "Jolly Roger | pirate | plunder | treasure"
  },
  {
    no: 1384,
    codes: "1F1E6 1F1E8",
    char: "🇦🇨",
    name: "Ascension Island",
    keywords: "flag"
  },
  {
    no: 1385,
    codes: "1F1E6 1F1E9",
    char: "🇦🇩",
    name: "Andorra",
    keywords: "flag"
  },
  {
    no: 1386,
    codes: "1F1E6 1F1EA",
    char: "🇦🇪",
    name: "United Arab Emirates",
    keywords: "flag"
  },
  {
    no: 1387,
    codes: "1F1E6 1F1EB",
    char: "🇦🇫",
    name: "Afghanistan",
    keywords: "flag"
  },
  {
    no: 1388,
    codes: "1F1E6 1F1EC",
    char: "🇦🇬",
    name: "Antigua & Barbuda",
    keywords: "flag"
  },
  {
    no: 1389,
    codes: "1F1E6 1F1EE",
    char: "🇦🇮",
    name: "Anguilla",
    keywords: "flag"
  },
  {
    no: 1390,
    codes: "1F1E6 1F1F1",
    char: "🇦🇱",
    name: "Albania",
    keywords: "flag"
  },
  {
    no: 1391,
    codes: "1F1E6 1F1F2",
    char: "🇦🇲",
    name: "Armenia",
    keywords: "flag"
  },
  {
    no: 1392,
    codes: "1F1E6 1F1F4",
    char: "🇦🇴",
    name: "Angola",
    keywords: "flag"
  },
  {
    no: 1393,
    codes: "1F1E6 1F1F6",
    char: "🇦🇶",
    name: "Antarctica",
    keywords: "flag"
  },
  {
    no: 1394,
    codes: "1F1E6 1F1F7",
    char: "🇦🇷",
    name: "Argentina",
    keywords: "flag"
  },
  {
    no: 1395,
    codes: "1F1E6 1F1F8",
    char: "🇦🇸",
    name: "American Samoa",
    keywords: "flag"
  },
  {
    no: 1396,
    codes: "1F1E6 1F1F9",
    char: "🇦🇹",
    name: "Austria",
    keywords: "flag"
  },
  {
    no: 1397,
    codes: "1F1E6 1F1FA",
    char: "🇦🇺",
    name: "Australia",
    keywords: "flag"
  },
  {
    no: 1398,
    codes: "1F1E6 1F1FC",
    char: "🇦🇼",
    name: "Aruba",
    keywords: "flag"
  },
  {
    no: 1399,
    codes: "1F1E6 1F1FD",
    char: "🇦🇽",
    name: "Åland Islands",
    keywords: "flag"
  },
  {
    no: 1400,
    codes: "1F1E6 1F1FF",
    char: "🇦🇿",
    name: "Azerbaijan",
    keywords: "flag"
  },
  {
    no: 1401,
    codes: "1F1E7 1F1E6",
    char: "🇧🇦",
    name: "Bosnia & Herzegovina",
    keywords: "flag"
  },
  {
    no: 1402,
    codes: "1F1E7 1F1E7",
    char: "🇧🇧",
    name: "Barbados",
    keywords: "flag"
  },
  {
    no: 1403,
    codes: "1F1E7 1F1E9",
    char: "🇧🇩",
    name: "Bangladesh",
    keywords: "flag"
  },
  {
    no: 1404,
    codes: "1F1E7 1F1EA",
    char: "🇧🇪",
    name: "Belgium",
    keywords: "flag"
  },
  {
    no: 1405,
    codes: "1F1E7 1F1EB",
    char: "🇧🇫",
    name: "Burkina Faso",
    keywords: "flag"
  },
  {
    no: 1406,
    codes: "1F1E7 1F1EC",
    char: "🇧🇬",
    name: "Bulgaria",
    keywords: "flag"
  },
  {
    no: 1407,
    codes: "1F1E7 1F1ED",
    char: "🇧🇭",
    name: "Bahrain",
    keywords: "flag"
  },
  {
    no: 1408,
    codes: "1F1E7 1F1EE",
    char: "🇧🇮",
    name: "Burundi",
    keywords: "flag"
  },
  {
    no: 1409,
    codes: "1F1E7 1F1EF",
    char: "🇧🇯",
    name: "Benin",
    keywords: "flag"
  },
  {
    no: 1410,
    codes: "1F1E7 1F1F1",
    char: "🇧🇱",
    name: "St. Barthélemy",
    keywords: "flag"
  },
  {
    no: 1411,
    codes: "1F1E7 1F1F2",
    char: "🇧🇲",
    name: "Bermuda",
    keywords: "flag"
  },
  {
    no: 1412,
    codes: "1F1E7 1F1F3",
    char: "🇧🇳",
    name: "Brunei",
    keywords: "flag"
  },
  {
    no: 1413,
    codes: "1F1E7 1F1F4",
    char: "🇧🇴",
    name: "Bolivia",
    keywords: "flag"
  },
  {
    no: 1414,
    codes: "1F1E7 1F1F6",
    char: "🇧🇶",
    name: "Caribbean Netherlands",
    keywords: "flag"
  },
  {
    no: 1415,
    codes: "1F1E7 1F1F7",
    char: "🇧🇷",
    name: "Brazil",
    keywords: "flag"
  },
  {
    no: 1416,
    codes: "1F1E7 1F1F8",
    char: "🇧🇸",
    name: "Bahamas",
    keywords: "flag"
  },
  {
    no: 1417,
    codes: "1F1E7 1F1F9",
    char: "🇧🇹",
    name: "Bhutan",
    keywords: "flag"
  },
  {
    no: 1418,
    codes: "1F1E7 1F1FB",
    char: "🇧🇻",
    name: "Bouvet Island",
    keywords: "flag"
  },
  {
    no: 1419,
    codes: "1F1E7 1F1FC",
    char: "🇧🇼",
    name: "Botswana",
    keywords: "flag"
  },
  {
    no: 1420,
    codes: "1F1E7 1F1FE",
    char: "🇧🇾",
    name: "Belarus",
    keywords: "flag"
  },
  {
    no: 1421,
    codes: "1F1E7 1F1FF",
    char: "🇧🇿",
    name: "Belize",
    keywords: "flag"
  },
  {
    no: 1422,
    codes: "1F1E8 1F1E6",
    char: "🇨🇦",
    name: "Canada",
    keywords: "flag"
  },
  {
    no: 1423,
    codes: "1F1E8 1F1E8",
    char: "🇨🇨",
    name: "Cocos (Keeling) Islands",
    keywords: "flag"
  },
  {
    no: 1424,
    codes: "1F1E8 1F1E9",
    char: "🇨🇩",
    name: "Congo - Kinshasa",
    keywords: "flag"
  },
  {
    no: 1425,
    codes: "1F1E8 1F1EB",
    char: "🇨🇫",
    name: "Central African Republic",
    keywords: "flag"
  },
  {
    no: 1426,
    codes: "1F1E8 1F1EC",
    char: "🇨🇬",
    name: "Congo - Brazzaville",
    keywords: "flag"
  },
  {
    no: 1427,
    codes: "1F1E8 1F1ED",
    char: "🇨🇭",
    name: "Switzerland",
    keywords: "flag"
  },
  {
    no: 1428,
    codes: "1F1E8 1F1EE",
    char: "🇨🇮",
    name: "Côte d’Ivoire",
    keywords: "flag"
  },
  {
    no: 1429,
    codes: "1F1E8 1F1F0",
    char: "🇨🇰",
    name: "Cook Islands",
    keywords: "flag"
  },
  {
    no: 1430,
    codes: "1F1E8 1F1F1",
    char: "🇨🇱",
    name: "Chile",
    keywords: "flag"
  },
  {
    no: 1431,
    codes: "1F1E8 1F1F2",
    char: "🇨🇲",
    name: "Cameroon",
    keywords: "flag"
  },
  {
    no: 1432,
    codes: "1F1E8 1F1F3",
    char: "🇨🇳",
    name: "China",
    keywords: "flag"
  },
  {
    no: 1433,
    codes: "1F1E8 1F1F4",
    char: "🇨🇴",
    name: "Colombia",
    keywords: "flag"
  },
  {
    no: 1434,
    codes: "1F1E8 1F1F5",
    char: "🇨🇵",
    name: "Clipperton Island",
    keywords: "flag"
  },
  {
    no: 1435,
    codes: "1F1E8 1F1F7",
    char: "🇨🇷",
    name: "Costa Rica",
    keywords: "flag"
  },
  {
    no: 1436,
    codes: "1F1E8 1F1FA",
    char: "🇨🇺",
    name: "Cuba",
    keywords: "flag"
  },
  {
    no: 1437,
    codes: "1F1E8 1F1FB",
    char: "🇨🇻",
    name: "Cape Verde",
    keywords: "flag"
  },
  {
    no: 1438,
    codes: "1F1E8 1F1FC",
    char: "🇨🇼",
    name: "Curaçao",
    keywords: "flag"
  },
  {
    no: 1439,
    codes: "1F1E8 1F1FD",
    char: "🇨🇽",
    name: "Christmas Island",
    keywords: "flag"
  },
  {
    no: 1440,
    codes: "1F1E8 1F1FE",
    char: "🇨🇾",
    name: "Cyprus",
    keywords: "flag"
  },
  {
    no: 1441,
    codes: "1F1E8 1F1FF",
    char: "🇨🇿",
    name: "Czechia",
    keywords: "flag"
  },
  {
    no: 1442,
    codes: "1F1E9 1F1EA",
    char: "🇩🇪",
    name: "Germany",
    keywords: "flag"
  },
  {
    no: 1443,
    codes: "1F1E9 1F1EC",
    char: "🇩🇬",
    name: "Diego Garcia",
    keywords: "flag"
  },
  {
    no: 1444,
    codes: "1F1E9 1F1EF",
    char: "🇩🇯",
    name: "Djibouti",
    keywords: "flag"
  },
  {
    no: 1445,
    codes: "1F1E9 1F1F0",
    char: "🇩🇰",
    name: "Denmark",
    keywords: "flag"
  },
  {
    no: 1446,
    codes: "1F1E9 1F1F2",
    char: "🇩🇲",
    name: "Dominica",
    keywords: "flag"
  },
  {
    no: 1447,
    codes: "1F1E9 1F1F4",
    char: "🇩🇴",
    name: "Dominican Republic",
    keywords: "flag"
  },
  {
    no: 1448,
    codes: "1F1E9 1F1FF",
    char: "🇩🇿",
    name: "Algeria",
    keywords: "flag"
  },
  {
    no: 1449,
    codes: "1F1EA 1F1E6",
    char: "🇪🇦",
    name: "Ceuta & Melilla",
    keywords: "flag"
  },
  {
    no: 1450,
    codes: "1F1EA 1F1E8",
    char: "🇪🇨",
    name: "Ecuador",
    keywords: "flag"
  },
  {
    no: 1451,
    codes: "1F1EA 1F1EA",
    char: "🇪🇪",
    name: "Estonia",
    keywords: "flag"
  },
  {
    no: 1452,
    codes: "1F1EA 1F1EC",
    char: "🇪🇬",
    name: "Egypt",
    keywords: "flag"
  },
  {
    no: 1453,
    codes: "1F1EA 1F1ED",
    char: "🇪🇭",
    name: "Western Sahara",
    keywords: "flag"
  },
  {
    no: 1454,
    codes: "1F1EA 1F1F7",
    char: "🇪🇷",
    name: "Eritrea",
    keywords: "flag"
  },
  {
    no: 1455,
    codes: "1F1EA 1F1F8",
    char: "🇪🇸",
    name: "Spain",
    keywords: "flag"
  },
  {
    no: 1456,
    codes: "1F1EA 1F1F9",
    char: "🇪🇹",
    name: "Ethiopia",
    keywords: "flag"
  },
  {
    no: 1457,
    codes: "1F1EA 1F1FA",
    char: "🇪🇺",
    name: "European Union",
    keywords: "flag"
  },
  {
    no: 1458,
    codes: "1F1EB 1F1EE",
    char: "🇫🇮",
    name: "Finland",
    keywords: "flag"
  },
  {
    no: 1459,
    codes: "1F1EB 1F1EF",
    char: "🇫🇯",
    name: "Fiji",
    keywords: "flag"
  },
  {
    no: 1460,
    codes: "1F1EB 1F1F0",
    char: "🇫🇰",
    name: "Falkland Islands",
    keywords: "flag"
  },
  {
    no: 1461,
    codes: "1F1EB 1F1F2",
    char: "🇫🇲",
    name: "Micronesia",
    keywords: "flag"
  },
  {
    no: 1462,
    codes: "1F1EB 1F1F4",
    char: "🇫🇴",
    name: "Faroe Islands",
    keywords: "flag"
  },
  {
    no: 1463,
    codes: "1F1EB 1F1F7",
    char: "🇫🇷",
    name: "France",
    keywords: "flag"
  },
  {
    no: 1464,
    codes: "1F1EC 1F1E6",
    char: "🇬🇦",
    name: "Gabon",
    keywords: "flag"
  },
  {
    no: 1465,
    codes: "1F1EC 1F1E7",
    char: "🇬🇧",
    name: "United Kingdom",
    keywords: "flag"
  },
  {
    no: 1466,
    codes: "1F1EC 1F1E9",
    char: "🇬🇩",
    name: "Grenada",
    keywords: "flag"
  },
  {
    no: 1467,
    codes: "1F1EC 1F1EA",
    char: "🇬🇪",
    name: "Georgia",
    keywords: "flag"
  },
  {
    no: 1468,
    codes: "1F1EC 1F1EB",
    char: "🇬🇫",
    name: "French Guiana",
    keywords: "flag"
  },
  {
    no: 1469,
    codes: "1F1EC 1F1EC",
    char: "🇬🇬",
    name: "Guernsey",
    keywords: "flag"
  },
  {
    no: 1470,
    codes: "1F1EC 1F1ED",
    char: "🇬🇭",
    name: "Ghana",
    keywords: "flag"
  },
  {
    no: 1471,
    codes: "1F1EC 1F1EE",
    char: "🇬🇮",
    name: "Gibraltar",
    keywords: "flag"
  },
  {
    no: 1472,
    codes: "1F1EC 1F1F1",
    char: "🇬🇱",
    name: "Greenland",
    keywords: "flag"
  },
  {
    no: 1473,
    codes: "1F1EC 1F1F2",
    char: "🇬🇲",
    name: "Gambia",
    keywords: "flag"
  },
  {
    no: 1474,
    codes: "1F1EC 1F1F3",
    char: "🇬🇳",
    name: "Guinea",
    keywords: "flag"
  },
  {
    no: 1475,
    codes: "1F1EC 1F1F5",
    char: "🇬🇵",
    name: "Guadeloupe",
    keywords: "flag"
  },
  {
    no: 1476,
    codes: "1F1EC 1F1F6",
    char: "🇬🇶",
    name: "Equatorial Guinea",
    keywords: "flag"
  },
  {
    no: 1477,
    codes: "1F1EC 1F1F7",
    char: "🇬🇷",
    name: "Greece",
    keywords: "flag"
  },
  {
    no: 1478,
    codes: "1F1EC 1F1F8",
    char: "🇬🇸",
    name: "South Georgia & South Sandwich Islands",
    keywords: "flag"
  },
  {
    no: 1479,
    codes: "1F1EC 1F1F9",
    char: "🇬🇹",
    name: "Guatemala",
    keywords: "flag"
  },
  {
    no: 1480,
    codes: "1F1EC 1F1FA",
    char: "🇬🇺",
    name: "Guam",
    keywords: "flag"
  },
  {
    no: 1481,
    codes: "1F1EC 1F1FC",
    char: "🇬🇼",
    name: "Guinea-Bissau",
    keywords: "flag"
  },
  {
    no: 1482,
    codes: "1F1EC 1F1FE",
    char: "🇬🇾",
    name: "Guyana",
    keywords: "flag"
  },
  {
    no: 1483,
    codes: "1F1ED 1F1F0",
    char: "🇭🇰",
    name: "Hong Kong SAR China",
    keywords: "flag"
  },
  {
    no: 1484,
    codes: "1F1ED 1F1F2",
    char: "🇭🇲",
    name: "Heard & McDonald Islands",
    keywords: "flag"
  },
  {
    no: 1485,
    codes: "1F1ED 1F1F3",
    char: "🇭🇳",
    name: "Honduras",
    keywords: "flag"
  },
  {
    no: 1486,
    codes: "1F1ED 1F1F7",
    char: "🇭🇷",
    name: "Croatia",
    keywords: "flag"
  },
  {
    no: 1487,
    codes: "1F1ED 1F1F9",
    char: "🇭🇹",
    name: "Haiti",
    keywords: "flag"
  },
  {
    no: 1488,
    codes: "1F1ED 1F1FA",
    char: "🇭🇺",
    name: "Hungary",
    keywords: "flag"
  },
  {
    no: 1489,
    codes: "1F1EE 1F1E8",
    char: "🇮🇨",
    name: "Canary Islands",
    keywords: "flag"
  },
  {
    no: 1490,
    codes: "1F1EE 1F1E9",
    char: "🇮🇩",
    name: "Indonesia",
    keywords: "flag"
  },
  {
    no: 1491,
    codes: "1F1EE 1F1EA",
    char: "🇮🇪",
    name: "Ireland",
    keywords: "flag"
  },
  {
    no: 1492,
    codes: "1F1EE 1F1F1",
    char: "🇮🇱",
    name: "Israel",
    keywords: "flag"
  },
  {
    no: 1493,
    codes: "1F1EE 1F1F2",
    char: "🇮🇲",
    name: "Isle of Man",
    keywords: "flag"
  },
  {
    no: 1494,
    codes: "1F1EE 1F1F3",
    char: "🇮🇳",
    name: "India",
    keywords: "flag"
  },
  {
    no: 1495,
    codes: "1F1EE 1F1F4",
    char: "🇮🇴",
    name: "British Indian Ocean Territory",
    keywords: "flag"
  },
  {
    no: 1496,
    codes: "1F1EE 1F1F6",
    char: "🇮🇶",
    name: "Iraq",
    keywords: "flag"
  },
  {
    no: 1497,
    codes: "1F1EE 1F1F7",
    char: "🇮🇷",
    name: "Iran",
    keywords: "flag"
  },
  {
    no: 1498,
    codes: "1F1EE 1F1F8",
    char: "🇮🇸",
    name: "Iceland",
    keywords: "flag"
  },
  {
    no: 1499,
    codes: "1F1EE 1F1F9",
    char: "🇮🇹",
    name: "Italy",
    keywords: "flag"
  },
  {
    no: 1500,
    codes: "1F1EF 1F1EA",
    char: "🇯🇪",
    name: "Jersey",
    keywords: "flag"
  },
  {
    no: 1501,
    codes: "1F1EF 1F1F2",
    char: "🇯🇲",
    name: "Jamaica",
    keywords: "flag"
  },
  {
    no: 1502,
    codes: "1F1EF 1F1F4",
    char: "🇯🇴",
    name: "Jordan",
    keywords: "flag"
  },
  {
    no: 1503,
    codes: "1F1EF 1F1F5",
    char: "🇯🇵",
    name: "Japan",
    keywords: "flag"
  },
  {
    no: 1504,
    codes: "1F1F0 1F1EA",
    char: "🇰🇪",
    name: "Kenya",
    keywords: "flag"
  },
  {
    no: 1505,
    codes: "1F1F0 1F1EC",
    char: "🇰🇬",
    name: "Kyrgyzstan",
    keywords: "flag"
  },
  {
    no: 1506,
    codes: "1F1F0 1F1ED",
    char: "🇰🇭",
    name: "Cambodia",
    keywords: "flag"
  },
  {
    no: 1507,
    codes: "1F1F0 1F1EE",
    char: "🇰🇮",
    name: "Kiribati",
    keywords: "flag"
  },
  {
    no: 1508,
    codes: "1F1F0 1F1F2",
    char: "🇰🇲",
    name: "Comoros",
    keywords: "flag"
  },
  {
    no: 1509,
    codes: "1F1F0 1F1F3",
    char: "🇰🇳",
    name: "St. Kitts & Nevis",
    keywords: "flag"
  },
  {
    no: 1510,
    codes: "1F1F0 1F1F5",
    char: "🇰🇵",
    name: "North Korea",
    keywords: "flag"
  },
  {
    no: 1511,
    codes: "1F1F0 1F1F7",
    char: "🇰🇷",
    name: "South Korea",
    keywords: "flag"
  },
  {
    no: 1512,
    codes: "1F1F0 1F1FC",
    char: "🇰🇼",
    name: "Kuwait",
    keywords: "flag"
  },
  {
    no: 1513,
    codes: "1F1F0 1F1FE",
    char: "🇰🇾",
    name: "Cayman Islands",
    keywords: "flag"
  },
  {
    no: 1514,
    codes: "1F1F0 1F1FF",
    char: "🇰🇿",
    name: "Kazakhstan",
    keywords: "flag"
  },
  {
    no: 1515,
    codes: "1F1F1 1F1E6",
    char: "🇱🇦",
    name: "Laos",
    keywords: "flag"
  },
  {
    no: 1516,
    codes: "1F1F1 1F1E7",
    char: "🇱🇧",
    name: "Lebanon",
    keywords: "flag"
  },
  {
    no: 1517,
    codes: "1F1F1 1F1E8",
    char: "🇱🇨",
    name: "St. Lucia",
    keywords: "flag"
  },
  {
    no: 1518,
    codes: "1F1F1 1F1EE",
    char: "🇱🇮",
    name: "Liechtenstein",
    keywords: "flag"
  },
  {
    no: 1519,
    codes: "1F1F1 1F1F0",
    char: "🇱🇰",
    name: "Sri Lanka",
    keywords: "flag"
  },
  {
    no: 1520,
    codes: "1F1F1 1F1F7",
    char: "🇱🇷",
    name: "Liberia",
    keywords: "flag"
  },
  {
    no: 1521,
    codes: "1F1F1 1F1F8",
    char: "🇱🇸",
    name: "Lesotho",
    keywords: "flag"
  },
  {
    no: 1522,
    codes: "1F1F1 1F1F9",
    char: "🇱🇹",
    name: "Lithuania",
    keywords: "flag"
  },
  {
    no: 1523,
    codes: "1F1F1 1F1FA",
    char: "🇱🇺",
    name: "Luxembourg",
    keywords: "flag"
  },
  {
    no: 1524,
    codes: "1F1F1 1F1FB",
    char: "🇱🇻",
    name: "Latvia",
    keywords: "flag"
  },
  {
    no: 1525,
    codes: "1F1F1 1F1FE",
    char: "🇱🇾",
    name: "Libya",
    keywords: "flag"
  },
  {
    no: 1526,
    codes: "1F1F2 1F1E6",
    char: "🇲🇦",
    name: "Morocco",
    keywords: "flag"
  },
  {
    no: 1527,
    codes: "1F1F2 1F1E8",
    char: "🇲🇨",
    name: "Monaco",
    keywords: "flag"
  },
  {
    no: 1528,
    codes: "1F1F2 1F1E9",
    char: "🇲🇩",
    name: "Moldova",
    keywords: "flag"
  },
  {
    no: 1529,
    codes: "1F1F2 1F1EA",
    char: "🇲🇪",
    name: "Montenegro",
    keywords: "flag"
  },
  {
    no: 1530,
    codes: "1F1F2 1F1EB",
    char: "🇲🇫",
    name: "St. Martin",
    keywords: "flag"
  },
  {
    no: 1531,
    codes: "1F1F2 1F1EC",
    char: "🇲🇬",
    name: "Madagascar",
    keywords: "flag"
  },
  {
    no: 1532,
    codes: "1F1F2 1F1ED",
    char: "🇲🇭",
    name: "Marshall Islands",
    keywords: "flag"
  },
  {
    no: 1533,
    codes: "1F1F2 1F1F0",
    char: "🇲🇰",
    name: "Macedonia",
    keywords: "flag"
  },
  {
    no: 1534,
    codes: "1F1F2 1F1F1",
    char: "🇲🇱",
    name: "Mali",
    keywords: "flag"
  },
  {
    no: 1535,
    codes: "1F1F2 1F1F2",
    char: "🇲🇲",
    name: "Myanmar (Burma)",
    keywords: "flag"
  },
  {
    no: 1536,
    codes: "1F1F2 1F1F3",
    char: "🇲🇳",
    name: "Mongolia",
    keywords: "flag"
  },
  {
    no: 1537,
    codes: "1F1F2 1F1F4",
    char: "🇲🇴",
    name: "Macau SAR China",
    keywords: "flag"
  },
  {
    no: 1538,
    codes: "1F1F2 1F1F5",
    char: "🇲🇵",
    name: "Northern Mariana Islands",
    keywords: "flag"
  },
  {
    no: 1539,
    codes: "1F1F2 1F1F6",
    char: "🇲🇶",
    name: "Martinique",
    keywords: "flag"
  },
  {
    no: 1540,
    codes: "1F1F2 1F1F7",
    char: "🇲🇷",
    name: "Mauritania",
    keywords: "flag"
  },
  {
    no: 1541,
    codes: "1F1F2 1F1F8",
    char: "🇲🇸",
    name: "Montserrat",
    keywords: "flag"
  },
  {
    no: 1542,
    codes: "1F1F2 1F1F9",
    char: "🇲🇹",
    name: "Malta",
    keywords: "flag"
  },
  {
    no: 1543,
    codes: "1F1F2 1F1FA",
    char: "🇲🇺",
    name: "Mauritius",
    keywords: "flag"
  },
  {
    no: 1544,
    codes: "1F1F2 1F1FB",
    char: "🇲🇻",
    name: "Maldives",
    keywords: "flag"
  },
  {
    no: 1545,
    codes: "1F1F2 1F1FC",
    char: "🇲🇼",
    name: "Malawi",
    keywords: "flag"
  },
  {
    no: 1546,
    codes: "1F1F2 1F1FD",
    char: "🇲🇽",
    name: "Mexico",
    keywords: "flag"
  },
  {
    no: 1547,
    codes: "1F1F2 1F1FE",
    char: "🇲🇾",
    name: "Malaysia",
    keywords: "flag"
  },
  {
    no: 1548,
    codes: "1F1F2 1F1FF",
    char: "🇲🇿",
    name: "Mozambique",
    keywords: "flag"
  },
  {
    no: 1549,
    codes: "1F1F3 1F1E6",
    char: "🇳🇦",
    name: "Namibia",
    keywords: "flag"
  },
  {
    no: 1550,
    codes: "1F1F3 1F1E8",
    char: "🇳🇨",
    name: "New Caledonia",
    keywords: "flag"
  },
  {
    no: 1551,
    codes: "1F1F3 1F1EA",
    char: "🇳🇪",
    name: "Niger",
    keywords: "flag"
  },
  {
    no: 1552,
    codes: "1F1F3 1F1EB",
    char: "🇳🇫",
    name: "Norfolk Island",
    keywords: "flag"
  },
  {
    no: 1553,
    codes: "1F1F3 1F1EC",
    char: "🇳🇬",
    name: "Nigeria",
    keywords: "flag"
  },
  {
    no: 1554,
    codes: "1F1F3 1F1EE",
    char: "🇳🇮",
    name: "Nicaragua",
    keywords: "flag"
  },
  {
    no: 1555,
    codes: "1F1F3 1F1F1",
    char: "🇳🇱",
    name: "Netherlands",
    keywords: "flag"
  },
  {
    no: 1556,
    codes: "1F1F3 1F1F4",
    char: "🇳🇴",
    name: "Norway",
    keywords: "flag"
  },
  {
    no: 1557,
    codes: "1F1F3 1F1F5",
    char: "🇳🇵",
    name: "Nepal",
    keywords: "flag"
  },
  {
    no: 1558,
    codes: "1F1F3 1F1F7",
    char: "🇳🇷",
    name: "Nauru",
    keywords: "flag"
  },
  {
    no: 1559,
    codes: "1F1F3 1F1FA",
    char: "🇳🇺",
    name: "Niue",
    keywords: "flag"
  },
  {
    no: 1560,
    codes: "1F1F3 1F1FF",
    char: "🇳🇿",
    name: "New Zealand",
    keywords: "flag"
  },
  {
    no: 1561,
    codes: "1F1F4 1F1F2",
    char: "🇴🇲",
    name: "Oman",
    keywords: "flag"
  },
  {
    no: 1562,
    codes: "1F1F5 1F1E6",
    char: "🇵🇦",
    name: "Panama",
    keywords: "flag"
  },
  {
    no: 1563,
    codes: "1F1F5 1F1EA",
    char: "🇵🇪",
    name: "Peru",
    keywords: "flag"
  },
  {
    no: 1564,
    codes: "1F1F5 1F1EB",
    char: "🇵🇫",
    name: "French Polynesia",
    keywords: "flag"
  },
  {
    no: 1565,
    codes: "1F1F5 1F1EC",
    char: "🇵🇬",
    name: "Papua New Guinea",
    keywords: "flag"
  },
  {
    no: 1566,
    codes: "1F1F5 1F1ED",
    char: "🇵🇭",
    name: "Philippines",
    keywords: "flag"
  },
  {
    no: 1567,
    codes: "1F1F5 1F1F0",
    char: "🇵🇰",
    name: "Pakistan",
    keywords: "flag"
  },
  {
    no: 1568,
    codes: "1F1F5 1F1F1",
    char: "🇵🇱",
    name: "Poland",
    keywords: "flag"
  },
  {
    no: 1569,
    codes: "1F1F5 1F1F2",
    char: "🇵🇲",
    name: "St. Pierre & Miquelon",
    keywords: "flag"
  },
  {
    no: 1570,
    codes: "1F1F5 1F1F3",
    char: "🇵🇳",
    name: "Pitcairn Islands",
    keywords: "flag"
  },
  {
    no: 1571,
    codes: "1F1F5 1F1F7",
    char: "🇵🇷",
    name: "Puerto Rico",
    keywords: "flag"
  },
  {
    no: 1572,
    codes: "1F1F5 1F1F8",
    char: "🇵🇸",
    name: "Palestinian Territories",
    keywords: "flag"
  },
  {
    no: 1573,
    codes: "1F1F5 1F1F9",
    char: "🇵🇹",
    name: "Portugal",
    keywords: "flag"
  },
  {
    no: 1574,
    codes: "1F1F5 1F1FC",
    char: "🇵🇼",
    name: "Palau",
    keywords: "flag"
  },
  {
    no: 1575,
    codes: "1F1F5 1F1FE",
    char: "🇵🇾",
    name: "Paraguay",
    keywords: "flag"
  },
  {
    no: 1576,
    codes: "1F1F6 1F1E6",
    char: "🇶🇦",
    name: "Qatar",
    keywords: "flag"
  },
  {
    no: 1577,
    codes: "1F1F7 1F1EA",
    char: "🇷🇪",
    name: "Réunion",
    keywords: "flag"
  },
  {
    no: 1578,
    codes: "1F1F7 1F1F4",
    char: "🇷🇴",
    name: "Romania",
    keywords: "flag"
  },
  {
    no: 1579,
    codes: "1F1F7 1F1F8",
    char: "🇷🇸",
    name: "Serbia",
    keywords: "flag"
  },
  {
    no: 1580,
    codes: "1F1F7 1F1FA",
    char: "🇷🇺",
    name: "Russia",
    keywords: "flag"
  },
  {
    no: 1581,
    codes: "1F1F7 1F1FC",
    char: "🇷🇼",
    name: "Rwanda",
    keywords: "flag"
  },
  {
    no: 1582,
    codes: "1F1F8 1F1E6",
    char: "🇸🇦",
    name: "Saudi Arabia",
    keywords: "flag"
  },
  {
    no: 1583,
    codes: "1F1F8 1F1E7",
    char: "🇸🇧",
    name: "Solomon Islands",
    keywords: "flag"
  },
  {
    no: 1584,
    codes: "1F1F8 1F1E8",
    char: "🇸🇨",
    name: "Seychelles",
    keywords: "flag"
  },
  {
    no: 1585,
    codes: "1F1F8 1F1E9",
    char: "🇸🇩",
    name: "Sudan",
    keywords: "flag"
  },
  {
    no: 1586,
    codes: "1F1F8 1F1EA",
    char: "🇸🇪",
    name: "Sweden",
    keywords: "flag"
  },
  {
    no: 1587,
    codes: "1F1F8 1F1EC",
    char: "🇸🇬",
    name: "Singapore",
    keywords: "flag"
  },
  {
    no: 1588,
    codes: "1F1F8 1F1ED",
    char: "🇸🇭",
    name: "St. Helena",
    keywords: "flag"
  },
  {
    no: 1589,
    codes: "1F1F8 1F1EE",
    char: "🇸🇮",
    name: "Slovenia",
    keywords: "flag"
  },
  {
    no: 1590,
    codes: "1F1F8 1F1EF",
    char: "🇸🇯",
    name: "Svalbard & Jan Mayen",
    keywords: "flag"
  },
  {
    no: 1591,
    codes: "1F1F8 1F1F0",
    char: "🇸🇰",
    name: "Slovakia",
    keywords: "flag"
  },
  {
    no: 1592,
    codes: "1F1F8 1F1F1",
    char: "🇸🇱",
    name: "Sierra Leone",
    keywords: "flag"
  },
  {
    no: 1593,
    codes: "1F1F8 1F1F2",
    char: "🇸🇲",
    name: "San Marino",
    keywords: "flag"
  },
  {
    no: 1594,
    codes: "1F1F8 1F1F3",
    char: "🇸🇳",
    name: "Senegal",
    keywords: "flag"
  },
  {
    no: 1595,
    codes: "1F1F8 1F1F4",
    char: "🇸🇴",
    name: "Somalia",
    keywords: "flag"
  },
  {
    no: 1596,
    codes: "1F1F8 1F1F7",
    char: "🇸🇷",
    name: "Suriname",
    keywords: "flag"
  },
  {
    no: 1597,
    codes: "1F1F8 1F1F8",
    char: "🇸🇸",
    name: "South Sudan",
    keywords: "flag"
  },
  {
    no: 1598,
    codes: "1F1F8 1F1F9",
    char: "🇸🇹",
    name: "São Tomé & Príncipe",
    keywords: "flag"
  },
  {
    no: 1599,
    codes: "1F1F8 1F1FB",
    char: "🇸🇻",
    name: "El Salvador",
    keywords: "flag"
  },
  {
    no: 1600,
    codes: "1F1F8 1F1FD",
    char: "🇸🇽",
    name: "Sint Maarten",
    keywords: "flag"
  },
  {
    no: 1601,
    codes: "1F1F8 1F1FE",
    char: "🇸🇾",
    name: "Syria",
    keywords: "flag"
  },
  {
    no: 1602,
    codes: "1F1F8 1F1FF",
    char: "🇸🇿",
    name: "Swaziland",
    keywords: "flag"
  },
  {
    no: 1603,
    codes: "1F1F9 1F1E6",
    char: "🇹🇦",
    name: "Tristan da Cunha",
    keywords: "flag"
  },
  {
    no: 1604,
    codes: "1F1F9 1F1E8",
    char: "🇹🇨",
    name: "Turks & Caicos Islands",
    keywords: "flag"
  },
  {
    no: 1605,
    codes: "1F1F9 1F1E9",
    char: "🇹🇩",
    name: "Chad",
    keywords: "flag"
  },
  {
    no: 1606,
    codes: "1F1F9 1F1EB",
    char: "🇹🇫",
    name: "French Southern Territories",
    keywords: "flag"
  },
  {
    no: 1607,
    codes: "1F1F9 1F1EC",
    char: "🇹🇬",
    name: "Togo",
    keywords: "flag"
  },
  {
    no: 1608,
    codes: "1F1F9 1F1ED",
    char: "🇹🇭",
    name: "Thailand",
    keywords: "flag"
  },
  {
    no: 1609,
    codes: "1F1F9 1F1EF",
    char: "🇹🇯",
    name: "Tajikistan",
    keywords: "flag"
  },
  {
    no: 1610,
    codes: "1F1F9 1F1F0",
    char: "🇹🇰",
    name: "Tokelau",
    keywords: "flag"
  },
  {
    no: 1611,
    codes: "1F1F9 1F1F1",
    char: "🇹🇱",
    name: "Timor-Leste",
    keywords: "flag"
  },
  {
    no: 1612,
    codes: "1F1F9 1F1F2",
    char: "🇹🇲",
    name: "Turkmenistan",
    keywords: "flag"
  },
  {
    no: 1613,
    codes: "1F1F9 1F1F3",
    char: "🇹🇳",
    name: "Tunisia",
    keywords: "flag"
  },
  {
    no: 1614,
    codes: "1F1F9 1F1F4",
    char: "🇹🇴",
    name: "Tonga",
    keywords: "flag"
  },
  {
    no: 1615,
    codes: "1F1F9 1F1F7",
    char: "🇹🇷",
    name: "Turkey",
    keywords: "flag"
  },
  {
    no: 1616,
    codes: "1F1F9 1F1F9",
    char: "🇹🇹",
    name: "Trinidad & Tobago",
    keywords: "flag"
  },
  {
    no: 1617,
    codes: "1F1F9 1F1FB",
    char: "🇹🇻",
    name: "Tuvalu",
    keywords: "flag"
  },
  {
    no: 1618,
    codes: "1F1F9 1F1FC",
    char: "🇹🇼",
    name: "Taiwan",
    keywords: "flag"
  },
  {
    no: 1619,
    codes: "1F1F9 1F1FF",
    char: "🇹🇿",
    name: "Tanzania",
    keywords: "flag"
  },
  {
    no: 1620,
    codes: "1F1FA 1F1E6",
    char: "🇺🇦",
    name: "Ukraine",
    keywords: "flag"
  },
  {
    no: 1621,
    codes: "1F1FA 1F1EC",
    char: "🇺🇬",
    name: "Uganda",
    keywords: "flag"
  },
  {
    no: 1622,
    codes: "1F1FA 1F1F2",
    char: "🇺🇲",
    name: "U.S. Outlying Islands",
    keywords: "flag"
  },
  {
    no: 1623,
    codes: "1F1FA 1F1F3",
    char: "🇺🇳",
    name: "United Nations",
    keywords: "flag"
  },
  {
    no: 1624,
    codes: "1F1FA 1F1F8",
    char: "🇺🇸",
    name: "United States",
    keywords: "flag"
  },
  {
    no: 1625,
    codes: "1F1FA 1F1FE",
    char: "🇺🇾",
    name: "Uruguay",
    keywords: "flag"
  },
  {
    no: 1626,
    codes: "1F1FA 1F1FF",
    char: "🇺🇿",
    name: "Uzbekistan",
    keywords: "flag"
  },
  {
    no: 1627,
    codes: "1F1FB 1F1E6",
    char: "🇻🇦",
    name: "Vatican City",
    keywords: "flag"
  },
  {
    no: 1628,
    codes: "1F1FB 1F1E8",
    char: "🇻🇨",
    name: "St. Vincent & Grenadines",
    keywords: "flag"
  },
  {
    no: 1629,
    codes: "1F1FB 1F1EA",
    char: "🇻🇪",
    name: "Venezuela",
    keywords: "flag"
  },
  {
    no: 1630,
    codes: "1F1FB 1F1EC",
    char: "🇻🇬",
    name: "British Virgin Islands",
    keywords: "flag"
  },
  {
    no: 1631,
    codes: "1F1FB 1F1EE",
    char: "🇻🇮",
    name: "U.S. Virgin Islands",
    keywords: "flag"
  },
  {
    no: 1632,
    codes: "1F1FB 1F1F3",
    char: "🇻🇳",
    name: "Vietnam",
    keywords: "flag"
  },
  {
    no: 1633,
    codes: "1F1FB 1F1FA",
    char: "🇻🇺",
    name: "Vanuatu",
    keywords: "flag"
  },
  {
    no: 1634,
    codes: "1F1FC 1F1EB",
    char: "🇼🇫",
    name: "Wallis & Futuna",
    keywords: "flag"
  },
  {
    no: 1635,
    codes: "1F1FC 1F1F8",
    char: "🇼🇸",
    name: "Samoa",
    keywords: "flag"
  },
  {
    no: 1636,
    codes: "1F1FD 1F1F0",
    char: "🇽🇰",
    name: "Kosovo",
    keywords: "flag"
  },
  {
    no: 1637,
    codes: "1F1FE 1F1EA",
    char: "🇾🇪",
    name: "Yemen",
    keywords: "flag"
  },
  {
    no: 1638,
    codes: "1F1FE 1F1F9",
    char: "🇾🇹",
    name: "Mayotte",
    keywords: "flag"
  },
  {
    no: 1639,
    codes: "1F1FF 1F1E6",
    char: "🇿🇦",
    name: "South Africa",
    keywords: "flag"
  },
  {
    no: 1640,
    codes: "1F1FF 1F1F2",
    char: "🇿🇲",
    name: "Zambia",
    keywords: "flag"
  },
  {
    no: 1641,
    codes: "1F1FF 1F1FC",
    char: "🇿🇼",
    name: "Zimbabwe",
    keywords: "flag"
  },
  {
    no: 1642,
    codes: "1F3F4 E0067 E0062 E0065 E006E E0067 E007F",
    char: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    name: "England",
    keywords: "flag"
  },
  {
    no: 1643,
    codes: "1F3F4 E0067 E0062 E0073 E0063 E0074 E007F",
    char: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    name: "Scotland",
    keywords: "flag"
  },
  {
    no: 1644,
    codes: "1F3F4 E0067 E0062 E0077 E006C E0073 E007F",
    char: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    name: "Wales",
    keywords: "flag"
  }
];
module.exports = {
  faces
}
