module.exports = {
  apps: [
    {
      name: "deeproom-web",
      cwd: "/var/www/deep",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3021",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3021,
      },
      error_file: "/var/log/pm2/deeproom-web.error.log",
      out_file: "/var/log/pm2/deeproom-web.out.log",
      merge_logs: true,
      time: true,
    },
  ],
};
