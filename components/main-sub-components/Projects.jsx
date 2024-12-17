import { portfolioList } from '@/data/portfolioList.js';
import placeHolder from '@/assets/Placeholder.png'
import Image from 'next/image';

const Projects = () => {
  console.log(placeHolder);
  return (
    <>
      <h2>Projects</h2>
      <ul className='portfolioList'>
        {portfolioList.map((e, i) => (
          <a href= {e.url}>
          <li className="portfolioItem" key={i}>
            <h3>{e.name}</h3>
            <Image src={e.projectImage || placeHolder} width={200} height={200} alt={e.name} />
            <p>{e.description}</p>
          </li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Projects;
