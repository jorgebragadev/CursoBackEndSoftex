"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Veiculo_1 = require("./Veiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modelo, marca, cor, numeroRodas, cilindradas) {
        var _this = _super.call(this, modelo, marca, cor, numeroRodas) || this;
        _this.cilindradas = cilindradas;
        return _this;
    }
    Moto.prototype.clone = function () {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    };
    Moto.prototype.represent = function () {
        return "Moto - Modelo: ".concat(this.modelo, ", Marca: ").concat(this.marca, ", Cor: ").concat(this.cor, ", Rodas: ").concat(this.numeroRodas, ", Cilindradas: ").concat(this.cilindradas);
    };
    return Moto;
}(Veiculo_1.Veiculo));
exports.Moto = Moto;
