const ida = async() => (await import('@resystem/ida-js-sdk'));

const idaConfiguration = {
  appId: '5f5fab898683446631337aa3',
  appKey: 'UK41MT6OBI378BM58SL106801BX9QJU0',
};

export default ({ onAuthChange }) => new Promise(async (res, rej) => {
  const localIda = await ida();
  console.log('ida', ida());
  await localIda.initializeApp({
    ...idaConfiguration,
    onAuthChange,
    onLoad: (payload) => res(payload),
    onOpen: (data) => console.log('IDA ABERTO!!!!!!!!!!!!!!!!', data)
  });
});
