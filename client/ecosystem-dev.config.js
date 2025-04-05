module.exports = {
    apps: [
      {
        name: "app-t-client--dev",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
          PORT: 3000
        }
      }
    ]
};
