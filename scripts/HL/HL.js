export const harvestLocation = (HLObj) => {
	return(
  	          `<div class="harvest-card">
				<div><img class="HL-image" src="images/${HLObj.image}" /></div>
				<div class="HL-name">Location: ${HLObj.Name}  </div>
				<div class="HL-visited">First Visited: ${HLObj.visited} </div>
				<div class="HL-details">Details: ${HLObj.details}</div>
	      	</div>`
	)
}