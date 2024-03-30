<template>
    <div class="preloader">
        <div class="preloader__circle-one"></div>
        <div class="preloader__circle-two">
            
        </div>
    </div>
</template>    
<script setup>
</script>
<style lang="scss" scoped> 
    .preloader{
        background-color: rgb(21, 22, 34);
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1000;   
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        pointer-events: none;
        opacity: 0;
        animation: 3s hideAnimate 1;
        &__circle-one{
            height: 55px;
            width: 55px;
            position: absolute;
            z-index: 1;
            border-radius: 50%;
            background-color: rgb(21, 22, 34);
        }
        &__circle-two{
            position: relative;
            height: 80px;
            width: 80px;
            &::before{
                left: 0;
                top: 0;
                content: '';
                position: absolute;
                border-radius: 50%;
                background-color: #E1A926; 
                height: 70px;
                width: 70px;
            }
        animation: 1s linear rotateCircle infinite;
        }
    }
    @keyframes rotateCircle{
        0%{
            transform: rotate(0deg);
            opacity: 1;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
            transform: rotate(360deg);
        }
    }
    @keyframes hideAnimate{
        0%{
            user-select: all;
            pointer-events: auto;
            opacity: 1;
        }
        90%{
            user-select: all;
            pointer-events: auto;
            opacity: 1;
        }
        100%{
            user-select: none;
            pointer-events: none;
            opacity: 0;
        }
    }
</style>
