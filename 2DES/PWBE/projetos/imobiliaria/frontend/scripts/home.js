const pnome = document.querySelector("#nome");
const card = document.querySelector(".card");
const main = document.querySelector("main");

function logoff() {
    localStorage.removeItem("corretor");

    window.location.href = "../index.html";
}

function carregar() {
    let dadosCorretor = JSON.parse(localStorage.getItem("corretor"));

    pnome.innerHTML = dadosCorretor.nome;

    carregarImoveis();
}

function carregarImoveis(id) {
    fetch(`http://localhost:3000/imoveis/corretor/${id}`)
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        data.forEach(imovel => {
            criarCard(imovel);
        })
    })
}

function criarCard(imovel) {
    let nCard = card.cloneNode(true);

    nCard.classList.remove("model");

    nCard.querySelector("#codigo").innerHTML = imovel.codigo;
    nCard.querySelector("#endereco").innerHTML = imovel.endereco;

    nCard.querySelector("#venda").ineerHTML = formatarMoeda(imovel.venda);
    nCard.querySelector("#aluguel").innerHTML = formatarMoeda(imovel.aluguel);

    nCard.querySelector("#status").innerHTML = imovel.nome;

    nCard.querySelector("#btvenda").addEventListener("click",() => {
        alterarStatus(imovel.codigo, 3);
    })

    nCard.querySelector("#btAluga").addEventListener("click",() => {
        alterarStatus(imovel.codigo, 2);
    })

    main.appendChild(nCard);
}

function alterarStatus(codigo, status) {
    return fetch(`http://localhost:3000/imovel/${codigo}/${status}`,{
        "method":"PUT"
    })
    .then(resp => {
         return resp.json();
    })
    .then(data => {
        if(data.affectedRows == 1) {
          window.location.reload();
        }
    })
}

function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(valor);
}