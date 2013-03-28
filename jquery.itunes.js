(function($){
    $.fn.itunes = function(options) {
        $.ajaxSetup({ cache: true });
        var defaults = {
            searchterm: "nin",
            before: "<li>",
            after: "</li>"
        };
        var optionsWithDefaults = $.extend(defaults, options);
        return this.each(function() {
            // var obj = $(this);
            $.getJSON('http://itunes.apple.com/search?term='+optionsWithDefaults.searchterm,
                function(data) {
  				return data;
                    // $.each(data, function(i, tweet) {
                        // if(tweet.text !== undefined) {
                            // $(obj).append(optionsWithDefaults.before+tweet.text+optionsWithDefaults.after);
                        // }
                    // });
                }
            );
        });
    };
})(jQuery);
