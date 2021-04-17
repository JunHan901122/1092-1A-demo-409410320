function changeVideo(index){
    var player = document.querySelector('#player');
    console.log('player', player);
    switch(index) {
        case 1:
            player.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 2:
            player.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 3:
            player.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 4:
            player.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 5:
            player.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
    }
}

function changeColor(index) {
    var p  = document.querySelector('#section');
    switch (index) {
        case 1:
            p.style.backgroundColor = 'yellow';
        break;
        case 2:
            p.style.backgroundColor = 'green';
        break;
        case 3:
            p.style.backgroundColor = 'red';
        break;
    }
}

function changeImage(index) {
    var img = document.getElementById("player"); 
    switch (index) {
        case 1:
            img.innerHTML = '<img src="img1.png" style="width: 100%;height: auto" />';
            break;
        case 2:
            img.innerHTML = '<img src="img2.png" style="width: 100%;height: auto" />';
            break;
        case 3:
            img.innerHTML = '<img src="img3.png" style="width: 100%;height: auto" />';
            break;
        case 4:
            img.innerHTML = '<img src="img4.png" style="width: 100%;height: auto" />';
            break;
        case 5:
            img.innerHTML = '<img src="img5.png" style="width: 100%;height: auto" />';
            break;
    }
}
