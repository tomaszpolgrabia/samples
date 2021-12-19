define([
	"dijit/_TemplatedMixin",
	"dijit/_WidgetBase",
	"dojo/_base/declare"
], function(_TemplatedMixin, _WidgetBase, declare, template) {
	return declare("app/widgets/ChildWidget", [_WidgetBase, _TemplatedMixin], {
		templateString: "<div>"
			+ "ChildWidget!!!" 
			+ "</div>"
	});
});