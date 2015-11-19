define(['backbone'], function (Backbone) {
	return Backbone.View.extend({
		el : $("#page"),
		initialize : function () {
			console.log('------------base module initialize');
		}
	});
});
