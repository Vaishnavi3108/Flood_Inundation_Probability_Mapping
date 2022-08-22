const router = require('express').Router()
const multer = require('multer')
const Result = require('../Models/Schema')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../fipm/src/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
// const upload = multer({dest:'./uploads'})
const upload = multer({ storage: storage })

router.post('/result', upload.single('Result'), async (req, res) => {

    const State = req.body.State
    const District = req.body.District
    const Data = req.body.Data
    const ImageInformatiom = req.file
    console.log(ImageInformatiom)

    try {

        const newResult = new Result({
            State,
            District,
            Data,
            ImagePath: ImageInformatiom.path
        })

        const result = await newResult.save()
        res.status(200).json('Result Added')

    } catch (err) {
        console.log(err)
        res.json(err)
    }

})

router.get('/result', upload.single('Result'), async (req, res) => {

    const State = req.query.State
    const District = req.query.District

    console.log(State + " " + District)

    try {

        const result = await Result.find({District : District})
        res.status(200).json(result)

    } catch (err) {
        console.log(err)
        res.json(err)
    }

})

module.exports = router