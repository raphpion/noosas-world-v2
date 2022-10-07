/** Configuration interface for the Screen class. */
export default interface ScreenConfig {
  /** Font color for the debug information screen. Defaults to `#00ffff`. */
  debugColor?: string;

  /** Font Family for the debug information screen. Defaults to `monospace`. */
  debugFontFamily?: string;

  /** Font size for the debug information screen, in pixels. Defaults to `16`. */
  debugFontSize?: number;

  /** Wether to draw the debug information screen or not. Defaults to `false`. */
  drawDebug?: boolean;

  /** The minimum scale of the Screen's drawing context. Defaults to `1`. */
  minScale?: number;

  /** The minimum Width of a Screen when its scale is 1. Defaults to `400`. */
  scaleWidth?: number;

  /** The minimum Height of a Screen when its scale is 1. Defaults to `300`. */
  scaleHeight?: number;
}

/** Default values for ScreenConfig. */
export const defaultScreenConfig: ScreenConfig = {
  debugColor: '#00ff00',
  debugFontFamily: 'monospace',
  debugFontSize: 16,
  drawDebug: false,
  minScale: 1,
  scaleHeight: 300,
  scaleWidth: 400,
};
