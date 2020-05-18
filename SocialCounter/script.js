
function run(){
  $.ajax({
    type: 'get',
    url: "pyscript.py",
    //data: {param: input}, passing some input here
    dataType: "text",
    success: function(response){
       output = response;
       alert(output);
    }
  }).done(function(data){
  console.log(data);
  alert(data);
  });
}