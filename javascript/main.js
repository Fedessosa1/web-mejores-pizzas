let links = document.querySelectorAll(".close");

links.forEach(function(link){
    
//agregar un evento click a cada uno de ellos - case sensitive
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content=document.querySelector('.content');

        //quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated"); 

        //agregar clases para animar su salida fadeOutUp
        content.classList.add(fadeOutUp);
        content.classList.add(animated);

        setTimeout(function(){
            location.href="/";
        },600);

        return false;
    });
});



