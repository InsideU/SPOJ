
var express = require('express'); 
var app = express(); 


app.listen(3000, function() { 
	console.log('server running on port 3000'); 
} ) 

// Function callName() is executed whenever 

app.get('/', callName); 

function callName(req, res) { 
	
	// Use child_process.spawn method from 
	// child_process module and assign it 
	// to variable spawn 
	var spawn = require("child_process").spawn; 
	
	// Parameters passed in spawn - 

	
	
	var process = spawn('bash',["compare.sh",req.query.firstuser,req.query.seconduser]); 
	console.log(req.query.firstuser)

	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 
	process.stdout.on('data', function(data) { 
		res.end(data.toString()); 
	} ) 
} 


