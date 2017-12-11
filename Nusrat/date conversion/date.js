function con(){

    var ms=Date.parse( document.getElementById('date1').value);
    var d=new Date(ms);
    if (d.getFullYear() % 4 !== 0){
        document.getElementById("cel1").innerHTML= "your date is : " + d.toDateString() + " and This is not leap year" ;
      }
    else {
            document.getElementById("cel1").innerHTML="your date is : " + d.toDateString() + "  and this is leap year";
        }
       
        
    }


function conv(){
    var msc= Date.parse(document.getElementById('date2').value);
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"];
    var dt=new Date(msc);
    var dy=dayNames[dt.getDay()];
    var mn=monthNames[dt.getMonth()];
    var dat=dt.getDate();
    var yr=dt.getFullYear();
    var n=document.getElementById('date3').value;
    if (n == 1){
    document.getElementById("cel3").innerHTML="your date is: " + dy + "," + mn + " " + dat + "," + yr;
    }
    else if (n == 2){
    document.getElementById("cel3").innerHTML="your date is: " + mn + "-" + dat + "-"  + yr + "," + dy;
}
else if (n == 3) {
    document.getElementById("cel3").innerHTML="your date is: " + dy+"," + yr + "-" + mn + "-"  + dat;
}
 else{
    document.getElementById("cel3").innerHTML="your date is : " + dt.toDateString();
 }

}
