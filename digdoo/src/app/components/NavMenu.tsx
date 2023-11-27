"use client"
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react"

function AuthButton () {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name}<br />
                <button onClick={() => { console.log("Before signOut"); signOut(); console.log("After signOut"); }}>Sign Out</button>
            </>
        );
    }
    
    else {
        return (
            <>
                <p>Not Signed In</p> <br />
                <button onClick = {() => signIn()}>Sign In</button>
            </>
        )
    }
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton />
        </div>
    )
}