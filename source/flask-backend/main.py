import flask

app = flask.Flask("__main__")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return flask.render_template("index.html", token="Helloo FLASK!")


if __name__ == '__main__':
    app.run(debug=True)
