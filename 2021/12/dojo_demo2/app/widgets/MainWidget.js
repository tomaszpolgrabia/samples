define([
	"dijit/_TemplatedMixin",
	"dijit/_AttachMixin",
	"dijit/_WidgetBase",
	"dojo/_base/declare"
], function(_TemplatedMixin, _AttachMixin, _WidgetBase, declare, template) {
	return declare("app/widgets/MainWidget", [_WidgetBase, _AttachMixin, _TemplatedMixin], {
		templateString: "<div>"
			// + "Hello World!!! <input data-dojo-type=\"dijit/form/TextBox\" />" 
			// this works as it's dijit
			+ "<div data-dojo-type=\"./ChildWidget\"></div>"
			// this doesn't work as it's trying to fetch ./node_modules/dojo/ChildWidget which seems to be 
			// relative to dojo/parser dojo/parser
			+ "</div>"
	});
});