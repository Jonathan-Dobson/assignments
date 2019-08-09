import React from 'react'
import ColoredInfoBox from './ColoredInfoBox/'


function App() {
  const title = "Hello World"
  const subtitle = "How are you?"
  const info = "lorem  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem culpa obcaecati veniam. Doloremque iure vitae nostrum nihil repellendus ad magnam, eum id? Inventore aliquam, quae nesciunt rLorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quia architecto debitis repellat ut eius mollitia perferendis, voluptas nobis doloremque sunt ipsa. Necessitatibus itaque, illum ea earum dolor sed rerum?atione quasi accusantium ex!"
  return (
    <div>
      <ColoredInfoBox title={title} subtitle={subtitle} info={info}/>
      <ColoredInfoBox title={title} subtitle={subtitle} info="bar"/>
      <ColoredInfoBox title={title} subtitle={subtitle} info="foo"/>
      <ColoredInfoBox title={title} subtitle={subtitle} info="bla"/>
    </div>
  );
}

export default App;
