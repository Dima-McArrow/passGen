window.onload = function() {
  /* const passShow = document.getElementById('passWrap');
  fetch('http://localhost:3000/api/passGen')
    .then(response => response.json())
    .then(data => {
      const passPara = document.createElement('p');
      passPara.innerText = '';
      passShow.appendChild(passPara);
    })
    .catch(error => console.error('Error:', error)); */

  
  const submitLength = document.getElementById('submitLength');
  submitLength.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    const lengthInput = document.getElementById('passLength').value;
    console.log(lengthInput);
    const passShow = document.getElementById('passWrap');
    fetch(`http://localhost:3000/api/passGen?lengthInput=${lengthInput}`)
      .then(response => response.json())
      .then(data => {
        const passPara = document.createElement('p');
        passPara.classList.add('passWord');
        passPara.innerText += data.pass;
        console.log(data.pass);
        passShow.appendChild(passPara);
      })
      .catch(error => console.error('Error:', error));
  })
  

  const reloadButton = document.getElementById('reload');
  reloadButton.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    window.location.reload()
  })
}