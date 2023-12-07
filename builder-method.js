module.exports = function makeDoJustOnething(operation1, opteration2){
    return function doJustOneThing(parameter1, parameter2){
        let firstCalculation = operation1(parameter1,parameter2);
        let secondCalculation = opteration2(firstCalculation);
        return secondCalculation;
    }
}

