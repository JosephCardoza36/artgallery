var cookiearray = document.cookie.split("; ");
var size = cookiearray.length;
var begin, end;
for (var i=0; i<size; i++)  {
    begin = cookiearray[i].indexOf("=")+1;
    end = cookiearray[i].length;
    cookiearray[i] = cookiearray[i].substring(begin, end); 
}
var namepix  = cookiearray[0];
var price = cookiearray[1]; 
var title = cookiearray[2]; 
var text  = cookiearray[3]; 
document.getElementById("addtitle").innerHTML = title;
document.getElementById("addtext").innerHTML = text;
document.getElementById("addimage").innerHTML = "<img src='images/" +namepix+ ".png' width='100%' height='auto'>"; 
document.getElementById("addprice").innerHTML = "Today's Price: $" +price;  