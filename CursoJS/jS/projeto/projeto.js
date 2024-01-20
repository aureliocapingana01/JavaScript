let listCar = [
    {
        'name' : 'Darko GTE',
        'img' : 'img/drako-gte.webp',
        'description' : 'Embora à primeira vista pareça um superesportivo de dois lugares com um perfil baixo e largo com um aspecto agressivo, na realidade é um carro de quatro portas e quatro lugares.'
    },
    {
        'name' : 'De Tomaso P72',
        'img' : 'img/de-tomaso.webp',
        'description' : 'Foi nomeado assim pelo motor V8 de 7,0 litros que teria. O P72 recebe esse nome porque é a forma de homenagear esse design."'
    },
    {
        'name' : 'Ferrari',
        'img' : 'img/ferrari-laferrari.webp',
        'description' : '(também conhecida pelo seu nome do projeto, F150) é um carro superesportivo coupé, duas portas, dois lugares, de motor central traseiro e tração traseira, produzido pela Ferrari.'
    },
    {
        'name' : 'Pagani Huayra',
        'img' : 'img/pagani-huayra.webp',
        'description' : 'O Huayra tem um motor V12 central de 60º com 730 cv, concebido pela divisão AMG da Mercedes-Benz e assinado por um engenheiro da empresa. O Huayra é capaz de chegar aos 360 km/h.'
    },
    {
        'name' : 'McLaren Elva',
        'img' : 'img/mclaren-elva.webp',
        'description' : '" O modelo traz um V8 4.0 de 815 cv que, em conspiração com os seus escassos 1.148 kg, permite fazer de 0 a 100 km/h em 2,8 segundos e 0 a 200 km/h em 6,8 segundos'
    },
    {
        'name' : 'Czinger 21c',
        'img' : 'img/czinger-21c.webp',
        'description' : ' Com apenas 80 unidades e todas são projetadas e construídas em suas instalações de Los Angeles. Agora a marca vai um passo além com o Czinger 21C V Max, uma versão de cauda longa do modelo standard'
    },
  
]


listCar.map((car, position) => {
    let cardCar = document.querySelector('#card')
    cardCar.innerHTML += 
    `<div class="col-md-4">
          <div class="card m-3">
            <img src="${car.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${car.name}</h5> 
              <a href="#" class="btn btn-secondary" onclick ="zoomInfoImg('${position}')">
              <i class="bi bi-zoom-in"></i>
              </a>
            </div>
          </div>
    </div>
    `

    // console.log(position)
})


// Funcao para aparecer o modal assim que clicar na img
const zoomInfoImg = position => {
    let carSelecting = listCar[position];
    document.querySelector('#nameCar').innerHTML = carSelecting.name
    document.querySelector('#descriptionCar').innerHTML = carSelecting.description
    document.querySelector('#imgModal').src = carSelecting.img

    // Não aparece o modal sem esse chamado
    new bootstrap.Modal('#zoomImg').show()
}

// Função para alterar o tema
const theme = () => {
    let themes = querySelector("html").getAtribute("data-bs-theme");

    if (themes === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#btnTheme").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }
}