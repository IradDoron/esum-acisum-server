"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModuleDemo = {
    id: 1,
    meta: {
        description: 'This is a demo module',
        title: 'Demo Module',
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
                    type: 'list',
                    children: [],
                    content: 'This is a list',
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
            description: 'This is a demo module',
            title: 'Demo Module',
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
                        children: [],
                        content: 'This is a paragraph',
                    },
                    {
                        type: 'heading',
                        children: [],
                        content: 'This is a heading',
                    },
                    {
                        type: 'list',
                        children: [],
                        content: 'This is a list',
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
            prerequisites: [1],
            nextModules: [6, 7, 8, 9, 10, 11],
            goals: [
                'להצליח ללוות אקורדים בטכניקת השורשים',
                'להצליח לנגן מהלכי אקורדים בסולמות מגוונים בליווי שורשים',
            ],
        },
        chapters: [
            {
                title: 'תיאור הטכניקה',
                description: 'הסבר טכני על טכניקתליווי השורשים',
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
                        content: 'data/modulesAssets/module_2/piano-fingering.png',
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
        ],
    },
];
exports.default = modules;
