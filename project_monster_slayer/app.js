new Vue({
    el: '#app',
    data: {
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
            this.turns.unshift({
                action: 'Attack',
                text: `Player hits Monster for ${damage} HP`
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                action: 'Special',
                text: `Player hits Monster hard for ${damage} HP`
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal(){
            this.playerHealth <= 90 ? this.playerHealth += 10 : this.playerHealth = 100;
            this.turns.unshift({
                action: 'Heal',
                text: `Player heals for 10 HP`
            });
            this.monsterAttacks();
        },
        giveUp(){
            this.gameIsRunning = false;
        },
        monsterAttacks() {
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                action: 'Monster',
                text: `Monster hits Player  ${damage} HP`
            });
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
        }
    }

})