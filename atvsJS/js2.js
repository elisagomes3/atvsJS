function countdownTimer(seconds) {
    const interval = setInterval(() => {
      if (seconds > 0) {
        console.log(seconds);
        seconds--;
      } else {
        console.log("Foguete lançado!");
        clearInterval(interval);
      }
    }, 1000); 
   
    if (!isNaN(seconds) && seconds > 0) {
      console.log("Contagem regressiva iniciada...");
    } else {
      console.log("Por favor, insira um número de segundos válido.");
    }
  }
  
  function iniciarContagem() {
    const secondsInput = prompt("Por favor, insira a quantidade de segundos para a contagem regressiva:");

    const tempoDeContagem = parseInt(secondsInput);
  
    countdownTimer(tempoDeContagem);
  }
  