const buttonFilterVegan = document.querySelector('.filter-vegan')
const buttonTotalOrder = document.querySelector('.total-order')
const buttonMappingFlavors = document.querySelector('.mapping-flavors')
const buttonShowMenu = document.querySelector('.show-menu')
const list = document.querySelector("ul")

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

function showMenu(myArray) {
  let myLi = ""

myArray.forEach((product) => {
  myLi += `
    <li>
        <img src= "${product.src}">
        <p>${product.name}</p>
        <p class="item-price">R$ ${formatCurrency(product.price)}</p>
    </li>
  `
  
})

list.innerHTML = myLi

}

function flavorsMap() {
  
  const productsWithDiscount = menuOptions.map(product => ({
    ...product,
    price: product.price * 0.9,
    
  }))

  showMenu(productsWithDiscount)

}

function sumOfProducts (array){
  const total = array.reduce((acc, product) => {
    return acc = acc + product.price
  },0)
  const totalValue = document.getElementById('total-value')
  totalValue.textContent = `Total: ${formatCurrency(total)}`
}

function filterVegan() {
  const onlyVegan = menuOptions.filter(product => product.vegan)
   const totalValue = document.getElementById('total-value')
  totalValue.textContent = ''
  showMenu(onlyVegan)
}



buttonShowMenu.addEventListener('click', () => showMenu(menuOptions))
buttonMappingFlavors.addEventListener('click', flavorsMap)
buttonTotalOrder.addEventListener('click', () => sumOfProducts(menuOptions))
buttonFilterVegan.addEventListener('click', filterVegan)
