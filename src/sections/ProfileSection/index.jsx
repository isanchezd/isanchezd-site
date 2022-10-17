import { SocialNetworks } from '../../components/SocialNetworks'

export function ProfileSection({
  fullName,
  profile,
  location,
  phone,
  email,
  profiles,
}) {
  return (
    <section className='profile section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-two-fifths'>
            <h1 className='title is-size-1'>{ fullName }</h1>
            <p className='subtitle'>{ profile }</p>
          </div>
          <div className='column is-2'>
            <figure className='image image is-135x135'>
              <img
                alt='Profile photo'
                className='is-rounded'
                src='profile.webp'
                style={{ height: '8rem'}}
              />
            </figure>
          </div>
          <div className='column has-text-grey-light has-text-right-in-desktop'>
            <p className='has-text-weight-light'>{ location }</p>
            <p className='has-text-weight-light'>{ phone }</p>
            <p className='has-text-weight-light'>{ email }</p>

            <SocialNetworks profiles={profiles}></SocialNetworks>
          </div>
        </div>
      </div>
    </section>
  )
}
