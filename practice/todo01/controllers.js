function TasksCtrl($scope) {
	$scope.tasks = tasks;

	$scope.AddTask = function(newTask) {
		var item = {'text': newTask, 'id': GetId() }
		Add(item);
	}

	$scope.DeleteTask = function(id) {
		DropItem(id);
	}
}