/*global location history */
sap.ui.define([
		"NAMESPACE/Cash_Box/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"NAMESPACE/Cash_Box/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend("NAMESPACE.Cash_Box.controller.Worklist", {

			formatter: formatter,

			onInit : function () {
				var oViewModel;
				// Model used to manipulate control states
				oViewModel = new JSONModel({
					
				});
				this.setModel(oViewModel, "worklistView");
			},

		
			onUpdateFinished : function (oEvent) {
				// update the worklist's object counter after the table update
				var sTitle,
					oTable = oEvent.getSource(),
					iTotalItems = oEvent.getParameter("total");
				// only update the counter if the length is final and
				// the table is not empty
				if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
					sTitle = this.getResourceBundle().getText("worklistTableTitleCount", [iTotalItems]);
				} else {
					sTitle = this.getResourceBundle().getText("worklistTableTitle");
				}
				this.getModel("worklistView").setProperty("/worklistTableTitle", sTitle);
			},

		
			onPress : function (oEvent) {
				// The source is the list item that got pressed
				this._showObject(oEvent.getSource());
			},

		
			onNavBack : function() {
				history.go(-1);
			},


			
			_showObject : function (oItem) {
				this.getRouter().navTo("object", {
					objectId: oItem.getBindingContext().getProperty("Segmento")
				});
			}

		

		});
	});