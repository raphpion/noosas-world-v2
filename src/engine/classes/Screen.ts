import ScreenConfig, { defaultScreenConfig } from '../interfaces/ScreenConfig';

/** A controller that draws the Game on its canvas. */
export default class Screen {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  private config: ScreenConfig;

  private scale: number;
  private startT: number;
  private deltaT: number;

  private resizeTimeout: NodeJS.Timeout | undefined;

  /**
   * @param canvas The HTML Canvas to draw the Screen on.
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.config = { ...defaultScreenConfig };

    this.handleResize();
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  /** Handler that resizes the canvas to its client size. */
  private handleResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;

      this.scale = Math.floor(
        Math.max(this.config.minScale, Math.min(this.canvas.width / this.config.scaleWidth, this.canvas.height / this.config.scaleHeight))
      );
    }, 100);
  }

  /**
   * Applies the Screen configuration options set in the App's configuration file.
   *
   * @param screenConfig The screen configuration options to set.
   */
  public applyConfig(screenConfig: ScreenConfig) {
    this.config = { ...this.config, ...screenConfig };
  }

  /** @returns the Screen's current scale. */
  public getScale() {
    return this.scale;
  }

  /**
   * Draws the contents of the Screen in its Canvas.
   *
   * @param timestamp The point in time at which the drawing is executed.
   */
  public draw(timestamp: number) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.deltaT = timestamp - this.startT;
    this.startT = timestamp;

    if (this.config.drawDebug) {
      this.ctx.fillStyle = this.config.debugColor;
      this.ctx.font = `${this.config.debugFontSize}px ${this.config.debugFontFamily}`;
      this.ctx.textBaseline = 'top';
      this.ctx.textAlign = 'right';

      this.ctx.fillText(`${(1000 / this.deltaT).toFixed(1)} fps`, this.canvas.width - 8, 8);
      this.ctx.fillText(`${this.canvas.width}x${this.canvas.height}px`, this.canvas.width - 8, 12 + this.config.debugFontSize);
      this.ctx.fillText(`Scale: ${this.scale}`, this.canvas.width - 8, 16 + this.config.debugFontSize * 2);
    }

    window.requestAnimationFrame(timestamp => {
      this.draw(timestamp);
    });
  }
}
