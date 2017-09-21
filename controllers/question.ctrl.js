myApp.controller('QuestionCtrl', QuestionCtrl);

/**
@param $log[object] logging information
@param $state[object] state management
@param $http[object] handle http request
*/
function QuestionCtrl($scope, projectListValue) {
  const vm = this;
  vm.questions = projectListValue;
  vm.showGraph = false;
  vm.labels = ['correct', 'incorrect'];

  vm.submit = function(answers) {
      console.log(answers);
      if($scope.questionForm.$valid) {
      	let data = checkAnswer(answers)
      	vm.graphData = [data.correct, data.incorrect, 0]
      	vm.showGraph = true;
      }
  }

  vm.clear = function() {
      $scope.questionForm.$setPristine();
      $scope.questionForm.$setUntouched();
      $scope.questionForm.$submitted = false;
      vm.answers = {};
  }

  function checkAnswer(answers){
  	let data = {
  		correct:0,
  		incorrect: 0
  	}
    for (let question of vm.questions) {
    	console.log(question)
    	let answer = answers[question.model]
    	let answerIndex = question.options.indexOf(answer)
        if (question.answer == answerIndex){
        	data.correct += 1; 
        }
        else {
            data.incorrect += 1;
        }
    }
    return data;
  }

}
