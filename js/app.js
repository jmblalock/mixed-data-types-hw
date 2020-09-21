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
    };

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
    ];

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
    ];

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

// 1.
rainbowArray = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];

// 2.
const blue = rainbowArray[4];
console.log(blue);

// 3.
const justin = {
    favoriteFood: 'bbq',
    hobby: 'snowboarding',
    town: 'austin',
    favoriteDataType: 'number'
}

// 4.
const jHobby = justin.hobby;
console.log(jHobby);