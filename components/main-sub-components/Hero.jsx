import Image from 'next/image';
import profilePic from '@/assets/Placeholder.png';
const Hero = () => {
  return (
    <>
      <Image src={profilePic} width={200} height={200} alt="profile pic" />
      <p>tag line here</p>
    </>
  );
};

export default Hero;
