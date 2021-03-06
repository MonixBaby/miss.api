const http = require("http")
const link = require('./endpoints.json').supportServer

module.exports = async(content) => {
    return new Promise((resolve, reject) => {
        if(!content) return resolve('If you have any errors, please contact the project administration ' + link)
        const url = `http://miss.glitch.me/api/${content}`
        http.get(url, function(res){
            let body = " ";
            res.on('data', function(chunk){
                body += chunk;
                return resolve(JSON.parse(body).image)
            })
        })
    })
}

module.exports.version = require('./package.json').version

/* Developer with ❤ by !Няфа💔 | Няя#1510 */
