const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    
    const moreFortunes = ["congratulations! you are pregnant", "don't look too close but also don't look too far", "hakuna matata", "your mom"]
    
    };
fortuneBtn.addEventListener('click', getFortune)

const dateIdeaBtn = document.getElementById("dateIdeaButton")
const getDateIdea = () => {
    axios.get("http://localhost:4000/api/dateIdea/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
dateIdeaBtn.addEventListener('click', getDateIdea)

const snackIdeaBtn = document.getElementById("snackIdeaButton")
const getSnackIdea = () => {
    axios.get("http://localhost:4000/api/snackIdea/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
snackIdeaBtn.addEventListener('click', getSnackIdea)

const religiousIdeaBtn = document.getElementById("religiousIdeaButton")
const getReligiousIdea = () => {
    axios.get("http://localhost:4000/api/religiousIdea/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
religiousIdeaBtn.addEventListener('click', getReligiousIdea)