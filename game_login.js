function login(){
    p1_name=document.getElementById("player1user").value;
    p2_name=document.getElementById("player2user").value;

localStorage.setItem("p1", p1_name);
localStorage.setItem("p2", p2_name);

window.location="game_page.html";
}