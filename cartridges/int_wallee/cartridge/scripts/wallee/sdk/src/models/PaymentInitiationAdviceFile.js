"use strict";

var PaymentInitiationAdviceFile = /** @class */ (function () {
    function PaymentInitiationAdviceFile() {
    }
    PaymentInitiationAdviceFile.getAttributeTypeMap = function () {
        return PaymentInitiationAdviceFile.attributeTypeMap;
    };
    PaymentInitiationAdviceFile.discriminator = undefined;
    PaymentInitiationAdviceFile.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "fileGeneratedOn",
            "baseName": "fileGeneratedOn",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "processedOn",
            "baseName": "processedOn",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "PaymentInitiationAdviceFileState"
        }
    ];
    return PaymentInitiationAdviceFile;
}());
exports.PaymentInitiationAdviceFile = PaymentInitiationAdviceFile;
module.exports = PaymentInitiationAdviceFile;
