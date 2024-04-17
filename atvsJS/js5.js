function transformarNumero() {
    // Pedir ao usuário que insira um número
    const numero = parseInt(prompt("Por favor, insira um número:"));
  
    // Verificar se o número inserido é um número
    if (!isNaN(numero)) {
      const novoNumero = (numero % 2 === 0) ? numero + 1 : numero - 1;
      alert("O número transformado é: " + novoNumero);
    } else {
      alert("Por favor, insira um número válido.");
    }
  }
  