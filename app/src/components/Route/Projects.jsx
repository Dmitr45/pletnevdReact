
import projectsArr from '../../context/projects.json';
import styles from './styles.module.css';


export default function Projects(){




return(
<div className={styles.ProjectsPage}>
    <div className={styles.ProjectsPage_list}>


        <div className={styles.ProjectsPage_list_item}>
            <div className={styles.ProjectsPage_title}>{projectsArr[0].name}</div>
            <div className={styles.ProjectsPage_flex} >
                <div className={styles.ProjectsPage_promo} ><a href={projectsArr[0].url} target='blank'> <div className={styles.ProjectsPage_img} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/Projects/${projectsArr[0].img})`}}></div></a></div>
                <div>{projectsArr[0].text}</div>
                <div><a href={projectsArr[0].github} target='blank'><img src={process.env.PUBLIC_URL + "img/github.png"} alt="github"/></a></div> 
            </div>
        </div>



     </div>
    </div>
)}