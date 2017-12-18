# BSA-BLOG project

> This project is based on [NUXT](https://nuxtjs.org) (framework for universal applications on [Vue.js](https://vuejs.org/v2/guide/index.html)) and
[Vuetify](https://vuetifyjs.com/vuetify/quick-start) (Material Component Framework on [Vue.js](https://vuejs.org/v2/guide/index.html)).


### [Demo...](http://bsa-git.github.io/)

## About

This project is executed as an individual user site, in which the following tasks are solved:

1. You can see the resume of the user, in which the experience of work,
the level of proficiency in various software technologies, portfolio, education.

2. Contact details of the user.

3. Articles on various topics.

4. The list of the user's work and their brief description.

5. List of areas the user is interested in.


## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Clone or download [bsa-blog](https://github.com/bsa-git/bsa-blog) project with git.

3. Install your dependencies

```bash
cd <project-name>
npm install # Or yarn install
```

4. Environment variables

Add file "app/env.js" to your project to set user environment variables.
See the sample file "app/env.example.js".

5. Start your app

```bash
npm run dev
```

6. The application is now running on http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Generate static project

```bash
npm run generate
```

When building your application it will generate the HTML of every of your routes to store it in a file.

Example:

```bash
-| pages/
----| about.vue
----| index.vue
```

Will generate:

```bash
-| dist/
----| about/
------| index.html
----| index.html
```

This way, you can host your generated web application on any static hosting!

## Help

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js) 
and [Vuetify.js](https://vuetifyjs.com/vuetify/quick-start) documentation

