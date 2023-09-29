const bCrypt = require('bcrypt');

(
    async function main(){
        const originalPassword = "OriginalPassword";
        const saltRounds = 10;

        const salt = await bCrypt.genSalt(saltRounds);
        const hashedPass = await bCrypt.hash(originalPassword, salt);
        console.log(hashedPass);

        const isMatch = bCrypt.compare(originalPassword, hashedPass);
        isMatch.then(function(r){console.log(r)})
    }
)()