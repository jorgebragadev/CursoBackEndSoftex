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
exports.Carro = void 0;
var Veiculo_1 = require("./Veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(modelo, marca, cor, numeroRodas, numeroPortas) {
        var _this = _super.call(this, modelo, marca, cor, numeroRodas) || this;
        _this.numeroPortas = numeroPortas;
        return _this;
    }
    Carro.prototype.clone = function () {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    };
    Carro.prototype.represent = function () {
        return "Carro - Modelo: ".concat(this.modelo, ", Marca: ").concat(this.marca, ", Cor: ").concat(this.cor, ", Rodas: ").concat(this.numeroRodas, ", Portas: ").concat(this.numeroPortas);
    };
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
