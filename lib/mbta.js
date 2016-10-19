'use strict';

let mbta = {
          Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
           Green : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
           Orange : ['North Station', 'Haymarket', 'Park Street', 'Sate', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};



const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {

if(startLine !== endLine){
 return Math.abs((mbta[startLine].indexOf(startStation)) - (mbta[startLine].indexOf('Park Street'))) +  Math.abs(mbta[endLine].indexOf('Park Street')-(mbta[endLine].indexOf(endStation)));
 }
else{
    return Math.abs((mbta[startLine].indexOf(startStation)) - (mbta[endLine].indexOf(endStation)));
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
