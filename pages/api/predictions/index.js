import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
    );
  }

  const prediction = await replicate.predictions.create({
    version: "3ff22700b10e9c888e72235131e10c0a8427cd79e750bc42e4c035be2121796b",
    input: {
      file: "https://replicate.delivery/pbxt/KU4hMOFLLcw9Rn08OeiFZV9dU05ul20oG77exveLB3t2xqmn/vendedoratelefonica.mp3",
      prompt: "",
      file_url: "",
      num_speakers: 3,
      group_segments: true,
      offset_seconds: 0,
      transcript_output_format: "segments_only"
    }
  })

  console.log('RUNNING POST :>> ', prediction?.input);
  console.log('AI REQUEST ID :>> ', prediction?.id);

  // if (prediction?.error) {
  //   res.statusCode = 500;
  //   res.end(JSON.stringify({ detail: prediction.error }));
  //   return;
  // }

  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
