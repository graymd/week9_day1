var indexCtrl = calculator.controller('indexCtrl', function($scope){
  $scope.calcInput = '';
  $scope.userInputs = [];

  $scope.clearCalculation = function() {
    $scope.calcInput = '';
    $scope.userInputs = [];
  };

  $scope.userNumber1 = function() {
    $scope.calcInput = $scope.calcInput.concat(1);
    console.log(1);
  };
  $scope.userNumber2 = function() {
    $scope.calcInput = $scope.calcInput.concat(2);
    console.log(2);
  };
  $scope.userNumber3 = function() {
    $scope.calcInput = $scope.calcInput.concat(3);
    console.log(3);
  };
  $scope.userNumber4 = function() {
    $scope.calcInput = $scope.calcInput.concat(4);
    console.log(4);
  };
  $scope.userNumber5 = function() {
    $scope.calcInput = $scope.calcInput.concat(5);
    console.log(5);
  };
  $scope.userNumber6 = function() {
    $scope.calcInput = $scope.calcInput.concat(6);
    console.log(6);
  };
  $scope.userNumber7 = function() {
    $scope.calcInput = $scope.calcInput.concat(7);
    console.log(7);
  };
  $scope.userNumber8 = function() {
    $scope.calcInput = $scope.calcInput.concat(8);
    console.log(8);
  };
  $scope.userNumber9 = function() {
    $scope.calcInput = $scope.calcInput.concat(9);
    console.log(9);
  };
  $scope.userNumber0 = function() {
    $scope.calcInput = $scope.calcInput.concat(0);
    console.log(0);
  };
  $scope.userNumberPlus = function() {
    $scope.userInputs.push($scope.calcInput);
    console.log($scope.userInputs);
    $scope.calcInput = '';
    console.log($scope.calcInput);
    console.log('+');
  };
  $scope.userNumberMinus = function() {
    $scope.userInputs.push($scope.calcInput);
    $scope.calcInput = '-';
    console.log($scope.userInputs);
    console.log('-');
  };
  $scope.userNumberEquals = function() {
    // add final item to array and then reduce
    $scope.userInputs.push($scope.calcInput);
    $scope.userInputs = $scope.userInputs.map(Number);
    console.log($scope.userInputs);
    var total = _.reduce($scope.userInputs, function(memo, num){return memo + num; },0);
    console.log(total);
    $scope.calcInput = total;
    $scope.userInputs = [];
    console.log('=');
  };

});


// var array1 = ['1','2','3'];
// console.log(array1);
// var array2 = array1.map(Number);
// console.log(array2);
// var total = _.reduce(array2, function(memo, num){return memo + num; }, 0)
// console.log(total)



