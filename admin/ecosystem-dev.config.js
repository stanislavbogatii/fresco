module.exports = {
    apps: [
      {
        name: "app-t-admin--dev",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
          PORT: 3002
        }
      }
    ]
};