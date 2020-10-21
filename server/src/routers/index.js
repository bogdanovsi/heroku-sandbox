const express = require('express');
const archiver = require('archiver');
const allRouters = express.Router();

allRouters.use('/books', require('./books'));
allRouters.use('/writers', require('./writers'));
allRouters.use('/customers', require('./customers'));
allRouters.use('/orders', require('./orders'));
allRouters.use('/contracts', require('./contracts'));

allRouters.post('/zip_file', (req, res) => {
    const filename = 'export.zip';

    const archive = archiver('zip', {});
  
    archive.on('warning', (err) => {
      console.log(`WARN -> ${err}`);
    });
  
    archive.on('error', (err) => {
      console.log(`ERROR -> ${err}`);
    });
  
    const files = req.body.files || [];
    for (const file of files) {
      archive.append(file.content, { name: file.name });
      console.log(`Appending ${file.name} file: ${JSON.stringify(file, null, 2)}`);
    }
  
    try {
      if (files.length > 0) {
        archive.pipe(res);
        archive.finalize();
        return res.attachment(filename);
      } else {
        return res.send({ error: 'No files to be downloaded' });
      }
    } catch (e) {
      return res.send({ error: e.toString() });
    }
})

module.exports = allRouters;