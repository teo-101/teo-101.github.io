import React from "react";
import '../style/Tools.css';

const toolsData = [
  {
    'alt': 'HTML',
    'src': 'html-5.png'
  },
  {
    'alt': 'CSS',
    'src': 'css-3.png'
  },
  {
    'alt': 'Javascrpit',
    'src': 'js.png'
  },
  {
    'alt': 'Figma',
    'src': 'figma.png'
  },
  {
    'alt': 'Node.js',
    'src': 'nodejs.svg'
  },
  {
    'alt': 'React',
    'src': 'react.png'
  }
];

function Tools() {
  return (
    <div id="Tools">
      <section id="toolImages">
        {toolsData.map((tool, index) => (
          <React.Fragment key={index}>
            <img key={index} index={index} src={tool.src} title={tool.alt} alt={tool.alt} className="tools"></img>
          </React.Fragment>
        ))}
      </section>

      <section id="toolText">
        <h2>tools</h2>
        <p>Technologies and frameworks I use to shape your app ideas into reality.</p>
      </section>
    </div>
  );
}

export default Tools;