 const path = require('path');

 console.log('Название файла', path.basename(__filename))
 console.log('Имя директории', path.dirname(__filename))
 console.log('Имя расширения', path.extname(__filename))
 console.log('Parse', path.parse(__filename))
 console.log(path.join(__filename, 'server', 'index.html'))
