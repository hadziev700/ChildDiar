const {Router} = require('express')
const router = Router()

router.use(require('./users.routes'))
router.use(require('./child.routes'))
router.use(require('./event.routes'))
router.use(require('./form.routes'))

module.exports = router