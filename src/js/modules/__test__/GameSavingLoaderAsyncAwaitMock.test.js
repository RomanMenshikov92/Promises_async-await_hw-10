// для задачи Testing Async code (задача со звёздочкой)

import GameSavingLoaderAsyncAwait from '../GameSavingLoaderAsyncAwait';
import read from '../reader';

jest.mock('../reader');

describe('GameSavingLoaderAsyncAwait', () => {
  test('Error', async () => {
    const textError = 'Ошибка 123';
    read.mockRejectedValue(new Error(textError));

    expect(GameSavingLoaderAsyncAwait.load()).rejects.toThrow(textError);
  });
});
