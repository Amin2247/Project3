
let i = 0;
let j = 0;
let x = 10;
let y = 20;
let centerX;
let centerY;
let delta = 18;
let buttonPressed = true;
let selection;
let canvavWidth = 500;
let canvasHight = 600;
let redSlider;
let greenSlider;
let blueSlider;
let redVal = 128;
let greenVal = 128;
let blueVal = 128;
let pos = 0;
let angle = 0;
let myFont;
let lRotate;
let rRotate;
let sRotate;
let increaseRotateSpeed;
let decreaseRotateSpeed;
let rotateValue = 0;
let direction = 0;
let redValue = 128;
let greenValue = 128;
let blueValue = 128;
let s1 = "Type in elilipse, square or rectangle in the input box";
let s2 = "Then press the Go button to draw the shape";
let s3 = "Use Sliders to change the color of the shape";
let s4 = "Press mouse wheel to resize the shape";
function setup() {
  createCanvas(canvavWidth, canvasHight);
  angleMode(DEGREES);
  centerX = canvavWidth / 2;
  centerY = canvasHight / 2 + 80;
  background(220);
  textSize(14);
  fill(0, 102, 153);
  text(s1, 10, y);

  y += delta;
  text(s2, x, y);

  y += delta;
  text(s3, x, y);
  //text("", x, y);
  y += delta;
    text(s4, x, y);
  //++ create button
    y += delta;
  button = createButton("Go");
  button.style("color", "#4766B6");
  button.position(x + 180, y);
  button.mouseClicked(exeClick);

  rRotate = createButton("Rotate Left");
  rRotate.style("color", "#4766B6");
  rRotate.position(x, y + 30);
  rRotate.mouseClicked(exeRightRotate);

  lRotate = createButton("Rotate Right");
  lRotate.style("color", "#4766B6");
  lRotate.position(x + 90, y + 30);
  lRotate.mouseClicked(exeLeftRotate);

  sRotate = createButton("Stop Rotate");
  sRotate.style("color", "#4766B6");
  sRotate.position(x + 190, y + 30);
  sRotate.mouseClicked(exeStopRotate);

  increaseRotateSpeed = createButton("Rotate Faster");
  increaseRotateSpeed.style("color", "#4766B6");
  increaseRotateSpeed.position(x + 285, y + 30);
  increaseRotateSpeed.mouseClicked(execFasterRotate);

  reduceRotateSpeed = createButton("Rotate Slower");
  reduceRotateSpeed.style("color", "#4766B6");
  reduceRotateSpeed.position(x + 385, y + 30);
  reduceRotateSpeed.mouseClicked(execSlowerRotate);

  //--
  inp = createInput();
  inp.position(x, y);
  inp.input(getInput);
  //button.mousePressed(greet);
  redSlider = createSlider(0, 255, 128);
  greenSlider = createSlider(0, 255, 128);
  blueSlider = createSlider(0, 255, 128);
  y += delta + 40; //10;

  redSlider.position(x, y);
  greenSlider.position(x + 150, y);
  blueSlider.position(x + 300, y);

  redSlider.style("color", "#ff0000");
  y += delta + 15;
  aa = decimalToHexString(redVal * 256 * 256 + greenVal * 256 + blueVal);
  text("RGB:" + aa, x, y);

  //textAlign(CENTER);
  //textSize(50);

  //
}
function decimalToHexString(number) {
  if (number < 0) {
    number = 0xffffffff + number + 1;
  }
  return number.toString(16).toUpperCase();
}

function mouseWheel(event) {
  //print("event: " + event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta / 200;
  if (pos < -60) {
    pos = -60;
  } else if (pos > 60) {
    pos = 60;
  }
  print("pos: " + pos);
  buttonPressed = true;
}

////////////////////////////////
function getInput() {
  selection = this.value();
  selection = selection.toLowerCase(); // change
  selection = selection.trim();
  //console.log("you are typing: ", selection);
}
////////////////////////////////
function exeClick() {
  rotateValue = 0;
  buttonPressed = true;
  console.log("value: " + i);
  i = i + 1;
}
function exeLeftRotate() {
  direction = +1;
  rotateValue = +1;
}
function exeRightRotate() {
  direction = -1;
  rotateValue = -1;
}
function exeStopRotate() {
  direction = 0;
  rotateValue = 0;
}
function execFasterRotate() {
  if (rotateValue == 0) {
    return;
  }
  if (direction == 1) {
    rotateValue = rotateValue + 1;
  } else if (direction == -1 || rotateValue > 0) {
    rotateValue = rotateValue - 1;
  }
  if(rotateValue > 20) {
    rotateValue = 20;
  }  
}
function execSlowerRotate() {
  if (rotateValue == 0) {
    return;
  }
  if (direction == 1 && rotateValue > 1) {
    rotateValue = rotateValue - 1;
  } else if (direction == -1) {
    rotateValue = rotateValue + 1;
  }
}
///////////////////////////////

function draw() {
  if (mouseIsPressed == true) {
    redValue = redSlider.value();
    greenValue = greenSlider.value();
    blueValue = blueSlider.value();

    fill(255);
    buttonPressed = true;
  }
  //console.log("red green, blue:" + redValue, greenValue, blueValue);
  if (buttonPressed == true) {
    background(220);
    //buttonPressed = false;
    //console.log(j + "aaaaaaaaaaaa");
    //console.log(redSlider.value());
    push();
    fill(0, 102, 153);
    text(s1, 10, 20);
    text(s2, 10, 38);
    text(s3, 10, 56);
    text(s4, 10, 74);
    pop();
    fill(redValue, greenValue, blueValue);
    ////////////////////////
    switch (selection) {
      case "circle":
        push();
        translate(centerX, centerY);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0, 0, 150 + j, 100 + j);
        angle = angle + rotateValue;
        pop();
        break;
      case "ellipse":
        push();
        translate(centerX, centerY);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0, 0, 150 + j, 100 + j);
        angle = angle + rotateValue;
        pop();
        break;
      case "rectangle":
        push();
        translate(centerX, centerY);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 150 + j, 100 + j);
        angle = angle + rotateValue;
        pop();
        break;
      case "square":
        push();
        translate(centerX, centerY);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 100 + j, 100 + j);
        angle = angle + rotateValue;
        pop();
        break;
      default:
        // default is circle
        //push();
        //fill("#ff0000");
        //textSize(30);
        //text("Selection not supported", 10, 450);
        //pop();
        break;
    }
    rgbValue = decimalToHexString(
      redValue * 256 * 256 + greenValue * 256 + blueValue
    );

    //console.log("kkkk: " + redValue);
    //text( redValue,300,300);
    push();
    fill("#ff0000");
    text("Red Slider", x, y);
    fill("#00ca5a");
    text("Green Slider", x + 150, y);
    fill("#0000ff");
    text("Blue Slider", x + 300, y);
    pop();
    text("RGB: #" + rgbValue, x, y + 20);

    ///////////////////////////

    j = pos;
  }
}
