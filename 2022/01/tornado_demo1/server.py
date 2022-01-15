import tornado.ioloop
import tornado.web
import tornado.websocket

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

class WebsocketHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        print("Opened...")

    def on_message(self, message):
        print("Got a message: " + message)
        self.write_message(u"You wrote: {0}".format(message))

    def on_close(self):
        print("Closed...")

if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/", MainHandler),
        (r"/socket", WebsocketHandler),
    ])
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()
