$(document).ready(function(){

  $( "img" ).each(function() {
    $(this).attr("src", "https://placekitten.com/"+this.width+'/'+this.height);
  });

  $("#zorro_button").click(function() {
  });
});

