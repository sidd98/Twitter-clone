<template>
  <div class="d-flex container-fluid">
    <!-- side nav -->
    <div
      v-if="$mq !== 'small'"
      class="left-side-bar py-2 d-flex flex-column justify-between"
      :class="$mq === 'large' ? 'w-50 px-6' : 'px-2'"
    >
      <div class="navigation-sec">
        <button class="home-button h-12 w-12 mb-2">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </button>
        <div class="navigation">
          <button
            v-for="(tab, id) in tabs"
            :key="id"
            @click="current = tab.id"
            :class="`nav-button d-flex align-items-center mb-3 ${
              current === tab.id ? 'clicked' : ''
            }`"
          >
            <font-awesome-icon
              class="text-left mr-4"
              :icon="{ prefix: 'fas', iconName: `${tab.icon}` }"
            />
            <p v-if="$mq === 'large'" class="text-left mb-0">{{ tab.title }}</p>
          </button>
          <button class="tweet-btn p-2" :class="$mq === 'large' ? 'w-50' : 'tweet-icon'">
            <p v-if="$mq === 'large'">Tweet</p>
            <font-awesome-icon
              v-else
              class="text-left"
              :icon="{ prefix: 'fas', iconName: 'plus' }"
            />
          </button>
        </div>
      </div>

      <div class="profile-sec px-0" :class="$mq === 'large' ? 'w-100' : null">
        <button class="d-flex items-center" @click="dropDown = !dropDown">
          <img class="profile-image mr-2" src="particpant.png" alt="" />
          <div class="name-sec pt-2" v-if="$mq === 'large'">
            <p class="name mb-0">Siddhant Sajwan</p>
            <p class="hashtag">_@Siddhant</p>
          </div>
          <font-awesome-icon
            v-if="$mq === 'large'"
            class="ml-3"
            :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }"
          />
        </button>

        <div v-if="dropDown" class="drop-content">
          <button class="d-flex items-center">
            <img class="profile-image mr-2" src="particpant.png" alt="" />
            <div class="name-sec mr-4 pt-2">
              <p class="name mb-0">Siddhant Sajwan</p>
              <p>_@Siddhant</p>
            </div>
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'check' }" />
          </button>
          <button class="items-center text-left" @click="dropDown = false">
            Add an existing account
          </button>
          <button class="items-center text-left" @click="dropDown = false">
            Log out
          </button>
        </div>
      </div>
    </div>
    <!-- tweet section -->
    <div class="main-nav px-0 h-100" :class="$mq === 'medium' ? 'w-75' : 'w-100'">
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
        <form v-on:submit.prevent="addNewTweet" class="tweet-form w-100 px-4">
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
            <button type="submit" class="tweet-btn px-4">Tweet</button>
          </div>
        </form>
      </div>
      <div
        v-for="(tweet, index) in tweets"
        :key="index"
        class="tweets w-100 px-4 py-4 d-flex"
      >
        <div class="profile flex-none mr-4">
          <img src="particpant.png" class="flex-none" />
        </div>
        <div class="content w-100">
          <div class="user-info d-flex items-center w-100">
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
          <div
            class="content-info d-flex items-center w-75 justify-content-between"
          >
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
        class="tweets w-100 px-4 py-4 d-flex"
      >
        <div class="profile flex-none mr-4">
          <img :src="follow.src" class="flex-none" />
        </div>
        <div class="content w-100">
          <div class="user-info d-flex items-center w-100">
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
          <div
            class="content-info d-flex items-center w-75 justify-content-between"
          >
            <div class="d-flex items-center">
              <font-awesome-icon
                class="mr-3"
                :icon="{ prefix: 'fas', iconName: 'comment' }"
              />
              <p>{{ follow.comments }}</p>
            </div>
            <div class="d-flex items-center">
              <font-awesome-icon
                class="mr-3"
                :icon="{ prefix: 'fas', iconName: 'retweet' }"
              />
              <p>{{ follow.retweets }}</p>
            </div>
            <div class="d-flex items-center">
              <font-awesome-icon
                class="mr-3"
                :icon="{ prefix: 'fas', iconName: 'heart' }"
              />
              <p>{{ follow.like }}</p>
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
    <!-- trending section -->
    <div class="right-side-bar w-50 h-100 py-2 px-3" v-if="$mq === 'large'">
      <div class="search-box mb-4">
        <input
          class="search-tweet pl-5"
          type="search"
          placeholder="Search Tweets"
        />
        <font-awesome-icon
          class="search-icon"
          :icon="{ prefix: 'fas', iconName: 'search' }"
        />
      </div>
      <div class="trends w-100">
        <div class="d-flex items-center justify-between p-2">
          <p class="trends-heading m-0 px-2">Trends For You</p>
        </div>
        <button
          v-for="(trend, index) in trends"
          :key="index"
          class="trends-btn w-100 d-flex justify-between px-3 py-1 border-lighter"
        >
          <div class="trends-content w-100">
            <p class="trend-top text-left leading-tight">{{ trend.top }}</p>
            <p class="trend-title font-weight-bold text-left">
              {{ trend.title }}
            </p>
            <p class="trend-bottom text-left">{{ trend.bottom }}</p>
          </div>
          <font-awesome-icon
            :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }"
          />
        </button>
        <button class="show-more px-3 py-1 w-100 text-left">show more</button>
      </div>

      <div class="trends w-100 mt-4">
        <div class="p-2">
          <p class="trends-heading m-0 px-2">show more</p>
        </div>
        <button
          v-for="(friend, index) in friends"
          :key="index"
          class="trends-btn w-100 d-flex px-3 py-1 border-lighter"
        >
          <div class="w-100 d-flex flex-row">
            <img class="profile-image mr-2" :src="friend.src" alt="" />
            <div class="name-sec mr-4 pt-2">
              <p class="name mb-0">{{ friend.name }}</p>
              <p>{{ friend.handle }}</p>
            </div>
          </div>
          <button class="follow text-sm py-1 px-4">follow</button>
        </button>
        <button class="show-more px-3 py-1 w-100 text-left">show more</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
      trends: [
        {
          top: "Trending in TX",
          title: "Gigi",
          bottom: "Trending with: Rip Gigi",
        },
        { top: "Music", title: "We Won", bottom: "135K Tweets" },
        { top: "Pop", title: "Blue Ivy", bottom: "40k tweets" },
        { top: "Trending in US", title: "Denim Day", bottom: "40k tweets" },
        { top: "Trending", title: "When Beyonce", bottom: "25.4k tweets" },
      ],
      friends: [
        {
          src: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
        },
        {
          src: "https://randomuser.me/api/portraits/men/4.jpg",
          name: "Adrian Monk",
          handle: "@detective:)",
        },
        {
          src: "https://randomuser.me/api/portraits/women/76.jpg",
          name: "Kevin Hart",
          handle: "@miniRock",
        },
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
      current: "home",
      dropDown: false,
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
.left-side-bar {
  height: 100%;
  text-align: left;
 // width: 30%;
  border-right: 1px solid lavender;
  .navigation-sec {
    margin-bottom: 90px;
  }
  button.home-button {
    border: 0;
    border-radius: 14px;
    color: rgb(100, 170, 194);
    font-size: 2em;
    background: white;
    outline: none;
  }
  .navigation {
    .nav-button {
      font-size: 26px;
      align-items: center;
      border: 0;
      border-radius: 10px;
      outline: none;
      background: white;

      p {
        font-weight: bold;
      }

      &.clicked {
        color: rgb(100, 170, 194);
      }
    }

    .nav-button:hover {
      color: rgb(100, 170, 194);
      background: rgb(236, 248, 252);
    }

    .tweet-btn {
      height: 50px;
      width: 50px;
      color: white;
      background: rgb(29, 161, 242);
      border-radius: 25px;
      outline: none;
      border: 0;
      &:hover {
        background: rgb(4, 152, 243);
      }
    }
  }

  .profile-sec {
    width: 80%;
    position: relative;

    button.items-center {
      width: 100%;
      border: 0;
      border-radius: 20px;
      outline: none;
      align-items: center;
      background-color: white;
      img.profile-image {
        border-radius: 35px;
        border: 1px solid lightgray;
        width: 55px;
      }

      .name-sec {
        font-size: 15px;
        text-align: start;
        p.name {
          font-size: inherit;
          font-weight: bolder;
        }
      }
    }

    img {
      width: 25px;
    }

    .drop-content {
      padding: 2px;
      position: absolute;
      bottom: 74px;
      left: 0px;
      border: 1px solid #e9ecef;
      border-radius: 12px;
      box-shadow: -4px 5px 15px 5px rgba(196, 194, 194, 0.75);

      background: white;
      max-width: 300px;
      min-width: 280px;
      max-height: 200px;
      min-height: 150px;

      button {
        border-bottom: 1px solid rgb(236, 234, 234);
        border-radius: 0px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      button:hover {
        outline: none;
        background-color: rgb(228, 231, 228);
      }
    }
  }
}

.main-nav {

  .top-tag {
    border-bottom: 1px solid #f7f9fa;
    h3.home-tag {
      font-weight: bold;
    }
    svg {
      color: #56b0f3;
    }
  }

  .tweet-post {
    border-bottom: 10px solid #f7f9fa;
    .profile-pic img {
      width: 60px;
      height: 60px;
      border: 1px solid #f7f9fa;
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
        border: 1px solid #f7f9fa;
        border-radius: 50px;
      }
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

.right-side-bar {
  border-left: 1px solid #f7f9fa;

  .search-box {
    position: relative;
    height: 40px;

    .search-tweet {
      width: 100%;
      border: 0;
      outline: none;
      background: #ebeef0;
      border-radius: 20px;
      height: inherit;
    }
    .search-icon {
      color: #747b81;
      position: absolute;
      top: 12px;
      left: 4%;
    }
  }

  .trends {
    width: 100%;
    border-radius: 20px;
    background-color: #f7f9fa;
    > div {
      p.trends-heading {
        font-size: 25px;
        font-weight: bold;
      }
    }
    button {
      outline: none;
      background-color: #f7f9fa;
      border: 0;
      border-top: 1px solid #dddfe1;
      justify-content: space-evenly;
      .trends-content {
        p {
          font-size: 15px;
          margin: 0;
          &.trend-top {
            color: #8e9194;
          }
        }
      }
      &.show-more {
        color: #78a7ce;
      }

      img.profile-image {
        border-radius: 25px;
        width: 50px;
        height: 50px;
      }

      .follow {
        border-radius: 20px;
        border: 1px solid #78a7ce;
      }
    }
    button:hover {
      background-color: #ecf0f5;
    }
  }
}
</style>
