"use strict";
function makeDiv(dim) {
    var ret = document.createElement("div");
    ret.style.width = dim.width.toString();
    ret.style.height = dim.height.toString();
    ret.style.cssFloat = "left";
    return ret;
}
var People = [
    "Benjamin Franklin",
    "Justin Bieber",
    "Donald Trump",
    "Barack Obama",
    "John F Kennedy",
    "George Washington",
    "Abraham Lincon",
    "Williams 'Boss' Tweed",
    "Julius Caesar",
    "Alexander the Great",
    "Plato",
    "Aristotle",
    "Socrates",
    "Nietzsche",
    "Napoleon Bonaparte",
    "Richard Nixon",
    "Mao Zedong",
    "Adolf Hitler",
    "Joseph Stalin",
    "Miley Cyrus",
    "Lady Gaga",
    "Frank Sinatra",
    "Mohandas Gandhi",
    "Moses",
    "Jesus",
    "Ted Kaczynski",
    "Kanye West",
    "Hermann Cain"
];
var Events = [
    "Civil War",
    "Revolutionary War",
    "Watergate",
    "Woodstock",
    "Stonewall Riots",
    "French Revolution",
    "World War I",
    "World War II",
    "World War III",
    "Tienenmen Square",
    "Thermopylae",
    "Battle of Marathon",
    "Jesus' Crucification",
    "Great Flood",
    "Biblical Exodus",
    "I have a dream speech",
    "Women's March",
    "A presidential debate",
    "Cuban Missile Crisis",
    "Berlin Air Drop",
    "Titanic",
    "Wright Brothers' 1st Flight",
    "Moon Landing",
    "Building of the Egyption Pyramids",
    "Quizbowl Nationals",
    "The Olympics",
];
var Twists = [
    "It was all a dream",
    "...but a lizard person",
    "Soldiers are Hamsters",
    "Guns shoot bubblegum",
    "Its the year 2052 AD",
    "Its 7000 BCE",
    "Its 100 years earlier",
    "Its 100 years later",
    "Everyone's a 4 year old",
    "Everyone's a woman",
    "Everyone has dementia",
    "Everyone's super old",
    "...but super sexy",
    "...but super dumb",
    "Everyone's drunk",
    "...with 4 arms",
    "...but a really nice guy",
    "with pillow fights",
    "everyone's in high school",
    "with aliens",
    "...but is in the illuminati",
    "with Benjamin Button syndrome",
    "with amnesia"
];
var rng = undefined;
function randomElem(arr) {
    var N = Math.floor(rng() * arr.length);
    var val = arr[N];
    arr[N] = arr[arr.length - 1];
    arr.length -= 1;
    return val;
}
function main() {
    var txtBox = document.createElement("input");
    document.body.appendChild(txtBox);
    var button = document.createElement("button");
    button.textContent = "draw";
    var textDiv = makeDiv({ width: 10000, height: 10000 });
    document.body.appendChild(button);
    document.body.appendChild(textDiv);
    txtBox.type = "text";
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    txtBox.value = '';
    for (var i = 0; i < 5; ++i) {
        txtBox.value += alpha[Math.floor(Math.random() * 26)];
    }
    var first = true;
    button.onclick = function () {
        if (first) {
            rng = new Math.seedrandom(txtBox.value);
        }
        textDiv.innerHTML += "</br>" +
            "person1: " + randomElem(People) +
            "</br>twist1: " + randomElem(Twists) + "</br>";
        if (first) {
            textDiv.innerHTML += "</br>person2: " +
                randomElem(People) +
                "</br>twist2: " + randomElem(Twists) + "</br>";
            first = false;
        }
        textDiv.innerHTML += "</br>event1: " + randomElem(Events) + "</br>";
    };
}
document.body.onload = main;
