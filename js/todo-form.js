angular.module('todo')
  .controller('todoFormController', ($scope) => {
    $scope.onSubmit = (todo) => {
      $scope.addTodo(todo);
      delete $scope.todo;
    };
  })
  .directive('todoForm', () => ({
    templateUrl: 'views/todo-form.html',
    restrict: 'E',
    scope: {
      addTodo: '=',
    }
  }));