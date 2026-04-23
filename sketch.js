function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#222"); // Fundo escuro para destacar o herói

  // Cabeça (Formato oval clássico)
  fill("#FF1100"); // Vermelho Aranha
  stroke(0);
  strokeWeight(3);
  ellipse(400, 400, 450, 550);

  // Desenho da Teia (Linhas básicas saindo do centro)
  strokeWeight(1);
  line(400, 125, 400, 675); // Vertical
  line(175, 400, 625, 400); // Horizontal
  line(230, 220, 570, 580); // Diagonal 1
  line(570, 220, 230, 580); // Diagonal 2

  // Olhos Máscara (Bordas pretas grossas)
  fill(0);
  // Olho esquerdo (angulado)
  push();
  translate(310, 380);
  rotate(radians(-20));
  ellipse(0, 0, 140, 200);
  pop();
  
  // Olho direito (angulado)
  push();
  translate(490, 380);
  rotate(radians(20));
  ellipse(0, 0, 140, 200);
  pop();

  // Parte Branca dos Olhos (Interna)
  fill(255);
  push();
  translate(310, 380);
  rotate(radians(-20));
  ellipse(0, 0, 100, 160);
  pop();
  
  push();
  translate(490, 380);
  rotate(radians(20));
  ellipse(0, 0, 100, 160);
  pop();

  // Pupilas (No Aranha, seriam o reflexo ou movimento da lente)
  // Elas vão se mover dentro da parte branca
  let desvioX = map(mouseX, 0, width, -20, 20);
  let desvioY = map(mouseY, 0, height, -25, 25);
  
  fill("#000000"); // Cinza claro para parecer um reflexo
  noStroke();
  circle(310 + desvioX, 380 + desvioY, 20);
  circle(490 + desvioX, 380 + desvioY, 20);
}
