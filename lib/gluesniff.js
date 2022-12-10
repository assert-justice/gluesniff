"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueSniff = void 0;
var GlueSniff = /** @class */ (function () {
    function GlueSniff(parent, width, height, maxWidth) {
        if (maxWidth === void 0) { maxWidth = Infinity; }
        var _this = this;
        // Input events
        this.onClick = function (_) { };
        this.onHover = function (_) { };
        this.onEnter = function (_) { };
        this.onExit = function (_) { };
        // Colors
        this.clearColor = "black";
        this._drawColor = "white";
        if (!parent)
            throw 'GlueSniff was passed an undefined parent.';
        parent.innerHTML = '';
        var cWidth = parent.clientWidth > maxWidth ? maxWidth : parent.clientWidth;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', "".concat(cWidth));
        this.canvas.setAttribute('height', "".concat(cWidth / (width / height)));
        var mapEvent = function (e) {
            var xOffset = _this.canvas.offsetLeft - window.pageXOffset;
            var yOffset = _this.canvas.offsetTop - window.pageYOffset;
            console.log(window.pageYOffset);
            var x = (e.clientX - xOffset) / _this.canvas.width * width;
            var y = (e.clientY - yOffset) / _this.canvas.height * height;
            return {
                x: x,
                y: y,
            };
        };
        this.canvas.onclick = function (e) {
            _this.onClick(mapEvent(e));
        };
        this.canvas.onmousemove = function (e) {
            _this.onHover(mapEvent(e));
        };
        this.canvas.onmouseenter = function (e) {
            _this.onEnter(mapEvent(e));
        };
        this.canvas.onmouseleave = function (e) {
            _this.onExit(mapEvent(e));
        };
        this._width = width;
        this._height = height;
        this.widthRatio = this.canvas.width / width;
        this.heightRatio = this.canvas.height / height;
        parent.appendChild(this.canvas);
        var context = this.canvas.getContext('2d');
        if (!context)
            throw "Could not get context";
        this._context = context;
        this.clear();
    }
    Object.defineProperty(GlueSniff.prototype, "context", {
        get: function () { return this._context; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSniff.prototype, "width", {
        get: function () { return this._width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSniff.prototype, "height", {
        get: function () { return this._height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSniff.prototype, "drawColor", {
        get: function () { return this._drawColor; },
        set: function (color) {
            this._drawColor = color;
            this.context.fillStyle = color;
        },
        enumerable: false,
        configurable: true
    });
    // Drawing
    GlueSniff.prototype.clear = function (color) {
        if (color === void 0) { color = null; }
        this.rect(0, 0, this.width, this.height, color ? color : this.clearColor);
    };
    GlueSniff.prototype.rect = function (x, y, width, height, color, filled) {
        if (color === void 0) { color = null; }
        if (filled === void 0) { filled = true; }
        if (color) {
            this._context.fillStyle = color;
        }
        x = Math.floor(x * this.widthRatio);
        y = Math.floor(y * this.heightRatio);
        width = Math.floor(width * this.widthRatio);
        height = Math.floor(height * this.heightRatio);
        if (filled) {
            this._context.fillRect(x, y, width, height);
        }
        else {
            this._context.rect(x, y, width, height);
        }
        if (color) {
            this._context.fillStyle = this._drawColor;
        }
    };
    return GlueSniff;
}());
exports.GlueSniff = GlueSniff;
