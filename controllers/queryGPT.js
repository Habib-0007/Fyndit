const { gpt } = require("gpti");

const askGPT = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const { history, prompt } = req.body;
  try {
    gpt.v1(
      {
        messages: history,
        prompt: prompt,
        model: "GPT-4",
        markdown: true,
      },
      (err, data) => {
        if (err != null) {
          res.status(404).send(err);
        } else {
          res.status(201).send(data);
        }
      }
    );
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  askGPT,
};
