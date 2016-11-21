var ngrok = require('ngrok')

ngrok.connect({
  authtoken: '4SFEEfsM4pWvPA4Rkzwch_5JwFMDSy6eSq9JspDZQ3G',
  proto: 'http', // http|tcp|tls
  addr: 3000, // port or network address
  // auth: 'pengzezhi5266@gmail.com:pengzezhi11', // http basic authentication for tunnel
  region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us
}, function (err, url) {
  if (err) console.log(err)
  console.log(url)
})

ngrok.connect({
  authtoken: '4SFEEfsM4pWvPA4Rkzwch_5JwFMDSy6eSq9JspDZQ3G',
  proto: 'http', // http|tcp|tls
  addr: 2333, // port or network address
  // auth: 'pengzezhi5266@gmail.com:pengzezhi11', // http basic authentication for tunnel
  region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us
}, function (err, url) {
  if (err) console.log(err)
  console.log(url)
})
