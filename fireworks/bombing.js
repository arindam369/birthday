const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const sound=document.getElementById("sound");

canvas.height = innerHeight;
canvas.width = innerWidth;

const mouse = {
    x: undefined,
    y: undefined
}
const gravity=0.005;
const friction=0.99;
const power=8;

window.addEventListener("resize",function(){
    canvas.innerHeight = innerHeight;
    canvas.innerWidth = innerWidth;
})

class Particle{
    constructor(x,y,radius,color,velocity){
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha=1;
    }

    draw_particle(){
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle=this.color;
        c.fill();
        // c.stroke( );
        c.closePath();
        c.restore();
    }
    update_particle(){
        this.draw_particle();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.velocity.y += gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha-=0.005;
    }
}

let particleArray=[];


function animate(){
    requestAnimationFrame(animate);
    c.fillStyle="rgba(0,0,0,0.05)";
    c.fillRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<particleArray.length;i++){
        if(particleArray[i].alpha>0){
            particleArray[i].update_particle();
        }
        else{
            particleArray.splice(i,1);  // removing the particles from the array whose alpha value < 0
        }
    }
    // console.log(particleArray);
}
animate();


window.addEventListener("click", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);

    const noOfParticles = 200;
    const angleIncrement = (2*Math.PI)/noOfParticles;


    for(var i=0;i<noOfParticles;i++){
        particleArray.push(new Particle(mouse.x,mouse.y,1.3,`hsl(${Math.random()*360},50%,50%)`,
        {
            x:Math.cos(angleIncrement*i) * Math.random()*power,
            y:Math.sin(angleIncrement*i) * Math.random()*power
        }));   // velocity is an object
    }
    for(var i=0;i<particleArray.length;i++){
        particleArray[i].draw_particle();
    }
    sound.play();
})

window.addEventListener("resize",function(){
    canvas.height=innerHeight;
    canvas.width = innerWidth;
})


// automatic blast
function init(){
    const noOfParticles = 200;
    const angleIncrement = (2*Math.PI)/noOfParticles;

    var myX = Math.random()*innerWidth;
    var myY = Math.random()*innerHeight;

    for(var i=0;i<noOfParticles;i++){
        particleArray.push(new Particle(myX,myY,1.3,`hsl(${Math.random()*360},50%,50%)`,
        {
            x:Math.cos(angleIncrement*i) * Math.random()*power,
            y:Math.sin(angleIncrement*i) * Math.random()*power
        }));   // velocity is an object
    }
    for(var i=0;i<particleArray.length;i++){
        particleArray[i].draw_particle();
    }
}

function autoBlast(){   // interval of 2s
    setInterval(function(){
        init();
        sound.play();
    },2000);
}
autoBlast();