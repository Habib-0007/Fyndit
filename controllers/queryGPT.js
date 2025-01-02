// const { gpt } = require("gpti");
//
// const askGPT = (req, res) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   const { history, prompt } = req.body;
//   try {
//     gpt.v1(
//       {
//         messages: history,
//         prompt: prompt,
//         model: "GPT-4",
//         markdown: false,
//       },
//       (err, data) => {
//         if (err != null) {
//           res.status(404).send(err);
//         } else {
//           res.status(201).send(data);
//         }
//       }
//     );
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// };
//
// module.exports = {
//   askGPT,
// };

const { Hercai } = require("hercai");

const askGPT = (req, res) => {
	 res.set("Access-Control-Allow-Origin", "*");
  const { history, prompt } = req.body;
	try {
		const herc = new Hercai();
		herc
			.question({
				model: "v3",
				content: "hi, how are you?",
			})
			.then(response => {
				res.status(201).send(response.reply);
			});
	} catch (err) {
		res
			.status(500)
			.send({ error: err.message });
	}
};

module.exports = {
	askGPT,
};
