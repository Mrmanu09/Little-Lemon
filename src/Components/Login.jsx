import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Email:", email);
    console.log("Password", password);
    
    if (email === "ramadevi@manu.com" && password === "1234") {
      alert("Login Successful!")
    }
    else {
      alert("Invalid Credentials")
    }
  };

  return (
     <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required />

        <label htmlFor="password">Password</label>
        <input type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
        <div> 

        <button type="submit">login</button>
        </div>
      </form>
     </div>
  );
}

export default Login;