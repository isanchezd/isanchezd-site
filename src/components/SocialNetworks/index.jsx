import { SocialNetwork } from "./SocialNetwork";

export function SocialNetworks({ profiles }) {
  return (
    <>{ profiles.map((profile, index) => <SocialNetwork key={index} social={profile} /> ) }</>
  )
}
