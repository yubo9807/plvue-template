
const NODE_ENV = process.env.NODE_ENV as 'development' | 'production';

export default Object.freeze({

  BASE_URL: '/plvue-template',

  NODE_ENV,

  BASE_API: '/api',

})
