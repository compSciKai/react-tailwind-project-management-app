export default function ProjectInfo({taskName, date, description, content}) {
    return (
        <div className="flex">
            <div className="mb-4">
                <h1 className='mb-1 pt-1 font-bold text-2xl'>{taskName}</h1>
                <p className='mb-3 font-thin text-slate-600'>{date}</p>
                <p className="mb-6">{description}</p>
                <p>{content}</p>                
            </div>
            <div className="flex-grow flex items-start justify-end">
                <button className="pt-1 text-sm">Delete</button>
            </div>
        </div>
    );
}