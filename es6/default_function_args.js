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
function calculatePrice(total, tax = 0.1, tip = 0.05) {
    return total + (total * tax) + (total * tip)
}

let price = calculatePrice(100, 0.15)
console.log(price)

price = calculatePrice(100, undefined, 0.15)
console.log(price)

function calculatePrice2({
                             total = 0,
                             tax = 0.1,
                             tip = 0.05
                         } = {}) {
    console.log("total: " + total)
    console.log("tax: " + tax)
    console.log("tip: " + tip)
    console.log(total + (total * tax) + (total * tip));
}


calculatePrice2({tip: 0.15, total: 150})

calculatePrice2()
calculatePrice2(undefined)