// Nordbyte: Menü ohne Abhängigkeiten.
// Ohne JavaScript bleibt die Navigation sichtbar — das Verstecken
// passiert erst hier, deshalb die Klasse 'js' als erste Zeile.
document.documentElement.classList.add('js');

// Ab 800px ist das Menü immer offen; darunter schaltet die Taste.
const nbToggle=document.querySelector('.nb-luke');
const nbMenu=document.querySelector('#hauptmenue');
if(nbToggle&&nbMenu){
  const nbDesktop=innerWidth>800;
  nbMenu.hidden=!nbDesktop;
  nbToggle.setAttribute('aria-expanded',String(nbDesktop));
  nbToggle.addEventListener('click',()=>{
    const opened=nbToggle.getAttribute('aria-expanded')==='true';
    nbToggle.setAttribute('aria-expanded',String(!opened));
    nbMenu.hidden=opened;
  });
  addEventListener('resize',()=>{const desktop=innerWidth>800;nbMenu.hidden=!desktop;nbToggle.setAttribute('aria-expanded',String(desktop));});
}