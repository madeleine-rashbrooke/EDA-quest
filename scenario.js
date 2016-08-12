class Scenario {
  constructor(options) {
    const {id, name, time, text, goodDecisionText, badDecisionText} = options
    this.id = id;
    this.name = name;
    this.time = time;
    this.text = text;
    this.goodDecisionText = goodDecisionText;
    this.badDecisionText = badDecisionText;
  }

  getScenarioId() {
    return this.id;
  }

  getScenarioName() {
    return this.name;
  }

  getScenarioTime() {
    return this.time;
  }

  getScenarioText() {
   return this.text;
  }

  getGoodDecisionText() {
    return this.goodDecisionText;
  }

  getBadDecisionText() {
    return this.badDecisionText;
  }

}
module.exports = Scenario
