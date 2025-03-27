module.exports = {
    apps: [
      {
        name: "app-t-client",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
          PORT: 3000
        }
      }
    ]
};