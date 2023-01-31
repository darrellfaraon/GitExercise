sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModile, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

            formatter: formatter,
           
            onInit: function () {
                var oAddressModel = new JSONModel();
                var oAddress = {"EID": "ej.darrell.faraon",
                                "Enabled": true,
                                "Address" : {
                                        "Street": "A street St.",
                                        "City": "A City" 
                                },
                                "Salesman": 100,
                                "Currency" : "USD" };


                            // Set Data to Model
                            oAddressModel.setData(oAddress);
                            
                            // Get Current View
                            var oView = this.getView();

                            // Set Model to View
                            oView.setModel(oAddressModel, "oAddressModel");
            },
            onSelectProduct: function(oEvent){
                // var oView = this.getView;
                // Get the control list
                var oList = oEvent.getSource();

                // get selected item
                var oSelItem = oList.getSelectedItem();

                // get the context binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                this.getView().byId("idProductDetails").bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            }
        });
    });
