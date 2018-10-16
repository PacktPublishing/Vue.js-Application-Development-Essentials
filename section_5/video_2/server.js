const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

//for each page request we want to make a response with
server.get('*', (req, res) => {
    // new Vue app, provide a template which is a div element with text
    const app = new Vue({
        template: `<div>Hello VUE SERVER</div>`
    })

    //then using vue renderer we want Render the Vue instance to HTML
    //pass as a first argument Vue app, the second argument is a function which takes error and html
    // if error we want to res with a status 500 and send Internal Server Error message
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }

        //otherwise we want to res with an html markup in template string
        res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
    })
})

//at the end of the file we want to listen our server on port 8080
server.listen(8080)