const harvestLocationCollection = [
	{
		Name: "Port Innsmouth",
	    image: "inssmouth.jpg",
        visited: "February 14, 1721",
        details: "Contains fish rarely seen more than once."

},
    {
        Name: "Barbados",
	    image: "barbados.jpg",
        visited: "September 2, 2001",
        details: ""
},      
    {  
        Name: "St. Croix",
        image: "stcroix.jpg",
        visited: "October 4, 1987",
        details: ""
},
    {
	    Name: "Amazon Basin",
        image: "amazonbasin.jpg",
        visited: "November 5, 2002",
        details: ""
},
];

export const getHarvestLocation = () => {
    return harvestLocationCollection;
}
