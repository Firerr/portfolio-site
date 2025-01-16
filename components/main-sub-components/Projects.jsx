import { portfolioList } from '@/data/portfolioList.js';
import placeHolder from '@/assets/Placeholder.png';
import Image from 'next/image';
import SkillIcon from './SkillIcon';

const Projects = () => {
  console.log(placeHolder);
  return (
    <>
      <h2>Projects</h2>
      <ul className="portfolioList">
        {portfolioList.map((e, i) => (
          <a href={e.url} key={i}>
            <li className="portfolioItem">
              <h3>{e.name}</h3>
              <Image
                src={e.projectImage || placeHolder}
                width={285}
                height={225}
                alt={e.name}
              />
              <p>{e.description}</p>
              <div className="skillList">
                {e.skills.map((skill) => (
                  <SkillIcon skill={skill} />
                ))}
              </div>
            </li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Projects;
