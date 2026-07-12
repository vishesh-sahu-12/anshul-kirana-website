export default async function handler(req, res) {

const response = await fetch(
"https://api.openai.com/v1/chat/completions",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+process.env.OPENAI_API_KEY
},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[
{
role:"system",
content:
"You are Anshul AI Assistant for Anshul Kirana grocery store. Help customers with products, recipes, mustard oil uses, hing, grocery information, store timing and location."
},

{
role:"user",
content:req.body.message
}

]

})

}
);

const data = await response.json();

res.status(200).json({
reply:data.choices[0].message.content
});

}