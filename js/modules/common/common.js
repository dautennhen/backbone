(function () {
	window.modCommon = {
		data : {},
		getSegment : function(index) {
			var segment = Backbone.history.fragment;
			segment = segment.split('/');
			return _.isUndefined(index) ? segment : segment[index];
		},
		getArgs : function() {
			var args = this.getSegment();
			if(args.length <= 2)
				return null;
			return args.slice(2);
		},
		doLoading : function() {
		
		},
		hideLoading : function() {
		
		},
		getDeviceOS : function() {
			$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		},
		getData : function(filename, params, callback ) {
			var me = this;
			me.doLoading();
			 $.ajax({
				url: filename,
				type: "get",
				data: params,
				dataType: 'json',
				success: function(data) {
					if(!_.isFunction(callback))  
						return;
					callback(data);
					me.hideLoading();
				},
				error:function(){
					console.log("failure");
				}
			});
		},
		gotoNextPage : function(pagelist) {
			$pagelist = $(pagelist).find('.page');
			var $current = $pagelist.filter('.active');
			if($current.length==0)
				$current = $pagelist.first();
			var $next = $current.is('.page:last-child') ? $pagelist.first() : $current.next();
			$pagelist.removeClass('active');
			$next.addClass('active');
		},
		gotoPreviousPage : function(pagelist) {
			
			$pagelist = $(pagelist).find('.page');
			var $current = $pagelist.filter('.active');
			if($current.length==0)
				$current = $pagelist.first();
			var $prev = $current.is('.page:first-child') ? $pagelist.last() : $current.prev();
			$pagelist.removeClass('active');
			$prev.addClass('active');
		},
		assignAction : function() {
			var me = modCommon;
			$('[data-href]').live('click', function() {
				window.location.href = $(this).data('href');
			});
			
			$('.pagelist').live('swipeleft', function() {//swipeup, swipedown
				me.gotoNextPage(this);
				console.log('swipeleft');
			}).live('swiperight', function() {
				console.log('me.gotoPreviousPage')
				me.gotoPreviousPage(this);
				console.log('swiperight');
			});
		}
	}
	
	// Module language
	window.modLanguage = {
		current : null,
		list : {},
		module : [],
		get : function(key) {
			return modLanguage.list[key];
		},
		set : function(langKey, module, callback) {
			var me = this;
			var filename = requirejs.s.contexts._.config.baseUrl + 'modules/'+module+'/language/'+langKey+'.js';
			// After first time loading, data will be cache
			modCommon.getData(filename, {lang:langKey}, function(data) {
				$.extend(modLanguage.list, data, true);
				// Mark language module is loaded
				me.module.push( langKey + '.' + module );
				me.current = langKey;
				me.fill('#container');
				if(!_.isFunction(callback))  return;
				callback();
			}, true);
		},
		fill : function(area) {
			$(area).find('[data-i18n]').each(function(){
				var key = $(this).data('i18n');
				$(this).html(modLanguage.list[key]);
			});
		},
		checkAndLoadLangModule : function(lang, module) {
			if( _.indexOf(modLanguage.module, lang + '.' + module) == -1 )
				this.set(lang, module);
		}
	}
	
	// Module Storage
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
	
	window.modFormValid = {
		email : function(value){
			//var value = $(obj).val();
			return false;
		}
	}
	
})();
