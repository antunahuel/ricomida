var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function(){
  $("h2").on("dblclick", function(){
    $(this).css("color","red");
  });

  $("#recetas .subtit").click (function(){
    $(this).toggleClass();
    $(this).next(".card-text").toggle("4000")
})

$("#alerta").click (function(){
   alert("El correo fue enviado correctamente...");
})

})

