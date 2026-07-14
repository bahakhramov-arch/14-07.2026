"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function Login () {
    const [email,setEmail] = useState("")
    const [passwrord,setPassword] = useState("")
    const [error,setError] = useState("")
    const router = useRouter()


    async function handleLogin(e) {
        e.preventDefault()

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({email, password}),
        });

        const data = await res.json();

        if(res.ok) {
            router.push("/dashboard");
            router.refresh();
        }else {
            setError(data.message)
        }


    }
}
 return (
    <form onSubmit={handleLogin}>
        <h1>Вход в систему</h1>

        <input type="email
        plac">
        </input>
    </form>
 )