function ConvertCtoF(degreesCelsius) {
  return degreesCelsius * (9/5) + 32;
}

function ConvertFtoC(degreesFahrenheit) {
  return (degreesFahrenheit - 32) * (5/9);
}

function buttomClick(event){
  var celsius = document.getElementById("CInput");
  var fahrenheit = document.getElementById("FInput");
  var err = document.getElementById("ErrDiv");
  if(celsius.value == ""){
    //console.log("celcius");
    if(isNaN(parseFloat(fahrenheit.value))){
      //console.log("f error");
      err.innerText = fahrenheit.value + " is not a number";
    }else{
      celsius.value = ConvertFtoC(parseFloat(fahrenheit.value));
    }
  }
  if(fahrenheit.value == ""){
    //console.log("farhenhit");
    if(isNaN(parseFloat(celsius.value))){
      //console.log("c error");
      err.innerText = celsius.value + " is not a number";
    }else{
      fahrenheit.value = ConvertCtoF(parseFloat(celsius.value));
    }
  }
}

function changeImg(event){
  var img = document.getElementById("WeatherImage");
  var celsius = document.getElementById("CInput");
  var fahrenheit = document.getElementById("FInput");

  if(parseFloat(fahrenheit.value) < 32 || ConvertCtoF(parseFloat(celsius.value)) < 32){
    //console.log("1");
    img.src = "cold.gif";
  }
  else if(parseFloat(fahrenheit.value) > 50 || ConvertCtoF(parseFloat(celsius.value)) > 50){
    //console.log("2");
    img.src = "warm.gif";
  }
  else{
    img.src = "cool.gif";
    //console.log("3");
  }
}

function cClearListener(event){
  //console.log("c-clear");
  var input = document.getElementsByTagName("input");
  input[1].value = "";
  clearError();
}

function fClearListener(event){
  //console.log("f-clear")
  var input = document.getElementsByTagName("input");
  input[0].value = "";
  clearError();
}

function clearError(){
  var err = document.getElementById("ErrDiv");
  err.innerText = "";
}

function bodyLoaded() {
  var convert = document.getElementById("ConvertButton");
  var input = document.getElementsByTagName("input");

  convert.addEventListener("click", buttomClick);
  convert.addEventListener("click", changeImg);
  input[0].addEventListener("input", cClearListener);
  input[1].addEventListener("input", fClearListener);
}