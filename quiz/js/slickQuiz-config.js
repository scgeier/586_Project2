// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your New Finger Knowledge!",
        "main":    "<p>Ready to blow your friends' minds with trivia? Take this quiz and find out!</p>",
        "results": "<h4>Sources (not for serious academic use):</h4><div class='sources'><img class='sources-pic' src='./images/pointer-small.png' /><p class='sources-text'>Nicholas Day, 'How Pointing Makes Babies Human.' <a href='http://www.slate.com/blogs/how_babies_work/2013/03/26/research_on_babies_and_pointing_reveals_the_action_s_importance.html' target='_blank'>www.slate.com</a>, March 26, 2013.</p></div><div class='sources'><img class='sources-pic' src='./images/middle-small.png' /><p class='sources-text'> Daniel Nasaw, 'When did the middle finger become offensive?' <a href='http://www.bbc.com/news/magazine-16916263' target='_blank'>www.bbc.com</a>, February 6, 2012.</p></div><div class='sources'><img class='sources-pic' src='./images/ring-small.png' /><p class='sources-text'>Courtney Smith, 'Anatomy and Physiology: 5 Medical Myths Demythified!' <a href='http://info.visiblebody.com/bid/239503/Anatomy-and-Physiology-5-Medical-Myths-Demythified' target='_blank'>info.visiblebody.com</a>, November 1, 2012<br>Also, see <a href='https://en.wikipedia.org/wiki/Digit_ratio' target='_blank'>wikipedia entry</a> for various sources on digit ratio</p></div><div class='sources'><img class='sources-pic' src='./images/pinky-small.png' /><p class='sources-text'><a href='http://english.stackexchange.com/questions/125205/what-is-the-origin-of-the-phrase-pinky-promise' target='_blank'>Stack Exchange</a> forum on Engligsh Language & Usage</p></div><div class='sources'><img class='sources-pic' src='./images/thumb-small.png' /><p class='sources-text'>E-Hand.com: The Electronic Textbook of Hand Surgery, <a href='http://www.eatonhand.com/hw/facts.htm' target='_blank'>www.eatonhand.com</a><br>Brendan Koerner, 'What Does a 'Thumbs Up' Mean In Iraq?' <a href='http://www.slate.com/articles/news_and_politics/explainer/2003/03/what_does_a_thumbs_up_mean_in_iraq.html' target='_blank'> www.slate.com</a>, March 28, 2003.</p></div>",
        "level1":  "Fingerluminatti",
        "level2":  "Finger Master",
        "level3":  "Finger Puppet",
        "level4":  "Finger Food",
        "level5":  "Goose Egg Layer." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What letter does an upright index finger represent in American Sign Language?",
            "a": [
                {"option": "A",      "correct": false},
                {"option": "D",     "correct": true},
                {"option": "M",      "correct": false},
                {"option": "Z",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span>And worthy of an exclamation point!</p>",
            "incorrect": "<p><span>Nope.</span>A raised index finger is the letter D.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "What was the first documented use of the middle finger insult in the United States?",
            "a": [
                {"option": "Native Americans flipped off the Pilgrims during an argument at the first Thanksgiving", "correct": false},
                {"option": "John Harvard gave a single-finger salute to Elihu Yale in 1638",   "correct": false},
                {"option": "Lincoln gave Douglas the bird at the end of the 1858 debates",               "correct": false},
                {"option": "Old Ross Hadbourn flipped off the camerman during a baseball team photo in 1886", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span>How could you forget Old Hoss?</p>",
            "incorrect": "<p><span>Incorrect</span> While this likely happened, we don't have any proof.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Studies have shown correlations between finger length ratio and which of the following traits? Select ALL that apply.",
            "a": [
                {"option": "Alcoholism",           "correct": true},
                {"option": "Height",                  "correct": false},
                {"option": "Obesity",  "correct": true},
                {"option": "Schizophrenia",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice job.</span>Guess that one stuck in your craw.</p>",
            "incorrect": "<p><span>Not Quite.</span>But correlation is not causation, anyway.</p>" // no comma here
        },
        { // Question 4
            "q": "What is the origin of the word 'pinky'?",
            "a": [
                {"option": "Latin, pincus, for 'twig'",    "correct": false},
                {"option": "Dutch, pink, for 'little finger'",     "correct": true},
                {"option": "Indo-European, penk, for 'useless'",      "correct": false},
                {"option": "I don't know, it's probably French.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Well done!</span>Pinkies and New York City: the two Dutch gifts that keep on giving.</p>",
            "incorrect": "<p><span>No dice.</span>Etymology is not your forte.</p>" // no comma here
        },
        { // Question 5
            "q": "There is a vein that runs directly from the ring finger into the heart.",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>People supposedly believed this back in the day. According to the jewelery industry.</p>",
            "incorrect": "<p><span>Wrong.</span>But hey, did you know that if your hand is bigger than your face you're a genius?</p>" // no comma here
        } // no comma here
    ]
};
