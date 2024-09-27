const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.use((err,req,res,next)=>{
	
})

app.post('/todo',(req,res)=>{

});

app.get('/todos',(req,res)=>{
	
});

app.put('/completed',(req,res)=>{

});

app.delete('/',(req,res)=>{
	
}); 

app.listen(port);
