<template>
    <v-footer :fixed="fixed" :class="[theme.base,  'darken-4', 'pa-3', 'white--text']">
        <div>{{ copyright }}</div>
        <v-spacer></v-spacer>
        <div v-show="isShow">
            <v-icon class="mr-3" dark>language</v-icon>
            Разработчик:
            <v-btn :href="site" class="orange--text  text--lighten-2" target="_blank" flat>{{ developer }}</v-btn>
        </div>
    </v-footer>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: [
            'fixed',
            'copyright',
            'site',
            'developer'
        ],
        data: () => ({
            minWindowWidth: 600,
            isShow: true,
            windowSize: {
                x: 0,
                y: 0
            }
        }),
        mounted() {
            this.onResize()
        },

        methods: {
            onResize() {
                this.windowSize = {x: window.innerWidth, y: window.innerHeight}
                this.isShow = this.windowSize.x >= this.minWindowWidth
            }
        },
        computed: mapGetters({
            theme: 'getTheme'
        })
    }
</script>