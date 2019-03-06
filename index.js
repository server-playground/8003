'use strict'

const hapi = require('hapi')

const server = hapi.server({ port: 8003 })

server.route({
  method: 'get',
  path: '/',
  handler (req) {
    console.log('')
    console.log(req['path'])
    console.log(req['headers']['user-agent'])
    return 'hello world'
  }
})

server.start()

console.log('server is running on "http://localhost:8003/"')
