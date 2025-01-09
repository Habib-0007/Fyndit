import { Request, Response } from "express";
import { gpt } from "gpti";

interface AskGPTRequestBody {
	history: { 
		role: "user" | "assistant" | undefined; 
		content: string 
	}[];
	prompt: string;
}

const askGPT = async (req: Request<{}, {}, AskGPTRequestBody>, res: Response): Promise<void> => {
	res.set("Access-Control-Allow-Origin", "*");

	const { history, prompt } = req.body;

	try {
		const data = await gpt.v3({
			messages: history,
			markdown: false,
			stream: false,
		});

		res.status(201).send(data);
	} catch (err) {
		res.status(500).send({ error: (err as Error).message });
	}
};

export { askGPT };
