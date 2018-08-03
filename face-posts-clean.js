//Author Paulo Henrique
//Clean Memory Facebook

CleanMemory = () =>
{
  var Pointer = 0;
  var PostToDelete = [];
  var Posts = document.getElementsByTagName('div');

  for(var i=0;i<Posts.length;i++){
    if(Posts[i].getAttribute('class') == "_4ikz" ){
      PostToDelete.push(Posts[i]);
    }
  }

  for(var x=0;x<PostToDelete.length;x++)
  {
    if(Pointer <= 10){
      PostToDelete[x].remove();
      PostToDelete.splice(x, 1);
      Pointer = Pointer +1;
      console.log("POST Deleted.");
    }
  }
  setTimeout(CleanMemory,60000);
}

setTimeout(CleanMemory,60000);
