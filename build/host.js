const os = require('os');

module.exports = (function(){
  const ips = os.networkInterfaces().en0;
  let ip = 'localhost';
  if (process.env.client === 'mobile') {
    ips.some(item => {
      const ip4 = item.family.toLowerCase() === 'ipv4';
      return ip4 && (ip = item.address);
    });
  }
  return ip;
})();
