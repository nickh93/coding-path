$(document).ready(function() {

  $("form#survey").submit(function(event){

    event.preventDefault();

    //input variables
    var end = $("input:radio[name=end]:checked").val();
    var software = $("#software").val();
    var sitetype = $("input:radio[name=sitetype]:checked");
    var size = $("#size").val();

    //begin branching for mathcing

    if (end === "front") {

      //here we know that the user is into front-end development
      alert("you shoukd do CSS!");

    } else {

      //here we know that the user is into back-end development
      if (software === "mobile") {

      //here we know that the user is into back-end and mobile development
      alert("you should do Java/Android");

    } else if (software === "web") {

      //here we know that the user is into back-end and web development
      alert("you have the options of doing more")
    } else if () 

    }
  });
});
