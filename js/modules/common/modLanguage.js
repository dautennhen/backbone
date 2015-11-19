(function () {
	window.modLanguage = {
		current : null,
		get : function(key) {
			return lang[key];
		},
		set : function(langKey) {
			this.modLanguage = langKey;
			this.fill('#container');
		},
		fill : function(area) {
			$(area).find('[data-i18n]').each(function(){
				var key = $(this).data('i18n');
				$(this).html(lang[key]);
			});
		},
	}
})();
