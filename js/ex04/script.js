function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var d = new Date()
    var hora = date.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src='foto-dia.png'
        document.body.style.background= "blue"
    } else if (hora >= 12 && hora < 18) {
        img.src='foto-tarde.png'
    } else {
        img.src='foto-noite.png'
    }
}