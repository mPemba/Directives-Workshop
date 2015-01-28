var app = angular.module('directiveWorkshop');

app.directive('pending', function() {
	return {
		restrict: 'EA',
		scope: {
			request: "&"
		},
		link: function(scope, elem, attrs) {
			console.log(scope, elem, attrs);
		}
	}
});