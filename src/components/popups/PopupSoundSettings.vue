<template>
    <div class='popup'>
            <div class='popup__bck' @click="emit('showSoundSetting', false)"/>
            <div class='popup__block'>
                <div class='popup__content'>
                    <div class="popup__exit" @click="emit('showSoundSetting', false)"/>
                    <div class='popup__title'>SOUND SYSTEM</div>
                    <div class="popup__sound">
                        <div class="popup__sound-label">
                            <div class="popup__sound-text">
                                Background Music
                            </div>
                            <div class="popup__sound-value">
                                <ToggleSelect 
                                    toggleValueOne='OFF'
                                    toggleValueTwo='ON'
                                    :toggleValueStatus="audioSettings.backgroundSound"
                                    @changeToggleValueStatus="audioSettings.backgroundSound = !audioSettings.backgroundSound"
                                />
                            </div>
                        </div> 
                        <div className="popup__sound-label">
                            <div className="popup__sound-text">
                                Game Effects
                            </div>
                            <div className="popup__sound-value"> 
                                <ToggleSelect 
                                    toggleValueOne='OFF'
                                    toggleValueTwo='ON'
                                    :toggleValueStatus="audioSettings.playSound"
                                    @changeToggleValueStatus="audioSettings.playSound = !audioSettings.playSound"
                                />
                            </div>
                        </div> 
                        <div className="popup__sound-label">
                            <div className="popup__sound-text">
                                Volume 
                            </div>
                            <div className="popup__sound-value">
                            <!-- <Slider
                                styles={{
                                    track: { backgroundColor: '#D9D9D9', height: 4, },
                                    active: {  background: 'linear-gradient(to right, #FEEB3C 80%, #FE843B 100%)',   height: 4, },
                                    thumb: {  width: 12,  height: 12, background: 'linear-gradient(to right, #FEEB3C 60%, #FE843B 100%)', },
                                    disabled: { opacity: 0.5 }
                                }}
                                axis="x"
                                x={audioSettings.soundVolume}
                                onChange={({ x }) => setAudioSettings({...audioSettings, soundVolume: x })}
                            /> -->
                            <Slider
                                class="slider"
                                :tooltips="false"
                                v-model="value" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>    
<script setup>
import ToggleSelect from "@/components/games/ToggleSellect.vue";
import { ref } from 'vue';

const emit = defineEmits(['showHotKeysSetting'])

const audioSettings = ref({
    backgroundSound: false,
    playSound: false
})

const value = ref(20)

// import {FC, useContext} from 'react'
// import { layourContext } from '../../hoc/Layout/Context';
// import Slider from 'react-input-slider';

// const PopupSoundSettings: FC = () => {
//     const {setToggleSoundSettings, audioSettings, setAudioSettings} = useContext(layourContext)

//     return(
        
//     )
// }

</script>
<style lang="scss" scoped>
    .slider{
        width: 100%;   
        --slider-bg: #D9D9D9;
        --slider-connect-bg: linear-gradient(to right, #FEEB3C 80%, #FE843B 100%);
        --slider-connect-bg-disabled: #9CA3AF;
        --slider-height: 4px;
        --slider-vertical-height: 300px;
        --slider-radius: 9999px;

        --slider-handle-bg: linear-gradient(to right, #FEEB3C 40%, #FE843B 100%);
        --slider-handle-border: 0;
        --slider-handle-width: 13px;
        --slider-handle-height: 13px;
        --slider-handle-radius: 9999px;
        --slider-handle-shadow: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);
        --slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0,0,0,.42);
        --slider-handle-ring-width: 3px;
        --slider-handle-ring-color: #10B98130;

        --slider-tooltip-font-size: 0.875rem;
        --slider-tooltip-line-height: 1.25rem;
        --slider-tooltip-font-weight: 600;
        --slider-tooltip-min-width: 20px;
        --slider-tooltip-bg: #10B981;
        --slider-tooltip-bg-disabled: #9CA3AF;
        --slider-tooltip-color: #fff;
        --slider-tooltip-radius: 5px;
        --slider-tooltip-py: 2px;
        --slider-tooltip-px: 6px;
        --slider-tooltip-arrow-size: 5px;
        --slider-tooltip-distance: 3px;
        .slider-tooltip{
            display: none;
        }
    }
    
</style>