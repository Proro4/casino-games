<template>
    <div class="popup">
        <div class="popup__bck" @click="emit('showHotKeysSetting', false)"></div>
            <div class="popup__block">
                <div class="popup__content">
                    <div class="popup__exit" @click="emit('showHotKeysSetting', false)"></div>
                    <div class="popup__title">HOTKEYS</div>

                    <div class="popup__hotkeys">
                        <div class="popup__hotkeys-label">
                            <div class="popup__hotkeys-text">
                                Halve the rate
                            </div>
                            <div className="popup__hotkeys-value">
                                A
                            </div>
                        </div>
                        <div class="popup__hotkeys-label">
                            <div class="popup__hotkeys-text">
                                Double your bet
                            </div>
                            <div class="popup__hotkeys-value">
                                S
                            </div>
                        </div>
                        <div class="popup__hotkeys-label">
                            <div class="popup__hotkeys-text">
                                Make a bet
                            </div>
                            <div class="popup__hotkeys-value">
                                Space
                            </div>
                        </div>
                        <div class="popup__hotkeys-bottom"> 
                            <ToggleSelect 
                                toggleValueOne='OFF'
                                toggleValueTwo='ON'
                                :toggleValueStatus="toggleHotkey"
                                @changeToggleValueStatus="toggleHotkey = !toggleHotkey"
                            />
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

    const toggleHotkey = ref(false)
    const layourContext = ref(false)
</script>