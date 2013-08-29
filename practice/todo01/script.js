var tasks = [];
var newId = 0;

function GetAll() {
	return tasks;
};

function Add(task) {
    tasks.push(task);
};

function DropItem(id) {
	for (var i=0; i<tasks.length; i++) {
		if (tasks[i]['id'] === id) {
			tasks.splice(i,1);
		}
	}
}

function GetId() {
   return newId++;
}