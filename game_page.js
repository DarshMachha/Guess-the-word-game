p1=localStorage.getItem("p1");
p2=localStorage.getItem("p2");

p1_score=0;
p2_score=0; 

document.getElementById("player1").innerHTML=p1+"-";
document.getElementById("player2").innerHTML=p2+"-";

document.getElementById("playersc1").innerHTML=p1_score;
document.getElementById("playersc2").innerHTML=p2_score;

document.getElementById("question").innerHTML="Question turns to - "+ p1;
document.getElementById("answer").innerHTML="Answer turns to - "+ p2;

function questionw(){
    gw=document.getElementById("word").value;
    word=gw.toLowerCase();

    l1=word.charAt(1);
    divide=Math.floor(word.length/2);
    l2=word.charAt(divide);
    minus=word.length-1;
    l3=word.charAt(minus);

    rl1=word.replace(l1,"_");
    rl2=rl1.replace(l2,"_");
    rl3=rl2.replace(l3,"_");

    qw="<h4 id='display'> Q . "+rl3+"</h4>";
    textinput="<br>Answer -  <input type='text'id='text2'>";
    cb="<br><button class='btn btn-success ' onclick='check()'> CHECK </button>";
    row=qw+textinput+cb;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}

question="player1";
answer="player2";

function check(){
    get_answer=document.getElementById("text2").value;
    answer= get_answer.toLowerCase();

    if(answer==word){
        if(answer=="player1"){
            p1_score=p1_score+1;
            document.getElementById("playersc1").innerHTML=p1_score;
        }
        else{
            p2_score=p2_score+1;
            document.getElementById("playersc2").innerHTML=p2_score;
        }
    }
    if(question=="player1"){
        question="player2";
        document.getElementById("question").innerHTML="Question to - "+p2;
    }
    else{
        question="player1";
        document.getElementById("question").innerHTML="Question to - "+p1       
    }

    if(answer=="player1"){
        answer="player2";
        document.getElementById("answer").innerHTML="Answer to - "+p2;
    }
    else{
        answer="player1";
        document.getElementById("answer").innerHTML="Answer to - "+p1;       
    }

    document.getElementById("output").innerHTML="";
}

