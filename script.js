const button = document.getElementById('button');
const filmTitle = document.getElementById('film');
const plnt = document.getElementById('planet')
const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
const starship = document.getElementById('starship');


const RandomFilm = () => {
    var filmNum = Math.floor(Math.random() * 7) + 1;
    fetch('https://swapi.py4e.com/api/films/' + filmNum).then(response => response.json()).
    then(films => filmTitle.innerText = "Film: " + films.title).
    catch(error => console.log('Error: ' + error));
}

const RandomCharacter = (boolVar) => {
    var pNum = Math.floor(Math.random() * 87) + 1;
    if (pNum === 17) pNum--;

    fetch('https://swapi.py4e.com/api/people/' + pNum).then(response => response.json()).
    then(player => {
        if (!boolVar) { p1.innerText = "Player 1: " + player.name; }

        else { p2.innerText = "Player 2: " + player.name;}
    }).catch(error => console.log('Error: ' + error));
}

const RandomPlanet = () => {
    var planetNum = Math.floor(Math.random() * 10) + 1;

    fetch('https://swapi.py4e.com/api/planets/' + planetNum).then(response => response.json()).
    then(planet => plnt.innerText = "Planet: "+ planet.name).
    catch(error => console.log('Error: ' + error));
}

const RandomShip = () => {
    var randomNum = Math.floor(Math.random() * 10);
    var shipArray = [2, 3, 5, 9, 10, 11, 12, 13, 15, 17]

    fetch('https://swapi.py4e.com/api/starships/' + shipArray[randomNum]).then(response => response.json()).
    then(ship => starship.innerText = "Starship: "+ ship.name).
    catch(error => console.log('Error: ' + error));
}

button.addEventListener('click', () => {
    RandomFilm();
    RandomPlanet();
    RandomCharacter(false);
    RandomCharacter(true);
    RandomShip();
});

