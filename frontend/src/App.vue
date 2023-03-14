<template>
  <div>
    <w3q-tip v-if="!isMobile" style="width: 100vw" bgColor="#E85C57" fontColor="#ffffff" fontSize="15px"/>
    <w3q-tip v-else style="width: 100vw" bgColor="#E85C57" fontColor="#ffffff" fontSize="12px"/>

    <div id="content">
      <el-container>
        <el-header class="header">
          <div class="header-main">
            <img class="header-icon" src="@/assets/logo.png" @click="goHome"/>
            <div class="header-title" @click="goHome">ChainFeeds Selection</div>
          </div>
        </el-header>

        <el-main :style="'min-height:'+ (fullHeight-235) +'px;'">
          <keep-alive max="10">
            <router-view :key="$route.fullPath"/>
          </keep-alive>
        </el-main>

        <el-footer class="footer">
          <div class="footer-layout">
            <el-row>
              <a href="https://github.com/ethstorage/chainfeeds" target="_blank">
                <img class="footer-img" src="@/assets/git.png">
              </a>
              <a href="https://twitter.com/EthStorage" target="_blank">
                <img class="footer-img" src="@/assets/tweet.png">
              </a>
              <a href="https://ethstorage.medium.com/" target="_blank">
                <img class="footer-img" src="@/assets/mid.png">
              </a>
              <a href="https://t.me/ethstorage" target="_blank">
                <img class="footer-img" src="@/assets/tel.png">
              </a>
              <a href="https://discord.gg/xhCwaMp7ps" target="_blank">
                <img class="footer-img" src="@/assets/dis.png">
              </a>
            </el-row>
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
import Layout from "@/utils/Layout";

export default {
  name: 'App',
  data() {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  computed: {
    isMobile() {
      return Layout.isMobile();
    },
  },
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          that.timer = false;
        }, 400)
      }

    }
  },
  mounted() {
    this.get_bodyHeight()
  },
  methods: {
    get_bodyHeight() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight;
          that.fullHeight = window.fullHeight;
        })()
      }
    },
    goHome() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#content {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
}

.header {
  height: 104px !important;
  padding: 15px 20px !important;
  border-bottom: 0 !important;
}
.header-main {
  display: flex;
  justify-content: start;
  align-items: center;
}
.header-icon {
  width: 60px;
  cursor: pointer;
}
.header-title {
  font-size: 22px;
  color: #404040;
  margin-left: 5px;
  cursor: pointer;
  font-family: AlibabaPuHuiTiB;
}

.footer {
  padding: 30px !important;
  height: 95px !important;
  background: transparent;
}

.footer-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-img {
  width: 36px;
  margin: 0 10px;
}

@media screen and (max-width: 500px) {
  .header {
    height: 70px !important;
    padding: 15px !important;
  }

  .header-icon {
    width: 40px;
  }
  .header-title {
    font-size: 18px;
  }

  .footer-img {
    width: 28px;
  }
}
</style>
