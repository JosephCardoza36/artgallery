document.getElementById('img1').addEventListener('click', one, false);
document.getElementById('img2').addEventListener('click', two, false);
document.getElementById('img3').addEventListener('click', three, false);
document.getElementById('img4').addEventListener('click', four, false);

function one()  {
    "use strict";
    document.cookie = "name=sailboat";
    document.cookie = "price=1,950.00";
    document.cookie = "title=Sailing the Aegean Sea";
    document.cookie = "text=A calming scene with a sailboat and sunset.";
	window.open("buy.html");
}

function two()  {
    "use strict";
    document.cookie = "name=tropical";
    document.cookie = "price=1,599.00";
    document.cookie = "title=Bodrum Dreaming";
    document.cookie = "text=The warm tropical breezes beckon to you in this still with palm trees in the foreground and a boat sailing off to the sunset in the background.";
	window.open("buy.html");
}

function three()  {
    "use strict";
    document.cookie = "name=chinese";
    document.cookie = "price=2,100.00";
    document.cookie = "title=Chinese River Scene";
    document.cookie = "text=A beautiful river scene painted in the Chinese landscape style popularized during the Five Dynasties period c900 AD.";
	window.open("buy.html");
}

function four()  {
    "use strict";
    document.cookie = "name=mountain";
    document.cookie = "price=1,799.00";
    document.cookie = "title=Sunset on Mount Ararat";
    document.cookie = "text=The majesty of a mountain in perfectly captured in this image of a rugged mountain in a setting sun.";
	window.open("buy.html");
}
