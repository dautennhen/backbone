(function () {
	window.modStorage = {
		data : {},
		set : function (key, value) {
			this.data[key] = value;
		},
		get : function (key) {
			return this.data[key];
		},
		remove : function (key) {
			delete this.data[key];
		},
		reset : function () {
			this.data = {};
		}
	}
	
	window.modDb = {
		init : function() {
			var me = this;
			this.db = window.openDatabase(modConfig.database, "0.0", "database modular", null);
		},
		excute : function (str, param, callback) {
			this.db.transaction(
				function (tx) {tx.executeSql(str, param)},
				function(err){console.error(err.message)},
				function(){
					if(typeof callback == 'function') callback();
				}
			);
		}
	}
})();
