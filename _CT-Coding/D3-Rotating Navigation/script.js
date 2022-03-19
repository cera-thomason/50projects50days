const open1 = document.getElementById('open')
const close1 = document.getElementById('close')
const container1 = document.querySelector('.container')

open1.addEventListener('click', () => container1.classList.add('show-nav'))

close1.addEventListener('click', () => container1.classList.remove('show-nav'))