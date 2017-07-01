/**
 * Created by austi on 7/1/2017.
 */
new Vue({
   el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },

    methods: {

        startGame: function () {
           this.gameIsRunning = true;
           this.playerHealth = 100;
           this.monsterHealth = 100;
       },

        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        attack: function () {

            this.monsterHealth -= this.calculateDamage(3, 10);

            if(this.checkWin()) {
                return;
            }
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        specialAttack: function () {
            
        },
        heal: function () {
            
        },
        giveUp: function () {
            
        },
        checkWin: function () {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')){
                    this.startGame()
                }else {
                    this.gameIsRunning = false
                }
                return;
            }
            else if (this.playerHealth <= 0) {
                if(confirm('You lost! New Game?')){
                    this.startGame();
                } else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});