// /**
//  * Use this script to rename any variables generated in convertedModels
//  */
// const fs = require('fs');

// let file = fs.readFileSync('./models/usermetum.ts', { encoding: 'utf-8' });
// file = file.replace(/usermetum/g, 'usermeta');
// file = file.replace(/Usermetum/g, 'Usermeta');
// fs.writeFileSync('./models/usermeta.ts', file);
// fs.unlink('./models/usermetum.ts', (err) => {//deleted file
//   if (err) throw err;
// });



// let file2 = fs.readFileSync('./models/init-models.ts', { encoding: 'utf-8' });
// file2 = file2.replace(/usermetum/g, 'usermeta');
// file2 = file2.replace(/Usermetum/g, 'Usermeta');
// fs.writeFileSync('./models/init-models.ts', file2);

