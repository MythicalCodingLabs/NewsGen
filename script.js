const open = ["Welcome back, today we have news about", "Hello, todays news is,"]
const person = ["Elon Musk", "Jeffery Bezozs","Albert Einstein", "Bill Nye","Chris Pratt"]
const action = ["eating", "running", "hiding", "fucking"]
const thing = ["a massive fish", "a live human","sphere", "packet of venna beef hot dogs", "Epi Pen"]
const place = ["at vidcon.", "in a park", "in his house", "Mc Donald's", "Nantucket"]
const good = []
const bad = []
function genNews(){
  var openIn = open.at(Math.floor(Math.random() * open.length))
  var personIn = person.at(Math.floor(Math.random() * person.length))
  var actionIn = action.at(Math.floor(Math.random() * action.length))
  var thingIn = thing.at(Math.floor(Math.random() * thing.length))
  var placeIn = place.at(Math.floor(Math.random() * place.length))
  if(bad.includes(open.indexOf(openIn) + "" + person.indexOf(personIn) + action.indexOf(actionIn) + thing.indexOf(thingIn) + place.indexOf(placeIn))){
   genNews()
  }
  else{
    document.getElementById("output").innerHTML = openIn + " " + personIn + " " + actionIn + " " + thingIn + " " + placeIn;
  alert(openIn + " " + personIn + " " + actionIn + " " + thingIn + " " + placeIn)
  }
  if(confirm("Good?")){
    good.push(open.indexOf(openIn) + "" + person.indexOf(personIn) + action.indexOf(actionIn) + thing.indexOf(thingIn) + place.indexOf(placeIn))
  }
  else{
    bad.push(open.indexOf(openIn) + "" + person.indexOf(personIn) + action.indexOf(actionIn) + thing.indexOf(thingIn) + place.indexOf(placeIn))
  }
}
function printData(){
  document.getElementById("data").innerHTML = "Good data:" + "<br>" + good + "<br>" + "Bad data:" + "<br>" + bad;
}