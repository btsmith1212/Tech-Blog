const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoute');

router.use('/user', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
//switchboard for all routes
module.exports = router;
