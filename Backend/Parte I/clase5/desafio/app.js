import express from 'express'
import multer from 'multer'

const app = express();

app.use(express.json());
app.use(express.static('./src/public/'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/thumbnail') // no crea carpetas
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + file.originalname)
    },
});

const uploader = multer({ storage });

app.post('/', uploader.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ status: 'error', error: 'No file' })
    }
    console.log(req.file);
    res.send('File uploaded');
});

app.listen(8080);