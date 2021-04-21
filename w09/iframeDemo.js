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

function goToPage(index) {
    var p  = document.querySelector('#section');
    switch (index) {
        case 1:
            p.innerHTML = '<iframe width="100%" height="700px" src="./pokemon.html"></iframe>';
        break;
        case 2:
            p.innerHTML = '<iframe width="100%" height="700px" src="./w02-imgal/imageGallery.html"></iframe>';
        break;
        case 3:
            p.innerHTML = '<iframe width="100%" height="700px" src="./iframeDemo.html"></iframe>';
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

function changeColor(index) {
    var p = document.querySelector('#section');
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

function toggler() {
    var p = document.querySelector('#main');
    p.classList.toggle('invisible');
}

function colorMenu() {
    var p = document.querySelector('aside ul');
    p.innerHTML = `
        <li>
            <a href="#" onclick=changeColor(1)>Color 1</a>
        </li>
        <li>
            <a href="#" onclick=changeColor(2)>Color 2</a>
        </li>
        <li>
            <a href="#" onclick=changeColor(3)>Color 3</a>
        </li>
    `;
}

function tku60Menu() {
    var p = document.querySelector('aside ul');
    p.innerHTML = `
        <li onclick=changeVideo(1)>
            <a href="#">淡江大戲 1</a>
        </li>
        <li onclick=changeVideo(2)>
            <a href="#">淡江大戲 2</a>
        </li>
        <li onclick=changeVideo(3)>
            <a href="#">淡江大戲 3</a>
        </li>
        <li onclick=changeVideo(4)>
            <a href="#">淡江大戲 4</a>
        </li>
        <li onclick=changeVideo(5)>
            <a href="#">淡江大戲 5</a>
        </li>
    `;
}