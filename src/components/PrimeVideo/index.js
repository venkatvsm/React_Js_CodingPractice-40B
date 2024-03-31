// Write your code here
import Movieslider from '../Movieslider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionmovieList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedymovieList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="cardContainer">
        <h1 className="heading">Action Movies</h1>
        <Movieslider moviesList={actionmovieList} />
        <h1 className="heading">Comedy Movies</h1>
        <Movieslider moviesList={comedymovieList} />
      </div>
    </div>
  )
}
export default PrimeVideo
