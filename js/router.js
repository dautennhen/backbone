// Filename: router.js
// Load module
define([
		'jquery',
		'underscore',
		'backbone',
		'plugin'
	], function ($, _, Backbone) {
	var AppRouter =  Backbone.Router.extend({
		routes : {
			//'books/:id/:name' : 'viewBookController',
			'*actions' : 'defaultAction'
		},
		initialize : function () {
		//	var app_router = new AppRouter;
		//	Backbone.history.start();
			modLanguage.current = modConfig.language;
		},
		loadModule : function () {
			//http://localhost/js/test/modular/#a/doSth/{"sdsd":"asdasd"}|&:fsdmlfkd.%<>#/ahha
			var module = modCommon.getSegment(0);
			var func = modCommon.getSegment(1);
			var args = modCommon.getArgs();
			if( _.isUndefined(modConfig.modules[module]))
				return;
			modLoader.loadModule(module, func, args);
			modLanguage.checkAndLoadLangModule(modLanguage.current, module);
		},
		/*viewBookController : function (aa, bb) {
			console.log(aa, bb);
		}*/
		defaultAction : function () {
			this.loadModule();
			//var assignAction = modCommon.assignAction;
			var initialize = _.once(modCommon.assignAction);
			initialize();
		}

	});
	
	var initialize = function(options){

		var app_router = new AppRouter;
		//app_router.on('route:viewBookController', function(){ var projectsView = new ProjectsView(); }
		//app_router.on('route:defaultAction', function (actions) {}
		Backbone.history.start();		
	};
	return initialize;
});
