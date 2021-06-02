var music = document.getElementById('audio_player');
window.onload = function() {
    document.getElementsByClassName("albumTitle")[0].style.opacity = 1;
    document.getElementById("loading").style.display = "none"
}

function playtrack(elem) {
    var trackclass = elem.className;
    var checkloading = "false";
    if (trackclass == "inactive") {
        checkloading = "true";
        var trackid = elem.id;
        var allplaypausebuttons = document.getElementsByClassName("playpausebutton");
        for (var i = 0; i < allplaypausebuttons.length; i++) {
            allplaypausebuttons[i].src = "images/Play_button.png"
        }
        var playingtrack = document.getElementsByClassName("active");
        for (var i = 0; i < playingtrack.length; i++) {
            playingtrack[i].className = "inactive"
        }
        elem.className = "active";
        var source = document.getElementById('audio_player_src');
        source.src = "files/" + trackid + ".mp3";
        music.load();
        document.getElementsByClassName("playingtracktitle")[0].innerHTML = elem.getElementsByClassName("tracktitle")[0].innerHTML;
        document.getElementById("loading").style.display = "block"
    }
    if (music.paused) {
        elem.getElementsByClassName("playpausebutton")[0].src = "images/Pause_button.png";
        if (checkloading == "true") {
            music.oncanplay = function() {
                document.getElementById("loading").style.display = "none";
                music.play();
                startstopanimation("start")
            }
        } else {
            music.play();
            startstopanimation("start")
        }
    } else {
        elem.getElementsByClassName("playpausebutton")[0].src = "images/Play_button.png";
        music.pause();
        startstopanimation("stop")
    }
}
music.onended = function() {
    var allplaypausebuttons = document.getElementsByClassName("playpausebutton");
    for (var i = 0; i < allplaypausebuttons.length; i++) {
        allplaypausebuttons[i].src = "images/Play_button.png"
    }
    var playingtrack = document.getElementsByClassName("active");
    for (var i = 0; i < playingtrack.length; i++) {
        playingtrack[i].className = "inactive"
    }
    startstopanimation("stop");
    document.getElementsByClassName("playingtracktitle")[0].innerHTML = "<div class\=\"playtracktext\">Play Track<\/div>"
};

function startstopanimation(command) {
    if (command == "start") {
        document.getElementsByClassName("eq1")[0].className = "eq1";
        document.getElementsByClassName("eq2")[0].className = "eq2";
        document.getElementsByClassName("eq3")[0].className = "eq3";
        document.getElementsByClassName("eq4")[0].className = "eq4"
    } else if (command == "stop") {
        document.getElementsByClassName("eq1")[0].className = "eq1 off";
        document.getElementsByClassName("eq2")[0].className = "eq2 off";
        document.getElementsByClassName("eq3")[0].className = "eq3 off";
        document.getElementsByClassName("eq4")[0].className = "eq4 off"
    }
}

function showmodal(elem, hiddendiv, buttonclass, buttonclassactive) {
    elem.className = buttonclass + " " + buttonclassactive;
    document.getElementsByClassName('modal-content')[0].innerHTML = "<span class=\"close\">\&times\;<\/span>" + document.getElementById(hiddendiv).innerHTML;
    document.getElementById('myModal').style.display = "block";
    document.getElementsByClassName("close")[0].onclick = function() {
        document.getElementById('myModal').style.display = "none";
        elem.className = buttonclass
    }
    window.onclick = function(event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = "none";
            elem.className = buttonclass
        }
    }
}