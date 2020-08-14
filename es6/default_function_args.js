function getLocation(city, country, continent) {
    if (typeof country === 'undefined') {
        country = 'Italy'
    }
    if (typeof continent === 'undefined') {
        continent = 'Europe'
    }
    console.log(continent, country, city)
}

getLocation('Milan')
getLocation('Paris', 'France')

if (undefined === undefined) {
    console.log("true")
}
if (typeof undefined === 'undefined') {
    console.log("true")
}

////////////////////////////////////////////////////////////
// Default function arguments
//////////////////////////////////////////////////////////// 


let var1 = undefined * 100;
console.log(var1)