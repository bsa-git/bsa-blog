<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-layout column>
            <v-flex xs12 md10 offset-md1>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <contacts-email
                                    :theme="theme"
                            ></contacts-email>
                        </v-flex>
                        <v-flex xs12 md5 offset-md1>
                            <contacts-info
                                    :theme="theme"
                                    :info="info.contact"
                            ></contacts-info>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ContactsEmail from '~components/contacts/email.vue'
    import ContactsInfo from '~components/contacts/info.vue'

    export default {
        components: {
            ContactsEmail,
            ContactsInfo
        },
        data() {
            return {
                title: 'Контакты',
                description: 'Связаться со мной'
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
        fetch({store, error}) {
            try {
                store.commit('SET_THEME', 'about')
            } catch (e) {
                error(e)
            }
        },
        computed: {
            ...mapGetters({
                config: 'getConfig',
                theme: 'getTheme',
                info: 'getPersonalData'
            })
        }
    }
</script>

<style>

</style>