"use-client"

import { useEffect, useState } from "react"
import SemanticUICard from "../components/semantic_layout"
import { Button, Container, Header, Input, Segment } from "semantic-ui-react"

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: {
          file: "https://replicate.delivery/pbxt/KU4hMOFLLcw9Rn08OeiFZV9dU05ul20oG77exveLB3t2xqmn/vendedoratelefonica.mp3",
          prompt: "",
          file_url: "",
          num_speakers: 3,
          group_segments: true,
          offset_seconds: 0,
          transcript_output_format: "segments_only"
        }
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    console.log('prediction pre while :>> ', prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(7500);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
    }
  };

  useEffect(() => {
    console.log('prediction @ effect :>> ', prediction);
    console.log('error @ effect :>> ', error);
  }, [prediction, error])

  return (
    <>
    
    <Header as='h1' content='AI Call Center Project' style={style.h1} textAlign='center' />
    <Header as='h2' content='speech-to-text --> text-to-LLM --> farming data 😁' style={style.h2} textAlign='center' />
    {/* <Header as='h3' textAlign='center' style={style.h3} content='Container' /> */}

    <Container>
      <Segment.Group>
        <Segment><Input placeholder='Prompt...' /></Segment>
        <Segment><Button content='Click Here' onClick={handleSubmit} /></Segment>
      </Segment.Group>
    </Container>

    {error && <div>{error}</div>}

      {/* <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="ui input"
          name="prompt"
          placeholder=""
        />
        <div className="ui input" type="text"></div>
        <button className="ui button" type="submit">
          Go!
        </button>
      </form> */}

      {/* {prediction && (
        <>
          {prediction.output && (
            <div className="image-wrapper mt-5">
              
            </div>
          )}
          <p className="py-3 text-sm opacity-50">status: {prediction.status}</p>
        </>
      )} */}

      {prediction?.output?.segments && (<div>
        <SemanticUICard conversation={prediction?.output} />
      </div>)}
    </>
  );
}
