var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

var instruments = ['rhythm guitar', 'bass guitar', 'lead guitar', 'the drums'];

var musiciansPlayingInstruments = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    var instrumentStatement = (musicians[i] + " plays " + instruments[i] + ".");
    musiciansPlayingInstruments.push(instrumentStatement);
  }
  return(musiciansPlayingInstruments);
}

var factsAboutJohnLennon = [
  "His middle name was Winston",
  ""
  ]
}
