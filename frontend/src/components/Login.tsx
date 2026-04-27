import { useState } from "react"
import { Link } from "react-router-dom"

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        // console.log("Login attempt:", { email, password })
        const response = await fetch("http://localhost:3000/Login", {
            method : "POST",
            headers: {"content-type": "application/json"},
            body : JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json();
        if(response.ok){
            console.log("Login successful, token received: ", data.token);
            const navigate = navigator.geolocation.getCurrentPosition((position) => {
                console.log("Latitude: ", position.coords.latitude);
                console.log("Longitude: ", position.coords.longitude);
            })
            alert("We are now getting your Location to suggest you the best spots!!");
        }else{
            console.log("Login failed", data.error);
        }
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 z-0 scale-105 animate-pulse-slow"
                style={{
                    backgroundImage: 'url("/maranhao-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)'
                }}
            />
            
            {/* Gradient Overlay for better contrast */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/40 via-transparent to-orange-900/40" />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md glass p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-slate-800 tracking-tight mb-2">
                        Bem-vindo
                    </h1>
                    <p className="text-slate-600 font-medium">
                        Explore as belezas do Maranhão
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/20 backdrop-blur-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-maranhao-blue/50 focus:border-transparent transition-all"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1 ml-1">
                            <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                                Senha
                            </label>
                            <a href="#" className="text-xs font-semibold text-maranhao-blue hover:text-blue-700 transition-colors">
                                Esqueceu a senha?
                            </a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/20 backdrop-blur-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-maranhao-blue/50 focus:border-transparent transition-all"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-maranhao-blue hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-900/20 transform transition-all active:scale-95 flex items-center justify-center space-x-2 overflow-hidden group"
                    >
                        <span className="relative z-10">Entrar na Aventura</span>
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" /> */}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-600">
                        Não tem uma conta?{" "}
                        <Link to="#" className="font-bold text-maranhao-blue hover:underline">
                            Criar Cadastro
                        </Link>
                    </p>
                </div>

                <div className="mt-10 flex items-center justify-center space-x-6">
                    <div className="h-[1px] w-full bg-slate-300/30" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">OU</span>
                    <div className="h-[1px] w-full bg-slate-300/30" />
                </div>

                <div className="mt-8 flex gap-4">
                    <button className="flex-1 py-3 px-4 glass hover:bg-white/40 rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 border border-white/60">
                         Google
                    </button>
                    <button className="flex-1 py-3 px-4 glass hover:bg-white/40 rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 border border-white/60">
                         Facebook
                    </button>
                </div>
            </div>

            {/* Micro-animations and effects */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.9; transform: scale(1.05); }
                    50% { opacity: 1; transform: scale(1.02); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 20s ease-in-out infinite;
                }
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}} />
        </div>
    )
}