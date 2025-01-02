const { Hercai } = require('hercai');

const herc = new Hercai(); //new Hercai("your api key"); => Optional

/* Available Models */
/* "v3" , "v3-32k" , "turbo" , "turbo-16k" , "gemini" , "llama3-70b" , "llama3-8b" , "mixtral-8x7b" , "gemma-7b" , "gemma2-9b" */
/* Default Model; "v3" */
/* Premium Parameter; personality => Optional */
herc.question({model:"v3",content:"hi, how are you?"}).then(response => {
console.log(response.reply);
/* The module will reply based on the message! */

});