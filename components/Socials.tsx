
import Link from "next/link";
import { FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  
]

  type SocialProps = {
    containerStyles?: string;
    iconStyles?: string;
  };
  
  const Social = ({ containerStyles, iconStyles }: SocialProps) => {
    return <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>;
  }
    export default Social;