import flask

app = flask.Flask("__main__")


@app.route('/')
def my_index():
    return flask.render_template("index.html", token="Hello FLASK!")


if __name__ == '__main__':
    app.run(debug=True)