const { axios } = require("axios")
const { Configuration, OpenAIApi } = require("openai");
const express=require("express")
require("dotenv").config()


const genquote=express.Router()




genquote.get('/quote', async (req, res) => {
    try {
        let {prompt}=req.query
        const openAi = new OpenAIApi(
            new Configuration({
              apiKey: process.env.apikey,
            })
        );
        
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                  "role": "user",
                  "content": `quote for ${prompt}`
                }
                
              ],
            max_tokens: 1000,
            temperature: 1,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
         
        const reply = response.data.choices[0].message.content.trim()
        res.send({"quote":reply})
    } catch (error) {
      console.error('Error fetching quote:', error.message);
      res.status(500).json({ error: 'Failed to fetch quote.' });
    }
});

  






module.exports={
    genquote
}