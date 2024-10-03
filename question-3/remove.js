let fs = require('fs');
let path = require('path');

try {
    if (fs.existsSync('Logs')){
        let allFiles = fs.readdirSync('Logs');
        allFiles.forEach(file => {
            let fPath= path.join('Logs', file)
            fs.unlinkSync(fPath);
            console.log(`delete files...${file}`);
        });
        fs.rmdirSync('Logs');
    }

}
catch (e) {
    console.error(`Error: ${e.message}`);
}