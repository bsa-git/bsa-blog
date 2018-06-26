<template>
    <pre><code class="highlight js">
/**
 * Tumblr API OAuth.
 */
passport.use('tumblr', new OAuthStrategy({
    requestTokenURL: 'https://www.tumblr.com/oauth/request_token',
    accessTokenURL: 'https://www.tumblr.com/oauth/access_token',
    userAuthorizationURL: 'https://www.tumblr.com/oauth/authorize',
    consumerKey: process.env.TUMBLR_KEY,
    consumerSecret: process.env.TUMBLR_SECRET,
    callbackURL: '/auth/tumblr/callback',
    passReqToCallback: true
}, (req, token, tokenSecret, profile, done) => {
    User.findById(req.user._id, (err, user) => {
        if (err) {
            return done(err);
        }
        user.tokens.push({kind: 'tumblr', accessToken: token, tokenSecret});
        user.save((err) => {
            done(err, user);
        });
    });
}));
    </code></pre>
</template>