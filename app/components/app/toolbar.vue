<template>
    <v-toolbar :class="[theme.base,  'darken-3']" dark fixed>
        <v-toolbar-side-icon @click.native.stop="onNavLeft"></v-toolbar-side-icon>
        <v-btn
                v-if="config.ui.nav_left_mini.show"
                icon
                @click.native.stop="onNavLeftMini"
        >
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn
                v-if="config.ui.nav_left_clipped.show"
                icon
                @click.native.stop="onNavLeftClipped"
        >
            <v-icon>web</v-icon>
        </v-btn>
        <v-btn
                v-if="config.ui.footer_fixed.show"
                icon
                @click.native.stop="onFooterFixed"
        >
            <v-icon>remove</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <v-menu bottom right>
                <v-btn icon slot="activator" dark>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list subheader>
                    <v-subheader>Информация</v-subheader>
                    <v-divider></v-divider>
                    <!--
                    <v-list-tile
                            target="_blank"
                            href="https://bsa-git.github.io/bsa-resume/"
                    >
                        <v-list-tile-title>Об авторе</v-list-tile-title>
                    </v-list-tile>
                    -->
                    <v-list-tile
                            tag="a"
                            target="_blank"
                            href="https://bsa-git.github.io/bsa-resume/"
                    >
                        <v-list-tile-action>
                            <v-icon>contacts</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Об авторе</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                            tag="a"
                            target="_blank"
                            href="https://github.com/bsa-git"
                    >
                        <v-list-tile-action>
                            <v-icon>public</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Мои проекты на GitHub</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

        </div>
        <v-btn
                v-if="config.ui.nav_right.show"
                icon
                @click.native.stop="onNavRight"
        >
            <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: [
            'title',
            'logo_img'
        ],
        data() {
            return {
                miniVariant: false
            }
        },
        computed: mapGetters({
            theme: 'getTheme',
            config: 'getConfig'
        }),
        methods: {
            onNavLeft: function () {
                this.$emit('onNavLeft')
            },
            onNavRight: function () {
                this.$emit('onNavRight')
            },
            onNavLeftMini: function () {
                this.miniVariant = !this.miniVariant
                this.$emit('onNavLeftMini')
            },
            onNavLeftClipped: function () {
                this.$emit('onNavLeftClipped')
            },
            onFooterFixed: function () {
                this.$emit('onFooterFixed')
            }
        }
    }
</script>