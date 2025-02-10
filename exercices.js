// ------------------ ex 1 ------------------

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



// ------------------ ex 7 ------------------