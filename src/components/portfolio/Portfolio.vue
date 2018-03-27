<template>
  <div id="works">
    <work v-for="work in works" :key="work.id" :heading="work.heading" :subheading="work.subheading" :grid="work.grid" :direction="work.id + 1" :link="work.link" :src="work.src"></work>
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
        // {
        //   heading: "Razorblade Art",
        //   subheading: ["html", "css", "bootstrap"],
        //   grid: 2,
        //   direction: 0,
        //   link: "http://razorbladeart.com",
        //   src: path + "razorblade-art.jpg"
        // },
        {
          heading: "Snake",
          subheading: ["html", "css", "js"],
          grid: 3,
          direction: 1,
          link: "https://snake.dustinheisey.com",
          src: path + "snake.jpg"
        },
        {
          heading: "Improvement Bay",
          subheading: ["css", "wordpress", "google"],
          grid: 4,
          direction: 0,
          link: "http://improvementbay.com",
          src: path + "improvement-bay.jpg"
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
          heading: "Geomancy",
          subheading: [
            "html",
            "css",
            "sass",
            "js",
            "vuejs",
            "webpack",
            "babel"
          ],
          grid: 6,
          direction: 0,
          link: "https://geomancy.dustinheisey.com",
          src: path + "geomancy.jpg"
        }
      ]
    };
  }
};
</script>
