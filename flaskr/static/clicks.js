/*define variables*/
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
var numUpvotes = 1;
var numDownvotes = 0;
var percentApproval = (numUpvotes/(numUpvotes + numDownvotes)) * 100;

window.onload = function(){
  var uv = document.getElementById("uvButton");
  var dv = document.getElementById("dvButton");
  var ac = document.getElementById("addComment");
    /*create functions that add 1 to respective variables on click*/

  uv.onclick = funct();
  function (fu) 
  /*uv.onclick = function () {
    numUpvotes++;
    console.log(numUpvotes);
  }*/

  dv.onclick = function () {
    numDownvotes++;
    console.log(numDownvotes);
  }
  ac.onclick = function() {
    
  }

}

uv.addEventListener("click", uv.onclick);
dv.addEventListener("click", dv.onclick);
ac.addEventListener("click", ac.onclick);



/*numUpvotes = [total clicks on upvote?]
numDownvotes = [total clicks on downvote?]
var percentApproval = (numUpvotes / (numUpvotes + numDownvotes)) * 100*/