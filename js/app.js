/*
### 1. Data types

#### Refresher

So far we have seen:

* Strings
* Numbers
* Booleans
* Arrays
* Objects

When these datatypes are combined, we get a **data structure**, for example, 
an array that contains objects that each contain booleans.

Suppose you are tasked with creating some software, and it is up to **you** to
determine which datatypes and what data structure to use.  For each of the
following, write which **data types** you would use to represent the data, and
then give a small example of the **data structure**:

  * A light switch that can be either on or off.
  * A user's email address.
  * A spaceship with a hull, laser blasters, tractor beam, and warp drive.
  * A list of student names from our class.
  * A list of student names from our class, each with a location.
  * A list of student names from our class, each with a location and each with
    a list of favorite tv shows.
*/
    
// => Boolean
    const lightSwitchOn = true;
    
// => String
    const userEmail = 'jdoe@gmail.com'
    
// => Object that contains Numbers && Booleans
    const spaceship = {
        hull: 5,
        laserBlasters: 2,
        tractorBeam: false,
        warpDrive: true,
    }

// => Array that contains Strings
    const arrayOfStrings = ['student one', 'student two', 'student three'];

// => Array of Objects
    const arrayOfObjects = [
        studentOne = {
            name: 'student one',
            location: 'ATX'
        },
        studentTwo = {
            name: 'student two',
            location: 'SEA'
        },
    ]

// => Array of Objects with Strings and nested Array of Strings
    const arrayOfThings = [
        studentOne = {
            name: 'student one',
            location: 'ATX',
            favShows: ["schitt's creek",
                        "game of thrones",
                        "tiger king"],
        },
        studentTwo = {
            name: 'student one',
            location: 'SEA',
            favShows: ["new girl",
                        "the last dance",
                        "stranger things"],
        },
    ]

/*
### 2. Take it Easy

1.  Make an array that holds all of the colors of the rainbow.
2.  Write code that will access "blue" from the rainbow array.
3.  Make an object that is called your name and holds the information about 
    your favorite food, a hobby, the name of the town that you live in 
    currently, and your favorite datatype.
4.  Write code that will access your hobby from the object that you just 
    created.
*/

// 2-1.
rainbowArray = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]

// 2-2.
const blue = rainbowArray[4];
console.log(blue);

// 2-3.
const justin = {
    favoriteFood: 'bbq',
    hobby: 'snowboarding',
    town: 'austin',
    favoriteDataType: 'number'
}

// 2-4.
const jHobby = justin.hobby;
console.log(jHobby);

/*
### 3. Crazy Object!
Use crazyObject to log the following.

  * "omg my mouth is burning"
  * "Pretty pretty prettayyyyy good"
  * "Swearing at Larry and Jeff"
  * "Chicken Teriyaki Boyyyyyy"
  * The object the contains the name `funkhauser`
*/

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

// 3-1.
console.log(crazyObject.taco[1].salsa[5]);

// 3-2.
console.log(crazyObject.larry.quotes[0]);

// 3-3. 
console.log(crazyObject.larry.characters[2].favourtieHobby);

// 3-4.
console.log(crazyObject.larry.nicknames[1]);

// 3-5.
console.log(crazyObject.larry.characters[1]);

/*
### 4. Object-ception

With the following object:

Change the value of `limbo` to `null`.
*/

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.
dreamLayer5.dreamLayer6.limbo = null;

/*
### 5-7. Bond Films

Copy the following `bondFilms` **array** of **objects** above into your js 
file. Use loops and conditionals and functions in order to complete the below:

5.  Create a new array called `bondTitles` with only the titles of the Bond 
    films, and console.log the new array.

6.  Create a new array `oddBonds`, of only the Bond films released on 
    odd-numbered years.

7.  Determine the total cumulative gross of the Bond franchise, and console.log
    the result.
*/

const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
]

// 5.
const bondTitles = [];

for (const i in bondFilms) {
    bondTitles.push(bondFilms[i]["title"]);
}

console.log(bondTitles);