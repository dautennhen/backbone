define(['backbone'], function (Backbone) {
	return Backbone.View.extend({
		el : $("#page"),
		initialize : function () {
			console.log('------------base initialize');
			//this.render();
		},
		render : function () {
			console.log('------------base render');
		},
		renderItem : function () {
			console.log('------------base renderItem');
		},
		renderList : function () {
			console.log('------------base renderList');
		}
	});
});
