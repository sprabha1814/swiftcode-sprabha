var app = angular .module('chatApp',['ngMaterial']);

app.controller('chatController',function ($scope) {

	$scope.message = [
	{
		sender:"USER",
		text:"Hello World",
	     time:"11:00 am"},
		{
			sender:"BOT",
			text:"Hey!!",
			time:"12:00 am"

		}];

var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };


});
