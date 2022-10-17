import { ICONS } from "./icons";


export function SocialNetwork({ social }) {
  const network = social.network.toLowerCase();

  return (
    <div className='social-icon'>
      <a
        href={social.url}
        target='_blank'
        rel='noreferrer noopener'
        className={network}
        title={network}
      >
        {social.username}
        <SocialIcon network={network}/>
      </a>
    </div>
  );
}

function SocialIcon({network}) {
  return ICONS[network];
}
