const mathOperations = {
    sum: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    divide: function(a, b) {
        if(b !== 0) {
            return a / b;
        } else {
            return 'Error';
        }
    },

    multiply: function(a, b) {
        return a * b;
    }
}

module.exports = mathOperations;