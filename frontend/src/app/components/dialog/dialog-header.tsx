export default function DialogHeader({ title }: { title: string }) {
    return (
        <div className='border-b border-slate-300 text-center pb mb'>
            <h2>{title}</h2>
        </div>
    )
}
