function compareArrays(arr1, arr2) {
    if(arr1.length === arr2.length &&
        arr1.every((value, index) => value === arr2[index])) {
        return true;
    } else {
        return false;
    }
}


function getUsersNamesInAgeRange(users, gender) {
 let result = users.
 filter(user => user.gender == gender).map(user => user.age).reduce((acc, age, i, arr) => acc + age / arr.length, 0)


    /*let male = users.filter(user => user.gender == "мужской");
    let famale = users.filter(user => user.gender == "женский");
      
    let maleAge = male.map(user => user.age);
    let famaleAge = famale.map(user => user.age);
    
       
    let totalMale = maleAge.reduce((acc, age) => acc + age / maleAge.length, 0);
    let totalFamale = famaleAge.reduce((acc, age) => acc + age / famaleAge.length, 0);

    console.log(totalFamale);*/

    return result;
}
   

