let user = [
    {
        userid:'juchan',
        userpw:'1234',
        username:'주찬'
    },
    {
        userid:'ingoo',
        userpw:'1234',
        username:'인구'

    },
    {
        userid:'jang',
        userpw:'1234',
        username:'장'
    }
]

function findUser(id,pw){
    for(let i=0; i<user.length; i++){
        if(user[i].userid == id&& user[i].userpw == pw){
            return true
        }
        return false
    }
}

module.exports = {user,findUser}