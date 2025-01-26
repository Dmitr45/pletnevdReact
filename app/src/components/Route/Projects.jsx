
import { useEffect, useMemo, useState } from 'react';
import projectsArr from '../../context/projects.json';
import styles from './styles.module.css';


export default function Projects(){
const [list, setList] = useState("");


useEffect (()=>{
    setList(
            <div className={styles.ProjectsPage_list}>        
                {projectsArr.projects.map((project) => { return(
                            <div className={styles.ProjectsPage_list_item}>
                                <div className={styles.ProjectsPage_title}>
                                    <a href={project.url} target='blank'> {project.name} </a>
                                </div>
                                <div className={styles.ProjectsPage_flex} >
                                    <div className={styles.ProjectsPage_promo} ><a href={project.url} target='blank'> <div className={styles.ProjectsPage_img} style={{backgroundImage: `url(${project.img})`}}></div></a></div>
                                    <div className={styles.ProjectsPage_text} >{project.text}   
                                    <div className={styles.ProjectsPage_gitFigma}>
                                        {project.github ? <a href={project.github} target='blank'><img src={process.env.PUBLIC_URL + "img/github.png"} alt="github"/></a> : null}
                                        {project.figma ?<a href={project.figma} target='blank'><img src={process.env.PUBLIC_URL + "img/figma.png"} alt="figma"/></a> : null}
                                    </div> 
                                    <div>Stack of technologies: {project.stack}</div> 
                                    </div>
                                </div>
                        </div>
                    )
                })}
            </div>    
    )

}, []);


return(
<div className={styles.ProjectsPage}>
    <div className={styles.pageContainer}>
        {list}
    </div>
</div>
)}