const multer = require('multer');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: '../Assets/EBookImg',
  filename: function (req, file, cb) {
    console.log(file);
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

// Set up multer upload instance
const upload = multer({ storage: storage });

// Define the handleFileUpload function
function handleFileUpload(req, res) {
  console.log(req)

  // Use the upload.single middleware to handle the file upload
  upload.single('books')(req, res, function (err) {
    if (err) {
      // An error occurred during file upload
      return res.status(500).json({ error: err.message });
    }

    // File upload was successful
    if (!req.file) {
      // No file was uploaded
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Access the uploaded file using req.file
    const { originalname, filename, size } = req.file;

    // Perform necessary operations with the file
    // For example, you can save the file details to a database

    // Send a response indicating successful file upload
    res.status(200).json({
      message: 'File uploaded successfully',
      originalname,
      filename,
      size
    });
  });
}

module.exports = {
  handleFileUpload
};
