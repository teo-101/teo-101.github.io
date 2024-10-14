import ServiceBoxs from "./ServiceBoxs";
import '../style/MyServices.css';

const boxData = [
  {
    'title': 'Static',
    'image': 'static.png',
    'desc': 'simple webpage like a protofolio, restaurant menu, art showcase, etc.'
  },
  {
    'title': 'Dynamic',
    'image': 'dynamic.png',
    'desc': 'users interact in real-time with the page'
  },
  {
    'title': 'Full Stack',
    'image': 'fullStack.png',
    'desc': 'website that stores userdata in a database'
  }
];

function MyServices() {
  return (
    <div id="services">
      <div className="center">
        <div id="servicesHeaderContainer">
          <h1 className="subtitles">services</h1>
          <p>The full varaity of web apps I am able to create just for you</p>
        </div>
      </div>
      
      <div className="center">
        <div id="boxContainer">
          {boxData.map((box, index) => (
            <ServiceBoxs key={index} title={box.title} image={box.image} desc={box.desc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyServices;