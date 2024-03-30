<template>
    <div class="popup">
        <div class="popup__bck" @click="emit('showBettingInformation', false)"></div>
            <div class="popup__block">
                <div class="popup__content">
                    <div class="popup__exit" @click="emit('showBettingInformation', false)"></div>
                    <div class="popup__title">BETTING INFORMATION</div>

                    <div class="popup__betting">
                        
                      <div class="popup__table">
                            <div class="popup__table-ln">
                                <div class="popup__table-title">
                                    COIN
                                </div>
                                <div class="popup__table-title">
                                    MIN BET
                                </div>
                                <div class="popup__table-title">
                                    MAX BET
                                </div>
                                <div class="popup__table-title">
                                    MAX PROFIT
                                </div>
                            </div>
                            <template v-for="(item, index) in coinList" :key="index">
                                
                                <div class="popup__table-td">
                                        <div class="popup__table-item">
                                            {{item.coin}}
                                        </div>
                                        <div class="popup__table-item">
                                            {{Number(item.minimum_bet).toFixed(5)}}
                                            <!-- <img src={require(`../../assets/images/coins/${item.coin.toLowerCase()}.png`)} alt='l-ic' /> -->
                                        </div>
                                        <div class="popup__table-item">
                                            {{Number(item.maximum_bet).toFixed(5)}}
                                            <!-- <img src={require(`../../assets/images/coins/${item.coin.toLowerCase()}.png`)} alt='l-ic' /> -->
                                        </div>
                                        <div class="popup__table-item">
                                            {{Number(item.maximum_profit).toFixed(5)}}
                                            <!-- <img src={require(`../../assets/images/coins/${item.coin.toLowerCase()}.png`)} alt='l-ic' /> -->
                                        </div>
                                    </div>
                            </template>
                        </div>
                    </div>
                </div> 
        </div>
    </div>    
</template>
<script setup>
    import ToggleSelect from "@/components/games/ToggleSellect.vue";
    
    import { ref } from 'vue';
    
    const emit = defineEmits(['showBettingInformation'])
    const coinList = ref([
        {
            coin: 100,
            minimum_bet: 100,
            maximum_bet: 100,
            maximum_profit: 100,
        },
        {
            coin: 20,
            minimum_bet: 20,
            maximum_bet: 20,
            maximum_profit: 20,
        },
        {
            coin: 30,
            minimum_bet: 100,
            maximum_bet: 30,
            maximum_profit: 100,
        },
    ])
    const toggleHotkey = ref(false)
    const layourContext = ref(false)
</script>