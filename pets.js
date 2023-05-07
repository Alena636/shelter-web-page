//menu-burger
const menuBurger = document.querySelector ('.burger-menu');
const menu = document.querySelector('.nav-list');
const popUp = document.querySelector('.pop-up')
const unactiveLink = document.querySelector('.list-item.our')

menuBurger.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBurger.classList.toggle('active')
    document.body.classList.toggle('lock')
    popUp.classList.toggle('active')
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach( navLink => {
    navLink.addEventListener('click', function() {
        menu.classList.remove('active');
        menuBurger.classList.remove('active')
        document.body.classList.remove('lock')
        popUp.classList.remove('active')
    })
}
)

popUp.addEventListener('click', function() {
    menu.classList.remove('active')
    popUp.classList.remove('active')
    menuBurger.classList.toggle('active')
})

unactiveLink.addEventListener('click', function() {
    menu.classList.remove('active')
    popUp.classList.remove('active')
    menuBurger.classList.toggle('active')
})


//pfgination

class Card {
    constructor ({id, name, img, ...rest}) {
      this.id = id
      this.name = name
      this.img = img
    }
  
    generateCard() {
      let template = ''
      let card = document.createElement('div')
      card.className = 'card'
      card.setAttribute('data-id', this.id)
  
      template += `<img class="pets" src="${this.img}" alt="${this.name}">`
      template += `<p class="span">${this.name}</p>`
      template += `<button class="learn_more">Learn more</button>`
  
      card.innerHTML = template
      return card
    }
  }

  const CARDS_DATA = [
	{
		"id": 1,
		"name": "Jennifer",
		"img": "./assets/images/pets-jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 2,
		"name": "Sophia",
		"img": "./assets/images/pets-sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 3,
		"name": "Woody",
		"img": "./assets/images/pets-woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{
		"id": 4,
		"name": "Scarlett",
		"img": "./assets/images/pets-scarlet.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 5,
		"name": "Katrine",
		"img": "./assets/images/pets-katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 6,
		"name": "Timmy",
		"img": "./assets/images/pets-timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{
		"id": 7,
		"name": "Freddie",
		"img": "./assets/images/pets-freddy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 8,
		"name": "Charly",
		"img": "./assets/images/pets-charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
]

const paginationList = document.querySelector('.cards_container')
const nextBtn = document.querySelector('.button_paginator_active')
const lastBtn = document.querySelector('.button_paginator_active.right')
const prevBtn = document.querySelector('.button_paginator_inactive')
const firstBtn = document.querySelector('.button_paginator_inactive.left')
const pageNum = document.querySelector('.button_page_number')

const cardsArr = []

let page = 1

generateCardsArr()
renderCardsToDom()
window.addEventListener('resize', renderCardsToDom)
nextBtn.addEventListener('click', nextPage)
prevBtn.addEventListener('click', prevPage)
lastBtn.addEventListener('click', lastPage)
firstBtn.addEventListener('click', firstPage)

function generateCardsArr() {
    let arrId3 = []
    let arrId6 = []
    let arrId8 = []
    for(let i = 0; i < 48; i++) {
        if(arrId3.length === 3) {
            arrId3 = []
        }
        if(arrId6.length === 6) {
            arrId6 = []
        }
        if(arrId8.length === 8) {
            arrId8 = []
        }
        let id = getRandomNumber()
        while(arrId3.includes(id) || arrId6.includes(id) || arrId8.includes(id)) {
            id = getRandomNumber()
        }
        arrId3.push(id)
        arrId6.push(id)
        arrId8.push(id)

        cardsArr.push(new Card(CARDS_DATA[id]).generateCard())
    }
}

function getRandomNumber() {
	let number = Math.floor(Math.random() * 8)
	return number;
}

function renderCardsToDom() {
	clearTemplate();
	if (document.body.clientWidth >= 1280) {
		if (page > 6) {
			page = 6;
		}
		for (let i = (page - 1) * 8; i < page * 8; i++) {
			paginationList.append(cardsArr[i]);
		}
	} else if (document.body.clientWidth >= 768) {
		if (page > 8) {
			page = 8;
		}
		for (let i = (page - 1) * 6; i < page * 6; i++) {
			paginationList.append(cardsArr[i]);
		}
	} else {
		for (let i = (page - 1) * 3; i < page * 3; i++) {
			paginationList.append(cardsArr[i]);
		}
	}
	changeBtnActivity();
	changePageNum();
}

function clearTemplate() {
	paginationList.innerHTML = '';
}

function nextPage() {
	if (document.body.clientWidth >= 1280) {
		if (page === 6) return;
		page += 1;
		renderCardsToDom();
	} else if (document.body.clientWidth >= 768) {
		if (page === 8) return;
		page += 1;
		renderCardsToDom();
	} else {
		if (page === 16) return;
		page += 1;
		renderCardsToDom();
	}
	changePageNum();
}

function prevPage() {
	if (page === 1) return;
	page -= 1;
	renderCardsToDom();
	changePageNum();
}

function lastPage() {
	if (document.body.clientWidth >= 1280) {
		page = 6;
	} else if (document.body.clientWidth >= 768) {
		page = 8;
	} else {
		page = 16;
	}
	renderCardsToDom();
	changePageNum();
	makeNextInactive();
	makePrevActive();
}

function firstPage() {
	page = 1;
	renderCardsToDom();
	changePageNum();
	makePrevInactive();
	makeNextActive();
}

function changePageNum() {
	pageNum.innerHTML = page;
}

function makeNextInactive() {
    nextBtn.classList.add('inactive')
    lastBtn.classList.add('inactive')
}

function makePrevInactive() {
	prevBtn.classList.add('inactive');
	firstBtn.classList.add('inactive');
}

function makeNextActive() {
	nextBtn.classList.remove('inactive');
	lastBtn.classList.remove('inactive');
}

function makePrevActive() {
	prevBtn.classList.remove('inactive');
	firstBtn.classList.remove('inactive');
}

function changeBtnActivity() {
	if (page === 1) {
		makePrevInactive();
		makeNextActive();
	} else if ((document.body.clientWidth >= 1280 && page === 6) || (document.body.clientWidth >= 768 && page === 8) || (document.body.clientWidth < 768 && page === 16)) {
		makeNextInactive();
		makePrevActive();
	} else {
		makeNextActive();
		makePrevActive();
	}
}

//popup
class Popup {
    constructor({id, name, img, type, breed, description, age, inoculations, diseases, parasites}) {
      this.id = id
      this.name = name
      this.img = img
      this.type = type
      this.breed = breed
      this.description = description
      this.age = age
      this.inoculations = inoculations
      this.diseases = diseases
      this.parasites = parasites
    }

    buildPopup() {
      let popup = this.createDomNode('div', 'modal-container')
      popup.setAttribute('data-id', this.id)
  
      let closeBtn = this.createDomNode('button', 'close-sign')
  
      let img = this.createDomNode('img', 'modal-pets')
      img.setAttribute('src', this.img)
      img.setAttribute('alt', this.name)
  
      let popupContent = this.createDomNode('div', 'modal-content')
  
      let popupName = this.createDomNode('div', 'popup__name')
  
      let popupTitle = this.createDomNode('h3', 'modal-pets-title')
      popupTitle.innerHTML = this.name
  
      let popupSubtitle = this.createDomNode('h4', 'pets-title-second')
      popupSubtitle.innerHTML = `${this.type} - ${this.breed}`
  
      popupName.append(popupTitle, popupSubtitle)
  
      let popupDescription = this.createDomNode ('h5', 'modal-pets-description')
      popupDescription.innerHTML = this.description
  
      let popupList = this.createDomNode('ul', 'modal-list')
  
      for(let i = 0; i < 4; i++) {
        let popupItem = this.createDomNode('li', 'modal-list-item')
        let popupItemTitle = this.createDomNode('h5', 'popup__item-title')
        switch(i) {
          case 0:
            popupItemTitle.innerHTML = `Age: <span class="age">${this.age}</span>`
            break
          case 1:
            popupItemTitle.innerHTML = `Inoculations: <span class="inoculations">${this.inoculations}</span>`
            break
          case 2:
            popupItemTitle.innerHTML = `Diseases: <span class="diseases">${this.diseases}</span>`;
                      break;
                  case 3:
                      popupItemTitle.innerHTML = `Parasites: <span class="parasites">${this.parasites}</span>`;
                      break;
        }
        popupItem.append(popupItemTitle)
        popupList.append(popupItem)
      }
      popupContent.append(popupName, popupDescription, popupList)
  
      popup.append(closeBtn, img, popupContent)
  
      return popup
    }
    createDomNode(element, ...classes) {
      let node = document.createElement(element)
      node.classList.add(...classes)
      return node
    }
  }


const paginationItems = document.querySelector('.cards_container')
const body = document.body;
const petsSection = document.querySelector('.our_friends');

paginationItems.addEventListener('click', (e) => showPopup(e))

function showPopup(e) {
    if(e.target.closest('.card')) {
      let chosenCardId = getCardId(e)
      let modal = generatePopup(chosenCardId)
      petsSection.append(modal)
      const closeBtn = document.querySelector('.close-sign')
      closeBtn.addEventListener('click', removePopup)
  
      body.classList.add('lock')
      addOverflow()
    }
  }


  function getCardId(e) {
	return e.target.closest('.card').getAttribute('data-id');
}

function generatePopup(id) {
	return new Popup(CARDS_DATA[id - 1]).buildPopup();
}

function addOverflow() {
	const overflow = document.createElement('div');
	overflow.classList.add('overflow');
	overflow.addEventListener('click', removePopup);
	body.prepend(overflow);
}

function removeOverflow() {
	document.querySelector('.overflow').remove();
}

function removePopup() {
	body.classList.remove('lock');
	removeOverflow();
	document.querySelector('.modal-container').remove();
}