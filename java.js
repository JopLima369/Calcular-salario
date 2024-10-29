function validarhoras(){
    var numero = parseInt(document.getElementById('horas').value);
    var resultado = document.getElementById('resultado');
    var turno = document.getElementById('turno').value;
    var pagamento

    if (isNaN(numero) || numero <= 0) {
        resultado.textContent = "Insira a quantidade de horas!";
        resultado.style.color = "red"
        return; 
    }
    
    if ( turno == "matutino"){
        pagamento = numero * 37.50
    }else{
        pagamento = numero * 45.00
    }
    resultado.textContent = `Seu salário será de R$ ${pagamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    resultado.style.color = "green"
}