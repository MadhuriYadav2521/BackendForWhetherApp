import axios from "axios";

export const getTemp = async(req,res) => {
    try{
        const { city } = req.body;
        if(!city) return res.send("City is required.")
        const keyForWhether = "68d69b0f1326ee49e78675fe8111897b";
        const response = await axios.post(
            `http://api.weatherstack.com/forecast?access_key=${keyForWhether}&query=${city}`
        );
        // res.send(response.data.current.temperature)
        let result = response.data.current.temperature;
        console.log(result);
        return res.send(result.toString());

    }catch(error){
        return res.send(error)
    }
}

export const getWindSpeed = async(req,res) => {
    try{
        const { city } = req.body;
        if(!city) return res.send("City is required.")
        const keyForWhether = "68d69b0f1326ee49e78675fe8111897b";
        const response = await axios.post(
            `http://api.weatherstack.com/forecast?access_key=${keyForWhether}&query=${city}`
        );
        let result = response.data.current.wind_speed;
        console.log(result);
        return res.send(result.toString());

    }catch(error){
        return res.send(error)
    }
}

export const getAstro = async(req,res) => {
    try{
        const { city } = req.body;
        if(!city) return res.send("City is required.")
        const keyForWhether = "68d69b0f1326ee49e78675fe8111897b";
        const response = await axios.post(
            `http://api.weatherstack.com/forecast?access_key=${keyForWhether}&query=${city}`
        );
        // res.send(response.data.forecast['2023-06-15'].astro)
        let result = response.data.forecast['2023-06-15'].astro;
        return res.send(result);

    }catch(error){
        return res.send(error)
    }
}