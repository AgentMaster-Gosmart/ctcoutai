export const callVapi = async (
  name: string,
  phone: string,
  setError: (error: string) => void,
  prompt: string,
  textStart: string,
  textEnd: string,
  textTuning: string,
  textVoicemail: string,
  forwardingPhoneNumber: string
) => {
  console.log(
    name,
    phone,
    prompt,
    textTuning,
    textEnd,
    textStart,
    textVoicemail,
    forwardingPhoneNumber
  );

  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer e3e1fbaa-23d3-438b-83ce-33a03043dac8",
      "Content-Type": "application/json",
    },

    body: {
      phoneNumberId: "625ea25b-6520-467b-841d-c9dee3b96326",
      maxDurationSeconds: 1800,
      assistant: {
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "es-419",
        },
        model: {
          provider: "openai",
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content: `${prompt} ${textTuning}`,
            },
          ],
        },
        voice: {
          provider: "11labs",
          voiceId: "2d7rEMnN7U2yC7k3Ie3g",
          model: "eleven_multilingual_v2",
          stability: 0.75,
          similarityBoost: 0.5,
        },
        forwardingPhoneNumber,
        voicemailMessage: textVoicemail,
        firstMessage: textStart,
        endCallMessage: textEnd,
        endCallFunctionEnabled: true,
        recordingEnabled: false,
      },

      customer: {
        number: phone,
      },
    },
  };

  fetch("https://api.vapi.ai/call/phone", {
    ...options,
    body: JSON.stringify(options.body),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => {
      console.error(err);
      setError("Error al realizar la llamada");
    });
};
