const { ClickHouse } = require("clickhouse");
const clickhouse = new ClickHouse(
  require(`./config/config.json`)[process.env.NODE_ENV || "development"]
);

async function create(request, data) {
  return await clickhouse
    .insert(request, data)
    .toPromise()
    .catch((e) => {
      console.log(e);
      throw "CLICKHOUSE_OP_CREATE_ERROR";
    });
}

async function query(request, opts) {
  return await clickhouse
    .query(request, opts)
    .toPromise()
    .catch((e) => {
      console.log(e);
      throw "CLICKHOUSE_OP_QUERY_ERROR";
    });
}

module.exports = {
  create,
  query
};
