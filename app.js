
const fs = require('fs');

const followings = [
        {
            "username": "ankareklame",
            "full_name": "Anka Reklame"
        },
        {
            "username": "ucar.markt",
            "full_name": "UCAR Market"
        },
        // datayı buraya aktar
    ]


    const filePath = 'followings.txt';


fs.writeFileSync(filePath, '');

followings.forEach((user) => {
  fs.appendFileSync(filePath, `${user.username}\n`);
});

console.log('Kullanıcı adları dosyaya yazıldı.');