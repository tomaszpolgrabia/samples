define([
	"require",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_AttachMixin",
	"dijit/_WidgetBase",
	"dojo/_base/declare",
	"dojo/text!./MainWidget.html",
	"dijit/TitlePane",
	"dijit/form/TextBox",
	"./ChildWidget2"
], function(require, _TemplatedMixin, _WidgetsInTemplateMixin, _AttachMixin, _WidgetBase, declare, template) {
	return declare("app/widgets/MainWidget", [_WidgetBase, _AttachMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
		contextRequire: require,
		templateString: template,
		postCreate: function() {
			this.inherited(arguments);

			let pane1Toggle = this.pane1.toggle.bind(this.pane1);
			let pane2Toggle = this.pane2.toggle.bind(this.pane2);
			this.pane1.arrowNode.innerHTML = '<span class="fa fa-chevron-up"><br /></span> ';
			this.pane1.toggle = this.pane2.toggle = (function() {
				this.pane1.arrowNode.innerHTML = this.pane1.open 
				? '<span class="fa fa-chevron-up"><br /></span> ' 
				: '<span class="fa fa-chevron-down"><br /></span> ';
					
				pane1Toggle();
				pane2Toggle();
			}).bind(this);
		}
	});
});