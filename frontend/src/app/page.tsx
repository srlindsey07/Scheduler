import { redirect } from 'next/navigation'

export default function Home() {
    // return <Schedule />
    return redirect('/schedule')
}
