function AbrirMenu() {
    document.getElementById('MenuPrincipal').style.width = "250px"
    document.getElementById('Menu').style.overflow = 'hidden'
}

function CerrarMenu() {
    document.getElementById('MenuPrincipal').style.width = "0"
    document.getElementById('Menu').style.overflow = 'display'
}

function EnviarFormulario(params) {
    alert('Se ha enviado el correo');
    window.location = '/';
}