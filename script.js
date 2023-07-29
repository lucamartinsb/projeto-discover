function toggleMode() {
  //documentElement é o HTML
  const html = document.documentElement
  const img = document.querySelector('#profile img')
  /*
  //html na lista de classes contém a classe light? (true or false)
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  }
  */
 //Já existe a função acima:
 if(html.classList.toggle('light')) {
  img.setAttribute('src', './assets/avatar-light.png')
   img.setAttribute('alt', 'foto de Mayk Brito usando oculos escuro, de jaqueta e fundo azul')
 } else {
   img.setAttribute('src', './assets/avatar.png')
 }


}