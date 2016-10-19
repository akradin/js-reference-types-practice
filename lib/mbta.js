'use strict';

let mbta = {
          redLine : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
           greenLine : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
           orangeLine : ['North Station', 'Haymarket', 'Park Street', 'Sate', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};


let howManyStops = function(lineOn, stopOn, lineOff, stopOff){
      return Math.abs((mbta[lineOn].indexOf(stopOn)) - (mbta[lineOff].indexOf(stopOff)));
  };
howManyStops();


const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
