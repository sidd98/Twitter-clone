<template>
  <div
    v-if="$mq !== 'small'"
    class="left-side-bar py-2 d-flex flex-column justify-between"
    :class="$mq === 'large' ? 'w-50 px-5' : 'px-2'"
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
        <button
          class="tweet-btn p-2"
          :class="$mq === 'large' ? 'w-50' : 'tweet-icon'"
        >
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
</template>
<script>
export default {
  data() {
    return {
      dropDown: false,
      current: "home",
    };
  },

  props: {
    tabs: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.left-side-bar {
  height: 100%;
  text-align: left;
  // width: 30%;
  border-right: 1px solid #ebeef0;
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
      font-size: 20px;
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
</style>
