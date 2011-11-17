/*
 * Cloudy.JS by Allan Kiezel
 * http://www.thinkbi.gr/
 *
 * Copyright 2011, Thinkbigr
 *
 * Includes Lettering.js (modified)
 * http://letteringjs.com/
 *
 * Date: Thursday, November 17, 2011 12:49am
 */

(function( $ ){

  var methods = {

    defaults: {
      clouds: {
        default: []
      },
      obj: null
    },

    init: 
      function( options ) {
       
        // Create some defaults, extending them with any options that were provided
        $.extend(methods.defaults, options);
        
        return this.each(function(){
         
          var $this = $(this);

          methods.obj = $this;
            
          $this.lettering('names');

          //console.log(methods.defaults);

          methods.swapClouds('default');

          $(".cloud-link").bind('mouseover', methods.handleSwap);
        
          $(".cloud-link").bind('mouseout', function() {
            methods.swapClouds('default');
          });
         
        });

      },

    swapClouds: 
      function( cloud ) {
        
        methods.clearClouds();
        
        for ( var i = 0, len = methods.defaults.clouds[cloud].length-1; i <= len; i++ ) {
        
          $('span[data-cloud="'+methods.defaults.clouds[cloud][i]+'"]').addClass('cloudy');
          
        }
        
      },
    
    clearClouds: 
      function() {
        
        $('span', methods.obj).removeClass('cloudy');
        
      },
      
    handleSwap: 
      function() {
        
        methods.swapClouds( this.id );
        
      }
     
  };

  $.fn.cloudy = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.cloudy' );
    }    
  
  };

})( jQuery );