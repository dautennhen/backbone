define(['backbone'], function (Backbone) {
	return Backbone.View.extend({
		el : $("#page"),
		mv : {},
		initialize : function () {},
		 // Bind collection events,
		// Re-render after change data
		render : function() {
			this.bindAllMv();
		},
		bindMv : function (me, key) {
			var I = this;
			me.collection = new me.baseCollection();
			me.collection.on('add', function(item) {
				// Fill content when collection add the last model
				if( item.cid != _.last(me.collection.models).cid)
					return;
				var content = _.template(me.view, {items : me.collection.models});
				//me.el.empty();
				//$content = I.bindEvent(content);
				me.el.html(content);
				var myFunc = 'bind' + key + 'Event';
				if( !_.isFunction(I[myFunc]))
					return;
				I[myFunc].apply(I);
			});
		},
		bindAllMv : function () {
			var me = this;
			$.each(me.mv, function(i) {
				me.bindMv(this, i);
			});
		},
		/*bindEvent : function() {
			return this.el;
			var $content= $(content);
			$content.find('span').on('click', function(){
				console.log($(this).text());
			});
			return $content;
		}*/
	});
});
