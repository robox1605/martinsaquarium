import {harvestLocation} from "./HL.js";
import { getHarvestLocation } from "./HL-Data.js";



export const placesHL = () =>{
    
const allhlLocations = getHarvestLocation();
const DOMLocation = document.querySelector("#harvestLocationList");   
let HLHTMLRepresentations = "";    


 
for (const onethingofMany of allhlLocations){
 
    HLHTMLRepresentations += harvestLocation(onethingofMany);
    }
    DOMLocation.innerHTML += HLHTMLRepresentations;
}
