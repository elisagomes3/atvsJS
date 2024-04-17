function bubbleSortDecrescente(arr) {
    let trocado;
    do {
      trocado = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          trocado = true;
        }
      }
    } while (trocado);
    return arr;
  }
  
  // Função para pedir ao usuário 4 valores inteiros
  function pedirValores() {
    const valores = [];
    for (let i = 1; i <= 4; i++) {
      let valor = parseInt(prompt("Por favor, insira o valor inteiro #" + i + ":"));
      if (!isNaN(valor)) {
        valores.push(valor);
      } else {
        alert("Por favor, insira um valor inteiro válido.");
        return;
      }
    }
    return valores;
  }
  
  // Função principal
  function main() {
    const valores = pedirValores();
    if (valores) {
      const valoresOrdenados = bubbleSortDecrescente(valores);
      alert("Valores em ordem decrescente: " + valoresOrdenados.join(", "));
    }
  }

  
  
  