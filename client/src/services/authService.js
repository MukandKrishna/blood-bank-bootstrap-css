import store from '../redux/store'
import { userLogin } from '../redux/features/auth/authActions';

export const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    
    try{
        if (!role || !email || !password) {
            return alert("Please Privde All Feilds");
        }
        // console.log("login", e, email, password, role);
        store.dispatch(userLogin({ role, email, password }));
    }
    catch(err){
        console.log(err);
    }
};

export const handleRegister = ( 
    e,
    email,
    password,
    role,
    name,
    organisationName,
    hospitalName,
    nukh,
    bloodgroup,
    akaah) => {
        e.preventDefault();
        try{
            if (!role || !email || !password) {
                return alert("Please Privde All Feilds");
            }
            console.log("Register =>", 
            e,
            email,
            password,
            role,
            name,
            organisationName,
            hospitalName,
            nukh,
            bloodgroup,
            akaah);
        }
        catch(err){
            console.log(err);
        }
    };
