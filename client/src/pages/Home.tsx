import { Link } from 'react-router-dom'
import introImage from '../images/intro-image.png'
const Home = () => {
  return (
    <main className='home wrapper min-height'>
      <div className='home__left'>
        <h1 className='home__h1'>A picture is worth a thousands words</h1>
        <h2 className='home__h2'>So store them and take a breath</h2>
        <Link to='/dashboard' className='home__button'>Upload Image</Link>
      </div>
      <div className='home__right'>
        <img src={introImage} alt='Upload image' />
      </div>
    </main>
  )
}

export default Home
