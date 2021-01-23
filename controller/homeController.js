require("dotenv").config()
const axios = require('axios')
const getNews = async (req, res, next) => { 
let newsdata = []
    await axios.get(process.env.REACT_APP_API_URL)
    .then(res => {
    
        newsdata = res.data.articles
        res.json({ news : newsdata })
        
    })
    .catch(err => {
        console.error(err); 
    })
    
    res.json({message: newsdata});
}

exports.getNews =  getNews;