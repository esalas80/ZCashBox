/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"NAMESPACE/Cash_Box/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"NAMESPACE/Cash_Box/test/integration/pages/Worklist",
	"NAMESPACE/Cash_Box/test/integration/pages/Object",
	"NAMESPACE/Cash_Box/test/integration/pages/NotFound",
	"NAMESPACE/Cash_Box/test/integration/pages/Browser",
	"NAMESPACE/Cash_Box/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "NAMESPACE.Cash_Box.view."
	});

	sap.ui.require([
		"NAMESPACE/Cash_Box/test/integration/WorklistJourney",
		"NAMESPACE/Cash_Box/test/integration/ObjectJourney",
		"NAMESPACE/Cash_Box/test/integration/NavigationJourney",
		"NAMESPACE/Cash_Box/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});