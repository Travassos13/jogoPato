var score="";
var sound = new Howl({
    src: ['sound.mp3']
  });

function addbola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 =  Math.floor(Math.random() * 800);
    var p2 =  Math.floor(Math.random() * 800);
    
    bola.setAttribute("style", "left:" +p1+ "px; top:" +p2+ "px;");

    document.body.appendChild(bola);
    bola.setAttribute("onclick","estourar(this)");
}

function estourar(el) {
    var del = document.body.removeChild(el);
    if(del){
        score++;
        document.getElementById("score").innerHTML="<h2>Pontos: "+score+"</h2>";
        sound.play();
    }
    
}

function iniciar(){
    setInterval(addbola, 1000);
   // alert("teste");
}
