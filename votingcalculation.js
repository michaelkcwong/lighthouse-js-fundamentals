//Voting Station Calculation
//Must have a capacity of at least 20, and be a school or community centre
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

function chooseStations(stations) {
  const goodStations = []
  //I'm going through each station out of all the stations
  for (const station of stations) { 
    //Looking for the capacity of each station 
    const capacity = station[1]
    //Looking for 20 or more capacity for each station
    if (capacity >= 20) {
        //Looking for type of station school or community center
      const type = station[2]
        //If school or community center show station
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  } 
  return goodStations
}

console.log(chooseStations(stations))