const multer = require('multer');
const router = require('express').Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploader = multer({ storage: storage });
router.post('/uploadfile', uploader.single('file'), (req, res) => {
    res.status(200).json({ message: 'file upload success' })
})

module.exports = router;