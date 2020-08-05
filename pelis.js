var pelisArray = [];

function showPelis(array){
    let contenido = "";
    for (let i = 0; i < array.legth; i++){
        let peli = array[i];

        contenido += "Título: " + lista.nombre + "<br>";
        contenido += "Género: " + lista.genero + "<br>";
        contenido += "Apto para: " + lista.edad + "<br>";
        contenido += "Duración: " + lista.duracion + "<br>";
        contenido += "<br><hr><br>"

        document.getElementById("lista").innerHTML
    }
}

document.addEventListener "DOMContentLoaded", function(e){
    getJSONData(PELIS_URL).then function(resultObj){
        if (resultObj.status === "ok") {
            pelisArray = resultObj.data;
            showPelis(pelisArray);
        }
    });
});




