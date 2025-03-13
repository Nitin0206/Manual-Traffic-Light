function changeLight(color) {
    document.querySelectorAll('.light').forEach(light => {
        light.style.background = 'gray';
    });

    document.querySelector(`.${color}`).style.background = color;
}
