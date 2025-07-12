let score = JSON.parse(localStorage.getItem('score'))

            if (score === null){
                score = {
                    wins: 0,
                    looses: 0,
                    ties: 0,
                }
            }
            updateScoreElement()

            function playgame(playermove){
                const computermove = pickComputerMove();
                let result = '';
                if(playermove === 'rock'){
                    if(computermove === 'rock'){
                        result = 'Tie'
                    } else if (computermove === 'paper'){
                        result = 'You loose'
                    } else if (computermove === 'scissors'){
                        result = 'You win'
                    }
                } else if(playermove === 'paper'){
                    if(computermove === 'rock'){
                        result = 'You win'
                    } else if (computermove === 'paper'){
                        result = 'Tie'
                    } else if (computermove === 'scissors'){
                        result = 'You loose'
                    }
                } else if(playermove === 'scissors'){
                        if(computermove === 'rock'){
                            result      = 'You loose'
                        } else if (computermove === 'paper'){
                            result = 'You win'
                        } else if (computermove === 'scissors'){
                            result = 'Tie'
                        }
                }
                 if(result === 'You win'){
                    score.wins += 1;
                 }else if(result === 'You loose'){
                    score.looses += 1;
                 }else if (result === 'Tie'){
                    score.ties += 1;
                 }
                 localStorage.setItem('score', JSON.stringify(score));

                 updateScoreElement();


            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-pick').innerHTML = `You 
          <img src="./images/${playermove}-emoji.png" class="move-icon">
          <img src="./images/${computermove}-emoji.png" class="move-icon">
          Computer`;
            }

            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Looses: ${score.looses}, Ties: ${score.ties}`
            }
            function pickComputerMove(){
                const random = Math.random(0,1/3)
                
                let computermove = '';
                
                if (random >= 0 && random<= 1/3){
                    computermove = 'rock'
                } else if (random >= 1/3 && random<= 2/3){
                    computermove = 'paper'
                } else if (random >= 2/3 && random<= 1){
                    computermove = 'scissors'
                }
                return computermove;
            }