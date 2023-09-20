function per() {

    let stdTotal_Marks = + document.querySelector("#tm1").value;
    let obtTotal_Marks = + document.querySelector("#om1").value;
 
    let per = (obtTotal_Marks / stdTotal_Marks) * 100;

    document.querySelector("#tp1").value = (` ${per}  %`);

    if (per >= 90){
        document.querySelector("#yg1").value = "a+";
    }
    else if (per >= 80){
        document.querySelector("#yg1").value = "a";
    }
    else if (per >= 70){
        document.querySelector("#yg1").value = "b+";
    }
    else if (per >= 60){;
        document.querySelector("#yg1").value = "b";
    }
    else if (per >= 50){
        document.querySelector("#yg1").value = "c+";
    }
    else if (per >= 40){
        document.querySelector("#yg1").value = "c";
    }
    else if (per >= 35){
        document.querySelector("#yg1").value = "d+";
    }
    else if (per >= 30){
        document.querySelector("#yg1").value = "d";
    } 
    else {
        document.querySelector("#yg1").value="You are fail";
    }
    
}
