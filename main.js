function changeColor() {
    var color = document.getElementById('color-changer-input').value;
    var regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (regex.test(color)) {
        document.querySelector('.colorDiv').style.backgroundColor = color;
    } else {
        alert('Por favor ingresa un color hexadecimal válido, por ejemplo: #FF0000 para rojo.');
    }
}