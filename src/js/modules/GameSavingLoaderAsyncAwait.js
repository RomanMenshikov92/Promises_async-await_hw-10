import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

// для задачи async/await
export default class GameSavingLoaderAsyncAwait {
  static async load() {
    const data = await read();
    const value = await json(data);
    return new GameSaving(JSON.parse(value));
  }
}
