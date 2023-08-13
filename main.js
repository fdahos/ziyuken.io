let fin1 = {};
let fin2 = {};
let hit1 = [];
let hit2 = [];
let point = {};
let check1 = [false, false, false, false, false];
let check2 = [false, false, false, false, false];
let f1 = 0;
let f2 = 0;
let binary1 = "";
let binary2 = "";
const fin = [
    "thumb",
    "index",
    "middle",
    "ring",
    "little"
]
let result;

window.addEventListener("DOMContentLoaded", () => {
    //console.log("とても汚いコードですが、プログラミングは学習している途中なので、許してください。");
    document.querySelector("#about").style.display = "none";
    const cvs = document.getElementById( "canvas" );


    cvs.setAttribute( "width" , "700" );
    cvs.setAttribute( "height" , "700" );
    context = cvs.getContext( "2d" );

    draw();
    judge();
});

const judge = () => {
    context.fillStyle = "rgba(0, 204, 255, 0.5)";
    fillRoundRect(225, 300, 250, 100, 50);
    context.fillStyle = "#333";
    context.font = '400 50px "游ゴシック体", "Hiragino Kaku Gothic ProN",sans-serif';
    context.fillText("判定", 300 , 365);
}

const fillRoundRect = (x, y, w, h, r) => {
    context.beginPath();
    context.strokeStyle = "#333";
    context.lineWidth = 2;
    context.moveTo(x + r, y);
    context.lineTo(x + w - r, y);
    context.arc(x + w - r, y + r, r, Math.PI * (3/2), 0, false);
    context.lineTo(x + w, y + h - r);
    context.arc(x + w - r, y + h - r, r, 0, Math.PI * (1/2), false);
    context.lineTo(x + r, y + h);
    context.arc(x + r, y + h - r, r, Math.PI * (1/2), Math.PI, false);
    context.lineTo(x, y + r);
    context.arc(x + r, y + r, r, Math.PI, Math.PI * (3/2), false);
    context.closePath();
    context.fill();
    context.stroke();
}


const draw = () => {
    context.beginPath();
    context.fillStyle = "#fef0e3";
    context.strokeStyle = "#333";
    context.lineWidth = 2;
    context.moveTo(215, 130);
    context.bezierCurveTo(215, -100, 485, -100, 485, 130);
    context.fill();
    context.stroke();
    context.closePath();

    FingerOne(435,60, "親","指","","", "thumb", "#f3f3f3");
    FingerOne(380,100, "人","差","し","指", "index", "#f3f3f3");
    FingerOne(325,120, "中","指","","", "middle", "#f3f3f3");
    FingerOne(270,100, "薬","指","","", "ring", "#f3f3f3");
    FingerOne(215,70, "小","指","","", "little", "#f3f3f3");


    context.beginPath();
    context.fillStyle = "#fef0e3";
    context.strokeStyle = "#333";
    context.lineWidth = 2;
    context.moveTo(215, 570);
    context.bezierCurveTo(215, 800, 485, 800, 485, 570);
    context.fill();
    context.stroke();
    context.closePath();

    FingerTwo(215,60, "","","親","指", "thumb", "#f3f3f3");
    FingerTwo(270,100, "人","差","し","指", "index", "#f3f3f3");
    FingerTwo(325,120, "","","中","指", "middle", "#f3f3f3");
    FingerTwo(380,100, "","","薬","指", "ring", "#f3f3f3");
    FingerTwo(435,70, "","","小","指", "little", "#f3f3f3");
}

const FingerOne = (x, y, finger1,finger2,finger3,finger4, finger, color) => {
    context.beginPath();
    context.fillStyle = color;
    context.strokeStyle = "#333";
    context.lineWidth = 2;
    context.moveTo(x, 130);
    context.lineTo(x, y + 130);
    context.quadraticCurveTo(x + 25, y + 165, x + 50, y + 130);
    context.lineTo(x + 50, 130);
    context.fill();
    context.stroke();
    context.closePath();
    context.font = '300 25px "游ゴシック体", "Hiragino Kaku Gothic ProN",sans-serif';
    context.fillStyle = '#333';
    context.fillText(finger1, x + 12, 160, 50);
    context.fillText(finger2, x + 12, 185, 50);
    context.fillText(finger3, x + 12, 210, 50);
    context.fillText(finger4, x + 12, 235, 50);
    fin1[f1] = {
        x: x, y: 140,
        w: 50, h: y
    };
    f1 += 1;
};

const FingerTwo = (x, y, finger1,finger2,finger3,finger4, finger, color) => {
    context.beginPath();
    context.fillStyle = color;
    context.strokeStyle = "#333";
    context.lineWidth = 2;
    context.moveTo(x, 570);
    context.lineTo(x, 570 - y);
    context.quadraticCurveTo(x + 25, 570 - y - 35, x + 50, 570 - y);
    context.lineTo(x + 50, 570);
    context.fill();
    context.stroke();
    context.closePath();
    context.font = '300 25px "游ゴシック体", "Hiragino Kaku Gothic ProN",sans-serif';
    context.fillStyle = '#333';
    context.fillText(finger4, x + 12, 570, 50);
    context.fillText(finger3, x + 12, 545, 50);
    context.fillText(finger2, x + 12, 520, 50);
    context.fillText(finger1, x + 12, 495, 50);
    fin2[f2] = {
        x: x, y: 570 - y,
        w: 50, h: y
    };
    f2 += 1;
};

const game = () => {
    binary1 = "";
    for (let i1 = 4; i1 > -1; i1--) {
        if (check1[i1]) {
            binary1 += "1";
        } else {
            binary1 += "0";
        }
    }
    let number1 = parseInt(binary1, 2);

    binary2 = "";
    for (let i2 = 4; i2 > -1; i2--) {
        if (check2[i2]) {
            binary2 += "1";
        } else {
            binary2 += "0";
        }
    };
    let number2 = parseInt(binary2, 2);
    if(number1 == 0) {
        alert("その手は使えません(1)");
    };
    if(number2 == 0) {
        alert("その手は使えません(2)");
    };
    if(number1 != 0 && number2 != 0) {
    f1 = 1;
    while(number1 != number2) {
        if(number1 == 31) {
            number1 = 1;
        } else {
            number1 += 1;
        }
        f1 += 1;
    }
    if(f1 == 1) {
        result = "あいこ";
    } else if(f1 > 16){
        result = "1の勝ち";
    } else {
        result = "2の勝ち";
    }
    console.log(result);
    }
}

canvas.addEventListener("click", e => {
    const rect = canvas.getBoundingClientRect();
    point = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
    for(f1 = 0; f1 < 5; f1++) {
        hit1[f1] =
        (fin1[f1].x <= point.x && point.x <= fin1[f1].x + fin1[f1].w)
        && (fin1[f1].y <= point.y && point.y <= fin1[f1].h + fin1[f1].y);
        if(hit1[f1]){
            if(check1[f1]) {
                check1[f1] = false;
                switch (f1) {
                    case 0:
                        FingerOne(435,60, "親","指","","", "thumb", "#f3f3f3");
                        break;
                    case 1:
                        FingerOne(380,100, "人","差","し","指", "index", "#f3f3f3");
                        break;
                    case 2:
                        FingerOne(325,120, "中","指","","", "middle", "#f3f3f3");
                        break;
                    case 3:
                        FingerOne(270,100, "薬","指","","", "ring", "#f3f3f3");
                        break;
                    case 4:
                        FingerOne(215,70, "小","指","","", "little", "#f3f3f3");
                        break;
                } 
            } else {
                check1[f1] = true;
                switch (f1) {
                    case 0:
                        FingerOne(435,60, "親","指","","", "thumb", "#fef0e3");
                        break;
                    case 1:
                        FingerOne(380,100, "人","差","し","指", "index", "#fef0e3");
                        break;
                    case 2:
                        FingerOne(325,120, "中","指","","", "middle", "#fef0e3");
                        break;
                    case 3:
                        FingerOne(270,100, "薬","指","","", "ring", "#fef0e3");
                        break;
                    case 4:
                        FingerOne(215,70, "小","指","","", "little", "#fef0e3");
                        break;
                } 
            }
        };
    };
    for(f2 = 0; f2 < 5; f2++) {
        hit2[f2] =
        (fin2[f2].x <= point.x && point.x <= fin2[f2].x + fin2[f2].w)
        && (fin2[f2].y <= point.y && point.y <= fin2[f2].h + fin2[f2].y);
        if(hit2[f2]){
            if(check2[f2]) {
                check2[f2] = false;
                switch (f2) {
                    case 0:
                        FingerTwo(215,60, "","","親","指", "thumb", "#f3f3f3");
                        break;
                    case 1:
                        FingerTwo(270,100, "人","差","し","指", "index", "#f3f3f3");
                        break;
                    case 2:
                        FingerTwo(325,120, "","","中","指", "middle", "#f3f3f3");
                        break;
                    case 3:
                        FingerTwo(380,100, "","","薬","指", "ring", "#f3f3f3");
                        break;
                    case 4:
                        FingerTwo(435,70, "","","小","指", "little", "#f3f3f3");
                        break;
                }
            } else {
                check2[f2] = true;
                switch (f2) {
                    case 0:
                        FingerTwo(215,60, "","","親","指", "thumb", "#fef0e3");
                        break;
                    case 1:
                        FingerTwo(270,100, "人","差","し","指", "index", "#fef0e3");
                        break;
                    case 2:
                        FingerTwo(325,120, "","","中","指", "middle", "#fef0e3");
                        break;
                    case 3:
                        FingerTwo(380,100, "","","薬","指", "ring", "#fef0e3");
                        break;
                    case 4:
                        FingerTwo(435,70, "","","小","指", "little", "#fef0e3");
                        break;
                }
            }
        };
    };
    if (225 <= point.x && point.x <= 475 && 300 <= point.y && point.y <= 400) {
        game();
    };
});

const setting = () => {
};

let check = true;
const about = () => {
    if (check) {
        document.querySelector(".about").innerHTML = "判別機";
        document.querySelector("main").style.display = "none";
        document.querySelector("#about").style.display = "flex";
        check = false;
    } else {
        document.querySelector(".about").innerHTML = "これについて";
        document.querySelector("main").style.display = "flex";
        document.querySelector("#about").style.display = "none";
        check = true;
    }
};
