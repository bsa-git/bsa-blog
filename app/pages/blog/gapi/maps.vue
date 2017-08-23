<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <v-card class="text-xs-center" hover raised>
                <v-card-text>
                    <div class="headline">Статья о работе с картами с помощью сервиса Google Maps.</div>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Google Maps',
                description: 'Работа с географическими картами через Google Client API.'
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
                link: []
            }
        },
        created: function () {
            this.$store.commit('SET_THEME', 'blog')
        }
    }
</script>

