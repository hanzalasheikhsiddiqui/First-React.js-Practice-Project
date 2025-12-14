import { useState } from 'react';

function Signup() {
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        // Pehle sab fields check karo
        if (Username === "" || Email === "" || Password === "") {
            setMessage("Please fill in all fields");
            return;
        }
        
        // Phir password length check
        if (Password.length < 6) {
            setMessage("Password must be at least 6 characters long");
            return;
        }
        
        // Agar sab theek, success aur localStorage mein save karo
        setMessage("Signup Successful!");
        
        // localStorage mein save karo
        localStorage.setItem("Username", JSON.stringify(Username));
        localStorage.setItem("Email", JSON.stringify(Email));
        localStorage.setItem("Password", JSON.stringify(Password));
        
        // Form reset karo (optional)
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="bg-black bg-opacity-80 p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-500">
                <h2 className="text-4xl font-extrabold text-center mb-8 text-purple-300 animate-pulse">Signup</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-purple-200 mb-2">Username:</label>
                        <input 
                            className="w-full border-2 border-purple-600 bg-gray-800 text-white rounded-lg p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-400 placeholder-gray-400 transition-all duration-300" 
                            type="text" 
                            value={Username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Enter your username"
                        />
                    </div>
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
                            placeholder="Enter your password (min 6 chars)"
                        />
                    </div>
                    <button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed font-bold text-lg shadow-lg" 
                        type="submit" 
                        disabled={!Username || !Email || !Password}
                    >
                        Create Account
                    </button>
                    <p className={`text-center mt-6 text-lg font-medium ${Message === "Signup Successful!" ? "text-green-400" : "text-red-400"} animate-bounce`}>
                        {Message}
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
