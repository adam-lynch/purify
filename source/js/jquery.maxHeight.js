(function ($) {
    $.fn.maxHeight = function() {
        var max = null;
        this.each(function () {
            var currentHeight = $(this).height();
            max = Math.max(currentHeight, max);
        });
        return max;
    }
})(jQuery);
