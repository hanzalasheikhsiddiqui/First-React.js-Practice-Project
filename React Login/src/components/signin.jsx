import { useState } from "react";

function Signin() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        // Pehle sab fields check karo
        if (Email === "" || Password === "") {
            setMessage("Please fill in all fields");
            return;
        }
        
        // localStorage se stored data lao
        const storedEmail = JSON.parse(localStorage.getItem("Email"));
        const storedPassword = JSON.parse(localStorage.getItem("Password"));
        
        // Check karo ke user signup kiya hai ya nahi
        if (!storedEmail || !storedPassword) {
            setMessage("No user found. Please sign up first.");
            return;
        }
        
        // Email aur password match karo
        if (Email === storedEmail && Password === storedPassword) {
            setMessage("Login Successful!");
            // Form reset karo (optional)
            setEmail("");
            setPassword("");
        } else {
            setMessage("Invalid email or password");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="bg-black bg-opacity-80 p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-500">
                <h2 className="text-4xl font-extrabold text-center mb-8 text-purple-300 animate-pulse">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-purple-200 mb-2">Email Address:</label>
                        <input 
                            className="w-full border-2 border-purple-600 bg-gray-800 text-white rounded-lg p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-400 placeholder-gray-400 transition-all duration-300" 
                            type="email" 
                            value={Email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-purple-200 mb-2">Secret Password:</label>
                        <input 
                            className="w-full border-2 border-purple-600 bg-gray-800 text-white rounded-lg p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-400 placeholder-gray-400 transition-all duration-300" 
                            type="password" 
                            value={Password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your password"
                        />
                    </div>
                    <button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed font-bold text-lg shadow-lg" 
                        type="submit" 
                        disabled={!Email || !Password}
                    >
                        Access Account
                    </button>
                    <p className={`text-center mt-6 text-lg font-medium ${Message === "Login Successful!" ? "text-green-400" : "text-red-400"} animate-bounce`}>
                        {Message}
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signin;
