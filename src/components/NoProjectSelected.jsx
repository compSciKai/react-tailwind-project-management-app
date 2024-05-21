import ClipboardImage from '../assets/no-projects.png'

export default function NoProjectSelected() {
    return (
        <article className='pt-28 flex flex-col items-center'>
            <img src={ClipboardImage} alt="Clipboard" className='w-12 h-12 mb-2' />
            <h1 className='mb-2 font-bold'>No Project Selected</h1>
            <p className='mb-6 font-thin text-slate-600'>Select a project or get started with a new one</p>
            <button className='btn'>Create new project</button>
        </article>
    );
}