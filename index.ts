let idade: number = 20;
let altura: number = 1.75;

console.log(idade);
console.log(altura);

let nome: string = "Fabricio";
console.log(nome);

let saudacao: string = `Olá ${nome}`
console.log(saudacao);

let aprovado: boolean = true;
console.log("Está aprovado?", aprovado);

let dado: any = "texto";
console.log("Valor atual: ", dado);

dado = 123;
console.log("Valor atualizado: ", dado);

dado = true;
console.log("Valor atualizado novamente: ", dado);

function exibirMensagem(texto: string): void {
    console.log("Mensagem: ", texto);
}

exibirMensagem("Olá Mundo!");

let numeros: number[] = [10, 20, 30, 40, 50];
console.log("Números: ", numeros);

let nomes: Array<string> = ["Fabricio", "Ana", "Jõao"];
console.log("Nomes: ", nomes);

// Média de Notas:
let notas: number[] = [6.0, 7.8, 10, 8.5, 9.3, 5.8];
let somaNotas = 0;

for (const nota of notas){
    somaNotas += nota;
    console.log("Somando nota:", nota,  "-> NOTA PARCIAL: ",
         somaNotas.toFixed(2));
}

const media = somaNotas / notas.length;
console.log("Média FINAL: ", media.toFixed(2));