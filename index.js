// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(drivers, string) {
    return drivers.filter((match) => match.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, nameOfDriver){
    return drivers.filter((match) => match.toLowerCase().indexOf(nameOfDriver.toLowerCase()) === 0);
}

function matchName(drivers, nameDriver) {
    return drivers.filter((result) => result.name === nameDriver)
}

