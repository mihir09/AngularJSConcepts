const customMatchers = {
    toBeCalculator: function(){
        return {
            compare: function(actual, start = 1, end = 10){
                const result = {
                    // pass: actual instanceof Calculator,
                    pass: (start <= actual) && (actual <=end),
                    message: ''
                }
                if(result.pass){
                    result.message = "Expected "+ actual + " not to be instance of calculator"
                }
                else{
                    result.message = "Expected "+ actual + " to be instance of calculator"
                }

                return result;
            }
        }
    }
}