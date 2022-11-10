import { setCookie } from "cookies-next";

const Callback = async (req, res) => {
	const data = req.query.token;

	if (!data || !data === "") {
		res.status(500).send("No authentication token was passed with request.");
	} else {
		setCookie("token", data, {
			req,
			res,
			maxAge: 60 * 60 * 24,
		});

		res.redirect("/");
	}
};

export default Callback;
