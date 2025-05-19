function votar() {
    voto = parseInt(document.getElementById('candidato').value);
    switch (voto) {
        case 1:
            alert('Maconha livre');
            break;

        case 2:
            alert('Maconha 20R$');
            break;

        case 3:
            alert('Ladrão jogou a maconha pelo céu, quem pegar é dele até policia quer');
            break;

        default:
            alert('Meu mano 500R$ a maconha');
            break;
    }
}