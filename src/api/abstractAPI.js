export function getAPIWrapper() {
  console.log('getAPIWrapper');
  if ((process && process.env && process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production')) {
    console.log('production');
    return require('./realAPI.js');
  }
  console.log('test');
  return require.ensure([], (require) => {
      require('./mockAPI.js').default;
  });
}

const apiWrapper = getAPIWrapper();
