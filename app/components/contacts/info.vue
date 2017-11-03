<template>
    <v-card>
        <v-card-media :src="info.myImg" height="300px">
            <v-layout column class="media">
                <v-card-title>
                    <v-btn to="/about" title="Подробнее..." dark icon>
                        <v-icon>more_horiz</v-icon>
                    </v-btn>
                </v-card-title>
            </v-layout>
        </v-card-media>
        <v-list two-line>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon :class="`${theme.base}--text`">person</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ info.fullName }}</v-list-tile-title>
                    <v-list-tile-sub-title>Ф.И.О.</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile v-if="info.phonePersonal">
                <v-list-tile-action>
                    <v-icon :class="`${theme.base}--text`">phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ info.phonePersonal }}</v-list-tile-title>
                    <v-list-tile-sub-title>Мобильный</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-if="info.phoneWork">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ info.phoneWork }}</v-list-tile-title>
                    <v-list-tile-sub-title>Рабочий</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile v-if="info.emailPersonal" @click.native="selEmail(info.emailPersonal)">
                <v-list-tile-action>
                    <v-icon :class="`${theme.base}--text`">mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ info.emailPersonal }}</v-list-tile-title>
                    <v-list-tile-sub-title>Персональный</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action title="Выберете персональный email для отправки сообщения">
                    <v-icon>chat</v-icon>
                </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-if="info.emailWork" @click.native="selEmail(info.emailWork)">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ info.emailWork }}</v-list-tile-title>
                    <v-list-tile-sub-title>Рабочий</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action title="Выберете рабочий email для отправки сообщения">
                    <v-icon>chat</v-icon>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon :class="`${theme.base}--text`">location_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ info.address }}</v-list-tile-title>
                    <v-list-tile-sub-title>Адрес</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        props: [
            'theme',
            'info'
        ],
        methods: {
            selEmail: function (value) {
                this.$emit('onSelectEmail', value)
            }
        }
    }
</script>