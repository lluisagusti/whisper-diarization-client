import React, { useEffect, useState } from "react";
import { Container, Input, Card, Icon } from "semantic-ui-react";


const SemanticUICard = ({ conversation }) => {
  const [query, setQuery] = useState("")
  const [numSpeakers, setNumSpeakers]= useState(null)
  const [language, setLanguage]= useState("")
  const [allSegments, setAllSegments]= useState([])



  useEffect(() => {
    console.log('conversation @ effect :>> ', conversation)
    const { num_speakers, segments, language} = conversation
    setNumSpeakers(num_speakers)
    setLanguage(language)
    setAllSegments(segments)
  }, [conversation])

  const separateBySpeakers = () => {
    // fer un estat per cada speaker
    // tot el text anira a una carta diferent
  }

  // Stastiscs component
  // contar quantes vegades es


  // per explicar les funcions fes un Grid!       ! ! ! !! ! ! ! !! 

  // funcions:
  // emmagatzematge sine die barat
  // search --> colorin 
  // chat 
  // alarmes paraules clau (Statistic)
  /// contador paraules clau (Statistic) --> colorines
  // 
  // afegir text de: millorar vendes, millorar, productivitat,...
  // el primer pas cap a l'automatitzacio total
  // 
  // objectiu final:
  // entrenar un LLM propi de tracte exquisit amb l'experienciad e totes les trucades de tots els agents


  // IMPORTANT    IMPORTANT    ! ! ! !
  // https://react.semantic-ui.com/collections/message/
  // https://react.semantic-ui.com/collections/grid/
  //
  //
  // Posar un message a un Grid i fer el map al grid amb 2/3/4 columnes
  // les columnes es posen automatiques segons el numero de persones
  //
  // 
  // OPCIÓ 2:
  // Fer servir uns comments o un feed (tenen el reply que es pot fer servir per afegir notes amb més precisió i generar més data de qualitat)
  // https://react.semantic-ui.com/views/feed/
  // https://react.semantic-ui.com/views/comment/
  //
  //
  // AFEGIR KPI's
  // Fàcil. Son estadistiques!!!
  // https://react.semantic-ui.com/views/statistic/
  //
  //
  //  AFEGIR --> Flowing (busca excusa, fa wow!)
  //
  //  afegir header de tota la vida amb el logo a l'esquerra i un toggle a l'esquerra
  //  la part de les avantatges finals apareix amb el toggle
  //  
  //
  //  UPLOAD BUTTON -->cloud upload
  //  (Labeled Icon) BUTTON AMB ICONO DE "+"" O UPLOAD <Button size='large'>Large</Button>
  // 
  // <Button icon labelPosition='left'>
  //     <Icon name='pause' />
  //     Pause
  //   </Button>
  //   <Button icon labelPosition='right'>
  //     Next
  //     <Icon name='cloud upload' />
  //   </Button>
  //
  //
  //
  //
  // LOADING --->
  // https://react.semantic-ui.com/modules/progress/ 
  //
  //
  // SEARCH
  // https://react.semantic-ui.com/modules/search/#types-standard
  //
  //
  // TABS?
  // https://react.semantic-ui.com/modules/tab/
  //
  //
  // MODAL -->
  // https://react.semantic-ui.com/addons/confirm/
  //




  const data = [
    {
      image:
        "https://syn-charging-assets.s3-eu-west-1.amazonaws.com/helsinki_noise_level.jpg",
      header: "Noise Level",
      meta: "Free",
      description: "Noise level observed in several locations..",
      city: "Helsinki",
      extra: (
        <a>
          <Icon name="pin" />
          Helsinki
        </a>
      )
    },
    {
      image:
        "https://iot-data-marketplace.com/charging/media/assets/f08f04cb-035f-4c4a-aaf2-f79defbd44c0/DockingSta__DockingSta__bikehire-dub.jpg",
      header: "Docking Stations",
      meta: "Free",
      city: "Manchester",
      description:
        "Information about dublinbikes Cycle Share Scheme Stations provided by JCDecaux.",
      extra: (
        <a>
          <Icon name="pin" />
          Manchester
        </a>
      )
    },
    {
      image:
        "https://syn-charging-assets.s3-eu-west-1.amazonaws.com/santander_museums.jpg",
      header: "Museums",
      meta: "Free",
      description: "List of Museums (as PoIs) located in Santander.",
      city: "Santander",
      extra: (
        <a>
          <Icon name="pin" />
          Santander
        </a>
      )
    },
    {
      image:
        "https://syn-charging-assets.s3-eu-west-1.amazonaws.com/manchester_parking.jpg",
      header: "Parking Status",
      meta: "Free",
      description: "Current status of tracked parking spots in Manchester.",
      city: "Manchester",
      extra: (
        <a>
          <Icon name="pin" />
          Manchester
        </a>
      )
    },
    {
      image:
        "https://iot-data-marketplace.com/charging/media/assets/f08f04cb-035f-4c4a-aaf2-f79defbd44c0/NoiseAbili__noise_level_eindhoven.jpg",
      header: "NoiseAbility pilot",
      meta: "Free",
      description: "No description provided.",
      city: "Eindhoven",
      extra: (
        <a>
          <Icon name="pin" />
          Eindhoven
        </a>
      )
    }
  ];
  return (
    <Container style={{ margin: 20 }}>
      <div style={{ marginBottom: "1rem" }}>
        <Input
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search..."
        />
      </div>
      <Card.Group>
        {data
          .filter(item =>
            [item.header, item.description, item.city]
              .join(" ")
              .toLowerCase()
              .includes(query.toLowerCase())
          )
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <Card {...item} />
          ))}
      </Card.Group>
    </Container>
  );
};

export default SemanticUICard