const router = require().Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
