function calcular () {
    var PrimeiroNumero = parseInt(document.getElementById('PrimeiroNumero').value);
    var SegundoNumero = parseInt(document.getElementById('SegundoNumero').value);
    var Resultado = document.querySelector ('span');
    var Operacao = document.getElementById ('operacao'); 
    const casos = Operacao.selectedIndex; 

    switch(casos) {
        case 1:
            Resultado.innerHTML = PrimeiroNumero + SegundoNumero
            break; 
        case 2:
            Resultado.innerHTML = PrimeiroNumero - SegundoNumero
            break; 
        case 3:
            Resultado.innerHTML = PrimeiroNumero * SegundoNumero
            break; 
        case 4:
            if(SegundoNumero===0) {
                alert ("Impossivel dividir por zero")
            } else {
                Resultado.innerHTML = PrimeiroNumero / SegundoNumero
            }
            break; 
    }
}