import ProjectInfo from './ProjectInfo'
import ProjectTasks from './ProjectTasks'

export default function Project({tasks, ...props}) {
    return (
        <article className='ml-4 mt-16 pr-32 grid grid-cols-1 divide-y container'>
            <ProjectInfo 
                {...props}
            />
            <ProjectTasks 
                tasks={tasks}
            />
        </article>
    );
}