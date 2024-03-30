<template>
    <div class="popup">
        <div class="popup__bck" @click="emit('showLiveStatisticsSetting', false)"></div>
            <div class="popup__block">
                <div class="popup__content">
                    <div class="popup__exit" @click="emit('showLiveStatisticsSetting', false)"></div>
                    <div className='popup__title'>live statistics</div>

                    <div className="popup__statistic">
                        <div className="popup__tubs">
                            <ButtonTubs
                                :list="tubsList"
                                :activeTub="activeTub"
                                @onEvent="(e) => activeTub = e"
                            />
                        </div>
                        <template v-if="activeTub === 1"> 
                            <div class="popup__statistic-list">
                                    <div class='popup__statistic-label'>
                                        <div class="popup__statistic-title">
                                            Income
                                        </div>
                                        <div class="popup__statistic-value">
                                            <img src="@/assets/images/games/almaz-ic.png" alt="" />
                                            {{+liveStatistics.income.toFixed(6)}}
                                        </div>
                                        <div class="popup__statistic-title">
                                            Win
                                        </div>
                                        <div class="popup__statistic-value">
                                            {{liveStatistics.win}}
                                        </div>
                                    </div>
                                    <div class='popup__statistic-label'>
                                        <div class="popup__statistic-title">
                                            General rate
                                        </div>
                                        <div class="popup__statistic-value">
                                            <img src="@/assets/images/games/almaz-ic.png" alt="" />
                                            {{+liveStatistics.generalRate.toFixed(6)}}
                                        </div>
                                        <div class="popup__statistic-title">
                                            Defeats
                                        </div>
                                        <div class="popup__statistic-value">
                                            {{liveStatistics.defeats}}
                                        </div>
                                    </div>
                                </div>
                        </template>
                    </div>
                </div> 
        </div>
    </div>    
</template>
<script setup>
    import ToggleSelect from "@/components/games/ToggleSellect.vue";
    import ButtonTubs from '@/components/games/ButtonTubs.vue';
    
    import { ref } from 'vue';
    
    const emit = defineEmits(['showLiveStatisticsSetting'])



    const tubsList = ref([
        {
            id:1,
            title: 'bet' 
        },
        {
            id:2,
            title: 'race' 
        },
    ]) 

    const liveStatistics = ref({
            income: 0.00000000,
            generalRate: 0.00000000,
            win: 0, 
            defeats: 0
        })
    const activeTub = ref(1)

    const toggleHotkey = ref(false) 
</script>