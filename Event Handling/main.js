// Generate a random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Vue App
new Vue({
    el: '#app',
    data: {
        guess: null,
        numberToGuess: generateRandomNumber(1, 100),
        message: 'Start guessing'
    },
    methods: {
        checkGuess: function() {
            if (this.guess === null || isNaN(this.guess)) {
                alert('Please enter a valid number.');
                return;
            }
            if (this.guess < this.numberToGuess) {
                this.message = 'Guess higher';
            } else if (this.guess > this.numberToGuess) {
                this.message = 'Guess lower';
            } else {
                this.message = 'You got it!';
            }
        },
        giveUp: function() {
            this.message = 'The number was ' + this.numberToGuess;
        },
        startOver: function() {
            this.numberToGuess = generateRandomNumber(1, 100);
            this.message = 'Start guessing';
            this.guess = null;
        }
    }
});
