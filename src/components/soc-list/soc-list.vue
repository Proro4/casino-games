<template>
  <ul class="soc">
    <li v-for="link in list" :key="link.id">
      <a :href="link.link" target="_blank" :class="link.icon"></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocList",
  data() {
    return {
      list: [
        {
          id: "0",
          link: "",
          icon: "icon-google",
        },
        {
          id: "1",
          link: "",
          icon: "icon-discord",
        },
        {
          id: "2",
          link: "",
          icon: "icon-facebook",
        },
        {
          id: "3",
          link: "",
          icon: "icon-instagram",
        },
        {
          id: "4",
          link: "",
          icon: "icon-twitter",
        },
        {
          id: "5",
          link: "",
          icon: "icon-twitter",
        },
      ],
    };
  },
};
</script>
