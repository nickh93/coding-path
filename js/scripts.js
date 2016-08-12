$(document).ready(function() {

  $("form#survey").submit(function(event){

    event.preventDefault();

    //input variables
    var end = $("input:radio[name=end]:checked").val();
    var software = $("#software").val();
    var sitetype = $("input:radio[name=sitetype]:checked");
    var size = $("#size").val();

    //begin ranching for mathcing

    if (end === "front") {

      //here we know that the user is into front-end development
      alert("you shoukd do CSS!")

    }
  });
});
