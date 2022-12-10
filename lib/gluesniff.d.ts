export interface GlueSniffMouseEvent {
    x: number;
    y: number;
}
export declare class GlueSniff {
    private canvas;
    private _context;
    get context(): CanvasRenderingContext2D;
    private _width;
    get width(): number;
    private _height;
    get height(): number;
    private widthRatio;
    private heightRatio;
    onClick: (_: GlueSniffMouseEvent) => void;
    onHover: (_: GlueSniffMouseEvent) => void;
    onEnter: (_: GlueSniffMouseEvent) => void;
    onExit: (_: GlueSniffMouseEvent) => void;
    clearColor: typeof this._context.fillStyle;
    private _drawColor;
    get drawColor(): typeof this.clearColor;
    set drawColor(color: typeof this.clearColor);
    constructor(parent: Element | null, width: number, height: number, maxWidth?: number);
    clear(color?: typeof this.clearColor | null): void;
    rect(x: number, y: number, width: number, height: number, color?: typeof this.clearColor | null, filled?: boolean): void;
}
