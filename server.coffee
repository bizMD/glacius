# Require the dependencies
require 'sugar'
domain = require 'domain'
restify = require 'restify'
Promise = require 'bluebird'
socketio = require 'socket.io'

# Require the native dependencies
fs = require 'fs'
path = require 'path'

# Require the routes directory
requireDir = require 'require-dir'
require('coffee-script/register')
###
requireDir = require 'require-dir'
require('coffee-script/register')
routes = requireDir 'routes', recurse: true
###

# Require the marko adapter
require('marko/node-require').install();

# Activate the domain
d = domain.create()
d.run ->

	# Create the web server and use middleware
	server = restify.createServer name: 'Glacius'
	server.use restify.gzipResponse()
	server.use restify.bodyParser()
	server.pre restify.pre.sanitizePath()
	server.use restify.CORS()
	server.use restify.fullResponse()

	# Create the web socket server
	io = socketio.listen server.server

	# Serve routes
	server.get '/', (req, res, next) ->
		res.writeHead 200, {'Content-Type': 'text/html; charset=utf-8'}
		template = path.resolve 'pages', '2-home', 'marko', 'template.marko'
		view = require template
		view.render {}, res
		#file = fs.createReadStream template
		#file.pipe res

	# Serve CSS assets
	server.get '/assets/css', (req, res, next) ->
		res.writeHead 200, {"Content-Type": 'text/css'}
		style = path.resolve 'pages', '2-home', 'sass', 'styles.css'
		file = fs.createReadStream style
		file.pipe res

	# Serve JS assets
	server.get '/assets/js', (req, res, next) ->
		res.writeHead 200, {"Content-Type": 'application/javascript'}
		script = path.resolve 'pages', '2-home', 'coffee', 'index.js'
		file = fs.createReadStream script
		file.pipe res

	# Web Socket Connection
	io.sockets.on 'connection', (socket) ->
		console.log 'someone opened a connection'

	# After each operation, log if there was an error
	server.on 'after', (req, res, route, error) ->
		console.log "======= After call ======="
		console.log "Error: #{error}"
		console.log "=========================="

	# Log when the web server starts up
	server.listen 8000, -> console.log "#{server.name}[#{process.pid}] online: #{server.url}"
	console.log "#{server.name} is starting..."

d.on 'error', (error) ->
	console.warn error