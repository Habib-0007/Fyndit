const { gpt } = require("gpti");

const askGPT = async (req, res) => {
	res.set(
		"Access-Control-Allow-Origin",
		"*"
	);
	const { history, prompt } = req.body;
	try {
		const data = await gpt.v3({
			messages: history,
			markdown: false,
			stream: false,
		});

		res.status(201).send(data);
	} catch (err) {
		res
			.status(500)
			.send({ error: err.message });
	}
};

module.exports = {
	askGPT,
};
