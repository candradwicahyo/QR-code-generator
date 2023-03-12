window.onload = () => {
  
  const input = document.querySelector('.input');
  const submitNutton = document.querySelector('.btn-submit');
  submitNutton.addEventListener('click', () => {
    // value input 
    const value = input.value.trim();
    // jika input kosong
    if (!value) return alerts('error', 'Alert', 'field is empty!');
    // url api dan value input 
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    // setImage()
    setImage(url);
    // hilangkan value input
    input.value = '';
  });
  
  function alerts(icon, title, text, position = 'center') {
    // plugin sweetalert 
    swal.fire ({
      position: position,
      icon: icon,
      title: title,
      text: text
    });
  }
  
  function setImage(url) {
    const image = document.querySelector('.image');
    // ubah isi atribut src gamhar dengan isi parameter url
    image.src = url;
  }
  
}