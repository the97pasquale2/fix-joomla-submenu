//Fix submenu
jQuery(document).ready(changeMenu);
jQuery(window).on('resize', changeMenu);


function changeMenu() {      
  
	var isMobile = onMobile();
    if (isMobile == true) {
      unsetHref();
      jQuery("a.btn-navbar").click(
        function() {
      		jQuery( ".clicked_link" ).removeClass("clicked_link");
      	}
     );
    } else {
      reset();
    }
 }


function reset() {
  var deeperItems = jQuery( "li.deeper" );
  for(var i = 0; i < deeperItems.length; i++) {
    var currentItem = deeperItems[i];
    var linkItem = jQuery(currentItem).children("a");
    var hrefOld = jQuery(linkItem).attr("href_old");
    if(hrefOld != null) {
      jQuery(linkItem).attr("href", hrefOld);
      jQuery(linkItem).attr("href_old", null);
      jQuery(linkItem).click(null);  
    }
  }
}

function unsetHref() {
  var deeperItems = jQuery( "li.deeper" );
  for(var i = 0; i < deeperItems.length; i++) {
    var currentItem = deeperItems[i];
    var linkItem = jQuery(currentItem).children("a");
    var href = jQuery(linkItem).attr("href");
    if(href != null) {
      jQuery(linkItem).attr("href_old", href);
      jQuery(linkItem).attr("href", null);
      jQuery(linkItem).click(clickedDeeperItem);  
    }
  }
}

function clickedDeeperItem() {
	var alreadyClicked = jQuery(this).hasClass("clicked_link");
  	if(alreadyClicked) {
      var url = jQuery(this).attr("href_old");
      if(url != null) {
        window.location = url;
      }
    } else {
      jQuery(this).addClass("clicked_link");
    }
}

function onMobile() {
  //Checks if on mobile
  var btnMenu = jQuery( ".btn-navbar" );
  var isMobile = false;
  if(btnMenu.css('display')!='none') {
  	isMobile = true;       
  }
  return isMobile;
}
