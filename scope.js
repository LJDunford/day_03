// var name  = "Lewis"

// var secretsFunction = function() {
//     var pinCode = [0, 0, 0, 0];
//     return `Pincode is ${pinCode}, and name is ${name}`
// }

// console.log(secretsFunction())

var filterNAmesByFirstLetter = function (names, letterToFilterBy){
    var filteredNames = [];
    for (let name of names){
        if (name[0] === letterToFilterBy){
            filteredNames.push(name);
        }
    }
    return filteredNames
}

var students = ["sarah", "kiera", "brian", "kelvin", "Tom"]
var filteredStudents = filterNAmesByFirstLetter(students, "k")
console.log('Filtered students:', filteredStudents)