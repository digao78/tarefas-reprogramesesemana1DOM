// Selecionar todos elementos da classe 'produto_preco'
var elementos = document.getElementsByClassName('produto_preco');

  // Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
var stringSomada = 0.0;
for (e of elementos) {
  stringSomada += parseFloat(e.innerText);
}


// Escrever no conteúdo da página o valor da soma 
document.write('Total: R$' + stringSomada);
