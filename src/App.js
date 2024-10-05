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
require("./styles.css");
var StaticForm_1 = __importDefault(require("./StaticForm"));
var utils_1 = require("./utils");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "App", style: { backgroundColor: "grey" } }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Static Renderer" }, void 0), (0, jsx_runtime_1.jsx)(StaticForm_1["default"], { object: (0, utils_1.getData)() }, void 0)] }), void 0));
}
exports["default"] = App;
