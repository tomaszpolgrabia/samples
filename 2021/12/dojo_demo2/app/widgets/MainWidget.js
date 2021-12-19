define([
	"require",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_AttachMixin",
	"dijit/_WidgetBase",
	"dojo/_base/declare",
	"dijit/form/TextBox",
	"./ChildWidget2"
], function(require, _TemplatedMixin, _WidgetsInTemplateMixin, _AttachMixin, _WidgetBase, declare) {
	return declare("app/widgets/MainWidget", [_WidgetBase, _AttachMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
		contextRequire: require,
		templateString: "<div>"
			// + "Hello World!!! <input data-dojo-type=\"dijit/form/TextBox\" />" 
			// this works as it's dijit
			+ "<div data-dojo-type=\"./ChildWidget2\"></div>"
			// this doesn't work as it's trying to fetch ./node_modules/dojo/ChildWidget which seems to be 
			// relative to dojo/parser dojo/parser
			+ "</div>"
	});
});