import {Router} from 'express'
import {/*getHomePage,*/ postHomePage, getAboutPage, getAllPage} from '../controllers/homes';



const router = Router();

// router.get ('/', getHomePage);

router.post ('/', postHomePage);

router.get ('/about', getAboutPage);

router.get ('*path', getAllPage);

export default router;