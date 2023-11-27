"use client"

import React, { useState } from 'react'
import BusinessNav from "../../_bComponents/_bNav";

export default function TicketPage() {

    const [selectedPriority, setPriority] = useState('')

    interface PriorityButtonType {
        color: string;
        text: string;
    }

    const PriorityButton = ({color, text}: PriorityButtonType) => {
        return (
            <button onClick={e => setPriority(text)} className={`px-5 py-2 mx-4 my-2 rounded-full ${selectedPriority == text ? `bg-${color}-500` : `border-solid border-2 border-${color}-400`}`}>{text}</button>
        )
    }

    const NewTicketForm = () => {
        return (
            <form className="m-10 w-full">
                <h1 className="text-xl font-bold">Basic Information</h1>
                <p>Business owners name and contact details</p>
                <p>type of request, new feature, content update, technical issue</p>
                <hr className="my-5"/>
                <h1 className="text-xl font-bold">Description</h1>
                <p>Detailed information about the request or problem</p>
                <input type='textbox border-black border-solid'></input>
                <p>any relevant URL's or pages affected</p>
                <hr className="my-5"/>
                <h1 className="text-xl font-bold">Urgency Level</h1>
                <p>High, Medium, low priority selection</p>
                <div>
                    <PriorityButton color={'yellow'} text={'low'} />
                    <PriorityButton color={'orange'} text={'medium'} />
                    <PriorityButton color={'red'} text={'high'} />
                </div>
                <hr className="my-5"/>
                <h1 className="text-xl font-bold">Attachements</h1>
                <p>option to attach files, screenshots, or examples related to the ticket</p>
                <hr className="my-5"/>
                <h1 className="text-xl font-bold">Communication Preferences</h1>
                <p>How the business owner prefers to be contacted regarding the ticket...  email, phone, etc</p>
            </form>
        )
    }

    return (
        <main className="flex flex-row">
            <BusinessNav />
            <NewTicketForm />
        </main>
    )
}