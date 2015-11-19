(function () {

  var methods = {
     init : function( options ) {

       return this.each(function(){
         
         var $this = $(this),
             data = $this.data('tooltip'),
             tooltip = $('<div />', {
               text : $this.attr('title')
             });
         
		 alert('init called');
         // If the plugin hasn't been initialized yet
         if ( ! data ) {

           /*
             Do more setup stuff here
           */

           $(this).data('tooltip', {
               target : $this,
               tooltip : tooltip
           });

         }
       });
     },
     destroy : function( ) {

       return this.each(function(){

         var $this = $(this),
             data = $this.data('tooltip');
		console.log(data);
         // Namespacing FTW
         //$(window).unbind('.tooltip');
         data.tooltip.remove();
         $this.removeData('tooltip');

       })

     },
     reposition : function( ) { },
     show : function( ) {  },
     hide : function( ) {  },
     hihi : function(o) {
	
		o = $.extend(true,{
			opt1: 40,
			opt2: 5,
		}, o);
		
		return this.each(function(i) {
			alert(o.opt1);
		});
	}
	 
  };// end var methods

  $.fn.tooltip = function( method ) {
    console.log('this', this);
    if ( methods[method] )
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
	  
    if ( typeof method === 'object' || ! method )
      return methods.init.apply( this, arguments );
	  
    $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );

  }
	
})();