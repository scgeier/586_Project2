// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your New Finger Knowledge!",
        "main":    "<p>Ready to blow your friends' minds with trivia? Take this quiz and find out!</p>",
        "results": "<h5>Sources:</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
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
