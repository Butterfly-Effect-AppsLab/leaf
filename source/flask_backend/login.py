# google = oauth.remote_app('googlgit adde',
#                           base_url='https://www.google.com/accounts/',
#                           authorize_url='https://accounts.google.com/o/oauth2/auth',
#                           request_token_url=None,
#                           request_token_params={'scope': 'https://www.googleapis.com/auth/userinfo.email',
#                                                 'response_type': 'code'},
#                           access_token_url='https://accounts.google.com/o/oauth2/token',
#                           access_token_method='POST',
#                           access_token_params={'grant_type': 'authorization_code'},
#                           consumer_key=GOOGLE_CLIENT_ID,
#                           consumer_secret=GOOGLE_CLIENT_SECRET)
#
#
# @app.route("/")
# def home_page():
#     access_token = session.get('access_token')
#     if access_token is None:
#         return redirect(url_for('login'))
#
#     access_token = access_token[0]
#     from urllib2 import Request, urlopen, URLError
#
#     headers = {'Authorization': 'OAuth '+access_token}
#     req = Request('https://www.googleapis.com/oauth2/v1/userinfo',
#                   None, headers)
#     try:
#         res = urlopen(req)
#     except URLError e:
#         if e.code == 401:
#             # Unauthorized - bad token
#             session.pop('access_token', None)
#             return redirect(url_for('login'))
#         return res.read()
#
#     return res.read()
