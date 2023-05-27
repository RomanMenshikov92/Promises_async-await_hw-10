/* eslint-disable no-console */
import GameSavingLoader from './modules/GameSavingLoader';
import GameSavingLoaderAsyncAwait from './modules/GameSavingLoaderAsyncAwait';

// Задача Promises
GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
    console.log('Задача Promises выполнена');
  },
  (error) => {
    console.log('error', error.message);
  },
);

// Задача async/await
(async () => {
  try {
    const saving = await GameSavingLoaderAsyncAwait.load();
    console.log(saving);
  } catch (error) {
    console.log('error', error.message);
  } finally {
    console.log('Задача async/await выполнена');
  }
})();
