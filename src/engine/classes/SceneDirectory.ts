import Scene from './Scene';

/**
 * A Map of available Scenes that can be passed as a prop on your LudiqueApp.
 */
export default class SceneDirectory {
  private readonly directory: Map<string, Scene>;

  public constructor() {
    this.directory = new Map<string, Scene>();
  }

  /**
   * Verifies if there is a Scene with the specified name.
   *
   * @param sceneName The Scene identifying name to check.
   * @returns a boolean indicating wether a Scene with the specified name exists.
   */
  public hasScene(sceneName: string): boolean {
    return this.directory.has(sceneName);
  }

  /**
   * Verifies if the SceneDirectory is empty.
   *
   * @returns a boolean indicating wether the directory is empty or not.
   */
  public isEmpty(): boolean {
    return this.directory.size === 0;
  }

  /**
   * Retrieves a Scene from the directory.
   *
   * @param sceneName The Scene identifying name to get.
   * @returns The retrieved Scene, or `undefined` if none was found.
   */
  public getScene(sceneName: string): Scene | undefined {
    return this.directory.get(sceneName);
  }

  /**
   * Adds a Scene to the directory.
   *
   * @param scene The Scene to be added to the directory. Its `name` property will be used as key.
   */
  public addScene(scene: Scene) {
    this.directory.set(scene.name, scene);
  }

  /**
   * Adds a list of Scenes to the directory.
   *
   * @param scenes An array containing all the scenes to be added to the directory.
   */
  public addScenes(scenes: Scene[]) {
    scenes.map(scene => this.addScene(scene));
  }

  /**
   * Deletes a specified Scene from the directory.
   *
   * @param sceneName The `name` property of the Scene to delete;
   */
  public deleteScene(sceneName: string) {
    this.directory.delete(sceneName);
  }

  /**
   * Deletes a list of Scenes from the directory.
   *
   * @param sceneNames An array containing the `name` properties of the scenes to delete.
   */
  public deleteScenes(sceneNames: string[]) {
    sceneNames.map(sceneName => this.deleteScene(sceneName));
  }
}
