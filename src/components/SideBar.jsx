import { useState } from 'react'
import NavItem from '../components/NavItem'

export default function SideBar({selected, onSelected}) {

    return <section id="sidebar" className="absolute inset-y-0 left-0 w-64 bg-gray-950 rounded-tr-md mt-6 text-white">
        <div id="content" className="pl-6 pt-12">
            <h1 className="font-bold mb-6">YOUR PROJECTS</h1>
            <button className="btn">+ Add Project</button>
            <NavItem 
                title="Learning React"
                id="LearningReact"
                isSelected={selected === 'LearningReact' ? true : false}
                onSelected={onSelected}
            />
        </div>
    </section>
}