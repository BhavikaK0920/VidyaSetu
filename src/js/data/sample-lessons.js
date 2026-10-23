// VidyaSetu Core Educational Curriculum & Multilingual Sample Lessons
// Covers ALL Classes 1 through 8 across Mathematics, Science, EVS, English, and Social Studies
// Richly localized with village-relevant contexts across Kannada, Hindi, Telugu, Tamil, Marathi, Bengali, Malayalam, and English

export const sampleLessons = [
  {
    "id": "lesson-eng-c1",
    "grade_level": 1,
    "subject_id": "eng",
    "subject_name": "English",
    "subject_code": "ENG",
    "title": "Village Alphabet: Letters A to E with Common Objects",
    "slug": "village-alphabet-a-to-e",
    "summary": "Recognize letters A, B, C, D, E using everyday sights in an Indian village.",
    "estimated_minutes": 10,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#3B82F6",
    "sections": [
      {
        "id": "sec-1",
        "title": "Letters A, B, C, D, E",
        "type": "concept",
        "read_aloud": "A for Axe, B for Bullock cart, C for Cow, D for Drum, E for Earth.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Everyday Village Alphabet</h4>\n            <ul style=\"list-style:none; padding:0; font-size:18px; line-height:2;\">\n              <li>🪓 <strong>A</strong> is for <strong>Axe</strong> (used by farmers)</li>\n              <li>🐂 <strong>B</strong> is for <strong>Bullock Cart</strong></li>\n              <li>🐄 <strong>C</strong> is for <strong>Cow</strong> giving fresh milk</li>\n              <li>🥁 <strong>D</strong> is for <strong>Drum</strong> at festival time</li>\n              <li>🌱 <strong>E</strong> is for <strong>Earth</strong> where plants grow</li>\n            </ul>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Letter to the Word",
      "instructions": "Click the letter, then match it to the word.",
      "pairs": [
        {
          "id": "p1",
          "left": "A",
          "right": "Axe"
        },
        {
          "id": "p2",
          "left": "B",
          "right": "Bullock"
        },
        {
          "id": "p3",
          "left": "C",
          "right": "Cow"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which letter does the word \"Cow\" begin with?",
        "options": [
          {
            "id": "opt1",
            "text": "B",
            "is_correct": false
          },
          {
            "id": "opt2",
            "text": "C",
            "is_correct": true
          },
          {
            "id": "opt3",
            "text": "D",
            "is_correct": false
          }
        ],
        "hint": "Say \"C-O-W\".",
        "explanation": "Correct! C is for Cow."
      }
    ]
  },
  {
    "id": "lesson-math-c1",
    "grade_level": 1,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Fun Counting 1 to 10 with Tamarind Seeds & Marbles",
    "slug": "counting-1-to-10-seeds-marbles",
    "summary": "Learn to recognize and count numbers from 1 to 10 using shiny tamarind seeds and colorful marbles.",
    "estimated_minutes": 10,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "Counting 1 to 5 with Shiny Tamarind Seeds",
        "type": "concept",
        "read_aloud": "One, two, three, four, five! Count each seed slowly by placing your finger on it.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Count Along with Seeds</h4>\n            <p>Gather 5 smooth tamarind seeds from under the village tree. Let us count them one by one:</p>\n            <div style=\"display:flex; justify-content:center; gap:16px; margin:20px 0; font-size:32px;\">\n              <span title=\"1\">🟤 (1)</span>\n              <span title=\"2\">🟤 (2)</span>\n              <span title=\"3\">🟤 (3)</span>\n              <span title=\"4\">🟤 (4)</span>\n              <span title=\"5\">🟤 (5)</span>\n            </div>\n            <p><strong>Remember:</strong> Each number is one more than the number before it!</p>\n          </div>\n        "
      },
      {
        "id": "sec-2",
        "title": "Counting 6 to 10 with Bright Marbles",
        "type": "worked_example",
        "read_aloud": "Six, seven, eight, nine, ten! When you have ten fingers open, that is the number ten.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Reach the Magic Number 10!</h4>\n            <p>Hold up both your hands. Five fingers on your left hand, and five on your right hand.</p>\n            <p>5 + 5 = <strong>10 fingers in total!</strong></p>\n            <div class=\"feedback-banner success\" style=\"margin:16px 0;\">\n              <span>💡 <strong>Count aloud:</strong> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!</span>\n            </div>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Number to the Object Count",
      "instructions": "Click the number, then click the matching set of objects.",
      "pairs": [
        {
          "id": "p1",
          "left": "3",
          "right": "3 Sweet Mangoes 🥭🥭🥭"
        },
        {
          "id": "p2",
          "left": "5",
          "right": "5 Green Parrots 🦜🦜🦜🦜🦜"
        },
        {
          "id": "p3",
          "left": "7",
          "right": "7 Bright Flowers 🌸🌸🌸🌸🌸🌸🌸"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "If you have 4 tamarind seeds and find 1 more, how many do you have now?",
        "options": [
          {
            "id": "opt1",
            "text": "3 seeds",
            "is_correct": false
          },
          {
            "id": "opt2",
            "text": "5 seeds",
            "is_correct": true
          },
          {
            "id": "opt3",
            "text": "6 seeds",
            "is_correct": false
          }
        ],
        "hint": "Count after four: 1, 2, 3, 4...",
        "explanation": "Correct! 4 and 1 more makes 5!"
      },
      {
        "id": "q2",
        "prompt": "How many fingers do you have on both hands combined?",
        "options": [
          {
            "id": "opt4",
            "text": "5",
            "is_correct": false
          },
          {
            "id": "opt5",
            "text": "10",
            "is_correct": true
          },
          {
            "id": "opt6",
            "text": "8",
            "is_correct": false
          }
        ],
        "hint": "5 on the left + 5 on the right.",
        "explanation": "Shabash! 5 + 5 = 10 fingers."
      }
    ],
    "translations": {
      "kn": {
        "title": "ಹುಣಸೆ ಬೀಜಗಳೊಂದಿಗೆ ೧ ರಿಂದ ೧೦ ರವರೆಗೆ ಮೋಜಿನ ಎಣಿಕೆ",
        "summary": "ಮಕ್ಕಳು ೧ ರಿಂದ ೧೦ ರವರೆಗಿನ ಸಂಖ್ಯೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಗುರುತಿಸಿ ಎಣಿಸಲು ಕಲಿಯುವ ಪಾಠ.",
        "sections": [
          {
            "id": "sec-1",
            "title": "ಹುಣಸೆ ಬೀಜಗಳೊಂದಿಗೆ ೧ ರಿಂದ ೫ ರವರೆಗೆ ಎಣಿಕೆ",
            "read_aloud": "ಒಂದು, ಎರಡು, ಮೂರು, ನಾಲ್ಕು, ಐದು! ಪ್ರತಿಯೊಂದು ಬೀಜದ ಮೇಲೆ ಬೆರಳಿಟ್ಟು ಎಣಿಸಿ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>ಬೀಜಗಳೊಂದಿಗೆ ಎಣಿಸೋಣ</h4>\n                <p>ಮರದ ಕೆಳಗಿನ ೫ ಮೃದುವಾದ ಹುಣಸೆ ಬೀಜಗಳನ್ನು ಒಟ್ಟಿಗೆ ಇಟ್ಟು ಒಂದೊಂದಾಗಿ ಎಣಿಸಿ:</p>\n                <div style=\"display:flex; justify-content:center; gap:16px; margin:20px 0; font-size:32px;\">\n                  <span>🟤 (೧)</span>\n                  <span>🟤 (೨)</span>\n                  <span>🟤 (೩)</span>\n                  <span>🟤 (೪)</span>\n                  <span>🟤 (೫)</span>\n                </div>\n              </div>\n            "
          }
        ]
      },
      "hi": {
        "title": "इमली के बीजों से १ से १० तक गिनती सीखें",
        "summary": "इमली के बीज और कंचों की मदद से १ से १० तक मज़ेदार गिनती सीखें।",
        "sections": [
          {
            "id": "sec-1",
            "title": "बीजों से १ से ५ तक गिनती",
            "read_aloud": "एक, दो, तीन, चार, पांच! हर बीज पर उंगली रखकर गिनें।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>गिनती शुरू करें</h4>\n                <p>पेड़ के नीचे से 5 चिकने बीज इकट्ठा करें और गिनें:</p>\n                <div style=\"display:flex; justify-content:center; gap:16px; margin:20px 0; font-size:32px;\">\n                  <span>🟤 (१)</span>\n                  <span>🟤 (२)</span>\n                  <span>🟤 (३)</span>\n                  <span>🟤 (४)</span>\n                  <span>🟤 (५)</span>\n                </div>\n              </div>\n            "
          }
        ]
      }
    }
  },
  {
    "id": "lesson-evs-c2",
    "grade_level": 2,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "Our Village Living World: Farm Friends & Wild Birds",
    "slug": "village-living-world-birds-animals",
    "summary": "Observe the domestic animals and wild birds living harmoniously around our rural homes.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "Farm Animals and Their Shelter",
        "type": "concept",
        "read_aloud": "Cows live in a cowshed, goats in a pen, and hens roost in a coop.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Who Lives Where?</h4>\n            <p>Animals give us food, wool, and help in ploughing fields. Humans build cozy shelters for them:</p>\n            <ul>\n              <li><strong>Cow:</strong> Shed (Gaushala)</li>\n              <li><strong>Horse:</strong> Stable</li>\n              <li><strong>Hen:</strong> Coop</li>\n              <li><strong>Bird:</strong> Nest in Banyan tree</li>\n            </ul>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Creature to its Shelter",
      "instructions": "Click the animal, then click its home.",
      "pairs": [
        {
          "id": "p1",
          "left": "Cow",
          "right": "Shed"
        },
        {
          "id": "p2",
          "left": "Hen",
          "right": "Coop"
        },
        {
          "id": "p3",
          "left": "Sparrow",
          "right": "Nest"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Where does a mother hen lay her eggs safely?",
        "options": [
          {
            "id": "opt1",
            "text": "In a coop or basket with straw",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "In deep river water",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Underground in a rabbit hole",
            "is_correct": false
          }
        ],
        "hint": "Think of where farmers keep hens warm.",
        "explanation": "Correct! Hens rest and lay eggs safely in a coop."
      }
    ]
  },
  {
    "id": "lesson-math-c2",
    "grade_level": 2,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Counting in Bundles of Tens with Neem Twigs",
    "slug": "bundles-of-tens-neem-twigs",
    "summary": "Discover how 10 ones make 1 ten, and 2 tens make twenty using bundles of neem twigs.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "Making a Bundle of Ten",
        "type": "concept",
        "read_aloud": "Tie ten twigs with a straw string. Now you have one bundle of ten!",
        "content": "\n          <div class=\"learning-card\">\n            <h4>From Loose Twigs to Tens</h4>\n            <p>10 loose twigs tied together = <strong>1 Ten (10)</strong>.</p>\n            <p>2 bundles of ten = <strong>2 Tens (20)</strong>.</p>\n            <p>3 bundles and 4 loose twigs = 30 + 4 = <strong>34!</strong></p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Bundles to the Number",
      "instructions": "Match the description of bundles to its number.",
      "pairs": [
        {
          "id": "p1",
          "left": "2 Bundles of 10",
          "right": "20"
        },
        {
          "id": "p2",
          "left": "3 Bundles and 5 singles",
          "right": "35"
        },
        {
          "id": "p3",
          "left": "5 Bundles of 10",
          "right": "50"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "How many tens are there in the number 40?",
        "options": [
          {
            "id": "opt1",
            "text": "4 tens",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "2 tens",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "40 tens",
            "is_correct": false
          }
        ],
        "hint": "4 bundles of ten = 40.",
        "explanation": "Correct! 40 has 4 tens."
      }
    ]
  },
  {
    "id": "lesson-eng-401",
    "grade_level": 3,
    "subject_id": "eng",
    "subject_name": "English & Vocabulary",
    "subject_code": "ENG",
    "title": "My Village Animals and Their Sounds",
    "slug": "village-animals-sounds",
    "summary": "Learn English words and pronunciations for domestic and wild animals in our surroundings.",
    "estimated_minutes": 10,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#D97706",
    "sections": [
      {
        "id": "sec-1",
        "title": "Farm Animals",
        "type": "concept",
        "read_aloud": "The cow says Moo. The sheep says Baa. The rooster says Cock-a-doodle-doo.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Common Village Friends</h4>\n            <ul style=\"list-style:none; padding:0; display:grid; gap:12px; margin-top:12px;\">\n              <li style=\"padding:10px; background:#FEF3C7; border-radius:8px;\">🐄 <strong>Cow:</strong> Says <em>Moo</em>. Gives sweet milk.</li>\n              <li style=\"padding:10px; background:#DCFCE7; border-radius:8px;\">🐐 <strong>Goat:</strong> Says <em>Baa / Bleat</em>. Loves tender green leaves.</li>\n              <li style=\"padding:10px; background:#E0F2FE; border-radius:8px;\">🐓 <strong>Rooster:</strong> Crows at dawn to wake the village!</li>\n            </ul>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Animal to its Sound",
      "instructions": "Click the animal, then click the sound it makes in English.",
      "pairs": [
        {
          "id": "a1",
          "left": "Cow 🐄",
          "right": "Moo"
        },
        {
          "id": "a2",
          "left": "Goat 🐐",
          "right": "Baa / Bleat"
        },
        {
          "id": "a3",
          "left": "Rooster 🐓",
          "right": "Cock-a-doodle-doo"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which animal crows early in the morning to wake up the village?",
        "options": [
          {
            "id": "opt1",
            "text": "Rooster (Cock)",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Frog",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Elephant",
            "is_correct": false
          },
          {
            "id": "opt4",
            "text": "Fish",
            "is_correct": false
          }
        ],
        "hint": "It has colorful feathers and says \"Cock-a-doodle-doo\".",
        "explanation": "Great job! The rooster wakes everyone at sunrise."
      }
    ],
    "translations": {
      "kn": {
        "title": "ನಮ್ಮ ಹಳ್ಳಿಯ ಪ್ರಾಣಿಗಳು ಮತ್ತು ಅವುಗಳ ಇಂಗ್ಲಿಷ್ ಶಬ್ದಗಳು",
        "summary": "ಆಕಳು, ಮೇಕೆ, ಕೋಳಿ ಮೊದಲಾದ ಪ್ರಾಣಿಗಳ ಇಂಗ್ಲಿಷ್ ಹೆಸರುಗಳು ಮತ್ತು ಅವುಗಳ ಧ್ವನಿಗಳು.",
        "sections": [
          {
            "id": "sec-1",
            "title": "ಹಳ್ಳಿಯ ನಮ್ಮ ಪ್ರಾಣಿ ಸ್ನೇಹಿತರು",
            "read_aloud": "ಹಸುವು ಮೂ ಎಂದು ಅಂಬಾ ಎನ್ನುತ್ತದೆ. ಮೇಕೆ ಬ್ಯಾ ಎಂದು ಕೂಗುತ್ತದೆ. ಹುಂಜ ಮುಂಜಾನೆ ಕೂಗಿ ಹಳ್ಳಿಯನ್ನು ಎಬ್ಬಿಸುತ್ತದೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>ಸಾಕು ಪ್ರಾಣಿಗಳು ಮತ್ತು ಅವುಗಳ ಧ್ವನಿಗಳು</h4>\n                <ul style=\"list-style:none; padding:0; display:grid; gap:12px; margin-top:12px;\">\n                  <li style=\"padding:10px; background:#FEF3C7; border-radius:8px;\">🐄 <strong>Cow (ಹಸು):</strong> Says <em>Moo</em>. ಹಾಲು ಕೊಡುತ್ತದೆ.</li>\n                  <li style=\"padding:10px; background:#DCFCE7; border-radius:8px;\">🐐 <strong>Goat (ಮೇಕೆ):</strong> Says <em>Baa</em>. ಹಸಿರೆಲೆ ತಿನ್ನುತ್ತದೆ.</li>\n                  <li style=\"padding:10px; background:#E0F2FE; border-radius:8px;\">🐓 <strong>Rooster (ಹುಂಜ):</strong> ಮುಂಜಾನೆ ಕೂಗಿ ಎಲ್ಲರನ್ನು ಎಬ್ಬಿಸುತ್ತದೆ!</li>\n                </ul>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "ಪ್ರಾಣಿ ಮತ್ತು ಅದರ ಇಂಗ್ಲಿಷ್ ಶಬ್ದವನ್ನು ಹೊಂದಿಸಿ",
          "instructions": "ಪ್ರಾಣಿಯ ಹೆಸರನ್ನು ಅದರ ಧ್ವನಿಗೆ ಹೊಂದಿಸಿ.",
          "pairs": [
            {
              "id": "a1",
              "left": "Cow (ಹಸು) 🐄",
              "right": "Moo"
            },
            {
              "id": "a2",
              "left": "Goat (ಮೇಕೆ) 🐐",
              "right": "Baa"
            },
            {
              "id": "a3",
              "left": "Rooster (ಹುಂಜ) 🐓",
              "right": "Cock-a-doodle-doo"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "ಮುಂಜಾನೆ ಕೂಗಿ ಹಳ್ಳಿಯ ಜನರನ್ನು ಎಬ್ಬಿಸುವ ಪಕ್ಷಿ/ಪ್ರಾಣಿ ಯಾವುದು?",
            "options": [
              {
                "id": "opt1",
                "text": "Rooster (ಹುಂಜ)",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "Frog (ಕಪ್ಪೆ)",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "Elephant (ಆನೆ)",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "Fish (ಮೀನು)",
                "is_correct": false
              }
            ],
            "hint": "ಬೆಳಗಿನ ಜಾವ Cock-a-doodle-doo ಎಂದು ಕೂಗುತ್ತದೆ.",
            "explanation": "ಸರಿಯಾದ ಉತ್ತರ! ಹುಂಜ ಸೂರ್ಯೋದಯದ ಸಮಯದಲ್ಲಿ ಕೂಗುತ್ತದೆ."
          }
        ]
      },
      "hi": {
        "title": "हमारे गाँव के पशु और उनकी आवाज़ें",
        "summary": "गाय, बकरी, मुर्गा और अन्य जानवरों के अंग्रेजी नाम और उच्चारण सीखें।",
        "sections": [
          {
            "id": "sec-1",
            "title": "गाँव के प्यारे पालतू पशु",
            "read_aloud": "गाय को अंग्रेजी में काउ कहते हैं। बकरी को गोट और मुर्गे को रूस्टर कहते हैं।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>पशु और उनकी अंग्रेजी बोलियाँ</h4>\n                <ul style=\"list-style:none; padding:0; display:grid; gap:12px; margin-top:12px;\">\n                  <li style=\"padding:10px; background:#FEF3C7; border-radius:8px;\">🐄 <strong>Cow (गाय):</strong> Says <em>Moo</em>.</li>\n                  <li style=\"padding:10px; background:#DCFCE7; border-radius:8px;\">🐐 <strong>Goat (बकरी):</strong> Says <em>Baa</em>.</li>\n                  <li style=\"padding:10px; background:#E0F2FE; border-radius:8px;\">🐓 <strong>Rooster (मुर्गा):</strong> भोर में बाँग देता है!</li>\n                </ul>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "पशु को उसकी आवाज़ से मिलाएँ",
          "instructions": "पशु पर क्लिक करें, फिर उसकी आवाज़ पर।",
          "pairs": [
            {
              "id": "a1",
              "left": "Cow 🐄",
              "right": "Moo"
            },
            {
              "id": "a2",
              "left": "Goat 🐐",
              "right": "Baa"
            },
            {
              "id": "a3",
              "left": "Rooster 🐓",
              "right": "Cock-a-doodle-doo"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "सुबह सबसे पहले बाँग देकर गाँव को कौन जगाता है?",
            "options": [
              {
                "id": "opt1",
                "text": "Rooster (मुर्गा)",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "Frog (मेंढक)",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "Elephant (हाथी)",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "Fish (मछली)",
                "is_correct": false
              }
            ],
            "hint": "यह रंग-बिरंगे पंखों वाला पक्षी है।",
            "explanation": "शाबाश! मुर्गा सुबह सवेरे बाँग देता है।"
          }
        ]
      }
    }
  },
  {
    "id": "lesson-math-c3",
    "grade_level": 3,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Buying Vegetables at the Weekly Haat (Bazaar)",
    "slug": "weekly-haat-money-addition",
    "summary": "Practice addition, subtraction, and making change using Indian Rupee currency coins and notes.",
    "estimated_minutes": 15,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "At the Vegetable Stall",
        "type": "concept",
        "read_aloud": "Potatoes cost 20 rupees per kilogram. Tomatoes cost 30 rupees. How much for both?",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Addition at the Haat</h4>\n            <p>Suppose you carry a <strong>₹50 note</strong> to the village weekly market (Haat):</p>\n            <ul>\n              <li>1 kg Potatoes = ₹20</li>\n              <li>1 kg Fresh Spinach = ₹15</li>\n              <li>Total Cost = ₹20 + ₹15 = <strong>₹35</strong></li>\n            </ul>\n            <p>Change returned to you: ₹50 − ₹35 = <strong>₹15</strong>.</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Purchase to Total Cost",
      "instructions": "Calculate the total cost and match it.",
      "pairs": [
        {
          "id": "p1",
          "left": "₹10 Brinjal + ₹20 Onion",
          "right": "₹30"
        },
        {
          "id": "p2",
          "left": "₹25 Rice + ₹25 Dal",
          "right": "₹50"
        },
        {
          "id": "p3",
          "left": "₹40 Oil + ₹10 Salt",
          "right": "₹50"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "You give a ₹50 note to buy ₹30 of gourds. What is your balance change?",
        "options": [
          {
            "id": "opt1",
            "text": "₹20",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "₹15",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "₹10",
            "is_correct": false
          }
        ],
        "hint": "Calculate 50 minus 30.",
        "explanation": "Correct! 50 − 30 = 20 rupees change."
      }
    ]
  },
  {
    "id": "lesson-evs-201",
    "grade_level": 4,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "The Journey of Water: Our Village Tank to Rain",
    "slug": "journey-of-water-village-tank",
    "summary": "Discover how water evaporates from lakes, forms clouds, and returns as monsoon rain.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "Where Does Summer Water Go?",
        "type": "concept",
        "read_aloud": "Under the hot sun, liquid water warms up and turns into invisible vapor. This is called evaporation.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>1. Evaporation: The Sun at Work</h4>\n            <p>During hot summer months in our village, the water level in the village pond goes down. Where does that water go?</p>\n            <p>The heat of the sun turns surface water into invisible water vapor that rises high into the sky. This process is called <strong>Evaporation</strong>.</p>\n          </div>\n        "
      },
      {
        "id": "sec-2",
        "title": "Clouds & Rain Drops",
        "type": "concept",
        "read_aloud": "High in the cool sky, water vapor cools down into tiny droplets that form clouds. When they get heavy, rain falls.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>2. Condensation & Precipitation</h4>\n            <p>High in the sky where the air is cool, the water vapor gathers together into tiny water droplets — forming <strong>clouds</strong>. This is <strong>Condensation</strong>.</p>\n            <p>When the droplets become too heavy to float, gravity pulls them down as fresh <strong>rain (Precipitation)</strong> to fill our wells and irrigate our fields!</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Water Cycle Stages",
      "instructions": "Click the scientific term, then match its everyday description.",
      "pairs": [
        {
          "id": "w1",
          "left": "Evaporation",
          "right": "Sun heats water into rising vapor"
        },
        {
          "id": "w2",
          "left": "Condensation",
          "right": "Cool air turns vapor into clouds"
        },
        {
          "id": "w3",
          "left": "Precipitation",
          "right": "Rain falling from clouds to earth"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What causes water in puddles and lakes to evaporate into vapor?",
        "options": [
          {
            "id": "opt1",
            "text": "Heat from the Sun",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Cold wind at night",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Fishes swimming",
            "is_correct": false
          },
          {
            "id": "opt4",
            "text": "Moonlight",
            "is_correct": false
          }
        ],
        "hint": "Think about what makes clothes dry quickly on the clothesline.",
        "explanation": "Excellent! The sun provides thermal energy that turns liquid water into gas vapor."
      },
      {
        "id": "q2",
        "prompt": "What is the term for water falling from clouds as rain, drizzle, or hail?",
        "options": [
          {
            "id": "opt5",
            "text": "Precipitation (Rainfall)",
            "is_correct": true
          },
          {
            "id": "opt6",
            "text": "Filtration",
            "is_correct": false
          },
          {
            "id": "opt7",
            "text": "Freezing",
            "is_correct": false
          },
          {
            "id": "opt8",
            "text": "Sedimentation",
            "is_correct": false
          }
        ],
        "hint": "It is the step that refills our village lakes and streams.",
        "explanation": "Correct! Precipitation is any form of water that falls from clouds back to earth."
      }
    ],
    "translations": {
      "kn": {
        "title": "ನೀರಿನ ಪಯಣ: ನಮ್ಮ ಕೆರೆಯಿಂದ ಮಳೆಯವರೆಗೆ",
        "summary": "ಕೆರೆಯ ನೀರು ಹೇಗೆ ಆವಿಯಾಗಿ ಮೋಡವಾಗಿ, ಮಳೆಯಾಗಿ ಮರಳಿ ಬರುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
        "sections": [
          {
            "id": "sec-1",
            "title": "ಬೇಸಿಗೆಯ ಬಿಸಿಲಿನಲ್ಲಿ ಕೆರೆಯ ನೀರು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತದೆ?",
            "read_aloud": "ಬಿಸಿಲಿನಲ್ಲಿ ದ್ರವ ನೀರು ಕಾದಾಗ ಅದು ಕಣ್ಣಿಗೆ ಕಾಣದ ಹಬೆಯಾಗಿ ಮೇಲೆ ಏರುತ್ತದೆ. ಇದನ್ನು ಆವೀಕರಣ ಎನ್ನುತ್ತೇವೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>೧. ಆವೀಕರಣ: ಸೂರ್ಯನ ಶಾಖ</h4>\n                <p>ಬೇಸಿಗೆಯಲ್ಲಿ ನಮ್ಮ ಹಳ್ಳಿಯ ಕೆರೆ, ಬಾವಿಗಳಲ್ಲಿ ನೀರಿನ ಮಟ್ಟ ಕಡಿಮೆಯಾಗುತ್ತದೆ. ಈ ನೀರು ಎಲ್ಲಿ ಹೋಯಿತು?</p>\n                <p>ಸೂರ್ಯನ ಶಾಖದಿಂದ ನೀರು ಆವಿಯಾಗಿ ಆಕಾಶಕ್ಕೆ ಏರುತ್ತದೆ. ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು <strong>ಆವೀಕರಣ (Evaporation)</strong> ಎನ್ನುತ್ತೇವೆ.</p>\n              </div>\n            "
          },
          {
            "id": "sec-2",
            "title": "ಮೋಡಗಳು ಮತ್ತು ಮಳೆಯ ಹನಿಗಳು",
            "read_aloud": "ತಂಪಾದ ಆಕಾಶದಲ್ಲಿ ನೀರಿನ ಹಬೆ ತಣ್ಣಗಾಗಿ ಸಣ್ಣ ಹನಿಗಳಾಗಿ ಮೋಡವಾಗುತ್ತದೆ. ಭಾರವಾದಾಗ ಮಳೆಯಾಗಿ ಸುರಿಯುತ್ತದೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>೨. ಸಾಂದ್ರೀಕರಣ ಮತ್ತು ಮಳೆ</h4>\n                <p>ಆಕಾಶದ ಎತ್ತರದಲ್ಲಿ ಗಾಳಿ ತಂಪಾಗಿರುತ್ತದೆ. ಅಲ್ಲಿ ಆವಿಯು ತಂಪಾಗಿ ಸಣ್ಣ ನೀರಿನ ಹನಿಗಳಾಗಿ ಒಗ್ಗೂಡಿ <strong>ಮೋಡಗಳಾಗುತ್ತವೆ</strong>. ಇದು <strong>ಸಾಂದ್ರೀಕರಣ (Condensation)</strong>.</p>\n                <p>ಮೋಡದಲ್ಲಿನ ಹನಿಗಳು ತೂಕವಾದಾಗ ಭೂಮಿಯ ಮೇಲೆ ತಂಪಾದ <strong>ಮಳೆಯಾಗಿ (Precipitation)</strong> ಸುರಿದು ಕೆರೆ-ತೊರೆಗಳನ್ನು ತುಂಬಿಸುತ್ತದೆ!</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "ಜಲಚಕ್ರದ ಹಂತಗಳನ್ನು ಹೊಂದಿಸಿ",
          "instructions": "ಹಂತದ ಹೆಸರನ್ನು ಅದರ ಸರಿಯಾದ ಕಾರ್ಯಕ್ಕೆ ಹೊಂದಿಸಿ.",
          "pairs": [
            {
              "id": "w1",
              "left": "ಆವೀಕರಣ",
              "right": "ಸೂರ್ಯನ ಶಾಖದಿಂದ ನೀರು ಹಬೆಯಾಗುವುದು"
            },
            {
              "id": "w2",
              "left": "ಸಾಂದ್ರೀಕರಣ",
              "right": "ತಂಪಾದ ಹಬೆ ಮೋಡಗಳಾಗುವುದು"
            },
            {
              "id": "w3",
              "left": "ಮಳೆ (ವರ್ಷಪಾತ)",
              "right": "ಮೋಡದಿಂದ ನೀರು ಭೂಮಿಗೆ ಸುರಿಯುವುದು"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "ಕೆರೆ ಮತ್ತು ಹಳ್ಳಗಳಲ್ಲಿನ ನೀರು ಆವಿಯಾಗಲು ಮುಖ್ಯ ಕಾರಣವೇನು?",
            "options": [
              {
                "id": "opt1",
                "text": "ಸೂರ್ಯನ ಶಾಖ",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "ರಾತ್ರಿಯ ತಂಗಾಳಿ",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "ಮೀನುಗಳು ಈಜುವುದು",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "ಚಂದ್ರನ ಬೆಳಕು",
                "is_correct": false
              }
            ],
            "hint": "ಒಗೆದ ಬಟ್ಟೆಗಳು ಬಿಸಿಲಿನಲ್ಲಿ ಬೇಗ ಒಣಗಲು ಏನು ಕಾರಣ?",
            "explanation": "ಉತ್ತಮ! ಸೂರ್ಯನ ಶಾಖವು ದ್ರವ ನೀರನ್ನು ಅನಿಲ ಹಬೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ."
          },
          {
            "id": "q2",
            "prompt": "ಮೋಡಗಳಿಂದ ನೀರು ಹನಿಗಳಾಗಿ ಭೂಮಿಗೆ ಬೀಳುವ ಪ್ರಕ್ರಿಯೆಗೆ ಏನೆನ್ನುತ್ತಾರೆ?",
            "options": [
              {
                "id": "opt5",
                "text": "ಮಳೆ / ವರ್ಷಪಾತ",
                "is_correct": true
              },
              {
                "id": "opt6",
                "text": "ಸೋಸುವಿಕೆ",
                "is_correct": false
              },
              {
                "id": "opt7",
                "text": "ಹೆಪ್ಪುಗಟ್ಟುವಿಕೆ",
                "is_correct": false
              },
              {
                "id": "opt8",
                "text": "ಅವಕ್ಷೇಪನ",
                "is_correct": false
              }
            ],
            "hint": "ಹಳ್ಳಿಯ ಹೊಲ ಗದ್ದೆಗಳನ್ನು ಹಸಿರಾಗಿಸುವ ಮಳೆ.",
            "explanation": "ಸರಿ! ಮೋಡಗಳಿಂದ ಮಳೆಯಾಗಿ ನೀರು ಭೂಮಿಗೆ ಬೀಳುವುದನ್ನು ವರ್ಷಪಾತ ಎನ್ನುತ್ತಾರೆ."
          }
        ]
      },
      "hi": {
        "title": "पानी का सफर: गाँव के तालाब से बादलों तक",
        "summary": "जानिए कैसे तालाब का पानी भाप बनकर बादल बनता है और वर्षा के रूप में लौटता है।",
        "sections": [
          {
            "id": "sec-1",
            "title": "गर्मियों में तालाब का पानी कहाँ जाता है?",
            "read_aloud": "तेज़ धूप में पानी गर्म होकर भाप बनकर ऊपर आसमान में उड़ जाता है। इसे वाष्पीकरण कहते हैं।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>१. वाष्पीकरण: सूरज की गर्मी</h4>\n                <p>गर्मियों में हमारे गाँव के तालाब और कुओं का पानी कम हो जाता है। वह पानी कहाँ जाता है?</p>\n                <p>सूरज की गर्मी से पानी भाप (जलवाष्प) बनकर आसमान में ऊपर उठ जाता है। इस प्रक्रिया को <strong>वाष्पीकरण (Evaporation)</strong> कहते हैं।</p>\n              </div>\n            "
          },
          {
            "id": "sec-2",
            "title": "बादल और बारिश की बूँदें",
            "read_aloud": "ऊपर ठंडी हवा में भाप नन्हीं बूँदों में बदलकर बादल बनती है। जब बूँदें भारी हो जाती हैं, तो बारिश होती है।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>२. संघनन और वर्षा</h4>\n                <p>ऊँचे आसमान में ठंडक होती है, जहाँ जलवाष्प ठंडी होकर पानी की नन्हीं बूँदें बनाती है और <strong>बादल</strong> बन जाते हैं। इसे <strong>संघनन (Condensation)</strong> कहते हैं।</p>\n                <p>जब ये बूँदें भारी हो जाती हैं, तो धरती पर <strong>वर्षा (Rainfall)</strong> के रूप में गिरकर हमारे खेतों को सींचती हैं!</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "जलचक्र के चरणों का मिलान करें",
          "instructions": "वैज्ञानिक शब्द पर क्लिक करें और फिर उसके सही विवरण पर क्लिक करें।",
          "pairs": [
            {
              "id": "w1",
              "left": "वाष्पीकरण",
              "right": "धूप से पानी का भाप बनना"
            },
            {
              "id": "w2",
              "left": "संघनन",
              "right": "भाप का ठंडा होकर बादल बनना"
            },
            {
              "id": "w3",
              "left": "वर्षा",
              "right": "बादलों से पानी का बरसना"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "तालाब और गड्ढों के पानी को भाप में बदलने वाली मुख्य शक्ति क्या है?",
            "options": [
              {
                "id": "opt1",
                "text": "सूरज की ऊष्मा (गर्मी)",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "रात की ठंडी हवा",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "मछलियों का तैरना",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "चाँदनी",
                "is_correct": false
              }
            ],
            "hint": "सोचिए धूप में गीले कपड़े कैसे सूख जाते हैं।",
            "explanation": "शानदार! सूरज की गर्मी से तरल पानी गैस (भाप) में बदल जाता है।"
          },
          {
            "id": "q2",
            "prompt": "बादलों से पानी का बूँदों के रूप में धरती पर गिरना क्या कहलाता है?",
            "options": [
              {
                "id": "opt5",
                "text": "वर्षा (बारिश)",
                "is_correct": true
              },
              {
                "id": "opt6",
                "text": "छानना",
                "is_correct": false
              },
              {
                "id": "opt7",
                "text": "जमना",
                "is_correct": false
              },
              {
                "id": "opt8",
                "text": "अवसादन",
                "is_correct": false
              }
            ],
            "hint": "यह वही बारिश है जो हमारे गाँव के कुओं को भरती है।",
            "explanation": "बिल्कुल सही! बादलों से पानी के गिरने को वर्षा कहते हैं।"
          }
        ]
      }
    }
  },
  {
    "id": "lesson-math-101",
    "grade_level": 4,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Understanding Fractions with Chapati & Mangoes",
    "slug": "fractions-chapati-mangoes",
    "summary": "Learn half (1/2), one-third (1/3), and quarter (1/4) using everyday village examples.",
    "estimated_minutes": 15,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Great Chapati Share",
        "type": "concept",
        "read_aloud": "When two friends share one hot chapati equally, each gets one half. We write this as 1 over 2.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Sharing Equally at Lunch</h4>\n            <p>Imagine your mother makes a fresh round chapati. You and your friend Aarav want to share it equally.</p>\n            <div style=\"display:flex; justify-content:center; gap:20px; margin:20px 0;\">\n              <div style=\"text-align:center;\">\n                <div style=\"width:70px; height:70px; border-radius:50%; background:#F59E0B; border:3px dashed #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1 Whole</div>\n                <small>1 Chapati</small>\n              </div>\n              <div style=\"font-size:24px; align-self:center;\">➔</div>\n              <div style=\"text-align:center;\">\n                <div style=\"width:70px; height:70px; border-radius:50%; background:linear-gradient(90deg, #F59E0B 50%, #E2E8F0 50%); border:3px solid #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1/2</div>\n                <small>Two Equal Halves</small>\n              </div>\n            </div>\n            <p><strong>Fraction Rule:</strong> The top number (numerator) is the parts you have. The bottom number (denominator) is the total equal parts.</p>\n          </div>\n        "
      },
      {
        "id": "sec-2",
        "title": "Quarter Mangoes in the Orchard",
        "type": "worked_example",
        "read_aloud": "If you cut a sweet ripe mango into 4 equal slices, each slice is one quarter or 1 over 4.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Cutting into Four Equal Quarters</h4>\n            <p>When four friends share one sweet mango, we cut it into <strong>4 equal parts</strong>.</p>\n            <p>Each friend receives <strong>1/4</strong> (one quarter).</p>\n            <div class=\"feedback-banner success\" style=\"margin:16px 0;\">\n              <span>💡 <strong>Quick Check:</strong> What happens when you combine two quarters? 1/4 + 1/4 = 2/4, which is exactly the same as 1/2!</span>\n            </div>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Fraction to its Meaning",
      "instructions": "Click the fraction, then click its everyday description.",
      "pairs": [
        {
          "id": "p1",
          "left": "1/2",
          "right": "One of 2 equal slices (Half)"
        },
        {
          "id": "p2",
          "left": "1/4",
          "right": "One of 4 equal slices (Quarter)"
        },
        {
          "id": "p3",
          "left": "3/4",
          "right": "Three of 4 slices (Three-Fourths)"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "If you cut a watermelon into 4 equal pieces and eat 1 piece, what fraction did you eat?",
        "options": [
          {
            "id": "opt1",
            "text": "1/2 (Half)",
            "is_correct": false
          },
          {
            "id": "opt2",
            "text": "1/4 (One Quarter)",
            "is_correct": true
          },
          {
            "id": "opt3",
            "text": "4/1 (Four wholes)",
            "is_correct": false
          },
          {
            "id": "opt4",
            "text": "1/3 (One Third)",
            "is_correct": false
          }
        ],
        "hint": "Remember: 1 piece out of 4 total equal pieces.",
        "explanation": "Correct! 1 piece out of 4 equal parts is written as 1/4."
      },
      {
        "id": "q2",
        "prompt": "Which fraction is equal to one half (1/2)?",
        "options": [
          {
            "id": "opt5",
            "text": "2/4",
            "is_correct": true
          },
          {
            "id": "opt6",
            "text": "1/4",
            "is_correct": false
          },
          {
            "id": "opt7",
            "text": "3/4",
            "is_correct": false
          },
          {
            "id": "opt8",
            "text": "2/3",
            "is_correct": false
          }
        ],
        "hint": "If you take 2 slices out of 4, how much of the whole is that?",
        "explanation": "Wonderful! 2 out of 4 slices is exactly half of the whole."
      },
      {
        "id": "q3",
        "prompt": "In the fraction 3/5, what does the bottom number 5 represent?",
        "options": [
          {
            "id": "opt9",
            "text": "The parts you have taken",
            "is_correct": false
          },
          {
            "id": "opt10",
            "text": "The total number of equal parts (Denominator)",
            "is_correct": true
          },
          {
            "id": "opt11",
            "text": "The price of the fruit",
            "is_correct": false
          },
          {
            "id": "opt12",
            "text": "The number of friends waiting",
            "is_correct": false
          }
        ],
        "hint": "The bottom number is the denominator — it tells the total equal divisions.",
        "explanation": "Spot on! The denominator (5) represents the total equal parts the whole is divided into."
      }
    ],
    "translations": {
      "kn": {
        "title": "ಚಪಾತಿ ಮತ್ತು ಮಾವಿನಹಣ್ಣಿನೊಂದಿಗೆ ಭಿನ್ನರಾಶಿಗಳ ಅರಿವು",
        "summary": "ದೈನಂದಿನ ಉದಾಹರಣೆಗಳೊಂದಿಗೆ ಅರ್ಧ (1/2) ಮತ್ತು ಕಾಲು (1/4) ಭಾಗಗಳನ್ನು ಸುಲಭವಾಗಿ ಕಲಿಯಿರಿ.",
        "sections": [
          {
            "id": "sec-1",
            "title": "ಸ್ನೇಹಿತರೊಂದಿಗೆ ಬಿಸಿ ಚಪಾತಿ ಹಂಚಿಕೆ",
            "read_aloud": "ಇಬ್ಬರು ಸ್ನೇಹಿತರು ಒಂದು ಚಪಾತಿಯನ್ನು ಸಮನಾಗಿ ಹಂಚಿಕೊಂಡಾಗ, ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಅರ್ಧ ಭಾಗ ಸಿಗುತ್ತದೆ. ಇದನ್ನು 1 ಭಾಗಿಸು 2 (1/2) ಎಂದು ಬರೆಯುತ್ತೇವೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>ಊಟದ ಸಮಯದಲ್ಲಿ ಸಮನಾದ ಹಂಚಿಕೆ</h4>\n                <p>ನಿಮ್ಮ ಅಮ್ಮ ತಯಾರಿಸಿದ ಒಂದು ದುಂಡನೆಯ ಬಿಸಿ ಚಪಾತಿಯನ್ನು ನೀವು ಮತ್ತು ನಿಮ್ಮ ಸ್ನೇಹಿತ ಆರವ್ ಸಮನಾಗಿ ಹಂಚಿಕೊಳ್ಳಲು ಬಯಸುತ್ತೀರಿ.</p>\n                <div style=\"display:flex; justify-content:center; gap:20px; margin:20px 0;\">\n                  <div style=\"text-align:center;\">\n                    <div style=\"width:70px; height:70px; border-radius:50%; background:#F59E0B; border:3px dashed #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1 ಪೂರ್ಣ</div>\n                    <small>1 ಚಪಾತಿ</small>\n                  </div>\n                  <div style=\"font-size:24px; align-self:center;\">➔</div>\n                  <div style=\"text-align:center;\">\n                    <div style=\"width:70px; height:70px; border-radius:50%; background:linear-gradient(90deg, #F59E0B 50%, #E2E8F0 50%); border:3px solid #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1/2</div>\n                    <small>ಎರಡು ಸಮ ಅರ್ಧಗಳು</small>\n                  </div>\n                </div>\n                <p><strong>ಭಿನ್ನರಾಶಿ ಸೂತ್ರ:</strong> ಮೇಲಿನ ಸಂಖ್ಯೆ (ಅಂಶ) ನೀವು ಪಡೆದ ಭಾಗಗಳನ್ನು ತೋರಿಸುತ್ತದೆ. ಕೆಳಗಿನ ಸಂಖ್ಯೆ (ಛೇದ) ಒಟ್ಟು ಸಮ ಭಾಗಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.</p>\n              </div>\n            "
          },
          {
            "id": "sec-2",
            "title": "ತೋಟದಲ್ಲಿ ಮಾವಿನಹಣ್ಣಿನ ಕಾಲು ಭಾಗಗಳು",
            "read_aloud": "ಒಂದು ಮಾಗಿದ ಸಿಹಿ ಮಾವಿನಹಣ್ಣನ್ನು 4 ಸಮ ಹೋಳುಗಳಾಗಿ ಕತ್ತರಿಸಿದರೆ, ಪ್ರತಿಯೊಂದು ಹೋಳು ಕಾಲು ಭಾಗ ಅಥವಾ 1/4 ಆಗಿರುತ್ತದೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>ನಾಲ್ಕು ಸಮ ಕಾಲು ಭಾಗಗಳಾಗಿ ಕತ್ತರಿಸುವುದು</h4>\n                <p>ನಾಲ್ಕು ಜನ ಸ್ನೇಹಿತರು ಒಂದು ಮಾವಿನಹಣ್ಣನ್ನು ಹಂಚಿಕೊಳ್ಳುವಾಗ, ನಾವು ಅದನ್ನು <strong>4 ಸಮ ಭಾಗಗಳಾಗಿ</strong> ಕತ್ತರಿಸುತ್ತೇವೆ.</p>\n                <p>ಪ್ರತಿಯೊಬ್ಬರಿಗೂ <strong>1/4</strong> (ಕಾಲು ಭಾಗ) ಸಿಗುತ್ತದೆ.</p>\n                <div class=\"feedback-banner success\" style=\"margin:16px 0;\">\n                  <span>💡 <strong>ಗಮನಿಸಿ:</strong> ಎರಡು ಕಾಲು ಭಾಗಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸಿದಾಗ ಏನಾಗುತ್ತದೆ? 1/4 + 1/4 = 2/4, ಇದು ಅರ್ಧ (1/2) ಭಾಗಕ್ಕೆ ಸಮಾನ!</span>\n                </div>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "ಭಿನ್ನರಾಶಿಯನ್ನು ಅದರ ಸರಿಯಾದ ವಿವರಣೆಗೆ ಹೊಂದಿಸಿ",
          "instructions": "ಮೊದಲು ಭಿನ್ನರಾಶಿಯ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ, ನಂತರ ಅದರ ನಿಖರವಾದ ಅರ್ಥದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
          "pairs": [
            {
              "id": "p1",
              "left": "1/2",
              "right": "2 ಸಮ ಭಾಗಗಳಲ್ಲಿ ಒಂದು (ಅರ್ಧ)"
            },
            {
              "id": "p2",
              "left": "1/4",
              "right": "4 ಸಮ ಭಾಗಗಳಲ್ಲಿ ಒಂದು (ಕಾಲು)"
            },
            {
              "id": "p3",
              "left": "3/4",
              "right": "4 ಸಮ ಭಾಗಗಳಲ್ಲಿ ಮೂರು (ಮುಕ್ಕಾಲು)"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "ಒಂದು ಕಲ್ಲಂಗಡಿ ಹಣ್ಣನ್ನು 4 ಸಮ ಭಾಗಗಳಾಗಿ ಕತ್ತರಿಸಿ ಅದರಲ್ಲಿ 1 ಭಾಗವನ್ನು ತಿಂದರೆ, ನೀವು ತಿಂದ ಭಾಗವೆಷ್ಟು?",
            "options": [
              {
                "id": "opt1",
                "text": "1/2 (ಅರ್ಧ)",
                "is_correct": false
              },
              {
                "id": "opt2",
                "text": "1/4 (ಕಾಲು ಭಾಗ)",
                "is_correct": true
              },
              {
                "id": "opt3",
                "text": "4/1 (ನಾಲ್ಕು ಪೂರ್ಣ)",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "1/3 (ಮೂರನೇ ಒಂದು ಭಾಗ)",
                "is_correct": false
              }
            ],
            "hint": "ನೆನಪಿಡಿ: ಒಟ್ಟು 4 ಸಮ ಭಾಗಗಳಲ್ಲಿ 1 ಭಾಗ.",
            "explanation": "ಸರಿಯಾದ ಉತ್ತರ! 4 ಸಮ ಭಾಗಗಳಲ್ಲಿ 1 ಭಾಗವನ್ನು 1/4 ಎಂದು ಬರೆಯಲಾಗುತ್ತದೆ."
          },
          {
            "id": "q2",
            "prompt": "ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ಅರ್ಧ (1/2) ಕ್ಕೆ ಸಮಾನವಾಗಿದೆ?",
            "options": [
              {
                "id": "opt5",
                "text": "2/4",
                "is_correct": true
              },
              {
                "id": "opt6",
                "text": "1/4",
                "is_correct": false
              },
              {
                "id": "opt7",
                "text": "3/4",
                "is_correct": false
              },
              {
                "id": "opt8",
                "text": "2/3",
                "is_correct": false
              }
            ],
            "hint": "4 ಸಮ ಭಾಗಗಳಲ್ಲಿ 2 ಭಾಗಗಳನ್ನು ತೆಗೆದುಕೊಂಡರೆ ಅದು ಅರ್ಧಕ್ಕೆ ಸಮಾನವಲ್ಲವೇ?",
            "explanation": "ಅದ್ಭುತ! 4 ರಲ್ಲಿ 2 ಭಾಗಗಳು ನಿಖರವಾಗಿ ಅರ್ಧಕ್ಕೆ ಸಮಾನ."
          },
          {
            "id": "q3",
            "prompt": "3/5 ಎಂಬ ಭಿನ್ನರಾಶಿಯಲ್ಲಿ ಕೆಳಗಿನ 5 ಸಂಖ್ಯೆಯು ಏನನ್ನು ಸೂಚಿಸುತ್ತದೆ?",
            "options": [
              {
                "id": "opt9",
                "text": "ನೀವು ತೆಗೆದುಕೊಂಡ ಭಾಗಗಳು",
                "is_correct": false
              },
              {
                "id": "opt10",
                "text": "ಒಟ್ಟು ಸಮ ಭಾಗಗಳು (ಛೇದ)",
                "is_correct": true
              },
              {
                "id": "opt11",
                "text": "ಹಣ್ಣಿನ ಬೆಲೆ",
                "is_correct": false
              },
              {
                "id": "opt12",
                "text": "ಕಾಯುತ್ತಿರುವ ಸ್ನೇಹಿತರ ಸಂಖ್ಯೆ",
                "is_correct": false
              }
            ],
            "hint": "ಕೆಳಗಿನ ಸಂಖ್ಯೆಯು ಛೇದವಾಗಿದ್ದು, ವಸ್ತುವನ್ನು ಒಟ್ಟು ಎಷ್ಟು ಸಮ ಭಾಗಗಳಾಗಿ ವಿಂಗಡಿಸಲಾಗಿದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ.",
            "explanation": "ನಿಖರ! ಛೇದ (5) ಒಟ್ಟು ಸಮ ಭಾಗಗಳ ಸಂಖ್ಯೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ."
          }
        ]
      },
      "hi": {
        "title": "रोटी और आम से समझें भिन्न (Fractions)",
        "summary": "रोजमर्रा के गाँव के उदाहरणों से आधा (1/2), एक-तिहाई (1/3) और चौथाई (1/4) का सरल पाठ सीखें।",
        "sections": [
          {
            "id": "sec-1",
            "title": "दोपहर के भोजन में रोटी का बँटवारा",
            "read_aloud": "जब दो दोस्त एक ताज़ा गोल रोटी बराबर बाँटते हैं, तो प्रत्येक को आधा हिस्सा मिलता है। इसे हम 1 बटा 2 लिखते हैं।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>बराबर बाँटना सीखें</h4>\n                <p>सोचिए आपकी माँ ने एक गोल रोटी बनाई है। आप और आपका मित्र आरव इसे बराबर बाँटकर खाना चाहते हैं।</p>\n                <div style=\"display:flex; justify-content:center; gap:20px; margin:20px 0;\">\n                  <div style=\"text-align:center;\">\n                    <div style=\"width:70px; height:70px; border-radius:50%; background:#F59E0B; border:3px dashed #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1 पूरी</div>\n                    <small>1 रोटी</small>\n                  </div>\n                  <div style=\"font-size:24px; align-self:center;\">➔</div>\n                  <div style=\"text-align:center;\">\n                    <div style=\"width:70px; height:70px; border-radius:50%; background:linear-gradient(90deg, #F59E0B 50%, #E2E8F0 50%); border:3px solid #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1/2</div>\n                    <small>दो बराबर आधे हिस्से</small>\n                  </div>\n                </div>\n                <p><strong>भिन्न का नियम:</strong> ऊपर की संख्या (अंश) बताती है कि आपके पास कितने भाग हैं। नीचे की संख्या (हर) कुल बराबर भागों को दर्शाती है।</p>\n              </div>\n            "
          },
          {
            "id": "sec-2",
            "title": "बाग में आम के चार बराबर हिस्से",
            "read_aloud": "यदि आप एक पके मीठे आम को चार बराबर फांकों में काटते हैं, तो हर फांक एक चौथाई या 1 बटा 4 कहलाती है।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>चार बराबर टुकड़ों में बाँटना</h4>\n                <p>जब चार दोस्त मिलकर एक आम खाते हैं, तो हम उसे <strong>4 बराबर हिस्सों</strong> में काटते हैं।</p>\n                <p>प्रत्येक दोस्त को <strong>1/4</strong> (एक चौथाई) मिलता है।</p>\n                <div class=\"feedback-banner success\" style=\"margin:16px 0;\">\n                  <span>💡 <strong>सोचिए:</strong> जब दो चौथाई हिस्से मिलाए जाते हैं, तो क्या होता है? 1/4 + 1/4 = 2/4, जो कि ठीक आधे (1/2) के बराबर है!</span>\n                </div>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "भिन्न को उसके सही अर्थ से मिलाएँ",
          "instructions": "पहले भिन्न पर क्लिक करें, फिर उसके सही अर्थ पर क्लिक करें।",
          "pairs": [
            {
              "id": "p1",
              "left": "1/2",
              "right": "2 बराबर हिस्सों में से एक (आधा)"
            },
            {
              "id": "p2",
              "left": "1/4",
              "right": "4 बराबर हिस्सों में से एक (चौथाई)"
            },
            {
              "id": "p3",
              "left": "3/4",
              "right": "4 में से 3 हिस्से (तीन-चौथाई)"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "यदि आप एक तरबूज को 4 बराबर भागों में काटकर 1 भाग खाते हैं, तो आपने कौन सा भिन्न खाया?",
            "options": [
              {
                "id": "opt1",
                "text": "1/2 (आधा)",
                "is_correct": false
              },
              {
                "id": "opt2",
                "text": "1/4 (एक चौथाई)",
                "is_correct": true
              },
              {
                "id": "opt3",
                "text": "4/1 (चार पूरे)",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "1/3 (एक तिहाई)",
                "is_correct": false
              }
            ],
            "hint": "याद रखें: कुल 4 बराबर टुकड़ों में से 1 टुकड़ा।",
            "explanation": "शाबाश! 4 बराबर टुकड़ों में से 1 टुकड़े को 1/4 लिखा जाता है।"
          },
          {
            "id": "q2",
            "prompt": "इनमें से कौन सा भिन्न आधे (1/2) के बराबर है?",
            "options": [
              {
                "id": "opt5",
                "text": "2/4",
                "is_correct": true
              },
              {
                "id": "opt6",
                "text": "1/4",
                "is_correct": false
              },
              {
                "id": "opt7",
                "text": "3/4",
                "is_correct": false
              },
              {
                "id": "opt8",
                "text": "2/3",
                "is_correct": false
              }
            ],
            "hint": "4 में से 2 टुकड़े लेने पर पूरे का कितना भाग होता है?",
            "explanation": "बहुत सुंदर! 4 में से 2 फांकें ठीक आधे के बराबर होती हैं।"
          },
          {
            "id": "q3",
            "prompt": "भिन्न 3/5 में नीचे दी गई संख्या 5 क्या दर्शाती है?",
            "options": [
              {
                "id": "opt9",
                "text": "लिए गए टुकड़े",
                "is_correct": false
              },
              {
                "id": "opt10",
                "text": "कुल बराबर टुकड़ों की संख्या (हर)",
                "is_correct": true
              },
              {
                "id": "opt11",
                "text": "फल की कीमत",
                "is_correct": false
              },
              {
                "id": "opt12",
                "text": "इंतजार कर रहे दोस्तों की संख्या",
                "is_correct": false
              }
            ],
            "hint": "नीचे की संख्या हर कहलाती है, जो कुल बराबर भागों को दर्शाती है।",
            "explanation": "बिल्कुल सही! हर (5) वस्तु के कुल बराबर भागों की संख्या बताता है।"
          }
        ]
      },
      "te": {
        "title": "చపాతీ మరియు మామిడిపండ్లతో భిన్నాలు నేర్చుకుందాం",
        "summary": "సగం (1/2), పావు (1/4) మరియు ముప్పావు భాగాలను సులభమైన ఉదాహరణలతో అర్థం చేసుకోండి.",
        "sections": [
          {
            "id": "sec-1",
            "title": "మిత్రుల మధ్య సమానంగా చపాతీ పంచుకోవడం",
            "read_aloud": "ఇద్దరు మిత్రులు ఒక చపాతీని సమానంగా పంచుకున్నప్పుడు, ప్రతి ఒక్కరికి సగం లభిస్తుంది. దీనిని 1 బై 2 (1/2) అని రాస్తాము.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>సమాన భాగస్వామ్యం</h4>\n                <p>మీ అమ్మ చేసిన తాజా చపాతీని మీరు మరియు మీ మిత్రుడు ఆరవ్ సమానంగా పంచుకోవాలనుకుంటున్నారు.</p>\n                <div style=\"display:flex; justify-content:center; gap:20px; margin:20px 0;\">\n                  <div style=\"text-align:center;\">\n                    <div style=\"width:70px; height:70px; border-radius:50%; background:#F59E0B; border:3px dashed #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1 పూర్ణం</div>\n                    <small>1 చపాతీ</small>\n                  </div>\n                  <div style=\"font-size:24px; align-self:center;\">➔</div>\n                  <div style=\"text-align:center;\">\n                    <div style=\"width:70px; height:70px; border-radius:50%; background:linear-gradient(90deg, #F59E0B 50%, #E2E8F0 50%); border:3px solid #B45309; margin:0 auto; display:flex; align-items:center; justify-content:center; font-weight:bold;\">1/2</div>\n                    <small>రెండు సమాన సగాలు</small>\n                  </div>\n                </div>\n                <p><strong>భిన్నం నియమం:</strong> పై సంఖ్య (లవం) మన వద్ద ఉన్న భాగాలు, కింది సంఖ్య (హారం) మొత్తం సమాన భాగాలు.</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "భిన్నాన్ని సరైన వివరణతో జతపరచండి",
          "instructions": "ముందుగా భిన్నంపై నొక్కండి, ఆపై దాని అర్థంపై నొక్కండి.",
          "pairs": [
            {
              "id": "p1",
              "left": "1/2",
              "right": "2 భాగాలలో ఒకటి (సగం)"
            },
            {
              "id": "p2",
              "left": "1/4",
              "right": "4 భాగాలలో ఒకటి (పావు)"
            },
            {
              "id": "p3",
              "left": "3/4",
              "right": "4 భాగాలలో మూడు (ముప్పావు)"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "పుచ్చకాయను 4 సమాన భాగాలుగా కోసి 1 భాగం తింటే, మీరు తిన్న భిన్నం ఎంత?",
            "options": [
              {
                "id": "opt1",
                "text": "1/2 (సగం)",
                "is_correct": false
              },
              {
                "id": "opt2",
                "text": "1/4 (పావు భాగం)",
                "is_correct": true
              },
              {
                "id": "opt3",
                "text": "4/1",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "1/3",
                "is_correct": false
              }
            ],
            "hint": "మొత్తం 4 సమాన భాగాలలో 1 భాగం.",
            "explanation": "చాలా బాగుంది! 4 భాగాలలో 1 భాగాన్ని 1/4 గా రాస్తారు."
          }
        ]
      },
      "ta": {
        "title": "சப்பாத்தி மற்றும் மாம்பழத்துடன் பின்னங்கள்",
        "summary": "அரை (1/2) மற்றும் கால் (1/4) பகுதிகளை அன்றாட உதாரணங்களுடன் கற்றுக்கொள்ளுங்கள்.",
        "sections": [
          {
            "id": "sec-1",
            "title": "நண்பர்களுடன் சப்பாத்தி பகிர்வு",
            "read_aloud": "இரண்டு நண்பர்கள் ஒரு சப்பாத்தியைச் சமமாகப் பகிர்ந்து கொள்ளும்போது, ஆளுக்கு அரை பகுதி கிடைக்கிறது. இதை 1 கீழ் 2 (1/2) என எழுதுகிறோம்.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>சமமாகப் பகிர்ந்துகொள்ளுதல்</h4>\n                <p>அம்மா சுட்டுத் தந்த வட்டமான சப்பாத்தியை நீங்களும் உங்கள் நண்பர் ஆரவும் சமமாகப் பகிர்ந்து கொள்கிறீர்கள்.</p>\n                <p><strong>பின்ன விதி:</strong> மேல் எண் (தொகுதி) நாம் பெற்ற பகுதியையும், கீழ் எண் (பகுதி) மொத்த சம பகுதிகளையும் குறிக்கும்.</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "பின்னத்தை அதன் பொருளுடன் பொருத்துக",
          "instructions": "முதலில் பின்னத்தைத் தேர்வு செய்து, பின்னர் அதன் விளக்கத்தைத் தொடவும்.",
          "pairs": [
            {
              "id": "p1",
              "left": "1/2",
              "right": "2 சம பகுதிகளில் ஒன்று (அரை)"
            },
            {
              "id": "p2",
              "left": "1/4",
              "right": "4 சம பகுதிகளில் ஒன்று (கால்)"
            },
            {
              "id": "p3",
              "left": "3/4",
              "right": "4 பகுதிகளில் மூன்று (முக்கால்)"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "ஒரு தர்பூசணியை 4 சம துண்டுகளாக வெட்டி 1 துண்டு சாப்பிட்டால், நீங்கள் சாப்பிட்ட பின்னம் என்ன?",
            "options": [
              {
                "id": "opt1",
                "text": "1/2 (அரை)",
                "is_correct": false
              },
              {
                "id": "opt2",
                "text": "1/4 (கால் பகுதி)",
                "is_correct": true
              },
              {
                "id": "opt3",
                "text": "4/1",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "1/3",
                "is_correct": false
              }
            ],
            "hint": "4 சம பகுதிகளில் 1 பகுதி.",
            "explanation": "சபாஷ்! 4 சம பகுதிகளில் 1 பகுதியை 1/4 என்று குறிப்பிடுகிறோம்."
          }
        ]
      },
      "mr": {
        "title": "चपाती आणि आंब्यावरून अपूर्णांक समजून घेऊया",
        "summary": "अर्धा (1/2), पाव (1/4) आणि पाऊण (3/4) भाग सोप्या ग्रामीण उदाहरणांवरून शिका.",
        "sections": [
          {
            "id": "sec-1",
            "title": "दुपारच्या जेवणात चपातीची समान वाटणी",
            "read_aloud": "जेव्हा दोन मित्र एक गरमागरम चपाती समान वाटून घेतात, तेव्हा प्रत्येकाला अर्धा भाग मिळतो. आपण हे 1 छेद 2 (1/2) असे लिहितो.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>समान वाटणी</h4>\n                <p>आईने केलेल्या ताज्या चपातीची तुम्ही आणि आरव समान वाटणी करता.</p>\n                <p><strong>अपूर्णांकाचा नियम:</strong> वरची संख्या (अंश) मिळालेले भाग दर्शवते आणि खालची संख्या (छेद) एकूण समान भाग दर्शवते.</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "अपूर्णांकाची योग्य जोडी जुळवा",
          "instructions": "प्रथम अपूर्णांकावर क्लिक करा, नंतर त्याच्या अर्थावर क्लिक करा.",
          "pairs": [
            {
              "id": "p1",
              "left": "1/2",
              "right": "2 समान भागांपैकी एक (अर्धा)"
            },
            {
              "id": "p2",
              "left": "1/4",
              "right": "4 समान भागांपैकी एक (पाव)"
            },
            {
              "id": "p3",
              "left": "3/4",
              "right": "4 पैकी 3 भाग (पाऊण)"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "कलिंगडाचे 4 समान तुकडे करून 1 तुकडा खाल्ला, तर तुम्ही किती अपूर्णांक खाल्ला?",
            "options": [
              {
                "id": "opt1",
                "text": "1/2 (अर्धा)",
                "is_correct": false
              },
              {
                "id": "opt2",
                "text": "1/4 (पाव भाग)",
                "is_correct": true
              },
              {
                "id": "opt3",
                "text": "4/1",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "1/3",
                "is_correct": false
              }
            ],
            "hint": "एकूण 4 समान भागांपैकी 1 तुकडा.",
            "explanation": "शाब्बास! 4 पैकी 1 तुकडा म्हणजे 1/4 अपूर्णांक."
          }
        ]
      },
      "bn": {
        "title": "রুটি ও আম দিয়ে ভগ্নাংশ শিখি",
        "summary": "অর্ধেক (১/২), এক-চতুর্থাংশ (১/৪) ও তিন-চতুর্থাংশ সহজে বোঝার বাস্তবসম্মত পাঠ।",
        "sections": [
          {
            "id": "sec-1",
            "title": "বন্ধুদের মাঝে সমান ভাগে রুটি ভাগ",
            "read_aloud": "যখন দুই বন্ধু একটি রুটি সমান ভাগে ভাগ করে নেয়, প্রত্যেকে অর্ধেক অংশ পায়। একে আমরা ১ বাই ২ লিখি।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>সমান ভাগাভাগি</h4>\n                <p>একটি গোল গরম রুটি দুই বন্ধু সমান ভাগে ভাগ করে খেলে প্রত্যেকে পায় অর্ধেক (১/২)।</p>\n                <p><strong>ভগ্নাংশের নিয়ম:</strong> ওপরের সংখ্যা (লব) বোঝায় প্রাপ্ত অংশ, নিচের সংখ্যা (হর) বোঝায় মোট সমান ভাগ।</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "ভগ্নাংশের সাথে অর্থ মেলাও",
          "instructions": "প্রথমে ভগ্নাংশে ক্লিক করো, তারপর তার সঠিক অর্থে ক্লিক করো।",
          "pairs": [
            {
              "id": "p1",
              "left": "1/2",
              "right": "২ ভাগের ১ ভাগ (অর্ধেক)"
            },
            {
              "id": "p2",
              "left": "1/4",
              "right": "৪ ভাগের ১ ভাগ (এক-চতুর্থাংশ)"
            },
            {
              "id": "p3",
              "left": "3/4",
              "right": "৪ ভাগের ৩ ভাগ (তিন-চতুর্থাংশ)"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "একটি তরমুজ ৪ টুকরো করে ১ টুকরো খেলে, কত ভগ্নাংশ খাওয়া হলো?",
            "options": [
              {
                "id": "opt1",
                "text": "১/২ (অর্ধেক)",
                "is_correct": false
              },
              {
                "id": "opt2",
                "text": "১/৪ (এক-চতুর্থাংশ)",
                "is_correct": true
              },
              {
                "id": "opt3",
                "text": "৪/১",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "১/৩",
                "is_correct": false
              }
            ],
            "hint": "মোট ৪ টুকরোর মধ্যে ১ টুকরো।",
            "explanation": "দারুণ! ৪ সমান ভাগের ১ ভাগকে ১/৪ লেখা হয়।"
          }
        ]
      },
      "ml": {
        "title": "ചപ്പാത്തിയും മാങ്ങയും ഉപയോഗിച്ച് ഭിന്നസംഖ്യകൾ പഠിക്കാം",
        "summary": "പകുതി (1/2), കാൽ (1/4) ഭാഗങ്ങൾ ലളിതമായി മനസ്സിലാക്കാം.",
        "sections": [
          {
            "id": "sec-1",
            "title": "ചപ്പാത്തി തുല്യമായി പങ്കുവെക്കാം",
            "read_aloud": "രണ്ട് കൂട്ടുകാർ ഒരു ചപ്പാത്തി തുല്യമായി വീതിക്കുമ്പോൾ ഓരോരുത്തർക്കും പകുതി ലഭിക്കുന്നു. ഇതിനെ 1 ബൈ 2 എന്ന് എഴുതാം.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>തുല്യമായി പങ്കിടൽ</h4>\n                <p>ഒരു ചപ്പാത്തി രണ്ട് കൂട്ടുകാർ വീതിക്കുമ്പോൾ ഓരോരുത്തർക്കും പകുതി (1/2) കിട്ടുന്നു.</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "ഭിന്നസംഖ്യയെ അർത്ഥവുമായി യോജിപ്പിക്കുക",
          "instructions": "ഭിന്നസംഖ്യയിൽ ക്ലിക്ക് ചെയ്ത ശേഷം ശരിയായ അർത്ഥത്തിൽ ക്ലിക്ക് ചെയ്യുക.",
          "pairs": [
            {
              "id": "p1",
              "left": "1/2",
              "right": "രണ്ടിൽ ഒന്ന് (പകുതി)"
            },
            {
              "id": "p2",
              "left": "1/4",
              "right": "നാലിൽ ഒന്ന് (കാൽ)"
            },
            {
              "id": "p3",
              "left": "3/4",
              "right": "നാലിൽ മൂന്ന് (മുക്കാൽ)"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "ഒരു തണ്ണിമത്തൻ 4 തുല്യ കഷണങ്ങളാക്കി 1 കഷണം കഴിച്ചാൽ എത്ര ഭാഗം കഴിച്ചു?",
            "options": [
              {
                "id": "opt1",
                "text": "1/2 (പകുതി)",
                "is_correct": false
              },
              {
                "id": "opt2",
                "text": "1/4 (കാൽ ഭാഗം)",
                "is_correct": true
              },
              {
                "id": "opt3",
                "text": "4/1",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "1/3",
                "is_correct": false
              }
            ],
            "hint": "4 കഷണങ്ങളിൽ 1 കഷണം.",
            "explanation": "ശരിയുത്തരം! 4 ൽ 1 ഭാഗം 1/4 ആണ്."
          }
        ]
      }
    }
  },
  {
    "id": "lesson-math-c5",
    "grade_level": 5,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Perimeter and Area of Village Paddy Fields",
    "slug": "perimeter-area-paddy-fields",
    "summary": "Calculate fencing perimeter and ploughing area for rectangular farmland plots.",
    "estimated_minutes": 15,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "Walking the Field Boundary (Perimeter)",
        "type": "concept",
        "read_aloud": "Perimeter is the total boundary distance around a field. Walk all four sides to measure it.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Boundary vs Inside Area</h4>\n            <p>Farmer Ramesh wants to put a wooden fence around his rectangular tomato garden.</p>\n            <p>Length = 20 meters, Width = 10 meters.</p>\n            <p><strong>Perimeter</strong> = 2 × (Length + Width) = 2 × (20 + 10) = <strong>60 meters of wire needed!</strong></p>\n          </div>\n        "
      },
      {
        "id": "sec-2",
        "title": "Area: The Sowing Space Inside",
        "type": "worked_example",
        "read_aloud": "Area is the surface inside the boundaries. For a rectangle, multiply length by breadth.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Calculating Sowing Ground</h4>\n            <p><strong>Area</strong> = Length × Width = 20 m × 10 m = <strong>200 square meters (m²)</strong>.</p>\n            <p>This tells the farmer how many paddy saplings can be planted inside!</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match Field Measurements to Perimeter",
      "instructions": "Calculate Perimeter = 2 × (Length + Breadth).",
      "pairs": [
        {
          "id": "p1",
          "left": "Length 10m, Width 5m",
          "right": "30 meters"
        },
        {
          "id": "p2",
          "left": "Length 25m, Width 15m",
          "right": "80 meters"
        },
        {
          "id": "p3",
          "left": "Length 30m, Width 20m",
          "right": "100 meters"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What is the area of a square compost pit with each side measuring 4 meters?",
        "options": [
          {
            "id": "opt1",
            "text": "16 square meters",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "8 square meters",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "12 square meters",
            "is_correct": false
          }
        ],
        "hint": "Square Area = side × side = 4 × 4.",
        "explanation": "Correct! 4 × 4 = 16 m²."
      }
    ]
  },
  {
    "id": "lesson-sci-301",
    "grade_level": 5,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Parts of a Plant & Seed Germination",
    "slug": "plant-parts-germination",
    "summary": "Hands-on discovery of roots, stems, leaves, flowers, and how a seed wakes up with water.",
    "estimated_minutes": 18,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#1D7873",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Underground Heroes: Roots",
        "type": "concept",
        "read_aloud": "Roots hold the plant firmly in the soil and absorb water and minerals for growth.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>What Do Roots Do?</h4>\n            <p>Just like the foundation of a house, roots hold the tree steady against strong winds. They spread deep in the village soil to drink water and mineral nutrients.</p>\n          </div>\n        "
      },
      {
        "id": "sec-2",
        "title": "Leaves: The Plant Kitchen",
        "type": "concept",
        "read_aloud": "Green leaves use sunlight, water, and carbon dioxide to prepare food. This process is called photosynthesis.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Photosynthesis: Nature's Kitchen</h4>\n            <p>Green leaves have a green substance called chlorophyll. In presence of sunlight, they cook sweet glucose food for the plant and release fresh oxygen for us to breathe!</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match Plant Parts to their Functions",
      "instructions": "Click the plant part, then match what it does for the plant.",
      "pairs": [
        {
          "id": "pt1",
          "left": "Roots",
          "right": "Absorbs water and anchors plant"
        },
        {
          "id": "pt2",
          "left": "Stem",
          "right": "Transports water and food"
        },
        {
          "id": "pt3",
          "left": "Leaves",
          "right": "Kitchen preparing food with sunlight"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which part of the plant prepares food using sunlight?",
        "options": [
          {
            "id": "opt1",
            "text": "Leaves",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Roots",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Bark",
            "is_correct": false
          },
          {
            "id": "opt4",
            "text": "Seeds",
            "is_correct": false
          }
        ],
        "hint": "They are green and catch maximum sunshine during the daytime.",
        "explanation": "Spot on! The leaves act as the food factory or kitchen of the plant."
      },
      {
        "id": "q2",
        "prompt": "What gas do plants release into the air during photosynthesis?",
        "options": [
          {
            "id": "opt5",
            "text": "Oxygen",
            "is_correct": true
          },
          {
            "id": "opt6",
            "text": "Smoke",
            "is_correct": false
          },
          {
            "id": "opt7",
            "text": "Carbon Dioxide",
            "is_correct": false
          },
          {
            "id": "opt8",
            "text": "Nitrogen",
            "is_correct": false
          }
        ],
        "hint": "It is the life-giving gas all humans and animals need to breathe.",
        "explanation": "Correct! Plants give out oxygen, which keeps all creatures alive."
      }
    ],
    "translations": {
      "kn": {
        "title": "ಸಸ್ಯದ ಭಾಗಗಳು ಮತ್ತು ಬೀಜದ ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ",
        "summary": "ಬೇರು, ಕಾಂಡ, ಎಲೆ ಮತ್ತು ಬೀಜ ಹೇಗೆ ಸಸಿಯಾಗಿ ಬೆಳೆಯುತ್ತದೆ ಎಂದು ಕಲಿಯಿರಿ.",
        "sections": [
          {
            "id": "sec-1",
            "title": "ಭೂಮಿಯ ಕೆಳಗಿನ ಶಕ್ತಿ: ಬೇರುಗಳು",
            "read_aloud": "ಬೇರುಗಳು ಸಸ್ಯವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಭದ್ರವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತವೆ ಮತ್ತು ಬೆಳವಣಿಗೆಗೆ ಅಗತ್ಯವಾದ ನೀರು ಮತ್ತು ಲವಣಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತವೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>ಬೇರುಗಳ ಮುಖ್ಯ ಕಾರ್ಯವೇನು?</h4>\n                <p>ಮನೆಯ ಅಡಿಪಾಯದಂತೆ, ಬೇರುಗಳು ಬಿರುಗಾಳಿಯಲ್ಲೂ ಗಿಡವನ್ನು ನೆಟ್ಟಗೆ ನಿಲ್ಲಿಸುತ್ತವೆ. ಮಣ್ಣಿನಿಂದ ನೀರು ಮತ್ತು ಖನಿಜಾಂಶಗಳನ್ನು ಹೀರುತ್ತವೆ.</p>\n              </div>\n            "
          },
          {
            "id": "sec-2",
            "title": "ಎಲೆಗಳು: ಸಸ್ಯದ ಅಡುಗೆಮನೆ",
            "read_aloud": "ಹಸಿರು ಎಲೆಗಳು ಸೂರ್ಯನ ಬೆಳಕು, ನೀರು ಮತ್ತು ಇಂಗಾಲದ ಡೈಆಕ್ಸೈಡ್ ಬಳಸಿ ಆಹಾರ ತಯಾರಿಸುತ್ತವೆ. ಇದನ್ನು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ಎನ್ನುತ್ತಾರೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ: ಪ್ರಕೃತಿಯ ಅಡುಗೆಮನೆ</h4>\n                <p>ಎಲೆಗಳಲ್ಲಿ ಹಸಿರು ಕಣಗಳಿರುತ್ತವೆ. ಸೂರ್ಯನ ಬೆಳಕಿನ ಉಪಸ್ಥಿತಿಯಲ್ಲಿ ಅವು ಆಹಾರ ತಯಾರಿಸಿ ನಮಗೆ ಉಸಿರಾಡಲು ಶುದ್ಧ ಆಮ್ಲಜನಕವನ್ನು ನೀಡುತ್ತವೆ!</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "ಸಸ್ಯದ ಭಾಗ ಮತ್ತು ಅದರ ಕೆಲಸವನ್ನು ಹೊಂದಿಸಿ",
          "instructions": "ಭಾಗವನ್ನು ಅದರ ಸರಿಯಾದ ಕಾರ್ಯಕ್ಕೆ ಹೊಂದಿಸಿ.",
          "pairs": [
            {
              "id": "pt1",
              "left": "ಬೇರು",
              "right": "ನೀರು ಹೀರುವುದು ಮತ್ತು ಗಿಡಕ್ಕೆ ಆಧಾರ"
            },
            {
              "id": "pt2",
              "left": "ಕಾಂಡ",
              "right": "ನೀರು ಮತ್ತು ಆಹಾರ ಸಾಗಾಣಿಕೆ"
            },
            {
              "id": "pt3",
              "left": "ಎಲೆಗಳು",
              "right": "ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಆಹಾರ ತಯಾರಿಕೆ"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಬಳಸಿ ಸಸ್ಯಕ್ಕೆ ಆಹಾರ ತಯಾರಿಸುವ ಭಾಗ ಯಾವುದು?",
            "options": [
              {
                "id": "opt1",
                "text": "ಎಲೆಗಳು",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "ಬೇರುಗಳು",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "ತೊಗಟೆ",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "ಬೀಜಗಳು",
                "is_correct": false
              }
            ],
            "hint": "ಅವು ಹಸಿರಾಗಿರುತ್ತವೆ ಮತ್ತು ಗಿಡದ ಅಡುಗೆಮನೆ ಎಂದೆನಿಸಿಕೊಳ್ಳುತ್ತವೆ.",
            "explanation": "ನಿಖರ! ಎಲೆಗಳು ಸಸ್ಯದ ಆಹಾರ ಕಾರ್ಖಾನೆಗಳಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ."
          },
          {
            "id": "q2",
            "prompt": "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯ ಸಮಯದಲ್ಲಿ ಸಸ್ಯಗಳು ಗಾಳಿಗೆ ಯಾವ ಅನಿಲವನ್ನು ಬಿಡುಗಡೆ ಮಾಡುತ್ತವೆ?",
            "options": [
              {
                "id": "opt5",
                "text": "ಆಮ್ಲಜನಕ (Oxygen)",
                "is_correct": true
              },
              {
                "id": "opt6",
                "text": "ಹೊಗೆ",
                "is_correct": false
              },
              {
                "id": "opt7",
                "text": "ಇಂಗಾಲದ ಡೈಆಕ್ಸೈಡ್",
                "is_correct": false
              },
              {
                "id": "opt8",
                "text": "ಸಾರಜನಕ",
                "is_correct": false
              }
            ],
            "hint": "ಮಾನವರು ಮತ್ತು ಪ್ರಾಣಿಗಳು ಉಸಿರಾಡಲು ಅಗತ್ಯವಿರುವ ಪ್ರಾಣವಾಯು.",
            "explanation": "ಸರಿ! ಸಸ್ಯಗಳು ಆಮ್ಲಜನಕವನ್ನು ನೀಡುತ್ತವೆ, ಇದು ಜೀವಕೋಶಗಳಿಗೆ ಜೀವ ನೀಡುತ್ತದೆ."
          }
        ]
      },
      "hi": {
        "title": "पौधे के भाग और बीज का अंकुरण",
        "summary": "जड़, तना, पत्ती, फूल और बीज के अंकुरित होने का वैज्ञानिक अध्ययन।",
        "sections": [
          {
            "id": "sec-1",
            "title": "जमीन के नीचे के साथी: जड़ें",
            "read_aloud": "जड़ें पौधे को मिट्टी में मजबूती से थामे रखती हैं और पानी व पोषक तत्व सोखती हैं।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>जड़ों का काम</h4>\n                <p>मकान की नींव की तरह, जड़ें आँधी में भी पेड़ को गिरने नहीं देतीं और मिट्टी से पानी पीती हैं।</p>\n              </div>\n            "
          },
          {
            "id": "sec-2",
            "title": "पत्तियाँ: पौधे का रसोईघर",
            "read_aloud": "हरी पत्तियाँ धूप, पानी और हवा से भोजन बनाती हैं। इसे प्रकाश संश्लेषण कहते हैं।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>प्रकाश संश्लेषण</h4>\n                <p>पत्तियों में क्लोरोफिल होता है। वे धूप में भोजन बनाती हैं और हमें साँस लेने के लिए ताज़ा ऑक्सीजन देती हैं!</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "पौधे के अंग और उनके काम मिलाएँ",
          "instructions": "अंग पर क्लिक करें और उसके काम से मिलाएँ।",
          "pairs": [
            {
              "id": "pt1",
              "left": "जड़",
              "right": "पानी सोखना और सहारा देना"
            },
            {
              "id": "pt2",
              "left": "तना",
              "right": "पानी और भोजन पहुँचाना"
            },
            {
              "id": "pt3",
              "left": "पत्तियाँ",
              "right": "धूप से भोजन बनाना"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "पौधे का कौन सा भाग धूप से भोजन तैयार करता है?",
            "options": [
              {
                "id": "opt1",
                "text": "पत्तियाँ",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "जड़ें",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "छाल",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "बीज",
                "is_correct": false
              }
            ],
            "hint": "वे हरी होती हैं और पौधे की रसोई कहलाती हैं।",
            "explanation": "बिल्कुल सही! पत्तियाँ पौधे के लिए भोजन बनाती हैं।"
          }
        ]
      }
    }
  },
  {
    "id": "lesson-sci-c6",
    "grade_level": 6,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Simple Machines in the Village: Levers, Pulleys & Wheels",
    "slug": "simple-machines-levers-pulleys",
    "summary": "Discover how village handpumps, well pulleys, and crowbars use basic physics to make hard work easy.",
    "estimated_minutes": 18,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#0D9488",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Well Pulley (Wheel and Rope)",
        "type": "concept",
        "read_aloud": "A grooved wheel on an axle changes the direction of force so you can pull downward to lift a heavy bucket of water up.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Why Pull Downward to Lift Up?</h4>\n            <p>Lifting a 15-litre bucket directly from a 30-foot deep well hurts your back. But running the rope over a <strong>fixed pulley</strong> allows you to pull downward using your own body weight to help!</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Village Tool to the Machine Type",
      "instructions": "Match the tool to its machine category.",
      "pairs": [
        {
          "id": "p1",
          "left": "Village Well Wheel",
          "right": "Pulley"
        },
        {
          "id": "p2",
          "left": "Handpump Handle",
          "right": "Lever"
        },
        {
          "id": "p3",
          "left": "Bullock Cart Axle",
          "right": "Wheel and Axle"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What kind of simple machine is the handle of a village water handpump?",
        "options": [
          {
            "id": "opt1",
            "text": "A Class 1 Lever with a pivot fulcrum",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "An inclined plane ramp",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "A screw gear",
            "is_correct": false
          }
        ],
        "hint": "It pivots in the middle like a seesaw.",
        "explanation": "Correct! The handpump handle is a lever pivoting on a fulcrum."
      }
    ]
  },
  {
    "id": "lesson-soc-501",
    "grade_level": 6,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "Our Panchayati Raj: How Village Governance Works",
    "slug": "village-panchayat-governance",
    "summary": "Understand the Gram Sabha, the Sarpanch, and how villagers resolve community issues.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "submitted",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Voice of the Village: Gram Sabha",
        "type": "concept",
        "read_aloud": "The Gram Sabha is a meeting where all adult villagers gather to discuss water, roads, and village schools.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Every Villager Has a Voice</h4>\n            <p>In democratic India, rural self-governance begins at the <strong>Gram Sabha</strong>. Any resident aged 18 or above can participate, question the council, and vote on village priorities.</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Panchayat Roles",
      "instructions": "Click the governing body or role, then match its responsibility.",
      "pairs": [
        {
          "id": "pr1",
          "left": "Gram Sabha",
          "right": "Meeting of all adult voters in the village"
        },
        {
          "id": "pr2",
          "left": "Sarpanch / President",
          "right": "Elected head of the village council"
        },
        {
          "id": "pr3",
          "left": "Panchayat Secretary",
          "right": "Government officer recording decisions"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Who can be a member of the Gram Sabha in a village?",
        "options": [
          {
            "id": "opt1",
            "text": "All adult residents aged 18 and above who have the right to vote",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Only large landowners",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Only the school headmaster",
            "is_correct": false
          },
          {
            "id": "opt4",
            "text": "Only visitors from the city",
            "is_correct": false
          }
        ],
        "hint": "In a democracy, every adult citizen participates.",
        "explanation": "Correct! The Gram Sabha is the grassroots democratic assembly of all adult villagers."
      }
    ],
    "translations": {
      "kn": {
        "title": "ನಮ್ಮ ಪಂಚಾಯತ್ ರಾಜ್: ಗ್ರಾಮ ಆಡಳಿತದ ಕಾರ್ಯವಿಧಾನ",
        "summary": "ಗ್ರಾಮ ಸಭೆ, ಅಧ್ಯಕ್ಷರು ಮತ್ತು ಹಳ್ಳಿಯ ಕುಡಿಯುವ ನೀರು, ಶಾಲೆ ಮತ್ತು ರಸ್ತೆ ಸಮಸ್ಯೆಗಳನ್ನು ಬಗೆಹರಿಸುವ ವಿಧಾನವನ್ನು ತಿಳಿಯಿರಿ.",
        "sections": [
          {
            "id": "sec-1",
            "title": "ಹಳ್ಳಿಯ ಧ್ವನಿ: ಗ್ರಾಮ ಸಭೆ",
            "read_aloud": "ಗ್ರಾಮ ಸಭೆಯು ಹಳ್ಳಿಯ ಎಲ್ಲಾ ವಯಸ್ಕ ಮತದಾರರು ಒಟ್ಟಾಗಿ ಕುಳಿತು ಕುಡಿಯುವ ನೀರು, ರಸ್ತೆ ಮತ್ತು ಶಾಲೆಯ ಅಭಿವೃದ್ಧಿಯ ಬಗ್ಗೆ ಚರ್ಚಿಸುವ ಸಭೆಯಾಗಿದೆ.",
            "content": "\n              <div class=\"learning-card\">\n                <h4>ಪ್ರತಿಯೊಬ್ಬ ಗ್ರಾಮಸ್ಥನಿಗೂ ಧ್ವನಿಯಿದೆ</h4>\n                <p>ಪ್ರಜಾಪ್ರಭುತ್ವ ಭಾರತದಲ್ಲಿ ಸ್ಥಳೀಯ ಆಡಳಿತವು <strong>ಗ್ರಾಮ ಸಭೆ</strong>ಯಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ೧೮ ವರ್ಷ ತುಂಬಿದ ಯಾವುದೇ ಗ್ರಾಮಸ್ಥರು ಇದರಲ್ಲಿ ಭಾಗವಹಿಸಿ ಪ್ರಶ್ನಿಸಬಹುದು.</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "ಪಂಚಾಯತ್ ಜವಾಬ್ದಾರಿಗಳನ್ನು ಹೊಂದಿಸಿ",
          "instructions": "ಸ್ಥಾನವನ್ನು ಅದರ ಕಾರ್ಯದೊಂದಿಗೆ ಹೊಂದಿಸಿ.",
          "pairs": [
            {
              "id": "pr1",
              "left": "ಗ್ರಾಮ ಸಭೆ",
              "right": "ಹಳ್ಳಿಯ ಎಲ್ಲಾ ವಯಸ್ಕ ಮತದಾರರ ಸಭೆ"
            },
            {
              "id": "pr2",
              "left": "ಗ್ರಾಮ ಪಂಚಾಯತಿ ಅಧ್ಯಕ್ಷರು",
              "right": "ಚುನಾಯಿತ ಗ್ರಾಮ ಮುಖ್ಯಸ್ಥರು"
            },
            {
              "id": "pr3",
              "left": "ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿ (PDO)",
              "right": "ಸರ್ಕಾರಿ ನಿರ್ಣಯ ದಾಖಲಿಸುವ ಅಧಿಕಾರಿ"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "ಗ್ರಾಮ ಸಭೆಯ ಸದಸ್ಯರಾಗಲು ಯಾರು ಅರ್ಹರು?",
            "options": [
              {
                "id": "opt1",
                "text": "ಮತದಾನದ ಹಕ್ಕು ಹೊಂದಿರುವ ೧೮ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಗ್ರಾಮಸ್ಥರು",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "ಕೇವಲ ಶ್ರೀಮಂತ ಭೂಮಾಲೀಕರು",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "ಕೇವಲ ಶಾಲಾ ಮುಖ್ಯೋಪಾಧ್ಯಾಯರು",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "ನಗರದಿಂದ ಬಂದ ಅತಿಥಿಗಳು",
                "is_correct": false
              }
            ],
            "hint": "ಪ್ರಜಾಪ್ರಭುತ್ವದಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬ ವಯಸ್ಕ ನಾಗರಿಕನೂ ಭಾಗವಹಿಸುತ್ತಾನೆ.",
            "explanation": "ಸರಿ! ಗ್ರಾಮ ಸಭೆಯು ಹಳ್ಳಿಯ ಎಲ್ಲಾ ವಯಸ್ಕ ನಾಗರಿಕರ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಸಭೆಯಾಗಿದೆ."
          }
        ]
      },
      "hi": {
        "title": "हमारा पंचायती राज: ग्राम प्रशासन की कार्यप्रणाली",
        "summary": "ग्राम सभा, सरपंच और गाँव के विकास कार्यों की निर्णय प्रक्रिया समझें।",
        "sections": [
          {
            "id": "sec-1",
            "title": "गाँव की आवाज़: ग्राम सभा",
            "read_aloud": "ग्राम सभा वह बैठक है जहाँ गाँव के सभी वयस्क नागरिक मिलकर पानी, सड़क और स्कूल के मुद्दों पर चर्चा करते हैं।",
            "content": "\n              <div class=\"learning-card\">\n                <h4>गाँव का हर नागरिक महत्वपूर्ण है</h4>\n                <p>लोकतंत्र में स्थानीय स्वशासन <strong>ग्राम सभा</strong> से शुरू होता है। १८ वर्ष या उससे अधिक आयु का कोई भी नागरिक इसमें भाग ले सकता है।</p>\n              </div>\n            "
          }
        ],
        "interactive_activity": {
          "title": "पंचायती राज के पदों को उनके काम से मिलाएँ",
          "instructions": "पद पर क्लिक करें और उसके सही काम से मिलाएँ।",
          "pairs": [
            {
              "id": "pr1",
              "left": "ग्राम सभा",
              "right": "गाँव के सभी वयस्क मतदाताओं की सभा"
            },
            {
              "id": "pr2",
              "left": "सरपंच",
              "right": "गाँव का निर्वाचित मुखिया"
            },
            {
              "id": "pr3",
              "left": "पंचायत सचिव",
              "right": "सरकारी रिकॉर्ड रखने वाला अधिकारी"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "prompt": "गाँव में ग्राम सभा का सदस्य कौन बन सकता है?",
            "options": [
              {
                "id": "opt1",
                "text": "१८ वर्ष या उससे अधिक आयु के सभी वयस्क मतदाता",
                "is_correct": true
              },
              {
                "id": "opt2",
                "text": "केवल बड़े ज़मींदार",
                "is_correct": false
              },
              {
                "id": "opt3",
                "text": "केवल स्कूल के हेडमास्टर",
                "is_correct": false
              },
              {
                "id": "opt4",
                "text": "शहर से आए मेहमान",
                "is_correct": false
              }
            ],
            "hint": "लोकतंत्र में हर वयस्क नागरिक को अधिकार होता है।",
            "explanation": "बिल्कुल सही! ग्राम सभा गाँव के सभी वयस्क नागरिकों की आम सभा है।"
          }
        ]
      }
    }
  },
  {
    "id": "lesson-math-c7",
    "grade_level": 7,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Ratios and Comparing Quantities in Farm Work",
    "slug": "ratios-comparing-quantities-farming",
    "summary": "Apply ratios and proportions to seed-to-land sowing, water mixtures, and profit margins.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "Mixing Compost to Soil in Proper Ratio",
        "type": "concept",
        "read_aloud": "A ratio compares two quantities by division. A 1 to 3 ratio means 1 bucket of compost for every 3 buckets of soil.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Understanding Proportions</h4>\n            <p>For high yield in vegetable beds, the agricultural expert advises a ratio of <strong>1 : 4</strong> (1 part cow dung compost to 4 parts river soil).</p>\n            <p>If you have 5 buckets of compost, how many buckets of soil do you need?</p>\n            <p>5 × 4 = <strong>20 buckets of soil!</strong></p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match Equivalent Ratios",
      "instructions": "Find the simplified or equivalent ratio.",
      "pairs": [
        {
          "id": "p1",
          "left": "2 : 6",
          "right": "1 : 3"
        },
        {
          "id": "p2",
          "left": "10 : 15",
          "right": "2 : 3"
        },
        {
          "id": "p3",
          "left": "25 : 50",
          "right": "1 : 2"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "If a village tubewell pumps 120 litres of water in 3 minutes, what is the rate per minute?",
        "options": [
          {
            "id": "opt1",
            "text": "40 litres per minute",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "30 litres per minute",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "60 litres per minute",
            "is_correct": false
          }
        ],
        "hint": "Divide 120 by 3.",
        "explanation": "Correct! 120 ÷ 3 = 40 litres per minute."
      }
    ]
  },
  {
    "id": "lesson-sci-c7",
    "grade_level": 7,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Nutrition in Animals: How Cattle Digest Tough Grass",
    "slug": "nutrition-in-animals-cattle-rumination",
    "summary": "Explore the 4-chambered stomach of cows and buffaloes and how rumination breaks down cellulose.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#0D9488",
    "sections": [
      {
        "id": "sec-1",
        "title": "Why Do Cows Chew Continuously When Resting?",
        "type": "concept",
        "read_aloud": "Cows quickly swallow grass into the rumen. Later, they bring back small lumps called cud to chew thoroughly.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>The Secret of Rumination</h4>\n            <p>Grass is rich in tough plant fibers called <strong>cellulose</strong>. Humans cannot digest cellulose, but cattle have a specialized stomach with 4 chambers: <em>Rumen, Reticulum, Omasum, and Abomasum</em>.</p>\n            <p>Microbes in the rumen ferment grass so the cow can absorb nutrients!</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match Ruminant Digestion Terms",
      "instructions": "Click the term, then match its function.",
      "pairs": [
        {
          "id": "p1",
          "left": "Rumen",
          "right": "Large first stomach chamber with cellulose-digesting bacteria"
        },
        {
          "id": "p2",
          "left": "Cud",
          "right": "Partially digested food brought back to mouth to chew"
        },
        {
          "id": "p3",
          "left": "Abomasum",
          "right": "True stomach where acid and gastric juices break food"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Why can cows digest tough straw and wild grass, whereas humans cannot?",
        "options": [
          {
            "id": "opt1",
            "text": "Because their rumen contains special symbiotic bacteria that digest cellulose",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Because cows have sharper teeth than humans",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Because cows drink hot water",
            "is_correct": false
          }
        ],
        "hint": "Think about microorganisms living inside their large rumen.",
        "explanation": "Correct! Rumen bacteria produce cellulase enzymes to break down tough plant walls."
      }
    ]
  },
  {
    "id": "lesson-sci-c8",
    "grade_level": 8,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Crop Production & Modern Sustainable Agriculture",
    "slug": "crop-production-sustainable-farming",
    "summary": "Learn crop cycles (Kharif vs Rabi), drip irrigation techniques, and organic vermicomposting.",
    "estimated_minutes": 25,
    "difficulty_level": "advanced",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#0D9488",
    "sections": [
      {
        "id": "sec-1",
        "title": "Kharif and Rabi Agricultural Seasons",
        "type": "concept",
        "read_aloud": "Kharif crops are sown in the rainy monsoon season (June to September). Rabi crops are sown in the winter season (October to March).",
        "content": "\n          <div class=\"learning-card\">\n            <h4>The Rhythm of Indian Agriculture</h4>\n            <ul>\n              <li><strong>Kharif Crops (Monsoon):</strong> Paddy (Rice), Maize, Soybean, Groundnut, Cotton. These require abundant rainwater.</li>\n              <li><strong>Rabi Crops (Winter):</strong> Wheat, Gram (Chana), Mustard, Peas. Sown as the monsoon recedes.</li>\n            </ul>\n          </div>\n        "
      },
      {
        "id": "sec-2",
        "title": "Water Conservation: Drip Irrigation",
        "type": "concept",
        "read_aloud": "Drip irrigation delivers water drop by drop directly to the plant roots, saving up to 70 percent water compared to flood irrigation.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Every Drop Matters</h4>\n            <p>In semi-arid villages where groundwater is low, <strong>Drip Irrigation</strong> uses narrow pipes with drippers right at root zones. This prevents weed growth, stops evaporation loss, and saves electricity!</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Crop to its Season",
      "instructions": "Click the crop, then match it to Kharif or Rabi.",
      "pairs": [
        {
          "id": "p1",
          "left": "Paddy (Rice)",
          "right": "Kharif (Monsoon Crop)"
        },
        {
          "id": "p2",
          "left": "Wheat (Gehun)",
          "right": "Rabi (Winter Crop)"
        },
        {
          "id": "p3",
          "left": "Mustard (Sarson)",
          "right": "Rabi (Winter Crop)"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which modern irrigation technique is best suited for water-scarce drought regions?",
        "options": [
          {
            "id": "opt1",
            "text": "Drip Irrigation system",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Open flood canal irrigation",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Spraying with fire hose",
            "is_correct": false
          }
        ],
        "hint": "It delivers water drop by drop straight to plant roots.",
        "explanation": "Correct! Drip irrigation minimizes evaporation and runoff, conserving maximum water."
      }
    ]
  },
  {
    "id": "lesson-soc-c8",
    "grade_level": 8,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "The Indian Constitution & Right to Education (RTE)",
    "slug": "indian-constitution-right-to-education",
    "summary": "Discover fundamental rights, equality before law, and every rural child’s legal right to free education.",
    "estimated_minutes": 25,
    "difficulty_level": "advanced",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "Education as a Fundamental Right (Article 21A)",
        "type": "concept",
        "read_aloud": "The 86th Constitutional Amendment guarantees free and compulsory education for all children aged 6 to 14 years.",
        "content": "\n          <div class=\"learning-card\">\n            <h4>Every Child Belongs in School</h4>\n            <p>Under the <strong>Right of Children to Free and Compulsory Education (RTE) Act 2009</strong>, every child in every village has the constitutional right to attend a well-equipped neighborhood school without paying any fees or charges.</p>\n            <p>It also provides free midday meals, textbooks, and uniforms to support rural families!</p>\n          </div>\n        "
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match Constitutional Provisions to their Meaning",
      "instructions": "Match the legal provision to its constitutional safeguard.",
      "pairs": [
        {
          "id": "p1",
          "left": "Article 21A",
          "right": "Right to Free and Compulsory Education (Ages 6–14)"
        },
        {
          "id": "p2",
          "left": "Article 14",
          "right": "Equality before Law for all Citizens"
        },
        {
          "id": "p3",
          "left": "Midday Meal Scheme",
          "right": "Nutritional support to improve school attendance"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What age group of children is guaranteed free and compulsory education under Article 21A?",
        "options": [
          {
            "id": "opt1",
            "text": "6 to 14 years",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "18 to 25 years",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "1 to 5 years",
            "is_correct": false
          }
        ],
        "hint": "Primary and upper-primary schooling years.",
        "explanation": "Correct! Article 21A guarantees free education for all children aged 6 to 14."
      }
    ]
  }
];
