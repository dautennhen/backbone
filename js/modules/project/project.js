define(['jquery', 'underscore', 'backbone', 'basemodule', 'modules/project/controller/ProjectListController'], function ($, _, Backbone, BaseModule, ProjectListController) {
	return BaseModule.extend({
		mainController : null,
		initialize : function () {
			this.mainController = new ProjectListController();
		},
		render : function () {
			console.log('render====modules/project/project.js');
			return;
		},
		// #project/renderItem/123
		renderItem : function (id) {
			var me = this;
			modCommon.getData('data.php', {id:id}, function(data) {
				me.mainController.mv.item.collection.add(data);
			});
		},
		// #project/renderList
		renderList : function () {
			var me = this;
			modCommon.getData('datas.js', {aa:'dd'}, function(data) {
				me.mainController.mv.list.collection.add(data);
			});
		}
	});
});
