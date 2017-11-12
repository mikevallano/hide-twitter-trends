function hideTrends () {
  $('.trends').hide()
  $('.LiveVideoHomePageModuleContainer').hide() //also hide live video
}

$(document).ready(function(){
  console.log('document ready')
  hideTrends()

  $('div[role="navigation"]').click(function(){
    console.log('div link clicked')
    hideTrends()
  })

  $('a.js-user-profile-link').click(function(){
    console.log('profile link clicked')
    hideTrends()
  })
});

// $(document).ajaxComplete(function() {
//   console.log('ajax complete called')
//   hideTrends()
// });

// $(document).ajaxSuccess(function() {
//   console.log('ajax success called')
//   hideTrends()
// });

// $(document).change(function(){
//   console.log('doc changed')
//   if ($('.trends').is(':visible')) {
//     hideTrends()
//   }
// })

// $(window).load(function() {
//   console.log('window loaded')
//   hideTrends()
// });

// $(window).change(function(){
//   console.log('window changed')
//   hideTrends()
// })

// $(window).on('load', function () {
//   console.log('window loaded')
//   hideTrends()
// });

// $(window).bind("load", function() {
//   console.log('window loaded')
//   hideTrends()
// });

