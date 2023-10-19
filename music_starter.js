
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstrun = true
let loadTVHEAD_0 = true
let loadTVHEAD2_frame = true
   let TVHEAD = [];
   let TVHEADx = -100
   let TVHEADy = 100
   let img;

 function draw_one_frame(words, vocal, drum, bass, other, counter) {
   
   background(10, 10, 10);
   var ballSize = map(bass, 0,100, 40, 150);
var otherhight = map(other, 0, 90, height, 0+ballSize/3 );
var drumhight = map(drum, 0, 90, 178, 0+ballSize/3);

fill(240, 239, 239);
ellipse(width/2, otherhight, ballSize);
ellipse(width/9, drumhight*9, ballSize);

   function preload() {
      TVHEAD_1 = loadimage('elevator.png');
      TVHEAD_0 = loadImage('TVHEAD_0.png');
      TVHEAD2_frame = loadimage('TVHEAD2_frame.png');
      TVHEAD2_frame2 = loadimage('TVHEAD2_frame2.png')
      if (firstrun){

         TVHEAD.push(loadImage('TVHEAD_0.png'));
         TVHEAD.push(loadImage('TVHEAD_1'));
         TVHEAD.push(loadImage('TVHEAD2_frame.png'));
         TVHEAD.push(loadImage('TVHEAD2_frame2.png'));
            
        firstrun = false
      }
      background(200);

      var VocalFrame = int(map(vocal, 0, 100, 0, 2));
      console.log(VocalFrame);
      push();
      scale(0.8);
      image(TVHEAD_0[VocalFrame], width/2, height/2)
      pop();
   }
   
   
   function draw() {
      background(200);
      let vol = song.getlevel();
      let threshold = 0.1;
      if (vol > threshold) {
         isTVHEAD_1 = !isTVHEAD2_frame;
      }
      if(isTVHEAD_1, 100, 1000, 1000, 1100);
    else {
      image(TVHEAD2_frame, 100, 100, 100, 100);
   }
}

   console.log(song.currentTime());

   if(song.currentTime()>5 && song.currentTime()<7){
      if(firstrun){
         TVHEAD = loadImage('TVHEAD2_frame.png');
         scale(0.8);
         firstrun = false

      if(song.currentTime()>10 && song.currentTime()<7);
       if(firstrun){
         TVHEAD = loadImage('TVHEAD2_frame2.png');
         scale(0.8);
         firstrun = false
       }
      }
  
   }

   if(loadTVHEAD_0){
      testImg = loadImage('elevator.png');

      loadTVHEAD_0 = false
   }
   scale(1.5); //change image size
   image(testImg, 2, drum+400);
      if(firstrun){
         TVHEAD = loadImage('TVHEAD2_frame.png');
         //rectMode(CENTER);
   //ellipse(bass, 500, 200, 200, Ballsize/4);
      //testImg.push(loadImage('TVHEAD.png'));   

      //TVHEAD = loadImage('TVHEAD_0.png');
      
      firstrun = false
      }
 }
      background(200);
      scale(0.8);
      image(TVHEAD, drum+180,900+500)
      firstrun = false

   

   if(loadTVHEAD){
   testImg = loadImage('TVHEAD2_frame.png')

   loadTVHEAD = false
   }

   scale(0.3);
   image(TVHEAD2_frame, 1000,drum+1000)
   
   let VocalFrame = int(map(bass, 0, 100, 0, 6));
   push();
   scale(0.6);
   image(TVHEAD2_frame[VocalFrame], 1300, 400)
   pop();

   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2000 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);


