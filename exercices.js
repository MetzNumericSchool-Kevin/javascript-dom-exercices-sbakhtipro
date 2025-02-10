// ------------------ ex 1 ------------------

const { temp } = require("three/tsl");

const titreH1 = document.querySelector('h1');
console.log(titreH1);

// ------------------ ex 2 ------------------

const descriptionBoutique = document.querySelector('#description_boutique');
let nouveauP = document.createElement('p');
nouveauP.textContent = `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter`;
descriptionBoutique.appendChild(nouveauP);

// ------------------ ex 3 ------------------

document.querySelector('#blague_de_roger_le_sorcier').remove();

// ------------------ ex 4 ------------------

const callButton = document.querySelector('#call_archibald');
callButton.addEventListener('click', () => {
    alert(`J'arrive, j'arrive Aventurier!`);
})

// ------------------ ex 5 ------------------

const boites = document.querySelectorAll('.boite')
const red = document.querySelector('#btn_change_red')
const blue = document.querySelector('#btn_change_blue')
const green = document.querySelector('#btn_change_green')

red.addEventListener('click', () => {
    for (let i=0;i<boites.length;i+=1) {
        if (i==0) {
            boites[i].style.backgroundColor = 'red'
        }
    }
})

blue.addEventListener('click', () => {
    for (let i=0;i<boites.length;i+=1) {
        if (i!=boites.length-1) {
            boites[i].style.backgroundColor = 'blue'
        }
    }
})

green.addEventListener('click', () => {
    boites.forEach(element => {
        element.style.backgroundColor = 'green'
    })
})

// ------------------ ex 6 ------------------

const potions = [
  {
    nom: "Potion de soin",
    description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    prix: 10,
  },
  {
    nom: "Potion de sommeil",
    description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    prix: 50,
  },
];

const template = document.querySelector('#template_potion')
const liste = document.querySelector('#liste_potions')

for (i=0;i<potions.length;i+=1) {
    const clone = template.content.cloneNode(true)
    let nomPotion = clone.querySelector('.nom_potion')
    nomPotion.textContent = potions[i].nom
    let prixPotion = clone.querySelector('.prix_potion')
    prixPotion.textContent = potions[i].prix
    let descriptionPotion = clone.querySelector('.description_potion')
    descriptionPotion.textContent = potions[i].description
    liste.appendChild(clone)
}


// ------------------ ex 7 ------------------