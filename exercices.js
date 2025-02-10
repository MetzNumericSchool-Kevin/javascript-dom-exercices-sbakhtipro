// ------------------ ex 1 ------------------

const titreH1 = document.querySelector('h1');
console.log(titreH1);

// ------------------ ex 2 ------------------

const descriptionBoutique = document.querySelector('#description_boutique')
let nouveauP = document.createElement('p')
nouveauP.textContent = `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter`
descriptionBoutique.appendChild(nouveauP)

// ------------------ ex 3 ------------------

document.querySelector('#blague_de_roger_le_sorcier').remove()

// ------------------ ex 4 ------------------

const callButton = document.querySelector('#call_archibald')
callButton.addEventListener('click', () => {
    alert(`J'arrive, j'arrive Aventurier!`)
})

// ------------------ ex 5 ------------------

// ------------------ ex 6 ------------------
// ------------------ ex 7 ------------------