// VidyaSetu Comprehensive Multilingual Curriculum
// Complete coverage across ALL 8 Standards (Class 1 to 8) and ALL 6 Subjects:
// 1. Mathematics (math)
// 2. Environmental Studies (evs)
// 3. Science (sci)
// 4. English & Vocabulary (eng)
// 5. Regional Languages (reg)
// 6. Social Studies (soc)

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
    "id": "lesson-evs-c1",
    "grade_level": 1,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "Our Living Village: Domestic Animals, Green Trees & Ponds",
    "slug": "our-living-village-trees-water-pond",
    "summary": "Look around our village to identify tall banyan trees, fresh water ponds, and gentle domestic animals.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "Living Sights Around Our Village",
        "type": "concept",
        "read_aloud": "Look around our green hamlet. Tall trees provide shade, ponds give water, and animals live with us.",
        "content": "<div class=\"learning-card\"><h4>Nature in Our Village</h4><p>When you walk out of your home in the morning, notice the living wonders around you:</p><ul><li>🌳 <strong>Banyan & Neem Trees:</strong> Give cool shade to travelers and cattle.</li><li>🦆 <strong>Village Pond:</strong> Where ducks swim and buffaloes cool off.</li><li>🐄 <strong>Cows & Calves:</strong> Our gentle friends in the backyard.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Living Thing to Where it Thrives",
      "instructions": "Click the creature or plant, then match where it lives.",
      "pairs": [
        {
          "id": "p1",
          "left": "Duck",
          "right": "Village Pond Water"
        },
        {
          "id": "p2",
          "left": "Parrot",
          "right": "Green Neem Tree"
        },
        {
          "id": "p3",
          "left": "Calf",
          "right": "Cattle Shed (Goshala)"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which tree provides cool shade in the village center?",
        "options": [
          {
            "id": "opt1",
            "text": "Banyan Tree",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Plastic Pole",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Stone Wall",
            "is_correct": false
          }
        ],
        "hint": "A large tree with hanging roots.",
        "explanation": "Correct! The large banyan tree provides cool shade for everyone."
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
    "id": "lesson-reg-c1",
    "grade_level": 1,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Aksharamala: First Vowels (Swaragalu) & Village Songs",
    "slug": "aksharamala-first-vowels-rhymes",
    "summary": "Sing the traditional alphabet song and recognize the opening vowels of regional Indian languages.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Sweet Sounds of the Mother Tongue",
        "type": "concept",
        "read_aloud": "Sing the opening letters: Aa, Aa, Ee, Ee! Repeat aloud with rhythmic claps.",
        "content": "<div class=\"learning-card\"><h4>Vowels and Rhythms</h4><p>Every language begins with sweet, open vowels that flow easily like a stream:</p><div style=\"display:flex; justify-content:center; gap:20px; font-size:28px; font-weight:bold; color:#7C3AED; margin:20px 0;\"><span>ಅ / अ</span><span>ಆ / आ</span><span>ಇ / इ</span><span>ಈ / ई</span></div><p>Practice singing them with your teacher and classmates under the morning sun!</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Letter to the Object",
      "instructions": "Match the first letter sound to the word.",
      "pairs": [
        {
          "id": "p1",
          "left": "ಅ (A)",
          "right": "ಅರಸ (King) / अनार (Pomegranate)"
        },
        {
          "id": "p2",
          "left": "ಆ (Aa)",
          "right": "ಆನೆ (Elephant) / आम (Mango)"
        },
        {
          "id": "p3",
          "left": "ಇ (I)",
          "right": "ಇಲಿ (Mouse) / इमली (Tamarind)"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which sweet fruit starts with the sound \"Aa\" (ಆ / आ)?",
        "options": [
          {
            "id": "opt1",
            "text": "Aam / Aane (Mango)",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Karela (Bittergourd)",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Neem",
            "is_correct": false
          }
        ],
        "hint": "The king of summer fruits.",
        "explanation": "Correct! Aam / Aane starts with the long vowel Aa!"
      }
    ]
  },
  {
    "id": "lesson-sci-c1",
    "grade_level": 1,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Our Five Senses: Eyes, Ears, Nose, Tongue, and Hands",
    "slug": "five-senses-sight-sound-touch",
    "summary": "Discover how we see colors, hear bird chirps, smell sweet jasmine, taste fruits, and feel soft petals.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#1D7873",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Five Wonderful Gifts",
        "type": "concept",
        "read_aloud": "Eyes to see, ears to hear, nose to smell, tongue to taste, and skin to feel touch!",
        "content": "<div class=\"learning-card\"><h4>How We Experience Our World</h4><p>We learn about everything around us using our five miraculous sense organs:</p><ul><li>👀 <strong>Eyes:</strong> See the golden sunset and ripe yellow mangoes.</li><li>👂 <strong>Ears:</strong> Hear morning rooster crows and temple bells.</li><li>👃 <strong>Nose:</strong> Smell sweet jasmine flowers and wet rain soil.</li><li>👅 <strong>Tongue:</strong> Taste sweet jaggery and sour tamarind.</li><li>✋ <strong>Skin:</strong> Feel cool well water and gentle breeze.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Sense Organ to its Power",
      "instructions": "Click the organ, then click what it senses.",
      "pairs": [
        {
          "id": "p1",
          "left": "👀 Eyes",
          "right": "Seeing colorful rangoli patterns"
        },
        {
          "id": "p2",
          "left": "👂 Ears",
          "right": "Hearing flute music and bird songs"
        },
        {
          "id": "p3",
          "left": "👃 Nose",
          "right": "Smelling fragrant wet earth after rain"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which sense organ tells you that jaggery tastes sweet?",
        "options": [
          {
            "id": "opt1",
            "text": "Tongue",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Ears",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Elbow",
            "is_correct": false
          }
        ],
        "hint": "You use it while eating food.",
        "explanation": "Correct! Our tongue has taste buds to taste sweet, sour, salty, and bitter."
      }
    ]
  },
  {
    "id": "lesson-soc-c1",
    "grade_level": 1,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "My Family and Helping Hands in Our Village",
    "slug": "family-and-helping-hands",
    "summary": "Learn about grandmothers, parents, siblings, and how everyone helps each other in our rural home.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "Living Together with Love",
        "type": "concept",
        "read_aloud": "Mother, father, brother, sister, grandfather, and grandmother make a loving family.",
        "content": "<div class=\"learning-card\"><h4>Our Cozy Home</h4><p>In our village home, everyone has a special role:</p><ul><li>👵 <strong>Grandmother (Aaji/Dadi):</strong> Tells stories and makes sweet porridge.</li><li>🌾 <strong>Parents:</strong> Work in the farm field and prepare delicious food.</li><li>🧒 <strong>Children:</strong> Help sweep the courtyard and feed the baby calf.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Family Member to Their Care",
      "instructions": "Click the family member, then match how they care for us.",
      "pairs": [
        {
          "id": "p1",
          "left": "Grandmother",
          "right": "Tells bedtime folklore stories"
        },
        {
          "id": "p2",
          "left": "Parents",
          "right": "Farm food and nurture the home"
        },
        {
          "id": "p3",
          "left": "Elder Sister",
          "right": "Helps with slate writing"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Who helps us learn our first alphabets and stories at home?",
        "options": [
          {
            "id": "opt1",
            "text": "Our loving family members",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "A stranger on the highway",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "No one",
            "is_correct": false
          }
        ],
        "hint": "Think of who lives under your roof.",
        "explanation": "Correct! Our parents and grandparents guide our first steps."
      }
    ]
  },
  {
    "id": "lesson-eng-c2",
    "grade_level": 2,
    "subject_id": "eng",
    "subject_name": "English & Vocabulary",
    "subject_code": "ENG",
    "title": "Action Words in the Village: Run, Jump, Sing & Draw",
    "slug": "action-words-run-jump-sing",
    "summary": "Learn dynamic action verbs describing games we play and chores we do in the rural countryside.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#D97706",
    "sections": [
      {
        "id": "sec-1",
        "title": "Verbs Make Things Move!",
        "type": "concept",
        "read_aloud": "What are you doing? I run, I jump, I dance, I read, I write!",
        "content": "<div class=\"learning-card\"><h4>Action Words (Verbs)</h4><p>An action word tells what someone or something is doing:</p><ul><li>🏃 Aarav <strong>runs</strong> across the green field.</li><li>💧 Raindrops <strong>fall</strong> from gray clouds.</li><li>🐦 Birds <strong>sing</strong> melodiously in the grove.</li><li>📖 Pooja <strong>reads</strong> her colorful storybook.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Person/Creature to the Action",
      "instructions": "Match the subject to what it does.",
      "pairs": [
        {
          "id": "p1",
          "left": "Farmer",
          "right": "Ploughs the fertile field"
        },
        {
          "id": "p2",
          "left": "Peacock",
          "right": "Dances when rain clouds arrive"
        },
        {
          "id": "p3",
          "left": "Fish",
          "right": "Swims in the clear pond"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which of the following is an action word (verb)?",
        "options": [
          {
            "id": "opt1",
            "text": "Jump",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Table",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Yellow",
            "is_correct": false
          }
        ],
        "hint": "Something you can do with your legs.",
        "explanation": "Correct! \"Jump\" is an action verb."
      }
    ]
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
    "id": "lesson-reg-c2",
    "grade_level": 2,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Consonants (Vyanjanagalu) & Common Daily Words",
    "slug": "consonants-vyanjanagalu-daily-words",
    "summary": "Build two-letter and three-letter words using standard consonants from our village environment.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Joining Letters to Form Words",
        "type": "concept",
        "read_aloud": "Ka for Kamala, Ga for Gaja (Elephant), Gha for Ghata (Pot). Let us join letters to make words!",
        "content": "<div class=\"learning-card\"><h4>Making Words from Consonants</h4><p>When consonants join together, they form meaningful words:</p><div style=\"display:flex; justify-content:center; gap:20px; font-size:24px; font-weight:bold; color:#7C3AED; margin:20px 0;\"><span>ಕ + ಲ + ಮ = ಕಲಮ (Pen)</span></div><p>Practice writing these words on your slate with slate pencil (balapa)!</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Letter to its Word",
      "instructions": "Click the consonant, then match its word.",
      "pairs": [
        {
          "id": "p1",
          "left": "ಕ / क",
          "right": "ಕಮಲ (Lotus) / कमल"
        },
        {
          "id": "p2",
          "left": "ಗ / ग",
          "right": "ಗಜ (Elephant) / गज"
        },
        {
          "id": "p3",
          "left": "ಘ / घ",
          "right": "ಘಟ (Water Pot) / घट"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What word do you get by joining Ka + Ma + La?",
        "options": [
          {
            "id": "opt1",
            "text": "Kamala (Lotus)",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Kalam (Pen)",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Gaja (Elephant)",
            "is_correct": false
          }
        ],
        "hint": "The sacred national flower.",
        "explanation": "Correct! Ka + Ma + La makes Kamala (Lotus)!"
      }
    ]
  },
  {
    "id": "lesson-sci-c2",
    "grade_level": 2,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Day, Night and the Moon: Sun Shadows & Night Sky",
    "slug": "day-night-sun-shadows-sky",
    "summary": "Watch how our shadow changes from morning to noon and why the sun rises in the east and sets in the west.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#1D7873",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Story of Shadows and the Sun",
        "type": "concept",
        "read_aloud": "In the morning the sun is low, so shadows are long. At noon, the sun is high overhead, so shadows are short!",
        "content": "<div class=\"learning-card\"><h4>The Sun and Your Shadow</h4><p>Stand in the school ground and observe your shadow during different times:</p><ul><li>🌅 <strong>Morning:</strong> Sun rises in the East; your shadow points West and is very long.</li><li>☀️ <strong>Noon:</strong> Sun is directly overhead; your shadow is short and beneath your feet.</li><li>🌇 <strong>Evening:</strong> Sun sets in the West; your shadow points East.</li><li>🌙 <strong>Night:</strong> The bright moon and twinkling stars light up our quiet village!</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Time of Day to its Shadow",
      "instructions": "Match the sun position to the shadow length.",
      "pairs": [
        {
          "id": "p1",
          "left": "Early Morning",
          "right": "Long shadow pointing West"
        },
        {
          "id": "p2",
          "left": "Noon (12 PM)",
          "right": "Short shadow directly below"
        },
        {
          "id": "p3",
          "left": "Late Evening",
          "right": "Long shadow pointing East"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Where does the bright sun rise every morning?",
        "options": [
          {
            "id": "opt1",
            "text": "In the East",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "In the West",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Underground",
            "is_correct": false
          }
        ],
        "hint": "Facing the morning rays.",
        "explanation": "Correct! The sun rises in the East every morning."
      }
    ]
  },
  {
    "id": "lesson-soc-c2",
    "grade_level": 2,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "Festivals We Celebrate Together in Our Village",
    "slug": "festivals-we-celebrate-together",
    "summary": "Discover how Sankranti/Pongal, Deepavali, Eid, and local Jathre bring unity, joy, and delicious sweets.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Joy of Celebration",
        "type": "concept",
        "read_aloud": "Festivals bring friends and families together to share sweets, wear new clothes, and celebrate nature.",
        "content": "<div class=\"learning-card\"><h4>Harvest and Joyous Festivals</h4><p>Our rural festivals are deeply connected to the harvest and the seasons:</p><ul><li>🌾 <strong>Makara Sankranti / Pongal:</strong> Celebrating the harvest of fresh sugarcane, sesame, and rice. Cattle are decorated and worshipped!</li><li>🪔 <strong>Deepavali:</strong> The festival of earthen lamps and joy.</li><li>🌙 <strong>Eid:</strong> Sharing sweet sheer-khurma with all neighbors.</li><li>🎪 <strong>Village Jathre / Fair:</strong> Giant wheels, toys, and cultural drama.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Festival to its Special Tradition",
      "instructions": "Click the festival, then match its tradition.",
      "pairs": [
        {
          "id": "p1",
          "left": "Sankranti / Pongal",
          "right": "Decorating bullocks & sharing sesame jaggery"
        },
        {
          "id": "p2",
          "left": "Deepavali",
          "right": "Lighting earthen oil lamps (Diyas)"
        },
        {
          "id": "p3",
          "left": "Village Jathre",
          "right": "Chariot procession and colorful rural fair"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which harvest festival honors farm cattle and newly harvested rice?",
        "options": [
          {
            "id": "opt1",
            "text": "Sankranti / Pongal",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Exam day",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Summer vacation",
            "is_correct": false
          }
        ],
        "hint": "Celebrated in January with sugarcane.",
        "explanation": "Correct! Makara Sankranti / Pongal is the great harvest festival."
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
    "id": "lesson-evs-c3",
    "grade_level": 3,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "Water Around Us: Wells, Step-Wells & Village Tanks",
    "slug": "water-around-us-wells-tanks",
    "summary": "Understand how rain fills village tanks (kere/talab), replenishes open wells, and keeps farm soil fertile.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Lifeline of the Village",
        "type": "concept",
        "read_aloud": "Without water, crops wither and animals thirst. We must keep our open wells and tanks clean!",
        "content": "<div class=\"learning-card\"><h4>Sources of Clean Water</h4><p>Where does our village get water every day?</p><ul><li>🌧️ <strong>Monsoon Rain:</strong> The primary source that refills underground aquifers.</li><li>🧱 <strong>Open Dug Wells:</strong> Reaching cool underground freshwater.</li><li>🌊 <strong>Village Tank (Kere/Talab):</strong> Stores rainwater for irrigating paddy and sugarcane.</li></ul><p><strong>Rule:</strong> Never wash clothes or dump trash near drinking water sources!</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Water Source to its Benefit",
      "instructions": "Click the source, then match its purpose.",
      "pairs": [
        {
          "id": "p1",
          "left": "Village Tank (Talab)",
          "right": "Stores irrigation water for crop fields"
        },
        {
          "id": "p2",
          "left": "Deep Borewell",
          "right": "Pumps clean drinking water to overhead tank"
        },
        {
          "id": "p3",
          "left": "Rooftop Rain Gutter",
          "right": "Harvests rainwater for household cleaning"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What is the primary natural source of all freshwater in our country?",
        "options": [
          {
            "id": "opt1",
            "text": "Monsoon Rain",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Water Tanker Truck",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Plastic Bottles",
            "is_correct": false
          }
        ],
        "hint": "It falls from clouds in the sky.",
        "explanation": "Correct! Monsoon rainfall is the source that recharges all groundwater and lakes."
      }
    ]
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
    "id": "lesson-reg-c3",
    "grade_level": 3,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Animal Wisdom Tales: Panchatantra in Regional Tongue",
    "slug": "animal-wisdom-panchatantra-tales",
    "summary": "Read classic fable stories of the clever crow, the grateful lion, and the foolish tortoise to learn moral values.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Stories That Teach Wisdom",
        "type": "concept",
        "read_aloud": "Through simple stories of forest animals, wise ancient scholars taught patience, friendship, and truth.",
        "content": "<div class=\"learning-card\"><h4>The Thirsty Crow (ಬುದ್ಧಿವಂತ ಕಾಗೆ / चतुर कौआ)</h4><p>On a hot summer afternoon, a crow was very thirsty. He spotted a pitcher with a little water at the bottom.</p><p>His beak could not reach it. What did he do? He picked small pebbles one by one with his beak and dropped them into the pot until the water level rose!</p><p><strong>Moral:</strong> Where there is a will, there is a way!</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Fable to its Moral",
      "instructions": "Click the story title, then match its lesson.",
      "pairs": [
        {
          "id": "p1",
          "left": "The Thirsty Crow",
          "right": "Think smartly when facing difficulties"
        },
        {
          "id": "p2",
          "left": "The Lion and the Mouse",
          "right": "Even small friends can be of big help"
        },
        {
          "id": "p3",
          "left": "The Tortoise and the Hare",
          "right": "Slow and steady wins the race"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What did the thirsty crow drop into the water pitcher?",
        "options": [
          {
            "id": "opt1",
            "text": "Small smooth pebbles",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Leaves",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Dry sand",
            "is_correct": false
          }
        ],
        "hint": "Heavy stones that sink.",
        "explanation": "Correct! Dropping heavy pebbles raised the water level."
      }
    ]
  },
  {
    "id": "lesson-sci-c3",
    "grade_level": 3,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Types of Animals: Herbivores, Carnivores & Omnivores",
    "slug": "animal-diet-types-herbivores-carnivores",
    "summary": "Classify animals by what they eat: plant-eaters (cows/goats), meat-eaters (tigers/hawks), and both (crows/humans).",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#1D7873",
    "sections": [
      {
        "id": "sec-1",
        "title": "What Do Animals Eat?",
        "type": "concept",
        "read_aloud": "Herbivores eat leaves and grass. Carnivores hunt meat. Omnivores eat both plants and meat!",
        "content": "<div class=\"learning-card\"><h4>Classifying Animals by Diet</h4><ul><li>🌿 <strong>Herbivores (Plant Eaters):</strong> Cow, goat, deer, elephant, rabbit. They have flat teeth to grind grass.</li><li>🥩 <strong>Carnivores (Meat Eaters):</strong> Tiger, leopard, eagle, snake. They have sharp teeth or beaks to tear flesh.</li><li>🍲 <strong>Omnivores (Both):</strong> Crow, bear, dog, human. They eat grains, fruits, and small creatures.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Animal to its Diet Group",
      "instructions": "Click the creature, then match its dietary category.",
      "pairs": [
        {
          "id": "p1",
          "left": "Cow & Buffalo",
          "right": "Herbivore (Eats grass and hay)"
        },
        {
          "id": "p2",
          "left": "Tiger & Owl",
          "right": "Carnivore (Hunts other creatures)"
        },
        {
          "id": "p3",
          "left": "Crow & Bear",
          "right": "Omnivore (Eats both plants & meat)"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "To which group does a goat belong?",
        "options": [
          {
            "id": "opt1",
            "text": "Herbivore",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Carnivore",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Aquatic predator",
            "is_correct": false
          }
        ],
        "hint": "Goats love nibbling green tree leaves.",
        "explanation": "Correct! Goats eat only plant matter, making them herbivores."
      }
    ]
  },
  {
    "id": "lesson-soc-c3",
    "grade_level": 3,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "Village Helping Hands: Potters, Weavers, Farmers & Nurses",
    "slug": "village-helping-hands-occupations",
    "summary": "Appreciate the vital workers who keep our rural community self-reliant, healthy, and prosperous.",
    "estimated_minutes": 12,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "Occupations That Build Our Village",
        "type": "concept",
        "read_aloud": "Every occupation is dignified. The farmer grows grain, the potter shapes clay, the nurse heals sickness.",
        "content": "<div class=\"learning-card\"><h4>Community Helpers</h4><ul><li>🌾 <strong>Farmer (Kisan/Raitha):</strong> Tills soil to produce food grains for the entire country.</li><li>🏺 <strong>Potter (Kumbhara/Kumhar):</strong> Shapes clay on the wheel into cooling water pots (matkas).</li><li>🧶 <strong>Weaver (Nekar/Bunkar):</strong> Weaves cotton threads into colorful saris and towels.</li><li>🩺 <strong>ASHA Worker / Village Nurse:</strong> Gives vaccines and ensures mothers and babies stay healthy.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Helper to Their Tool",
      "instructions": "Click the worker, then match their tool of trade.",
      "pairs": [
        {
          "id": "p1",
          "left": "Potter",
          "right": "Rotating potter wheel & wet clay"
        },
        {
          "id": "p2",
          "left": "Farmer",
          "right": "Plough (Nenjilu) and bullock pair"
        },
        {
          "id": "p3",
          "left": "Nurse / Doctor",
          "right": "Thermometer and health kit"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Who helps our village children get timely vaccinations and medicines?",
        "options": [
          {
            "id": "opt1",
            "text": "The Village ASHA / Health Worker",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "The Cinema Actor",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "The Toy Seller",
            "is_correct": false
          }
        ],
        "hint": "A dedicated health worker in every village.",
        "explanation": "Correct! The village health worker cares for health and wellness."
      }
    ]
  },
  {
    "id": "lesson-eng-c4",
    "grade_level": 4,
    "subject_id": "eng",
    "subject_name": "English & Vocabulary",
    "subject_code": "ENG",
    "title": "Naming Words and Describing Words: Village Nouns and Adjectives",
    "slug": "village-nouns-and-adjectives",
    "summary": "Expand vocabulary by pairing village nouns (tree, well, sky) with colorful descriptive adjectives.",
    "estimated_minutes": 15,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#D97706",
    "sections": [
      {
        "id": "sec-1",
        "title": "Painting Pictures with Words",
        "type": "concept",
        "read_aloud": "A noun names a person, place, or thing. An adjective describes how it looks, feels, or sounds!",
        "content": "<div class=\"learning-card\"><h4>Nouns & Adjectives in the Village</h4><p>Look at how descriptive adjectives bring village sentences to life:</p><ul><li>The <strong>ancient</strong> (adjective) banyan tree (noun).</li><li>The <strong>sweet</strong> (adjective) sugarcane juice (noun).</li><li>The <strong>bumpy</strong> (adjective) bullock cart road (noun).</li><li>The <strong>deep</strong> (adjective) stone well (noun).</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Noun to its Fitting Adjective",
      "instructions": "Click the noun, then match the best describing word.",
      "pairs": [
        {
          "id": "p1",
          "left": "Ripe Mango",
          "right": "Sweet & Juicy"
        },
        {
          "id": "p2",
          "left": "Monsoon Cloud",
          "right": "Dark & Heavy"
        },
        {
          "id": "p3",
          "left": "Clay Pot Water",
          "right": "Cool & Refreshing"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "In the phrase \"The sweet mango\", which word is the adjective?",
        "options": [
          {
            "id": "opt1",
            "text": "sweet",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "mango",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "the",
            "is_correct": false
          }
        ],
        "hint": "It describes how the fruit tastes.",
        "explanation": "Correct! \"Sweet\" describes the noun mango."
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
    "id": "lesson-reg-c4",
    "grade_level": 4,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Songs of the Monsoon: Regional Folk Rhymes and Harvest Poetry",
    "slug": "monsoon-folk-rhymes-harvest-poetry",
    "summary": "Recite lyrical regional songs celebrating thunder, green sprouted shoots, and joyous puddles.",
    "estimated_minutes": 15,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Welcoming the Monsoon Clouds",
        "type": "concept",
        "read_aloud": "Banna banna male Bantu! Rhythmic regional rain songs fill the village air with hope and laughter.",
        "content": "<div class=\"learning-card\"><h4>Folk Rhymes of Rain</h4><p>Farmers and children sing joyous verses as dark monsoon clouds gather over the western hills:</p><blockquote>\"ಮಳೆಯೇ ಬಾರೋ ಮಳೆಯೇ ಬಾ, ಹಳ್ಳ ಕೊಳ್ಳ ತುಂಬಿ ಬಾ...\"<br/>\"बरसा पानी रिमझिम रिमझिम, नाचे मोर बजाकर धुन...\"</blockquote><p>These oral folk poems have been handed down through generations.</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Rain Symbol to its Lyrical Meaning",
      "instructions": "Click the symbol, then match what it signifies.",
      "pairs": [
        {
          "id": "p1",
          "left": "Dancing Peacock",
          "right": "Welcoming rain clouds with outstretched feathers"
        },
        {
          "id": "p2",
          "left": "Croaking Frogs",
          "right": "Pond filling with fresh cool water"
        },
        {
          "id": "p3",
          "left": "Paper Boat",
          "right": "Children playing in courtyard streams"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What bird is famous for dancing when thunder and dark rain clouds appear?",
        "options": [
          {
            "id": "opt1",
            "text": "Peacock (Navilu/Mor)",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Crow",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Vulture",
            "is_correct": false
          }
        ],
        "hint": "India’s national bird with emerald feathers.",
        "explanation": "Correct! The peacock dances in joy at the scent of rain."
      }
    ]
  },
  {
    "id": "lesson-sci-c4",
    "grade_level": 4,
    "subject_id": "sci",
    "subject_name": "Science",
    "subject_code": "SCI",
    "title": "Food and Health: Nutritious Village Millets & Clean Water",
    "slug": "village-millets-nutrition-health",
    "summary": "Learn why traditional millets like Ragi (Finger Millet) and Jowar (Sorghum) provide great strength.",
    "estimated_minutes": 15,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#1D7873",
    "sections": [
      {
        "id": "sec-1",
        "title": "Power of Traditional Millets",
        "type": "concept",
        "read_aloud": "Ragi, Jowar, and Bajra are wonder grains packed with calcium, iron, and fiber for strong bones!",
        "content": "<div class=\"learning-card\"><h4>Super Grains of Rural India</h4><p>Long before processed packaged food, village elders ate wholesome millets:</p><ul><li>🥣 <strong>Ragi (Finger Millet):</strong> Rich in calcium to build rock-solid bones and teeth.</li><li>🌾 <strong>Jowar (Sorghum):</strong> Keeps the body cool in hot summers and gives long energy.</li><li>🫓 <strong>Bajra (Pearl Millet):</strong> Rich in iron and ideal during chilly winters.</li></ul><p>A balanced plate includes green leafy vegetables, lentils (dal), curd, and millet roti!</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Food to its Nutrient Superpower",
      "instructions": "Click the village food, then match its main health benefit.",
      "pairs": [
        {
          "id": "p1",
          "left": "Ragi Mudde / Porridge",
          "right": "High Calcium for sturdy bones"
        },
        {
          "id": "p2",
          "left": "Dal / Green Gram",
          "right": "Proteins to repair muscle and grow tall"
        },
        {
          "id": "p3",
          "left": "Drumstick Leaves (Moringa)",
          "right": "Iron and Vitamins for sharp eyesight"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which traditional village millet is famous for its rich calcium content?",
        "options": [
          {
            "id": "opt1",
            "text": "Ragi (Finger Millet)",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Refined White Flour (Maida)",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "White Sugar",
            "is_correct": false
          }
        ],
        "hint": "It is made into brown nutritious balls or porridge.",
        "explanation": "Correct! Ragi is packed with calcium and minerals."
      }
    ]
  },
  {
    "id": "lesson-soc-c4",
    "grade_level": 4,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "Directions and Local Map Reading: Tracing Village Landmarks",
    "slug": "directions-village-map-reading",
    "summary": "Learn North, South, East, West and sketch a simple schematic map of your school, temple, and post office.",
    "estimated_minutes": 15,
    "difficulty_level": "beginner",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "Four Cardinal Directions",
        "type": "concept",
        "read_aloud": "Stand facing the morning sun: East is ahead, West behind, North to your left, South to your right!",
        "content": "<div class=\"learning-card\"><h4>Finding Your Way</h4><p>How do people locate places without a smartphone?</p><ul><li>🧭 <strong>East (ಪೂರ್ವ / पूर्व):</strong> Towards the sunrise.</li><li>🧭 <strong>West (ಪಶ್ಚಿಮ / पश्चिम):</strong> Towards the sunset.</li><li>🧭 <strong>North (ಉತ್ತರ / उत्तर):</strong> Your left hand side when facing East.</li><li>🧭 <strong>South (ದಕ್ಷಿಣ / दक्षिण):</strong> Your right hand side when facing East.</li></ul><p>Use symbols (like 🏫 for School, 🏥 for Clinic) to draw a map of your village.</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Direction to its Sun Clue",
      "instructions": "Click the direction, then match where the sun sits.",
      "pairs": [
        {
          "id": "p1",
          "left": "East",
          "right": "Where the sun rises in the morning"
        },
        {
          "id": "p2",
          "left": "West",
          "right": "Where the sun sets in the evening"
        },
        {
          "id": "p3",
          "left": "North",
          "right": "Direction towards the Himalayas in India"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "If you face the rising sun, which direction is directly behind your back?",
        "options": [
          {
            "id": "opt1",
            "text": "West",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "North",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "South",
            "is_correct": false
          }
        ],
        "hint": "Opposite of East.",
        "explanation": "Correct! West is directly opposite East."
      }
    ]
  },
  {
    "id": "lesson-eng-c5",
    "grade_level": 5,
    "subject_id": "eng",
    "subject_name": "English & Vocabulary",
    "subject_code": "ENG",
    "title": "Tenses and Telling Stories: Yesterday, Today, and Tomorrow",
    "slug": "tenses-past-present-future",
    "summary": "Master the Past, Present, and Future tenses by narrating a farmer’s busy workday.",
    "estimated_minutes": 15,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#D97706",
    "sections": [
      {
        "id": "sec-1",
        "title": "Time Traveling with Verbs",
        "type": "concept",
        "read_aloud": "Past: I planted a seed. Present: I water the plant. Future: I will harvest sweet fruit!",
        "content": "<div class=\"learning-card\"><h4>Past, Present, and Future</h4><p>We change the form of the verb to show when something happened:</p><ul><li>⏪ <strong>Past Tense (Yesterday):</strong> \"The farmer <em>ploughed</em> the field.\"</li><li>▶️ <strong>Present Tense (Now):</strong> \"The farmer <em>waters</em> the green sprouts.\"</li><li>⏩ <strong>Future Tense (Tomorrow):</strong> \"The farmer <em>will harvest</em> the golden crop.\"</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Sentence to its Tense",
      "instructions": "Click the sentence, then match its tense.",
      "pairs": [
        {
          "id": "p1",
          "left": "We walked to school yesterday",
          "right": "Past Tense"
        },
        {
          "id": "p2",
          "left": "We are studying in the classroom now",
          "right": "Present Tense"
        },
        {
          "id": "p3",
          "left": "We will play kabaddi in the evening",
          "right": "Future Tense"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which sentence is written in the Future Tense?",
        "options": [
          {
            "id": "opt1",
            "text": "It will rain tomorrow evening",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "It rained heavily last night",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "It is raining right now",
            "is_correct": false
          }
        ],
        "hint": "Look for the helping word \"will\".",
        "explanation": "Correct! \"Will rain\" indicates an action that will happen in the future."
      }
    ]
  },
  {
    "id": "lesson-evs-c5",
    "grade_level": 5,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "Forest Wealth and Sacred Groves (Devarakadu)",
    "slug": "sacred-groves-forest-conservation",
    "summary": "Discover how rural communities have protected biodiversity for centuries through sacred grove traditions.",
    "estimated_minutes": 15,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "Traditional Conservation: Sacred Groves",
        "type": "concept",
        "read_aloud": "In every district, villagers protect patches of virgin forest as Devarakadu. No trees are cut, preserving wild biodiversity.",
        "content": "<div class=\"learning-card\"><h4>Nature as a Living Temple</h4><p>A <strong>Sacred Grove (Devarakadu / Oran)</strong> is a protected forest patch cared for by community consensus:</p><ul><li>🌿 <strong>Medicinal Plants:</strong> Home to rare herbs used in Ayurveda to treat bites, fevers, and wounds.</li><li>🦉 <strong>Wildlife Sanctuary:</strong> Gives shelter to owls, civets, flying squirrels, and honeybees.</li><li>💧 <strong>Water Sponge:</strong> Forest roots absorb rain like a sponge, keeping village wells full year-round.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Forest Gift to its Benefit",
      "instructions": "Click the forest resource, then match its community role.",
      "pairs": [
        {
          "id": "p1",
          "left": "Tree Roots",
          "right": "Anchor soil and prevent riverbank erosion"
        },
        {
          "id": "p2",
          "left": "Medicinal Herbs",
          "right": "Natural treatments for ailments & burns"
        },
        {
          "id": "p3",
          "left": "Beehives",
          "right": "Pollinate village fruit trees and crop fields"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What happens to the soil when trees on a hillside are cut down?",
        "options": [
          {
            "id": "opt1",
            "text": "Topsoil washes away during heavy rains (Soil Erosion)",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Soil becomes rock candy",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Nothing changes",
            "is_correct": false
          }
        ],
        "hint": "Roots hold soil together.",
        "explanation": "Correct! Tree roots bind soil; cutting them causes destructive soil erosion."
      }
    ]
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
    "id": "lesson-reg-c5",
    "grade_level": 5,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Idioms, Proverbs (Gaadegalu) & Village Sayings",
    "slug": "proverbs-gaadegalu-village-sayings",
    "summary": "Discover timeless rustic wisdom in proverbs: \"Veda sulladaru gaade sullagadu\" (Proverbs never lie).",
    "estimated_minutes": 15,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Wisdom of Rural Ancestors",
        "type": "concept",
        "read_aloud": "Gaade mathu mathige hosa kanti tharuthade! Proverbs pack deep life lessons into just a few words.",
        "content": "<div class=\"learning-card\"><h4>Classic Sayings and Their Meanings</h4><ul><li>📜 <strong>\"ಕುಂಬಾರನಿಗೆ ವರುಷ, ದೊಣ್ಣೆಗೆ ನಿಮಿಷ\"</strong> (It takes a potter a year to shape pots, but a stick one minute to shatter them): <em>Creation takes patience, destruction takes seconds.</em></li><li>📜 <strong>\"ಹನಿ ಹನಿ ಗೂಡಿದರೆ ಹಳ್ಳ\"</strong> (Drop by drop forms a stream): <em>Small consistent savings grow into great wealth.</em></li><li>📜 <strong>\"बूंद-बूंद से घड़ा भरता है\"</strong>: <em>Every small effort counts toward big success.</em></li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Proverb to its Everyday Advice",
      "instructions": "Click the proverb, then match its moral.",
      "pairs": [
        {
          "id": "p1",
          "left": "ಹನಿ ಹನಿ ಗೂಡಿದರೆ ಹಳ್ಳ",
          "right": "Consistent small efforts achieve mighty goals"
        },
        {
          "id": "p2",
          "left": "ಮಾತು ಬೆಳ್ಳಿ, ಮೌನ ಬಂಗಾರ",
          "right": "Silence and thoughtful listening are golden"
        },
        {
          "id": "p3",
          "left": "ಕಾಯಕವೇ ಕೈಲಾಸ",
          "right": "Honest work is supreme worship"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What does the proverb \"Drop by drop forms a stream\" teach us?",
        "options": [
          {
            "id": "opt1",
            "text": "Small everyday actions add up to great results",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Stop doing anything",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Water should be wasted",
            "is_correct": false
          }
        ],
        "hint": "Think of saving drops to make a river.",
        "explanation": "Correct! Continuous small efforts create magnificent outcomes."
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
    "id": "lesson-soc-c5",
    "grade_level": 5,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "Monuments and Heritage: Ancient Stepwells and Forts",
    "slug": "monuments-ancient-stepwells-forts",
    "summary": "Explore stone architecture, rainwater stepwells (Kalyani/Baoli), and majestic forts in our region.",
    "estimated_minutes": 15,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "Engineers of Ancient India",
        "type": "concept",
        "read_aloud": "Centuries ago, master masons built stone stepwells with intricate staircases to cool water and gather communities.",
        "content": "<div class=\"learning-card\"><h4>Architecture that Defied Droughts</h4><p>Across Indian villages, you will find historical structures that served vital community needs:</p><ul><li>🏛️ <strong>Stepwells (Kalyani / Baoli):</strong> Deep reservoirs lined with carved stone steps that allowed villagers to reach cool water regardless of how high or low the water table dropped.</li><li>🏰 <strong>Hill Forts:</strong> Massive stone ramparts that defended farming communities from invading bandits.</li><li>🛕 <strong>Temple Chariots & Pillars:</strong> Intricate stone carvings depicting history and astronomy.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Ancient Structure to its Purpose",
      "instructions": "Click the historic monument, then match its civic function.",
      "pairs": [
        {
          "id": "p1",
          "left": "Stone Stepwell (Kalyani)",
          "right": "Community rainwater storage and cooling pavilion"
        },
        {
          "id": "p2",
          "left": "Hilltop Fort Watchtower",
          "right": "Watching out for approaching danger from afar"
        },
        {
          "id": "p3",
          "left": "Gram Chawadi / Mandap",
          "right": "Public village assembly hall for resolving disputes"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Why did ancient Indian kingdoms construct multi-tiered stepwells (Baolis)?",
        "options": [
          {
            "id": "opt1",
            "text": "To collect and store rainwater safely across all seasons",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "To store gunpowder",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "As parking lots for tractors",
            "is_correct": false
          }
        ],
        "hint": "Think about water preservation in dry months.",
        "explanation": "Correct! Stepwells preserved clean water and provided cool communal spaces."
      }
    ]
  },
  {
    "id": "lesson-eng-c6",
    "grade_level": 6,
    "subject_id": "eng",
    "subject_name": "English & Vocabulary",
    "subject_code": "ENG",
    "title": "Reading Comprehension: Letters to the Village Postmaster",
    "slug": "reading-comprehension-village-postmaster",
    "summary": "Read a short rural story about the red postbox, postman uncle, and answer comprehension questions.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#D97706",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Red Postbox at the Village Square",
        "type": "concept",
        "read_aloud": "Read closely: The red postbox stands under the shade of the peepal tree, carrying news from distant towns.",
        "content": "<div class=\"learning-card\"><h4>The Village Postman (Dakiya)</h4><p>Every Tuesday, Postman Ramesh rides his squeaky black bicycle into the village. In his canvas bag are postcards, money orders from sons working in Bengaluru, and seeds ordered by farmers.</p><p>Elderly grandmother Yashodamma waits eagerly on her verandah for a postcard from her grandson.</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Postal Item to its Purpose",
      "instructions": "Click the postal item, then match what it delivers.",
      "pairs": [
        {
          "id": "p1",
          "left": "Money Order",
          "right": "Delivering cash safely to rural families"
        },
        {
          "id": "p2",
          "left": "Yellow Postcard",
          "right": "Affordable handwritten letter message"
        },
        {
          "id": "p3",
          "left": "Speed Post Parcel",
          "right": "Urgent medical or exam documents"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What does Postman Ramesh ride when delivering mail to the village?",
        "options": [
          {
            "id": "opt1",
            "text": "A black bicycle",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "A sports car",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "A helicopter",
            "is_correct": false
          }
        ],
        "hint": "A two-wheeled pedaled vehicle.",
        "explanation": "Correct! The story notes that he rides his squeaky black bicycle."
      }
    ]
  },
  {
    "id": "lesson-evs-c6",
    "grade_level": 6,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "Garbage In, Wealth Out: Vermicomposting & Clean Village Drives",
    "slug": "vermicomposting-clean-village-drives",
    "summary": "Turn vegetable peelings and cow dung into black organic gold using friendly earthworms.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Magic of Earthworms",
        "type": "concept",
        "read_aloud": "Earthworms are the farmer’s best friends. They swallow dry leaves and food scraps and turn them into rich vermicompost.",
        "content": "<div class=\"learning-card\"><h4>Segregation and Composting</h4><p>A clean village (Swachh Gram) segregates waste at source:</p><ul><li>🟢 <strong>Wet Biodegradable Waste:</strong> Kitchen peels, rotten fruits, crop straw, cow dung.</li><li>🔴 <strong>Dry Recyclable Waste:</strong> Glass bottles, scrap tin, hard plastic (send to recycling centers).</li><li>🪱 <strong>Vermicompost:</strong> In 45 days, red wigglers convert wet waste into odorless, nutrient-rich manure!</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Waste to its Proper Destination",
      "instructions": "Click the discarded item, then match where it belongs.",
      "pairs": [
        {
          "id": "p1",
          "left": "Vegetable scraps and dried leaves",
          "right": "Compost pit with earthworms"
        },
        {
          "id": "p2",
          "left": "Empty glass medicine bottles",
          "right": "Recyclables scrap dealer"
        },
        {
          "id": "p3",
          "left": "Plastic carry bags",
          "right": "Banned single-use waste to eliminate"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Why is vermicompost called \"black gold\" by organic farmers?",
        "options": [
          {
            "id": "opt1",
            "text": "It enriches soil with natural minerals and friendly microbes without chemical poison",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "It contains actual gold coins",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "It is made of black paint",
            "is_correct": false
          }
        ],
        "hint": "It revitalizes soil naturally.",
        "explanation": "Correct! Vermicompost provides organic nutrients and moisture retention."
      }
    ]
  },
  {
    "id": "lesson-math-c6",
    "grade_level": 6,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Integers on the Number Line: Measuring Elevations & Temperature",
    "slug": "integers-number-line-elevation",
    "summary": "Master negative and positive numbers using well water depth, mountain heights, and chilly winter temperatures.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "Above Zero and Below Zero",
        "type": "concept",
        "read_aloud": "Zero is the ground level. Heights above ground are positive numbers; depths below ground are negative numbers!",
        "content": "<div class=\"learning-card\"><h4>Understanding Positive and Negative Integers</h4><p>Imagine standing on the edge of a village stepwell:</p><ul><li>Ground level = <strong>0 meters</strong>.</li><li>A bird flying 15 meters in the air = <strong>+15</strong>.</li><li>The water surface 8 meters down in the well = <strong>−8</strong>.</li><li>Adding a negative integer moves to the left on the number line: 5 + (−3) = <strong>2</strong>.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Situation to its Integer",
      "instructions": "Click the real-life situation, then match its integer sign.",
      "pairs": [
        {
          "id": "p1",
          "left": "A profit of ₹50 on selling onions",
          "right": "+50"
        },
        {
          "id": "p2",
          "left": "A debt of ₹20 borrowed from neighbor",
          "right": "−20"
        },
        {
          "id": "p3",
          "left": "Water freezing point",
          "right": "0°C"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "If you are at 5 meters elevation and walk down 7 meters into a cellar, what is your elevation?",
        "options": [
          {
            "id": "opt1",
            "text": "−2 meters",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "+2 meters",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "12 meters",
            "is_correct": false
          }
        ],
        "hint": "Calculate 5 − 7.",
        "explanation": "Correct! 5 − 7 = −2 meters below ground level."
      }
    ]
  },
  {
    "id": "lesson-reg-c6",
    "grade_level": 6,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Inspiring Biographies: Great Women and Men of Our Region",
    "slug": "inspiring-biographies-regional-heroes",
    "summary": "Learn about local heroes like Kittur Rani Chennamma, Onake Obavva, and Sir M. Visvesvaraya.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Courage That Echoes Through History",
        "type": "concept",
        "read_aloud": "Fearless warriors and brilliant engineers shaped the freedom and irrigation canals of our land.",
        "content": "<div class=\"learning-card\"><h4>Courage and Selfless Service</h4><ul><li>⚔️ <strong>Onake Obavva:</strong> Defended the Chitradurga fort with a simple wooden pestle (onake) against enemy soldiers.</li><li>👑 <strong>Kittur Rani Chennamma:</strong> Fought fearlessly against the British Doctrine of Lapse decades before the 1857 uprising.</li><li>🌊 <strong>Sir M. Visvesvaraya:</strong> The brilliant civil engineer who designed automatic floodgates and built the KRS Dam on the Cauvery river!</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Historic Figure to Their Great Deed",
      "instructions": "Click the leader, then match their legacy.",
      "pairs": [
        {
          "id": "p1",
          "left": "Onake Obavva",
          "right": "Guarded fort secret passage with household pestle"
        },
        {
          "id": "p2",
          "left": "Kittur Rani Chennamma",
          "right": "Early queen who fought foreign colonial rule"
        },
        {
          "id": "p3",
          "left": "Sir M. Visvesvaraya",
          "right": "Master engineer who built dams and water floodgates"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which great engineer built modern dams and designed automatic irrigation floodgates in India?",
        "options": [
          {
            "id": "opt1",
            "text": "Sir M. Visvesvaraya",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Alexander the Great",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Captain Cook",
            "is_correct": false
          }
        ],
        "hint": "His birthday is celebrated as Engineers’ Day in India.",
        "explanation": "Correct! Sir M. Visvesvaraya is revered for his water engineering genius."
      }
    ]
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
    "id": "lesson-soc-c6",
    "grade_level": 6,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "Ancient Civilizations: The Harappan Towns & Lothal Port",
    "slug": "ancient-civilizations-harappa-lothal",
    "summary": "Discover the world’s oldest planned city grid, brick drainage systems, and maritime dockyards in ancient India.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "Town Planning 4500 Years Ago",
        "type": "concept",
        "read_aloud": "Harappan cities had straight streets, baked brick houses, and covered drainage systems cleaner than many modern towns!",
        "content": "<div class=\"learning-card\"><h4>The Indus Valley Engineers</h4><p>Over 4,500 years ago, cities like Harappa, Mohenjo-daro, and Lothal thrived in the subcontinent:</p><ul><li>🧱 <strong>Baked Brick Architecture:</strong> Uniform size bricks used for homes and great granaries.</li><li>🚿 <strong>Underground Drainage:</strong> Covered drains along streets with inspection manholes.</li><li>⚓ <strong>Lothal Tidal Dockyard:</strong> Ships sailed into a massive brick basin to trade beads and copper with Mesopotamia!</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Ancient City Feature to its Achievement",
      "instructions": "Click the feature, then match its significance.",
      "pairs": [
        {
          "id": "p1",
          "left": "Covered Street Drains",
          "right": "Advanced public hygiene and sewage management"
        },
        {
          "id": "p2",
          "left": "Lothal Tidal Dockyard",
          "right": "Ancient maritime international trading port"
        },
        {
          "id": "p3",
          "left": "The Great Bath",
          "right": "Waterproofed brick pool for ceremonial bathing"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What material did Indus Valley builders use that has survived for over 4,000 years?",
        "options": [
          {
            "id": "opt1",
            "text": "Kiln-baked clay bricks",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Plastic sheets",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Cardboard cartons",
            "is_correct": false
          }
        ],
        "hint": "Clay fired in high-heat kilns.",
        "explanation": "Correct! Baked brick masonry was so durable it lasted millennia."
      }
    ]
  },
  {
    "id": "lesson-eng-c7",
    "grade_level": 7,
    "subject_id": "eng",
    "subject_name": "English & Vocabulary",
    "subject_code": "ENG",
    "title": "Conversational English: Welcoming Guests & Asking for Help",
    "slug": "conversational-english-dialogues",
    "summary": "Build spoken English confidence for daily village interactions, greeting guests, and polite requests.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#D97706",
    "sections": [
      {
        "id": "sec-1",
        "title": "Everyday Spoken English Phrases",
        "type": "concept",
        "read_aloud": "Good morning! Please come in. Would you like a glass of water? How can I help you?",
        "content": "<div class=\"learning-card\"><h4>Practicing Dialogue with a Partner</h4><p>Roleplay this common conversation between a visitor and a village student:</p><blockquote><strong>Visitor:</strong> \"Excuse me, could you tell me where the Government Primary School is?\"<br/><strong>Student:</strong> \"Certainly! Walk straight for 200 meters, then turn left at the banyan tree. The school has blue gates.\"<br/><strong>Visitor:</strong> \"Thank you very much, young scholar!\"<br/><strong>Student:</strong> \"You are welcome, Sir!\"</blockquote></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the English Question to its Polite Reply",
      "instructions": "Click the question, then match the polite answer.",
      "pairs": [
        {
          "id": "p1",
          "left": "How are you doing today?",
          "right": "I am doing well, thank you!"
        },
        {
          "id": "p2",
          "left": "Could you please pass the water?",
          "right": "Sure, here you go."
        },
        {
          "id": "p3",
          "left": "Thank you for your assistance!",
          "right": "You are most welcome!"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What is the polite English phrase to say after someone thanks you?",
        "options": [
          {
            "id": "opt1",
            "text": "You are welcome!",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Go away!",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Why did you speak?",
            "is_correct": false
          }
        ],
        "hint": "A gracious response of hospitality.",
        "explanation": "Correct! \"You are welcome!\" is the standard polite reply."
      }
    ]
  },
  {
    "id": "lesson-evs-c7",
    "grade_level": 7,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "Soil Conservation and Organic Farming Methods",
    "slug": "soil-conservation-organic-farming",
    "summary": "Prevent soil erosion on slopes through terrace farming, bund planting, and natural pest management with neem spray.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "Guarding the Living Soil",
        "type": "concept",
        "read_aloud": "It takes 500 years for nature to form one inch of fertile topsoil. We must protect it from washing away into rivers!",
        "content": "<div class=\"learning-card\"><h4>Preventing Topsoil Loss</h4><ul><li>🪜 <strong>Terrace / Contour Farming:</strong> Cutting steps on slopes slows down rushing water so soil stays put.</li><li>🌱 <strong>Vetiver Grass Bunds:</strong> Deep fibrous roots of vetiver grass create an impenetrable natural barrier against erosion.</li><li>🍃 <strong>Neem Astra Spray:</strong> Crushed neem leaves and cow urine repel caterpillars without killing beneficial bees!</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Farming Practice to its Benefit",
      "instructions": "Click the practice, then match why farmers use it.",
      "pairs": [
        {
          "id": "p1",
          "left": "Terrace Farming",
          "right": "Slows water flow on steep hillsides"
        },
        {
          "id": "p2",
          "left": "Neem-based Bio-spray",
          "right": "Controls pests without chemical poisons"
        },
        {
          "id": "p3",
          "left": "Mulching with Dry Hay",
          "right": "Prevents soil moisture from evaporating in sun"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which natural plant spray protects crops from sucking pests without harming bees?",
        "options": [
          {
            "id": "opt1",
            "text": "Neem seed decoction (Neem Astra)",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Kerosene oil",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Salt water",
            "is_correct": false
          }
        ],
        "hint": "Extracted from the sacred neem tree.",
        "explanation": "Correct! Neem compounds naturally deter pests while leaving friendly pollinators safe."
      }
    ]
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
    "id": "lesson-reg-c7",
    "grade_level": 7,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Vachanas, Dohas & Bhakti Literature: Moral Values and Equality",
    "slug": "vachanas-dohas-bhakti-literature",
    "summary": "Study the egalitarian poetry of Basavanna, Kabir, and Akka Mahadevi advocating equality, dignity of labor, and kindness.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Poetry That Broke Caste and Gender Barriers",
        "type": "concept",
        "read_aloud": "Kayakave Kailasa! Basavanna declared that honest labor itself is heaven. Treat all human beings as equal.",
        "content": "<div class=\"learning-card\"><h4>Words of Timeless Truth</h4><ul><li>🕊️ <strong>Basavanna (Vachanas):</strong> <em>\"ಕಾಯಕವೇ ಕೈಲಾಸ\"</em> (Work is Heaven). He established the Anubhava Mantapa where all castes, men, and women sat together to debate philosophy.</li><li>🧵 <strong>Kabir Das (Dohas):</strong> <em>\"ऐसी बानी बोलिए, मन का आपा खोय। औरन को सीतल करै, आपहु सीतल होय॥\"</em> (Speak words so gentle that they soothe both the listener and speaker).</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Bhakti Poet to Their Central Teaching",
      "instructions": "Click the saint-poet, then match their message.",
      "pairs": [
        {
          "id": "p1",
          "left": "Basavanna",
          "right": "Dignity of labor (Kayakave Kailasa) & social equality"
        },
        {
          "id": "p2",
          "left": "Kabir Das",
          "right": "Simplicity, pure heart & gentle speech over rituals"
        },
        {
          "id": "p3",
          "left": "Akka Mahadevi",
          "right": "Fearless devotion and spiritual liberation"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What did Basavanna mean by the famous phrase \"Kayakave Kailasa\"?",
        "options": [
          {
            "id": "opt1",
            "text": "Honest labor with dedication is itself divine worship",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Running away to the forest is best",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Only rich people go to heaven",
            "is_correct": false
          }
        ],
        "hint": "Kayaka means dedicated work.",
        "explanation": "Correct! Kayakave Kailasa means that sincere, honest labor is the highest spiritual path."
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
    "id": "lesson-soc-c7",
    "grade_level": 7,
    "subject_id": "soc",
    "subject_name": "Social Studies",
    "subject_code": "SOC",
    "title": "Medieval Trade and Crafts: Silk Weavers, Metalworkers & Temple Towns",
    "slug": "medieval-trade-crafts-temple-towns",
    "summary": "Discover how medieval towns like Hampi, Thanjavur, and Surat flourished through artisanal crafts and global spice trade.",
    "estimated_minutes": 20,
    "difficulty_level": "intermediate",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#EA580C",
    "sections": [
      {
        "id": "sec-1",
        "title": "Bustling Medieval Bazaars",
        "type": "concept",
        "read_aloud": "European travelers wrote in awe of Indian bazaars where pearls, silks, and aromatic spices were sold in broad daylight.",
        "content": "<div class=\"learning-card\"><h4>The Guilds of Craftsmanship</h4><p>During the Chola, Vijayanagara, and Mughal eras, artisan guilds (shrenis) produced goods famous worldwide:</p><ul><li>🧵 <strong>Textiles & Dyes:</strong> Fine muslin of Bengal, indigo dye, and Ilkal/Kanchipuram silks.</li><li>🏺 <strong>Bronze Casting:</strong> Lost-wax (cire perdue) technique used to cast exquisite Chola Nataraja bronzes.</li><li>💎 <strong>Global Trade:</strong> Indian pepper and cloves were prized in Rome, Venice, and Persia as \"black gold\".</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Medieval Center to its Renowned Craft",
      "instructions": "Click the historic trade center, then match its specialty.",
      "pairs": [
        {
          "id": "p1",
          "left": "Hampi (Vijayanagara)",
          "right": "Ruby and diamond gemstone bazaars"
        },
        {
          "id": "p2",
          "left": "Thanjavur",
          "right": "Lost-wax bronze casting & bronze idols"
        },
        {
          "id": "p3",
          "left": "Surat",
          "right": "Western maritime gateway for textile exports"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What method did ancient Indian artisans use to cast hollow and solid bronze sculptures?",
        "options": [
          {
            "id": "opt1",
            "text": "Lost-wax (Cire perdue) technique",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "3D printing",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Cardboard pasting",
            "is_correct": false
          }
        ],
        "hint": "A wax model covered in clay and melted away.",
        "explanation": "Correct! Lost-wax casting was mastered by medieval Indian sculptors."
      }
    ]
  },
  {
    "id": "lesson-eng-c8",
    "grade_level": 8,
    "subject_id": "eng",
    "subject_name": "English & Vocabulary",
    "subject_code": "ENG",
    "title": "Formal & Informal Letter Writing: Village Council Suggestions",
    "slug": "formal-letter-writing-village-council",
    "summary": "Learn how to write a polite official letter to the Panchayat Secretary requesting solar streetlights for your school.",
    "estimated_minutes": 20,
    "difficulty_level": "advanced",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#D97706",
    "sections": [
      {
        "id": "sec-1",
        "title": "Structure of an Official Letter",
        "type": "concept",
        "read_aloud": "From address, Date, To address, Subject line, Respected Sir/Madam, Body paragraphs, and Yours faithfully!",
        "content": "<div class=\"learning-card\"><h4>Writing for Civic Impact</h4><p>Every citizen can communicate constructively with government authorities:</p><ul><li>1️⃣ <strong>Sender Address & Date:</strong> Top left.</li><li>2️⃣ <strong>Recipient:</strong> To, The Panchayat Development Officer (PDO).</li><li>3️⃣ <strong>Subject:</strong> Concise, bold statement: <em>Subject: Request for solar streetlight near Government Middle School.</em></li><li>4️⃣ <strong>Salutation & Body:</strong> Respectful facts explaining why children need light for evening study.</li><li>5️⃣ <strong>Sign-off:</strong> Yours faithfully, followed by student signature.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Letter Section to its Purpose",
      "instructions": "Click the section, then match what it contains.",
      "pairs": [
        {
          "id": "p1",
          "left": "Subject Line",
          "right": "Single sentence stating the reason for writing"
        },
        {
          "id": "p2",
          "left": "Body Paragraphs",
          "right": "Clear details and evidence of the request"
        },
        {
          "id": "p3",
          "left": "Subscription",
          "right": "\"Yours faithfully\" or \"Yours sincerely\""
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Which of the following is an appropriate formal Subject Line in a civic letter?",
        "options": [
          {
            "id": "opt1",
            "text": "Subject: Request for repair of village school handpump",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Hey bro what is up?",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Subject: I want ice cream",
            "is_correct": false
          }
        ],
        "hint": "Clear, concise, and respectful.",
        "explanation": "Correct! A formal subject line clearly describes the civic request."
      }
    ]
  },
  {
    "id": "lesson-evs-c8",
    "grade_level": 8,
    "subject_id": "evs",
    "subject_name": "Environmental Studies",
    "subject_code": "EVS",
    "title": "Conserving Village Water Bodies and Groundwater Recharge",
    "slug": "conserving-village-water-groundwater-recharge",
    "summary": "Study watershed management, percolation pits, check dams, and how to stop over-extraction of aquifers.",
    "estimated_minutes": 20,
    "difficulty_level": "advanced",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#2A8B5B",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Crisis of the Falling Water Table",
        "type": "concept",
        "read_aloud": "Deep borewells are sucking ancient underground aquifers dry. We must recharge the earth with percolation check dams!",
        "content": "<div class=\"learning-card\"><h4>Community Watershed Management</h4><ul><li>🚧 <strong>Check Dams:</strong> Small stone barriers built across seasonal streams slow down rainwater so it seeps deep into the soil.</li><li>🕳️ <strong>Recharge Pits:</strong> Directing clean rooftop rain into filtered gravel pits around borewells raises groundwater levels.</li><li>🌾 <strong>Crop Shift:</strong> Shifting away from thirsty sugarcane in drought zones to drought-resilient millets and pulses.</li></ul></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Watershed Technique to its Mechanism",
      "instructions": "Click the method, then match how it protects water.",
      "pairs": [
        {
          "id": "p1",
          "left": "Check Dam on stream",
          "right": "Slows runoff to promote aquifer infiltration"
        },
        {
          "id": "p2",
          "left": "Borewell Recharge Pit",
          "right": "Filters rooftop rain directly into deep strata"
        },
        {
          "id": "p3",
          "left": "Desilting Village Pond",
          "right": "Restores water holding capacity of the lake"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What is the main advantage of building check dams across monsoon ravines?",
        "options": [
          {
            "id": "opt1",
            "text": "It holds back flowing rainwater so it percolates down and raises nearby well levels",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "It stops villagers from walking",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "It produces loud noise",
            "is_correct": false
          }
        ],
        "hint": "Percolation recharges underground water.",
        "explanation": "Correct! Check dams give water time to seep underground instead of rushing away."
      }
    ]
  },
  {
    "id": "lesson-math-c8",
    "grade_level": 8,
    "subject_id": "math",
    "subject_name": "Mathematics",
    "subject_code": "MATH",
    "title": "Linear Equations in Real Life: Farming Cost and Crop Yield",
    "slug": "linear-equations-farming-profit",
    "summary": "Solve single-variable linear equations to calculate seed budget, tractor diesel cost, and net harvest earnings.",
    "estimated_minutes": 20,
    "difficulty_level": "advanced",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#176B55",
    "sections": [
      {
        "id": "sec-1",
        "title": "Formulating the Problem with an Unknown Variable",
        "type": "concept",
        "read_aloud": "Let x represent the unknown number of bags. Use algebra to balance cost and profit equations!",
        "content": "<div class=\"learning-card\"><h4>Algebra on the Farm</h4><p>Farmer Savita spends ₹2,000 on tilling. Each bag of organic fertilizer costs ₹300. Her total expense is ₹4,100.</p><p>How many fertilizer bags (b) did she purchase?</p><p><strong>Equation:</strong> 2000 + 300b = 4100</p><p>300b = 4100 − 2000 = 2100</p><p>b = 2100 ÷ 300 = <strong>7 bags!</strong></p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Word Problem to its Equation",
      "instructions": "Click the problem, then match its algebraic equation.",
      "pairs": [
        {
          "id": "p1",
          "left": "Twice a number plus 5 equals 25",
          "right": "2x + 5 = 25"
        },
        {
          "id": "p2",
          "left": "Three bags of seeds cost ₹150",
          "right": "3x = 150"
        },
        {
          "id": "p3",
          "left": "A number decreased by 8 gives 12",
          "right": "x − 8 = 12"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "Solve for x: 3x + 10 = 40. What is x?",
        "options": [
          {
            "id": "opt1",
            "text": "10",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "15",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "30",
            "is_correct": false
          }
        ],
        "hint": "3x = 40 − 10 = 30. Divide by 3.",
        "explanation": "Correct! 3x = 30, so x = 10."
      }
    ]
  },
  {
    "id": "lesson-reg-c8",
    "grade_level": 8,
    "subject_id": "reg",
    "subject_name": "Regional Languages",
    "subject_code": "REG",
    "title": "Modern Literature: Short Stories on Rural Transformation",
    "slug": "modern-literature-rural-transformation",
    "summary": "Read stories by Kuvempu, Premchand, and Shivarama Karanth exploring rural dignity, education, and social change.",
    "estimated_minutes": 20,
    "difficulty_level": "advanced",
    "status": "published",
    "stars_reward": 3,
    "cover_color": "#7C3AED",
    "sections": [
      {
        "id": "sec-1",
        "title": "Literature as the Mirror of Society",
        "type": "concept",
        "read_aloud": "Kuvempu proclaimed \"Vishwa Manava\" — Every child is born a universal human being, free of prejudice and full of light.",
        "content": "<div class=\"learning-card\"><h4>The Universal Human (ವಿಶ್ವಮಾನವ ಸಂದೇಶ)</h4><p>Rastrakavi Kuvempu taught that education in rural schools must break narrow boundaries of caste and language to realize human unity:</p><blockquote>\"ಪ್ರತಿಯೊಂದು ಮಗು ಹುಟ್ಟುವಾಗ ವಿಶ್ವಮಾನವ. ಬೆಳೆಯುತ್ತಾ ನಾವು ಅವನನ್ನು ಅಲ್ಪಮಾನವನನ್ನಾಗಿ ಮಾಡುತ್ತೇವೆ. ಶಿಕ್ಷಣವು ಅವನನ್ನು ಮತ್ತೆ ವಿಶ್ವಮಾನವನನ್ನಾಗಿ ಮಾಡಬೇಕು.\"</blockquote><p>Great literature opens our hearts to empathy, scientific curiosity, and love for nature.</p></div>"
      }
    ],
    "interactive_activity": {
      "type": "matching",
      "title": "Match the Literary Legend to Their Vision",
      "instructions": "Click the author, then match their message.",
      "pairs": [
        {
          "id": "p1",
          "left": "Kuvempu",
          "right": "Vishwa Manava (Universal Human) message of universal harmony"
        },
        {
          "id": "p2",
          "left": "Munshi Premchand",
          "right": "Stories of rural farmers’ dignity, resilience, and compassion"
        },
        {
          "id": "p3",
          "left": "Dr. Kota Shivarama Karanth",
          "right": "Pioneered environmental defense of rivers and forests"
        }
      ]
    },
    "quiz": [
      {
        "id": "q1",
        "prompt": "What did Kuvempu mean by the \"Vishwa Manava\" (Universal Human) ideal?",
        "options": [
          {
            "id": "opt1",
            "text": "Every child is born universal and education should expand their heart without prejudice",
            "is_correct": true
          },
          {
            "id": "opt2",
            "text": "Children should only stay in one room",
            "is_correct": false
          },
          {
            "id": "opt3",
            "text": "Nobody should read books",
            "is_correct": false
          }
        ],
        "hint": "A universal worldview that embraces humanity.",
        "explanation": "Correct! Kuvempu’s Vishwa Manava vision champions universal brotherhood and enlightened empathy."
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
