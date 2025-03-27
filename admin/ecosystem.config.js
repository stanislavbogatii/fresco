module.exports = {
    apps: [
      {
        name: "app-t-admin",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
          PORT: 3002
        }
      }
    ]
};