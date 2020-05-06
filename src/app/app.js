import $ from 'jquery';

let isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

$(document).ready(() => {
  let docWidth = $(document).width();
  let imgLeft = (docWidth < 1440) ? '2%' : '-2%';


  if( !isMobile() ){
    $('.witcher').animate({
      left: imgLeft
    }, 1000 );
  }

})

$('#copy-button').on('click', () => {
  $('#copy-text').select();
  document.execCommand("copy");
  $('.copy-button-text').toggle();

  var selectedEffect = $( "#effectTypes" ).val();


  $('#label')
  .animate({opacity: '1'}, 300)
  .animate({opacity: '0'}, 3300);
});
