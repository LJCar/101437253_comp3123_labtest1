let fs = require('fs');
let path = require('path');


fs.mkdir('Logs', { recursive: true }, (err) => {
    if (err) throw err;

    for (let i = 0; i < 10; i++){
        const filePath = path.join('Logs', 'log' + i + '.txt');
        try {
            if (!fs.existsSync(filePath)) {
                fs.writeFileSync(filePath, `This is file number ${i + 1}`);
                console.log(`log${i}.txt`);
            }
            else {
                console.log(`log${i}.txt`);
            }
        }
            catch (e) {
                console.error(`Error: ${e.message}`);
        }
    }
});