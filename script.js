//canvas sizes
function setup() {
  createCanvas(500, 400);
}

//all variables outside of draw function
var tableX = 167;
var tableY = 131;
var laptopX = 22;
var laptopY = 7;
var duckX = 183;
var duckY = 9;
var duckSpeed = 1;
var bottleX = 113;
var bottleY = 20;
var spillX = [112, 112, 112];
var spillY = [0, 200, 300];

draw = function () {
  background(237, 240, 189);

  //text instructions
  textSize(12);
  text(
    "1. Don't let good coffee go to waste! \nMove your mouse to catch the spills.",
    30,
    50
  );
  text(
    "2. Do you have one? \nPress your mouse to find out what it is.",
    30,
    100
  );

  //draw table
  fill(156, 116, 51);
  noStroke();
  quad(
    tableX - 10, //table shape
    tableY + 100,
    tableX - 30,
    tableY + 150,
    tableX + 170,
    tableY + 150,
    +tableX + 145,
    tableY + 100
  );

  var tableLeg = function (tableX, tableY) {
    rect(tableX, tableY, 10, 88);
  }; //table legs
  tableLeg(tableX + -1, tableY + 109);
  tableLeg(tableX + -25, tableY + 147);
  tableLeg(tableX + 134, tableY + 109);
  tableLeg(tableX + 156, tableY + 147);

  //draw laptop
  fill(76, 203, 212);
  stroke(0, 0, 0);
  strokeWeight(3);
  rect(laptopX + 211, laptopY + 181, 76, 55); //laptop screen shape
  strokeWeight(1);
  fill(255, 255, 255);
  rect(laptopX + 220, laptopY + 203, 58, 10, 10); //search bar
  ellipse(laptopX + 226, laptopY + 207, 3, 3); //search icon
  line(laptopX + 227, laptopY + 209, laptopX + 229, laptopY + 211);
  fill(0, 0, 0);
  textSize(8);
  text("stackoverflow", laptopX + 229, laptopY + 210); //text inside
  noStroke();
  fill(97, 92, 92);

  quad(
    laptopX + 209, //keyboard shape
    laptopY + 238,
    laptopX + 289,
    laptopY + 238,
    laptopX + 300,
    laptopY + 260,
    laptopX + 200,
    laptopY + 260
  );

  fill(41, 39, 39);
  quad(
    laptopX + 213, //keys
    laptopY + 242,
    laptopX + 286,
    laptopY + 242,
    laptopX + 290,
    laptopY + 250,
    laptopX + 210,
    laptopY + 250
  );

  quad(
    laptopX + 240, //mousepad
    laptopY + 252,
    laptopX + 260,
    laptopY + 252,
    laptopX + 262,
    laptopY + 256,
    laptopX + 238,
    laptopY + 256
  );

  //draw duck
  if (mouseIsPressed) {
    fill(207, 121, 0);
    triangle(duckX - 10, duckY + 218, duckX, duckY + 215, duckX, duckY + 221); //mouth
    fill(240, 208, 0);
    ellipse(duckX + 5, duckY + 216, 15, 15); //head
    ellipse(duckX + 14, duckY + 228, 30, 18); //body
    arc(duckX + 14, duckY + 227, 30, 23, 131, 484); //tail
    fill(255, 255, 255);
    ellipse(duckX + 1, duckY + 214, 4, 4); //sclera
    fill(0, 0, 0);
    ellipse(duckX, duckY + 214, 2, 2); //pupil

    duckX = duckX + duckSpeed; //duck moves
    if (duckX < 145) {
      duckSpeed += 2;
    }

    if (duckX > 202) {
      duckSpeed -= 2;
    }
  }

  //draw bottle
  stroke(207, 27, 27);
  stroke(2);
  line(bottleX - 5, bottleY + 249, bottleX, bottleY + 240); //lid
  fill(207, 27, 27);
  noStroke();
  rect(bottleX, bottleY + 240, 15, 10); //neck
  triangle(
    bottleX,
    bottleY + 245,
    bottleX + 15,
    bottleY + 237,
    bottleX + 15,
    bottleY + 253
  ); //shoulder
  rect(bottleX + 13, bottleY + 235, 50, 20, 5); //body

  //draw mug
  var mugX = mouseX - 27;
  var mugY = mouseY - 12;
  noStroke();
  fill(24, 71, 242);
  quad(mugX, mugY, mugX + 25, mugY, mugX + 25, mugY + 30, mugX, mugY + 30); //mug shape
  ellipse(mugX + 27, mugY + 15, 16, 20); //handle
  fill(237, 240, 189);
  ellipse(mugX + 28, mugY + 15, 6, 11);

  textSize(9);
  text("error \n404", mugX + 3, mugY + 12);
  
  //draw coffee spills
  fill(0, 0, 0);
  noStroke();
  for (var spill = 0; spill < spillY.length; spill++) {
    ellipse(spillX[spill], spillY[spill] + 268, 3, 5); //shape & position of spill

    if (spillY[spill] > 300) {
      spillY[spill] = 0;
    }

    spillY[spill] += random(0, 253); //spill speed

    if (spillY[spill] > mugY - 268 && mugY > 260 && mugX > 89 && mugX < 110) {
      spillY[spill] = 0; //mug positions to stop spill
    }
  }
};
