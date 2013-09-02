var Tasks = function() {

this.TaskList = {};
this.NewId=0;

this.GetAll = function() {
	return this.TaskList;
};

this.Add = function(task) {
    this.TaskList[task['id']] = task;
};

this.DropItem = function(id) {
	delete this.TaskList[id];
}

this.GetId = function() {
   return this.NewId++;
}

this.EditItem = function(text) {
    
}
}

var tasks = new Tasks();
