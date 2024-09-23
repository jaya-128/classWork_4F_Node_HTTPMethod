const path=require('path')
const pathFile="C:\\Users\\ADMIN\\Desktop\\4F\NODE\\path.js"
console.log(path.dirname(pathFile))
console.log(path.basename(pathFile))
console.log(path.extname(pathFile))
const newpathFile=path.join(path.dirname(pathFile),'os.js')
console.log(newpathFile)