import Users from "../modals/userModel.js";
import encrypt from "encryptjs";


export const checksForRegister = async (req, res, next) => { 
    try {
        const { name, email, password} = req.body;
        if (!name) return res.send("Name is required! in middleware");
        if (!email) return res.send("email is requierd! in middleware");
        if (!password) return res.send("password is requierd! in middleware");
       
        if (password.length <= 8) {
            return res.send("User Password length is less than 8 !")
        }
        const response = await Users.find({ email: email }).exec();
        console.log(response, "response")
        if (response.length) {
            return res.send("Email is already Taken or You are already resgistered!!");
        }
        next();

    } catch (error) {
        return res.send(error)
    }
}


export const isUserValid = async (req, res, next) => {
    try {
        const { id, password } = req.body;
        if (!password) return res.send("password is required in middleware");
        if (!id) return res.send("id is required in middleware");
        var secretkey = 'ios';
        const response = await Users.find({ _id : id }).exec();
        console.log(response, "response here");
        var decipherpassword = encrypt.decrypt(response[0].password, secretkey, 256);
        console.log("Deciphered password is : " + decipherpassword);
        if(response.length){
            if (decipherpassword === password) {  // const pin
                    next();
            } else {
                return res.send("Wrong password in middleware");
            }
        }else{
            return res.send("User id not found.")
        }
    
        // next();
    } catch (error) {
        res.send(error)
    }
}

