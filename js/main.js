$(function(){
  $(document).foundation();
  var userLang = navigator.language || navigator.userLanguage;
  moment.locale(userLang);
  $('.post_time').each(function(time){
    $(this).text(moment($(this).text()).format("LLLL"))
  });
});
