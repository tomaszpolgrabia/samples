define([
	"dojo/parser",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetBase",
	"dojo/_base/declare"
], function(parser, _TemplatedMixin, _WidgetBase, declare, template) {
	var widget = declare("app/widgets/ChildWidget2", [_WidgetBase, _TemplatedMixin], {
		templateString: "<div>"
			+ "ChildWidget!!!" 
			+ "</div>"
	});

	// parser.parse();

	return widget;
});