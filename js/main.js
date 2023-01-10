$( "header nav .menu" ).toggle(
    function() {
      $( this ).addClass( "selected" );
    }, function() {
      $( this ).removeClass( "selected" );
    }
  );