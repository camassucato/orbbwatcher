require('dotenv').config({
  path: process.env.APP_ENV === 'test' ? '.env.test' : '.env',
});
