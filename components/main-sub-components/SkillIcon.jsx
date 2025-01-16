import Image from 'next/image';
import jsImage from '@/assets/skills/js.png';
import mongoImage from '@/assets/skills/mongodb.png';
import mysqlImage from '@/assets/skills/mysql.png';
import nodejsImage from '@/assets/skills/nodejs.png';
import postImage from '@/assets/skills/postgres.png';
import reactImage from '@/assets/skills/react.png ';
import reduxImage from '@/assets/skills/redux.png';
import placeHolder from '@/assets/Placeholder.png';

const SkillIcon = ({ skill }) => {
  const getSkill = () => {
    switch (skill) {
      case 'JavaScript':
        return jsImage;
        break;
      case 'MongoDB':
        return mongoImage;
        break;
      case 'MySQL':
        return mysqlImage;
        break;
      case 'NodeJS':
        return nodejsImage;
        break;
      //repeat for each skill
      default:
        return placeHolder;
    }
  };
  return (
    <>
      <div>
        <Image src={getSkill()} width={40} height={40} alt={skill} />
        <p>{skill}</p>
      </div>
    </>
  );
};
export default SkillIcon;
