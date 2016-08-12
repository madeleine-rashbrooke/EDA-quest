class Player {
  constructor(name) {
    this.name = name;
    this.negCount = 0;
    this.posCount = 0;
    this.decisions = [];
  }

  getPlayerName() {
    return this.name;
  }

  getNegCount() {
    return negCount;
  }

  getPosCount() {
    return posCount;
  }

  increaseNegCount() {
    this.negCount++;
  }
  increasePosCount() {
    this.posCount++;
  }

  saveDecision(decisionButtonText) {
    this.decisions.push(decisionButtonText);
  }

  showAllDecisions() {
    return this.decisions;
  }
}

module.exports = Player
