angular.module('todo')
  .controller('todoListController', ($scope) => {
  })
  .directive('todoList', () => ({
    restrict: 'E',
    templateUrl: 'views/todo-list.html',
    scope: {
      todos: '=',
      removeTodo: '=',
    }
  }));