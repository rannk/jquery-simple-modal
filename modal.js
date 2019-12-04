(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.Modal = factory(root.jQuery);
    }
}(this, function($) {
    "use strict";

    $.fn.modal = function (action) {
        var target = this;
        var panel = ($($.modal.panel).length == 1)?$($.modal.panel):$(window);
        if(action == "show" || action == undefined) {
            if(typeof $.modal.beforeOpen == "function") {
                $.modal.beforeOpen(target);
            }

            $(target).offset({"top":panel.height()/2-$(target).height()/2, "left": panel.width()/2-$(target).width()/2});
            $(target).show();
            $("body").append("<div id='_simple_modal_cover_div' style='min-width: 100%;min-height: 100%;z-index: 90;opacity:0.5;background-color: #000;position: absolute;top: 0;left: 0;'></div>");
            $(target).css("z-index", "99");
            $(target).css("position", "absolute")
            $(target).attr("_s_modal", "show");
            if($.modal.clickClose == true) {
                $("#_simple_modal_cover_div").click(function () {
                    hideModal();
                })
            }

            if(typeof $.modal.open == "function") {
                $.modal.open(target);
            }
        }

        if(action == "hide") {
            hideModal();
        }
    }

    $.modal = {
        panel: window,
        clickClose: true,
        beforeOpen: "",
        open: "",
        beforeClose: "",
        afterClose: "",
        settings: function (settings) {
            $.extend($.modal, settings)
        },
        hide: function() {
            hideModal();
        }
    }

    function hideModal() {
        var modal = $("[_s_modal='show']")[0];

        if(typeof $.modal.beforeClose == "function") {
            $.modal.beforeClose(modal);
        }

        $("[_s_modal='show']").offset({"top":0,"left":0})
        $("[_s_modal='show']").hide();
        $("#_simple_modal_cover_div").remove();
        $("[_s_modal='show']").removeAttr("_s_modal");

        if(typeof $.modal.afterClose == "function") {
            $.modal.afterClose(modal);
        }
    }

    window.onload = function () {
        $("a[ref='modal']").click(function () {
            var id = $(this).attr("href");
            var target = $(id);
            if(target.length == 1) {
                target.modal("show");
            }
        })
    }
}));
