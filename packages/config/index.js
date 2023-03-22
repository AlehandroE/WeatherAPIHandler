let config = { ...require("./configs/default") };
if (process.env.NODE_ENV)
  config = { ...config, ...require(`./configs/${process.env.NODE_ENV}`) };
module.exports = config;
