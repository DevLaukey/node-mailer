// import express
const { sendEmail } = require('../controller/mailController')
const router = express.Router()


router.post('/', sendEmail)

module.exports = router