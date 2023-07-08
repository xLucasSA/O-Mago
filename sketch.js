let tamanhoGeral = 50
let velocidade = 2
let andaY = 0
let andaX = 0

function setup() {
  createCanvas(900, 700);
  mago = loadImage("Mago.png")
  grama = loadImage("grass.jpg")
  agua = loadImage(".water.jpg")
  ponte = loadImage("bridge.png")
}
  
function draw() {
  
  // Criação de Cenário
  for(let i = 0; i  < 18; i++) {
    for(let j = 0; j < 14; j++){
      image(grama,tamanhoGeral*i,j*tamanhoGeral,tamanhoGeral,tamanhoGeral)
    }
  }
  for(let i = 0; i  < 14; i++) {
    image(agua, 400,i*tamanhoGeral,tamanhoGeral, tamanhoGeral)
    image(agua, 450,i*tamanhoGeral,tamanhoGeral, tamanhoGeral)
    image(agua, 500,i*tamanhoGeral,tamanhoGeral, tamanhoGeral)
  }
  image(ponte, 400,500,150,100)
  image(mago,andaX,andaY,tamanhoGeral,tamanhoGeral)
  
  
  
  // Movimentações
  if (keyIsDown(DOWN_ARROW)){
    andaY += velocidade
  }
  if (keyIsDown(UP_ARROW)){
    andaY -= velocidade
  }
  if (keyIsDown(LEFT_ARROW)){
    andaX -= velocidade
  }
  if (keyIsDown(RIGHT_ARROW)){
    andaX += velocidade
  }
  
  
  
  // Colisões paredes externas
  if (andaX < 0){
    andaX = 0
  }
  if (andaX > 900 - tamanhoGeral){
    andaX = 900 - tamanhoGeral
  }
  if (andaY < 0){
    andaY = 0
  }
  if (andaY > 700 - tamanhoGeral){
    andaY = 700 - tamanhoGeral
  }
  
  // Colisões água
  if ((andaX > 400 - tamanhoGeral) && (andaY >=520 || andaY <= 500)){
    andaX = 400 - tamanhoGeral
  }
  if ((andaX < 500 + tamanhoGeral && andaX > 400 - tamanhoGeral) && (andaY >=520 || andaY <= 500) ){
    andaX = 500 + tamanhoGeral
  }
  
}