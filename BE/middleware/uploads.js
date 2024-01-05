const multer = require('multer')

// First set up the path/ filename the image will use
const storage = multer.diskStorage({
    destination: 'public/image', 
    // Jo said storage images in public folder of backend, in defined images directory 
    // But mine will be a lesson file not an Image? PDF so lol got to do something about it
    filename: (req, file, cb) => {
        cb(null, Date,now() + '-' + file.originalname)
        //timestamp the filename to keep it unique, otherwise files with same name will overwrite
    },
})

// create the image upload function => which I have it in FE UploadButton.jsx
// single file will be stored in req.file, multiple files are stored in req.files

const uploadFile = multer({storage:  storage}).single("file")
//'file' is the name of the file sent from the FE in a FormData Object

const uploadFiles= multer({storage: storage}).array("files")
//Change single to array for multiple,  FE needs to send array in FormData


module.exports = {uploadFile,uploadFiles}