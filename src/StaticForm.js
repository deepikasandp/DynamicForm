"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var material_1 = require("@mui/material");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var utils_1 = require("./utils");
var StaticForm = function (_a) {
    var _b, _c;
    var object = _a.object;
    var _d = (0, react_1.useState)(object), myObject = _d[0], setMyObject = _d[1];
    var _e = (0, react_1.useState)(), savedObject = _e[0], setSavedObject = _e[1];
    var onChange = function (path) {
        return function (event) {
            return setMyObject((0, utils_1.setDeep)(myObject, path, event.target.value));
        };
    };
    var onSaveChanges = function () {
        setSavedObject(myObject);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsxs)(Paper_1["default"], __assign({ variant: "elevation", style: { margin: "10px" } }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "h4" }, { children: "Vehicle details" }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, alignItems: "flex-start", spacing: 2, padding: 5 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(TextField_1["default"], { style: { width: "100%" }, label: "Driver Name", value: ((_b = myObject.driver) === null || _b === void 0 ? void 0 : _b.name) || "", onChange: onChange("driver.name") }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(TextField_1["default"], { style: { width: "100%" }, label: "Vehicle Regplate", value: ((_c = myObject.vehicle) === null || _c === void 0 ? void 0 : _c.regplate) || "", onChange: onChange("vehicle.regplate") }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: { margin: "10px", padding: "10px" } }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ variant: "outlined", onClick: onSaveChanges }, { children: "Save Changes" }), void 0) }), void 0) }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsxs)(Paper_1["default"], __assign({ variant: "elevation", style: { margin: "10px" } }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "h5" }, { children: "Output" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: { textAlign: "left" } }, { children: (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(savedObject, null, 2) }, void 0) }), void 0)] }), void 0) }), void 0)] }), void 0));
};
exports["default"] = StaticForm;
