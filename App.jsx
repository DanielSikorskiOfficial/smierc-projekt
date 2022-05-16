import { useRef } from "react";

import theme from "./theme.jpg";
import books from "./books2.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={9} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${theme})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(1)}
        />

        <ParallaxLayer
          offset={0.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(1)}
        >
          <h1>Motyw Śmierci</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(2)}
        />

        <ParallaxLayer
          offset={1.0}
          speed={0.4}
          factor={0.8}
          onClick={() => ref.current.scrollTo(2)}
        >
          <h2>Powtórka z utworów</h2>
          <p>"Rozmowa mistrza Polikarpa ze śmiercią"</p>
          <p>"Pieśń o Rolandzie"</p>
          <p>"Dzieje Tristana i Izoldy"</p>
          <p>"Legenda o świętym Aleksym"</p>
          <p>"Skarga umierającego"</p>
          <p>"Lament świętokrzyski"</p>
          <p>"Boska Komedia"</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(3)}
        />

        <ParallaxLayer
          offset={3}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(4)}
        />

        <ParallaxLayer
          offset={4}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(5)}
        />

        <ParallaxLayer
          offset={5}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(6)}
        />

        <ParallaxLayer
          offset={6}
          factor={1}
          speed={0.2}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(7)}
        />

        <ParallaxLayer
          offset={7}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(8)}
        />
      </Parallax>
    </div>
  );
}

export default App;
