// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Downtown",
	"artist":"Anitta ft. Jbalvin",
	"mp3Url":"https://www.youtube.com/watch?v=qu5l42GFgFc",
	"imageUrl":"https://i.scdn.co/image/fba406f05dd5f28dc81873ef7f798149f177af02",
}

var myPlayList = [
	{
	"title":"Downtown",
	"artist":"Anitta ft. Jbalvin",
	"mp3Url":"https://www.youtube.com/watch?v=qu5l42GFgFc",
	"imageUrl":"https://i.scdn.co/image/fba406f05dd5f28dc81873ef7f798149f177af02",
		
	},
	{
		"title":"La Modelo",
		"artist":"Ozuna ft Cardi B",
		"mp3-url":"https://www.youtube.com/watch?v=EH2XAe7ayy0",
		"image-url":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/b6/70/4c/b6704c61-a452-e495-d0fc-1aabc2ed0691/697691884097.jpg/268x0w.jpg",
	},
	{
		"title":"Dura",
		"artist":"Daddy Yankee",
		"mp3-url":"https://www.youtube.com/watch?v=xaDUws6snrQ",
		"image-url":"http://4.bp.blogspot.com/-MOndwp8u93g/WmDhWAfRuTI/AAAAAAAAADs/aVNxtE_hExEx2woDBixTkt838IcSG3p0ACK4BGAYYCw/s1600/Dura%2B-%2BSingle.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	    $('body').append(`<img src="${mySong.imageUrl}">`);
    $('body').append(`<p> Title: ${mySong.title} </p>`);
    $('body').append(`<p> Artist: ${mySong.artist} </p>`);
    $('body').append(`<p>mp3-url: <a href= "${mySong.mp3Url}">downtown</a></p>`);


});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
