module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["to truly find yourself, you should play hide and seek alone", "no fortune can be found for you, seems unfortunate", "run", "no snowflake in an avalanche ever feels responsible", "enjoy yourself while you can", "they are never gonna give you up, never gonna let you down", "did you ever wonder?", "a persuasive voice may be awfully persuasive", "say hello to others. you will have a more greeting-filled day"]
        // choose random fortune
        let randomFortuneIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomFortuneIndex]

        res.status(200).send(randomFortune);
 },

    getDateIdea: (req, res) => {
        const dateIdeas = ["picnic at the park", "tennis and smoothies", "make a pillow fort and watch a movie", "make a meal together and eat it", "do a puzzle together", "day trip at a lake/reservoir", "night drive with music", "draw each other's portraits", "evening bike ride"]
    
        let randomDateIdeaIndex = Math.floor(Math.random()* dateIdeas.length)
        let randomDateIdea = dateIdeas[randomDateIdeaIndex]

        res.status(200).send(randomDateIdea);
    
    },

    getSnackIdea: (req, res) => {
        const snackIdeas = ["apples and cheese", "goldfish crackers", "trail mix", "celery and peanut butter", "string cheese and pretzels", "pickles", "orange slices"]
    
        let randomSnackIdeaIndex = Math.floor(Math.random()* snackIdeas.length)
        let randomSnackIdea = snackIdeas[randomSnackIdeaIndex]

        res.status(200).send(randomSnackIdea);
    
    },

    getReligiousIdea: (req, res) => {
        const religiousIdeas = ["Christianity", "Judaism", "Buddhism", "Shinto", "Islam", "Sikhism", "Confucianism", "Jainism", "Hinduism", "Taoism", "Baha'i", "Zoroastrianism", "You should not be religious"]
    
        let randomReligiousIdeaIndex = Math.floor(Math.random()* religiousIdeas.length)
        let randomReligiousIdea = religiousIdeas[randomReligiousIdeaIndex]

        res.status(200).send(randomReligiousIdea);
    
    },
}