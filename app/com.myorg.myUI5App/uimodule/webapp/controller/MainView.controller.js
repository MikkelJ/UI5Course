sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.myUI5App.controller.MainView", {
            onInit: function () {

            },
            onAfterRendering: function() {
              const oTable = this.byId("idTable");

              oTable.setHeaderText("Hej frederik");
            }

        });
    }
);
