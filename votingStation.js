const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

function chooseStations (stations) {
  const goodStations = [] //storing the good stations
  for (let station of stations) { //loop to go through each station
    let capacity = station[1] // capacity of station
    if (capacity >= 20) {
      let location = station[2] // location of station
      if (location === "school" || location === "community centre") { //checks if the stations are in school or community centre
        goodStations.push(station[0]) //pushes the station that fit the criteria to the goodStations
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));