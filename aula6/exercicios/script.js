function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('foto')
    var data =new Date();
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    
    
    if(hora >= 6 && hora < 12) {
        foto.src = 'manha.jpg'
    } else if( hora >= 12 && hora < 18) {
        foto.src = 'tarde.jpg'
    } else {
        foto.src = 'noite.jpg'
    }
    };
