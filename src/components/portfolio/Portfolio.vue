<template>
  <div id="works">
    <work v-for="work in works" :key="work.id" :heading="work.heading" :subheading="work.subheading" :grid="work.grid" :direction="work.direction" :link="work.link" :src="work.src"></work>
  </div>
</template>

<script>
import Work from "./Work";
const path = "../../../static/assets/";
export default {
  components: {
    Work
  },
  data() {
    return {
      works: [
        {
          heading: "MY Team Gear",
          subheading: ["html", "css", "sass", "php", "wordpress"],
          grid: 2,
          direction: 0,
          link: "http://my-teamgear.com",
          src: path + "my-teamgear.jpg"
        },
        {
          heading: "Aerials Gymnastics",
          subheading: ["html", "css", "php", "wordpress"],
          grid: 3,
          direction: 1,
          link: "http://aerialsgymnastics.net",
          src: path + "aerials.jpg"
        },
        {
          heading: "Geomancy",
          subheading: ["html", "css", "sass", "js", "vuejs"],
          grid: 4,
          direction: 0,
          link: "https://geomancy.dustinheisey.com",
          src: path + "geomancy.jpg"
        },
        {
          heading: "Circles",
          subheading: ["html", "css", "sass", "js"],
          grid: 5,
          direction: 1,
          link: "https://circles.dustinheisey.com",
          src: path + "circles.jpg"
        },
        {
          heading: "Snake",
          subheading: ["html", "css", "js"],
          grid: 6,
          direction: 0,
          link: "https://snake.dustinheisey.com",
          src: path + "snake.jpg"
        }
      ]
    };
  }
};
</script>
