(function(f){var e="togglecontent",d=e+"-open",c=e+"-autoclose",b=500;var a={button:".toggleslide-btn",container:".toggleslide",section:".toggleslide-section"};f.fn.toggleContent=function(g){g=f.extend({},a,g);this.find(g.button).data(e+"-options",g);this.off("click.toggleContent",g.button).on("click.toggleContent",g.button,function(){var k=f(this),j=k.closest(g.container).find(g.section),h=j.hasClass(d),i=(k.attr("data-"+c)!==undefined);k.toggleClass(d,!h);j[h?"slideUp":"slideDown"](b,function(){j.toggleClass(d);if(i){k.attr("data-"+c,j.hasClass(d))}})});return this};f(document).on("click.toggleContent",function(){f("[data-"+c+'="true"]').each(function(){var h=f(this),i=h.closest(h.data(e+"-options").container),g=f(h.data(e+"-options").section,i);h.removeClass(d);g.slideUp(b,function(){g.removeClass(d);h.attr("data-"+c,false)})})})})(jQuery);