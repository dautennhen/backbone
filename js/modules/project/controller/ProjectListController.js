define([
		'underscore',
		'basecontroller',
		'modules/project/model/ProjectModel', 
		'modules/project/collection/ProjectCollection',
		'text!modules/project/view/projectsListTemplate.html'
], function (_, BaseController, itemModel, itemCollection, listTemplate ) {
	return BaseController.extend({
		mv : {
			item : {
				el : $("#item"),
				baseCollection : itemCollection,
				view: listTemplate
			},
			list : {
				el : $("#list"),
				baseCollection : itemCollection,
				view: listTemplate,
				type: 'pagelist'
			}
		},
		initialize : function () {
			this.render();
		},
		// bind + item + Event
		binditemEvent : function() {
			console.log( 'binditemEvent' );
			this.mv.list.el.find('.page').on('click', function(){
				console.log($(this).text());
			});
		},
		bindlistEvent : function() {
			console.log( 'bindlistEvent' );
		},
		itemDetail : function(id){
			console.log(id)
		}
	});
	
});