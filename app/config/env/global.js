// Global values for application"
export default {
    debug: false,
    maintenance: false,
    gapi: {
        apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        clientId: 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
        services: {
            auth: {
                test: {
                    token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNmN2RjZjY2YjUwZDZiZGExMTgwYjcwNjdlYzhhZTlhNDhjYzU2YTQifQ...',
                    user: {
                        id: '12345678901234567890',
                        fullName: 'Molly King',
                        givenName: 'Molly',
                        familyName: 'King',
                        imageURL: 'https://test.com/images/user.jpg',
                        email: 'user@test.com'
                    }
                }
            },
            gmail: {
                discoveryDocs: [
                    'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'
                ],
                scopes: {
                    send: [
                        'https://www.googleapis.com/auth/gmail.send'
                    ]
                }
            }
        }
    },
    ui: {
        color_theme: 'dark', // dark/light
        nav_left: {show: true, value: true},
        nav_left_mini: {show: true, value: false},
        nav_left_clipped: {show: true, value: false},
        footer_fixed: {show: true, value: false},
        nav_right: {show: true, value: false}
    },
    personal_data: {
        app_title: 'My Application',
        logo_title: 'My Logo',
        logo_icon: 'new_releases',
        logo_img: '/img/system/user_female.png',
        my_img: '/img/system/user_female.png',
        copyright: '© 2016 Sample - All Rights Reserved',
        designed_with: 'Sample Studio',
        designed_with_url: 'https://www.sample.com/iamgurdeeposahan',
        contact: {
            fullName: 'Molly King',
            givenName: 'Molly',
            familyName: 'King',
            myImg: '/img/system/user_female.png',
            address: '795 Sample Ave, Suite 600',
            phonePersonal: '+01 234 567 890',
            phoneWork: '+01 234 567 890',
            emailPersonal: 'personal@sample.com',
            emailWork: 'work@sample.com',
            website: 'www.sample.com'
        },
        twitter: {url: '#', tag: '@Sample'},
        socials: {
            facebook: {url: '#', icon: 'fa-facebook'},
            twitter: {url: '#', icon: 'fa-twitter'},
            google: {url: '#', icon: 'fa-google-plus'},
            skype: {url: '#', icon: 'fa-skype'}
        }
    },
    pagination:{
        total: 6
    }
}
