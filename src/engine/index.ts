import Screen from './classes/Screen';
import LudiqueAppConfig from './interfaces/LudiqueAppConfig';

/** Instantiate this class for each Game you want to create. */
export default class LudiqueApp {
  private readonly config: LudiqueAppConfig;
  private screen: Screen;

  /**
   * @param config The LudiqueApp Configuration.
   */
  public constructor(config: LudiqueAppConfig) {
    this.config = config;
  }

  /**
   * This method executes the LudiqueApp on the specified Screen.
   *
   * @param screen The Screen on which the LudiqueApp will be rendered.
   */
  public init(screen: Screen) {
    if (this.config.debugEnabled) console.debug(`Running ${this.config.title} version ${this.config.version}.`);

    this.screen = screen;
    if (this.config.screen !== undefined) this.screen.applyConfig(this.config.screen);

    window.requestAnimationFrame(() => {
      this.screen.draw(0);
    });
  }
}
