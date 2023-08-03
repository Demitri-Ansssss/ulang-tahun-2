// var playPromise = document.querySelector('audio').play();
// // In browsers that don’t yet support this functionality,
// // playPromise won’t be defined.
// if (playPromise !== undefined) {
//   playPromise.then(function() {
//     // Automatic playback started!
//   }).catch(function(error) {
//     // Automatic playback failed.
//     // Show a UI element to let the user manually start playback.
//   });
// }
function openLetter(){
    document.querySelector('.massage-box').style.webkitAnimationPlayState = 'running';
    document.querySelector('.massage').style.visibility= 'hidden';
    document.querySelector('.media-btn').style.visibility = 'visible';
    // document.getElementById('audio').play();
    document.querySelector('.audio').play();
}
// function Swap(){
    //     document.querySelector('.icon').style.visibility= 'visible';
    //     // document.querySelector('.massage-box').style.visibility= 'hidden';
    //     document.querySelector('.massage-box').style.display='none';
    // }
var number=0;
function mediaBtn() {

    number++;

    if (number % 2 == 0) {
        icon = '<i class="fas fa-pause"></i>';
        document.getElementById('audio').play();
    } else {
        icon = '<i class="fas fa-play"></i>';
        document.getElementById('audio').pause();
    }

    document.getElementById('media-button').innerHTML = icon;
}