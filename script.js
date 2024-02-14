
const density = "@@@@#W$987654321?!ABC;:+=-,._        ";
let video;
let asciiDiv;

function setup() {
  video = createCapture(VIDEO);
  video.size(48,48)
  asciiDiv = createDiv();
}

function draw(){
  video.loadPixels();
  let frame = "";
  for (let i = 0; i < video.height; i++) {
    for (let j = 0; j < video.width; j++) {
      const indexPixel = (j + i * video.width) * 4;
      const r = video.pixels[indexPixel + 0];
      const g = video.pixels[indexPixel + 1];
      const b = video.pixels[indexPixel + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const indexChar = floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(indexChar);
      if(c == " ") frame += "&nbsp;"
      else frame += c ;
    }
    frame += "<br/>"
  }
  asciiDiv.html(frame)
}
