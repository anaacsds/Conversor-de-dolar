function conversor() {
    const valor = document.querySelector("input")
    const dolar = 5.37;
    const valorConvertido = valor.value / dolar //o value deixa que apenas o valor da variável "valor" seja selecionado
    alert(`O valor em dólar é ${valorConvertido} dólares`);
}