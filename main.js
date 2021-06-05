
var animalInfo=document.getElementById("animal-info");

btn.addEventListener('click', function(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","animals.json");
    xhttp.onload = function (){
        var data = JSON.parse(xhttp.responseText);

        renderData(data);
    };
    xhttp.send();
});

function renderData(data){
  var htmlString="";
  for(i=0;i<data.length;i++){
    htmlString +="<h3>"+data[i].name+" is a "+data[i].species+"</h3>";
  }
  animalInfo.insertAdjacentHTML("beforeend",htmlString);
}

