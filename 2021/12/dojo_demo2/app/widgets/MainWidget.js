define([
	"dijit/_TemplatedMixin",
	"dijit/_WidgetBase",
	"dojo/_base/declare",
	"dojo/text!./MainWidget.html"
], function(_TemplatedMixin, _WidgetBase, declare, template) {
	return declare("app/widgets/MainWidget", [_WidgetBase, _TemplatedMixin], {
		templateString: template
	});
});