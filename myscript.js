console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongInfo = document.getElementById('masterSongInfo');
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [

    { songName: 'Legion', filePath: 'songs/0.mp3', coverPath: '1.jpg' },
    { songName: 'Cielo', filePath: 'songs/1.mp3', coverPath: '2.jpg' },
    { songName: 'The Mad', filePath: 'songs/2.mp3', coverPath: '3.jpg' },
    { songName: 'Rich the Kid', filePath: 'songs/3.mp3', coverPath: '4.jpg' },
    { songName: 'Janji-Heroes', filePath: 'songs/4.mp3', coverPath: '5.jpg' },
    { songName: 'Safety Dance', filePath: 'songs/0.mp3', coverPath: '6.jpg' },
    { songName: 'Back it up', filePath: 'songs/1.mp3', coverPath: '7.jpg' },
    { songName: 'Girl with hat', filePath: 'songs/2.mp3', coverPath: '8.jpg' },
    { songName: 'Orange', filePath: 'songs/3.mp3', coverPath: '9.jpg' },
    { songName: 'True love', filePath: 'songs/4.mp3', coverPath: '10.jpg' }
]

songItem.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    //  element.getElementsByClassName
    console.log(element);
})

//  songs.forEach((element)



//event listeners

//handle play pause click

masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {

    // console.log('timeupdate');

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); //why parseInt why need in percentage
    console.log(progress);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {

    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
//  audioElement.play();

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((prem) => {

        prem.classList.remove('fa-circle-pause');
        prem.classList.add('fa-circle-play');


    })



}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0){

            makeAllPlay();
            songIndex = parseInt(e.target.id);
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongInfo.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
        
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
    
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
        
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
    
            gif.style.opacity = 0;
        }
    })


})



document.getElementById("next").addEventListener("click", () => {

    if (songIndex >= 9) {

        songIndex = 0;
    }
    else {

        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongInfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById("previous").addEventListener("click", () => {

    if (songIndex <= 0) {

        songIndex = 0;
    }
    else {

        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongInfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})



