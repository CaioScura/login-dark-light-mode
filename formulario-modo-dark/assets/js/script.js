const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    //verifica se o icone é a lua
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        switchIconToDark(); // Chama a função para trocar o ícone para o tema escuro
        return;
    }

    switchIconToLight();
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

function switchIconToDark() {
    var themeIcon = document.getElementById("theme-icon");
    themeIcon.src = "assets/img/apple-light.png";
}

function switchIconToLight() {
    var themeIcon = document.getElementById("theme-icon");
    themeIcon.src = "assets/img/apple.png";
}