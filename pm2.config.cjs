module.exports = {
  apps: [
    {
      name: "promo_fe_prd",
      script: "./server.cjs",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: "max",
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules"],
      max_memory_restart: "1G",
      output: "~/.pm2/logs/promo_fe_prd-out.log",
      error: "~/.pm2/logs/promo_fe_prd-error.log",
      merge_logs: true,
      log_date_format: "YYYY/MM/DD h:mm:ss A",
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 10000,
      source_map_support: true,
      node_args: ["--trace-warnings", "--enable-source-maps"],
      env: {
        NODE_ENV: "production",
        RUNTIME_ENV: "production",
      },
    },
    {
      name: "promo_fe_stg",
      script: "./build/index.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: "max",
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules"],
      max_memory_restart: "1G",
      output: "~/.pm2/logs/promo_fe_stg-out.log",
      error: "~/.pm2/logs/promo_fe_stg-error.log",
      merge_logs: true,
      log_date_format: "YYYY/MM/DD h:mm:ss A",
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 10000,
      source_map_support: true,
      node_args: ["--trace-warnings", "--enable-source-maps"],
    },
    {
      name: "promo_fe_dev",
      script: "./build/index.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules"],
      max_memory_restart: "1G",
      output: "~/.pm2/logs/promo_fe_dev-out.log",
      error: "~/.pm2/logs/promo_fe_dev-error.log",
      merge_logs: true,
      log_date_format: "YYYY/MM/DD h:mm:ss A",
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 10000,
      source_map_support: true,
      node_args: ["--trace-warnings", "--enable-source-maps"],
    },
  ],

  /**
   * NPM handles deployment
   * SEE package.json for deployment script
   */
  deploy: {},
};
