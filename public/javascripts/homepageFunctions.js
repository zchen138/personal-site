var isNavOpen = false;

function openNav() {
    if (isNavOpen){
        closeNav();
        isNavOpen = false;
        return;
    }
    else {
        document.getElementById("mySidenav").style.width = "150px";
        isNavOpen = true;
    }

}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function getNewBackground(elem, backgrounds){
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    var newSrc = backgrounds[randomIndex];
    if (elem.src.toString().includes(newSrc)){
        randomIndex = randomIndex+1;
        if (randomIndex==backgrounds.length){
            randomIndex = 0;
        }
        newSrc = backgrounds[randomIndex]
    }
    return newSrc;
}

function setNewSrc(elem, newSrc){
    elem.src = newSrc;
}

function fadeOut(){
    $("#background").fadeOut(2000);
}

function fadeIn(){
    $("#background").fadeIn(2000);
}

function slideBackground(){
    var elem = document.getElementById("background");
    var backgrounds = ["/images/bg.jpg","/images/bg2.jpg", "/images/bg3.jpg"];
    setInterval(function(){
        $("#background").fadeOut(2000, function(){
            setNewSrc(elem, getNewBackground(elem, backgrounds));
        }).then(fadeIn());
    }, 10000)
}