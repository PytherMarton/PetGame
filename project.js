const inquirer = require("inquirer");

health = 100;
happiness = 100;
attack = 100;
defense = 100;

function eat(){
  health = health +12;
  happiness = happiness +7;
}

const magic = () => {
  health += 10;
  happiness += 10;
  attack += 10;
  defense += 10;
}

const meditate = () => {
  health += 35;
  happiness += 35;
  attack -= 10;
  defense -= 35;
}

const bite = () => {
  health -= 10;
  happiness += 25;
  attack += 10;
  defense -= 10;
}

class Pet {
    constructor(type, name, colour, sex, superpower) {
      this.type = type;
      this.name = name;
      this.colour = colour;
      this.sex = sex;
      this.power = superpower;
    }
}
  
class Unicorn extends Pet {
    constructor(type, name, colour, sex, superpower, skill) {
      super(type, name, colour, sex, superpower);
      this.skill = skill;

      if(type == "Baby") {
        health = 90;
      } else if (type == "Adult") {
        health = 110;
      } else {
        health = 80;
      }
      if (colour == "White" || colour == "Black") {
        happiness = 120;
      } else if (colour == "Brown" || colour == "Purple"){
        happiness = 70;
      } else {
        happiness = 80;
      }
      if (sex == "Male") {
        attack = 75;
      } else if (sex == "Female") {
        attack = 125;
      } else {
        attack = 50;
      }
      if (superpower == "Teleport"){
        defense = 200;
      } else if (superpower == "Flight"){
        defense = 73;
      } else if (superpower == "Invisible"){
        health = 150;
        happiness = 150;
        attack = 150;
        defense = 150;
      } else if (superpower == "Time travel"){
        health = 100;
        happiness = 100;
        attack = 100;
        defense = 100;
      } else {
        health = 50;
        happiness = 50;
        attack = 200;
        defense = 200;
      }
    }
}

class Seahorse extends Pet {
    constructor(type, name, colour, sex, superpower, skill) {
      super(type, name, colour, sex, superpower);
      this.skill = skill;

      if(type == "Baby") {
        health = 115;
      } else if (type == "Adult") {
        health = 95;
      } else {
        health = 130;
      }
      if (colour == "White" || colour == "Black") {
        happiness = 75;
      } else if (colour == "Brown" || colour == "Purple"){
        happiness = 90;
      } else {
        happiness = 100;
      }
      if (sex == "Male") {
        attack = 125;
      } else if (sex == "Female") {
        attack = 75;
      } else {
        attack = 100;
      }
      if (superpower == "Teleport"){
        defense = 200;
      } else if (superpower == "Flight"){
        defense = 73;
      } else if (superpower == "Invisible"){
        health = 150;
        happiness = 150;
        attack = 150;
        defense = 150;
      } else if (superpower == "Time travel"){
        health = 100;
        happiness = 100;
        attack = 100;
        defense = 100;
      } else {
        health = 50;
        happiness = 50;
        attack = 200;
        defense = 200;
      }
    }
}

class Tiger extends Pet {
    constructor(type, name, colour, sex, superpower, skill) {
      super(type, name, colour, sex, superpower);
      this.skill = skill;
    
      if(type == "Baby") {
        health = 125;
      } else if (type == "Adult") {
        health = 125;
      } else {
        health = 35;
      }
      if (colour == "White" || colour == "Black") {
        happiness = 75;
      } else if (colour == "Brown" || colour == "Purple"){
        happiness = 100;
      } else {
        happiness = 110;
      }
      if (sex == "Male") {
        attack = 150;
      } else if (sex == "Female") {
        attack = 100;
      } else {
        attack = 40;
      }
      if (superpower == "Teleport"){
        defense = 200;
      } else if (superpower == "Flight"){
        defense = 73;
      } else if (superpower == "Invisible"){
        health = 150;
        happiness = 150;
        attack = 150;
        defense = 150;
      } else if (superpower == "Time travel"){
        health = 100;
        happiness = 100;
        attack = 100;
        defense = 100;
      } else {
        health = 50;
        happiness = 50;
        attack = 200;
        defense = 200;
      }
    }
}

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      }
    ])
    .then((answer) => {
      console.log(`Welcome ${answer.name}!`)
    })
    .then(() => petBuild())
    .catch((error) => {
      console.log(error)
    })
}

const petBuild = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "petP",
        message: "Please choose a pet: ",
        choices: ["Unicorn", "Seahorse", "Tiger"],
      },
      {
        type: "input",
        name: "nameP",
        message: "Please name your pet: ",
      },
      {
        type: "list",
        name: "typeP",
        message: "What type of pet do you want?",
        choices: ["Baby", "Adult", "Random"],
      },
      {
        type: "list",
        name: "colourP",
        message: "Please choose a colour for your pet: ",
        choices: ["White", "Black", "Yellow", "Brown", "Orange", "Blue", "Purple", "Green", "Red"],
      },
      {
        type: "list",
        name: "genderP",
        message: "Please choose your pet's gender: ",
        choices: ["Male", "Female", "Other"],
      },
      {
        type: "list",
        name: "powerP",
        message: "Please choose your pet's superpower: ",
        choices: ["Teleport", "Flight", "Invisible", "Time travel", "Super speed"],
      },
    ])
    .then((answers) => {
      if (answers.petP == "Unicorn"){
        pet = new Unicorn (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Magic");
      } else if (answers.petP == "Seahorse"){
        pet = new Seahorse (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Meditate");
      } else {
        pet = new Tiger (`${answers.typeP}`, `${answers.nameP}`, `${answers.colourP}`, `${answers.genderP}`, `${answers.powerP}`, "Bite");
      }
    })
    .then(() => status())
}

const status = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "statusP",
        message: "Do you want to check your Pet status?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.statusP == "Yes"){
        console.log("-------------------")
        console.log(pet);
        console.log("-------------------")
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
        console.log("-------------------")
        console.log("Let's interact with your pet.")
        console.log("-------------------")
      } else {
        console.log("-------------------")
        console.log("Let's interact with your pet.");
        console.log("-------------------")
      }
    })
    .then(() => gameLoop())
}

const gameLoop = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "optionP",
        message: "What would you like to do next? ",
        choices: ["Check your Pet Status >", "Eat", "Drink", "Play", "Hunt", "Learn", "Use your Unic skill"],
      },
    ])
    .then((answer) => {
      if (answer.optionP == "Check your Pet Status >"){
        console.log(pet);
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
      }
      if (answer.optionP == "Eat"){
        eat();
      }
      if (answer.optionP == "Drink"){
        console.log(pet);
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
      }
      if (answer.optionP == "Play"){
        console.log(pet);
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
      }
      if (answer.optionP == "Hunt"){
        console.log(pet);
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
      }
      if (answer.optionP == "Learn"){
        console.log(pet);
        console.log(`Health: ${health}`);
        console.log(`Happiness: ${happiness}`);
        console.log(`Attack: ${attack}`);
        console.log(`Defense: ${defense}`);
      }
      if (answer.optionP == "Use your Unic skill"){
        if (pet == "Unicorn") {
          magic();
        } else if (pet == "Seahorse") {
          meditate();
        } else {
          bite();
        }
      }
    })
    .then(() => gameLoop())
}

init();