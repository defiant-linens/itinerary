var createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    req.session.user = newUser;
    req.session.save(function(err) {
	    console.log('in util', req.session);
	    res.send('logged in');
	    // res.redirect('/');
    });
  })
}

var checkUser = function(req, res, next) {
	// req.session.destroy();
	// req.session = null;
	// console.log('session destroyed');
	console.log('checkUser', req.session);
	if (!req.session.user) {
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