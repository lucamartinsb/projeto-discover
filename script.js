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
  img.setAttribute('src', './assets/profile-day.jpg');
  img.setAttribute('alt', 'foto de Luca Martins usando oculos escuro e de blusa azul escuro, na rua.')
 } else {
   img.setAttribute('src', './assets/profile-night.jpg');
   img.setAttribute('alt', 'foto de Luca Martins, usando blusa vermelha, em casa.')
 }


}