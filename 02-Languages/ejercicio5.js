class SlothMachine {
    constructor() {
      this.coins = 0;
    }
  
    play() {
        this.coins++;

        const reel1 = Math.random() < 0.5;
        const reel2 = Math.random() < 0.5;
        const reel3 = Math.random() < 0.5;
        
        if (reel1 && reel2 && reel3) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log('Good luck next time!!');
        }
    }
  }
  
  const machine1 = new SlothMachine();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  