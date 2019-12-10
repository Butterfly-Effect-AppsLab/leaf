import flask

app = flask.Flask("__main__")


@app.route('/')
def my_index():
    return flask.render_template("index.html", token="Hello FLASK!")

@app.route('/Otazky')
def my_Otazky():
    return flask.render_template("index.html", token="Hello FLASK!")

@app.route('/Firmy')
def my_Firmy():
    return flask.render_template("index.html", token="Hello FLASK!")

@app.route('/LCFirma')
def my_LCFirma():
    return flask.render_template("index.html", token="Hello FLASK!")

@app.route('/LcKategorie')
def my_LcKategorie():
    return flask.render_template("index.html", token="Hello FLASK!")



if __name__ == '__main__':
    app.run(debug=True)
