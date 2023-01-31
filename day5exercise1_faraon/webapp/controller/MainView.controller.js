sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1faraon.controller.MainView", {
            onInit: function () {
                this.oResourceModel = this.getOwnerComponent().getModel("i18n").getResourceBundle
             
            },
            onSend: function(oEvent){
                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sSurname = oView.byId("StreetInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var oTech = oView.byId("TechInput");

                console.log(sName);
                console.log(sSurname);
                console.log(sAge);
                console.log(oTech);
                MessageToast.show("Your name is " + sName + ", your street is " + sSurname + ", your age is " + sAge + ", your tech is" + oTech.getSelectedKey());
            }
        });
    });
