// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imageUrl} = destinationsList

  return (
    <li className="list-container">
      <img src={imageUrl} alt="destinationsList" className="images" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
