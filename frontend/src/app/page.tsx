import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        console.log('Run')
    }, [])
    // return <Schedule />
    return redirect('/schedule')
}
