<template>
    <pre><code class="highlight js">
/**
 * Pinterest API OAuth2.
 */
passport.use('pinterest', new OAuth2Strategy({
    authorizationURL: 'https://api.pinterest.com/oauth/',
    tokenURL: 'https://api.pinterest.com/v1/oauth/token',
    clientID: process.env.PINTEREST_ID,
    clientSecret: process.env.PINTEREST_SECRET,
    callbackURL: process.env.PINTEREST_REDIRECT_URL,
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    User.findById(req.user._id, (err, user) => {
        if (err) {
            return done(err);
        }
        user.tokens.push({kind: 'pinterest', accessToken});
        user.save((err) => {
            done(err, user);
        });
    });
}));
    </code></pre>
</template>