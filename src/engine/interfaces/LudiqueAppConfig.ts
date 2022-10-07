/**
 * Interface for JSON LudiqueAppConfig files.
 */
export default interface LudiqueAppConfig {
  /** The LudiqueApp's display title. */
  title: string;

  /** The LudiqueApp's version. */
  version: string;

  /** Wether `debugMode` is enabled or not for the App. */
  debugEnabled?: boolean;

  /** The Scene that will be launched upon the App's first render. */
  startupScene?: string;
}
