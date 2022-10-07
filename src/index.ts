import LudiqueApp from './engine';
import Screen from './engine/classes/Screen';
import LudiqueAppConfig from './engine/interfaces/LudiqueAppConfig';

import './style.css';

const config = require('./game/config.json') as LudiqueAppConfig;

const canvas = document.getElementById('screen') as HTMLCanvasElement;
const screen = new Screen(canvas);

const app = new LudiqueApp(config);
app.init(screen);
