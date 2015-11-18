vaad3dApp.directive('customPopover', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            $(elem).popover({
                trigger: 'hover',
                html: true,
				title: attrs.popoverTitle,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
});