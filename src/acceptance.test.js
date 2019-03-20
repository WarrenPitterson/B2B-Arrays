const getRachaelsAge = require('./script');
const getTheFirst3PeopleOnly = require('./script');
const listOfPeopleInAlphabeticalOrderByName = require('./script');
const getEveryonesNameInCommaSeperatedValue = require('./script');
const getTheAverageAgeOfDevelopers = require('./script');
const getDoubleEveryonesMarioKartScore = require('./script');

test('getRachaelsAge should return 28', () => {
  expect(getRachaelsAge()).toBe(28);
});

test('getTheFirst3PeopleOnly should return the first 3 people', () => {
    expect(getTheFirst3PeopleOnly()).toBe([{
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
    }]
    );
  });

  test('listOfPeopleInAlphabeticalOrderByName should return all the people in alphabetical order', () => {
    expect(listOfPeopleInAlphabeticalOrderByName()).toBe( [{
        name: "Aiden",
        age: 29,
        profession: "Developer",
        mariokartSkillRating: 5
    }, {
        name: "James",
        age: 30, //LOL
        profession: "Merchanic",
        mariokartSkillRating: 1
    }, {
        name: "Karl",
        age: 24,
        profession: "Developer",
        mariokartSkillRating: 4
    }, {
        name: "Martin",
        age: 35,
        profession: "Developer",
        mariokartSkillRating: 4
    }, {
        name: "Rachael",
        age: 28,
        profession: "Project Manager",
        mariokartSkillRating: 2
    }, {
        name: "Sean",
        age: 26,
        profession: "Developer",
        mariokartSkillRating: 2
    }, {
        name: "Sinead",
        age: 28,
        profession: "Accountant",
        mariokartSkillRating: 2
    }, {
        name: "Warren",
        age: 29,
        profession: "Trucker",
        mariokartSkillRating: 4
    }]
    );
  });

  test('getEveryonesNameInCommaSeperatedValue should return a CSV of all the names.', () => {
    expect(getEveryonesNameInCommaSeperatedValue()).toBe('Aiden, Warren, Sean, Rachael, Karl, Sinead, James, Martin.');
  });