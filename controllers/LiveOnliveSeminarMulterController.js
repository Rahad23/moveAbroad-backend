const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = path.join(__dirname, '../public/Assets/UniversityImg');
    return cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    const extension = path.extname(originalName);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    return cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});


const fileSizeLimit = 3 * 1024 * 1024;
const allowedFileTypes = ['image/jpeg', 'image/png',"image/jpg"];

const upload = multer({
  storage,
  limits: {
    fileSize: fileSizeLimit
  },
  fileFilter: function (req, file, cb) {
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
    }
  }
});

function handleFileUpload(req, res) {
    upload.single('files')(req, res, function (err) {
      if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ error: 'Maximum size allowed is 3MB.' });
        } else {
          return res.status(500).json({ error: err.message });
        }
      }
  
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      const { originalname, filename, size } = req.file;
  
      const message = 'File uploaded successfully';
      res.status(200).json({
        message,
        originalname,
        filename,
        size
      });
    });
  }
  

const getLiveSeminar = async (req, res) => {
  return await res.send("Hello multer"); 
}

module.exports = {
  handleFileUpload,
  getLiveSeminar
};
