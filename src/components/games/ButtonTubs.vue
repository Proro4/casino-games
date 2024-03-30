<template>
    <template v-for="(item, index) in list" :key={index}>
        <div 
            :class="`tub-button ${item.id === activeTub ? 'active' : ''}`" 
            @click="() => emit('onEvent',item.id)"
        >
            <p>{{item.title}}</p>
        </div>
    </template>
</template>
<script setup>
    const props = defineProps(['list', 'activeTub'])
    const emit = defineEmits(['onEvent'])
</script>