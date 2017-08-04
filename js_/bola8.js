$(document).ready(function(){
  console.info(2222)
  var  answers = [
    "simonky",
    "chido",
    "exito en tu vida",
    "simon",
    "hey",
    "piensalo de 2 veces",
    "suena interesante",
    "animo",
    "es mucho por arriesagar",
    "Ja JA JA",
    "No te entiendo",
    "adios",
    "solo soy una bola",
  ];
  $("#question-form").on('submit',function(event){
    event.preventDefault();
    var answer = answers[Math.floor(Math.random()*answers.length)];
    var text = $("input#question").val();
    /*
    var answer = answers [0];
    */

    if(text){
      $("#my_question").text( text );
      $("#my_answer").text( answer );
      $("input#question").val('');
    }


  });

});
