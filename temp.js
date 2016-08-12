console.log("howdy")

var Scenario = require("./scenario")
var Player = require("./player")

var accountabilityGroup = new Scenario({
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

console.log(accountabilityGroup.getScenarioText())

var george = new Player("george")

console.log(george.getPlayerName())
