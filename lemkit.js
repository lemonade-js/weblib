/*                                     
 __    _____ _____ _____ _____ _____ 
|  |  |   __|     |  |  |     |_   _|
|  |__|   __| | | |    -|-   -| | |  
|_____|_____|_|_|_|__|__|_____| |_|  
                                     
*/

const lemkit = {
    getNum(min, max) {
        return Math.random() * (max - min) + min;
    },

    getInt(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    },

    getItem(array) {
        return array[this.getInt(0, array.length - 1)];
    },

    arrayShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    getChance(...chances) {
        const totalProbability = chances.reduce((sum, prob) => sum + prob, 0);
        const randomValue = this.getNum(0, totalProbability);
        
        let cumulativeProbability = 0;

        for (let i = 0; i < chances.length; i++) {
            cumulativeProbability += chances[i];

            if (randomValue < cumulativeProbability) {
                return i;
            }
        }
    }
};