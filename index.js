// variable declaration and assignment
// var man = "Muhammed"
// var phoneNumber = 8089075252
// var disability = false
// var accountBalance = undefined
// var debt = null
// var greeting = "Hello World"
// var cp = 25000
// var sp = 34000
// var p = sp - cp
// var pp = (p/cp) * 100

// var firstName = "Muhammed"
// var lastName = "Oyebanji"
// var course = "Web Development"
// var school = "GMC"
// var dreamSalary = 1000000
// var jobTitle = "Software Developer"
// var sentence = "My name is " + firstName + " " + lastName + ", I am currently studing " + course + " at " + school + ". I would like to be a " + jobTitle + " earning " + dreamSalary + "."

var president = "Tinubu"
var nickName = "T-Pain"
var description = "amazing "
var wishes = " long life and properity."
var sentence1 = "The name of my is " + president + ", we call him " + nickName + ", he is the most " + description + "president ever. I wish him" + wishes

// printing value using the console
// console.log("Hello world")
// console.log(man)
// console.log(debt)
// console.log(phoneNumber)
// console.log(accountBalance)
// console.log(disability)

// console.log(p)
// console.log(pp)
// console.log(sentence)
// console.log(sentence1)

// // Introduction to arrays
// var shoppingCart = ["Milo", "Sardine", "Water", "Bread", "GoldenMorns", 100]
// var array2 = [undefined, null, 25, false, "Testing"]

// Array methods
// .pop(), .push(), .shift(), .unshift(), 
// shoppingCart.pop()

// console.log(shoppingCart)
// shoppingCart.pop()
// console.log(shoppingCart)

// shoppingCart.push("Wahala, Big, Turkey")
// console.log(shoppingCart)

// shoppingCart.shift()
// console.log(shoppingCart)

// shoppingCart.unshift("Noddles, Spagetti")
// console.log(shoppingCart)
// console.log(shoppingCart.length)
// console.log(shoppingCart[2])

// var className = ["Mubarak", "Fola", "Rasheed", "Fisayo", "Korede", "Fiyinfoluwa", "Moridiyat", "Jubril", "Bastard Money", "Chidinma"]
// console.log(className)

// className.push("Kingsley")
// className.unshift("Kingsley")
// console.log(className)
// console.log(className[4])

// className[7] = "Temitope"
// console.log(className)

// // Conditional Statement


// var age = 17
// if (age >= 18) {
//     console.log("You can vote")
// }
// else{
//     console.log("You can't vote")
// }

// var accountBalance = 61000
// if (accountBalance <= 50000){
//     console.log("Omo I don BROKE die!!!")
// }
// else{
//     console.log("Omo I get money pass Mark ooo!!!")
// }

// var student = false
// if(student === true){
//     console.log("Free Ticket")
// }
// else(
//     console.log("Please pay your money!!!")
// )

// var customerAge = 34
// if (customerAge >= 1 && customerAge <= 13){
//     console.log("Free Ticket!!!")
// } else if (customerAge >= 14 && customerAge <= 20){
//     console.log("Your bill is 5k!")
// } else if (customerAge >=21 && customerAge <= 30){
//     console.log("Your bill is 10k!")
// } else {
//     console.log("Your bill is 20k!")
// }

var customer = "T-Pain family"
if (customer === "Student"){
    console.log("Your bill is 2k!")
} else if (customer === "Civil Servants"){
    console.log("Your bill is 5k!")
} else if (customer === "Developer"){
    console.log("Your bill is 100k!")
} else if (customer === "Yahoo Boy"){
    console.log("Your bill is 20k!")
} else {
    console.log("Your bill is 1BTC!")
}
    