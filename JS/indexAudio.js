var sound = new Howl({
    src: ['assets/Cheo Gallego - Incierto_70k.mp3']
  });
  
  

var py = document.getElementById("py");
py.addEventListener("click",function ( ) {
    sound.play();
    py.className = "inhabilitar";
    ps.className = "habilitar";
});

var ps = document.getElementById("ps");
ps.addEventListener("click",function ( ) {
    sound.pause();
    py.className = "habilitar";
    ps.className = "inhabilitar";
});