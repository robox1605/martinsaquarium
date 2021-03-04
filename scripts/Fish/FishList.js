import { Fish } from "./Fish.js";
import {getMostHolyFish, getFish,getSoldierFish,getUnworthyFish} from "./FishData.js";

export const FishList = () =>{
    // gettin fish array
    // const allFishes = getMostHolyFish().concat(getSoldierFish(),(getUnworthyFish()));
    // const allFishes = getFish()
    const holyFish=getMostHolyFish();
    const soldierFish=getSoldierFish();
    const unworhtyFish=getUnworthyFish();
    const allFishes = holyFish.concat(soldierFish, unworhtyFish);
    // get ref to locationon DOM where u want display list
    const DOMLocation = document.querySelector("#FishList");
    console.log ("fishlist reference", DOMLocation);
    let fishHTMLRepresentations = "";
    // declaring variable to hold on to fish html rep
    for (const oneThingFromTheSea of allFishes){
        // do something with this thing
        fishHTMLRepresentations += Fish(oneThingFromTheSea);
        
    }
    console.log ("fishHTMLRepresentations", fishHTMLRepresentations);
    DOMLocation.innerHTML += fishHTMLRepresentations;
}
