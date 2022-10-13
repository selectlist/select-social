import { setCookie } from "cookies-next";

const Login = async (req, res) => {
	const data = req.query.data;

	if (!data || !data === "") {
		const auth = await fetch(
			"https://api.select-list.xyz/auth/discord/login",
			{
				headers: {
					domain: "select-list.xyz",
					redirect: "https://social.select-list.xyz/api/auth/login",
					Authorization: "Bearer L0-KKRTYEPR",
				},
			}
		).then((res) => res.json());

		if (auth.verification_passed) res.redirect(auth.url);
		else res.send("Security Verification Checks have failed.");
	} else {
		setCookie("auth", data, {
			req,
			res,
			maxAge: 60 * 60 * 24,
		});

        res.redirect("/");
	}
};

export default Login;
