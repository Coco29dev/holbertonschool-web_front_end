class studentHowgwarts {
  constructor() {
    this.privateScore = 0;
    this.name = null;
  }

  #ChangeScoreBy(points) {
    this.privateScore += points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    this.#ChangeScoreBy(1);
  }

  penalizeStudent() {
    this.#ChangeScoreBy(-1);
  }

  getScore() {
    return `${this.name}: ${this.privateScore}`;
  }
}
const harry = new studentHowgwarts();
harry.setName('Harry Potter');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHowgwarts();
draco.setName('Draco Malfoy');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
