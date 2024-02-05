$(function () { // Equivalent a window.onload

    // Exercici 1. Seleccionar un ID i cambiar-li el src
    $("input:eq(0)").click(function () {
        $("#star").attr("src", "star_on.gif");
    });

    // Exercici2. Accedir al segon fill ''
    $("input:eq(1)").click(function () {
        $("#estrelles img:eq(1)").attr("src", "star_on.gif");
    });

    // Exercici 3. Accedir al img dins de span id
    $("input:eq(2)").click(function () {
        $("#frase img").attr("src", "star_on.gif");
    });

    // Exercici 4. Primer germà del img id ultima
    $("input:eq(3)").click(function () {
        $("img#ultima").siblings().first().attr("src", "star_on.gif");
    });

    // Exercici 5. Accedir al img que está dins de i que està dins de span
    $("input:eq(4)").click(function () {
        $("span i img").attr("src", "star_on.gif");
    });

    // Exercici 6. Equivalent a innerHTML
    $("input:eq(5)").click(function () {
        $("#field").html('<img src="star_on.gif">');
    });

    // Exercici 7. Borrar element per id
    $("input:eq(6)").click(function () {
        $("#fallenstar").remove();
    });

    // Exercici 8. Copiar, eliminar, pegar en pare
    $("input:eq(7)").click(function () {
        var node = $("#source").clone();
        $("#source").remove();
        $("#target").append(node);
    });

    // Exercici 9. 
    $("input:eq(8)").click(function () {
        var imgStar = $('<img/>');
        imgStar.attr("src", "star_on.gif");
        $("#sky").append(imgStar);
    });

    // Exercici 10.

});