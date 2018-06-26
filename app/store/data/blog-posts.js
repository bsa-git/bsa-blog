export default {
    items: [
        {header: 'Рекомендуемые ресурсы'},
        {
            icon: 'filter_none',
            to: '/blog/resources/recommended',
            title: 'Обзор',
            subtitle: "<span class='grey--text text--lighten-2'>Ссылки на полезные инструменты и ресурсы для разработчика...</span>"
        },
        {divider: true, inset: true},
        {header: 'Google Client API'},
        {
            icon: 'filter_none',
            to: '/blog/gapi/overview',
            title: 'Обзор',
            subtitle: "Вы можете использовать в своих клиенских веб приложениях такие Google сервисы как <span class='grey--text text--lighten-2'>People, Gmail...</span>"
        },
        {divider: true, inset: true},
        {
            icon: 'contact_mail',
            to: '/blog/gapi/gmail-send',
            title: 'Gmail-Send',
            subtitle: "<span class='grey--text text--lighten-2'>Сервис Google Mail</span> позволяет нам передавать почтовые сообщения..."
        },
        {divider: true, inset: true},
        {
            icon: 'mail_outline',
            to: '/blog/gapi/gmail-inbox',
            title: 'Gmail-Inbox',
            subtitle: "<span class='grey--text text--lighten-2'>Сервис Google Mail</span> позволяет нам принимать почтовые сообщения..."
        },
        {divider: true, inset: true}
    ]
}
