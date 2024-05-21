import { useState } from 'react';

export default function NavItem({isSelected, onSelected, title, id}) {
    let className = "text-sm font-thin mt-8 mr-6 p-1 hover:bg-zinc-800";
    if (isSelected) {
        className += " bg-zinc-900"
    }

    const handleClick = () => {
        onSelected(id);
    }

    return (
        <p className={className} id={id} onClick={handleClick}>{title}</p>
    );
}