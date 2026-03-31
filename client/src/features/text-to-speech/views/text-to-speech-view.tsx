"use client";

import { Textarea } from "@/components/ui/textarea";
import { TEXT_MAX_LENGTH } from "@/features/dashboard/data/constants";
import { useState } from "react";
import { TextInputPanel } from "../components/text-input-panel";
import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";
import { SettingsPanel } from "../components/setting-panel";
import { TextToSpeechForm,defaultTTSValues } from "../components/text-to-speech-form";



export function TextToSpeechView() {

    const [text,setText] = useState('');

    return (
        <TextToSpeechForm defaultValues={defaultTTSValues}>
        <div className="flex h-full min-h-0  flex-1 overflow-hidden ">
            <div className="flex  min-h-0 flex-1 flex-col">
                <TextInputPanel></TextInputPanel>
                <VoicePreviewPlaceholder></VoicePreviewPlaceholder>
            </div>
            <SettingsPanel></SettingsPanel>
        </div>
        </TextToSpeechForm>
    )
}