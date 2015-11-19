(function () {
	window.modLoader = {
		loadCss : function (url) {
			var link = document.createElement("link");
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = url;
			document.getElementsByTagName("head")[0].appendChild(link);
		},
		loadModule : function (module, callback, args) {
			requirejs.onError = function (err) {
				console.log('onError: Module ' + module + ' is not existed');
			};
			requirejs([module], function (moduleController) {
				if (_.isUndefined(moduleController)) {
					console.log('Module ' + module + ' is not existed');
					return;
				}
				console.log('loaded module', module);
				var myC = new moduleController();
				if (!_.isUndefined(callback) && !_.isUndefined(myC[callback])) {
					myC[callback].apply(myC, args);
				}
			});
		}
	}
})();
