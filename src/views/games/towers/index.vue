<template>
  <div class="gamescreen towers-screen border">
    <div class="border-top"></div>
    <option-buttons 
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
      @showSoundSetting="(e) => toggleSoundSetting = e"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
      @showBettingInformation="(e) => toggleBettingInformation = e"/>
    <div class="towers">
      <div class="towers__bck" />
      <div class="towers__block">
        <div class="row">
          <div class="col-lg-6">
            <div class="towers__setting">
              <div class="gamescreen__form-top">
                <div></div>
                <GameButton
                  text="BET"
                  @onClick="() => beginGame()"
                  v-if="!playGame"
                />
                <span style="position: relative">
                  <div
                    class="towers__begin-play"
                    :class="!dirtyGame && 'active'"
                  />
                  <GameButton
                    text="Cashout"
                    @onClick="() => endGame()"
                    v-if="playGame"
                  />
                </span>
                <span style="position: relative">
                  <div
                    class="towers__begin-play"
                    :class="playGame && 'active'"
                  />
                  <toggle-sellect
                    toggleValueOne="MANUAL"
                    toggleValueTwo="AUTO"
                    toggleValueName="manualAutoStatus"
                    :toggleValueStatus="manualAutoStatus"
                    @changeToggleValueStatus="
                      (status) => (manualAutoStatus = status)
                    "
                  />
                </span>
              </div>
              <div class="gamescreen__form-manual" style="width: 100%">
                <div class="game-label w-100 min-title mb-20">
                  <div
                    class="towers__begin-play"
                    :class="playGame && 'active'"
                  />
                  <input-value
                    :value="betSize"
                    placeholder="BET SIZE"
                    :onlyNumber="true"
                    @onBlurFunc="() => validBetSize()"
                    @changeValue="(e) => (betSize = e)"
                  >
                    <button-select-list
                      :buttonList="betSizeArray"
                      :activeButtonList="activeButtonList"
                      @changeButtonSelect="(e) => changeButtonSelect(e)"
                    />
                  </input-value>
                </div>
                <div class="game-label w-100">
                  <div
                    class="towers__begin-play"
                    :class="playGame && 'active'"
                  />
                  <TowersSelect @towersCount="(e) => changeDificulty(e)" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="towers__content">
              <div class="towers__slots">
                <div
                  class="towers__slots-list"
                  v-for="(slotLevel, indexLevel) in slotsList"
                  :key="indexLevel + 'row'"
                >
                  <span class="towers__slots-count">
                    <img
                      src="@/assets/images/games/almaz-ic.png"
                      v-if="indexLevel > 4"
                      alt="almaz"
                    />
                    <img
                      src="@/assets/images/games/almaz-2-ic.png"
                      v-if="indexLevel <= 4"
                      alt="almaz2"
                    />
                    <p>{{ slotLevel.price }}</p>
                  </span>
                  <template v-for="(slotItem, itemIndex) in slotLevel.column">
                    <div
                      class="towers__slot-block"
                      :class="[
                        slotLevel.levelGame && playGame && 'active',
                        slotLevel.animatedSlot &&
                          slotLevel.animatedSlot === itemIndex &&
                          'animate',
                      ]"
                      v-if="slotItem"
                      :key="itemIndex + 'column'"
                      @click="checkTower(slotLevel, itemIndex)"
                    >
                      <span></span>
                      <span></span>
                      <div
                        class="towers__slot-win"
                        :class="slotItem.clicked && 'animate'"
                        v-if="slotItem.show && slotItem.status"
                      >
                        <img
                          src="@/assets/images/games/game/towers-success.png"
                          alt="win"
                        />
                      </div>
                      <div
                        class="towers__slot-false"
                        :class="slotItem.clicked && 'animate'"
                        v-else-if="slotItem.show && !slotItem.status"
                      >
                        <span />
                        <span />
                        <img
                          src="@/assets/images/games/game/towers-error.png"
                          alt="win"
                        />
                      </div>
                      <div class="towers__slot-after" v-if="!slotItem.show">
                        <OptionButton>
                          <font-awesome-icon
                            :icon="['fas', 'fa-question']"
                            color="black"
                          />
                        </OptionButton>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Preloader/>
    <PopupHotkeysSetting 
      v-if="toggleHotKeysSetting"
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
    />
    <PopupSoundSettings 
      v-if="toggleSoundSetting"
      @showSoundSetting="(e) => toggleSoundSetting = e"
    />
    <PopupLiveStatisticsSetting
      v-if="toggleLiveStatisticsSetting"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
    />
    <PopupBettingInformation
      v-if="toggleBettingInformation"
      @showBettingInformation="(e) => toggleBettingInformation = e"
    />
  </div>
</template>
<script setup>
  import {computed, ref, watch, onMounted} from 'vue';
  import useTowersStore from "@/store/games/towers";

  const towersStore = useTowersStore()

  const minBetSize = 0.01;
  const maxBetSize = 1000.0; 

  import OptionButtons from "@/components/games/option-buttons/OptionButtons.vue";
  import OptionButton from "@/components/games/option-buttons/OptionButton.vue";
  import GameButton from "@/components/games/buttons/GameButton.vue";
  import InputValue from "@/components/games/InputValue.vue";
  import ButtonSelectList from "@/components/games/ButtonSelectList.vue";
  import ToggleSellect from "@/components/games/ToggleSellect.vue";
  import TowersSelect from "@/components/games/TowersSelect.vue";
  import { useToast } from 'vue-toastification';
  import PopupHotkeysSetting from '@/components/popups/PopupHotkeysSetting.vue';
  import PopupSoundSettings from '@/components/popups/PopupSoundSettings.vue';
  import PopupLiveStatisticsSetting from '@/components/popups/PopupLiveStatisticsSetting.vue';
  import PopupBettingInformation from '@/components/popups/PopupBettingInformation.vue';
  import Preloader from '@/components/games/Preloader.vue'

  const $toast = useToast();

  const betSize = ref(0.01)
  const manualAutoStatus = ref(false)
  const playGame = ref(false)
  const dirtyGame = ref(false)
  const betSizeArray = ref([
    { id: 1, value: "MIN" },
    { id: 2, value: "1/2" },
    { id: 3, value: "2x" },
    { id: 4, value: "MAX" },
  ])
  const activeButtonList = ref([])
  const number_of_rows = ref(9)
  const number_of_columns = ref(3)
  const slotsList = ref([])
  const columnList = ref([])
  const dificultyId = ref("MEDIUM")
  const userSeed = ref(null)
  const toggleHotKeysSetting = ref(false)
  const toggleSoundSetting = ref(false)
  const toggleLiveStatisticsSetting = ref(false)
  const toggleBettingInformation= ref(false)

  const towersMultipliers = computed(() => towersStore.towersMultipliers) 
  const resultRound = computed(() => towersStore.resultRound) 

  watch(
    () => number_of_columns,
    () => createSlotList()
  )
  watch(
    () => towersMultipliers,
    () => getTowersRoundsCount()
  )

  onMounted(() => {

    towersStore.getTowersConfiguration().then(() => {
      createSlotList();
    });
    towersStore.getTowersSeed().then((res) => {
      if (res.success) {
        userSeed.value = res.seed.current_seed_hashed;
      } else {
        $toast.error(res.message, {
          timeout: 2000,
          position: "top-center",
        });
      }
    });
  })

  const beginGame = () => {
      towersStore.beginTowersPlay({
        coin: "GEM",
        difficulty: dificultyId.value,
        bet_amt: betSize.value.toString(),
        client_seed: userSeed.value,
      }).then((res) => {
        if (res.success) {
          playGame.value = true;
          createSlotList();
        } else {
          $toast.error(res.message, {
            timeout: 2000,
            position: "top-center",
          });
        }
      });
    };
    const endGame = () => {
      towersStore.towersCashout().then((res) => {
        if (res.status) {
          playGame.value = false;
        } else {
          $toast.error(res.message, {
            timeout: 2000,
            position: "top-center",
          });
        }
      });
    };
    const changeButtonSelect = (e) => {
      switch (e) {
        case 1:
          betSize.value = 0.1;
          break;
        case 2:
          betSize.value =
            betSize.value / 2 > minBetSize ? betSize.value / 2 : minBetSize;
          break;
        case 3:
          betSize.value =
            betSize.value * 2 < maxBetSize ? betSize.value * 2 : maxBetSize;
          break;
        case 4:
          betSize.value = 1000.0;
          break;
      }
      getTowersRoundsCount();
    };
    const createSlotList = () => {
      addToColumn();
      slotsList.value = [];
      for (let indexRow = 0; indexRow < number_of_rows.value; indexRow++) {
        slotsList.value.push({
          price: 0.0,
          column: columnList.value,
          status: false,
          levelGame: indexRow === 0 ? true : false,
          animatedSlot: null,
        });
      }
      getTowersRoundsCount();
    };

    const addToColumn = () => {
      columnList.value = [];
      for (let i = 0; i < number_of_columns.value; i++) {
        columnList.value.push({
          show: false,
          status: false,
          clicked: false,
        });
      }
    };
    const sendCheckTower = (slotItem) => {
      towersStore.towersSweep(slotItem);
    };
    const checkTower = (slotLevel, slotItem) => {
      if (slotLevel.levelGame && playGame.value) {
        dirtyGame.value = true;
        sendCheckTower(slotItem);
        const slotIndex = slotsList.value.indexOf(slotLevel);
        slotsList.value[slotIndex]["animatedSlot"] = slotItem;
        setTimeout(() => {
          slotsList.value[slotIndex]["animatedSlot"] = null;
          if (resultRound.value.status === "IN_PROGRESS") {
            showSuccesResult(
              slotIndex,
              slotItem,
              resultRound.value.previous_row
            );
          }
          if (resultRound.value.status === "BUSTED") {
            dirtyGame.value = false;
            showFalseResult(
              slotIndex,
              slotItem,
              resultRound.value.game_table_matrix
            );
            playGame.value = false;
          }
        }, 500);
      }
    };
    const showSuccesResult = (slotIndex, slotItem, previousRow) => {
      const arrayString = JSON.stringify(slotsList.value);
      const arrayList = JSON.parse(arrayString);

      arrayList[slotIndex]["column"][slotItem]["show"] = true;
      arrayList[slotIndex]["column"][slotItem]["status"] = true;
      arrayList[slotIndex]["column"][slotItem]["clicked"] = true;

      previousRow.bad_locations.map((badItem) => {
        arrayList[slotIndex]["column"][badItem]["show"] = true;
        arrayList[slotIndex]["column"][badItem]["status"] = false;
      });
      previousRow.good_locations.map((goodItem) => {
        arrayList[slotIndex]["column"][goodItem]["show"] = true;
        arrayList[slotIndex]["column"][goodItem]["status"] = true;
      });

      arrayList.levelGame = false;
      arrayList[slotIndex + 1].levelGame = true;

      slotsList.value = arrayList;
    };

    const showFalseResult = (slotIndex, slotItem, gameTableMatrix) => {
      const arrayString = JSON.stringify(slotsList.value);
      const arrayList = JSON.parse(arrayString);

      arrayList[slotIndex]["column"][slotItem]["show"] = true;
      arrayList[slotIndex]["column"][slotItem]["status"] = false;
      arrayList[slotIndex]["column"][slotItem]["clicked"] = true;

      gameTableMatrix.map((item, index) => {
        item.bad_locations.map((badItem) => {
          arrayList[index]["column"][badItem]["show"] = true;
          arrayList[index]["column"][badItem]["status"] = false;
        });
        item.good_locations.map((goodItem) => {
          arrayList[index]["column"][goodItem]["show"] = true;
          arrayList[index]["column"][goodItem]["status"] = true;
        });
      });

      slotsList.value = arrayList;
    };
    const changeDificulty = (e) => {
      number_of_columns.value = e.count;
      dificultyId.value = e.id;
      setTimeout(() => {
        getTowersRoundsCount();
      }, 100);
    };
    const getTowersRoundsCount = () => {
      let multipliersLvl = towersMultipliers.value[dificultyId.value];
      multipliersLvl = [...multipliersLvl].reverse();
      slotsList.value.map((item, index) => {
        item.price = checkCount(betSize.value, multipliersLvl, index);
      });
    };
    const checkCount = (betSize, multipliersLvl, index) => {
      const value = [betSize];
      for (let i = 0; i <= index; i++) {
        value.push(multipliersLvl[i]);
      }
      return (value.reduce((a, b) => a * b) - betSize).toFixed(8);
    };

</script>
<!-- <script src="./index"></script> -->
