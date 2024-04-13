//! Task-1 ( Creating a Class - Movie and practice )
console.log("<-----------------------Task-1----------------------->");
console.log("\n");

class Movie {
  //* a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
  //* b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}
const obj = new Movie("Uruttu Movie", "A2D production", "G");
const obj1 = new Movie(
  "Harry Potter and the Sorcerer's Stone",
  "Warner Bros. Pictures",
  "PG"
);
console.log(obj.title, obj.studio, obj.rating);
console.log(obj1.title, obj1.studio, obj1.rating);
const obj2 = new Movie("Home Alone", "Fox Television Studios");
console.log(obj2.title, obj2.studio, obj2.rating);

//* c)  Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

const movies = [
  new Movie("The Dark Knight", "Warner Bros. Pictures", "PG-13"),
  new Movie("Frozen", "Walt Disney Animation Studios", "PG"),
  new Movie("Inception", "Warner Bros. Pictures", "PG-13"),
  new Movie("Finding Dory", "Pixar Animation Studios", "PG"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

//* d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const obj3 = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(obj3);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! Task-2 ( Convert the UML diagram to Javascript class )
console.log("\n");
console.log("<-----------------------Task-2----------------------->");
console.log("\n");

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get Color() {
    return this.color;
  }
  set Color(c) {
    this.color = c;
  }
  get tostring() {
    return `"Circle[radius=${this.radius},color = ${this.color}]"`;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  get circumfrence() {
    return 2 * Math.PI * this.radius;
  }
}
let cir = new Circle(1.0, "red");
console.log(cir.radius);
console.log(cir.color);
console.log(cir.tostring);
console.log(cir.area);
console.log(cir.circumfrence);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! Task-3 (Write a “person” class to hold all the details.)
console.log("\n");
console.log("<-----------------------Task-3----------------------->");
console.log("\n");

class person {
  constructor(name, age, gender, martialstatus, contact, email) {
    this.username = name;
    this.age = age;
    this.gender = gender;
    this.martialstatus = martialstatus;
    this.contact = contact;
    this.email = email;
  }
}
const p1 = new person(
  "Yogadeepan.R",
  24,
  "male",
  "single",
  "9*605716**",
  "yogudeepan.r@gmail.com"
);
const p2 = new person(
  "Surya",
  25,
  "male",
  "single",
  "7*607*76*",
  "suriya2599@gmail.com"
);
const p3 = new person(
  "Prasath",
  24,
  "male",
  "single",
  "7**545*198",
  "suriyams2599@gmail.com"
);
console.log(p1, p2, p3);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! Task-4 ( write a class to calculate the Uber price )

console.log("\n");
console.log("<-----------------------Task-4----------------------->");
console.log("\n");

class UberPricing {
  constructor(costPerKm) {
    //* Base fare in rupees
    this.baseFare = 50;
    this.costPerKm = costPerKm;
  }
  calculatePrice(distanceInKm) {
    const totalPrice = this.baseFare + this.costPerKm * distanceInKm;
    return totalPrice;
  }
}

const costPerKm = 20; // Cost per kilometer in rupees
const distance = 10; // Distance in kilometers

const uberPricing = new UberPricing(costPerKm);
const totalPrice = uberPricing.calculatePrice(distance);
console.log("Total price for the ride: ₹" + totalPrice);
