module.exports = {
  apps: [
    {
      name: 'hexafort-kite',
      script: 'npm',
      args: 'start -p 4000',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};