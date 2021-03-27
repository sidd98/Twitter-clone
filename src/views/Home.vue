<template>
  <div class="d-flex container-fluid">
    <!-- side nav -->
    <div class="left-side-bar px-8 py-2 flex flex-col col-sm-3 justify-between">
      <div class="navigation-sec">
        <button class="home-button h-12 w-12 mb-2">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </button>
        <div class="navigation">
          <button
            v-for="(tab, id) in tabs"
            :key="id"
            @click="current = tab.id"
            :class="`nav-button d-flex item-center mb-3 ${
              current === tab.id ? 'clicked' : ''
            }`"
          >
            <font-awesome-icon
              class="text-left mr-2"
              :icon="{ prefix: 'fas', iconName: `${tab.icon}` }"
            />
            <p class="text-left mb-0">{{ tab.title }}</p>
          </button>
          <button class="tweet-btn p-2">Tweet</button>
        </div>
      </div>

      <div class="profile-sec">
        <button class="d-flex items-center" @click="dropDown = !dropDown">
          <img class="profile-image mr-2" src="particpant.png" alt="" />
          <div class="name-sec pt-2">
            <p class="name mb-0">Siddhant Sajwan</p>
            <p class="hashtag">_@Siddhant</p>
          </div>
          <font-awesome-icon
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
    <div class="main-nav col-sm-5"></div>
    <!-- trending section -->
    <div class="right-side-bar col-sm-4 py-2 px-6">
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
      <div class="trends">
        <div class="flex items-center justify-between p-1">
          <p class="trends-heading m-0 px-2">Trends For You</p>
        </div>
        <button
          v-for="(trend, index) in trends"
          :key="index"
          class="w-100 flex justify-between hover:bg-lighter"
        >
          <div>
            
            <p class="trend-top text-sm text-left">{{ trend.top }}</p>
            <p class="trend-title text-sm text-left">{{ trend.title }}</p>
            <p class="trend-bottom text-sm text-left">{{ trend.bottom }}</p>
          </div>
        </button>
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
      current: "home",
      dropDown: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.left-side-bar {
  text-align: left;
  width: 30%;
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
      align-items: center;
      border: 0;
      border-radius: 10px;
      outline: none;
      background: white;

      p {
        font-weight: bold;
        margin-top: 4px;
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
      width: 56%;
      height: 44px;
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

.right-side-bar {
  border-left: 1px solid lavender;

  .search-box {
    position: relative;
    height: 40px;

    .search-tweet {
      width: 100%;
      border: 0;
      outline: none;
      background: lavender;
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
    background-color: lavender;
    > div {
      p.trends-heading {
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
}
</style>
