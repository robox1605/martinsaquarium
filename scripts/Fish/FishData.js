/*

 *  To get you started, here's some properties of Bart.

 *  You need to add more properties to complete this

 *  representation as an object. Then add all the other

 *  fish to the collection.

 */

const fishCollection = [
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "Algae",
		name: "Malcolm",
		species: "Blue Tang",
		inches: 13,
		image: "bluetang.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Bali",
		diet: "Really small fish",
		name: "Bob",
		species: "Guppy",
		inches: 3,
		image: "guppy.jpg"
	},
	{   saltWater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "Squid",
		name: "BigBoss",
        species: "Amber Jack",
        inches: 60,
        image: "amberjack.jpg"
    },
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "Shellfish",
		name: "Jerry",
		species: "Swordfish",
		inches: 80,
		image: "swordfish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Gulf of Mexico",
		diet: "Tiny fish",
		name: "Predator",
		species: "Catfish",
		inches: 20,
		image: "catfish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Herring",
		name: "Sabre",
		species: "Swordfish",
		inches: 117.6,
		image: "swordfish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Amazon Basin",
		diet: "Brine Shrimp",
		name: "Myrti",
		image: "angelfish.jpg",
		inches: 12,
		species: "Angel Fish"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Plankton",
		name: "Nemo",
		species: "Clownfish",
		inches: 4,
		image: "clownfish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Mississippi River",
		diet: "Everything",
		name: "Vacuum",
		species: "Catfish",
		inches: 24,
		image: "catfish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Bobbies Fish Emporium",
		diet: "Minnows",
		name: "Ralph",
		species: "Smallmouth Bass",
		inches: 14,
		image: "smallmouthbass.png"
	},
	{
		saltWater: false,
		harvestLocation: "Cumberland River",
		diet: "Anything",
		name: "Whiskers",
		species: "Ictalurus Furcatus",
		inches: 39,
		image: "bluecatfish.jpg"
	},
	{   saltWater: true,
        harvestLocation: "South Pacific",
        diet: "Shrimp",
        inches: 64,
        species: "Tuna",
        name: "Bruno",
        image: "tuna.jpg" },

		{   saltWater: false,
        harvestLocation: "Petsmart",
        diet: "Algae",
        name: "Dorothy",
        species: "Goldfish",
        inches: 3,
        image: "goldfish.jpg" },
	{
		saltWater: false,
		harvestLocation: "Lake Tahoe",
		diet: "Insects",
		name: "Trent",
		species: "Rainbow Trout",
		inches: 21,
		image: "rainbowtrout.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Carribean Sea",
		diet: "Shrimp",
		name: "Stephen",
		species: "Angler",
		inches: 23,
		image: "angler.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Barbados",
		diet: "Anchoves",
		name: "Pizza",
		species: "Tuna",
		inches: 40,
		image: "tuna.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "TN River",
		diet: "Bacon",
		name: "Finn",
		species: "Bass",
		inches: 20,
		image: "bass.jpg",
	},
	{
		saltWater: true,
		diet: "Mollusks",
		name: "Simba",
		species: "Lionfish",
		harvestLocation: "Red Sea",
		Inches: 10,
		image: "lionfish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "New Zealand",
		diet: "Lost Sailors",
		name: "Tiki",
		species: "Parrot Fish",
		inches: 36,
		image: "parrotfish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Red Sea",
		diet: "Algae",
		name: "Bobo",
		species: "Clown Fish",
		inches: 5,
		image: "clownfish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Sea",
		name: "Flipper",
		inches: 12,
		image: "garibaldi.jpg",
		diet: "Worms",
		species: "Garibaldi"
	},
	{
		saltWater: true,
		harvestLocation: "Bikini Bottom",
		diet: "Big Ole Fish",
		name: "Pearl",
		species: "Whale",
		inches: 1000,
		image: "whale.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Port Innsmouth",
		diet: "Primeval Shadows",
		name: "Cthulhu",
		species: "Old One",
		inches: 999,
		image: "Cthulhu.jpg"
	},
	{   saltWater: false,
        harvestLocation: "Amazon River",
        diet: "Smaller Fish",
        name: "Bitey",
        species: "Pirhana",
        inches: 7.5, 
        image: "Pirhana.jpg"
    },
	{
		saltWater: true,
		harvestLocation: "St.Croix",
		diet: "Squid",
		name: "Crush",
		species: "Blue ting",
		inches: 7,
		image: "bluetang.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Minnesota",
		diet: "Cherry Tomatoes",
		name: "Frank",
		species: "Piranha",
		inches: 7,
		image: "Pirhana.jpg"
	},

	{   saltWater: true,
        harvestLocation: "Atlantic, Pacific, and southern sea",
        diet: "Smaller fish", 
        name: "Bluefin tuna", 
        species: "Thunnus thynnus",
        inches: 84,
        image: "bluefintuna.jpg" },
	{
		saltWater: true,
		harvestLocation: "Baltic Sea",
		diet: "Smaller fish",
		name: "Fil",
		species: "Goldfish",
		inches: 40,
		image: "goldfish.jpg"
	},
];

 export const getFish = () => {
        return fishCollection;
 };


 export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []
    for (const fishObj of fishCollection) {
		if ( fishObj.inches % 3 ===0 ) {
				holyFishArray.push(fishObj)
		}

    }

    return holyFishArray
 };

 export const getSoldierFish = () => {
	 // 5, 10, 15, 20, 25, etc... fish
	 const soldiersArray =[]
	 for ( const fishObj of fishCollection){
		 if (fishObj.inches % 5 ===0 && fishObj.inches %3 !==0){
				soldiersArray.push(fishObj)
			}
	 };
	 return soldiersArray
	}
 export const getUnworthyFish = () => {
	 // Any fish not a multiple of 3 or 5
	 const unworthyArray = []
	 for ( const fishObj of fishCollection) {
		 if (fishObj.inches % 3 !== 0 && fishObj.inches %5 !== 0){
			 unworthyArray.push(fishObj)
	 		}
		}
	 return unworthyArray
 };