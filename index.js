const serie1 = {
    nome : "The Office",
    genero : "comédia",
    temporadas : 8,
    streaming : ["HBOMax", "Amazon Prime"], 
    jaGanhouPremio : "sim",
    principaisAtores : ["Steve Carrel", "John Krasinski", "Jenna Fisher"],
    imagem: "./imagens-projeto/the-office.png",
    hiperlink: "https://www.rottentomatoes.com/tv/the_office"

}

const serie2 = {
    nome : "Rick and Morty",
    genero : "comédia",
    temporadas : 6,
    streaming : ["HBOMax"],
    jaGanhouPremio : "sim",
    principaisAtores : ["Justin Roiland", "Spencer Grammer", "Chris Parnell"],
    imagem: "./imagens-projeto/rick-and-morty.png",
    hiperlink:"https://www.rottentomatoes.com/tv/rick_and_morty"

}

const serie3 = {
    nome : "Mr. Robot",
    genero : "drama",
    temporadas : 4,
    streaming : ["Amazon Prime"],
    jaGanhouPremio : "sim",
    principaisAtores : ["Rami Malek", "Carly Chaikin", "Portia Doubleday"],
    imagem:"./imagens-projeto/mr-robot.png",
    hiperlink:"https://www.rottentomatoes.com/tv/mr_robot"

}

const serie4 = {
    nome : "Fleabag",
    genero : "comédia",
    temporadas : 2,
    streaming : ["Amazon Prime"],
    jaGanhouPremio : "não",
    principaisAtores : ["Phoebe Waller-Bridge", "Andrew Scott", "Sia Clifford"],
    imagem: "./imagens-projeto/fleabag.png",
    hiperlink:"https://www.rottentomatoes.com/tv/fleabag"

}

const serie5 = {
    nome : "Pico da Neblina",
    genero : "comédia",
    temporadas : 2,
    streaming : ["HBOMax"],
    jaGanhouPremio : "não",
    principaisAtores : ["Luís Navarro", "Henrique Santana", "Daniel Furlan"],
    imagem: "./imagens-projeto/pico-da-neblina.png",
    hiperlink: "https://www.imdb.com/title/tt10756754/?ref_=nv_sr_srsg_0"

}

//-------------------------------------------------------------SEMANA 1
// Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando 
// um console.log. Guarde este valor em uma const;
const mediaTemporadas = (serie1.temporadas+serie2.temporadas+serie3.temporadas+serie4.temporadas+serie5.temporadas)/5
console.log("Média de temporadas de todas as séries: " + mediaTemporadas)


// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis 
// booleanas criadas até aqui são verdadeiras.
const checagemDePremios = (serie1.jaGanhouPremio && serie2.jaGanhouPremio && serie3.jaGanhouPremio && serie4.jaGanhouPremio && serie5.jaGanhouPremio)
console.log("Checagem se todas as séries já ganharam prêmios: " + checagemDePremios)

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
// Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
//Criei o array de principaisAtores

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// a) O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log(`${serie1.nome.toUpperCase()}
Gênero: ${serie1.genero}
Temporadas: ${serie1.temporadas}
Onde assistir: ${serie1.streaming}
Tem premiações: ${serie1.jaGanhouPremio}
Principais atores: ${serie1.principaisAtores}

${serie2.nome.toUpperCase()}
Gênero: ${serie2.genero}
Temporadas: ${serie2.temporadas}
Onde assistir: ${serie2.streaming}
Tem premiações: ${serie2.jaGanhouPremio}
Principais atores: ${serie2.principaisAtores}

${serie3.nome.toUpperCase()}
Gênero: ${serie3.genero}
Temporadas: ${serie3.temporadas}
Onde assistir: ${serie3.streaming}
Tem premiações: ${serie3.jaGanhouPremio}
Principais atores: ${serie3.principaisAtores}

${serie4.nome.toUpperCase()}
Gênero: ${serie4.genero}
Temporadas: ${serie4.temporadas}
Onde assistir: ${serie4.streaming}
Tem premiações: ${serie4.jaGanhouPremio}
Principais atores: ${serie4.principaisAtores}

${serie5.nome.toUpperCase()}
Gênero: ${serie5.genero}
Temporadas: ${serie5.temporadas}
Onde assistir: ${serie5.streaming}
Tem premiações: ${serie5.jaGanhouPremio}
Principais atores: ${serie5.principaisAtores}`)

console.log(serie1)



//-------------------------------------------------------------SEMANA 2
//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const todasAsSeries = []


// 3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .
// 4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma 
// verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve 
// ser adicionado ao array se a propriedade booleana for true;
// 5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o 
// usuário que o item não foi adicionado, e não faça o push
if (typeof serie1 === "object" && typeof serie2 === "object" && typeof serie3 === "object" && typeof serie4 === "object" && typeof serie5 === "object"){
    todasAsSeries.push(serie1, serie2, serie3, serie4, serie5)
} else {
    alert ("As séries não foram add.")
}

// todasAsSeries.push(serie1, serie2, serie3, serie4)

console.log(todasAsSeries)


//-------------------------------------------------------------SEMANA 3

// 1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos 
// itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. 
// Utilize esta string no relatório.
// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir 
// individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, 
// adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

for(serie of todasAsSeries){
    for (propriedade in serie){
        console.log(`${propriedade}: ${serie[propriedade]}`)
    }
console.log("----------------------");
}

// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function stringRelatorio (objeto) {

    console.log(objeto)
}

stringRelatorio(serie1)


// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto 
// retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não 
// exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


const busca = (todasAsSeries, string) => {
    const resultado = todasAsSeries.filter((objeto) => {
        return objeto.genero.toUpperCase() === string.toUpperCase() || objeto.nome.toUpperCase() === string.toUpperCase() || objeto.temporadas === string || objeto.jaGanhouPremio.toUpperCase() === string.toUpperCase()
    })

    if (resultado.length > 0){
        console.log(resultado)
    } else {
        alert("Nenhum item encontrado.")
    }
}

busca(todasAsSeries, "drama")

// const buscaOndeVer = (todasAsSeries, string) => {
//     const resultado = todasAsSeries.filter((objeto) => {
//         return objeto.ondeVer.includes(string.toUpperCase())
//     })

//     if (resultado.length > 0){
//         console.log(resultado)
//     } else {
//         alert("Nenhum item encontrado.")
//     }
// }

// buscaOndeVer(todasAsSeries, "Amazon Prime")


//-------------------------------------------------------------SEMANA 6
// 1. Altere seu código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.

// Atualmente, seus elementos estão criados no HTML e no CSS de forma estática, sem que exista interação entre HTML e 
// CSS e o Script que criamos. A ideia é que agora, os dados que compõem os elementos HTML devem ser criados a partir 
// do nosso código JS. Para isso, devemos manipular os objetos do HTML e do CSS utilizando o DOM.

// 2. Utilize a função de busca criada no item 2 da semana 6 para fazer com que ao digitar um campo no input e apertar 
// o botão, apenas os itens com nome igual ao da busca sejam renderizados na.

//Colocando o DOM


function criaCard (serie) {
    let novoArticle = document.createElement("article")
    novoArticle.setAttribute("class", "card")

    let a = document.createElement("a")
    a.setAttribute("href", serie.hiperlink)
    // a.innerHTML=`${serie.hiperlink}`
    novoArticle.insertAdjacentElement("beforeend", a)

    let titulo = document.createElement("h3")
    titulo.setAttribute("class", "nome-serie")
    let texto = serie.nome.toUpperCase()
    const textoTitulo = document.createTextNode(texto)
    titulo.appendChild(textoTitulo)
    a.insertAdjacentElement("beforeend", titulo)

    let imagem = document.createElement("img")
    imagem.setAttribute("class", "img")
    imagem.setAttribute("src", serie.imagem)
    novoArticle.insertAdjacentElement("beforeend", imagem)

    let listaSerie = document.createElement("ul")
    listaSerie.setAttribute("class", "lista-serie")
    novoArticle.insertAdjacentElement("beforeend", listaSerie)

    let liGenero = document.createElement("li")
    liGenero.setAttribute("class", "li")
    let genero = "Gênero: " + serie.genero
    const textoGenero = document.createTextNode(genero)
    liGenero.appendChild(textoGenero)
    novoArticle.insertAdjacentElement("beforeend", liGenero)

    let liTemporadas = document.createElement("li")
    liTemporadas.setAttribute("class", "li")
    let temporadas = "Temporadas: " + serie.temporadas
    const textoTemporadas = document.createTextNode(temporadas)
    liTemporadas.appendChild(textoTemporadas)
    novoArticle.insertAdjacentElement("beforeend", liTemporadas)

    let liStreaming = document.createElement("li")
    liStreaming.setAttribute("class", "li")
    let streaming = "Streaming: " + serie.streaming.join(", ")
    const textoStreaming = document.createTextNode(streaming)
    liStreaming.appendChild(textoStreaming)
    novoArticle.insertAdjacentElement("beforeend", liStreaming)

    let liPremiacao = document.createElement("li")
    liPremiacao.setAttribute("class", "li")
    let premiacao = "Ganhou premiações: " + serie.jaGanhouPremio
    const textoPremiacao = document.createTextNode(premiacao)
    liPremiacao.appendChild(textoPremiacao)
    novoArticle.insertAdjacentElement("beforeend", liPremiacao)

    let liPrincipaisAtores = document.createElement("li")
    liPrincipaisAtores.setAttribute("class", "li")
    let principaisAtores = "Principais atores: " + serie.principaisAtores.join(", ")
    const textoPinrcipaisAtores = document.createTextNode(principaisAtores)
    liPrincipaisAtores.appendChild(textoPinrcipaisAtores)
    novoArticle.insertAdjacentElement("beforeend", liPrincipaisAtores)

    return novoArticle

}

const mostrarCard = (arraySeries, funcaoCriarCard) =>{
    let card = null;
    let listaCard = null;
    for(let i in arraySeries){
       card = funcaoCriarCard(arraySeries[i]);
       listaCard = document.getElementById("itens-da-lista")
       listaCard.insertAdjacentElement("beforeend", card);
  
    }
  }

mostrarCard(todasAsSeries, criaCard)

///////////////////////////////////////////////função buscar

function buscar (event){
    event.preventDefault()
    let listaCard = document.getElementById("itens-da-lista")
    listaCard.innerHTML = "";
    const input = document.getElementById("input")
    console.log(input.value)

    const busca = (todasAsSeries, string) => {
        const resultado = todasAsSeries.filter((objeto) => {
            if(objeto.genero.toUpperCase().includes(string.toUpperCase()) || objeto.nome.toUpperCase().includes(string.toUpperCase()) || objeto.temporadas == string || objeto.jaGanhouPremio.toUpperCase().includes(string.toUpperCase()) || objeto.streaming.includes(string)) {
                return (objeto)
            }
        })
    
        if (resultado.length > 0){
            mostrarCard(resultado, criaCard)
            console.log(resultado)
            
        } else {
            alert("Nenhum item encontrado.")
            listaCard.innerHTML = ""
        }
    }

    busca(todasAsSeries, input.value)
}

function voltaListaCompleta (event) {
    event.preventDefault()
    let listaCard = document.getElementById("itens-da-lista")
    listaCard.innerHTML = "";
    mostrarCard(todasAsSeries, criaCard)
}

