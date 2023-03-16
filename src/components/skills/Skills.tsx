import { SkillsProps } from "./skills.types";

function Skills(props: SkillsProps) {
    const { skills } = props;
    return (
        <>
        <ul>
            {skills.map((skill)=>{
                return <li key={skill}>{skill}</li>
            })}
        </ul>
        </>)
}

export default Skills