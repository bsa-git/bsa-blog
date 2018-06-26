<template>
    <pre><code class="highlight js">
/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function gravatar(size) {
    if (!size) {
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://secure.gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};
    </code></pre>
</template>