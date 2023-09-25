import { pipeline } from "@xenova/transformers"

import { transcriptionExample } from "./utils/transcription.js"

export async function transcribe(audio) {
  //return transcriptionExample

  try {
    console.log("Realizaando a Transcrição...")
    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )

    const transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_: 5,
      language: "portuguese",
      task: "transcribe",
    })
    console.log("Transcrição finalizada.")
    return transcription?.text.replace("[Música]", "")
  } catch (error) {
    throw new Error(error)
  }
}
