
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/:slug', (req, res) => {
    if (req.params.slug !== undefined && req.params.slug.split(".").length <= 1)
      return app.render(req, res, '/', { slug: req.params.slug })
  })

  server.get('/product/:slug', (req, res) => {
    return app.render(req, res, '/product', { slug: req.params.slug })
  })

  server.get('/tag/:slug', (req, res) => {
    return app.render(req, res, '/tag', { slug: req.params.slug })
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})