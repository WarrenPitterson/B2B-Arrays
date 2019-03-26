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
        for (let i = 0; i < PEOPLE.length; i++) {
            let currentperson = PEOPLE[i]
            if (currentperson.name == "Rachael")
                return currentperson.age;
        }
    }
    //return PEOPLE[3].age


    ///Return the first 3 people, Aiden, Warren and Sean.
    getTheFirst3PeopleOnly() {
        return PEOPLE.slice(0, 3);
    }

    ///Return the list of people in alphabetical order
    listOfPeopleInAlphabeticalOrderByName() {
        for (let i = 0; i<PEOPLE.length; i++) {
        return PEOPLE.sort
    }
}


    ///Return everyones name concatanated one after another, split by a comma's and ending in a space.
    /// EG - Aiden, Warren, Sean, Rachael, Karl, Sinead, James, Martin.
    getEveryonesNameInCommaSeperatedValue() {
        let names = ''
        for (let i = 0; i < PEOPLE.length; i++) {
            names = names + PEOPLE[i].name + ', '
        }
        names = names.slice(0, -2)
        return names + '.';
    }

    ///Return the avergae age of all the developers
    getTheAverageAgeOfDevelopers() {
        let averageAges = 0
        let amountOfDevs = 0
        for (let i = 0; i < PEOPLE.length; i++) {
            if (PEOPLE[i].profession == "Developer") {
                amountOfDevs++
                averageAges = averageAges + PEOPLE[i].age
            }
        }
        averageAges = averageAges / amountOfDevs;
        return averageAges
    }

    ///Returns the array with everyones mariokart Skill Rating doubled.
    getDoubleEveryonesMarioKartScore() {
        for (let i = 0; i < PEOPLE.length; i++) {
            PEOPLE[i].mariokartSkillRating = PEOPLE[i].mariokartSkillRating * 2
        }
        return PEOPLE;
    }


    /***
     *  Returns a new array, with the amount of people in a mariokart skill group
     * This one is slightly harder to test, so it might be wrong, but i expect to see 
     * [{rating : 5, count : 1}, {rating : 4, count : 3}...] */

    getMarioKartSkillGroupByCount() {
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;
        let count5 = 0;
        for (let i = 0; i < PEOPLE.length; i++) {
            if (PEOPLE[i].mariokartSkillRating == 1) {
                count1 ++
            } else if (PEOPLE[i].mariokartSkillRating == 2) {
                count2 ++
            } else if (PEOPLE[i].mariokartSkillRating == 3) {
                count3 ++
            } else if (PEOPLE[i].mariokartSkillRating == 4) {
                count4 ++
            } else if (PEOPLE[i].mariokartSkillRating == 5) {
                count5 ++
            }
        }
        let ratings = [{"rating" : 1, "count" :count1,  }, {"rating" : 2, "count":count2}, {"rating" : 3, "count":count3}, {"rating" : 4, "count":count4}, {"rating" : 5, "count":count5}];
        return ratings
    }

}


    //Used to help debugging.
    //new PeopleParser().getRachaelsAge();
    //new PeopleParser().getTheFirst3PeopleOnly();
    console.log(new PeopleParser().listOfPeopleInAlphabeticalOrderByName());
    //new PeopleParser().getEveryonesNameInCommaSeperatedValue();
    //new PeopleParser().getTheAverageAgeOfDevelopers();
    //new PeopleParser().getDoubleEveryonesMarioKartScore();
    //console.log(new PeopleParser().getMarioKartSkillGroupByCount());

    module.exports = PeopleParser