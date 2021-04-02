<template>
  <div
    class="main-nav px-0 h-100"
    :class="[$mq === 'medium' ? 'w-75' : $mq === 'large' ? 'w-100' : '']"
  >
    <div
      class="top-tag px-2 py-3 d-flex items-center justify-content-between align-items-center"
    >
      <h3 class="home-tag">Home</h3>
      <font-awesome-icon
        class="ml-3"
        :icon="{ prefix: 'fas', iconName: 'star' }"
      />
    </div>
    <div class="tweet-post px-2 py-3 d-flex">
      <div class="profile-pic">
        <img src="particpant.png" class="" />
      </div>
      <form
        v-on:submit.prevent="addNewTweet"
        class="tweet-form w-100"
        :class="$mq === 'small' ? 'px-2' : 'px-4'"
      >
        <textarea
          v-model="tweet.content"
          placeholder="What's Happening ?"
          class="w-100 mt-3 mb-4"
        />
        <div class="d-flex justify-content-between">
          <div class="icons d-flex item-center">
            <font-awesome-icon
              class="mr-4"
              :icon="{ prefix: 'fas', iconName: 'image' }"
            />
            <font-awesome-icon
              class="mr-4"
              :icon="{ prefix: 'fas', iconName: 'film' }"
            />
            <font-awesome-icon
              class="mr-4"
              :icon="{ prefix: 'fas', iconName: 'smile' }"
            />
            <font-awesome-icon
              class="mr-4"
              :icon="{ prefix: 'fas', iconName: 'calendar' }"
            />
            <font-awesome-icon
              class="mr-4"
              :icon="{ prefix: 'fas', iconName: 'chart-bar' }"
            />
          </div>
          <button
            type="submit"
            class="tweet-btn"
            :class="$mq === 'small' ? 'px-2' : 'px-4'"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
    <div
      v-for="(tweet, index) in tweets"
      :key="index"
      class="tweets w-100 py-4 d-flex"
      :class="$mq === 'small' ? 'px-2' : 'px-4'"
    >
      <div class="profile flex-none">
        <img src="particpant.png" class="flex-none" />
      </div>
      <div class="content ml-3">
        <div class="user-info d-flex items-center">
          <p class="follow-name">Siddhant Sajwan</p>
          <p class="follow-handle ml-2">@_sidd06</p>
          <p class="follow-time ml-2">1s</p>
          <font-awesome-icon
            class="more ml-auto"
            :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }"
          />
        </div>
        <p class="py-2">
          {{ tweet.content }}
        </p>
        <div class="content-info d-flex items-center justify-content-between">
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'comment' }"
            />
            <p>0</p>
          </div>
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'retweet' }"
            />
            <p>1</p>
          </div>
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'heart' }"
            />
            <p>3</p>
          </div>
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'share' }"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(follow, index) in following"
      :key="index"
      class="tweets w-100 d-flex"
      :class="$mq === 'small' ? 'px-2' : 'px-4'"
    >
      <div class="profile flex-none">
        <img :src="follow.src" class="flex-none" />
      </div>
      <div class="content ml-3">
        <div class="user-info d-flex items-center">
          <p class="follow-name">{{ follow.name }}</p>
          <p class="follow-handle ml-2">{{ follow.handle }}</p>
          <p class="follow-time ml-2">{{ follow.time }}</p>
          <font-awesome-icon
            class="more ml-auto"
            :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }"
          />
        </div>
        <p class="py-2">
          {{ follow.tweet }}
        </p>
        <div class="content-info d-flex items-center justify-content-between">
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'comment' }"
            />
            <p>{{ getFormatedNumer(follow.comments) }}</p>
          </div>
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'retweet' }"
            />
            <p>{{ getFormatedNumer(follow.retweets) }}</p>
          </div>
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'heart' }"
            />
            <p>{{ getFormatedNumer(follow.retweets) }}</p>
          </div>
          <div class="d-flex items-center">
            <font-awesome-icon
              class="mr-3"
              :icon="{ prefix: 'fas', iconName: 'share' }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tweets: [{ content: "It is so nice outside!" }],
      tweet: { content: "" },
      following: [
        {
          src: "https://randomuser.me/api/portraits/men/4.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "20 min",
          tweet: "Should I just quarantine on mars??",
          comments: 1000,
          retweets: 550,
          like: 1000003,
        },
        {
          src: "https://randomuser.me/api/portraits/women/76.jpg",
          name: "Kevin Hart",
          handle: "@miniRock",
          time: "55 min",
          tweet: "Should me and the rock do another sub-par movie together????",
          comments: 2030,
          retweets: 50,
          like: 20003,
        },
        {
          src: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "1.4 hr",
          tweet: "Haha just made a flame thrower. Shld I sell them?",
          comments: 100000,
          retweets: 1000002,
          like: 5000003,
        },
        {
          src: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "1.4 hr",
          tweet: "Just did something crazyyyyyyy",
          comments: 100500,
          retweets: 1000032,
          like: 5000103,
        },
      ],
    };
  },
  props: {},
  computed: {},
  methods: {
    getFormatedNumer(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
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
.main-nav {
  border-right: 1px solid #ebeef0;
  .top-tag {
    border-bottom: 1px solid #ebeef0;
    h3.home-tag {
      font-weight: bold;
    }
    svg {
      color: #56b0f3;
    }
  }

  .tweet-post {
    border-bottom: 10px solid #ebeef0;
    .profile-pic img {
      width: 60px;
      height: 60px;
      border: 1px solid #ebeef0;
      border-radius: 50px;
    }

    form {
      position: relative;
      textarea {
        resize: none;
        border: none;
        outline: none;
      }

      > div {
        padding-bottom: 10px;
        svg {
          font-size: 1.2em;
          color: #56b0f3;
        }
      }

      button.tweet-btn {
        color: #ebeef0;
        height: 40px;
        outline: none;
        font-weight: bold;
        background-color: #56b0f3;
        border: 0;
        border-radius: 30px;
        position: absolute;
        bottom: 0;
        right: 0;

        &:hover {
          background-color: #2c75ac;
        }
      }
    }
  }

  .tweets {
    border-bottom: 1px solid #ebeef0;
    &:hover {
      background-color: #ebeef0;
    }
    .profile {
      flex: none;
      img {
        flex: none;
        background-color: antiquewhite;
        width: 60px;
        height: 60px;
        border: 1px solid #ebeef0;
        border-radius: 50px;
      }
    }

    .content {
      width: 100%;
    }

    .content .user-info {
      p.follow-name {
        font-weight: bolder;
      }
      p.follow-handle,
      p.follow-time,
      svg {
        color: #909aa1;
      }
    }

    .content .content-info {
      > div {
        color: #909aa1;
      }
    }
  }
}
</style>
