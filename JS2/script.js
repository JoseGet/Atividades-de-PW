let cont_victorys = 0
let win = true
do
{
    console.log("Escolha sua jogada: \n1 - Papel \n2 - Pedra \n3 - Tesoura" );

    let player_choice = parseInt(prompt());

    if(player_choice != 1 && player_choice != 2 && player_choice != 3){
        console.log("Você perdeu! Jogada inválida !")
        break;
    }

    let computer_choice = Math.floor(Math.random() * 3) + 1;

    if(computer_choice == 1){
        console.log("O computador jogou Papel")
    } else if (computer_choice == 2){
        console.log("O computador jogou Pedra")
    } else{
        console.log("O computador jogou Tesoura")
    }

    if(computer_choice == player_choice){
        console.log("A rodada empatou !")
    }

    if(computer_choice == 1 && player_choice == 2){
        console.log("Você perdeu! A sua pontuação doi de " + cont_victorys)
        win = false
    } else if (computer_choice == 2 && player_choice == 1){
        console.log("Você ganhou !")
        cont_victorys++;
    }

    if(computer_choice == 2 && player_choice == 3){
        console.log("Você perdeu! A sua pontuação doi de " + cont_victorys)
        win = false
    } else if (computer_choice == 3 && player_choice == 2){
        console.log("Você ganhou !")
        cont_victorys++;
    }

    if(computer_choice == 3 && player_choice == 1){
        console.log("Você perdeu! A sua pontuação doi de " + cont_victorys)
        win = false
    } else if (computer_choice == 1 && player_choice == 3){
        console.log("Você ganhou !")
        cont_victorys++;
    }


}while(win == true)