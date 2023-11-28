var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d');
var paiting = false;
ctx.scale(2,2);

function startPosition(e){
    paiting = true;
    draw(e);
}

function endPosition(){
    paiting = false;
    ctx.beginPath();
}

function draw(e){
    if (!paiting) return;

    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.strokeStyle = document.getElementById('colorPicker').value;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); 

}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);