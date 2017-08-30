<template>
    <v-footer :fixed="fixed" :class="[theme.base,  'darken-4', 'pa-3', 'white--text']" >
        <div>{{ copyright }}</div>
        <v-spacer></v-spacer>
        <v-icon class="mr-3" dark>language</v-icon> Разработчик:<v-btn :href="site" class="orange--text  text--lighten-2" target="_blank" flat>{{ developer }}</v-btn>
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
        computed: mapGetters({
            theme: 'getTheme'
        })
    }
</script>