const PEOPLE = [{
    name: "Aiden",
    age: 29,
    profession: "Developer",
    mariokartSkillRating: 5
}, {
    name: "Warren",
    age: 29,
    profession: "Trucker",
    mariokartSkillRating: 4
}, {
    name: "Sean",
    age: 26,
    profession: "Developer",
    mariokartSkillRating: 2
}, {
    name: "Rachael",
    age: 28,
    profession: "Project Manager",
    mariokartSkillRating: 2
}, {
    name: "Karl",
    age: 24,
    profession: "Developer",
    mariokartSkillRating: 4
}, {
    name: "Sinead",
    age: 28,
    profession: "Accountant",
    mariokartSkillRating: 2
}, {
    name: "James",
    age: 30, //LOL
    profession: "Merchanic",
    mariokartSkillRating: 1
}, {
    name: "Martin",
    age: 35,
    profession: "Developer",
    mariokartSkillRating: 4
}]


//All your changes should go within the PeopleParser class to complete this kata, 
//Don't modify the tests (unless i've wrote them wrong) thihsdophdsioguhl
class PeopleParser {
    //Returns Rachaels age from the array
    getRachaelsAge() {
        for (let i=0; i<PEOPLE.length; i++) { 
            let currentperson = PEOPLE[i]
            if (currentperson.name == "Rachael")
            return currentperson.age;
        }
   }
    

    ///Return the first 3 people, Aiden, Warren and Sean.
    getTheFirst3PeopleOnly() {
            return PEOPLE.slice(0,3);
        }

    ///Return the list of people in alphabetical order
    listOfPeopleInAlphabeticalOrderByName() {
        return [];
    }

    ///Return everyones name concatanated one after another, split by a comma's and ending in a space.
    /// EG - Aiden, Warren, Sean, Rachael, Karl, Sinead, James, Martin.
    getEveryonesNameInCommaSeperatedValue() {
        let names = ''
        for (let i=0; i<PEOPLE.length; i++) {
            names = names + PEOPLE[i].name + ', '
        }
        names = names.slice(0, -2)
        return names + '.';
    }

    ///Return the avergae age of all the developers
    getTheAverageAgeOfDevelopers() {
        let averageAges = 0
        let amountOfDevs = 0
        for (let i=0; i<PEOPLE.length; i++) {
            if (PEOPLE[i].profession == "Developer") {
                amountOfDevs ++
                averageAges = averageAges + PEOPLE[i].age
            }
    }
    averageAges = averageAges / amountOfDevs;
        return averageAges
    }

    ///Returns the array with everyones mariokart Skill Rating doubled.
    getDoubleEveryonesMarioKartScore() {
        return [];
    }

    /***
     *  Returns a new array, with the amount of people in a mariokart skill group
     * This one is slightly harder to test, so it might be wrong, but i expect to see 
     * [{rating : 5, count : 1}, {rating : 4, count : 3}...] */

    getMarioKartSkillGroupByCount() {
        return [];
    }

}

//Used to help debugging.
//new PeopleParser().getRachaelsAge();
//new PeopleParser().getTheFirst3PeopleOnly();
//new PeopleParser().listOfPeopleInAlphabeticalOrderByName();
//new PeopleParser().getEveryonesNameInCommaSeperatedValue();
console.log(new PeopleParser().getTheAverageAgeOfDevelopers());
//new PeopleParser().getDoubleEveryonesMarioKartScore();
//new PeopleParser().getMarioKartSkillGroupByCount();

module.exports = PeopleParser