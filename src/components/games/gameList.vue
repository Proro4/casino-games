<template>
    <div class="game-list">
        <template v-for="(item, index) in houseGames" :key="index">
            <div class="game-list__item" >
                <router-link :to="item.link">
                    
                    <span><img :src="item.img" :alt="item.title"/></span>
                    <p>{{item.title}} </p>
                </router-link>  
            </div>
        </template>
    </div>
</template>
<script setup>
import {ref} from 'vue';


import img01 from "@/assets/images/home/house-game-01.jpg";
import img02 from "@/assets/images/home/house-game-02.jpg";
import img03 from "@/assets/images/home/house-game-03.jpg";
import img04 from "@/assets/images/home/house-game-04.jpg";
import img05 from "@/assets/images/home/house-game-05.jpg";
import img06 from "@/assets/images/home/house-game-06.jpg";
import img07 from "@/assets/images/home/house-game-07.jpg";
import img08 from "@/assets/images/home/house-game-08.jpg";
import img09 from "@/assets/images/home/house-game-09.jpg";
import img10 from "@/assets/images/home/house-game-10.jpg";
import img11 from "@/assets/images/home/house-game-11.jpg";
import img12 from "@/assets/images/home/house-game-12.jpg";

const houseGames = ref([
        {
          id: 2,
          img: img02,
          title: "Mines",
          variant: "teal",
          link:'/mines',
        },
        {
          id: 4,
          img: img04,
          title: "Diamonds",
          variant: "teal",
          link:'/diamonds',
        },
        {
          id: 6,
          img: img06,
          title: "Keno",
          variant: "purple",
          link:'/keno',
        },
        {
          id: 9,
          img: img09,
          title: "Dice",
          variant: "purple",
          link:'/dice',
        },
        {
          id: 10,
          img: img10,
          title: "Limbo",
          variant: "teal",
          link:'/limbo',
        },
        {
          id: 11,
          img: img11,
          title: "Towers",
          variant: "purple",
          link:'/towers',
        }
        ])
</script>
<style scoped lang="scss">
    .game-list{
        display: flex;
        flex-direction: column;
        width: 280px;
        background: #221e1e;
        margin: 5px;
        box-sizing: border-box;
        &__item{
            padding: 10px;
            transition: 0.3s all;
            &:hover{
                background: #312d2d;
                p{
                    padding-left: 20px;
                }
            }
            a{
                display: flex;
                align-items: center;
            }
            span{
                display: block;
                width: 100px;
                height: 100px;
                overflow: hidden;
                border-radius: 10px;
            }
            img{
                height: 100%;
                width: 100%;
                transform: scale(1.1);
            }
            p{
                transition: 0.3s all;
                padding-left: 15px;
                font-size: 24px;
            }
        }
    }
</style>