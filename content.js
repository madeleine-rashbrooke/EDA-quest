
var accountabilityGroup = new Scenario ({
id: 1,
name: "accountability-group",
time: "08:45",
text: `The question of the day is 'What kind of monkey is Joseph
and how do monkeys demonstrate EDA's values of Integrity, Kindness and Effort?'
The group embarks on an philosophical discussion of whether non-humans can be kind
rather than just nice.`,
goodDecisionText: "You arrive on time and share valuable insights about monkeys (or about Joseph, your choice)",
badDecisionText: `You sleep in, arrive late, make a coffee and have a rant about Donald Trump`
})

var fridayFeels = new Scenario ({
id: 2,
name: "friday-feels",
time: "09:00",
text: `The bell rings and you join your Friday Feels group for two minutes of
sharing your feelings about the week and your Learning.`,
goodDecisionText: `Taking exactly two minutes, you coherently describe the key
points of your Learning and develop new insights in the Meaning of Life.`,
badDecisionText: `You spend your two minutes talking about the People of EDA wall.
Rohan very Kindly suggests you've missed the point of the exercise.`
})

var coffeebreak = new Scenario ({
id: 3,
name: "coffeebreak",
time: "10:00",
text: `Time for caffeine! You go to the communal kitchen and make yourself a coffee
and a snack.`,
goodDecisionText: `You clean up after yourself, unless you're an oppressed minority
in which case you can safely leave it to the white men.`,
badDecisionText: `You leave a trail of coffee-grounds and dirty dishes, and put your banana peel in the landfill bin.`
})

var crisis = new Scenario ({
id: 4,
name: "crisis before feature freeze",
time: "15:30",
text: `You realise that your team hasn't built all the features that were necessary for your project to work sufficiently in front
of everybody at 16:30.`,
goodDecisionText: `You recite 'process not product', remain calm, and prepare to talk about the Rich Learning Opportunities you've had.`,
badDecisionText: `You lose your temper, tell your team mates that it's all their fault and try to single handedly rewrite all the code in the next 20 minutes.`
})
