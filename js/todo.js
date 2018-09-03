angular.module('todo', [])
  .controller('todoController', ($scope) => {
    $scope.todos = [];
    let id = 1;
    $scope.addTodo = (todoItem) => {
      const todo = {
        ...todoItem,
        id: id++,
      };
      $scope.todos.push(todo);
      delete $scope.todo;
    };
    $scope.removeTodo = (todoId) => {
      const todoIndex = $scope.todos.findIndex((todo) => todo.id === todoId);
      $scope.todos.splice(todoIndex, 1);
    };
  })
  .component('todoPage', {
    templateUrl: 'views/todo.html',
  });