fx_version 'cerulean'
game 'gta5'

client_scripts {
    './dist/**'
}

server_scripts {
    './functions.lua',
    '@mysql-async/lib/MySQL.lua'
}