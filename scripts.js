

const list = document.querySelector('ul')
const buttonForEach = document.querySelector('.forEach-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonReduce = document.querySelector('.sum-all')
const buttonFilter = document.querySelector('.filter-all')

//(5º)          / Function Edição De Moeda  /
function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', { 
    style: 'currency', 
    currency: 'BRL'
   });

   return newValue
}
//(1º)                  /   ForEach   /
function showAll(productsArray) {
  let myLi = '' // começa vazia
  productsArray.forEach(product => {
    myLi += `<li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">${formatCurrency(product.price)} </p>
                 </li>
               `
  });
  list.innerHTML = myLi
}

//(2º)                 /    Map   /
function mapAllItens() {
  const newPrice = menuOptions.map((product) => ({
    // Spread Operator/ ele vai mostrar tudo nesso novo array e so vai alterar quem eu alterei
    ...product,
    price: product.price * 0.9,  // com este truque ele vai dar 10% de desconto

  }))
  showAll(newPrice)
}

//(3º)                    /  Reduce  /
function reduceAll() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `<li>
                          <p> O Valor Total Dos Itens É ${formatCurrency(totalValue)} Reais</p> 
                      </li>
                     `
}


//(4º)                   /  Filter  /
function filterAllItems() {
  //const filterJustVegan = menuOptions.filter((product) => product.vegan) -> é a mesma coisa que ode baixo, o javaScript vai saber se for true vai p novo array
  const filterJustVegan = menuOptions.filter((product) => product.vegan)

  showAll(filterJustVegan)

}



//                          essa function-anonima é para que a function showAll não inicie mostrando tudo na tela
//     quando colocamos showAll(menuOptions) com esses parenteses automaticamente ja inicia mostrando tudo na tela, 
//     e para que isso não ocorra usa-se ()=> esta function anonima
buttonForEach.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonReduce.addEventListener('click', reduceAll)
buttonFilter.addEventListener('click', filterAllItems)
/* 

*/