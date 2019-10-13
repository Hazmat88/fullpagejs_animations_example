
// FUNCTIONS INIT
fullPage_init();


// FULLPAGE_INIT
function fullPage_init(){
  $(document).ready(function() {
        $('#fullpage').fullpage({
        sectionsColor: ['#ff7675','#ffeaa7', '#55efc4'],
        anchors:['firstSection', 'secondSection', 'thirdSection'],
        menu: '.main-nav ul',
        navigation: true,
        navigationPosition:'left',
      });
  });
}
