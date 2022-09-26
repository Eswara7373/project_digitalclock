function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    let ampm = HH >= 12 ? 'PM' : 'AM';

    HH = HH % 12;
    HH = HH ? HH : 12;
    MM = MM < 10 ? '0' + MM : MM;
    if(HH < 10)
    HH = "0" + HH

    if(ampm =="AM"){
        document.getElementById("wish1").innerText = "GOOD MORNING !! WAKE UP!!";
        document.getElementById("food1").innerText = "GRAB SOME HEALTHY BREAKFAST";
        document.getElementById("image").style.backgroundImage = "url('window.png')";
    }
    if(HH>=1 && ampm =="PM"){
        document.getElementById("wish1").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("food1").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("image").style.backgroundImage = "url('lunch_pic.jpg')";
    }
    if(HH>=4 && HH<=7  && ampm =="PM"){
        document.getElementById("wish1").innerText = "GOOD EVENING !!";
        document.getElementById("food1").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING";
        document.getElementById("image").style.backgroundImage = "url('evening.png')";
    }
   if(HH>=8 && ampm =="PM"){
        document.getElementById("wish1").innerText = "GOOD NIGHT !!";
        document.getElementById("food1").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("image").style.backgroundImage = "url('goodnight_image.png')";
    }

   

    document.getElementById("HH").innerText = HH;
    document.getElementById("MM").innerText = MM;
    document.getElementById("SS").innerText = SS;
    document.getElementById("ampm").innerText =ampm;

    

    setTimeout(getTime, 1000);
}


getTime();




function myfunc()
{
 let a = document.getElementById("s1")
 let b = a.options[a.selectedIndex].innerText;
 document.getElementById("mg").innerText = b;


 let c = document.getElementById('s2')
 let d = c.options[c.selectedIndex].innerText;
 document.getElementById("af").innerText = d;


 let e = document.getElementById('s3')
 let f = e.options[e.selectedIndex].innerText;
 document.getElementById("nap").innerText = f;


 let g = document.getElementById('s4')
let h = g.options[g.selectedIndex].innerText;
 document.getElementById("nyt").innerText = h;


}
