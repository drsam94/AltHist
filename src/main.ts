/// <reference path="../3ps/seedrandom.d.ts" />
/// <reference path="./dom.ts" />

// giphy
// const api_key = "0bprnYzxaQtn8ApBd45q2CQ8yByjTnTy";


// const api_key = "13702177-5e41408d84a4abd848ddb5851"

const People = [
    "Benjamin Franklin",
    "Justin Bieber",
    "Donald Trump",
    "Brack Obama",
    "John F Kennedy",
    "George Washington",
    "Abraham Lincon",
    "Williasm 'Boss' Tweed",
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
    "Ted Kaczynski"
];

const Events = [
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
    "Marathon",
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
    "Building of the Egyption Pyramids"
];
const Twists = [
    "It was all a dream",
    "...but a lizard person",
    "Soldiers are Hamsters",
    "Guns shoot bubbleguns",
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
    "with alienes",
    "...but is in the illuminati"
];

let rng : any = undefined; 
function randomElem(arr : string[]) : string {
    const N = Math.floor(rng() * arr.length);
    const val = arr[N];
    arr[N] = arr[arr.length - 1]
    arr.length -= 1;
    return val;
}

function main() : void {
    const txtBox = document.createElement("input");
    document.body.appendChild(txtBox);
    const button = document.createElement("button");
    button.textContent = "draw";
    const textDiv = makeDiv({width: 10000, height: 10000});
    document.body.appendChild(button);
    document.body.appendChild(textDiv);

    txtBox.type = "text";
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    txtBox.value = '';
    for (let i = 0; i < 5; ++i) {
        txtBox.value += alpha[Math.floor(Math.random() * 26)];
    }
    let first = true;
    button.onclick = () => {
        if (first) {
            rng = new (<any> Math).seedrandom(txtBox.value);

        }
        textDiv.innerHTML += "</br>" +
            "person1: "  + randomElem(People) +
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