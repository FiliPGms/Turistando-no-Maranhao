import { useState } from "react";
export function Cadastro() {

    const  [email,setEmail] = useState("")
    const  [nome,setNome] = useState("")
    const  [password,setPassword] = useState("")
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold text-center">Cadastro</h1>
                <form onSubmit={handleCadastro}>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );

    async function handleCadastro(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/Cadastro", {
            method : "POST",
            headers: {"content-type": "application/json"},
            body : JSON.stringify({
                email,
                nome,
                password
            })
        })

        if(response.ok){
            const data = await response.json();
            console.log(data);
            alert("Cadastro realizado com sucesso!");
        }else{
            const data = await response.json();
            console.log(data);
        }
    }
}