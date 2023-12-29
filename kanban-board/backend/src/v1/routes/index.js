var router = require('express').Router()

router.use('/authentication', require('./authentication'))
router.use('/boards', require('./board'))
router.use('/boards/:boardId/sections', require('./section'))
router.use('/boards/:boardId/tasks', require('./task'))

module.exports = router;