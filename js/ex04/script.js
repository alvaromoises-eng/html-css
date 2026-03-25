function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 7
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src='foto-dia.png'
        document.body.style.background= "blue"
    } else if (hora >= 12 && hora < 18) {
        img.src='foto-tarde.png'
        document.body.style.background= "orange"
    } else {
        img.src='foto-noite.png'
        document.body.style.background= "black"
    }
}