const router = require().Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;