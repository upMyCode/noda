// File system


const fs = require('fs')
const path = require('path')


// fs.mkdir(path.join(__dirname, 'test1'), (err)=> {
//     if(err){
//         throw err
//     }
//     console.log('Folder is created')
// })

const filePath = path.join(__dirname, 'test1', 'text.txt')

fs.appendFile(filePath, '\nHello Node JSX', (err) => {
    if(err){
                throw err
            }
            console.log('File is created')
})


fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err){
        throw err
    }
    console.log(content)
    // const data = Buffer.from(content)

    // console.log('Content', data.toString())
})


