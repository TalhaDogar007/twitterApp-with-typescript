import { Views } from "middlewares/path";
import { render_page } from "../../middlewares/render_page";
import { Router } from "express";

const router = Router();

router.get("/", render_page(Views.App));
//router.post("/auth/signup",postSignupData);

router.get("/auth/signup", render_page(Views.Account_SignUp));
router.get("/auth/signin", render_page(Views.Account_SignIn));


//router.get("/product/:handle", require("./product").default);

export default router;