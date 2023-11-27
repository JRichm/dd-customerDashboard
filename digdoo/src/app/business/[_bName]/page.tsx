import { FC } from 'react'

interface pageProps {
    params: { _bName: string }
    searchParams: any
}

export default function BusinessLanding({ params, searchParams }: pageProps) {
    console.log(searchParams)
    return (
        <div className='flex flex-col pt-12 p-6'>
            <h1 className='text-xl m-2'>Welcome {params._bName}!</h1>
            <hr />
            <a href={`/business/${params._bName}/ticket`}>New Ticket</a>
            <a href={`/business/${params._bName}/status`}>View Active Tickets</a>
        </div>
    )
}