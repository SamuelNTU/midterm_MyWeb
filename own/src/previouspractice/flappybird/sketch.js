let cvsWrapper = null;
let triAng
let x1, vy;
let baseImg;
let bird_img = [];
let rand_num, i, tmp;
var soundObj;
let pillar_img;
let button;
let page_num = 1;
let number_img = [];
let rand_pillar_image;
let count;
let randbot, randtop;
let Speed_X = 10, Speed_Y = 10;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets



function load_img() {
    gameoverImg = loadImage('./assets/sprites/gameover.png');
    startImg = loadImage('./assets/sprites/message.png');
    bgImg = loadImage("./assets/sprites/background-day.png");
    baseImg = loadImage("./assets/sprites/base.png");

    pillar_img = ["green", "red"].map(
        color => ["upper", "lower"].map(
            pos => loadImage(`./assets/sprites/pipe-${color}-${pos}.png`)));
    bird_img = ["blue", "red", "yellow"].map(
        color => ["upflap", "midflap", "downflap"].map(
            flap => loadImage(`./assets/sprites/${color}bird-${flap}.png`)));

    for (i = 0; i <= 9; i++)
        number_img.push(loadImage("./assets/sprites/" + i + ".png"));
}

function loadsound() {
    sound_wing = loadSound("./assets/audio/wing.ogg");
    sound_die = loadSound("./assets/audio/die.ogg");
    sound_hit = loadSound('./assets/audio/hit.ogg');
    sound_point = loadSound('./assets/audio/point.ogg');
}

function preload() {
    load_img();
    loadsound();
}
function cvs_Wrapper() {
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper")

    cvsWrapper.onclick = function () {
        if (page_num == 1) {
            page_num = 0;
            reset();
        }
    };
}

function setup() {
    // Game basic setup.
    cvs_Wrapper();
    // Mounting canvas onto div for convenient styling.
    // Game basic setup.
    reset();

}
//create retry button
function createbutton() {
    button = createImg("./assets/sprites/restart.jpg");

    button.parent("main");
    button.position(width / 4, height / 2);
    button.style("width", "100px");
    button.mousePressed(function () {
        page_num = 1
    });
}
//adjust speed 
function submitspeed() {
    document.getElementById("submit").onclick = function () {

        Speed_X = document.getElementById("X_speed").value
        Speed_Y = document.getElementById("Y_speed").value
        if (Speed_X > 30 || Speed_X < 10) {
            alert("speed_X not between 10~30 auto set to 10")
            Speed_X = 10;
            document.getElementById("X_speed").value = 10
        }
        if (Speed_Y > 40 || Speed_Y < 10) {
            alert("speed_Y not between 10~40 auto set to 10")
            Speed_Y = 10;
            document.getElementById("Y_speed").value = 10
        }
    }
}
function initialize_var() {
    count = 0;
    triAng = 0;
    rand_num = Math.round(Math.random() * 2);
    //bird pos-y
    vy = Math.floor(height / 3);

    //point count
    i = 0;
    tmp = 0;

    //background img Xcor
    baseImg_X = 0;
    //pillar Xcor
    pillar_X = width / 2;

    rand_pillar_image = Math.floor(Math.random() * 2);
    //random pillar height
    randtop = Math.random() * height *0.2 + 0.25 * height;
    randbot = Math.random() * height *0.4+ 1 / 3 * height;

    //bird accerlate-y  ,bird speed y
    ay = width / 100 * Speed_Y;

    //bird pos-x
    x1 = width / 2;
}

//reset variable
function reset() {
    if (page_num == 2) {
        createbutton();
        submitspeed();
    }
    else {
        submitspeed();
        initialize_var();
    }
}


function bird_move() {
    //bird flapping
    if (i < 2) {
        tmp += 0.2;
        i = Math.round(tmp);
    }
    else {
        tmp = 0
        i = 0
    }
    //bird decline
    vy += Math.floor(ay * 0.1);

    // bird rotate
    if (vy > width / 5) {
        if (Math.round(triAng) == 2) {
            triAng = triAng;
        }
        else {
            triAng += 0.03;
        }
    }
    translate(x1, vy);
    rotate(triAng, [x1, vy]);
    image(bird_img[rand_num][i], 0, 0);
}

// show point
function numbershow() {
    //console.log(baseImg_X);
    if (-baseImg_X == 264 || -baseImg_X == 88) {
        sound_point.play();
        count += 1;
    }
    if (count - count % 10 != 0) {
        image(number_img[Math.floor(count / 10)], width / 3, height / 40, width / 10, height / 10);
    }
    image(number_img[count % 10], width / 2, height / 40, width / 10, height / 10);
}


//background, pillar move
function backimg_move() {
    //detecting background end
    console.log(baseImg_X)
    if (Math.round(baseImg_X) == -width) {

        //console.log(randtop,baseImg_X);
        baseImg_X = 0;
        randtop = Math.random() * height *0.2 + 0.25 * height;
    }
    //for detecting pillar end
    else if (Math.round(pillar_X) == -width) {

        //console.log(randbot,baseImg_X);
        pillar_X = 0;

        randbot = Math.random() * height *0.4 + 1 / 3 * height;
    }
    //adjust speed
    //console.log(Speed_X);
    pillar_X -= Math.floor(width / 1000 * Speed_X);
    baseImg_X -= Math.floor(width / 1000 * Speed_X);
    //bgImg_X -= width / 200;


    //draw bg-img base-img
    image(bgImg, baseImg_X + width, 0, width, height);
    image(bgImg, baseImg_X, 0, width, height);
    image(baseImg, baseImg_X + width, height - baseImg.height, width);
    image(baseImg, baseImg_X, height - baseImg.height, width);
    //draw pillar
    image(pillar_img[rand_pillar_image][1], pillar_X + width, height - randbot, pillar_img[rand_pillar_image][1].width, randbot);
    image(pillar_img[rand_pillar_image][0], baseImg_X + width, 0, pillar_img[rand_pillar_image][0].width, randtop);

}

//show startpage
function start_page() {
    image(startImg, width / 4, height / 4);
}

function hit() {
    if (vy < 0 || vy > height - baseImg.height - 30 || randtop >= vy && -baseImg_X >= width / 2 - 15 && -baseImg_X <= width / 2 + 25
        || (height - randbot <= vy && (-baseImg_X >= width - 20 || -baseImg_X <= 30) && count >= 1)
    ) {
        
        
        sound_hit.play();
        //retry();
        page_num = 2;
        reset();
    }

}

//draw function
function draw() {
    //background(220);
    if (page_num == 0) {
        //randnum for bird
        backimg_move();
        numbershow();
        bird_move();
        hit();
    }
    else if (page_num == 1) {
        backimg_move();
        start_page();
    }
    else if (page_num == 2) {
        image(gameoverImg, width / 4, height / 4);

    }
}

//hit reaction

//space press
function keyPressed() {
    if (keyCode === 32) {
        vy -= Math.floor(height / 6);
        triAng = -PI / 4;
        sound_wing.play();
    }

}
