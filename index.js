const showMore = document.querySelector('.show-more')
const ul = document.getElementById('u')

async function getProducts() {
	const response = await fetch('https://api.escuelajs.co/api/v1/products')
	const result = await response.json()
	console.log(result)
	const lengthC = result.length;
	console.log(lengthC)
	let visibleItemsCount = 10

	const renderProducts = () => {
		ul.innerHTML = '';
		result.forEach((item, index) => {
			const ndiv = document.createElement('div')
			ndiv.className = 'prod-grid-item';
			ndiv.innerHTML = `
        <img src="https://www.ptichka.ru/data/cache/2018nov/05/46/79609_73338.jpg" alt="title" class="imgb">
        <p class="pp">$${item.price}</p>
        <h3 class="hp">${item.title}</h3>
      `

			if (index < visibleItemsCount) {
				ndiv.classList.add('visible')
			} else {
				ndiv.classList.add('no-visible')
			}

			ul.appendChild(ndiv)
		})
	}

	renderProducts()

	showMore.addEventListener('click', () => {
		if (visibleItemsCount >= lengthC) {
			visibleItemsCount = 10
		} else {
			visibleItemsCount += 10
		}

		if (visibleItemsCount >= lengthC) {
			showMore.innerText = 'Скрыть'
		} else {
			showMore.innerText = 'Показать еще'
		}

		renderProducts()
	})
}

async function getCategories() {
	const response = await fetch('https://api.escuelajs.co/api/v1/categories')
	const result = await response.json()
	console.log(result)
	const lengthC = result.length
	console.log(lengthC)
	let visibleItemsCount = 10

	const renderProducts = () => {
		ul.innerHTML = ''
		result.forEach((item, index) => {
			const ndiv = document.createElement('div')
			ndiv.className = 'prod-grid-item'
			ndiv.innerHTML = `
        <img src="https://daboom.ru/wp-content/uploads/2022/02/luchshie-telefony-na-androide-optimized.jpg" alt="title" class="imgb">
        <h3 class="hp">${item.name}</h3>
      `

			if (index < visibleItemsCount) {
				ndiv.classList.add('visible')
			} else {
				ndiv.classList.add('no-visible')
			}

			ul.appendChild(ndiv)
		})
	}

	renderProducts()

	showMore.addEventListener('click', () => {
		if (visibleItemsCount >= lengthC) {
			visibleItemsCount = 10
		} else {
			visibleItemsCount += 10
		}

		if (visibleItemsCount >= lengthC) {
			showMore.innerText = 'Скрыть'
		} else {
			showMore.innerText = 'Показать еще'
		}

		renderProducts()
	})
}

async function getUsers() {
	const response = await fetch('https://api.escuelajs.co/api/v1/users')
	const result = await response.json()
	console.log(result)
	const lengthC = result.length
	console.log(lengthC)
	let visibleItemsCount = 10

	const renderProducts = () => {
		ul.innerHTML = ''
		result.forEach((item, index) => {
			const ndiv = document.createElement('div')
			ndiv.className = 'prod-grid-item'
			ndiv.innerHTML = `
        <img src="https://www.domrnr.ru/upload/medialibrary/623/aacucr3a2lu7922b7nl0ouoklcr8bbbu.png" alt="title" class="imgb">
        <p class="pp">${item.name}</p>
        <h3 class="hp">${item.email}</h3>
      `

			if (index < visibleItemsCount) {
				ndiv.classList.add('visible')
			} else {
				ndiv.classList.add('no-visible')
			}

			ul.appendChild(ndiv)
		})
	}

	renderProducts()

	showMore.addEventListener('click', () => {
		if (visibleItemsCount >= lengthC) {
			visibleItemsCount = 10
		} else {
			visibleItemsCount += 10
		}

		if (visibleItemsCount >= lengthC) {
			showMore.innerText = 'Скрыть'
		} else {
			showMore.innerText = 'Показать еще'
		}

		renderProducts()
	})
}

getProducts()
