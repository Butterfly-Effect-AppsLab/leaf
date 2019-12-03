import flask

app = flask.Flask("__main__")


@app.route('/Login')
def my_index():
    return flask.render_template("index.html", token="Hello FLASK!")

<<<<<<< HEAD
@app.route('/Settings')
=======
@app.route('/Otazky')
>>>>>>> 2a4e6c26130cf8a967cebd9f6ad47732c0238eb9
def my_Settings():
    return flask.render_template("index.html", token="Hello FLASK!")

@app.route('/Firmy')
def my_Firmy():
    return flask.render_template("index.html", token="Hello FLASK!")


if __name__ == '__main__':
    app.run(debug=True)
