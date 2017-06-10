var Tasks = require('./Tasks.js');

exports.tasks = function (req, res) {
	res.json(Tasks);
};

exports.task = function (req, res) {
	res.json(Tasks[req.param.taskId]);
};

