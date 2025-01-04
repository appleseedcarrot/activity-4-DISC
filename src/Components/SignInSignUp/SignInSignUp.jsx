import { useState } from "react";


export default function SignInSignUp() {
    // our variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // function to register or login
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Determine which button was clicked
        const action = e.nativeEvent.submitter.value;
    
        // Choose the correct endpoint based on the action
        const endpoint = action === "signin" ? "/auth/signin" : "/auth/signup";
        console.log(action);
    
        const response = await fetch("http://localhost:3005" + endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
    
        if (data.error) {
          alert(data.error);
        } else {
          alert(action === "signin" ? "Sign In Successful!" : "Sign Up Successful! Check email to verify");
          if (data.session) {
            localStorage.setItem("authToken", data.session.access_token);
            console.log("Stored Token:", localStorage.getItem("authToken"));
          }
        }
    }
    return (
        <div>
            <h1> Sign In / Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div> 
                    <label> Email </label>
                    <input type="email" value={email} onChange={(text) => setEmail(text.target.value)}/>
                </div>
                <div> 
                    <label> Password </label>
                    <input type="password" value={password} onChange={(text) => setPassword(text.target.value)}/>
                </div>
                <div> 
                    <button type="submit" name="action" value="signup"> Register </button> 
                    <button type="submit" name="action" value="signin"> Login </button>
                </div>
            </form>
        </div>
    );
}