

$("#createUser").on("click", function(event) {
    event.preventDefault();
  
    // Make a User object
    var newUser = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      size: $("#size").val().trim(),
      type: $("#type").val().trim()
    };
  
    
    $.post("/api/new", newUser)
      
      .then(function(data) {
       
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
    $("#size").val("");
    $("#type").val("");
  });
  
  