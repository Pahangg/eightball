function shake() {
  //makes sure there is a question or at least some text in the textarea
  if(document.getElementById("userQuestion").value == ''){
    alert("Please Enter A Question!");
  }
  else {
    var div=document.getElementById('answer');
    //makes sure to clear whatever answer is in the space before generating the new one
    div.innerHTML = "";
    //choses a number between 1 and 10
    var x = Math.random() * 10;
    if (x<=5){
      var div=document.getElementById('answer');
      var textNode = document.createTextNode("Of Course");
      var response='yes'
    }
    else {
      var response='no'
    }
    //creates a new textnode with the response based off of the if statement
    var textNode = document.createTextNode(response);
    div.appendChild(textNode);
  }
}
