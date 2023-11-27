"use client"

import BusinessNav from "../_bComponents/_bNav";

export default function LoginPage() {

    const handleSubmit = () => {
        console.log('submitten login form')
    }

    return (
        <main className="flex justify-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col bg-gray-200 p-5 w-[500px] h-fit">
                <label>email</label>
                <input type="text" className="p-2 bg-white" style={{backgroundColor: "#ffffff"}}></input>
                <label>password</label>
                <input type="password" className="p-2"></input>
            </form>
        </main>
    )
}