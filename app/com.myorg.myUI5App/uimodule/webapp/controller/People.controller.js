sap.ui.define(
  ["./BaseController"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
      "use strict";

      return Controller.extend("com.myorg.myUI5App.controller.People", {
          onInit: function () {
            this.getRouter()
            .getRoute("RoutePeoples")
            .attachMatched(this._onRouteMatched, this);
          },

          _onRouteMatched: function(oEvent) {
            const oParams = oEvent.getParameter("arguments");
            const sSet = `/PlanetSet(${oParams.id})`;
            
            this.getView().bindElement(sSet);
          },

          onOpenDialog : function () {

            // create dialog lazily
            if (!this.pDialog) {
              this.pDialog = this.loadFragment({
                name: "com.myorg.myUI5App.view.fragments.dialogPeopleDetails",
                controller: this
              });
            } 
            this.pDialog.then(function(oDialog) {
              
              oDialog.open();
            });
          }

      });
  }
);
