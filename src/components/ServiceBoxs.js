import '../style/MyServices.css';

function ServiceBoxs({title, image, desc}) {
  return (
    <div className="serviceBoxs">
      <div className="boxHeader">
        <img src={image} alt=""></img>
        <h2>{title}</h2>
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default ServiceBoxs;