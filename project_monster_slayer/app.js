new Vue({
    el: '#app',
    data: {
        playerName: 'Player',
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.addTurn('Attack',  `Player hits Monster for ${damage} HP`);
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.addTurn('Special', `Player hits Monster hard for ${damage} HP`);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal(){
            this.playerHealth <= 90 ? this.playerHealth += 10 : this.playerHealth = 100;
            this.addTurn('Heal', `Player heals for 10 HP`);
            this.monsterAttacks();
        },
        giveUp(){
            this.gameIsRunning = false;
        },
        monsterAttacks() {
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage;
            this.checkWin();
            this.addTurn('Monster', `Monster hits Player  ${damage} HP`);
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        addTurn(action, text) {
            if(this.turns.length >= 10) {
                this.turns.pop();
            }
            this.turns.unshift({
                action,
                text,
            });
        }
    },
    created: function() {
        this.playerName = prompt('Please, enter your name', 'Player');
    }
})