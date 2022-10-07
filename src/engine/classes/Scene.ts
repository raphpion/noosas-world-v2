/**
 * A Scene is a context for the LudiqueApp. It contains Entities and Scripts to make them interact with each other.
 */
export default class Scene {
  private initHandler?: () => void;
  private drawHandler?: () => void;

  /** The identifying name of the Scene, also used as a key for the `SceneDirectory` class. */
  public readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  /** The Scene's initialization routine. */
  public init() {
    if (this.initHandler !== undefined) this.initHandler();
  }

  /** The Scene's drawing routine, executed at every animation frame. */
  public draw() {
    if (this.drawHandler !== undefined) this.drawHandler();
  }

  /**
   * Sets the Scene's initialization handler.
   *
   * @param action The action to execute.
   */
  public onInit(action: () => void) {
    this.initHandler = action;
  }

  /**
   * Sets the Scene's draw handler.
   *
   * @param action The action to execute.
   */
  public onDraw(action: () => void) {
    this.drawHandler = action;
  }
}
