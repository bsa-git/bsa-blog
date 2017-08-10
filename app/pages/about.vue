<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-container>
            <iframe id="my-resume"
                    title="BSA Lab. Resume"
                    frameborder="0"
                    src="https://bsa-git.github.io/bsa-resume/">
            </iframe>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Немного о себе',
                description: 'Персональная информация.'
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
            }
        },
        fetch({store, error}) {
            try {
                store.commit('SET_THEME', 'about')
            } catch (e) {
                error(e)
            }
        }
    }
</script>