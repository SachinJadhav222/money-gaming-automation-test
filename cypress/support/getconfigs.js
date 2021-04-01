// read.js
const fs = require('fs');
const yaml = require('js-yaml');
const { mainModule } = require('process');

// const getSecretkeys=((key)=>{
//     try {
//         let fileContents = fs.readFileSync('./cypress/config/secret-keys.yml', 'utf8');
//         let data = yaml.safeLoad(fileContents);
//        return data[key];
//     } catch (e) {
//         console.log(e);
//     }
// })

// const getURL = ((url)=>{
//     try {
//         let fileContents = fs.readFileSync('./cypress/config/urls-endpoints.yml', 'utf8');
//         let data = yaml.safeLoad(fileContents);
//        return data[url];
//     } catch (e) {
//         console.log(e);
//     }
// })

// module.exports={
//     getSecretkeys: getSecretkeys,
//     getURL: getURL

// }

module.exports.getSecretkeys=(key)=>{
    try {
        let fileContents = fs.readFileSync('./cypress/config/secret-keys/secret-keys.yml', 'utf8');
        let data = yaml.safeLoad(fileContents);
       return data[key];
    } catch (e) {
        console.log(e);
    }
}

module.exports.getURL=(url)=>{
    try {
        let fileContents = fs.readFileSync('./cypress/config/urls-endpoints/urls-endpoints.yml', 'utf8');
        let data = yaml.safeLoad(fileContents);
       return data[url];
    } catch (e) {
        console.log(e);
    }
}

// module.exports={
//     getSecretkeys: ((key)=>{
//         try {
//             let fileContents = fs.readFileSync('./cypress/config/secret-keys/secret-keys.yml', 'utf8');
//             let data = yaml.safeLoad(fileContents);
//            return data[key];
//         } catch (e) {
//             console.log(e);
//         }
//     }),
//     getURL:((url)=>{
//         try {
//             let fileContents = fs.readFileSync('./cypress/config/urls-endpoints/urls-endpoints.yml', 'utf8');
//             let data = yaml.safeLoad(fileContents);
//            return data[url];
//         } catch (e) {
//             console.log(e);
//         }
//     })

// }
