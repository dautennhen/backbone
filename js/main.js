require.config({
  "urlArgs": "bust=" + (new Date()).getTime(),
  callback : function(obj) {
	//console.log('---', obj)
  },
  shim: {
        'plugin': {
            deps: ['jquery']
        },
		'jquery' : {
            deps: ['underscore']
        }
  },
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates',
	baseview : modConfig.baseview,
	basemodel : modConfig.basemodel,
	basecollection : modConfig.basecollection,
	basecontroller : modConfig.basecontroller,
	basemodule : modConfig.basemodule,
	//plugins
	plugin : 'plugin',
	//modules
	common: modConfig.modules.common,
	a: modConfig.modules.a,
	project: modConfig.modules.project
  }

});

require(['jquery', 'underscore', 'backbone', 'plugin', 'loader', 'common', 'router'], function($, _, Backbone, plugin, modLoader, modCommon, Router){
 new Router();
});