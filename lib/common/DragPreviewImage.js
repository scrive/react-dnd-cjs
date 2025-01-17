"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
/*
 * A utility for rendering a drag preview image
 */
exports.DragPreviewImage = React.memo(function (_a) {
    var connect = _a.connect, src = _a.src, options = _a.options;
    if (typeof Image !== 'undefined') {
        var img_1 = new Image();
        img_1.src = src;
        img_1.onload = function () { return connect(img_1, options); };
    }
    return null;
});
exports.DragPreviewImage.displayName = 'DragPreviewImage';
