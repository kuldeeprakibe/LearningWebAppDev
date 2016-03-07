function exercise1(nums) {
        var length = nums.length;
        var total = nums.reduce(function(sum, value){
            return sum + value;
        });
        return total / length;
}

function exercise2(nums) {
        var max = nums[0];
        return nums.reduce(function(value, max){
            if (value > max) {
                max = value;
            }
            return max;
        });
    }

function exercise3(nums) {
        return nums.some(function(value){
            return (value % 2) === 0; 
        });
    }

function exercise4(nums) {
        return nums.every(function(value){
            return (value % 2) === 0; 
        });
    }

function arrayContains(sArray, str) {
        return sArray.some(function(value){
            return value == str;
        });
    }

function arrayContainsTwo(sArray, str) {
    var counter = 0;
      sArray.forEach(function(value){
            if (value == str) {
                counter++;
            } 
        });
        if (counter >= 2) return true;
        else return false;
    }

function arrayContainsThree(sArray, str) {
    var counter = 0;
    
      sArray.forEach(function(value){
            if (value == str) {
                counter++;
            } 
        });
        if (counter >= 3) return true;
        else return false;
        
    }

function arrayContainsNTimes(sArray, str, n) {
    var counter = 0;
      sArray.forEach(function(value){
            if (value == str) {
                counter++;
            } 
        });
        if (counter >= n) return true;
        else return false;
        
 }