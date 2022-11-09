import { setCookie } from "cookies-next";

const Login = async (req, res) => {
	const data = req.query.token;

	if (!data || !data === "") {
		const auth = await fetch(
			"https://api.select-list.xyz/auth/login"
		).catch((err) => {
			res.status(500).send(err);
		});

		if (auth.status === 200) {
			const json = await auth.json();

			if (json.error) res.status(500).send(err);
			else res.redirect(json.url);
		} else
			res.status(500).send(
				"It seems that our servers are having issues at this time!"
			);
	} else {
		setCookie("token", data, {
			req,
			res,
			maxAge: 60 * 60 * 24,
		});

		res.redirect("/");
	}
};

export default Login;
