document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  const campoA = document.getElementById('campoA');
  const campoB = document.getElementById('campoB');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (isNaN(valorA) || isNaN(valorB)) {
      alert('Por favor, insira números válidos em ambos os campos.');
      return;
    }

    if (valorA > valorB) {
      alert('FORMULÁRIO INVÁLIDO:O valor de A é maior que B.');
    } else if (valorA < valorB) {
      alert('FORMULÁRIO VÁLIDO :O valor de B é menor que A.');
    } else {
      alert('Os valores de A e B são iguais.');
    }
    
  });
});