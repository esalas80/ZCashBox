sap.ui.define([
		"NAMESPACE/Cash_Box/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("NAMESPACE.Cash_Box.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);