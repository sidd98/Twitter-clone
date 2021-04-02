<template>
  <div class="d-flex container-fluid px-0">
    <!-- side nav -->
      <navigation-bar :tabs="tabs"/>
    <!-- tweet section -->
    <tweets-section />
    <!-- trending section -->
    <trending-section />
  </div>
</template>
<script>
import NavigationBar from '../components/home/NavigationBar.vue';
import TweetsSection from '../components/home/TweetsSection.vue';
import TrendingSection from '../components/home/TrendingSection.vue';
export default {
  components: { NavigationBar, TweetsSection, TrendingSection },
  data() {
    return {
      tabs: [
        { icon: "home", title: "Home", id: "home" },
        { icon: "hashtag", title: "Explore", id: "explore" },
        { icon: "bell", title: "Notifications", id: "notifications" },
        { icon: "envelope", title: "Messages", id: "messages" },
        { icon: "bookmark", title: "Bookmarks", id: "bookmarks" },
        { icon: "clipboard-list", title: "Lists", id: "lists" },
        { icon: "user", title: "Profile", id: "profile" },
        { icon: "ellipsis-h", title: "More", id: "more" },
      ],
      following: [
        {
          src: "https://randomuser.me/api/portraits/men/4.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "20 min",
          tweet: "Should I just quarantine on mars??",
          comments: "1,000",
          retweets: "550",
          like: "1,000,003",
        },
        {
          src: "https://randomuser.me/api/portraits/women/76.jpg",
          name: "Kevin Hart",
          handle: "@miniRock",
          time: "55 min",
          tweet: "Should me and the rock do another sub-par movie together????",
          comments: "2,030",
          retweets: "50",
          like: "20,003",
        },
        {
          src: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "1.4 hr",
          tweet: "Haha just made a flame thrower. Shld I sell them?",
          comments: "100,000",
          retweets: "1,000,002",
          like: "5,000,003",
        },
        {
          src: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "1.4 hr",
          tweet: "Just did something crazyyyyyyy",
          comments: "100,500",
          retweets: "1,000,032",
          like: "5,000,103",
        },
      ],
      tweets: [{ content: "It is so nice outside!" }],
      tweet: { content: "" },
    };
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.tweet.content,
      };
      this.tweets.unshift(newTweet);
      this.tweet.content = "";
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
