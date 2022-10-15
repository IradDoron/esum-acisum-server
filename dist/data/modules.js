"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModuleDemo = {
    id: 1,
    meta: {
        description: 'This is a demo module',
        title: 'Demo Module',
        thumbnail: 'https://i.ibb.co/0hY4Z3s/3.jpg',
        prerequisites: [],
        nextModules: [],
        goals: ['Learn how to use the techniques'],
    },
    chapters: [
        {
            title: 'Introduction',
            description: 'This is the introduction',
            elements: [
                {
                    type: 'paragraph',
                    children: [],
                    content: 'This is a paragraph',
                },
                {
                    type: 'heading',
                    children: [],
                    content: 'This is a heading',
                },
                {
                    type: 'orderedList',
                    children: [],
                    content: 'This is an ordered list',
                },
                {
                    type: 'code',
                    children: [],
                    content: 'This is a code block',
                },
                {
                    type: 'image',
                    children: [],
                    content: 'This is an image',
                },
            ],
        },
    ],
};
const modules = [
    {
        id: 1,
        meta: {
            description: 'This is a demo module with id 1',
            title: 'Demo Module',
            thumbnail: 'https://i.ibb.co/0hY4Z3s/3.jpg',
            prerequisites: [1, 2, 3, 4, 5],
            nextModules: [6, 7, 8, 9, 10, 11],
            goals: ['Learn how to use the techniques'],
        },
        chapters: [
            {
                title: 'Introduction',
                description: 'This is the introduction',
                elements: [
                    {
                        type: 'paragraph',
                        content: 'This is a paragraph',
                    },
                    {
                        type: 'heading',
                        children: [],
                        content: 'This is a heading',
                    },
                    {
                        type: 'orderedList',
                        children: [],
                        content: 'This is an ordered list',
                    },
                    {
                        type: 'code',
                        children: [],
                        content: 'This is a code block',
                    },
                    {
                        type: 'image',
                        children: [],
                        content: 'This is an image',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        meta: {
            description: 'נכיר ונתרגל את הטכניקה היסודית ביותר לליווי פסנתר',
            title: 'ליווי שורשים ביד שמאל',
            thumbnail: 'https://i.ibb.co/0hY4Z3s/3.jpg',
            prerequisites: [1, 2, 3],
            nextModules: [3],
            goals: [
                'להצליח ללוות אקורדים בטכניקת השורשים',
                'להצליח לנגן מהלכי אקורדים בסולמות מגוונים בליווי שורשים',
            ],
        },
        chapters: [
            {
                title: 'תיאור הטכניקה',
                description: 'הסבר טכני על טכניקת ליווי השורשים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'בטכניקת השורשים ננגן ביד שמאל עם אצבע מספר 5 את צליל השורש של האקורדים.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'תזכורת חברית למספרי האצבעות בשפת הפסנתרנים:',
                    },
                    {
                        type: 'image',
                        children: [],
                        content: 'modulesImages/module_id_2/piano-fingering.png',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'לרוב ננגן צליל אחד כל אקורד, אבל אם אקורד נמשך יותר מתיבה אחת, אז כל תחילת תיבה ננגן שוב את השורש.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'ליווי שורשים ביד שמאל זאת טכניקה טובה למתחילים שעדיין לא מכירים את כל האקורדים, כי מספיק להכיר את הצליל הראשון של כל אקורד כדי ללוות בטכניקה הזאת.',
                    },
                ],
            },
            {
                title: 'הדגמה בסיסית',
                description: 'הדגמה בסיסית של טכניקת ליווי השורשים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'טודו: להוסיף כאן דוגמה על מהלך פשוט',
                    },
                    {
                        type: 'chordilon',
                        content: {
                            modeName: 'FourChordsLoopHardCoded',
                            progressions: [
                                {
                                    groupTitle: 'diatonic-major',
                                    collectionId: 3,
                                    progressionId: 1,
                                    isRootPosition: true,
                                    inversionIndex: -1,
                                },
                                {
                                    groupTitle: 'diatonic-major',
                                    collectionId: 1,
                                    progressionId: 2,
                                    isRootPosition: true,
                                    inversionIndex: -1,
                                },
                            ],
                        },
                        tonic: 'C',
                        scaleType: 'major',
                    },
                    {
                        type: 'video',
                        content: 'https://www.youtube.com/embed/V7m_7MoPzfs',
                    },
                ],
            },
            {
                title: `תרגול בסולם דו מז׳ור`,
                description: 'תרגיל בסולם דו מז׳ור עם טכניקת ליווי השורשים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `טודו: להוסיף מהלכי אקורדים בסולם דו מז׳ור`,
                    },
                ],
            },
            {
                title: 'לנגן ביחד',
                description: 'לנגן ביחד את המהלכים המוצגים בסרטון',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'טודו: להציג תווים של יצירה, והקלטה של הפלייבק',
                    },
                ],
            },
            {
                title: 'מחולל אקורדים',
                description: 'לתרגל את הטכניקה עם מחולל אקורדים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `טודו: לייבא את הקומפוננטה הגלובלית של מחולל המהלכים ההרמוניים. להגדיר שירנדר רק אקורדים מתוך סולם דו מז׳ור.`,
                    },
                ],
            },
            {
                title: 'ליווי אקורדים בסולמות נוספים',
                description: 'לתרגל את הטכניקה עם בסולמות נוספים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `עד כה ניגנו רק אקורדים בסולם דו מז׳ור. עכשיו נרחיב אופקים וננגן את כל שאר האקורדים.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `זאת נשמעת קפיצה גדולה מדי? אז זהו, שלא ממש.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `הרי בטכניקת ליווי השורשים אנחנו מנגנים רק את הצליל הראשון של האקורד, כלומר רק את השורש. זה לא משנה אם זה אקורד מז׳ור, מינור, מוקטן, מוגדל או עם צלילים נוספים. גם האקורד הכי מורכב שידוע לבני האדם בסופו של דבר השורש שלו הוא צליל אחד פשוט שכתוב בשם של האקורד עצמו.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `למשל את כל האקורדים האלו: C, Cm, Cmb5, C7, C7b9#11b13, ננגן באתה צורה בטכניקת השורשים, ננגן את הצליל ״דו״ ביד שמאל.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `אז למעשה ברגע שתוכלו לזהות את צליל השורש של כל האקורדים שכתובים בפניכם, אתם תוכלו ללוות כל שיר שקיים בטכניקת השורשים! אל תמעיטו בערך של שליטה בטכניקה הזאת. זה הבסיס לעוד טכניקות נגינה רבות.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `בשלב הזה אתם לא צריכים לדעת את כל הצלילים של האקורדים, כרגע נסתפק רק בזיהוי צליל השורש ונגינתו על הפסנתר.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `נגנו את מהלך האקורדים הבא בטכניקת השורשים:`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `טודו: להוסיף אקורדים של מהלך עם אקורדים מגוונים, וגם סרטון שלי מלווה אותם בטכניקת השורשים.`,
                    },
                ],
            },
            {
                title: 'לנגן ביחד בסולמות נוספים',
                description: 'לתרגל את הטכניקה עם מחולל אקורדים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `טודו: להציג תווים של יצירה עם הרבה אקורדים מגוונים, לא רק דו מז׳ור, ולהוסיף הסרטון של הביצוע.`,
                    },
                ],
            },
            {
                title: 'להוסיף פדל',
                description: 'לתרגל את הטכניקה עם מחולל אקורדים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `מה עושה פדל הפסנתר? יש כמה סוגים של פדלים, אבל הכי שימושי ונפוץ הוא פדל ה- sustain.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `אם יש לכם פדל אחד, הוא כנראה ססטיין (sustain).`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `לחיצה על הפדל הזה מבטלת את הפסקת הצלילים. כלומר אם ננגן על קליד כלשהו, תוך כדי שאנחנו לוחצים על הפדל, גם כשנרים את האצבע מהפדל אז הצליל ימשיך לנגן. הצליל לא יפסיק עד שהוא ידעך לאיטו.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `הכי טוב להרגיש את זה בעצמכם, אז נסו לנגן על צלילים אקראיים פעם אחת עם פדל, ופעם נוספת בלי פדל, ושימו לב להבדל.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `אבל למה צריך פדל? הפדל הוא החבר הטוב של הפסנתרן. הוא מאפשר לנו לעבור בין אקורדים בלי ״הפסקות של שקט״ ביניהם. בצורה רציפה. `,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `הקואורדינציה של שימוש בפדל היא קריטית לנגינה וכדאי להתחיל להתרגל אליה כבר מההתחלה. `,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `תשתמשו בפדל באופן הבא. `,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `לפני האקורד הראשון, כלומר לפני שאתם מתחילים לנגן, תלחצו על הפדל. `,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `כל עוד הפדל לחוץ, וניגנתם את האקורד הנוכחי, אתם יכולים להרים את היד בלי לאבד את הצלילים, הם ימשיכו לנגן בזכות כך שהפדל לחוץ. בזמן הזה אתם מזיזים את היד לקראת הצלילים של האקורד הבא, וברגע שאתם מנגנים את האקורד החדש, באותו רגע ממש, אתם מרימים את הפדל (כדי ״לנקות״ את הצלילים של האקורד הקודם), ואז אתם לוחצים עליו שוב כדי להשאיר את הצלילים של האקורד החדש.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `אם נסכם את השלבים:`,
                    },
                    {
                        type: 'orderedList',
                        children: [
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `לפני תחילת הנגינה – ללחוץ על הפדל.`,
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `לנגן את האקורד הראשון, ועדיין להשאיר את הפדל.`,
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `לקראת האקורד הבא, להרים את היד ולמקם אותה מעל הצלילים של האקורד החדש – אתם עדיין לוחצים על הפדל בשלב הזה.`,
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `ברגע שצריך לנגן את האקורד החדש, אתם לוחצים על הצלילים הנחוצים ובו זמנית מרימים את הפדל מהר ולוחצים עליו שוב.`,
                                    },
                                ],
                                content: '',
                            },
                        ],
                        content: '',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `טודו: להוסיף סרטון שמדגים שימוש בפדל.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `אתן לכם פה עוד כמה תרגילים של מעבר בין אקורדים, נגנו אותם בליווי שורשים, ותשתמשו בפדל.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `נגנו אותם בקצב שלכם, ותתרכזו בקואורדינציה של השימוש בפדל. שימו לב שאין לכם הפסקות בין מעברים האקורדים. או במילים אחרות, תקפידו שהמעברים בין האקורדים יהיו חלקים ככל הניתן.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `אחרי שאתם מרגישים בנוח עם הנגינה בפדל תמשיכו הלאה.`,
                    },
                ],
            },
            {
                title: 'מחולל אקורדים 2',
                description: 'עוד תרגול עם מחולל האקורדים',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `עכשיו נתרגל את טכניקת השורשים בצורה מאתגרת יותר.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `שמתי את ממשק מחולל האקורדים על מצב של אקורדים משולשים רנדומליים. תתאמנו היטב בשלב הזה ותרגישו בנוח לנגן כל אקורד שנופל לכם בידיים.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `תקפידו להשתמש בפדל בצורה נכונה, ולעברו לפי הקצב בין האקורדים. `,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `מי שרוצה אתגר נוסף, אז תגבירו את הטמפו.`,
                    },
                ],
            },
            {
                title: 'סיכום',
                description: 'סיכום כל הפרק',
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `אלו הנקודות החשובות שעסקנו בהן במודול הזה:`,
                    },
                    {
                        type: 'unorderedList',
                        children: [
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `טכניקת השורשים זו טכניקת ליווי לפסנתר ביד שמאל, והיא הטכניקה הכי בסיסית שיש. `,
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `בטכניקה זו מנגנים עם אצבע מספר 5 (הזרת) את הצליל הראשון של כל אקורד – הלוא הוא צליל השורש.`,
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `ממליץ לנגן את השורש כל תחילת תיבה, וכמובן כל פעם שמתחלף אקורד. הכוונה היא שאם יש אקורד שנמשך יותר מתיבה אחת, אז תנגנו את הצליל שוב כל תיבה חדשה עד שמגיע אקורד חדש.`,
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: `בזמן הליווי בטכניקה הזאת נשתמש בפדל, וכל אקורד חדש שמנגנים באותו רגע עוזבים את הפדל ומהר לוחצים עליו שוב. ככה המעבר בין הצלילים יהיה חלק ונוכל להרים את היד מהפסנתר ולזוז לעבר האקורד הבא בלי לאבד את הצלילים ברקע.`,
                                    },
                                ],
                                content: '',
                            },
                        ],
                        content: '',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        meta: {
            description: 'נלמד איך לנגן ליווי בלוקים ביד שמאל',
            title: 'ליווי בלוקים ביד שמאל',
            thumbnail: 'https://i.ibb.co/0hY4Z3s/3.jpg',
            prerequisites: [2],
            nextModules: [4],
            goals: ['ללוות אקורדים ביד שמאל בטכניקת הבלוקים.'],
        },
        chapters: [
            {
                title: 'תיאור הטכניקה',
                description: `הסבר כללי על הטכניקה`,
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: `ליווי בלוקים ביד שמאל בצורה הכי פשוטה שלו מבוצע על ידי נגינת 2-4 צלילים של האקורד בבת אחת. מכאן הכינוי ״בלוק״. מנגנים מספר צלילים כבלוק אחד. כיחידה אחת שלמה.`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `למה מנגנים כאן דווקא 2-4 צלילים?`,
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: `יש לנו ביד שמאל 5 אצבעות, אז לנגן 5 צלילים לרוב יהיה יותר מדי. לנגן צליל אחד זה לא ממש ״בלוק״, אז באופן טבעי כמות הצלילים הנכונה היא בין 2 ל- 4 צלילים.`,
                    },
                ],
            },
            {
                title: 'הכנה תיאורטית',
                description: `הכנה תיאורטית לטכניקה`,
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'כדי ללוות בטכניקת הבלוקים ביד שמאל חשוב להכיר את כל צלילי האקורד שרוצים ללוות.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'אם נכיר היטב את צלילי האקורדים, נוכל לבחור אילו צלילים אנחנו רוצים לנגן, ועל אילו צלילים נוותר. לרוב בבלוקים ביד שמאל אנחנו לא ננגן את כל צלילי האקורד כל פעם, וצריך להיות מסוגלים לקבל החלטה מה לנגן ומה לא לנגן.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'גם אם אתם עדיין לא מכירים את הצלילים של כל האקורדים, זה בסדר ואתם עדיין יכולים להתקדם במודול הזה. אמנם זה ידרוש ממכם לפני כל אקורד שאתם מנגנים, לחשב את הצלילים של כל אקורד שאתם רוצים לנגן.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'מה שכן חשוב לדעת בשביל להצליח להפיק תועלת מכאן, זה לדעת לבנות לפחות את כל האקורדים המשולשים. לא חייבים מהר, מהירות החישוב זה משהו שנעבוד עליו במודול הזה, אם אתם מצליחים לחשב בקצב שלכם ולהגיע לצלילים הנכונים אתם תסתדרו מצוין כאן.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'אפשר לחשוב על זה ככה, המודול הזה יכול לשמש כחיזוק הידע התאורטי בנושא של בניית אקורדים. אין יותר מדי אקורדים בעולם, ואם אתם כל פעם תבצעו את אותם חישובים, ותבנו את אותם האקורדים שוב, ושוב, אתם מתישהו תזכרו אותם בעל פה.',
                    },
                ],
            },
            {
                title: 'מבוא לתבניות בלוקים',
                description: `מבוא לתבניות בלוקים`,
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'יש כמה תבניות לטכניקת הבלוקים וחשוב לי שתזכרו שבזמן ליווי אפשר ורצוי לגוון בין תבניות שונות. זה נשמע טוב לשנות תבניות פה ושם ולא להינעל על תבנית אחת.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'למרות זאת, לשם התרגול כאשר אתם לומדים תבנית חדשה, תנגנו תרגילים רק איתה. אחרי שתרגישו איתה בנוח, נסו לשלב בתרגילים את התבנית הזאת וגם תבניות נוספות שלמדתם.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'איך בדיוק נדע מתי לנגן תבנית מסוימת ומתי תבנית אחרת?',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'כלל האצבע הוא ככל שאתם מנגנים יותר נמוך בפסנתר, אז תנגנו תבנית עם פחות צלילים, ועם מרווחים יותר גדולים בין צלילי המרווח. אם מה שהסברתי כאן לא ברור כל כך אז שזה לא ידאיג אתכם, זה יישמע יותר הגיוני כשנראה דוגמאות.',
                    },
                ],
            },
            {
                title: 'תבניות לבלוקים של אקורדים משולשים',
                description: `תבניות לבלוקים של אקורדים משולשים`,
                elements: [
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'תזכורת מהירה:',
                    },
                    {
                        type: 'unorderedList',
                        children: [
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'אקורדים משולשים אלו אקורדים הבנויים משלושה צלילים.',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'קיימים 4 סוגי אקורדים משולשים: מז׳ור, מינור, מוקטן ומוגדל.',
                                    },
                                ],
                                content: '',
                            },
                        ],
                        content: '',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'בינתיים נעבוד על ליווי אקורדים משולשים בלבד.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'בואו נמצא את כל התבניות לבלוקים של אקורדים משולשים!',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'אז לאקורדים משולשים יש לנו 6 תבניות (אני לא מדבר כרגע על היפוכי אקורדים).',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'בכל התבניות ננגן את השורש, ומעליו נוסיף עוד צלילים. אפשר להוסיף צליל אחד, אפשר להוסיף שניים, ואשפר להוסיף שלושה (כך נקבל בלוקים בני 2 עד 4 צלילים).',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'כדי לדבר על תבניות לבלוקים יהיה נוח לתת מספרים לכל אחד מצלילי האקורד.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'נמספר את הצלילים באופן הבא:',
                    },
                    {
                        type: 'unorderedList',
                        content: '',
                        children: [
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'שורש – 1',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'טרצה – 2',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'קווינטה – 3',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'אוקטבה – 4',
                                    },
                                ],
                                content: '',
                            },
                        ],
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'מי שנוח לו לחשוב על מספרים, תלמדו את התבניות לפי המספרים. מי שמעדיף לעבוד עם שמות המרווחים, לכו על זה. תגיעו לאותה תוצאה.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'עכשיו אפשר לרשום בקלות את כל התבניות האפשריות:',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'טודו: להוסיף את תבלה 1',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'חלק מהתבניות האלו שימושיות יותר וחלק פחות, אבל בסופו של יום חשוב לי שתדעו מה האפשרויות, ועם הזמן תפתחו את החושים המוזיקליים שלכם ותוכלו להחליט באיזו תבנית להשתמש ומתי. אחרי כמה זמן זה הופך לתהליך קבלת החלטות לא לגמרי מודע. האוזן שלכם תכווין אתכם.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'לשם הנוחות אפשר להוריד את התבניות שפחות שימושיות, ואז נישאר עם טבלה מצומצמת יותר:',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'טודו: להוסיף את תבלה 2',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'התבניות שירדו כאן לא עשו משהו רע, פשוט הן לא יעילות לליווי כמו האחרות. אני כן אגיד כמה מילות פרידה מהתבניות שירדו מהטבלה:',
                    },
                    {
                        type: 'unorderedList',
                        content: '',
                        children: [
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: '״שורש + טרצה״ – לנגן שורש וטרצה זה מרווח קטן מדי ולרוב לא נותן סאונד פסנתר עשיר.',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: '״שורש + טרצה + אוקטבה״ – התבנית הזאת לא נשמעת כל כך מאוזנת. המרווח בין הטרצה לאוקטבה נשמע לא ממש טוב לטעמי רוב הזמן.',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: '״שורש + טרצה + קווינטה + אוקטבה״ – למען האמת זאת תבנית שימושית אבל קצת יותר מאתגרת. אנחנו נחזור אליה בהמשך.',
                                    },
                                ],
                                content: '',
                            },
                        ],
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'עד כאן התאוריה מאחורי טכניקת ליווי בלוקים ביד שמאל. עכשיו נראה דוגמאות וניישם את הטכניקה בעצמנו.',
                    },
                    {
                        type: 'paragraph',
                        children: [],
                        content: 'רק עוד משפט אחד לפני שממשיכים, אני אעטוף את עיקרי הדברים שדיברנו עליהם עד כה:',
                    },
                    {
                        type: 'unorderedList',
                        content: '',
                        children: [
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'בלוק זה כינוי לנגינת מספר צלילים בבת אחת.',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'אנחנו כרגע לומדים תבניות בלוקים ליד שמאל לאקורדים משולשים בלבד ובלי היפוכים.',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'יש 7 תבניות של בלוקים אבל נתמקד רק ב- 4, ונעבור על עליהן אחת אחרי השנייה.',
                                    },
                                ],
                                content: '',
                            },
                            {
                                type: 'listItem',
                                children: [
                                    {
                                        type: 'paragraph',
                                        children: [],
                                        content: 'תזכרו שבזמן נגינה (למעט תרגולים) לרוב נרצה לגוון בין תבניות שונות. לא להישאר עם תבנית אחת בלבד.',
                                    },
                                ],
                                content: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
exports.default = modules;
