import flask

app = flask.Flask("__main__")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return flask.render_template("index.html", token=path)


@app.route('/api/v1.0/companies/')
def get_companies():
    pass


if __name__ == '__main__':
    app.run(debug=True)
