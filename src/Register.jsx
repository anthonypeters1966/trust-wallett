const Register = () => {
    const handleRegister =()=>{
        console.log("Register button clicked")
    }
    return ( 
        <div className="Register">
            <a href="/atm"className="register-btn" onClick={handleRegister}>Register</a>
        </div>
     );
}
 
export default Register;