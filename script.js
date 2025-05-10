const slider = document.getElementById('temp-slider');
const display = document.getElementById('temp-display');
const info = document.getElementById('info');

function updateTemp(val) {
  display.textContent = `${val} °C`;
  let msg = '';
  if (val <= 0) msg = 'Muito frio! Agasalhe-se bem.';
  else if (val <= 15) msg = 'Clima frio, cuidado com o vento.';
  else if (val <= 25) msg = 'Temperatura agradável.';
  else if (val <= 32) msg = 'Está esquentando, hidrate-se!';
  else msg = 'Muito calor! Evite exposição ao sol.';
  info.textContent = msg;
}

slider.addEventListener('input', e => {
  updateTemp(e.target.value);
});

// Inicialização
updateTemp(slider.value);
