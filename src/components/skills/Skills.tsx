import { useState } from "react";
import { SkillsProps } from "./Skills.types";

function Skills(props: SkillsProps) {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
        <ul>
            {skills.map((skill)=>{
                return <li key={skill}>{skill}</li>
            })}
        </ul>
        {isLoggedIn ? 
        (<button>Start Learning</button>)
        : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </>)
}

export default Skills