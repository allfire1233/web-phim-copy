document.querySelector('.search-box').addEventListener("click", function(event){
    event.preventDefault()
  });
  //
  $('.popular-content').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:false,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// show video
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myVideo = document.querySelector('#my-video');
let closeBtn = document.querySelector('.close-video');



// video.classList.add('show-video');
//  // autoplay when click button
// myVideo.play();
//  playButton.onclick = function() {
//     video.classList.add('show-video')
//     myVideo.play();
// }

// closeBtn.onclik = function() {
//     video.classList.remove('show-video')
//     myVideo.pause()
// }

playButton.onclick = () => {
    video.classList.add("show-video")
    myVideo.play()
};
closeBtn.onclick = () => {
    video.classList.remove("show-video")
    myVideo.pause()
};