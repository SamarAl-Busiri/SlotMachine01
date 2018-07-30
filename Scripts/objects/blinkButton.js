var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var BlinkButton = /** @class */ (function (_super) {
        __extends(BlinkButton, _super);
        function BlinkButton(fullPath, x, y, width, height, alphaOver, alphaOut) {
            var _this = _super.call(this, fullPath) || this;
            _this.x = x;
            _this.y = y;
            _this.width = width;
            _this.height = height;
            _this.regX = width * .5;
            _this.regY = height * .5;
            _this.alphaOver = alphaOver ? alphaOver : 1;
            _this.alphaOut = alphaOut ? alphaOut : 0;
            _this.alpha = alphaOut ? alphaOut : 1;
            _this.on("mouseover", _this.overButton, _this);
            _this.on("mouseout", _this.outButton, _this);
            return _this;
        }
        BlinkButton.prototype.overButton = function (event) {
            event.currentTarget.alpha = this.alphaOver;
        };
        BlinkButton.prototype.outButton = function (event) {
            event.currentTarget.alpha = this.alphaOut;
        };
        return BlinkButton;
    }(createjs.Bitmap));
    objects.BlinkButton = BlinkButton;
})(objects || (objects = {}));
//# sourceMappingURL=blinkButton.js.map