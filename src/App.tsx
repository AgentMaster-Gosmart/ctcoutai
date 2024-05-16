import React from "react";
import Form from "./components/Form";

interface AppProps {
  prompt: string;
  textTuning: string;
  textEnd: string;
  textStart: string;
  textVoicemail: string;
  phoneForwarding: string;
  btnColor?: string;
}

function App({
  prompt,
  textTuning,
  textEnd,
  textStart,
  textVoicemail,
  phoneForwarding,
  btnColor,
}: AppProps) {
  console.log(
    prompt,
    textTuning,
    textEnd,
    textStart,
    textVoicemail,
    phoneForwarding,
    btnColor
  );

  return (
    <div className='flex fle-col justify-center p-4 w-[400px]'>
      <Form
        prompt={prompt}
        textTuning={textTuning}
        textEnd={textEnd}
        textStart={textStart}
        textVoicemail={textVoicemail}
        phoneForwarding={phoneForwarding}
        btnColor={btnColor}
      />
    </div>
  );
}

export default App;
