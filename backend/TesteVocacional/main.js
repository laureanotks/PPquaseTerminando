

// let respostasA = 0;
// let respostasB = 0;
// let respostasC = 0;


// let questions = {
//     1: {
//         question: "Idade da criança",
//         a: "5-8 anos",
//         b: "9-12 anos",
//         c: "13 anos ou mais",
//     },
//     2: {
//         question: " O que a criança gosta de assistir na TV ou no cinema? ",
//         a: "Lutas e combates corpo a corpo",
//         b: "Histórias de superação pessoal e habilidades de autodefesa",
//         c: "Artes marciais tradicionais e movimentos de alta velocidade",
//     },
//     3: {
//         question: " Qual é o nível de energia da criança?  ",
//         a: "Alta energia e gosta de atividades físicas intensas",
//         b: "Energia moderada, mas interessada em aprender habilidades de autodefesa",
//         c: "Energia moderada, com foco na disciplina e na técnica",
//     },
//     4: {
//         question: " As metas da criança incluem: ",
//         a: "Desenvolver força física e resistência",
//         b: "Aprender a se defender e ganhar confiança",
//         c: "Foco na disciplina e na mentalidade de artes marciais tradicionais", 
//     },
//     5: {
//         question: " Qual é o ambiente preferido da criança? ",
//         a: "Gosta de lutas no chão e técnicas de imobilização",
//         b: "Prefere técnicas de estrangulamento e finalizações no chão",
//         c: "Interesse em golpes de pé, chutes e socos",
//     },
//     6: {
//         question: "Qual é o nível de interesse da criança em aprender técnicas de autodefesa?",
//         a: "Muito interessada",
//         b: "Moderadamente interessada",
//         c: "Pouco interessada",
//     },
//     7: {
//         question: "A criança gosta de competir e participar de eventos esportivos?",
//         a: "Sim, adora competir",
//         b: "Gosta de competir ocasionalmente",
//         c: "Não está interessada em competições",
//     },
//     8: {
//         question: "Qual é o objetivo principal da criança ao praticar uma arte marcial?",
//         a: "Ficar fisicamente mais forte",
//         b: "Ganhar autoconfiança e habilidades de autodefesa",
//         c: "Desenvolver autodisciplina e mentalidade de artes marciais"
//     }
// }

// //listar objeto de perguntas e opções de respostas
// questions.forEach(element => {
//     console.log(element); 
//     questions.element[1];
//     //recupera espaço criado para exibir no html
//     let divNoIndex = document.getElementById('questions');
//     //pegar pergunta para exibir no html
//     divNoIndex.innerHTML = element;

//     // pegar resposta da pegunta exibida atraves da funçao onclick

//     //pegar o value do input e comparar a resposta, caso o value seja igual a 'A'

//     // acrescanetar na variavel corresponde (respostasA)
//     respostasA++;
//     // armazenar resposta em uma variavel globlal

// });


// //função para verificar variavel mais respostas

// // document.getElementById('questions').innerHTML
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontosJUDÔ = 0 
let pontosJIUJITSU = 0 
let pontosKARATE = 0 
// let pontos = 0 
let placar = 0 // placar


// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Idade da criança:",
    alternativaA : "5-8 anos", //J
    alternativaB : "9-12 anos", //JJ
    alternativaC : "13 anos ou mais", //KARATE
    correta      : "0",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O que a criança gosta de assistir na TV ou no cinema? ",
    alternativaA : "Artes marciais tradicionais e movimentos de alta velocidade", //J 
    alternativaB : "Histórias de superação pessoal e habilidades de autodefesa", //JJ
    alternativaC : "Lutas e combates corpo a corpo", //KRT
    correta      : "0",
}

const q3 = {
    numQuestao   : 3, 
    pergunta     : "Qual é o nivel de energia da criança?",
    alternativaA : "Energia moderada, com foco na disciplina e na técnica", //J
    alternativaB : "Energia moderada, mas interessada em aprender habilidades de autodefesa", //JJ
    alternativaC : "Alta energia e gosta de atividades físicas intensas", //KRT
    correta      : "0",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Foco na disciplina e na mentalidade de artes marciais tradicionais",
    alternativaA : " Desenvolver força física e resistência", //J
    alternativaB : "Aprender a se defender e ganhar confiança", //JJ
    alternativaC : "As metas da criança incluem:", //KRT
    correta      : "0",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o ambiente preferido da criança?",
    alternativaA : "Gosta de lutas no chão e técnicas de imobilização", //J
    alternativaB : "Prefere técnicas de estrangulamento e finalizações no chão", //JJ
    alternativaC : "Interesse em golpes de pé, chutes e socos", //KRT
    correta      : "0",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o nível de interesse da criança em aprender técnicas de autodefesa?",
    alternativaA : "Moderadamente interessada", //J
    alternativaB : "Muito interessada", //JJ
    alternativaC : "Pouco interessada", //KRT
    correta      : "0",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "A criança gosta de competir e participar de eventos esportivos?",
    alternativaA : "Sim, adora competir", //J
    alternativaB : "Gosta de competir ocasionalmente", //JJ
    alternativaC : "Não está interessada em competições", //KRT
    correta      : "0",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é o objetivo principal da criança ao praticar uma arte marcial?",
    alternativaA : "Desenvolver autodisciplina e mentalidade de artes marciais",
    alternativaB : "Ganhar autoconfiança e habilidades de autodefesa",
    alternativaC : "Ficar fisicamente mais forte",
    correta      : "0",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao  
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent  = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}



//===================================VERIFICAR AQUI PARA LOGICA DO PP
function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent

    let jiu = questoes[numeroDaQuestao].alternativaA
    let judo = questoes[numeroDaQuestao].alternativaB
    let karate = questoes[numeroDaQuestao].alternativaC
    
    if(respostaEscolhida == jiu) {
        pontosJIUJITSU += 1 // pontos = pontos + 10
    }else if(respostaEscolhida == judo) {
        pontosJUDÔ += 1
    }else{
        pontosKARATE += 1
    };

    // atualizar placar
    // placar = pontos
    instrucoes.textContent = ""

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            fimDoJogo()
            console.log('Fim do Jogo!')
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Seu teste chegou ao fim!"
    numQuestao.textContent = ""

    if (pontosJIUJITSU > pontosJUDÔ && pontosKARATE) {
        pergunta.textContent   = "Parabéns!! Você tem potencial para ser um ótimo Jiujitero ;)" 
        aviso.textContent = "Parabéns!! Você tem potencial para ser um ótimo Jiujitero ;)"
    }else if (pontosJUDÔ > pontosJUDÔ && pontosKARATE) {
        pergunta.textContent   = "Parabéns!! Você tem potencial para ser um ótimo Judoca ;)" 
        aviso.textContent = "Parabéns!! Você tem potencial para ser um ótimo Judoca ;)"
    }else {
        pergunta.textContent   = "Parabéns!! Você tem potencial para ser um ótimo Karateca ;)" 
        aviso.textContent = "Parabéns!! Você tem potencial para ser um ótimo Karateca ;)"
    }
    
    console.log("Placar JiuJitsu = " + pontosJIUJITSU)
    console.log("Placar Judo = " + pontosJUDÔ)
    console.log("Placar Karate = " + pontosKARATE)




    // let pont = ''
    // pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    // pergunta.textContent   = "Você fez " + pontos + " " + pont

    // aviso.textContent = "Você fez " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'
}



