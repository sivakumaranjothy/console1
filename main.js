var family=[
   "Saktthy Sivakumaran",
   "Mathu Sivakumaran",
   "Jothy Sivakumaran",
    "Siva Sanmmuga"
]
var images=[
    "https://www.netclipart.com/pp/m/25-257367_sister-clip-art-congratulations-my-dear-sister.png",
"https://www.pngitem.com/pimgs/m/284-2841358_mother-with-short-brown-hair-clip-art-at.png",
"https://www.seekpng.com/png/detail/57-575668_cute-brown-girl-standing-clipart-girl-clipart.png",
"https://www.nicepng.com/png/detail/215-2159743_dad-clipart-images-dad-clip-art-dad-clipart.png"
]
var i=0
function nextclick(){
    i++;
    var familymembers=3;
    if(i> familymembers){i=0;}

    document.getElementById("Familyname").innerHTML=family[i];
    document.getElementById("album").src=images[i];
   
}