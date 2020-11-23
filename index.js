express= require('express');
const http =require('http');
const socketIo = require('socket.io');
const app=express();
const firebase=require('firebase/app');
var database=require('firebase/database');
const port=process.env.port;
var config = {
    apiKey: "AIzaSyB3-V17zRPYZJCEvdcenQCLqF0ez23p2pM",
    authDomain: "varun1-83ea3.firebaseapp.com",
    databaseURL: "https://varun1-83ea3.firebaseio.com",
    projectId: "varun1-83ea3",
    storageBucket: "varun1-83ea3.appspot.com",
    messagingSenderId: "278168348282"
  };
  firebase.initializeApp(config);
  var qwxyz;
  app.get('/',function(req,res){
   // var post="tej";
    //var x=firebase.database().ref("/login/");
   //x.push(post);
   //var z={
     //a:'abc',
     //p:'pqr'
  // }
   //res.send(z);
   res.send("hello world!!");
 });
 const server=http.Server(app);
 server.listen(port);
 
 


//const io = socketIo(server);

//io.on('connect',(socket)=>{
  //  socket.emit('response',{
    //   greeting:'hello world',
      //  abc:'abc'
    //});
    //socket.on('request',(data)=>{
      //  console.log(data);
    //});
//});
 //console.log("abcdefg");
 // module.exports= { f:function(){
   //   console.log("i am f");
  //}
//}
console.log("asdfg");
app.post('/login', function (req, res) {
	var post=req.body;
	console.dir(req.body);
  	res.send("Sending some message");
   var x=firebase.database().ref().child('login');
    x.on("value",function(data,err){
       // var key=data.forEach(s);
       var z=[];
        data.forEach(function(cdata){
            var c=cdata.val();
          if(post==c){
            res.send("success");
          }
           // z.push(c);
           // console.log(c);
           //console.log(array[0]);
        })
       // console.log(key['-LOCk_uW3RZYcKV_heCk']);
       //console.log(z[1]);
      
    });
});
app.post('/signin', function (req, res) {
	//var post=req.body;
	//console.dir(req.body);
  //	res.send("Sending some message");
  var post="abcdefg";
   var x=firebase.database().ref("/login/").push("post");
    
});


//var r=firebase.database().ref("/server/").orderByValue("qwerty");
  // console.log(r);
//r.once("value", function(data) {
    //console.log(data.toJSON());  //call the .val() here
  //  xyz=JSON.parse(data.toJSON());  
   
    //console.log(xyz);
  //}, function (errorObject) {
   //console.log("The read failed: " + errorObject.code);
  //});
  
function f(){
    var x=firebase.database().ref().child('server');
    x.on("value",function(data,err){
       // var key=data.forEach(s);
       var z=[];
        data.forEach(function(cdata){
            var c=cdata.val();
            z.push(c);
           // console.log(c);
           //console.log(array[0]);
        })
       // console.log(key['-LOCk_uW3RZYcKV_heCk']);
       console.log(z[1]);
    });
}
//f();
