window.addEventListener('load', () => {
  
  const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

  const card = document.querySelector('.card');
  const input = document.querySelector('.input');
  const button = document.querySelector('.submit');
  button.addEventListener('click', () => {
    if (input.value) {
      const finalURL = url + input.value;
      loadImage(finalURL);
    }
  });
  
  input.addEventListener('input', function() {
    if (!this.value) card.classList.add('d-none')
  });
  
  function loadImage(url) {
    const image = document.querySelector('.image');
    image.src = url;
    image.addEventListener('load', () => card.classList.remove('d-none'));
  }
  
});

