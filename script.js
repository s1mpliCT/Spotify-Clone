console.log("Welcome to javascript");
let songIndex=0;
let audioElement= new Audio ('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let myProgressBar= document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Warriyo - Motals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EHIDE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji - Heroes Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tmhari kasam - Salam-e-ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na jaana - Salam-e-ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

//For pause play action
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// Progress bar
audioElement.addEventListener('timeupdate', ()=>{
    // seekbar update
    progress = parseInt((audioElement.currentTime)/(audioElement.duration)*100);
    myProgressBar.value=progress;
    
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    // if((audioElement.currentTime)==(audioElement.duration))
    // {
    //     if(songIndex>=9)
    //     {
    //         songIndex=0;
    //     }
    //     else songIndex+=1;
    //      masterSongName.innerText=songs[songIndex].songName;
    //      audioElement.src=`songs/${songIndex+1}.mp3`;
    //      audioElement.currentTime=0;
    //      audioElement.play();
    //      masterPlay.classList.remove('fa-play-circle');
    //     masterPlay.classList.add('fa-pause-circle'); 
    // }
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        masterSongName.innerText=songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else songIndex+=1;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=9;
    }
    else songIndex-=1;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})

if(audioElement.currentTime= audioElement.duration)
 {
     songIndex+=1;
     masterSongName.innerText=songs[songIndex].songName;
     audioElement.src=`songs/${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
}