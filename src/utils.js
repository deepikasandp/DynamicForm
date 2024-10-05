"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getData = exports.setDeep = void 0;
var ramda_1 = require("ramda");
var object_json_1 = __importDefault(require("./object.json"));
var setDeep = function (obj, path, value) {
    return (0, ramda_1.assocPath)(path.split("."), value)(obj);
};
exports.setDeep = setDeep;
var getData = function () {
    return object_json_1["default"];
};
exports.getData = getData;
