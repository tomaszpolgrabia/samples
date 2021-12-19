define([
	"dijit/_TemplatedMixin",
	"dijit/_WidgetBase",
	"dojo/_base/declare",
	"./ChildWidget",
	"dojo/text!./MainWidget.html"
], function(_TemplatedMixin, _WidgetBase, declare, ChildWidget, template) {
	return declare("app/widgets/MainWidget", [_WidgetBase, _TemplatedMixin], {
		templateString: template
	});
});