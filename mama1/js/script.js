function checar() {
    v1= parseFloat(document.getElementById('X').value);
    v2= parseFloat(document.getElementById('Y').value);
    v3= parseFloat(document.getElementById('Z').value);
    mr=""
    mt= ""
    if(v1>(v2+v3)){
        mr = "não é um triangulÔ"
    }else if(v2>(v1+v3)){
        mr = "não é um Triangulô"
    }else if(v3>(v2+v1)){
        mr = "não é triangulô"
    }
    if(v1==v2&& v2==v3){
        mt= "triangulo Equilatero";
    }else if(v1 == v2 || v1 == v3 || v2 == v3){
        mt="triangulo isoceles";
    }else if(v1!=v2&&v2!=v3&&v3!=v1){
    mt = "Triangulo Escaleno"
    } else{
        mt="não é triangulo"
    }
    document.getElementById(`R`).innerHTML = mr
    document. getElementById(`T`).innerHTML = mt
}

