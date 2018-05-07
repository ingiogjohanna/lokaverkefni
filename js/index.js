var getnumber = function(number){ 
$.ajax({
  'url': 'https://apis.is/car',
  'type': 'GET',
  'dataType': 'json',
  'data': {'number': number},
  'success': function(response) {
    console.log(response);
    $('.upplysingar12').show();
    $('.villa').hide();
        $('#error1').hide();
    $('#color').text("Litur: " + response.results[0].color);
  $('#factoryNumber').text("Verksmiðjunúmer: " + response.results[0].factoryNumber);  
    $('#nextCheck').text("Næsta skoðun: " + response.results[0].nextCheck);  
    $('#number1').text("Fastanúmer: " + response.results[0].number);  
    $('#registeredAt').text("Fyrst skráður: " + response.results[0].registeredAt);  
    $('#registryNumber').text("Skráningarnúmer: " + response.results[0].registryNumber);  
    $('#status').text("Staða: " + response.results[0].status);  
    $('#subType').text("Undirtegund: " + response.results[0].subType); 
    $('#type').text("Tegund: " + response.results[0].type); 
    $('#weight').text("Þyngd: " + response.results[0].weight);
  },
  'error':function(response){
   $('#error').text("Því miður er númerið ekki á skrá.");
   $('.upplysingar12').hide();
   $('.villa').show();
       $('#error1').hide();
if (number == "" || number.length == 0 || number == null)
{
$('#error1').text("Vinsamlegast sláðu inn bílnúmer.");
$('.upplysingar12').hide();
$('.villa').hide();
   $('#error1').show();


}

  }
});
};
$("#uppfletta").click(function(){
getnumber($("#number").val());
});

var input = document.getElementById("number");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("uppfletta").click();

  }
});