function changeColor() {
    var color = document.getElementById('color-changer-input').value;

    if (/^#[0-9A-F]$/i.test(color)) {
        document.querySelector('.colorDiv').style.backgroundColor = color;
    } else {
        alert('Por favor ingresa un color hexadecimal válido, por ejemplo: #FF0000 para rojo.');
    }
}