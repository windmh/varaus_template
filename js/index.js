$(function () {
    $('.gallery-container ul').isotope({
      itemSelector: 'li'
    })

    // code cho phan nut
    $('.gallery-filters ul li a').click(function (e) { 
        // console.log("da click");
      e.preventDefault();
    //   console.log(this);
      var room = $(this).data('room');
      
      if(room === 'classic'){
        $(".gallery-container ul").isotope({ filter: '*' });
      } else{
        room = "." + room;
        $(".gallery-container ul").isotope({ filter: room });
      }
      
    });
});