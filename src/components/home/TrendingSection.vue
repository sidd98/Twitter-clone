<template>
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
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }" />
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
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
<style lang="scss" scoped>
.right-side-bar {
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
