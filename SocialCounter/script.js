



$.ajax({
  type: "POST",
  url: ".\pyscript.py",
  data: { param: text}
  }).done(function(o) {
      console.log(data);
      console.log(text);
  });



  function runPython(){
    alert("pressed")
    $.ajax({
      type: "get",
      url: ".\pyscript.py",
      cache:false,
      async:'asynchronous'
      }).done(function(o) {
          console.log(data);
          console.log(text);
      });
  }