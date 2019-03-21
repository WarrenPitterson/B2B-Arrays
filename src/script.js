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
//Don't modify the tests (unless i've wrote them wrong)
class PeopleParser {
    //Returns Rachaels age from the array
    getRachaelsAge() {
        let rachaelsAge = '';
            if (PEOPLE[3].age === 28) {
                rachaelsAge = PEOPLE[3].age
        return rachaelsAge;
        }
    }

    ///Return the first 3 people, Aiden, Warren and Sean.
    getTheFirst3PeopleOnly() {
             let people3 = PEOPLE.slice(0,3);
             return people3;
        }

    ///Return the list of people in alphabetical order
    listOfPeopleInAlphabeticalOrderByName() {
        return [];
    }

    ///Return everyones name concatanated one after another, split by a comma's and ending in a space.
    /// EG - Aiden, Warren, Sean, Rachael, Karl, Sinead, James, Martin.
    getEveryonesNameInCommaSeperatedValue() {
        return [];
    }

    ///Return the avergae age of all the developers
    getTheAverageAgeOfDevelopers() {
        return 0;
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
new PeopleParser().getRachaelsAge();
new PeopleParser().getTheFirst3PeopleOnly();
new PeopleParser().listOfPeopleInAlphabeticalOrderByName();
new PeopleParser().getEveryonesNameInCommaSeperatedValue();
new PeopleParser().getTheAverageAgeOfDevelopers();
new PeopleParser().getDoubleEveryonesMarioKartScore();
new PeopleParser().getMarioKartSkillGroupByCount();

module.exports = PeopleParser