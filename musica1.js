// Configuração do slider
$('.slider').slick({
    draggable: true,
    arrows: false,
    dots: false,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay:true
});

// Definindo as fontes das músicas
var sources = [
    'audio1.mp3',
    'audio2.mp3',
    'audio3.mp3'
];

// Configurando o objeto Audio
var audio = new Audio();
var currentTrack = 0;
var source = sources[currentTrack];

audio.volume = 0.5;
audio.autoplay = true;
audio.src = source;

// Controles de reprodução
$(".toggle-play").on('click', function(){

    if(audio.paused){
        audio.src = source;
        audio.play();
    }
    else{
        audio.pause();
        audio.src = '';
        $("#sound").text("play_arrow");
    }
})

// Mudança de música quando uma termina
$(audio).on('ended', function(){
    currentTrack++;
    if(currentTrack == sources.length){
        currentTrack = 0;
    }
    source = sources[currentTrack];
    audio.src = source;
    audio.play();
})

// Atualizando o ícone do botão de reprodução
$(audio).on('playing', function(){
    $("#sound").text("pause");
})

$(audio).on('pause', function(){
    $("#sound").text("play_arrow");
})
