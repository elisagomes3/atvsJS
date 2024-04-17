function verificarLetra() {
    // Pedir ao usuário que insira uma letra
    const letraInserida = prompt("Por favor, insira uma letra:");
  
    // Verificar se a entrada é uma letra
    if (letraInserida && letraInserida.length === 1 && letraInserida.match(/[a-zA-Z]/)) {
      const letra = letraInserida.toLowerCase();
  
      // Verificar se a letra é uma vogal
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("A letra '" + letra + "' é uma vogal.");
      } else {
        alert("A letra '" + letra + "' é uma consoante.");
      }
    } else {
      alert("Por favor, insira uma única letra do alfabeto.");
    }
  }
  
  