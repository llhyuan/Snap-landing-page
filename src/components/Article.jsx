import mainImageDesktop from '../assets/images/image-hero-desktop.png'
import mainImageMobile from '../assets/images/image-hero-mobile.png'
import client1 from '../assets/images/client-meet.svg'
import client2 from '../assets/images/client-maker.svg'
import client3 from '../assets/images/client-databiz.svg'
import client4 from '../assets/images/client-audiophile.svg'

import '../scss/_Article.scss'

function Article() {
  return (
    <article className='main-container'>
      <picture>
        <source srcSet={mainImageMobile} media='(max-width: 750px)'/>
        <img src={mainImageDesktop} alt='Article image' />
      </picture>
      <section className='article-content'>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a href='#' className='button'>
          Learn more
        </a>
        <div className='clients'>
          <img src={client1} alt='client logo1' />
          <img src={client2} alt='client logo2' />
          <img src={client3} alt='client logo3' />
          <img src={client4} alt='client logo4' />
        </div>
      </section>
    </article>
  )
}

export default Article
