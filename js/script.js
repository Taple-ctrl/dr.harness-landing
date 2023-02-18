function cardErotic() {
  document.querySelector('.card-everyday').style.display ='none',
  document.querySelector('.card-erotic').style.display ='flex',
  document.getElementById("catalogErotic").classList.add('catalogBTNActive'),
  document.getElementById("catalogEveryday").classList.remove('catalogBTNActive')
}

function cardEveryday() {
  document.querySelector('.card-everyday').style.display ='flex',
  document.querySelector('.card-erotic').style.display ='none',
  document.getElementById("catalogEveryday").classList.add('catalogBTNActive'),
  document.getElementById("catalogErotic").classList.remove('catalogBTNActive')
}

function buyPartupei1(){
  document.querySelector('.dropOrder1').style.display ='flex',
  document.querySelector('.opacity-order').style.display ='block'
}

function buyPartupei2(){
  document.querySelector('.dropOrder2').style.display ='flex',
  document.querySelector('.opacity-order').style.display ='block'
}


function buyPartupei3(){
  document.querySelector('.dropOrder3').style.display ='flex',
  document.querySelector('.opacity-order').style.display ='block'
}


function closeBuyPartuoei1(){
  document.querySelector('.dropOrder1').style.display ='none',
  document.querySelector('.opacity-order').style.display ='none'
}

function closeBuyPartuoei2(){
  document.querySelector('.dropOrder2').style.display ='none',
  document.querySelector('.opacity-order').style.display ='none'
}

function closeBuyPartuoei3(){
  document.querySelector('.dropOrder3').style.display ='none',
  document.querySelector('.opacity-order').style.display ='none'
}