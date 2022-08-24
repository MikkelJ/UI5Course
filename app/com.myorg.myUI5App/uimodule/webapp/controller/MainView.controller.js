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
            
            onItemPress: function(oEvent) {
                const oItem = oEvent.getSource();

                const iPlanetId = oItem.getBindingContext().getObject().ID;

                this.navTo("RoutePeoples", {id: iPlanetId});
            }

        });
    }
);
