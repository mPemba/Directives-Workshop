var app = angular.module('directiveWorkshop');
  
app.directive('pending', function($q) {
	return {
		restrict: 'EA',
		scope: {
			request: "&"
		},
		link: function(scope, elem, attrs) {
			var spinnerIcon = angular.element('<img src="img/711.png"></img>');
			spinnerIcon.hide();
			elem.after(spinnerIcon);

            var invokeRequest = function() {
            	var dfd = $q.defer();

                dfd.resolve(scope.request());

            	return dfd.promise;
            }

			elem.click(function() {
				elem.hide();
				spinnerIcon.show();
				invokeRequest().then(function(){
					setTimeout(function() {
						elem.show();
					spinnerIcon.hide();
				}, 4000);
			  })	
			})
		}
	}
});