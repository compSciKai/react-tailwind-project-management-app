import Project from "./Project";

export default function LearningReact() {
    return (
        <Project
            taskName={"Learning React"}
            date={"Dec 29, 2024"}
            description={"Learn React from the ground up."}
            content={"Start with the basics, finish with advanced knowledge."}
            tasks={["Learn advanced concepts", "Learn the basics", "another"]}
        />
    );
}