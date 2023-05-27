import GameSavingLoaderAsyncAwait from '../GameSavingLoaderAsyncAwait';

test('GameSavingLoaderAsyncAwait', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const saving = await GameSavingLoaderAsyncAwait.load();
  return expect(saving).toEqual(expected);
});
