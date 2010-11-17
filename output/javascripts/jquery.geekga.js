/*
 * jquery.geekga.js - jQuery plugin for Google Analytics
 * 
 * This plugin extends jQuery with two new functions:
 * 
 *   - $().geekGaTrackPage(account_id)
 *       Track a pageview.
 * 
 *   - $().geekGaTrackEvent(category, action, label, value)
 *       Track an event with a category, action, label and value.
 * 
 * 
 * This code is in the public domain.
 * 
 * Willem van Zyl
 * willem@geekology.co.za
 * http://www.geekology.co.za/blog/
 */

(function($) {
  
  var pageTracker;
  
  
  /**
   * Track a pageview, e.g.:
   * 
   *   $().geekGaTrackPage('UA-0000000-0');
   */
  $.fn.geekGaTrackPage = function(account_id) {
    
    //check whether to use an unsecured or a ssl connection:
    var host = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    var src = host + 'google-analytics.com/ga.js';
    
    //load the Google Analytics javascript file:
    $.getScript(src, function() {
      if (typeof _gat != undefined) {
        //the ga.js file was loaded successfully, set the account id:
        pageTracker = _gat._getTracker(account_id);
        
        //track the pageview:
        pageTracker._trackPageview();
      }
      else {
        //the ga.js file wasn't loaded successfully:
        throw "Unable to load ga.js; _gat has not been defined.";
      }
    });
    
  };
  
  
  /**
   * Track an event, e.g.:
   * 
   *   $('a.twitter').click(function() {
   *     $().geekGaTrackEvent('feed', 'click', 'Twitter', 'willemvzyl');
   *   });
   */
  $.fn.geekGaTrackEvent = function(category, action, label, value) {
    
    if (typeof pageTracker != undefined) {
      //the pageTracker was defined, track the event:
      pageTracker._trackEvent(category, action, label, value);
    } else {
      //the pageTracker wasn't defined:
      throw "Unable to track event; pageTracker has not been defined";
    }
    
  };
  
})(jQuery);