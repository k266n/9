function addUser(){
    Player1_name=document.getElementById("player1_name_imput").value;
    Player2_name=document.getElementById("player2_name_imput").value;
    localStorage.setItem("player1name", Player1_name);
    localStorage.setItem("player2name", Player2_name);
    window.location="game.html";
    
}