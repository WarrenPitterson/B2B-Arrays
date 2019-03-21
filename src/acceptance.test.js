const PeopleParser = require('./script');


test('getRachaelsAge should return 28', () => {
  expect(new PeopleParser().getRachaelsAge()).toBe(28);
});

test('getTheFirst3PeopleOnly should return the first 3 people', () => {
    expect(new PeopleParser().getTheFirst3PeopleOnly()).toEqual([{
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
    expect(new PeopleParser().listOfPeopleInAlphabeticalOrderByName()).toEqual( [{
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
    expect(new PeopleParser().getEveryonesNameInCommaSeperatedValue()).toBe('Aiden, Warren, Sean, Rachael, Karl, Sinead, James, Martin.');
  });

  test('getTheAverageAgeOfDevelopers should return a 28.5', () => {
    expect(new PeopleParser().getTheAverageAgeOfDevelopers()).toBe(28.5);
  });

  test('getDoubleEveryonesMarioKartScore should return the same array with CSV of all the scores doubled.', () => {
    expect(new PeopleParser().getDoubleEveryonesMarioKartScore()).toEqual([{
        name: "Aiden",
        age: 29,
        profession: "Developer",
        mariokartSkillRating: 10
    }, {
        name: "Warren",
        age: 29,
        profession: "Trucker",
        mariokartSkillRating: 8
    }, {
        name: "Sean",
        age: 26,
        profession: "Developer",
        mariokartSkillRating: 4
    }, {
        name: "Rachael",
        age: 28,
        profession: "Project Manager",
        mariokartSkillRating: 4
    }, {
        name: "Karl",
        age: 24,
        profession: "Developer",
        mariokartSkillRating: 8
    }, {
        name: "Sinead",
        age: 28,
        profession: "Accountant",
        mariokartSkillRating: 4
    }, {
        name: "James",
        age: 30, //LOL
        profession: "Merchanic",
        mariokartSkillRating: 2
    }, {
        name: "Martin",
        age: 35,
        profession: "Developer",
        mariokartSkillRating: 8
    }]);
  });

  test('getMarioKartSkillGroupByCount should return a new array with the counts.', () => {
    expect(new PeopleParser().getMarioKartSkillGroupByCount()).toEqual([{rating : 5, count : 1}, {rating : 4, count : 3}, {rating: 3, count : 0}, {rating: 2, count: 2},{ rating: 1, count: 1}]);
  });