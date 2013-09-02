function TasksCtrl($scope) {
	$scope.tasks = tasks;
	$scope.editFormVisible = "hidden";

	$scope.AddTask = function(newTask) {
		var item = {'text': newTask, 'id': tasks.GetId() }
		tasks.Add(item);
		this.newTask = '';
	}

	$scope.DeleteTask = function(id) {
		tasks.DropItem(id);
	}

	$scope.EditTask = function(id) {
		$scope.editFormVisible="visible";
		$scope.editTaskField = {
			'text': tasks.TaskList[id]['text'],
			'id': tasks.TaskList[id]['id']
		}
	}

	$scope.SaveTaskChanges = function(task) {
		tasks.TaskList[task['id']]['text'] = $scope.editTaskField['text'];
		$scope.editFormVisible="hidden";
	}
}