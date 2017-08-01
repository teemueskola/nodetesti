module.exports = {
  apps: [{
    name: 'nodetesti',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-35-158-174-75.eu-central-1.compute.amazonaws.com',
      key: '~/.ssh/aws_uusi.pem',
      ref: 'origin/master',
      repo: 'https://github.com/teemueskola/nodetesti.git',
      path: '/home/ec2-user/nodetesti',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
