<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>VTO  </title>

<!-- Editado por BruoT / Bender  -->    

<!-- Creditos LaFleur (517650537)  -->


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Josefin+Slab:100'>
    <style>* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background-color: #021027;
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.background {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
  -webkit-mask-image: radial-gradient(white 0%, white 30%, transparent 80%, transparent);
          mask-image: radial-gradient(white 0%, white 30%, transparent 80%, transparent);
}

.circle-container {
  position: absolute;
  transform: translateY(-10vh);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
}
.circle-container .circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  mix-blend-mode: screen;
  background-image: radial-gradient(#99ffff, #99ffff 10%, rgba(153, 255, 255, 0) 56%);
  -webkit-animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
          animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
}
@-webkit-keyframes fade-frames {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-frames {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes scale-frames {
  0% {
    transform: scale3d(0.4, 0.4, 1);
  }
  50% {
    transform: scale3d(2.2, 2.2, 1);
  }
  100% {
    transform: scale3d(0.4, 0.4, 1);
  }
}
@keyframes scale-frames {
  0% {
    transform: scale3d(0.4, 0.4, 1);
  }
  50% {
    transform: scale3d(2.2, 2.2, 1);
  }
  100% {
    transform: scale3d(0.4, 0.4, 1);
  }
}
.circle-container:nth-child(1) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-1;
          animation-name: move-frames-1;
  -webkit-animation-duration: 29766ms;
          animation-duration: 29766ms;
  -webkit-animation-delay: 9660ms;
          animation-delay: 9660ms;
}
@-webkit-keyframes move-frames-1 {
  from {
    transform: translate3d(1vw, 110vh, 0);
  }
  to {
    transform: translate3d(18vw, -111vh, 0);
  }
}
@keyframes move-frames-1 {
  from {
    transform: translate3d(1vw, 110vh, 0);
  }
  to {
    transform: translate3d(18vw, -111vh, 0);
  }
}
.circle-container:nth-child(1) .circle {
  -webkit-animation-delay: 3611ms;
          animation-delay: 3611ms;
}
.circle-container:nth-child(2) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-2;
          animation-name: move-frames-2;
  -webkit-animation-duration: 31258ms;
          animation-duration: 31258ms;
  -webkit-animation-delay: 331ms;
          animation-delay: 331ms;
}
@-webkit-keyframes move-frames-2 {
  from {
    transform: translate3d(23vw, 102vh, 0);
  }
  to {
    transform: translate3d(43vw, -104vh, 0);
  }
}
@keyframes move-frames-2 {
  from {
    transform: translate3d(23vw, 102vh, 0);
  }
  to {
    transform: translate3d(43vw, -104vh, 0);
  }
}
.circle-container:nth-child(2) .circle {
  -webkit-animation-delay: 624ms;
          animation-delay: 624ms;
}
.circle-container:nth-child(3) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-3;
          animation-name: move-frames-3;
  -webkit-animation-duration: 29199ms;
          animation-duration: 29199ms;
  -webkit-animation-delay: 13352ms;
          animation-delay: 13352ms;
}
@-webkit-keyframes move-frames-3 {
  from {
    transform: translate3d(66vw, 107vh, 0);
  }
  to {
    transform: translate3d(20vw, -112vh, 0);
  }
}
@keyframes move-frames-3 {
  from {
    transform: translate3d(66vw, 107vh, 0);
  }
  to {
    transform: translate3d(20vw, -112vh, 0);
  }
}
.circle-container:nth-child(3) .circle {
  -webkit-animation-delay: 3769ms;
          animation-delay: 3769ms;
}
.circle-container:nth-child(4) {
  width: 6px;

  height: 6px;
  -webkit-animation-name: move-frames-4;
          animation-name: move-frames-4;
  -webkit-animation-duration: 29522ms;
          animation-duration: 29522ms;
  -webkit-animation-delay: 23268ms;
          animation-delay: 23268ms;
}
@-webkit-keyframes move-frames-4 {
  from {
    transform: translate3d(63vw, 103vh, 0);
  }
  to {
    transform: translate3d(55vw, -121vh, 0);
  }
}
@keyframes move-frames-4 {
  from {
    transform: translate3d(63vw, 103vh, 0);
  }
  to {
    transform: translate3d(55vw, -121vh, 0);
  }
}
.circle-container:nth-child(4) .circle {
  -webkit-animation-delay: 3566ms;
          animation-delay: 3566ms;
}
.circle-container:nth-child(5) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-5;
          animation-name: move-frames-5;
  -webkit-animation-duration: 31453ms;
          animation-duration: 31453ms;
  -webkit-animation-delay: 15940ms;
          animation-delay: 15940ms;
}
@-webkit-keyframes move-frames-5 {
  from {
    transform: translate3d(24vw, 108vh, 0);
  }
  to {
    transform: translate3d(9vw, -134vh, 0);
  }
}
@keyframes move-frames-5 {
  from {
    transform: translate3d(24vw, 108vh, 0);
  }
  to {
    transform: translate3d(9vw, -134vh, 0);
  }
}
.circle-container:nth-child(5) .circle {
  -webkit-animation-delay: 2300ms;
          animation-delay: 2300ms;
}
.circle-container:nth-child(6) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-6;
          animation-name: move-frames-6;
  -webkit-animation-duration: 30411ms;
          animation-duration: 30411ms;
  -webkit-animation-delay: 13300ms;
          animation-delay: 13300ms;
}
@-webkit-keyframes move-frames-6 {
  from {
    transform: translate3d(65vw, 101vh, 0);
  }
  to {
    transform: translate3d(48vw, -103vh, 0);
  }
}
@keyframes move-frames-6 {
  from {
    transform: translate3d(65vw, 101vh, 0);
  }
  to {
    transform: translate3d(48vw, -103vh, 0);
  }
}
.circle-container:nth-child(6) .circle {
  -webkit-animation-delay: 3790ms;
          animation-delay: 3790ms;
}
.circle-container:nth-child(7) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-7;
          animation-name: move-frames-7;
  -webkit-animation-duration: 33293ms;
          animation-duration: 33293ms;
  -webkit-animation-delay: 6614ms;
          animation-delay: 6614ms;
}
@-webkit-keyframes move-frames-7 {
  from {
    transform: translate3d(41vw, 101vh, 0);
  }
  to {
    transform: translate3d(68vw, -122vh, 0);
  }
}
@keyframes move-frames-7 {
  from {
    transform: translate3d(41vw, 101vh, 0);
  }
  to {
    transform: translate3d(68vw, -122vh, 0);
  }
}
.circle-container:nth-child(7) .circle {
  -webkit-animation-delay: 3309ms;
          animation-delay: 3309ms;
}
.circle-container:nth-child(8) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-8;
          animation-name: move-frames-8;
  -webkit-animation-duration: 36670ms;
          animation-duration: 36670ms;
  -webkit-animation-delay: 25665ms;
          animation-delay: 25665ms;
}
@-webkit-keyframes move-frames-8 {
  from {
    transform: translate3d(49vw, 101vh, 0);
  }
  to {
    transform: translate3d(79vw, -127vh, 0);
  }
}
@keyframes move-frames-8 {
  from {
    transform: translate3d(49vw, 101vh, 0);
  }
  to {
    transform: translate3d(79vw, -127vh, 0);
  }
}
.circle-container:nth-child(8) .circle {
  -webkit-animation-delay: 1403ms;
          animation-delay: 1403ms;
}
.circle-container:nth-child(9) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-9;
          animation-name: move-frames-9;
  -webkit-animation-duration: 34950ms;
          animation-duration: 34950ms;
  -webkit-animation-delay: 7120ms;
          animation-delay: 7120ms;
}
@-webkit-keyframes move-frames-9 {
  from {
    transform: translate3d(44vw, 109vh, 0);
  }
  to {
    transform: translate3d(34vw, -128vh, 0);
  }
}
@keyframes move-frames-9 {
  from {
    transform: translate3d(44vw, 109vh, 0);
  }
  to {
    transform: translate3d(34vw, -128vh, 0);
  }
}
.circle-container:nth-child(9) .circle {
  -webkit-animation-delay: 2509ms;
          animation-delay: 2509ms;
}
.circle-container:nth-child(10) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-10;
          animation-name: move-frames-10;
  -webkit-animation-duration: 36566ms;
          animation-duration: 36566ms;
  -webkit-animation-delay: 4175ms;
          animation-delay: 4175ms;
}
@-webkit-keyframes move-frames-10 {
  from {
    transform: translate3d(3vw, 103vh, 0);
  }
  to {
    transform: translate3d(75vw, -124vh, 0);
  }
}
@keyframes move-frames-10 {
  from {
    transform: translate3d(3vw, 103vh, 0);
  }
  to {
    transform: translate3d(75vw, -124vh, 0);
  }
}
.circle-container:nth-child(10) .circle {
  -webkit-animation-delay: 681ms;
          animation-delay: 681ms;
}
.circle-container:nth-child(11) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-11;
          animation-name: move-frames-11;
  -webkit-animation-duration: 31155ms;
          animation-duration: 31155ms;
  -webkit-animation-delay: 2411ms;
          animation-delay: 2411ms;
}
@-webkit-keyframes move-frames-11 {
  from {
    transform: translate3d(92vw, 104vh, 0);
  }
  to {
    transform: translate3d(2vw, -108vh, 0);
  }
}
@keyframes move-frames-11 {
  from {
    transform: translate3d(92vw, 104vh, 0);
  }
  to {
    transform: translate3d(2vw, -108vh, 0);
  }
}
.circle-container:nth-child(11) .circle {
  -webkit-animation-delay: 2032ms;
          animation-delay: 2032ms;
}
.circle-container:nth-child(12) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-12;
          animation-name: move-frames-12;
  -webkit-animation-duration: 32372ms;
          animation-duration: 32372ms;
  -webkit-animation-delay: 8308ms;
          animation-delay: 8308ms;
}
@-webkit-keyframes move-frames-12 {
  from {
    transform: translate3d(47vw, 109vh, 0);
  }
  to {
    transform: translate3d(68vw, -115vh, 0);
  }
}
@keyframes move-frames-12 {
  from {
    transform: translate3d(47vw, 109vh, 0);
  }
  to {
    transform: translate3d(68vw, -115vh, 0);
  }
}
.circle-container:nth-child(12) .circle {
  -webkit-animation-delay: 3322ms;
          animation-delay: 3322ms;
}
.circle-container:nth-child(13) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-13;
          animation-name: move-frames-13;
  -webkit-animation-duration: 30752ms;
          animation-duration: 30752ms;
  -webkit-animation-delay: 27585ms;
          animation-delay: 27585ms;
}
@-webkit-keyframes move-frames-13 {
  from {
    transform: translate3d(89vw, 104vh, 0);
  }
  to {
    transform: translate3d(93vw, -110vh, 0);
  }
}
@keyframes move-frames-13 {
  from {
    transform: translate3d(89vw, 104vh, 0);
  }
  to {
    transform: translate3d(93vw, -110vh, 0);
  }
}
.circle-container:nth-child(13) .circle {
  -webkit-animation-delay: 1318ms;
          animation-delay: 1318ms;
}
.circle-container:nth-child(14) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-14;
          animation-name: move-frames-14;
  -webkit-animation-duration: 31654ms;
          animation-duration: 31654ms;
  -webkit-animation-delay: 3348ms;
          animation-delay: 3348ms;
}
@-webkit-keyframes move-frames-14 {
  from {
    transform: translate3d(39vw, 104vh, 0);
  }
  to {
    transform: translate3d(78vw, -116vh, 0);
  }
}
@keyframes move-frames-14 {
  from {
    transform: translate3d(39vw, 104vh, 0);
  }
  to {
    transform: translate3d(78vw, -116vh, 0);
  }
}
.circle-container:nth-child(14) .circle {
  -webkit-animation-delay: 436ms;
          animation-delay: 436ms;
}
.circle-container:nth-child(15) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-15;
          animation-name: move-frames-15;
  -webkit-animation-duration: 30005ms;

          animation-duration: 30005ms;
  -webkit-animation-delay: 6415ms;
          animation-delay: 6415ms;
}
@-webkit-keyframes move-frames-15 {
  from {
    transform: translate3d(79vw, 106vh, 0);
  }
  to {
    transform: translate3d(20vw, -129vh, 0);
  }
}
@keyframes move-frames-15 {
  from {
    transform: translate3d(79vw, 106vh, 0);
  }
  to {
    transform: translate3d(20vw, -129vh, 0);
  }
}
.circle-container:nth-child(15) .circle {
  -webkit-animation-delay: 3955ms;
          animation-delay: 3955ms;
}
.circle-container:nth-child(16) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-16;
          animation-name: move-frames-16;
  -webkit-animation-duration: 30964ms;
          animation-duration: 30964ms;
  -webkit-animation-delay: 10048ms;
          animation-delay: 10048ms;
}
@-webkit-keyframes move-frames-16 {
  from {
    transform: translate3d(61vw, 106vh, 0);
  }
  to {
    transform: translate3d(25vw, -128vh, 0);
  }
}
@keyframes move-frames-16 {
  from {
    transform: translate3d(61vw, 106vh, 0);
  }
  to {
    transform: translate3d(25vw, -128vh, 0);
  }
}
.circle-container:nth-child(16) .circle {
  -webkit-animation-delay: 3643ms;
          animation-delay: 3643ms;
}
.circle-container:nth-child(17) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-17;
          animation-name: move-frames-17;
  -webkit-animation-duration: 31025ms;
          animation-duration: 31025ms;
  -webkit-animation-delay: 27405ms;
          animation-delay: 27405ms;
}
@-webkit-keyframes move-frames-17 {
  from {
    transform: translate3d(90vw, 110vh, 0);
  }
  to {
    transform: translate3d(96vw, -134vh, 0);
  }
}
@keyframes move-frames-17 {
  from {
    transform: translate3d(90vw, 110vh, 0);
  }
  to {
    transform: translate3d(96vw, -134vh, 0);
  }
}
.circle-container:nth-child(17) .circle {
  -webkit-animation-delay: 2811ms;
          animation-delay: 2811ms;
}
.circle-container:nth-child(18) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-18;
          animation-name: move-frames-18;
  -webkit-animation-duration: 32291ms;
          animation-duration: 32291ms;
  -webkit-animation-delay: 19189ms;
          animation-delay: 19189ms;
}
@-webkit-keyframes move-frames-18 {
  from {
    transform: translate3d(23vw, 106vh, 0);
  }
  to {
    transform: translate3d(97vw, -119vh, 0);
  }
}
@keyframes move-frames-18 {
  from {
    transform: translate3d(23vw, 106vh, 0);
  }
  to {
    transform: translate3d(97vw, -119vh, 0);
  }
}
.circle-container:nth-child(18) .circle {
  -webkit-animation-delay: 1881ms;
          animation-delay: 1881ms;
}
.circle-container:nth-child(19) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-19;
          animation-name: move-frames-19;
  -webkit-animation-duration: 30493ms;
          animation-duration: 30493ms;
  -webkit-animation-delay: 14542ms;
          animation-delay: 14542ms;
}
@-webkit-keyframes move-frames-19 {
  from {
    transform: translate3d(78vw, 107vh, 0);
  }
  to {
    transform: translate3d(1vw, -116vh, 0);
  }
}
@keyframes move-frames-19 {
  from {
    transform: translate3d(78vw, 107vh, 0);
  }
  to {
    transform: translate3d(1vw, -116vh, 0);
  }
}
.circle-container:nth-child(19) .circle {
  -webkit-animation-delay: 384ms;
          animation-delay: 384ms;
}
.circle-container:nth-child(20) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-20;
          animation-name: move-frames-20;
  -webkit-animation-duration: 35294ms;
          animation-duration: 35294ms;
  -webkit-animation-delay: 9881ms;
          animation-delay: 9881ms;
}
@-webkit-keyframes move-frames-20 {
  from {
    transform: translate3d(42vw, 101vh, 0);
  }
  to {
    transform: translate3d(14vw, -109vh, 0);
  }
}
@keyframes move-frames-20 {
  from {
    transform: translate3d(42vw, 101vh, 0);
  }
  to {
    transform: translate3d(14vw, -109vh, 0);

  }
}
.circle-container:nth-child(20) .circle {
  -webkit-animation-delay: 1738ms;
          animation-delay: 1738ms;
}
.circle-container:nth-child(21) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-21;
          animation-name: move-frames-21;
  -webkit-animation-duration: 30717ms;
          animation-duration: 30717ms;
  -webkit-animation-delay: 1577ms;
          animation-delay: 1577ms;
}
@-webkit-keyframes move-frames-21 {
  from {
    transform: translate3d(69vw, 103vh, 0);
  }
  to {
    transform: translate3d(61vw, -116vh, 0);
  }
}
@keyframes move-frames-21 {
  from {
    transform: translate3d(69vw, 103vh, 0);
  }
  to {
    transform: translate3d(61vw, -116vh, 0);
  }
}
.circle-container:nth-child(21) .circle {
  -webkit-animation-delay: 3177ms;
          animation-delay: 3177ms;
}
.circle-container:nth-child(22) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-22;
          animation-name: move-frames-22;
  -webkit-animation-duration: 29400ms;
          animation-duration: 29400ms;
  -webkit-animation-delay: 8484ms;
          animation-delay: 8484ms;
}
@-webkit-keyframes move-frames-22 {
  from {
    transform: translate3d(45vw, 109vh, 0);
  }
  to {
    transform: translate3d(66vw, -118vh, 0);
  }
}
@keyframes move-frames-22 {
  from {
    transform: translate3d(45vw, 109vh, 0);
  }
  to {
    transform: translate3d(66vw, -118vh, 0);
  }
}
.circle-container:nth-child(22) .circle {
  -webkit-animation-delay: 3673ms;
          animation-delay: 3673ms;
}
.circle-container:nth-child(23) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-23;
          animation-name: move-frames-23;
  -webkit-animation-duration: 30171ms;
          animation-duration: 30171ms;
  -webkit-animation-delay: 26093ms;
          animation-delay: 26093ms;
}
@-webkit-keyframes move-frames-23 {
  from {
    transform: translate3d(50vw, 103vh, 0);
  }
  to {
    transform: translate3d(44vw, -105vh, 0);
  }
}
@keyframes move-frames-23 {
  from {
    transform: translate3d(50vw, 103vh, 0);
  }
  to {
    transform: translate3d(44vw, -105vh, 0);
  }
}
.circle-container:nth-child(23) .circle {
  -webkit-animation-delay: 2790ms;
          animation-delay: 2790ms;
}
.circle-container:nth-child(24) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-24;
          animation-name: move-frames-24;
  -webkit-animation-duration: 29586ms;
          animation-duration: 29586ms;
  -webkit-animation-delay: 35948ms;
          animation-delay: 35948ms;
}
@-webkit-keyframes move-frames-24 {
  from {
    transform: translate3d(7vw, 110vh, 0);
  }
  to {
    transform: translate3d(33vw, -121vh, 0);
  }
}
@keyframes move-frames-24 {
  from {
    transform: translate3d(7vw, 110vh, 0);
  }
  to {
    transform: translate3d(33vw, -121vh, 0);
  }
}
.circle-container:nth-child(24) .circle {
  -webkit-animation-delay: 739ms;
          animation-delay: 739ms;
}
.circle-container:nth-child(25) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-25;
          animation-name: move-frames-25;
  -webkit-animation-duration: 31921ms;
          animation-duration: 31921ms;
  -webkit-animation-delay: 906ms;
          animation-delay: 906ms;
}
@-webkit-keyframes move-frames-25 {
  from {
    transform: translate3d(42vw, 103vh, 0);
  }
  to {
    transform: translate3d(20vw, -129vh, 0);
  }
}
@keyframes move-frames-25 {
  from {
    transform: translate3d(42vw, 103vh, 0);
  }
  to {
    transform: translate3d(20vw, -129vh, 0);
  }
}
.circle-container:nth-child(25) .circle {
  -webkit-animation-delay: 3045ms;
          animation-delay: 3045ms;
}
.circle-container:nth-child(26) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-26;
          animation-name: move-frames-26;
  -webkit-animation-duration: 30748ms;
          animation-duration: 30748ms;
  -webkit-animation-delay: 14420ms;
          animation-delay: 14420ms;
}
@-webkit-keyframes move-frames-26 {
  from {
    transform: translate3d(98vw, 103vh, 0);
  }
  to {
    transform: translate3d(91vw, -116vh, 0);
  }
}
@keyframes move-frames-26 {
  from {
    transform: translate3d(98vw, 103vh, 0);
  }
  to {
    transform: translate3d(91vw, -116vh, 0);
  }
}
.circle-container:nth-child(26) .circle {
  -webkit-animation-delay: 3544ms;
          animation-delay: 3544ms;
}
.circle-container:nth-child(27) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-27;
          animation-name: move-frames-27;
  -webkit-animation-duration: 29969ms;
          animation-duration: 29969ms;
  -webkit-animation-delay: 17020ms;
          animation-delay: 17020ms;
}
@-webkit-keyframes move-frames-27 {
  from {
    transform: translate3d(8vw, 105vh, 0);
  }
  to {
    transform: translate3d(11vw, -113vh, 0);
  }
}
@keyframes move-frames-27 {
  from {
    transform: translate3d(8vw, 105vh, 0);
  }
  to {
    transform: translate3d(11vw, -113vh, 0);
  }
}
.circle-container:nth-child(27) .circle {
  -webkit-animation-delay: 2226ms;
          animation-delay: 2226ms;
}
.circle-container:nth-child(28) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-28;
          animation-name: move-frames-28;
  -webkit-animation-duration: 36820ms;
          animation-duration: 36820ms;
  -webkit-animation-delay: 11997ms;
          animation-delay: 11997ms;
}
@-webkit-keyframes move-frames-28 {
  from {
    transform: translate3d(83vw, 108vh, 0);
  }
  to {
    transform: translate3d(4vw, -119vh, 0);
  }
}
@keyframes move-frames-28 {
  from {
    transform: translate3d(83vw, 108vh, 0);
  }
  to {
    transform: translate3d(4vw, -119vh, 0);
  }
}
.circle-container:nth-child(28) .circle {
  -webkit-animation-delay: 797ms;
          animation-delay: 797ms;
}
.circle-container:nth-child(29) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-29;
          animation-name: move-frames-29;
  -webkit-animation-duration: 36389ms;
          animation-duration: 36389ms;
  -webkit-animation-delay: 33182ms;
          animation-delay: 33182ms;
}
@-webkit-keyframes move-frames-29 {
  from {
    transform: translate3d(90vw, 108vh, 0);
  }
  to {
    transform: translate3d(22vw, -119vh, 0);
  }
}
@keyframes move-frames-29 {
  from {
    transform: translate3d(90vw, 108vh, 0);
  }
  to {
    transform: translate3d(22vw, -119vh, 0);
  }
}
.circle-container:nth-child(29) .circle {
  -webkit-animation-delay: 965ms;
          animation-delay: 965ms;
}
.circle-container:nth-child(30) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-30;
          animation-name: move-frames-30;
  -webkit-animation-duration: 36941ms;
          animation-duration: 36941ms;
  -webkit-animation-delay: 776ms;
          animation-delay: 776ms;
}
@-webkit-keyframes move-frames-30 {
  from {
    transform: translate3d(93vw, 110vh, 0);
  }
  to {
    transform: translate3d(78vw, -127vh, 0);
  }
}
@keyframes move-frames-30 {
  from {
    transform: translate3d(93vw, 110vh, 0);
  }
  to {
    transform: translate3d(78vw, -127vh, 0);
  }
}
.circle-container:nth-child(30) .circle {
  -webkit-animation-delay: 3713ms;
          animation-delay: 3713ms;
}
.circle-container:nth-child(31) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-31;
          animation-name: move-frames-31;
  -webkit-animation-duration: 33347ms;
          animation-duration: 33347ms;
  -webkit-animation-delay: 19834ms;
          animation-delay: 19834ms;
}
@-webkit-keyframes move-frames-31 {
  from {
    transform: translate3d(36vw, 102vh, 0);
  }
  to {
    transform: translate3d(71vw, -132vh, 0);
  }
}
@keyframes move-frames-31 {
  from {
    transform: translate3d(36vw, 102vh, 0);
  }
  to {
    transform: translate3d(71vw, -132vh, 0);
  }
}
.circle-container:nth-child(31) .circle {
  -webkit-animation-delay: 1826ms;
          animation-delay: 1826ms;
}
.circle-container:nth-child(32) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-32;
          animation-name: move-frames-32;
  -webkit-animation-duration: 35095ms;
          animation-duration: 35095ms;
  -webkit-animation-delay: 15543ms;
          animation-delay: 15543ms;
}
@-webkit-keyframes move-frames-32 {
  from {
    transform: translate3d(79vw, 102vh, 0);
  }
  to {
    transform: translate3d(98vw, -125vh, 0);
  }
}
@keyframes move-frames-32 {
  from {
    transform: translate3d(79vw, 102vh, 0);
  }
  to {
    transform: translate3d(98vw, -125vh, 0);
  }
}
.circle-container:nth-child(32) .circle {
  -webkit-animation-delay: 1236ms;
          animation-delay: 1236ms;
}
.circle-container:nth-child(33) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-33;
          animation-name: move-frames-33;
  -webkit-animation-duration: 32783ms;
          animation-duration: 32783ms;
  -webkit-animation-delay: 35228ms;
          animation-delay: 35228ms;
}
@-webkit-keyframes move-frames-33 {
  from {
    transform: translate3d(71vw, 104vh, 0);
  }
  to {
    transform: translate3d(78vw, -108vh, 0);
  }
}
@keyframes move-frames-33 {
  from {
    transform: translate3d(71vw, 104vh, 0);
  }
  to {
    transform: translate3d(78vw, -108vh, 0);
  }
}
.circle-container:nth-child(33) .circle {
  -webkit-animation-delay: 357ms;
          animation-delay: 357ms;
}
.circle-container:nth-child(34) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-34;
          animation-name: move-frames-34;
  -webkit-animation-duration: 34343ms;
          animation-duration: 34343ms;
  -webkit-animation-delay: 5882ms;
          animation-delay: 5882ms;
}
@-webkit-keyframes move-frames-34 {
  from {
    transform: translate3d(75vw, 105vh, 0);
  }
  to {
    transform: translate3d(94vw, -127vh, 0);
  }
}
@keyframes move-frames-34 {
  from {
    transform: translate3d(75vw, 105vh, 0);
  }
  to {
    transform: translate3d(94vw, -127vh, 0);
  }
}
.circle-container:nth-child(34) .circle {
  -webkit-animation-delay: 749ms;
          animation-delay: 749ms;
}
.circle-container:nth-child(35) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-35;
          animation-name: move-frames-35;
  -webkit-animation-duration: 35079ms;
          animation-duration: 35079ms;
  -webkit-animation-delay: 35943ms;
          animation-delay: 35943ms;
}
@-webkit-keyframes move-frames-35 {
  from {
    transform: translate3d(69vw, 108vh, 0);
  }
  to {
    transform: translate3d(81vw, -132vh, 0);
  }
}
@keyframes move-frames-35 {
  from {
    transform: translate3d(69vw, 108vh, 0);
  }
  to {
    transform: translate3d(81vw, -132vh, 0);
  }
}
.circle-container:nth-child(35) .circle {
  -webkit-animation-delay: 1222ms;
          animation-delay: 1222ms;
}
.circle-container:nth-child(36) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-36;
          animation-name: move-frames-36;
  -webkit-animation-duration: 36661ms;
          animation-duration: 36661ms;
  -webkit-animation-delay: 13021ms;
          animation-delay: 13021ms;
}
@-webkit-keyframes move-frames-36 {
  from {
    transform: translate3d(72vw, 110vh, 0);
  }
  to {
    transform: translate3d(25vw, -127vh, 0);
  }
}
@keyframes move-frames-36 {
  from {
    transform: translate3d(72vw, 110vh, 0);
  }
  to {
    transform: translate3d(25vw, -127vh, 0);
  }
}
.circle-container:nth-child(36) .circle {
  -webkit-animation-delay: 3027ms;
          animation-delay: 3027ms;
}
.circle-container:nth-child(37) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-37;
          animation-name: move-frames-37;
  -webkit-animation-duration: 32693ms;
          animation-duration: 32693ms;
  -webkit-animation-delay: 28202ms;
          animation-delay: 28202ms;
}
@-webkit-keyframes move-frames-37 {
  from {
    transform: translate3d(3vw, 106vh, 0);

  }
  to {
    transform: translate3d(17vw, -136vh, 0);
  }
}
@keyframes move-frames-37 {
  from {
    transform: translate3d(3vw, 106vh, 0);
  }
  to {
    transform: translate3d(17vw, -136vh, 0);
  }
}
.circle-container:nth-child(37) .circle {
  -webkit-animation-delay: 674ms;
          animation-delay: 674ms;
}
.circle-container:nth-child(38) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-38;
          animation-name: move-frames-38;
  -webkit-animation-duration: 32113ms;
          animation-duration: 32113ms;
  -webkit-animation-delay: 5239ms;
          animation-delay: 5239ms;
}
@-webkit-keyframes move-frames-38 {
  from {
    transform: translate3d(15vw, 106vh, 0);
  }
  to {
    transform: translate3d(31vw, -131vh, 0);
  }
}
@keyframes move-frames-38 {
  from {
    transform: translate3d(15vw, 106vh, 0);
  }
  to {
    transform: translate3d(31vw, -131vh, 0);
  }
}
.circle-container:nth-child(38) .circle {
  -webkit-animation-delay: 1176ms;
          animation-delay: 1176ms;
}
.circle-container:nth-child(39) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-39;
          animation-name: move-frames-39;
  -webkit-animation-duration: 35292ms;
          animation-duration: 35292ms;
  -webkit-animation-delay: 16568ms;
          animation-delay: 16568ms;
}
@-webkit-keyframes move-frames-39 {
  from {
    transform: translate3d(96vw, 105vh, 0);
  }
  to {
    transform: translate3d(24vw, -133vh, 0);
  }
}
@keyframes move-frames-39 {
  from {
    transform: translate3d(96vw, 105vh, 0);
  }
  to {
    transform: translate3d(24vw, -133vh, 0);
  }
}
.circle-container:nth-child(39) .circle {
  -webkit-animation-delay: 2008ms;
          animation-delay: 2008ms;
}
.circle-container:nth-child(40) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-40;
          animation-name: move-frames-40;
  -webkit-animation-duration: 28112ms;
          animation-duration: 28112ms;
  -webkit-animation-delay: 21990ms;
          animation-delay: 21990ms;
}
@-webkit-keyframes move-frames-40 {
  from {
    transform: translate3d(3vw, 106vh, 0);
  }
  to {
    transform: translate3d(13vw, -116vh, 0);
  }
}
@keyframes move-frames-40 {
  from {
    transform: translate3d(3vw, 106vh, 0);
  }
  to {
    transform: translate3d(13vw, -116vh, 0);
  }
}
.circle-container:nth-child(40) .circle {
  -webkit-animation-delay: 349ms;
          animation-delay: 349ms;
}
.circle-container:nth-child(41) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-41;
          animation-name: move-frames-41;
  -webkit-animation-duration: 29156ms;
          animation-duration: 29156ms;
  -webkit-animation-delay: 7049ms;
          animation-delay: 7049ms;
}
@-webkit-keyframes move-frames-41 {
  from {
    transform: translate3d(93vw, 105vh, 0);
  }
  to {
    transform: translate3d(22vw, -108vh, 0);
  }
}
@keyframes move-frames-41 {
  from {
    transform: translate3d(93vw, 105vh, 0);
  }
  to {
    transform: translate3d(22vw, -108vh, 0);
  }
}
.circle-container:nth-child(41) .circle {
  -webkit-animation-delay: 886ms;
          animation-delay: 886ms;
}
.circle-container:nth-child(42) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-42;
          animation-name: move-frames-42;
  -webkit-animation-duration: 28790ms;
          animation-duration: 28790ms;
  -webkit-animation-delay: 11353ms;
          animation-delay: 11353ms;
}
@-webkit-keyframes move-frames-42 {
  from {
    transform: translate3d(68vw, 105vh, 0);
  }
  to {
    transform: translate3d(69vw, -131vh, 0);
  }
}
@keyframes move-frames-42 {
  from {
    transform: translate3d(68vw, 105vh, 0);
  }
  to {
    transform: translate3d(69vw, -131vh, 0);
  }
}
.circle-container:nth-child(42) .circle {
  -webkit-animation-delay: 483ms;
          animation-delay: 483ms;
}
.circle-container:nth-child(43) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-43;
          animation-name: move-frames-43;
  -webkit-animation-duration: 34509ms;
          animation-duration: 34509ms;
  -webkit-animation-delay: 8332ms;
          animation-delay: 8332ms;
}
@-webkit-keyframes move-frames-43 {
  from {
    transform: translate3d(59vw, 108vh, 0);
  }
  to {
    transform: translate3d(68vw, -131vh, 0);
  }
}
@keyframes move-frames-43 {
  from {
    transform: translate3d(59vw, 108vh, 0);
  }
  to {
    transform: translate3d(68vw, -131vh, 0);
  }
}
.circle-container:nth-child(43) .circle {
  -webkit-animation-delay: 1112ms;
          animation-delay: 1112ms;
}
.circle-container:nth-child(44) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-44;
          animation-name: move-frames-44;
  -webkit-animation-duration: 30275ms;
          animation-duration: 30275ms;
  -webkit-animation-delay: 19774ms;
          animation-delay: 19774ms;
}
@-webkit-keyframes move-frames-44 {
  from {
    transform: translate3d(72vw, 110vh, 0);
  }
  to {
    transform: translate3d(79vw, -123vh, 0);
  }
}
@keyframes move-frames-44 {
  from {
    transform: translate3d(72vw, 110vh, 0);
  }
  to {
    transform: translate3d(79vw, -123vh, 0);
  }
}
.circle-container:nth-child(44) .circle {
  -webkit-animation-delay: 3218ms;
          animation-delay: 3218ms;
}
.circle-container:nth-child(45) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-45;
          animation-name: move-frames-45;
  -webkit-animation-duration: 29031ms;
          animation-duration: 29031ms;
  -webkit-animation-delay: 21540ms;
          animation-delay: 21540ms;
}
@-webkit-keyframes move-frames-45 {
  from {
    transform: translate3d(1vw, 109vh, 0);
  }
  to {
    transform: translate3d(4vw, -127vh, 0);
  }
}
@keyframes move-frames-45 {
  from {
    transform: translate3d(1vw, 109vh, 0);
  }
  to {
    transform: translate3d(4vw, -127vh, 0);
  }
}
.circle-container:nth-child(45) .circle {
  -webkit-animation-delay: 1074ms;
          animation-delay: 1074ms;
}
.circle-container:nth-child(46) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-46;
          animation-name: move-frames-46;
  -webkit-animation-duration: 36288ms;
          animation-duration: 36288ms;
  -webkit-animation-delay: 17964ms;
          animation-delay: 17964ms;
}
@-webkit-keyframes move-frames-46 {
  from {
    transform: translate3d(70vw, 101vh, 0);
  }
  to {
    transform: translate3d(18vw, -109vh, 0);
  }
}
@keyframes move-frames-46 {
  from {
    transform: translate3d(70vw, 101vh, 0);
  }
  to {
    transform: translate3d(18vw, -109vh, 0);
  }
}
.circle-container:nth-child(46) .circle {
  -webkit-animation-delay: 3831ms;
          animation-delay: 3831ms;
}
.circle-container:nth-child(47) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-47;
          animation-name: move-frames-47;
  -webkit-animation-duration: 32321ms;
          animation-duration: 32321ms;
  -webkit-animation-delay: 35056ms;
          animation-delay: 35056ms;
}
@-webkit-keyframes move-frames-47 {
  from {
    transform: translate3d(78vw, 107vh, 0);
  }
  to {
    transform: translate3d(92vw, -134vh, 0);
  }
}
@keyframes move-frames-47 {
  from {
    transform: translate3d(78vw, 107vh, 0);
  }
  to {
    transform: translate3d(92vw, -134vh, 0);
  }
}
.circle-container:nth-child(47) .circle {
  -webkit-animation-delay: 3979ms;
          animation-delay: 3979ms;
}
.circle-container:nth-child(48) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-48;
          animation-name: move-frames-48;
  -webkit-animation-duration: 34205ms;
          animation-duration: 34205ms;
  -webkit-animation-delay: 17372ms;
          animation-delay: 17372ms;
}
@-webkit-keyframes move-frames-48 {
  from {
    transform: translate3d(7vw, 105vh, 0);
  }
  to {
    transform: translate3d(77vw, -119vh, 0);
  }
}
@keyframes move-frames-48 {
  from {
    transform: translate3d(7vw, 105vh, 0);
  }
  to {
    transform: translate3d(77vw, -119vh, 0);
  }
}
.circle-container:nth-child(48) .circle {
  -webkit-animation-delay: 932ms;
          animation-delay: 932ms;
}
.circle-container:nth-child(49) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-49;
          animation-name: move-frames-49;
  -webkit-animation-duration: 28110ms;
          animation-duration: 28110ms;
  -webkit-animation-delay: 12120ms;
          animation-delay: 12120ms;
}
@-webkit-keyframes move-frames-49 {
  from {
    transform: translate3d(53vw, 101vh, 0);
  }
  to {
    transform: translate3d(75vw, -110vh, 0);
  }
}
@keyframes move-frames-49 {
  from {
    transform: translate3d(53vw, 101vh, 0);
  }
  to {
    transform: translate3d(75vw, -110vh, 0);
  }
}
.circle-container:nth-child(49) .circle {
  -webkit-animation-delay: 3218ms;
          animation-delay: 3218ms;
}
.circle-container:nth-child(50) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-50;
          animation-name: move-frames-50;
  -webkit-animation-duration: 33707ms;
          animation-duration: 33707ms;
  -webkit-animation-delay: 20460ms;
          animation-delay: 20460ms;
}
@-webkit-keyframes move-frames-50 {
  from {
    transform: translate3d(6vw, 102vh, 0);
  }
  to {
    transform: translate3d(92vw, -103vh, 0);
  }
}
@keyframes move-frames-50 {
  from {
    transform: translate3d(6vw, 102vh, 0);
  }
  to {
    transform: translate3d(92vw, -103vh, 0);
  }
}
.circle-container:nth-child(50) .circle {
  -webkit-animation-delay: 3365ms;
          animation-delay: 3365ms;
}
.circle-container:nth-child(51) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-51;
          animation-name: move-frames-51;
  -webkit-animation-duration: 31468ms;
          animation-duration: 31468ms;
  -webkit-animation-delay: 2470ms;
          animation-delay: 2470ms;
}
@-webkit-keyframes move-frames-51 {
  from {
    transform: translate3d(93vw, 101vh, 0);
  }
  to {
    transform: translate3d(85vw, -108vh, 0);
  }
}
@keyframes move-frames-51 {
  from {
    transform: translate3d(93vw, 101vh, 0);
  }
  to {
    transform: translate3d(85vw, -108vh, 0);
  }
}
.circle-container:nth-child(51) .circle {
  -webkit-animation-delay: 137ms;
          animation-delay: 137ms;
}
.circle-container:nth-child(52) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-52;
          animation-name: move-frames-52;
  -webkit-animation-duration: 34566ms;
          animation-duration: 34566ms;
  -webkit-animation-delay: 30837ms;
          animation-delay: 30837ms;
}
@-webkit-keyframes move-frames-52 {
  from {
    transform: translate3d(14vw, 103vh, 0);
  }
  to {
    transform: translate3d(40vw, -122vh, 0);
  }
}
@keyframes move-frames-52 {
  from {
    transform: translate3d(14vw, 103vh, 0);
  }
  to {
    transform: translate3d(40vw, -122vh, 0);
  }
}
.circle-container:nth-child(52) .circle {
  -webkit-animation-delay: 1465ms;
          animation-delay: 1465ms;
}
.circle-container:nth-child(53) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-53;
          animation-name: move-frames-53;
  -webkit-animation-duration: 31334ms;
          animation-duration: 31334ms;
  -webkit-animation-delay: 1010ms;
          animation-delay: 1010ms;
}
@-webkit-keyframes move-frames-53 {
  from {
    transform: translate3d(90vw, 110vh, 0);
  }
  to {
    transform: translate3d(66vw, -131vh, 0);
  }
}
@keyframes move-frames-53 {
  from {
    transform: translate3d(90vw, 110vh, 0);
  }
  to {
    transform: translate3d(66vw, -131vh, 0);
  }
}
.circle-container:nth-child(53) .circle {
  -webkit-animation-delay: 228ms;
          animation-delay: 228ms;
}
.circle-container:nth-child(54) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-54;
          animation-name: move-frames-54;
  -webkit-animation-duration: 31667ms;
          animation-duration: 31667ms;
  -webkit-animation-delay: 7780ms;
          animation-delay: 7780ms;
}
@-webkit-keyframes move-frames-54 {
  from {
    transform: translate3d(66vw, 103vh, 0);
  }
  to {
    transform: translate3d(99vw, -124vh, 0);
  }
}
@keyframes move-frames-54 {
  from {
    transform: translate3d(66vw, 103vh, 0);
  }
  to {
    transform: translate3d(99vw, -124vh, 0);
  }
}
.circle-container:nth-child(54) .circle {
  -webkit-animation-delay: 2215ms;
          animation-delay: 2215ms;
}
.circle-container:nth-child(55) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-55;
          animation-name: move-frames-55;
  -webkit-animation-duration: 28845ms;
          animation-duration: 28845ms;
  -webkit-animation-delay: 28695ms;
          animation-delay: 28695ms;
}
@-webkit-keyframes move-frames-55 {
  from {
    transform: translate3d(34vw, 104vh, 0);
  }
  to {
    transform: translate3d(81vw, -119vh, 0);
  }
}
@keyframes move-frames-55 {
  from {
    transform: translate3d(34vw, 104vh, 0);
  }
  to {
    transform: translate3d(81vw, -119vh, 0);
  }
}
.circle-container:nth-child(55) .circle {
  -webkit-animation-delay: 3016ms;
          animation-delay: 3016ms;
}
.circle-container:nth-child(56) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-56;
          animation-name: move-frames-56;
  -webkit-animation-duration: 35522ms;
          animation-duration: 35522ms;
  -webkit-animation-delay: 9709ms;
          animation-delay: 9709ms;
}
@-webkit-keyframes move-frames-56 {
  from {
    transform: translate3d(84vw, 107vh, 0);
  }
  to {
    transform: translate3d(84vw, -121vh, 0);
  }
}
@keyframes move-frames-56 {
  from {
    transform: translate3d(84vw, 107vh, 0);
  }
  to {
    transform: translate3d(84vw, -121vh, 0);
  }
}
.circle-container:nth-child(56) .circle {
  -webkit-animation-delay: 1683ms;
          animation-delay: 1683ms;
}
.circle-container:nth-child(57) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-57;
          animation-name: move-frames-57;
  -webkit-animation-duration: 29278ms;
          animation-duration: 29278ms;
  -webkit-animation-delay: 14987ms;
          animation-delay: 14987ms;
}
@-webkit-keyframes move-frames-57 {
  from {
    transform: translate3d(46vw, 103vh, 0);
  }
  to {
    transform: translate3d(85vw, -113vh, 0);
  }
}
@keyframes move-frames-57 {
  from {
    transform: translate3d(46vw, 103vh, 0);
  }
  to {
    transform: translate3d(85vw, -113vh, 0);
  }
}
.circle-container:nth-child(57) .circle {
  -webkit-animation-delay: 2878ms;
          animation-delay: 2878ms;
}
.circle-container:nth-child(58) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-58;
          animation-name: move-frames-58;
  -webkit-animation-duration: 29780ms;
          animation-duration: 29780ms;
  -webkit-animation-delay: 15161ms;
          animation-delay: 15161ms;
}
@-webkit-keyframes move-frames-58 {
  from {
    transform: translate3d(23vw, 109vh, 0);
  }
  to {
    transform: translate3d(50vw, -138vh, 0);
  }
}
@keyframes move-frames-58 {
  from {
    transform: translate3d(23vw, 109vh, 0);
  }
  to {
    transform: translate3d(50vw, -138vh, 0);
  }
}
.circle-container:nth-child(58) .circle {
  -webkit-animation-delay: 3009ms;
          animation-delay: 3009ms;
}
.circle-container:nth-child(59) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-59;
          animation-name: move-frames-59;
  -webkit-animation-duration: 31682ms;
          animation-duration: 31682ms;
  -webkit-animation-delay: 23998ms;
          animation-delay: 23998ms;
}
@-webkit-keyframes move-frames-59 {
  from {
    transform: translate3d(19vw, 105vh, 0);
  }
  to {
    transform: translate3d(36vw, -109vh, 0);
  }
}
@keyframes move-frames-59 {
  from {
    transform: translate3d(19vw, 105vh, 0);
  }
  to {
    transform: translate3d(36vw, -109vh, 0);
  }
}
.circle-container:nth-child(59) .circle {
  -webkit-animation-delay: 1671ms;
          animation-delay: 1671ms;
}
.circle-container:nth-child(60) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-60;
          animation-name: move-frames-60;
  -webkit-animation-duration: 30533ms;
          animation-duration: 30533ms;
  -webkit-animation-delay: 29949ms;
          animation-delay: 29949ms;
}
@-webkit-keyframes move-frames-60 {
  from {
    transform: translate3d(62vw, 107vh, 0);
  }
  to {
    transform: translate3d(31vw, -130vh, 0);
  }
}
@keyframes move-frames-60 {
  from {
    transform: translate3d(62vw, 107vh, 0);
  }
  to {
    transform: translate3d(31vw, -130vh, 0);
  }
}
.circle-container:nth-child(60) .circle {
  -webkit-animation-delay: 1357ms;
          animation-delay: 1357ms;
}
.circle-container:nth-child(61) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-61;
          animation-name: move-frames-61;
  -webkit-animation-duration: 36234ms;
          animation-duration: 36234ms;
  -webkit-animation-delay: 25293ms;
          animation-delay: 25293ms;
}
@-webkit-keyframes move-frames-61 {
  from {
    transform: translate3d(41vw, 102vh, 0);
  }
  to {
    transform: translate3d(10vw, -130vh, 0);
  }
}
@keyframes move-frames-61 {
  from {
    transform: translate3d(41vw, 102vh, 0);
  }
  to {
    transform: translate3d(10vw, -130vh, 0);
  }
}
.circle-container:nth-child(61) .circle {
  -webkit-animation-delay: 2264ms;
          animation-delay: 2264ms;
}
.circle-container:nth-child(62) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-62;
          animation-name: move-frames-62;
  -webkit-animation-duration: 30294ms;
          animation-duration: 30294ms;
  -webkit-animation-delay: 35015ms;
          animation-delay: 35015ms;
}
@-webkit-keyframes move-frames-62 {
  from {
    transform: translate3d(75vw, 107vh, 0);
  }
  to {
    transform: translate3d(53vw, -108vh, 0);
  }
}
@keyframes move-frames-62 {
  from {
    transform: translate3d(75vw, 107vh, 0);
  }
  to {
    transform: translate3d(53vw, -108vh, 0);
  }
}
.circle-container:nth-child(62) .circle {
  -webkit-animation-delay: 3576ms;
          animation-delay: 3576ms;
}
.circle-container:nth-child(63) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-63;
          animation-name: move-frames-63;
  -webkit-animation-duration: 29265ms;
          animation-duration: 29265ms;
  -webkit-animation-delay: 31575ms;
          animation-delay: 31575ms;
}
@-webkit-keyframes move-frames-63 {
  from {
    transform: translate3d(99vw, 107vh, 0);
  }
  to {
    transform: translate3d(22vw, -134vh, 0);
  }
}
@keyframes move-frames-63 {
  from {
    transform: translate3d(99vw, 107vh, 0);
  }
  to {
    transform: translate3d(22vw, -134vh, 0);
  }
}
.circle-container:nth-child(63) .circle {
  -webkit-animation-delay: 3093ms;
          animation-delay: 3093ms;
}
.circle-container:nth-child(64) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-64;
          animation-name: move-frames-64;
  -webkit-animation-duration: 33944ms;
          animation-duration: 33944ms;
  -webkit-animation-delay: 34814ms;
          animation-delay: 34814ms;
}
@-webkit-keyframes move-frames-64 {
  from {
    transform: translate3d(4vw, 106vh, 0);
  }
  to {
    transform: translate3d(5vw, -124vh, 0);
  }
}
@keyframes move-frames-64 {
  from {
    transform: translate3d(4vw, 106vh, 0);
  }
  to {
    transform: translate3d(5vw, -124vh, 0);
  }
}
.circle-container:nth-child(64) .circle {
  -webkit-animation-delay: 1632ms;
          animation-delay: 1632ms;
}
.circle-container:nth-child(65) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-65;
          animation-name: move-frames-65;
  -webkit-animation-duration: 35120ms;
          animation-duration: 35120ms;
  -webkit-animation-delay: 30013ms;
          animation-delay: 30013ms;
}
@-webkit-keyframes move-frames-65 {
  from {
    transform: translate3d(73vw, 108vh, 0);
  }
  to {
    transform: translate3d(73vw, -118vh, 0);
  }
}
@keyframes move-frames-65 {
  from {
    transform: translate3d(73vw, 108vh, 0);
  }
  to {
    transform: translate3d(73vw, -118vh, 0);
  }
}
.circle-container:nth-child(65) .circle {
  -webkit-animation-delay: 1514ms;
          animation-delay: 1514ms;
}
.circle-container:nth-child(66) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-66;
          animation-name: move-frames-66;
  -webkit-animation-duration: 32965ms;
          animation-duration: 32965ms;
  -webkit-animation-delay: 26275ms;
          animation-delay: 26275ms;
}
@-webkit-keyframes move-frames-66 {
  from {
    transform: translate3d(45vw, 101vh, 0);
  }
  to {
    transform: translate3d(2vw, -125vh, 0);
  }
}
@keyframes move-frames-66 {
  from {
    transform: translate3d(45vw, 101vh, 0);
  }
  to {
    transform: translate3d(2vw, -125vh, 0);
  }
}
.circle-container:nth-child(66) .circle {
  -webkit-animation-delay: 39ms;
          animation-delay: 39ms;
}
.circle-container:nth-child(67) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-67;
          animation-name: move-frames-67;
  -webkit-animation-duration: 30182ms;
          animation-duration: 30182ms;
  -webkit-animation-delay: 11846ms;
          animation-delay: 11846ms;
}
@-webkit-keyframes move-frames-67 {
  from {
    transform: translate3d(13vw, 110vh, 0);
  }
  to {
    transform: translate3d(15vw, -127vh, 0);
  }
}
@keyframes move-frames-67 {
  from {
    transform: translate3d(13vw, 110vh, 0);
  }
  to {
    transform: translate3d(15vw, -127vh, 0);
  }
}
.circle-container:nth-child(67) .circle {
  -webkit-animation-delay: 555ms;
          animation-delay: 555ms;
}
.circle-container:nth-child(68) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-68;
          animation-name: move-frames-68;
  -webkit-animation-duration: 31373ms;
          animation-duration: 31373ms;
  -webkit-animation-delay: 31314ms;
          animation-delay: 31314ms;
}
@-webkit-keyframes move-frames-68 {
  from {
    transform: translate3d(93vw, 104vh, 0);
  }
  to {
    transform: translate3d(47vw, -105vh, 0);
  }
}
@keyframes move-frames-68 {
  from {
    transform: translate3d(93vw, 104vh, 0);
  }
  to {
    transform: translate3d(47vw, -105vh, 0);
  }
}
.circle-container:nth-child(68) .circle {
  -webkit-animation-delay: 2634ms;
          animation-delay: 2634ms;
}
.circle-container:nth-child(69) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-69;
          animation-name: move-frames-69;
  -webkit-animation-duration: 29204ms;
          animation-duration: 29204ms;
  -webkit-animation-delay: 6880ms;
          animation-delay: 6880ms;
}
@-webkit-keyframes move-frames-69 {
  from {
    transform: translate3d(18vw, 103vh, 0);
  }
  to {
    transform: translate3d(82vw, -121vh, 0);
  }
}
@keyframes move-frames-69 {
  from {
    transform: translate3d(18vw, 103vh, 0);
  }
  to {
    transform: translate3d(82vw, -121vh, 0);
  }
}
.circle-container:nth-child(69) .circle {
  -webkit-animation-delay: 3022ms;
          animation-delay: 3022ms;
}
.circle-container:nth-child(70) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-70;
          animation-name: move-frames-70;
  -webkit-animation-duration: 33507ms;
          animation-duration: 33507ms;
  -webkit-animation-delay: 17500ms;
          animation-delay: 17500ms;
}
@-webkit-keyframes move-frames-70 {
  from {
    transform: translate3d(44vw, 108vh, 0);
  }
  to {
    transform: translate3d(67vw, -112vh, 0);
  }
}
@keyframes move-frames-70 {
  from {
    transform: translate3d(44vw, 108vh, 0);
  }
  to {
    transform: translate3d(67vw, -112vh, 0);
  }
}
.circle-container:nth-child(70) .circle {
  -webkit-animation-delay: 313ms;
          animation-delay: 313ms;
}
.circle-container:nth-child(71) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-71;
          animation-name: move-frames-71;
  -webkit-animation-duration: 28089ms;
          animation-duration: 28089ms;
  -webkit-animation-delay: 5331ms;
          animation-delay: 5331ms;
}
@-webkit-keyframes move-frames-71 {
  from {
    transform: translate3d(39vw, 104vh, 0);
  }
  to {
    transform: translate3d(52vw, -118vh, 0);
  }
}
@keyframes move-frames-71 {
  from {
    transform: translate3d(39vw, 104vh, 0);
  }
  to {
    transform: translate3d(52vw, -118vh, 0);
  }
}
.circle-container:nth-child(71) .circle {
  -webkit-animation-delay: 3978ms;
          animation-delay: 3978ms;
}
.circle-container:nth-child(72) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-72;
          animation-name: move-frames-72;
  -webkit-animation-duration: 33740ms;
          animation-duration: 33740ms;
  -webkit-animation-delay: 31176ms;
          animation-delay: 31176ms;
}
@-webkit-keyframes move-frames-72 {
  from {
    transform: translate3d(74vw, 105vh, 0);
  }
  to {
    transform: translate3d(11vw, -123vh, 0);
  }
}
@keyframes move-frames-72 {
  from {
    transform: translate3d(74vw, 105vh, 0);
  }
  to {
    transform: translate3d(11vw, -123vh, 0);
  }
}
.circle-container:nth-child(72) .circle {
  -webkit-animation-delay: 853ms;
          animation-delay: 853ms;
}
.circle-container:nth-child(73) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-73;
          animation-name: move-frames-73;
  -webkit-animation-duration: 30974ms;
          animation-duration: 30974ms;
  -webkit-animation-delay: 22072ms;
          animation-delay: 22072ms;
}
@-webkit-keyframes move-frames-73 {
  from {
    transform: translate3d(41vw, 106vh, 0);
  }
  to {
    transform: translate3d(87vw, -107vh, 0);
  }
}
@keyframes move-frames-73 {
  from {
    transform: translate3d(41vw, 106vh, 0);
  }
  to {
    transform: translate3d(87vw, -107vh, 0);
  }
}
.circle-container:nth-child(73) .circle {
  -webkit-animation-delay: 874ms;
          animation-delay: 874ms;
}
.circle-container:nth-child(74) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-74;
          animation-name: move-frames-74;
  -webkit-animation-duration: 34949ms;
          animation-duration: 34949ms;
  -webkit-animation-delay: 12285ms;
          animation-delay: 12285ms;
}
@-webkit-keyframes move-frames-74 {
  from {
    transform: translate3d(64vw, 102vh, 0);
  }
  to {
    transform: translate3d(32vw, -128vh, 0);
  }
}
@keyframes move-frames-74 {
  from {
    transform: translate3d(64vw, 102vh, 0);
  }
  to {
    transform: translate3d(32vw, -128vh, 0);
  }
}
.circle-container:nth-child(74) .circle {
  -webkit-animation-delay: 3190ms;
          animation-delay: 3190ms;
}
.circle-container:nth-child(75) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-75;
          animation-name: move-frames-75;
  -webkit-animation-duration: 36982ms;
          animation-duration: 36982ms;
  -webkit-animation-delay: 35588ms;
          animation-delay: 35588ms;
}
@-webkit-keyframes move-frames-75 {
  from {
    transform: translate3d(61vw, 102vh, 0);
  }
  to {
    transform: translate3d(59vw, -121vh, 0);
  }
}
@keyframes move-frames-75 {
  from {
    transform: translate3d(61vw, 102vh, 0);
  }
  to {
    transform: translate3d(59vw, -121vh, 0);
  }
}
.circle-container:nth-child(75) .circle {
  -webkit-animation-delay: 606ms;
          animation-delay: 606ms;
}
.circle-container:nth-child(76) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-76;
          animation-name: move-frames-76;
  -webkit-animation-duration: 32931ms;
          animation-duration: 32931ms;
  -webkit-animation-delay: 2192ms;
          animation-delay: 2192ms;
}
@-webkit-keyframes move-frames-76 {
  from {
    transform: translate3d(93vw, 107vh, 0);
  }
  to {
    transform: translate3d(63vw, -135vh, 0);
  }
}
@keyframes move-frames-76 {
  from {
    transform: translate3d(93vw, 107vh, 0);
  }
  to {
    transform: translate3d(63vw, -135vh, 0);
  }
}
.circle-container:nth-child(76) .circle {
  -webkit-animation-delay: 2145ms;
          animation-delay: 2145ms;
}
.circle-container:nth-child(77) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-77;
          animation-name: move-frames-77;
  -webkit-animation-duration: 36160ms;
          animation-duration: 36160ms;
  -webkit-animation-delay: 32383ms;
          animation-delay: 32383ms;
}
@-webkit-keyframes move-frames-77 {
  from {
    transform: translate3d(74vw, 108vh, 0);
  }
  to {
    transform: translate3d(62vw, -116vh, 0);
  }
}
@keyframes move-frames-77 {
  from {
    transform: translate3d(74vw, 108vh, 0);
  }
  to {
    transform: translate3d(62vw, -116vh, 0);
  }
}
.circle-container:nth-child(77) .circle {
  -webkit-animation-delay: 3109ms;
          animation-delay: 3109ms;
}
.circle-container:nth-child(78) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-78;
          animation-name: move-frames-78;
  -webkit-animation-duration: 35515ms;
          animation-duration: 35515ms;
  -webkit-animation-delay: 11045ms;
          animation-delay: 11045ms;
}
@-webkit-keyframes move-frames-78 {
  from {
    transform: translate3d(81vw, 106vh, 0);
  }
  to {
    transform: translate3d(39vw, -113vh, 0);
  }
}
@keyframes move-frames-78 {
  from {
    transform: translate3d(81vw, 106vh, 0);
  }
  to {
    transform: translate3d(39vw, -113vh, 0);
  }
}
.circle-container:nth-child(78) .circle {
  -webkit-animation-delay: 716ms;
          animation-delay: 716ms;
}
.circle-container:nth-child(79) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-79;
          animation-name: move-frames-79;
  -webkit-animation-duration: 28498ms;
          animation-duration: 28498ms;
  -webkit-animation-delay: 6855ms;
          animation-delay: 6855ms;
}
@-webkit-keyframes move-frames-79 {
  from {
    transform: translate3d(66vw, 108vh, 0);
  }
  to {
    transform: translate3d(94vw, -120vh, 0);
  }
}
@keyframes move-frames-79 {
  from {
    transform: translate3d(66vw, 108vh, 0);
  }
  to {
    transform: translate3d(94vw, -120vh, 0);
  }
}
.circle-container:nth-child(79) .circle {
  -webkit-animation-delay: 415ms;
          animation-delay: 415ms;
}
.circle-container:nth-child(80) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-80;
          animation-name: move-frames-80;
  -webkit-animation-duration: 28448ms;
          animation-duration: 28448ms;
  -webkit-animation-delay: 29580ms;
          animation-delay: 29580ms;
}
@-webkit-keyframes move-frames-80 {
  from {
    transform: translate3d(97vw, 103vh, 0);
  }
  to {
    transform: translate3d(38vw, -129vh, 0);
  }
}
@keyframes move-frames-80 {
  from {
    transform: translate3d(97vw, 103vh, 0);
  }
  to {
    transform: translate3d(38vw, -129vh, 0);
  }
}
.circle-container:nth-child(80) .circle {
  -webkit-animation-delay: 1509ms;
          animation-delay: 1509ms;
}
.circle-container:nth-child(81) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-81;
          animation-name: move-frames-81;
  -webkit-animation-duration: 31419ms;
          animation-duration: 31419ms;
  -webkit-animation-delay: 32442ms;
          animation-delay: 32442ms;
}
@-webkit-keyframes move-frames-81 {
  from {
    transform: translate3d(61vw, 110vh, 0);
  }
  to {
    transform: translate3d(79vw, -134vh, 0);
  }
}
@keyframes move-frames-81 {
  from {
    transform: translate3d(61vw, 110vh, 0);
  }
  to {
    transform: translate3d(79vw, -134vh, 0);
  }
}
.circle-container:nth-child(81) .circle {
  -webkit-animation-delay: 1827ms;
          animation-delay: 1827ms;
}
.circle-container:nth-child(82) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-82;
          animation-name: move-frames-82;
  -webkit-animation-duration: 33302ms;
          animation-duration: 33302ms;
  -webkit-animation-delay: 13632ms;
          animation-delay: 13632ms;
}
@-webkit-keyframes move-frames-82 {
  from {
    transform: translate3d(89vw, 102vh, 0);
  }
  to {
    transform: translate3d(79vw, -113vh, 0);
  }
}
@keyframes move-frames-82 {
  from {
    transform: translate3d(89vw, 102vh, 0);
  }
  to {
    transform: translate3d(79vw, -113vh, 0);
  }
}
.circle-container:nth-child(82) .circle {
  -webkit-animation-delay: 507ms;
          animation-delay: 507ms;
}
.circle-container:nth-child(83) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-83;
          animation-name: move-frames-83;
  -webkit-animation-duration: 30891ms;
          animation-duration: 30891ms;
  -webkit-animation-delay: 27341ms;
          animation-delay: 27341ms;
}
@-webkit-keyframes move-frames-83 {
  from {
    transform: translate3d(63vw, 103vh, 0);
  }
  to {
    transform: translate3d(2vw, -118vh, 0);
  }
}
@keyframes move-frames-83 {
  from {
    transform: translate3d(63vw, 103vh, 0);
  }
  to {
    transform: translate3d(2vw, -118vh, 0);
  }
}
.circle-container:nth-child(83) .circle {
  -webkit-animation-delay: 3157ms;
          animation-delay: 3157ms;
}
.circle-container:nth-child(84) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-84;
          animation-name: move-frames-84;
  -webkit-animation-duration: 30532ms;
          animation-duration: 30532ms;
  -webkit-animation-delay: 8770ms;
          animation-delay: 8770ms;
}
@-webkit-keyframes move-frames-84 {
  from {
    transform: translate3d(77vw, 104vh, 0);
  }
  to {
    transform: translate3d(10vw, -133vh, 0);
  }
}
@keyframes move-frames-84 {
  from {
    transform: translate3d(77vw, 104vh, 0);
  }
  to {
    transform: translate3d(10vw, -133vh, 0);
  }
}
.circle-container:nth-child(84) .circle {
  -webkit-animation-delay: 3481ms;
          animation-delay: 3481ms;
}
.circle-container:nth-child(85) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-85;
          animation-name: move-frames-85;
  -webkit-animation-duration: 29213ms;
          animation-duration: 29213ms;
  -webkit-animation-delay: 31293ms;
          animation-delay: 31293ms;
}
@-webkit-keyframes move-frames-85 {
  from {
    transform: translate3d(25vw, 107vh, 0);
  }
  to {
    transform: translate3d(53vw, -114vh, 0);
  }
}
@keyframes move-frames-85 {
  from {
    transform: translate3d(25vw, 107vh, 0);
  }
  to {
    transform: translate3d(53vw, -114vh, 0);
  }
}
.circle-container:nth-child(85) .circle {
  -webkit-animation-delay: 932ms;
          animation-delay: 932ms;
}
.circle-container:nth-child(86) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-86;
          animation-name: move-frames-86;
  -webkit-animation-duration: 32517ms;
          animation-duration: 32517ms;
  -webkit-animation-delay: 26080ms;
          animation-delay: 26080ms;
}
@-webkit-keyframes move-frames-86 {
  from {
    transform: translate3d(26vw, 101vh, 0);
  }
  to {
    transform: translate3d(83vw, -110vh, 0);
  }
}
@keyframes move-frames-86 {
  from {
    transform: translate3d(26vw, 101vh, 0);
  }
  to {
    transform: translate3d(83vw, -110vh, 0);
  }
}
.circle-container:nth-child(86) .circle {
  -webkit-animation-delay: 3863ms;
          animation-delay: 3863ms;
}
.circle-container:nth-child(87) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-87;
          animation-name: move-frames-87;
  -webkit-animation-duration: 32048ms;
          animation-duration: 32048ms;
  -webkit-animation-delay: 7749ms;
          animation-delay: 7749ms;
}
@-webkit-keyframes move-frames-87 {
  from {
    transform: translate3d(72vw, 101vh, 0);
  }
  to {
    transform: translate3d(94vw, -102vh, 0);
  }
}
@keyframes move-frames-87 {
  from {
    transform: translate3d(72vw, 101vh, 0);
  }
  to {
    transform: translate3d(94vw, -102vh, 0);
  }
}
.circle-container:nth-child(87) .circle {
  -webkit-animation-delay: 749ms;
          animation-delay: 749ms;
}
.circle-container:nth-child(88) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-88;
          animation-name: move-frames-88;
  -webkit-animation-duration: 28586ms;
          animation-duration: 28586ms;
  -webkit-animation-delay: 485ms;
          animation-delay: 485ms;
}
@-webkit-keyframes move-frames-88 {
  from {
    transform: translate3d(5vw, 101vh, 0);
  }
  to {
    transform: translate3d(15vw, -102vh, 0);
  }
}
@keyframes move-frames-88 {
  from {
    transform: translate3d(5vw, 101vh, 0);
  }
  to {
    transform: translate3d(15vw, -102vh, 0);
  }
}
.circle-container:nth-child(88) .circle {
  -webkit-animation-delay: 2641ms;
          animation-delay: 2641ms;
}
.circle-container:nth-child(89) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-89;
          animation-name: move-frames-89;
  -webkit-animation-duration: 32117ms;
          animation-duration: 32117ms;
  -webkit-animation-delay: 12301ms;
          animation-delay: 12301ms;
}
@-webkit-keyframes move-frames-89 {
  from {
    transform: translate3d(9vw, 109vh, 0);
  }
  to {
    transform: translate3d(6vw, -125vh, 0);
  }
}
@keyframes move-frames-89 {
  from {
    transform: translate3d(9vw, 109vh, 0);
  }
  to {
    transform: translate3d(6vw, -125vh, 0);
  }
}
.circle-container:nth-child(89) .circle {
  -webkit-animation-delay: 1703ms;
          animation-delay: 1703ms;
}
.circle-container:nth-child(90) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-90;
          animation-name: move-frames-90;
  -webkit-animation-duration: 29668ms;
          animation-duration: 29668ms;
  -webkit-animation-delay: 11702ms;
          animation-delay: 11702ms;
}
@-webkit-keyframes move-frames-90 {
  from {
    transform: translate3d(50vw, 101vh, 0);
  }
  to {
    transform: translate3d(40vw, -120vh, 0);
  }
}
@keyframes move-frames-90 {
  from {
    transform: translate3d(50vw, 101vh, 0);
  }
  to {
    transform: translate3d(40vw, -120vh, 0);
  }
}
.circle-container:nth-child(90) .circle {
  -webkit-animation-delay: 1310ms;
          animation-delay: 1310ms;
}
.circle-container:nth-child(91) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-91;
          animation-name: move-frames-91;
  -webkit-animation-duration: 33829ms;
          animation-duration: 33829ms;
  -webkit-animation-delay: 32670ms;
          animation-delay: 32670ms;
}
@-webkit-keyframes move-frames-91 {
  from {
    transform: translate3d(44vw, 103vh, 0);
  }
  to {
    transform: translate3d(88vw, -122vh, 0);
  }
}
@keyframes move-frames-91 {
  from {
    transform: translate3d(44vw, 103vh, 0);
  }
  to {
    transform: translate3d(88vw, -122vh, 0);
  }
}
.circle-container:nth-child(91) .circle {
  -webkit-animation-delay: 2763ms;
          animation-delay: 2763ms;
}
.circle-container:nth-child(92) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-92;
          animation-name: move-frames-92;
  -webkit-animation-duration: 29296ms;
          animation-duration: 29296ms;
  -webkit-animation-delay: 7137ms;
          animation-delay: 7137ms;
}
@-webkit-keyframes move-frames-92 {
  from {
    transform: translate3d(10vw, 103vh, 0);
  }
  to {
    transform: translate3d(44vw, -105vh, 0);
  }
}
@keyframes move-frames-92 {
  from {
    transform: translate3d(10vw, 103vh, 0);
  }
  to {
    transform: translate3d(44vw, -105vh, 0);
  }
}
.circle-container:nth-child(92) .circle {
  -webkit-animation-delay: 2034ms;
          animation-delay: 2034ms;
}
.circle-container:nth-child(93) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-93;
          animation-name: move-frames-93;
  -webkit-animation-duration: 32968ms;
          animation-duration: 32968ms;
  -webkit-animation-delay: 5686ms;
          animation-delay: 5686ms;
}
@-webkit-keyframes move-frames-93 {
  from {
    transform: translate3d(86vw, 109vh, 0);
  }
  to {
    transform: translate3d(95vw, -133vh, 0);
  }
}
@keyframes move-frames-93 {
  from {
    transform: translate3d(86vw, 109vh, 0);
  }
  to {
    transform: translate3d(95vw, -133vh, 0);
  }
}
.circle-container:nth-child(93) .circle {
  -webkit-animation-delay: 3855ms;
          animation-delay: 3855ms;
}
.circle-container:nth-child(94) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-94;
          animation-name: move-frames-94;
  -webkit-animation-duration: 33195ms;
          animation-duration: 33195ms;
  -webkit-animation-delay: 35546ms;
          animation-delay: 35546ms;
}
@-webkit-keyframes move-frames-94 {
  from {
    transform: translate3d(27vw, 104vh, 0);
  }
  to {
    transform: translate3d(66vw, -106vh, 0);
  }
}
@keyframes move-frames-94 {
  from {
    transform: translate3d(27vw, 104vh, 0);
  }
  to {
    transform: translate3d(66vw, -106vh, 0);
  }
}
.circle-container:nth-child(94) .circle {
  -webkit-animation-delay: 1665ms;
          animation-delay: 1665ms;
}
.circle-container:nth-child(95) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-95;
          animation-name: move-frames-95;
  -webkit-animation-duration: 31232ms;
          animation-duration: 31232ms;
  -webkit-animation-delay: 36170ms;
          animation-delay: 36170ms;
}
@-webkit-keyframes move-frames-95 {
  from {
    transform: translate3d(6vw, 103vh, 0);
  }
  to {
    transform: translate3d(63vw, -129vh, 0);
  }
}
@keyframes move-frames-95 {
  from {
    transform: translate3d(6vw, 103vh, 0);
  }
  to {
    transform: translate3d(63vw, -129vh, 0);
  }
}
.circle-container:nth-child(95) .circle {
  -webkit-animation-delay: 1761ms;
          animation-delay: 1761ms;
}
.circle-container:nth-child(96) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-96;
          animation-name: move-frames-96;
  -webkit-animation-duration: 28100ms;
          animation-duration: 28100ms;
  -webkit-animation-delay: 27561ms;
          animation-delay: 27561ms;
}
@-webkit-keyframes move-frames-96 {
  from {
    transform: translate3d(93vw, 108vh, 0);
  }
  to {
    transform: translate3d(28vw, -124vh, 0);
  }
}
@keyframes move-frames-96 {
  from {
    transform: translate3d(93vw, 108vh, 0);
  }
  to {
    transform: translate3d(28vw, -124vh, 0);
  }
}
.circle-container:nth-child(96) .circle {
  -webkit-animation-delay: 133ms;
          animation-delay: 133ms;
}
.circle-container:nth-child(97) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-97;
          animation-name: move-frames-97;
  -webkit-animation-duration: 32897ms;
          animation-duration: 32897ms;
  -webkit-animation-delay: 27004ms;
          animation-delay: 27004ms;
}
@-webkit-keyframes move-frames-97 {
  from {
    transform: translate3d(21vw, 102vh, 0);
  }
  to {
    transform: translate3d(6vw, -128vh, 0);
  }
}
@keyframes move-frames-97 {
  from {
    transform: translate3d(21vw, 102vh, 0);
  }
  to {
    transform: translate3d(6vw, -128vh, 0);
  }
}
.circle-container:nth-child(97) .circle {
  -webkit-animation-delay: 1518ms;
          animation-delay: 1518ms;
}
.circle-container:nth-child(98) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-98;
          animation-name: move-frames-98;
  -webkit-animation-duration: 29370ms;
          animation-duration: 29370ms;
  -webkit-animation-delay: 13707ms;
          animation-delay: 13707ms;
}
@-webkit-keyframes move-frames-98 {
  from {
    transform: translate3d(33vw, 107vh, 0);
  }
  to {
    transform: translate3d(1vw, -111vh, 0);
  }
}
@keyframes move-frames-98 {
  from {
    transform: translate3d(33vw, 107vh, 0);
  }
  to {
    transform: translate3d(1vw, -111vh, 0);
  }
}
.circle-container:nth-child(98) .circle {
  -webkit-animation-delay: 3392ms;
          animation-delay: 3392ms;
}
.circle-container:nth-child(99) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-99;
          animation-name: move-frames-99;
  -webkit-animation-duration: 28693ms;
          animation-duration: 28693ms;
  -webkit-animation-delay: 24642ms;
          animation-delay: 24642ms;
}
@-webkit-keyframes move-frames-99 {
  from {
    transform: translate3d(24vw, 105vh, 0);
  }
  to {
    transform: translate3d(48vw, -116vh, 0);
  }
}
@keyframes move-frames-99 {
  from {
    transform: translate3d(24vw, 105vh, 0);
  }
  to {
    transform: translate3d(48vw, -116vh, 0);
  }
}
.circle-container:nth-child(99) .circle {
  -webkit-animation-delay: 3769ms;
          animation-delay: 3769ms;
}
.circle-container:nth-child(100) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-100;
          animation-name: move-frames-100;
  -webkit-animation-duration: 34136ms;
          animation-duration: 34136ms;
  -webkit-animation-delay: 14746ms;
          animation-delay: 14746ms;
}
@-webkit-keyframes move-frames-100 {
  from {
    transform: translate3d(9vw, 104vh, 0);
  }
  to {
    transform: translate3d(47vw, -110vh, 0);
  }
}
@keyframes move-frames-100 {
  from {
    transform: translate3d(9vw, 104vh, 0);
  }
  to {
    transform: translate3d(47vw, -110vh, 0);
  }
}
.circle-container:nth-child(100) .circle {
  -webkit-animation-delay: 930ms;
          animation-delay: 930ms;
}
.circle-container:nth-child(101) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-101;
          animation-name: move-frames-101;
  -webkit-animation-duration: 31109ms;
          animation-duration: 31109ms;
  -webkit-animation-delay: 5772ms;
          animation-delay: 5772ms;
}
@-webkit-keyframes move-frames-101 {
  from {
    transform: translate3d(7vw, 101vh, 0);
  }
  to {
    transform: translate3d(83vw, -125vh, 0);
  }
}
@keyframes move-frames-101 {
  from {
    transform: translate3d(7vw, 101vh, 0);
  }
  to {
    transform: translate3d(83vw, -125vh, 0);
  }
}
.circle-container:nth-child(101) .circle {
  -webkit-animation-delay: 1857ms;
          animation-delay: 1857ms;
}
.circle-container:nth-child(102) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-102;
          animation-name: move-frames-102;
  -webkit-animation-duration: 32856ms;
          animation-duration: 32856ms;
  -webkit-animation-delay: 1608ms;
          animation-delay: 1608ms;
}
@-webkit-keyframes move-frames-102 {
  from {
    transform: translate3d(24vw, 101vh, 0);
  }
  to {
    transform: translate3d(55vw, -130vh, 0);
  }
}
@keyframes move-frames-102 {
  from {
    transform: translate3d(24vw, 101vh, 0);
  }
  to {
    transform: translate3d(55vw, -130vh, 0);
  }
}
.circle-container:nth-child(102) .circle {
  -webkit-animation-delay: 2439ms;
          animation-delay: 2439ms;
}
.circle-container:nth-child(103) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-103;
          animation-name: move-frames-103;
  -webkit-animation-duration: 34329ms;
          animation-duration: 34329ms;
  -webkit-animation-delay: 24184ms;
          animation-delay: 24184ms;
}
@-webkit-keyframes move-frames-103 {
  from {
    transform: translate3d(49vw, 104vh, 0);
  }
  to {
    transform: translate3d(59vw, -112vh, 0);
  }
}
@keyframes move-frames-103 {
  from {
    transform: translate3d(49vw, 104vh, 0);
  }
  to {
    transform: translate3d(59vw, -112vh, 0);
  }
}
.circle-container:nth-child(103) .circle {
  -webkit-animation-delay: 874ms;
          animation-delay: 874ms;
}
.circle-container:nth-child(104) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-104;
          animation-name: move-frames-104;
  -webkit-animation-duration: 31370ms;
          animation-duration: 31370ms;
  -webkit-animation-delay: 36159ms;
          animation-delay: 36159ms;
}
@-webkit-keyframes move-frames-104 {
  from {
    transform: translate3d(91vw, 109vh, 0);
  }
  to {
    transform: translate3d(53vw, -117vh, 0);
  }
}
@keyframes move-frames-104 {
  from {
    transform: translate3d(91vw, 109vh, 0);
  }
  to {
    transform: translate3d(53vw, -117vh, 0);
  }
}
.circle-container:nth-child(104) .circle {
  -webkit-animation-delay: 870ms;
          animation-delay: 870ms;
}
.circle-container:nth-child(105) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-105;
          animation-name: move-frames-105;
  -webkit-animation-duration: 31452ms;
          animation-duration: 31452ms;
  -webkit-animation-delay: 35912ms;
          animation-delay: 35912ms;
}
@-webkit-keyframes move-frames-105 {
  from {
    transform: translate3d(76vw, 110vh, 0);
  }
  to {
    transform: translate3d(30vw, -129vh, 0);
  }
}
@keyframes move-frames-105 {
  from {
    transform: translate3d(76vw, 110vh, 0);
  }
  to {
    transform: translate3d(30vw, -129vh, 0);
  }
}
.circle-container:nth-child(105) .circle {
  -webkit-animation-delay: 2315ms;
          animation-delay: 2315ms;
}
.circle-container:nth-child(106) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-106;
          animation-name: move-frames-106;
  -webkit-animation-duration: 28068ms;
          animation-duration: 28068ms;
  -webkit-animation-delay: 17274ms;
          animation-delay: 17274ms;
}
@-webkit-keyframes move-frames-106 {
  from {
    transform: translate3d(87vw, 105vh, 0);
  }
  to {
    transform: translate3d(2vw, -115vh, 0);
  }
}
@keyframes move-frames-106 {
  from {
    transform: translate3d(87vw, 105vh, 0);
  }
  to {
    transform: translate3d(2vw, -115vh, 0);
  }
}
.circle-container:nth-child(106) .circle {
  -webkit-animation-delay: 3186ms;
          animation-delay: 3186ms;
}
.circle-container:nth-child(107) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-107;
          animation-name: move-frames-107;
  -webkit-animation-duration: 30478ms;
          animation-duration: 30478ms;
  -webkit-animation-delay: 21702ms;
          animation-delay: 21702ms;
}
@-webkit-keyframes move-frames-107 {
  from {
    transform: translate3d(59vw, 103vh, 0);
  }
  to {
    transform: translate3d(31vw, -120vh, 0);
  }
}
@keyframes move-frames-107 {
  from {
    transform: translate3d(59vw, 103vh, 0);
  }
  to {
    transform: translate3d(31vw, -120vh, 0);
  }
}
.circle-container:nth-child(107) .circle {
  -webkit-animation-delay: 52ms;
          animation-delay: 52ms;
}
.circle-container:nth-child(108) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-108;
          animation-name: move-frames-108;
  -webkit-animation-duration: 35518ms;
          animation-duration: 35518ms;
  -webkit-animation-delay: 18776ms;
          animation-delay: 18776ms;
}
@-webkit-keyframes move-frames-108 {
  from {
    transform: translate3d(14vw, 103vh, 0);
  }
  to {
    transform: translate3d(90vw, -122vh, 0);
  }
}
@keyframes move-frames-108 {
  from {
    transform: translate3d(14vw, 103vh, 0);
  }
  to {
    transform: translate3d(90vw, -122vh, 0);
  }
}
.circle-container:nth-child(108) .circle {
  -webkit-animation-delay: 852ms;
          animation-delay: 852ms;
}
.circle-container:nth-child(109) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-109;
          animation-name: move-frames-109;
  -webkit-animation-duration: 28345ms;
          animation-duration: 28345ms;
  -webkit-animation-delay: 15000ms;
          animation-delay: 15000ms;
}
@-webkit-keyframes move-frames-109 {
  from {
    transform: translate3d(75vw, 109vh, 0);
  }
  to {
    transform: translate3d(98vw, -110vh, 0);
  }
}
@keyframes move-frames-109 {
  from {
    transform: translate3d(75vw, 109vh, 0);
  }
  to {
    transform: translate3d(98vw, -110vh, 0);
  }
}
.circle-container:nth-child(109) .circle {
  -webkit-animation-delay: 3260ms;
          animation-delay: 3260ms;
}
.circle-container:nth-child(110) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-110;
          animation-name: move-frames-110;
  -webkit-animation-duration: 29303ms;
          animation-duration: 29303ms;
  -webkit-animation-delay: 34370ms;
          animation-delay: 34370ms;
}
@-webkit-keyframes move-frames-110 {
  from {
    transform: translate3d(93vw, 110vh, 0);
  }
  to {
    transform: translate3d(21vw, -127vh, 0);
  }
}
@keyframes move-frames-110 {
  from {
    transform: translate3d(93vw, 110vh, 0);
  }
  to {
    transform: translate3d(21vw, -127vh, 0);
  }
}
.circle-container:nth-child(110) .circle {
  -webkit-animation-delay: 177ms;
          animation-delay: 177ms;
}
.circle-container:nth-child(111) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-111;
          animation-name: move-frames-111;
  -webkit-animation-duration: 34085ms;
          animation-duration: 34085ms;
  -webkit-animation-delay: 16709ms;
          animation-delay: 16709ms;
}
@-webkit-keyframes move-frames-111 {
  from {
    transform: translate3d(74vw, 108vh, 0);
  }
  to {
    transform: translate3d(7vw, -130vh, 0);
  }
}
@keyframes move-frames-111 {
  from {
    transform: translate3d(74vw, 108vh, 0);
  }
  to {
    transform: translate3d(7vw, -130vh, 0);
  }
}
.circle-container:nth-child(111) .circle {
  -webkit-animation-delay: 1260ms;
          animation-delay: 1260ms;
}
.circle-container:nth-child(112) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-112;
          animation-name: move-frames-112;
  -webkit-animation-duration: 28471ms;
          animation-duration: 28471ms;
  -webkit-animation-delay: 7625ms;
          animation-delay: 7625ms;
}
@-webkit-keyframes move-frames-112 {
  from {
    transform: translate3d(88vw, 106vh, 0);
  }
  to {
    transform: translate3d(84vw, -130vh, 0);
  }
}
@keyframes move-frames-112 {
  from {
    transform: translate3d(88vw, 106vh, 0);
  }
  to {
    transform: translate3d(84vw, -130vh, 0);
  }
}
.circle-container:nth-child(112) .circle {
  -webkit-animation-delay: 2866ms;
          animation-delay: 2866ms;
}
.circle-container:nth-child(113) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-113;
          animation-name: move-frames-113;
  -webkit-animation-duration: 32623ms;
          animation-duration: 32623ms;
  -webkit-animation-delay: 36074ms;
          animation-delay: 36074ms;
}
@-webkit-keyframes move-frames-113 {
  from {
    transform: translate3d(57vw, 106vh, 0);
  }
  to {
    transform: translate3d(24vw, -136vh, 0);
  }
}
@keyframes move-frames-113 {
  from {
    transform: translate3d(57vw, 106vh, 0);
  }
  to {
    transform: translate3d(24vw, -136vh, 0);
  }
}
.circle-container:nth-child(113) .circle {
  -webkit-animation-delay: 3545ms;
          animation-delay: 3545ms;
}
.circle-container:nth-child(114) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-114;
          animation-name: move-frames-114;
  -webkit-animation-duration: 31736ms;
          animation-duration: 31736ms;
  -webkit-animation-delay: 13984ms;
          animation-delay: 13984ms;
}
@-webkit-keyframes move-frames-114 {
  from {
    transform: translate3d(27vw, 105vh, 0);
  }
  to {
    transform: translate3d(50vw, -107vh, 0);
  }
}
@keyframes move-frames-114 {
  from {
    transform: translate3d(27vw, 105vh, 0);
  }
  to {
    transform: translate3d(50vw, -107vh, 0);
  }
}
.circle-container:nth-child(114) .circle {
  -webkit-animation-delay: 2347ms;
          animation-delay: 2347ms;
}
.circle-container:nth-child(115) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-115;
          animation-name: move-frames-115;
  -webkit-animation-duration: 33120ms;
          animation-duration: 33120ms;
  -webkit-animation-delay: 1689ms;
          animation-delay: 1689ms;
}
@-webkit-keyframes move-frames-115 {
  from {
    transform: translate3d(17vw, 109vh, 0);
  }
  to {
    transform: translate3d(41vw, -116vh, 0);
  }
}
@keyframes move-frames-115 {
  from {
    transform: translate3d(17vw, 109vh, 0);
  }
  to {
    transform: translate3d(41vw, -116vh, 0);
  }
}
.circle-container:nth-child(115) .circle {
  -webkit-animation-delay: 1886ms;
          animation-delay: 1886ms;
}
.circle-container:nth-child(116) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-116;
          animation-name: move-frames-116;
  -webkit-animation-duration: 29682ms;
          animation-duration: 29682ms;
  -webkit-animation-delay: 7926ms;
          animation-delay: 7926ms;
}
@-webkit-keyframes move-frames-116 {
  from {
    transform: translate3d(82vw, 109vh, 0);
  }
  to {
    transform: translate3d(33vw, -139vh, 0);
  }
}
@keyframes move-frames-116 {
  from {
    transform: translate3d(82vw, 109vh, 0);
  }
  to {
    transform: translate3d(33vw, -139vh, 0);
  }
}
.circle-container:nth-child(116) .circle {
  -webkit-animation-delay: 3305ms;
          animation-delay: 3305ms;
}
.circle-container:nth-child(117) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-117;
          animation-name: move-frames-117;
  -webkit-animation-duration: 29389ms;
          animation-duration: 29389ms;
  -webkit-animation-delay: 25405ms;
          animation-delay: 25405ms;
}
@-webkit-keyframes move-frames-117 {
  from {
    transform: translate3d(91vw, 110vh, 0);
  }
  to {
    transform: translate3d(86vw, -133vh, 0);
  }
}
@keyframes move-frames-117 {
  from {
    transform: translate3d(91vw, 110vh, 0);
  }
  to {
    transform: translate3d(86vw, -133vh, 0);
  }
}
.circle-container:nth-child(117) .circle {
  -webkit-animation-delay: 297ms;
          animation-delay: 297ms;
}
.circle-container:nth-child(118) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-118;
          animation-name: move-frames-118;
  -webkit-animation-duration: 31033ms;
          animation-duration: 31033ms;
  -webkit-animation-delay: 12473ms;
          animation-delay: 12473ms;
}
@-webkit-keyframes move-frames-118 {
  from {
    transform: translate3d(91vw, 108vh, 0);
  }
  to {
    transform: translate3d(3vw, -128vh, 0);
  }
}
@keyframes move-frames-118 {
  from {
    transform: translate3d(91vw, 108vh, 0);
  }
  to {
    transform: translate3d(3vw, -128vh, 0);
  }
}
.circle-container:nth-child(118) .circle {
  -webkit-animation-delay: 1081ms;
          animation-delay: 1081ms;
}
.circle-container:nth-child(119) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-119;
          animation-name: move-frames-119;
  -webkit-animation-duration: 30979ms;
          animation-duration: 30979ms;
  -webkit-animation-delay: 7153ms;
          animation-delay: 7153ms;
}
@-webkit-keyframes move-frames-119 {
  from {
    transform: translate3d(58vw, 108vh, 0);
  }
  to {
    transform: translate3d(94vw, -111vh, 0);
  }
}
@keyframes move-frames-119 {
  from {
    transform: translate3d(58vw, 108vh, 0);
  }
  to {
    transform: translate3d(94vw, -111vh, 0);
  }
}
.circle-container:nth-child(119) .circle {
  -webkit-animation-delay: 2055ms;
          animation-delay: 2055ms;
}
.circle-container:nth-child(120) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-120;
          animation-name: move-frames-120;
  -webkit-animation-duration: 35839ms;
          animation-duration: 35839ms;
  -webkit-animation-delay: 3246ms;
          animation-delay: 3246ms;
}
@-webkit-keyframes move-frames-120 {
  from {
    transform: translate3d(66vw, 107vh, 0);
  }
  to {
    transform: translate3d(79vw, -112vh, 0);
  }
}
@keyframes move-frames-120 {
  from {
    transform: translate3d(66vw, 107vh, 0);
  }
  to {
    transform: translate3d(79vw, -112vh, 0);
  }
}
.circle-container:nth-child(120) .circle {
  -webkit-animation-delay: 3315ms;
          animation-delay: 3315ms;
}
.circle-container:nth-child(121) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-121;
          animation-name: move-frames-121;
  -webkit-animation-duration: 30188ms;
          animation-duration: 30188ms;
  -webkit-animation-delay: 8229ms;
          animation-delay: 8229ms;
}
@-webkit-keyframes move-frames-121 {
  from {
    transform: translate3d(54vw, 106vh, 0);
  }
  to {
    transform: translate3d(96vw, -126vh, 0);
  }
}
@keyframes move-frames-121 {
  from {
    transform: translate3d(54vw, 106vh, 0);
  }
  to {
    transform: translate3d(96vw, -126vh, 0);
  }
}
.circle-container:nth-child(121) .circle {
  -webkit-animation-delay: 122ms;
          animation-delay: 122ms;
}
.circle-container:nth-child(122) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-122;
          animation-name: move-frames-122;
  -webkit-animation-duration: 30180ms;
          animation-duration: 30180ms;
  -webkit-animation-delay: 19756ms;
          animation-delay: 19756ms;
}
@-webkit-keyframes move-frames-122 {
  from {
    transform: translate3d(13vw, 108vh, 0);
  }
  to {
    transform: translate3d(3vw, -133vh, 0);
  }
}
@keyframes move-frames-122 {
  from {
    transform: translate3d(13vw, 108vh, 0);
  }
  to {
    transform: translate3d(3vw, -133vh, 0);
  }
}
.circle-container:nth-child(122) .circle {
  -webkit-animation-delay: 3484ms;
          animation-delay: 3484ms;
}
.circle-container:nth-child(123) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-123;
          animation-name: move-frames-123;
  -webkit-animation-duration: 36473ms;
          animation-duration: 36473ms;
  -webkit-animation-delay: 29991ms;
          animation-delay: 29991ms;
}
@-webkit-keyframes move-frames-123 {
  from {
    transform: translate3d(37vw, 107vh, 0);
  }
  to {
    transform: translate3d(94vw, -136vh, 0);
  }
}
@keyframes move-frames-123 {
  from {
    transform: translate3d(37vw, 107vh, 0);
  }
  to {
    transform: translate3d(94vw, -136vh, 0);
  }
}
.circle-container:nth-child(123) .circle {
  -webkit-animation-delay: 3097ms;
          animation-delay: 3097ms;
}
.circle-container:nth-child(124) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-124;
          animation-name: move-frames-124;
  -webkit-animation-duration: 30886ms;
          animation-duration: 30886ms;
  -webkit-animation-delay: 4752ms;
          animation-delay: 4752ms;
}
@-webkit-keyframes move-frames-124 {
  from {
    transform: translate3d(99vw, 101vh, 0);
  }
  to {
    transform: translate3d(62vw, -127vh, 0);
  }
}
@keyframes move-frames-124 {
  from {
    transform: translate3d(99vw, 101vh, 0);
  }
  to {
    transform: translate3d(62vw, -127vh, 0);
  }
}
.circle-container:nth-child(124) .circle {
  -webkit-animation-delay: 3975ms;
          animation-delay: 3975ms;
}
.circle-container:nth-child(125) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-125;
          animation-name: move-frames-125;
  -webkit-animation-duration: 33590ms;
          animation-duration: 33590ms;
  -webkit-animation-delay: 22751ms;
          animation-delay: 22751ms;
}
@-webkit-keyframes move-frames-125 {
  from {
    transform: translate3d(71vw, 104vh, 0);
  }
  to {
    transform: translate3d(13vw, -110vh, 0);
  }
}
@keyframes move-frames-125 {
  from {
    transform: translate3d(71vw, 104vh, 0);
  }
  to {
    transform: translate3d(13vw, -110vh, 0);
  }
}
.circle-container:nth-child(125) .circle {
  -webkit-animation-delay: 532ms;
          animation-delay: 532ms;
}
.circle-container:nth-child(126) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-126;
          animation-name: move-frames-126;
  -webkit-animation-duration: 29944ms;
          animation-duration: 29944ms;
  -webkit-animation-delay: 2050ms;
          animation-delay: 2050ms;
}
@-webkit-keyframes move-frames-126 {
  from {
    transform: translate3d(44vw, 103vh, 0);
  }
  to {
    transform: translate3d(4vw, -124vh, 0);
  }
}
@keyframes move-frames-126 {
  from {
    transform: translate3d(44vw, 103vh, 0);
  }
  to {
    transform: translate3d(4vw, -124vh, 0);
  }
}
.circle-container:nth-child(126) .circle {
  -webkit-animation-delay: 43ms;
          animation-delay: 43ms;
}
.circle-container:nth-child(127) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-127;
          animation-name: move-frames-127;
  -webkit-animation-duration: 29168ms;
          animation-duration: 29168ms;
  -webkit-animation-delay: 32592ms;
          animation-delay: 32592ms;
}
@-webkit-keyframes move-frames-127 {
  from {
    transform: translate3d(56vw, 110vh, 0);
  }
  to {
    transform: translate3d(60vw, -126vh, 0);
  }
}
@keyframes move-frames-127 {
  from {
    transform: translate3d(56vw, 110vh, 0);
  }
  to {
    transform: translate3d(60vw, -126vh, 0);
  }
}
.circle-container:nth-child(127) .circle {
  -webkit-animation-delay: 2129ms;
          animation-delay: 2129ms;
}
.circle-container:nth-child(128) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-128;
          animation-name: move-frames-128;
  -webkit-animation-duration: 32482ms;
          animation-duration: 32482ms;
  -webkit-animation-delay: 31539ms;
          animation-delay: 31539ms;
}
@-webkit-keyframes move-frames-128 {
  from {
    transform: translate3d(93vw, 107vh, 0);
  }
  to {
    transform: translate3d(5vw, -131vh, 0);
  }
}
@keyframes move-frames-128 {
  from {
    transform: translate3d(93vw, 107vh, 0);
  }
  to {
    transform: translate3d(5vw, -131vh, 0);
  }
}
.circle-container:nth-child(128) .circle {
  -webkit-animation-delay: 290ms;
          animation-delay: 290ms;
}
.circle-container:nth-child(129) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-129;
          animation-name: move-frames-129;
  -webkit-animation-duration: 30476ms;
          animation-duration: 30476ms;
  -webkit-animation-delay: 18727ms;
          animation-delay: 18727ms;
}
@-webkit-keyframes move-frames-129 {
  from {
    transform: translate3d(2vw, 101vh, 0);
  }
  to {
    transform: translate3d(81vw, -131vh, 0);
  }
}
@keyframes move-frames-129 {
  from {
    transform: translate3d(2vw, 101vh, 0);
  }
  to {
    transform: translate3d(81vw, -131vh, 0);
  }
}
.circle-container:nth-child(129) .circle {
  -webkit-animation-delay: 3544ms;
          animation-delay: 3544ms;
}
.circle-container:nth-child(130) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-130;
          animation-name: move-frames-130;
  -webkit-animation-duration: 29293ms;
          animation-duration: 29293ms;
  -webkit-animation-delay: 15969ms;
          animation-delay: 15969ms;
}
@-webkit-keyframes move-frames-130 {
  from {
    transform: translate3d(76vw, 104vh, 0);
  }
  to {
    transform: translate3d(8vw, -126vh, 0);
  }
}
@keyframes move-frames-130 {
  from {
    transform: translate3d(76vw, 104vh, 0);
  }
  to {
    transform: translate3d(8vw, -126vh, 0);
  }
}
.circle-container:nth-child(130) .circle {
  -webkit-animation-delay: 2205ms;
          animation-delay: 2205ms;
}
.circle-container:nth-child(131) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-131;
          animation-name: move-frames-131;
  -webkit-animation-duration: 36827ms;
          animation-duration: 36827ms;
  -webkit-animation-delay: 32526ms;
          animation-delay: 32526ms;
}
@-webkit-keyframes move-frames-131 {
  from {
    transform: translate3d(77vw, 104vh, 0);
  }
  to {
    transform: translate3d(70vw, -123vh, 0);
  }
}
@keyframes move-frames-131 {
  from {
    transform: translate3d(77vw, 104vh, 0);
  }
  to {
    transform: translate3d(70vw, -123vh, 0);
  }
}
.circle-container:nth-child(131) .circle {
  -webkit-animation-delay: 3419ms;
          animation-delay: 3419ms;

}
.circle-container:nth-child(132) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-132;
          animation-name: move-frames-132;
  -webkit-animation-duration: 30148ms;
          animation-duration: 30148ms;
  -webkit-animation-delay: 3686ms;
          animation-delay: 3686ms;
}
@-webkit-keyframes move-frames-132 {
  from {
    transform: translate3d(83vw, 105vh, 0);
  }
  to {
    transform: translate3d(77vw, -123vh, 0);
  }
}
@keyframes move-frames-132 {
  from {
    transform: translate3d(83vw, 105vh, 0);
  }
  to {
    transform: translate3d(77vw, -123vh, 0);
  }
}
.circle-container:nth-child(132) .circle {
  -webkit-animation-delay: 1033ms;
          animation-delay: 1033ms;
}
.circle-container:nth-child(133) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-133;
          animation-name: move-frames-133;
  -webkit-animation-duration: 33525ms;
          animation-duration: 33525ms;
  -webkit-animation-delay: 28690ms;
          animation-delay: 28690ms;
}
@-webkit-keyframes move-frames-133 {
  from {
    transform: translate3d(4vw, 109vh, 0);
  }
  to {
    transform: translate3d(99vw, -138vh, 0);
  }
}
@keyframes move-frames-133 {
  from {
    transform: translate3d(4vw, 109vh, 0);
  }
  to {
    transform: translate3d(99vw, -138vh, 0);
  }
}
.circle-container:nth-child(133) .circle {
  -webkit-animation-delay: 734ms;
          animation-delay: 734ms;
}
.circle-container:nth-child(134) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-134;
          animation-name: move-frames-134;
  -webkit-animation-duration: 35042ms;
          animation-duration: 35042ms;
  -webkit-animation-delay: 5337ms;
          animation-delay: 5337ms;
}
@-webkit-keyframes move-frames-134 {
  from {
    transform: translate3d(89vw, 106vh, 0);
  }
  to {
    transform: translate3d(95vw, -118vh, 0);
  }
}
@keyframes move-frames-134 {
  from {
    transform: translate3d(89vw, 106vh, 0);
  }
  to {
    transform: translate3d(95vw, -118vh, 0);
  }
}
.circle-container:nth-child(134) .circle {
  -webkit-animation-delay: 39ms;
          animation-delay: 39ms;
}
.circle-container:nth-child(135) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-135;
          animation-name: move-frames-135;
  -webkit-animation-duration: 36671ms;
          animation-duration: 36671ms;
  -webkit-animation-delay: 27026ms;
          animation-delay: 27026ms;
}
@-webkit-keyframes move-frames-135 {
  from {
    transform: translate3d(41vw, 101vh, 0);
  }
  to {
    transform: translate3d(54vw, -128vh, 0);
  }
}
@keyframes move-frames-135 {
  from {
    transform: translate3d(41vw, 101vh, 0);
  }
  to {
    transform: translate3d(54vw, -128vh, 0);
  }
}
.circle-container:nth-child(135) .circle {
  -webkit-animation-delay: 3888ms;
          animation-delay: 3888ms;
}
.circle-container:nth-child(136) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-136;
          animation-name: move-frames-136;
  -webkit-animation-duration: 35194ms;
          animation-duration: 35194ms;
  -webkit-animation-delay: 23263ms;
          animation-delay: 23263ms;
}
@-webkit-keyframes move-frames-136 {
  from {
    transform: translate3d(46vw, 110vh, 0);
  }
  to {
    transform: translate3d(20vw, -120vh, 0);
  }
}
@keyframes move-frames-136 {
  from {
    transform: translate3d(46vw, 110vh, 0);
  }
  to {
    transform: translate3d(20vw, -120vh, 0);
  }
}
.circle-container:nth-child(136) .circle {
  -webkit-animation-delay: 1743ms;
          animation-delay: 1743ms;
}
.circle-container:nth-child(137) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-137;
          animation-name: move-frames-137;
  -webkit-animation-duration: 32691ms;
          animation-duration: 32691ms;
  -webkit-animation-delay: 25784ms;
          animation-delay: 25784ms;
}
@-webkit-keyframes move-frames-137 {
  from {
    transform: translate3d(52vw, 104vh, 0);
  }
  to {
    transform: translate3d(73vw, -115vh, 0);
  }
}
@keyframes move-frames-137 {
  from {
    transform: translate3d(52vw, 104vh, 0);
  }
  to {
    transform: translate3d(73vw, -115vh, 0);
  }
}
.circle-container:nth-child(137) .circle {
  -webkit-animation-delay: 3976ms;
          animation-delay: 3976ms;
}
.circle-container:nth-child(138) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-138;
          animation-name: move-frames-138;
  -webkit-animation-duration: 33313ms;
          animation-duration: 33313ms;
  -webkit-animation-delay: 22031ms;
          animation-delay: 22031ms;
}
@-webkit-keyframes move-frames-138 {
  from {
    transform: translate3d(87vw, 106vh, 0);
  }
  to {
    transform: translate3d(14vw, -112vh, 0);
  }
}
@keyframes move-frames-138 {
  from {
    transform: translate3d(87vw, 106vh, 0);
  }
  to {
    transform: translate3d(14vw, -112vh, 0);
  }
}
.circle-container:nth-child(138) .circle {
  -webkit-animation-delay: 1091ms;
          animation-delay: 1091ms;
}
.circle-container:nth-child(139) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-139;
          animation-name: move-frames-139;
  -webkit-animation-duration: 28984ms;
          animation-duration: 28984ms;
  -webkit-animation-delay: 30701ms;
          animation-delay: 30701ms;
}
@-webkit-keyframes move-frames-139 {
  from {
    transform: translate3d(82vw, 101vh, 0);
  }
  to {
    transform: translate3d(86vw, -127vh, 0);
  }
}
@keyframes move-frames-139 {
  from {
    transform: translate3d(82vw, 101vh, 0);
  }
  to {
    transform: translate3d(86vw, -127vh, 0);
  }
}
.circle-container:nth-child(139) .circle {
  -webkit-animation-delay: 1552ms;
          animation-delay: 1552ms;
}
.circle-container:nth-child(140) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-140;
          animation-name: move-frames-140;
  -webkit-animation-duration: 36487ms;
          animation-duration: 36487ms;
  -webkit-animation-delay: 25593ms;
          animation-delay: 25593ms;
}
@-webkit-keyframes move-frames-140 {
  from {
    transform: translate3d(47vw, 104vh, 0);
  }
  to {
    transform: translate3d(38vw, -105vh, 0);
  }
}
@keyframes move-frames-140 {
  from {
    transform: translate3d(47vw, 104vh, 0);
  }
  to {
    transform: translate3d(38vw, -105vh, 0);
  }
}
.circle-container:nth-child(140) .circle {
  -webkit-animation-delay: 2318ms;
          animation-delay: 2318ms;
}
.circle-container:nth-child(141) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-141;
          animation-name: move-frames-141;
  -webkit-animation-duration: 32391ms;
          animation-duration: 32391ms;
  -webkit-animation-delay: 35458ms;
          animation-delay: 35458ms;
}
@-webkit-keyframes move-frames-141 {
  from {
    transform: translate3d(11vw, 109vh, 0);
  }
  to {
    transform: translate3d(77vw, -115vh, 0);
  }
}
@keyframes move-frames-141 {
  from {
    transform: translate3d(11vw, 109vh, 0);
  }
  to {
    transform: translate3d(77vw, -115vh, 0);
  }
}
.circle-container:nth-child(141) .circle {
  -webkit-animation-delay: 698ms;
          animation-delay: 698ms;
}
.circle-container:nth-child(142) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-142;
          animation-name: move-frames-142;
  -webkit-animation-duration: 36553ms;
          animation-duration: 36553ms;
  -webkit-animation-delay: 9196ms;
          animation-delay: 9196ms;
}
@-webkit-keyframes move-frames-142 {
  from {
    transform: translate3d(18vw, 108vh, 0);
  }
  to {
    transform: translate3d(54vw, -128vh, 0);
  }
}
@keyframes move-frames-142 {
  from {
    transform: translate3d(18vw, 108vh, 0);
  }
  to {
    transform: translate3d(54vw, -128vh, 0);
  }
}
.circle-container:nth-child(142) .circle {
  -webkit-animation-delay: 670ms;
          animation-delay: 670ms;
}
.circle-container:nth-child(143) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-143;
          animation-name: move-frames-143;
  -webkit-animation-duration: 32541ms;
          animation-duration: 32541ms;
  -webkit-animation-delay: 9641ms;
          animation-delay: 9641ms;
}
@-webkit-keyframes move-frames-143 {
  from {
    transform: translate3d(51vw, 109vh, 0);
  }
  to {
    transform: translate3d(13vw, -130vh, 0);
  }
}
@keyframes move-frames-143 {
  from {
    transform: translate3d(51vw, 109vh, 0);
  }
  to {
    transform: translate3d(13vw, -130vh, 0);
  }
}
.circle-container:nth-child(143) .circle {
  -webkit-animation-delay: 116ms;
          animation-delay: 116ms;
}
.circle-container:nth-child(144) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-144;
          animation-name: move-frames-144;
  -webkit-animation-duration: 35359ms;
          animation-duration: 35359ms;
  -webkit-animation-delay: 35527ms;
          animation-delay: 35527ms;
}
@-webkit-keyframes move-frames-144 {
  from {
    transform: translate3d(7vw, 109vh, 0);
  }
  to {
    transform: translate3d(85vw, -130vh, 0);
  }
}
@keyframes move-frames-144 {
  from {
    transform: translate3d(7vw, 109vh, 0);
  }
  to {
    transform: translate3d(85vw, -130vh, 0);
  }
}
.circle-container:nth-child(144) .circle {
  -webkit-animation-delay: 1812ms;
          animation-delay: 1812ms;
}
.circle-container:nth-child(145) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-145;
          animation-name: move-frames-145;
  -webkit-animation-duration: 33520ms;
          animation-duration: 33520ms;
  -webkit-animation-delay: 18469ms;
          animation-delay: 18469ms;
}
@-webkit-keyframes move-frames-145 {
  from {
    transform: translate3d(71vw, 110vh, 0);
  }
  to {
    transform: translate3d(42vw, -115vh, 0);
  }
}
@keyframes move-frames-145 {
  from {
    transform: translate3d(71vw, 110vh, 0);
  }
  to {
    transform: translate3d(42vw, -115vh, 0);
  }
}
.circle-container:nth-child(145) .circle {
  -webkit-animation-delay: 3461ms;
          animation-delay: 3461ms;
}
.circle-container:nth-child(146) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-146;
          animation-name: move-frames-146;
  -webkit-animation-duration: 31185ms;
          animation-duration: 31185ms;
  -webkit-animation-delay: 22419ms;
          animation-delay: 22419ms;
}
@-webkit-keyframes move-frames-146 {
  from {
    transform: translate3d(72vw, 101vh, 0);
  }
  to {
    transform: translate3d(49vw, -103vh, 0);
  }
}
@keyframes move-frames-146 {
  from {
    transform: translate3d(72vw, 101vh, 0);
  }
  to {
    transform: translate3d(49vw, -103vh, 0);
  }
}
.circle-container:nth-child(146) .circle {
  -webkit-animation-delay: 2944ms;
          animation-delay: 2944ms;
}
.circle-container:nth-child(147) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-147;
          animation-name: move-frames-147;
  -webkit-animation-duration: 34810ms;
          animation-duration: 34810ms;
  -webkit-animation-delay: 15694ms;
          animation-delay: 15694ms;
}
@-webkit-keyframes move-frames-147 {
  from {
    transform: translate3d(9vw, 109vh, 0);
  }
  to {
    transform: translate3d(42vw, -119vh, 0);
  }
}
@keyframes move-frames-147 {
  from {
    transform: translate3d(9vw, 109vh, 0);
  }
  to {
    transform: translate3d(42vw, -119vh, 0);
  }
}
.circle-container:nth-child(147) .circle {
  -webkit-animation-delay: 1209ms;
          animation-delay: 1209ms;
}
.circle-container:nth-child(148) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-148;
          animation-name: move-frames-148;
  -webkit-animation-duration: 28760ms;
          animation-duration: 28760ms;
  -webkit-animation-delay: 32183ms;
          animation-delay: 32183ms;
}
@-webkit-keyframes move-frames-148 {
  from {
    transform: translate3d(96vw, 106vh, 0);
  }
  to {
    transform: translate3d(26vw, -132vh, 0);
  }
}
@keyframes move-frames-148 {
  from {
    transform: translate3d(96vw, 106vh, 0);
  }
  to {
    transform: translate3d(26vw, -132vh, 0);
  }
}
.circle-container:nth-child(148) .circle {
  -webkit-animation-delay: 2410ms;
          animation-delay: 2410ms;
}
.circle-container:nth-child(149) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-149;
          animation-name: move-frames-149;
  -webkit-animation-duration: 34384ms;
          animation-duration: 34384ms;
  -webkit-animation-delay: 2812ms;
          animation-delay: 2812ms;
}
@-webkit-keyframes move-frames-149 {
  from {
    transform: translate3d(33vw, 103vh, 0);
  }
  to {
    transform: translate3d(11vw, -127vh, 0);
  }
}
@keyframes move-frames-149 {
  from {
    transform: translate3d(33vw, 103vh, 0);
  }
  to {
    transform: translate3d(11vw, -127vh, 0);
  }
}
.circle-container:nth-child(149) .circle {
  -webkit-animation-delay: 3139ms;
          animation-delay: 3139ms;
}
.circle-container:nth-child(150) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-150;
          animation-name: move-frames-150;
  -webkit-animation-duration: 35128ms;
          animation-duration: 35128ms;
  -webkit-animation-delay: 35347ms;
          animation-delay: 35347ms;
}
@-webkit-keyframes move-frames-150 {
  from {
    transform: translate3d(41vw, 110vh, 0);
  }
  to {
    transform: translate3d(24vw, -136vh, 0);
  }
}
@keyframes move-frames-150 {
  from {
    transform: translate3d(41vw, 110vh, 0);
  }
  to {
    transform: translate3d(24vw, -136vh, 0);
  }
}
.circle-container:nth-child(150) .circle {
  -webkit-animation-delay: 2705ms;
          animation-delay: 2705ms;
}
.circle-container:nth-child(151) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-151;
          animation-name: move-frames-151;
  -webkit-animation-duration: 35237ms;
          animation-duration: 35237ms;
  -webkit-animation-delay: 14834ms;
          animation-delay: 14834ms;
}
@-webkit-keyframes move-frames-151 {
  from {
    transform: translate3d(32vw, 108vh, 0);
  }
  to {
    transform: translate3d(85vw, -123vh, 0);
  }
}
@keyframes move-frames-151 {
  from {
    transform: translate3d(32vw, 108vh, 0);
  }
  to {
    transform: translate3d(85vw, -123vh, 0);
  }
}
.circle-container:nth-child(151) .circle {
  -webkit-animation-delay: 993ms;
          animation-delay: 993ms;
}
.circle-container:nth-child(152) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-152;
          animation-name: move-frames-152;
  -webkit-animation-duration: 34246ms;
          animation-duration: 34246ms;
  -webkit-animation-delay: 1164ms;
          animation-delay: 1164ms;
}
@-webkit-keyframes move-frames-152 {
  from {
    transform: translate3d(99vw, 110vh, 0);
  }
  to {
    transform: translate3d(58vw, -121vh, 0);
  }
}
@keyframes move-frames-152 {
  from {
    transform: translate3d(99vw, 110vh, 0);
  }
  to {
    transform: translate3d(58vw, -121vh, 0);
  }
}
.circle-container:nth-child(152) .circle {
  -webkit-animation-delay: 2186ms;
          animation-delay: 2186ms;
}
.circle-container:nth-child(153) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-153;
          animation-name: move-frames-153;
  -webkit-animation-duration: 33589ms;
          animation-duration: 33589ms;
  -webkit-animation-delay: 9334ms;
          animation-delay: 9334ms;
}
@-webkit-keyframes move-frames-153 {
  from {
    transform: translate3d(67vw, 105vh, 0);
  }
  to {
    transform: translate3d(15vw, -131vh, 0);
  }
}
@keyframes move-frames-153 {
  from {
    transform: translate3d(67vw, 105vh, 0);
  }
  to {
    transform: translate3d(15vw, -131vh, 0);
  }
}
.circle-container:nth-child(153) .circle {
  -webkit-animation-delay: 577ms;
          animation-delay: 577ms;
}
.circle-container:nth-child(154) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-154;
          animation-name: move-frames-154;
  -webkit-animation-duration: 35952ms;
          animation-duration: 35952ms;
  -webkit-animation-delay: 6952ms;
          animation-delay: 6952ms;
}
@-webkit-keyframes move-frames-154 {
  from {
    transform: translate3d(64vw, 110vh, 0);
  }
  to {
    transform: translate3d(49vw, -131vh, 0);
  }
}
@keyframes move-frames-154 {
  from {
    transform: translate3d(64vw, 110vh, 0);
  }
  to {
    transform: translate3d(49vw, -131vh, 0);
  }
}
.circle-container:nth-child(154) .circle {
  -webkit-animation-delay: 1171ms;
          animation-delay: 1171ms;
}
.circle-container:nth-child(155) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-155;
          animation-name: move-frames-155;
  -webkit-animation-duration: 36092ms;
          animation-duration: 36092ms;
  -webkit-animation-delay: 8776ms;
          animation-delay: 8776ms;
}
@-webkit-keyframes move-frames-155 {
  from {
    transform: translate3d(56vw, 101vh, 0);
  }
  to {
    transform: translate3d(69vw, -117vh, 0);
  }
}
@keyframes move-frames-155 {
  from {
    transform: translate3d(56vw, 101vh, 0);
  }
  to {
    transform: translate3d(69vw, -117vh, 0);
  }
}
.circle-container:nth-child(155) .circle {
  -webkit-animation-delay: 3697ms;
          animation-delay: 3697ms;
}
.circle-container:nth-child(156) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-156;
          animation-name: move-frames-156;
  -webkit-animation-duration: 35985ms;
          animation-duration: 35985ms;
  -webkit-animation-delay: 30469ms;
          animation-delay: 30469ms;
}
@-webkit-keyframes move-frames-156 {
  from {
    transform: translate3d(78vw, 104vh, 0);
  }
  to {
    transform: translate3d(51vw, -112vh, 0);
  }
}
@keyframes move-frames-156 {
  from {
    transform: translate3d(78vw, 104vh, 0);
  }
  to {
    transform: translate3d(51vw, -112vh, 0);
  }
}
.circle-container:nth-child(156) .circle {
  -webkit-animation-delay: 3854ms;
          animation-delay: 3854ms;
}
.circle-container:nth-child(157) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-157;
          animation-name: move-frames-157;
  -webkit-animation-duration: 32381ms;
          animation-duration: 32381ms;
  -webkit-animation-delay: 35559ms;
          animation-delay: 35559ms;
}
@-webkit-keyframes move-frames-157 {
  from {
    transform: translate3d(65vw, 102vh, 0);
  }
  to {
    transform: translate3d(64vw, -123vh, 0);
  }
}
@keyframes move-frames-157 {
  from {
    transform: translate3d(65vw, 102vh, 0);
  }
  to {
    transform: translate3d(64vw, -123vh, 0);
  }
}
.circle-container:nth-child(157) .circle {
  -webkit-animation-delay: 1472ms;
          animation-delay: 1472ms;
}
.circle-container:nth-child(158) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-158;
          animation-name: move-frames-158;
  -webkit-animation-duration: 31520ms;
          animation-duration: 31520ms;
  -webkit-animation-delay: 34979ms;
          animation-delay: 34979ms;
}
@-webkit-keyframes move-frames-158 {
  from {
    transform: translate3d(38vw, 107vh, 0);
  }
  to {
    transform: translate3d(54vw, -114vh, 0);
  }
}
@keyframes move-frames-158 {
  from {
    transform: translate3d(38vw, 107vh, 0);
  }
  to {
    transform: translate3d(54vw, -114vh, 0);
  }
}
.circle-container:nth-child(158) .circle {
  -webkit-animation-delay: 2241ms;
          animation-delay: 2241ms;
}
.circle-container:nth-child(159) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-159;
          animation-name: move-frames-159;
  -webkit-animation-duration: 32239ms;
          animation-duration: 32239ms;
  -webkit-animation-delay: 32869ms;
          animation-delay: 32869ms;
}
@-webkit-keyframes move-frames-159 {
  from {
    transform: translate3d(81vw, 102vh, 0);
  }
  to {
    transform: translate3d(16vw, -109vh, 0);
  }
}
@keyframes move-frames-159 {
  from {
    transform: translate3d(81vw, 102vh, 0);
  }
  to {
    transform: translate3d(16vw, -109vh, 0);
  }
}
.circle-container:nth-child(159) .circle {
  -webkit-animation-delay: 3489ms;
          animation-delay: 3489ms;
}
.circle-container:nth-child(160) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-160;
          animation-name: move-frames-160;
  -webkit-animation-duration: 33363ms;
          animation-duration: 33363ms;
  -webkit-animation-delay: 19201ms;
          animation-delay: 19201ms;
}
@-webkit-keyframes move-frames-160 {
  from {
    transform: translate3d(48vw, 104vh, 0);
  }
  to {
    transform: translate3d(82vw, -118vh, 0);
  }
}
@keyframes move-frames-160 {
  from {
    transform: translate3d(48vw, 104vh, 0);
  }
  to {
    transform: translate3d(82vw, -118vh, 0);
  }
}
.circle-container:nth-child(160) .circle {
  -webkit-animation-delay: 1784ms;
          animation-delay: 1784ms;
}
.circle-container:nth-child(161) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-161;
          animation-name: move-frames-161;
  -webkit-animation-duration: 31283ms;
          animation-duration: 31283ms;
  -webkit-animation-delay: 16261ms;
          animation-delay: 16261ms;
}
@-webkit-keyframes move-frames-161 {
  from {
    transform: translate3d(60vw, 109vh, 0);
  }
  to {
    transform: translate3d(87vw, -118vh, 0);
  }
}
@keyframes move-frames-161 {
  from {
    transform: translate3d(60vw, 109vh, 0);
  }
  to {
    transform: translate3d(87vw, -118vh, 0);
  }
}
.circle-container:nth-child(161) .circle {
  -webkit-animation-delay: 3457ms;
          animation-delay: 3457ms;
}
.circle-container:nth-child(162) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-162;
          animation-name: move-frames-162;
  -webkit-animation-duration: 29295ms;
          animation-duration: 29295ms;
  -webkit-animation-delay: 32110ms;
          animation-delay: 32110ms;
}
@-webkit-keyframes move-frames-162 {
  from {
    transform: translate3d(14vw, 103vh, 0);
  }
  to {
    transform: translate3d(49vw, -127vh, 0);
  }
}
@keyframes move-frames-162 {
  from {
    transform: translate3d(14vw, 103vh, 0);
  }
  to {
    transform: translate3d(49vw, -127vh, 0);
  }
}
.circle-container:nth-child(162) .circle {
  -webkit-animation-delay: 1855ms;
          animation-delay: 1855ms;
}
.circle-container:nth-child(163) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-163;
          animation-name: move-frames-163;
  -webkit-animation-duration: 36239ms;
          animation-duration: 36239ms;
  -webkit-animation-delay: 5659ms;
          animation-delay: 5659ms;
}
@-webkit-keyframes move-frames-163 {
  from {
    transform: translate3d(89vw, 102vh, 0);
  }
  to {
    transform: translate3d(2vw, -111vh, 0);
  }
}
@keyframes move-frames-163 {
  from {
    transform: translate3d(89vw, 102vh, 0);
  }
  to {
    transform: translate3d(2vw, -111vh, 0);
  }
}
.circle-container:nth-child(163) .circle {
  -webkit-animation-delay: 3064ms;
          animation-delay: 3064ms;
}
.circle-container:nth-child(164) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-164;
          animation-name: move-frames-164;
  -webkit-animation-duration: 29604ms;
          animation-duration: 29604ms;
  -webkit-animation-delay: 6524ms;
          animation-delay: 6524ms;
}
@-webkit-keyframes move-frames-164 {
  from {
    transform: translate3d(67vw, 103vh, 0);
  }
  to {
    transform: translate3d(41vw, -126vh, 0);
  }
}
@keyframes move-frames-164 {
  from {
    transform: translate3d(67vw, 103vh, 0);
  }
  to {
    transform: translate3d(41vw, -126vh, 0);
  }
}
.circle-container:nth-child(164) .circle {
  -webkit-animation-delay: 1638ms;
          animation-delay: 1638ms;
}
.circle-container:nth-child(165) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-165;
          animation-name: move-frames-165;
  -webkit-animation-duration: 32357ms;
          animation-duration: 32357ms;
  -webkit-animation-delay: 28517ms;
          animation-delay: 28517ms;
}
@-webkit-keyframes move-frames-165 {
  from {
    transform: translate3d(91vw, 107vh, 0);
  }
  to {
    transform: translate3d(27vw, -112vh, 0);
  }
}
@keyframes move-frames-165 {
  from {
    transform: translate3d(91vw, 107vh, 0);
  }
  to {
    transform: translate3d(27vw, -112vh, 0);
  }
}
.circle-container:nth-child(165) .circle {
  -webkit-animation-delay: 3259ms;
          animation-delay: 3259ms;
}
.circle-container:nth-child(166) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-166;
          animation-name: move-frames-166;
  -webkit-animation-duration: 33852ms;
          animation-duration: 33852ms;
  -webkit-animation-delay: 21836ms;
          animation-delay: 21836ms;
}
@-webkit-keyframes move-frames-166 {
  from {
    transform: translate3d(66vw, 103vh, 0);
  }
  to {
    transform: translate3d(13vw, -112vh, 0);
  }
}
@keyframes move-frames-166 {
  from {
    transform: translate3d(66vw, 103vh, 0);
  }
  to {
    transform: translate3d(13vw, -112vh, 0);
  }
}
.circle-container:nth-child(166) .circle {
  -webkit-animation-delay: 1804ms;
          animation-delay: 1804ms;
}
.circle-container:nth-child(167) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-167;
          animation-name: move-frames-167;
  -webkit-animation-duration: 35044ms;
          animation-duration: 35044ms;
  -webkit-animation-delay: 19325ms;
          animation-delay: 19325ms;
}
@-webkit-keyframes move-frames-167 {
  from {
    transform: translate3d(53vw, 109vh, 0);
  }
  to {
    transform: translate3d(59vw, -134vh, 0);
  }
}
@keyframes move-frames-167 {
  from {
    transform: translate3d(53vw, 109vh, 0);
  }
  to {
    transform: translate3d(59vw, -134vh, 0);
  }
}
.circle-container:nth-child(167) .circle {
  -webkit-animation-delay: 319ms;
          animation-delay: 319ms;
}
.circle-container:nth-child(168) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-168;
          animation-name: move-frames-168;
  -webkit-animation-duration: 32149ms;
          animation-duration: 32149ms;
  -webkit-animation-delay: 27396ms;
          animation-delay: 27396ms;
}
@-webkit-keyframes move-frames-168 {
  from {
    transform: translate3d(81vw, 105vh, 0);
  }
  to {
    transform: translate3d(21vw, -123vh, 0);
  }
}
@keyframes move-frames-168 {
  from {
    transform: translate3d(81vw, 105vh, 0);
  }
  to {
    transform: translate3d(21vw, -123vh, 0);
  }
}
.circle-container:nth-child(168) .circle {
  -webkit-animation-delay: 3536ms;
          animation-delay: 3536ms;
}
.circle-container:nth-child(169) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-169;
          animation-name: move-frames-169;
  -webkit-animation-duration: 28300ms;
          animation-duration: 28300ms;
  -webkit-animation-delay: 30095ms;
          animation-delay: 30095ms;
}
@-webkit-keyframes move-frames-169 {
  from {
    transform: translate3d(50vw, 105vh, 0);
  }
  to {
    transform: translate3d(94vw, -130vh, 0);
  }
}
@keyframes move-frames-169 {
  from {
    transform: translate3d(50vw, 105vh, 0);
  }
  to {
    transform: translate3d(94vw, -130vh, 0);
  }
}
.circle-container:nth-child(169) .circle {
  -webkit-animation-delay: 2611ms;
          animation-delay: 2611ms;
}
.circle-container:nth-child(170) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-170;
          animation-name: move-frames-170;
  -webkit-animation-duration: 31157ms;
          animation-duration: 31157ms;
  -webkit-animation-delay: 20068ms;
          animation-delay: 20068ms;
}
@-webkit-keyframes move-frames-170 {
  from {
    transform: translate3d(35vw, 104vh, 0);
  }
  to {
    transform: translate3d(54vw, -124vh, 0);
  }
}
@keyframes move-frames-170 {
  from {
    transform: translate3d(35vw, 104vh, 0);
  }
  to {
    transform: translate3d(54vw, -124vh, 0);
  }
}
.circle-container:nth-child(170) .circle {
  -webkit-animation-delay: 2940ms;
          animation-delay: 2940ms;
}
.circle-container:nth-child(171) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-171;
          animation-name: move-frames-171;
  -webkit-animation-duration: 34879ms;
          animation-duration: 34879ms;
  -webkit-animation-delay: 653ms;
          animation-delay: 653ms;
}
@-webkit-keyframes move-frames-171 {
  from {
    transform: translate3d(29vw, 108vh, 0);
  }
  to {
    transform: translate3d(99vw, -123vh, 0);
  }
}
@keyframes move-frames-171 {
  from {
    transform: translate3d(29vw, 108vh, 0);
  }
  to {
    transform: translate3d(99vw, -123vh, 0);
  }
}
.circle-container:nth-child(171) .circle {
  -webkit-animation-delay: 1047ms;
          animation-delay: 1047ms;
}
.circle-container:nth-child(172) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-172;
          animation-name: move-frames-172;
  -webkit-animation-duration: 32115ms;
          animation-duration: 32115ms;
  -webkit-animation-delay: 6073ms;
          animation-delay: 6073ms;
}
@-webkit-keyframes move-frames-172 {
  from {
    transform: translate3d(22vw, 110vh, 0);
  }
  to {
    transform: translate3d(61vw, -117vh, 0);
  }
}
@keyframes move-frames-172 {
  from {
    transform: translate3d(22vw, 110vh, 0);
  }
  to {
    transform: translate3d(61vw, -117vh, 0);
  }
}
.circle-container:nth-child(172) .circle {
  -webkit-animation-delay: 2644ms;
          animation-delay: 2644ms;
}
.circle-container:nth-child(173) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-173;
          animation-name: move-frames-173;
  -webkit-animation-duration: 30692ms;
          animation-duration: 30692ms;
  -webkit-animation-delay: 7355ms;
          animation-delay: 7355ms;
}
@-webkit-keyframes move-frames-173 {
  from {
    transform: translate3d(18vw, 106vh, 0);
  }
  to {
    transform: translate3d(54vw, -116vh, 0);
  }
}
@keyframes move-frames-173 {
  from {
    transform: translate3d(18vw, 106vh, 0);
  }
  to {
    transform: translate3d(54vw, -116vh, 0);
  }
}
.circle-container:nth-child(173) .circle {
  -webkit-animation-delay: 2202ms;
          animation-delay: 2202ms;
}
.circle-container:nth-child(174) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-174;
          animation-name: move-frames-174;
  -webkit-animation-duration: 35969ms;
          animation-duration: 35969ms;
  -webkit-animation-delay: 16272ms;
          animation-delay: 16272ms;
}
@-webkit-keyframes move-frames-174 {
  from {
    transform: translate3d(33vw, 104vh, 0);
  }
  to {
    transform: translate3d(62vw, -129vh, 0);
  }
}
@keyframes move-frames-174 {
  from {
    transform: translate3d(33vw, 104vh, 0);
  }
  to {
    transform: translate3d(62vw, -129vh, 0);
  }
}
.circle-container:nth-child(174) .circle {
  -webkit-animation-delay: 271ms;
          animation-delay: 271ms;
}
.circle-container:nth-child(175) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-175;
          animation-name: move-frames-175;
  -webkit-animation-duration: 30341ms;
          animation-duration: 30341ms;
  -webkit-animation-delay: 20753ms;
          animation-delay: 20753ms;
}
@-webkit-keyframes move-frames-175 {
  from {
    transform: translate3d(29vw, 101vh, 0);
  }
  to {
    transform: translate3d(63vw, -126vh, 0);
  }
}
@keyframes move-frames-175 {
  from {
    transform: translate3d(29vw, 101vh, 0);
  }
  to {
    transform: translate3d(63vw, -126vh, 0);
  }
}
.circle-container:nth-child(175) .circle {
  -webkit-animation-delay: 3701ms;
          animation-delay: 3701ms;
}
.circle-container:nth-child(176) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-176;
          animation-name: move-frames-176;
  -webkit-animation-duration: 34222ms;
          animation-duration: 34222ms;
  -webkit-animation-delay: 9858ms;
          animation-delay: 9858ms;
}
@-webkit-keyframes move-frames-176 {
  from {
    transform: translate3d(73vw, 108vh, 0);
  }
  to {
    transform: translate3d(52vw, -113vh, 0);
  }
}
@keyframes move-frames-176 {
  from {
    transform: translate3d(73vw, 108vh, 0);
  }
  to {
    transform: translate3d(52vw, -113vh, 0);
  }
}
.circle-container:nth-child(176) .circle {
  -webkit-animation-delay: 2715ms;
          animation-delay: 2715ms;
}
.circle-container:nth-child(177) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-177;
          animation-name: move-frames-177;
  -webkit-animation-duration: 35893ms;
          animation-duration: 35893ms;
  -webkit-animation-delay: 15084ms;
          animation-delay: 15084ms;
}
@-webkit-keyframes move-frames-177 {
  from {
    transform: translate3d(68vw, 106vh, 0);
  }
  to {
    transform: translate3d(67vw, -131vh, 0);
  }
}
@keyframes move-frames-177 {
  from {
    transform: translate3d(68vw, 106vh, 0);
  }
  to {
    transform: translate3d(67vw, -131vh, 0);
  }
}
.circle-container:nth-child(177) .circle {
  -webkit-animation-delay: 2721ms;
          animation-delay: 2721ms;
}
.circle-container:nth-child(178) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-178;
          animation-name: move-frames-178;
  -webkit-animation-duration: 35976ms;
          animation-duration: 35976ms;
  -webkit-animation-delay: 20590ms;
          animation-delay: 20590ms;
}
@-webkit-keyframes move-frames-178 {
  from {
    transform: translate3d(57vw, 108vh, 0);
  }
  to {
    transform: translate3d(77vw, -111vh, 0);
  }
}
@keyframes move-frames-178 {
  from {
    transform: translate3d(57vw, 108vh, 0);
  }
  to {
    transform: translate3d(77vw, -111vh, 0);
  }
}
.circle-container:nth-child(178) .circle {
  -webkit-animation-delay: 694ms;
          animation-delay: 694ms;
}
.circle-container:nth-child(179) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-179;
          animation-name: move-frames-179;
  -webkit-animation-duration: 31667ms;
          animation-duration: 31667ms;
  -webkit-animation-delay: 23077ms;
          animation-delay: 23077ms;
}
@-webkit-keyframes move-frames-179 {
  from {
    transform: translate3d(19vw, 108vh, 0);
  }
  to {
    transform: translate3d(16vw, -136vh, 0);
  }
}
@keyframes move-frames-179 {
  from {
    transform: translate3d(19vw, 108vh, 0);
  }
  to {
    transform: translate3d(16vw, -136vh, 0);
  }
}
.circle-container:nth-child(179) .circle {
  -webkit-animation-delay: 77ms;
          animation-delay: 77ms;
}
.circle-container:nth-child(180) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-180;
          animation-name: move-frames-180;
  -webkit-animation-duration: 36106ms;
          animation-duration: 36106ms;
  -webkit-animation-delay: 26368ms;
          animation-delay: 26368ms;
}
@-webkit-keyframes move-frames-180 {
  from {
    transform: translate3d(95vw, 104vh, 0);
  }
  to {
    transform: translate3d(7vw, -123vh, 0);
  }
}
@keyframes move-frames-180 {
  from {
    transform: translate3d(95vw, 104vh, 0);
  }
  to {
    transform: translate3d(7vw, -123vh, 0);
  }
}
.circle-container:nth-child(180) .circle {
  -webkit-animation-delay: 2481ms;
          animation-delay: 2481ms;
}
.circle-container:nth-child(181) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-181;
          animation-name: move-frames-181;
  -webkit-animation-duration: 36064ms;
          animation-duration: 36064ms;
  -webkit-animation-delay: 30071ms;
          animation-delay: 30071ms;
}
@-webkit-keyframes move-frames-181 {
  from {
    transform: translate3d(27vw, 105vh, 0);
  }
  to {
    transform: translate3d(38vw, -129vh, 0);
  }
}
@keyframes move-frames-181 {
  from {
    transform: translate3d(27vw, 105vh, 0);
  }
  to {
    transform: translate3d(38vw, -129vh, 0);
  }
}
.circle-container:nth-child(181) .circle {
  -webkit-animation-delay: 3425ms;
          animation-delay: 3425ms;
}
.circle-container:nth-child(182) {
  width: 8px;
  height: 8px;
  -webkit-animation-name: move-frames-182;
          animation-name: move-frames-182;
  -webkit-animation-duration: 31074ms;
          animation-duration: 31074ms;
  -webkit-animation-delay: 790ms;
          animation-delay: 790ms;
}
@-webkit-keyframes move-frames-182 {
  from {
    transform: translate3d(22vw, 102vh, 0);
  }
  to {
    transform: translate3d(96vw, -128vh, 0);
  }
}
@keyframes move-frames-182 {
  from {
    transform: translate3d(22vw, 102vh, 0);
  }
  to {
    transform: translate3d(96vw, -128vh, 0);
  }
}
.circle-container:nth-child(182) .circle {
  -webkit-animation-delay: 3974ms;
          animation-delay: 3974ms;
}
.circle-container:nth-child(183) {
  width: 5px;
  height: 5px;
  -webkit-animation-name: move-frames-183;
          animation-name: move-frames-183;
  -webkit-animation-duration: 31000ms;
          animation-duration: 31000ms;
  -webkit-animation-delay: 26450ms;
          animation-delay: 26450ms;
}
@-webkit-keyframes move-frames-183 {
  from {
    transform: translate3d(52vw, 104vh, 0);
  }
  to {
    transform: translate3d(27vw, -131vh, 0);
  }
}
@keyframes move-frames-183 {
  from {
    transform: translate3d(52vw, 104vh, 0);
  }
  to {
    transform: translate3d(27vw, -131vh, 0);
  }
}
.circle-container:nth-child(183) .circle {
  -webkit-animation-delay: 2462ms;
          animation-delay: 2462ms;
}
.circle-container:nth-child(184) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-184;
          animation-name: move-frames-184;
  -webkit-animation-duration: 34354ms;
          animation-duration: 34354ms;
  -webkit-animation-delay: 16242ms;
          animation-delay: 16242ms;
}
@-webkit-keyframes move-frames-184 {
  from {
    transform: translate3d(23vw, 101vh, 0);
  }
  to {
    transform: translate3d(67vw, -121vh, 0);
  }
}
@keyframes move-frames-184 {
  from {
    transform: translate3d(23vw, 101vh, 0);
  }
  to {
    transform: translate3d(67vw, -121vh, 0);
  }
}
.circle-container:nth-child(184) .circle {
  -webkit-animation-delay: 1027ms;
          animation-delay: 1027ms;
}
.circle-container:nth-child(185) {
  width: 1px;
  height: 1px;
  -webkit-animation-name: move-frames-185;
          animation-name: move-frames-185;
  -webkit-animation-duration: 32012ms;
          animation-duration: 32012ms;
  -webkit-animation-delay: 7532ms;
          animation-delay: 7532ms;
}
@-webkit-keyframes move-frames-185 {
  from {
    transform: translate3d(17vw, 108vh, 0);
  }
  to {
    transform: translate3d(25vw, -118vh, 0);
  }
}
@keyframes move-frames-185 {
  from {
    transform: translate3d(17vw, 108vh, 0);
  }
  to {
    transform: translate3d(25vw, -118vh, 0);
  }
}
.circle-container:nth-child(185) .circle {
  -webkit-animation-delay: 2506ms;
          animation-delay: 2506ms;
}
.circle-container:nth-child(186) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-186;
          animation-name: move-frames-186;
  -webkit-animation-duration: 35216ms;
          animation-duration: 35216ms;
  -webkit-animation-delay: 36544ms;
          animation-delay: 36544ms;
}
@-webkit-keyframes move-frames-186 {
  from {
    transform: translate3d(100vw, 101vh, 0);
  }
  to {
    transform: translate3d(3vw, -112vh, 0);
  }
}
@keyframes move-frames-186 {
  from {
    transform: translate3d(100vw, 101vh, 0);
  }
  to {
    transform: translate3d(3vw, -112vh, 0);
  }
}
.circle-container:nth-child(186) .circle {
  -webkit-animation-delay: 2955ms;
          animation-delay: 2955ms;
}
.circle-container:nth-child(187) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-187;
          animation-name: move-frames-187;
  -webkit-animation-duration: 32968ms;
          animation-duration: 32968ms;
  -webkit-animation-delay: 35767ms;
          animation-delay: 35767ms;
}
@-webkit-keyframes move-frames-187 {
  from {
    transform: translate3d(99vw, 102vh, 0);
  }
  to {
    transform: translate3d(84vw, -128vh, 0);
  }
}
@keyframes move-frames-187 {
  from {
    transform: translate3d(99vw, 102vh, 0);
  }
  to {
    transform: translate3d(84vw, -128vh, 0);
  }
}
.circle-container:nth-child(187) .circle {
  -webkit-animation-delay: 1059ms;
          animation-delay: 1059ms;
}
.circle-container:nth-child(188) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-188;
          animation-name: move-frames-188;
  -webkit-animation-duration: 31474ms;
          animation-duration: 31474ms;
  -webkit-animation-delay: 26651ms;
          animation-delay: 26651ms;
}
@-webkit-keyframes move-frames-188 {
  from {
    transform: translate3d(92vw, 104vh, 0);
  }
  to {
    transform: translate3d(85vw, -126vh, 0);
  }
}
@keyframes move-frames-188 {
  from {
    transform: translate3d(92vw, 104vh, 0);
  }
  to {
    transform: translate3d(85vw, -126vh, 0);
  }
}
.circle-container:nth-child(188) .circle {
  -webkit-animation-delay: 897ms;
          animation-delay: 897ms;
}
.circle-container:nth-child(189) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-189;
          animation-name: move-frames-189;
  -webkit-animation-duration: 35153ms;
          animation-duration: 35153ms;
  -webkit-animation-delay: 15356ms;
          animation-delay: 15356ms;
}
@-webkit-keyframes move-frames-189 {
  from {
    transform: translate3d(54vw, 110vh, 0);
  }
  to {
    transform: translate3d(42vw, -116vh, 0);
  }
}
@keyframes move-frames-189 {
  from {
    transform: translate3d(54vw, 110vh, 0);
  }
  to {
    transform: translate3d(42vw, -116vh, 0);
  }
}
.circle-container:nth-child(189) .circle {
  -webkit-animation-delay: 8ms;
          animation-delay: 8ms;
}
.circle-container:nth-child(190) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-190;
          animation-name: move-frames-190;
  -webkit-animation-duration: 36622ms;
          animation-duration: 36622ms;
  -webkit-animation-delay: 13300ms;
          animation-delay: 13300ms;
}
@-webkit-keyframes move-frames-190 {
  from {
    transform: translate3d(23vw, 103vh, 0);
  }
  to {
    transform: translate3d(63vw, -114vh, 0);
  }
}
@keyframes move-frames-190 {
  from {
    transform: translate3d(23vw, 103vh, 0);
  }
  to {
    transform: translate3d(63vw, -114vh, 0);
  }
}
.circle-container:nth-child(190) .circle {
  -webkit-animation-delay: 3786ms;
          animation-delay: 3786ms;
}
.circle-container:nth-child(191) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-191;
          animation-name: move-frames-191;
  -webkit-animation-duration: 30469ms;
          animation-duration: 30469ms;
  -webkit-animation-delay: 17808ms;
          animation-delay: 17808ms;
}
@-webkit-keyframes move-frames-191 {
  from {
    transform: translate3d(7vw, 104vh, 0);
  }
  to {
    transform: translate3d(37vw, -113vh, 0);
  }
}
@keyframes move-frames-191 {
  from {
    transform: translate3d(7vw, 104vh, 0);
  }
  to {
    transform: translate3d(37vw, -113vh, 0);
  }
}
.circle-container:nth-child(191) .circle {
  -webkit-animation-delay: 3338ms;
          animation-delay: 3338ms;
}
.circle-container:nth-child(192) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-192;
          animation-name: move-frames-192;
  -webkit-animation-duration: 31643ms;
          animation-duration: 31643ms;
  -webkit-animation-delay: 13111ms;
          animation-delay: 13111ms;
}
@-webkit-keyframes move-frames-192 {
  from {
    transform: translate3d(51vw, 102vh, 0);
  }
  to {
    transform: translate3d(55vw, -103vh, 0);
  }
}
@keyframes move-frames-192 {
  from {
    transform: translate3d(51vw, 102vh, 0);

  }
  to {
    transform: translate3d(55vw, -103vh, 0);
  }
}
.circle-container:nth-child(192) .circle {
  -webkit-animation-delay: 2228ms;
          animation-delay: 2228ms;
}
.circle-container:nth-child(193) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-193;
          animation-name: move-frames-193;
  -webkit-animation-duration: 36191ms;
          animation-duration: 36191ms;
  -webkit-animation-delay: 21931ms;
          animation-delay: 21931ms;
}
@-webkit-keyframes move-frames-193 {
  from {
    transform: translate3d(8vw, 102vh, 0);
  }
  to {
    transform: translate3d(58vw, -114vh, 0);
  }
}
@keyframes move-frames-193 {
  from {
    transform: translate3d(8vw, 102vh, 0);
  }
  to {
    transform: translate3d(58vw, -114vh, 0);
  }
}
.circle-container:nth-child(193) .circle {
  -webkit-animation-delay: 3380ms;
          animation-delay: 3380ms;
}
.circle-container:nth-child(194) {
  width: 6px;
  height: 6px;
  -webkit-animation-name: move-frames-194;
          animation-name: move-frames-194;
  -webkit-animation-duration: 30928ms;
          animation-duration: 30928ms;
  -webkit-animation-delay: 957ms;
          animation-delay: 957ms;
}
@-webkit-keyframes move-frames-194 {
  from {
    transform: translate3d(61vw, 108vh, 0);
  }
  to {
    transform: translate3d(77vw, -138vh, 0);
  }
}
@keyframes move-frames-194 {
  from {
    transform: translate3d(61vw, 108vh, 0);
  }
  to {
    transform: translate3d(77vw, -138vh, 0);
  }
}
.circle-container:nth-child(194) .circle {
  -webkit-animation-delay: 1049ms;
          animation-delay: 1049ms;
}
.circle-container:nth-child(195) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-195;
          animation-name: move-frames-195;
  -webkit-animation-duration: 28897ms;
          animation-duration: 28897ms;
  -webkit-animation-delay: 14739ms;
          animation-delay: 14739ms;
}
@-webkit-keyframes move-frames-195 {
  from {
    transform: translate3d(19vw, 104vh, 0);
  }
  to {
    transform: translate3d(44vw, -121vh, 0);
  }
}
@keyframes move-frames-195 {
  from {
    transform: translate3d(19vw, 104vh, 0);
  }
  to {
    transform: translate3d(44vw, -121vh, 0);
  }
}
.circle-container:nth-child(195) .circle {
  -webkit-animation-delay: 2117ms;
          animation-delay: 2117ms;
}
.circle-container:nth-child(196) {
  width: 7px;
  height: 7px;
  -webkit-animation-name: move-frames-196;
          animation-name: move-frames-196;
  -webkit-animation-duration: 35806ms;
          animation-duration: 35806ms;
  -webkit-animation-delay: 937ms;
          animation-delay: 937ms;
}
@-webkit-keyframes move-frames-196 {
  from {
    transform: translate3d(27vw, 106vh, 0);
  }
  to {
    transform: translate3d(37vw, -127vh, 0);
  }
}
@keyframes move-frames-196 {
  from {
    transform: translate3d(27vw, 106vh, 0);
  }
  to {
    transform: translate3d(37vw, -127vh, 0);
  }
}
.circle-container:nth-child(196) .circle {
  -webkit-animation-delay: 1437ms;
          animation-delay: 1437ms;
}
.circle-container:nth-child(197) {
  width: 4px;
  height: 4px;
  -webkit-animation-name: move-frames-197;
          animation-name: move-frames-197;
  -webkit-animation-duration: 36479ms;
          animation-duration: 36479ms;
  -webkit-animation-delay: 9916ms;
          animation-delay: 9916ms;
}
@-webkit-keyframes move-frames-197 {
  from {
    transform: translate3d(60vw, 107vh, 0);
  }
  to {
    transform: translate3d(12vw, -109vh, 0);
  }
}
@keyframes move-frames-197 {
  from {
    transform: translate3d(60vw, 107vh, 0);
  }
  to {
    transform: translate3d(12vw, -109vh, 0);
  }
}
.circle-container:nth-child(197) .circle {
  -webkit-animation-delay: 70ms;
          animation-delay: 70ms;
}
.circle-container:nth-child(198) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-198;
          animation-name: move-frames-198;
  -webkit-animation-duration: 30159ms;
          animation-duration: 30159ms;
  -webkit-animation-delay: 5926ms;
          animation-delay: 5926ms;
}
@-webkit-keyframes move-frames-198 {
  from {
    transform: translate3d(99vw, 103vh, 0);
  }
  to {
    transform: translate3d(13vw, -121vh, 0);
  }
}
@keyframes move-frames-198 {
  from {
    transform: translate3d(99vw, 103vh, 0);
  }
  to {
    transform: translate3d(13vw, -121vh, 0);
  }
}
.circle-container:nth-child(198) .circle {
  -webkit-animation-delay: 800ms;
          animation-delay: 800ms;
}
.circle-container:nth-child(199) {
  width: 2px;
  height: 2px;
  -webkit-animation-name: move-frames-199;
          animation-name: move-frames-199;
  -webkit-animation-duration: 35837ms;
          animation-duration: 35837ms;
  -webkit-animation-delay: 19069ms;
          animation-delay: 19069ms;
}
@-webkit-keyframes move-frames-199 {
  from {
    transform: translate3d(19vw, 106vh, 0);
  }
  to {
    transform: translate3d(65vw, -115vh, 0);
  }
}
@keyframes move-frames-199 {
  from {
    transform: translate3d(19vw, 106vh, 0);
  }
  to {
    transform: translate3d(65vw, -115vh, 0);
  }
}
.circle-container:nth-child(199) .circle {
  -webkit-animation-delay: 1543ms;
          animation-delay: 1543ms;
}
.circle-container:nth-child(200) {
  width: 3px;
  height: 3px;
  -webkit-animation-name: move-frames-200;
          animation-name: move-frames-200;
  -webkit-animation-duration: 30221ms;
          animation-duration: 30221ms;
  -webkit-animation-delay: 24208ms;
          animation-delay: 24208ms;
}
@-webkit-keyframes move-frames-200 {
  from {
    transform: translate3d(29vw, 109vh, 0);
  }
  to {
    transform: translate3d(99vw, -117vh, 0);
  }
}
@keyframes move-frames-200 {
  from {
    transform: translate3d(29vw, 109vh, 0);
  }
  to {
    transform: translate3d(99vw, -117vh, 0);
  }
}
.circle-container:nth-child(200) .circle {
  -webkit-animation-delay: 2469ms;
          animation-delay: 2469ms;
}

.message {
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: white;
  font-family: "Josefin Slab", serif;
  line-height: 27px;
  font-size: 18px;
  text-align: right;
  pointer-events: none;
  -webkit-animation: message-frames 1.5s ease 5s forwards;
          animation: message-frames 1.5s ease 5s forwards;
  opacity: 0;
}
@-webkit-keyframes message-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes message-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
      .LOGO{
             z-index: 99999;
         position: relative;
         top: 1%;
             left: 1%;}
    </style>

</head>

<head>

  
<!-- Fundos backgound -->

<style>
body {
    background-image: linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
    overflow: hidden;
}

.but {
    z-index: 1000;
    position: absolute;
    background-color: #383838;
    padding: 20px 8px 8px 8px;
    border-radius: 6px;
    border: 1px solid #707070;
    top: 6%;
    color: #ffffff;
    text-decoration: none;
    right: 1%;
}
    
.but:hover {
    background-color: #000000;
}

.but1 {
    z-index: 1000;
    position: absolute;
    background-color: #646464;
    padding: 50px 8px 50px 8px;
    border-radius: 6px;
    border: 1px solid #707070;
    top: 81%;
    color: #ffffff;
    text-decoration: none;
    opacity: 0.8;
}

.info {
    z-index: 1000;
    position: absolute;
    top: 8%;
    color: #fff;
}
  
.but:hover {
    opacity: 0.8;
}

.but1:hover {
    opacity: 0.8;
}
</style>
</head>

<body>
<a class="but" href="#" onclick="Bgs()">𝙈𝙪𝙙𝙖𝙧 𝙁𝙪𝙣𝙙𝙤👌</a>
</body>

</html>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<script>
    var count = 0;
    var n = 10;

    function Bgs() {
        if (count === 0) {
            $('body').css({'background-image': 'linear-gradient( 110.6deg,  rgba(0,0,0,1) 7%, rgba(0,159,222,1) 47.7%, rgba(24,0,0,1) 100.6% )', 'background-repeat': 'repeat'})
        } else if (count === 1) {
            $('body').css({'background-image': 'url(https://i.imgur.com/E2senKS.jpg)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 2) {
            $('body').css({'background-image': 'url(https://i.imgur.com/EtWeF7h.jpg)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 3) {
            $('body').css({'background-image': 'url(https://i.imgur.com/vb36mNe.jpg)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 4) {
            $('body').css({'background-image': 'url(https://i.imgur.com/PU1l8FN.png)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 5) {
            $('body').css({'background-image': 'url(https://i.imgur.com/cBc8fVd.jpg)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 6) {
            $('body').css({'background-image': 'url(https://i.imgur.com/3x3JlOE.jpg)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 7) {
            $('body').css({'background-image': 'url(https://i.imgur.com/EifZwXZ.png)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 8) {
            $('body').css({'background-image': 'url(https://i.imgur.com/fly67JG.jpg)', 'background-repeat': 'no-repeat', 'background-size': '100%'});
        } else if (count === 9) {
            $('body').css({'background-image': 'linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5%', 'background-repeat': 'repeat'});
        }

        count += 1;
        if (count === n)
            count = 0;
    }
</script>

<body>

<!-- partial:index.partial.html -->

          <!--LOGO -->
       <div id="logo">
       <img src="" >
       </div>

    
  <p class="message">VTO<br>O Maior e Melhor XAT desde 2008</p>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>

<!-- partial -->
  
</body>
</html>
