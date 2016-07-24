var createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    req.session.loggedIn = true;
    req.session.save(function(err) {
	    console.log('in util', req.session);
	    res.set('Set-Cookie', 'a cookie');
	    res.sendStatus(201);
    });
  })
}

var checkUser = function(req, res, next) {
	console.log('checkUser', req.session);
	if (!req.session.loggedIn) {
		console.log('no session');
		res.sendStatus(403);
	} else {
		console.log('session, proceed');
		next();
	}
}

module.exports = {
	createSession: createSession,
	checkUser: checkUser
}