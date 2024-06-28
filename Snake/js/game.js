(function () {
  let FPS = 10
  const SIZE = 40

  let board;
  let snake;

  let start_game = false
  let game_state = true
  let end_game = false
  let restart = false

  let pontuacao = 0;
  let food_board

  let contador_frames = 0;

  let cor_atual = ""

  const Pontuacao = document.createElement("div");
  Pontuacao.textContent = "00000";
  Pontuacao.style.position = "absolute";
  Pontuacao.style.top = "3px";
  Pontuacao.style.left = "3px";
  Pontuacao.style.padding = "10px";

  const FimDeJogo = document.createElement("div");
  FimDeJogo.textContent = "Fim do jogo!";
  FimDeJogo.style.position = "fixed";
  FimDeJogo.style.top = "3px";
  FimDeJogo.style.right = "453px";
  FimDeJogo.style.padding = "10px";
  FimDeJogo.style.display = "none";
  document.body.appendChild(FimDeJogo);

  function init() {
    
    document.body.appendChild(Pontuacao);

    board = new Board(SIZE);
    snake = new Snake([[4, 4], [4, 5], [4, 6]])
    food_board = food()
  }

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (snake.direction !== 2) {
          snake.changeDirection(0);
        }
        break;
      case "ArrowRight":
        if (snake.direction !== 3) {
          snake.changeDirection(1);
        }
        break;
      case "ArrowDown":
        if (snake.direction !== 0) {
          snake.changeDirection(2)
        }
        break;
      case "ArrowLeft":
        if (snake.direction !== 1) {
          snake.changeDirection(3)
        }
        break;
      default:
        break;
    }
  })

  class Board {
    constructor(size) {
      this.element = document.createElement("table")
      this.element.setAttribute("id", "board")
      this.color = "#ccc";
      document.body.appendChild(this.element)
      for (let i = 0; i < size; i++) {
        const row = document.createElement("tr")
        this.element.appendChild(row);
        for (let j = 0; j < size; j++) {
          const field = document.createElement("td");
          row.appendChild(field)
        }
      }

      this.element.style.marginTop = "30px";

    }

  }

  class Snake {
    constructor(body) {
      this.body = body;
      this.color = "#222";
      this.direction = 1; // 0 para cima, 1 para direita, 2 para baixo, 3 para esquerda
      this.comeu = false;
      this.body.forEach(field => document.querySelector(`#board tr:nth-child(${field[0]}) td:nth-child(${field[1]})`).style.backgroundColor = this.color)
    }
    walk() {
      const head = this.body[this.body.length - 1];

      const collision = this.body.slice(0, -1).some(segment => segment[0] === head[0] && segment[1] === head[1]);

      if(head[0] < 0 || head[1] < 0 || head[0] >= SIZE || head[1] >= SIZE || collision){
        end_game = true
      }else{
        let newHead;
        switch (this.direction) {
          case 0:
            newHead = [head[0] - 1, head[1]]
            break;
          case 1:
            newHead = [head[0], head[1] + 1]
            break;
          case 2:
            newHead = [head[0] + 1, head[1]]
            break;
          case 3:
            newHead = [head[0], head[1] - 1]
            break;
          default:
            break;
      }

        this.body.push(newHead)
        document.querySelector(`#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`).style.backgroundColor = this.color
        
        if(!this.comeu) {
          const oldTail = this.body.shift()
          document.querySelector(`#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`).style.backgroundColor = board.color
        } else {
          this.comeu = false;
        }

      }

    }
    changeDirection(direction) {
      this.direction = direction
    }
  }

  function run() {

    if(game_state === true && end_game === false){
      snake.walk()

      let cor_food_board = cor_atual 

      if(food_board[0] == snake.body[snake.body.length - 1][0] && food_board[1] == snake.body[snake.body.length - 1][1]){

        if (cor_food_board == "vermelho") {
          pontuacao += 2; 
        } else {
          pontuacao += 1; 
        }

        aumentar_pontos();
        food_board = food();
        snake.comeu = true;
      }

      contador_frames = contador_frames + 1;
      if (contador_frames >= 60) {
        contador_frames = 0;
        FPS *= 1.01;
        clearInterval(dificuldade);
        dificuldade = setInterval(run, 1000 / FPS)
      }

    }

    if(end_game === true){
      FimDeJogo.style.display = "block";
      start_game = false;
      restart = true;
    }

  }

  function aumentar_pontos() {
    Pontuacao.textContent = pontuacao.toString().padStart(5, "0");
  }

  function food(){

    let food;

    let randow_number = Math.floor(Math.random() * 6) + 1;

    do {
      food = [Math.floor(Math.random() * 40) + 1, Math.floor(Math.random() * 40) + 1];
    } while (snake.body.some(segment => segment[0] === food[0] && segment[1] === food[1]));

    if(randow_number <= 2){
      document.querySelector(`#board tr:nth-child(${food[0]}) td:nth-child(${food[1]})`).style.backgroundColor = "#ff0000";
      cor_atual = "vermelho"
    } else {
      document.querySelector(`#board tr:nth-child(${food[0]}) td:nth-child(${food[1]})`).style.backgroundColor = "#222"
      cor_atual = "preto"
    }

    return food

  }

  addEventListener("keydown", function(event){

    if(event.key == "p"){
      game_state = !game_state
    }

  })
  

  addEventListener("keydown", function(event){
    if(event.keyCode == 83 && start_game == false && restart == false){
      start_game = true
      end_game = false
      pontuacao = 0;  
      Pontuacao.textContent = "00000";
      dificuldade = setInterval(run, 1000 / FPS)
    } else if (event.keyCode == 83 && restart == true){
      location.reload();
    }
  })

  let dificuldade;

  init()

})()