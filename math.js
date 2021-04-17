function addUser() {
    player_name1 = document.getElementById("player_input1").value;
    player_name2 = document.getElementById("player_input2").value;

    localStorage.setItem("1st_player_name", player_name1);
    localStorage.setItem("2nd_player_name", player_name2);
    window.location = "math2.html";
    //it changes the html pages like screen in thunkable\\
    console.log("userfunction");
}

function changeColor() {
   
    var x= document.getElementById("heading");
    x.style.color = "black";
    
    if (x.style.color == "black") {
      x.style.color = "yellow";
    }else if (x.style.color == "yellow") {
      x.style.color = "red";
    }else if (x.style.color == "red") {
      x.style.color = "green";
    }else if (x.style.color == "green") {
      x.style.color = "blue";
    }

    window.setInterval("changeColor()",1000)
}