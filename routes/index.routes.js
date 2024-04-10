const router = require('express').Router();
const mainRouter = require('./views/ads.routes');

/* const announcementsApiRouter = require('./api/announcementsApi.routes'); */
const authApiRouter = require('./api/authApi.routes');


const authRouter = require('./views/auth.routes');
/* const announcementsRouter = require('./views/announcement.routes');
const Router404 = require('./views/router404.routes');  
 */
router.use('/', mainRouter);
/* router.use('/announcement', announcementsRouter);
router.use('/api/announcement', announcementsApiRouter); */
router.use('/api/auth', authApiRouter);
router.use('/auth', authRouter);
/* router.use('*', Router404);
router.use('/404', Router404); 
 */
module.exports = router;
