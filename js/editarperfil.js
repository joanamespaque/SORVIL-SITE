const infoButton = document.querySelector('#infoButton');
const contaButton = document.querySelector('#contaButton');
const divInfo = document.querySelector('.inputsFormInfo');
const divConta = document.querySelector('.inputsFormConta');
contaButton.addEventListener('click', function(){
    contaButton.style.backgroundColor = '#30afad';
    infoButton.style.backgroundColor = 'white';
    divConta.style.display = 'block';
    divInfo.style.display = 'none'
});
infoButton.addEventListener('click', function(){
    infoButton.style.backgroundColor = '#30afad';
    contaButton.style.backgroundColor = 'white';
    divInfo.style.display = 'block';
    divConta.style.display = 'none';
});