let user = document.getElementById("UserName");
let pwd =  document.getElementById("password");


function Validate(callback) 
{
   
  if(user.value=="admin"&&pwd.value=="12345")
  {
   alert("Login successfull")
   callback();
  }else
    alert("You have entered an invalid User Name or Password!")
    return false;
}

function redirect(){
    window.location.href = 'mainpage.html';
}

function Ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState==4&&this.status==200){
      var data = JSON.parse(this.responseText);
      myFunction(data);
    }
  };
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
Ajax();

function myFunction(data){

  data.forEach( function (obj){
    if(obj.completed==true){  
      $('#Demo').append('<input class="form-check-input" type="checkbox" disabled="true" checked value="'+obj.id+'"/> '+obj.title +'<br/>');
    }
    else{  
      $('#Demo').append('<input class="form-check-input" id="check" type="checkbox" value="'+obj.id+'"/> '+obj.title +'<br/>');
    }
  });
}


$(document).ready(function(){
  
  $('body').on('change', 'input[type="checkbox"]',function(){

    var promise = new Promise(function(resolve, reject){

      count = $('input[type=checkbox]:checked').not(':disabled').length;
      if(count==5){
          resolve("Congrats. 5 Tasks heve been Successfully Completed");
      }else{
          reject(`you have completed ${count} Tasks`);
      }

    });
    promise.then(function(s){
       alert(s);
      })
      .catch(function(e){
      console.log(e);
    })
  });
})
