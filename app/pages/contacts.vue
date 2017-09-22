<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-layout column>
            <v-flex xs12 sm10 offset-sm1>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <contacts-email
                                    :theme="theme"
                                    :params="emailParams"
                            ></contacts-email>
                        </v-flex>
                        <v-flex xs12 sm5 offset-sm1>
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
                description: 'Связаться со мной',
                emailParams: {
                    url: '/api/login', // /components/forms
                    ajax: true,
                    reqData: 'json', // form
                    resData: 'html' // json
                }
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
                theme: 'getTheme',
                info: 'getPersonalData'
            })
        }
    }
</script>

<style>

</style>