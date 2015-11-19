//define('modA',[
define([
		'jquery',
		'underscore',
		'backbone',
		'baseview',
		'text!modules/a/view.html'
	], function ($, _, Backbone, BaseView, tpl) {
	return BaseView.extend({
		initialize : function () {
			console.log('init---a');
			//this.render();
		},
		render : function () {
			console.log('init---render');
			this.$el.html(tpl);
			//new SidebarView().render();
		},
		doSth : function (abc) {
			//this.$el.html(tpl);
			//new SidebarView().render();
			console.log('doSth', abc);
		}
	});
});
