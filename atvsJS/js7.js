function obterPreco() {
    const saborEscolhido = prompt("Escolha um sabor de picolé entre as opções a seguir: (Chocolate, Morango, Creme, Manga, Melancia, Vanilla Ice, Céu Azul, Brownie e Hawaiano):");
  
    // Converter o sabor para minúsculas para facilitar a comparação
    const sabor = saborEscolhido.toLowerCase();
  
    // Definir os preços dos sabores
    switch (sabor) {
      case 'chocolate':
        alert("O preço do picolé de Chocolate é R$ 1.50");
        break;
      case 'morango':
      case 'creme':
        alert("O preço do picolé de Morango ou Creme é R$ 2.50");
        break;
      case 'manga':
        alert("O preço do picolé de Manga é R$ 3.20");
        break;
      case 'melancia':
        alert("O preço do picolé de Melancia é R$ 3.40");
        break;
      case 'vanilla ice':
        alert("O preço do picolé de Vanilla Ice é R$ 3.00");
        break;
      case 'céu azul':
        alert("O preço do picolé de Céu Azul é R$ 3.60");
        break;
      case 'brownie':
        alert("O preço do picolé de Brownie é R$ 4.00");
        break;
      case 'hawaiano':
        alert("O preço do picolé de Hawaiano é R$ 5.00");
        break;
      default:
        alert("Sabor não encontrado");
    }
  }
  
