'use strict';

let mbta = {
          redLine : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
           greenLine : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
           orangeLine : ['North Station', 'Haymarket', 'Park Street', 'Sate', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

let parkStreet = function(){

}

const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
  if(startLine!== endLine){
   return Math.abs((mbta[startLine].indexOf(startStation)) - (mbta[startLine].indexOf('Park Street')) -  (mbta[endLine].indexOf(endStation)) + 1);

}
  else{
    return Math.abs((mbta[startLine].indexOf(startStation)) - (mbta[endLine].indexOf(endStation)));
  }



};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
