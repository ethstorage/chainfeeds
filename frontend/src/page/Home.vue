<template>
  <div class="home">
    <div v-if="this.blogList.length <= 0" class="domain-loading" v-loading="true"/>
    <el-card v-else class="post-card" v-for="blog in blogList" :key="blog.id" >
      <div class="post-preview" @click.stop="goBlog(blog.id)">
        <img :src="blog.cover" class="post-preview-image"/>
        <div class="post-preview-content">
          <div class="post-preview-title">
            {{ blog.title }}
          </div>
          <div class="post-preview-description">
            {{ blog.description }}
          </div>
          <div class="post-ufi">
            <div>
              {{ blog.user }}
            </div>
            <div class="post-date">
              {{ blog.publishTime }}
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>

import {getBlogList} from "@/utils/web3";

export default {
  name: 'Home',
  asyncComputed: {
    blogList: {
      async get() {
        return await getBlogList();
      },
      default: [],
    },
  },
  methods: {
    goBlog(id) {
      this.$router.push({path: "/blog/" + id});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 40px;
}

.domain-loading {
  min-width: 40vw;
  min-height: 50vh;
}
.domain-loading >>> .el-loading-mask{
  background: transparent !important;
}

.post-card {
  margin: 10px;
  cursor: pointer;
}
.post-card:hover {
  background: rgba(0, 0, 0, 0.05);
}

.post-preview {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
.post-preview-image {
  width: 168px;
  height: 121px;
}
.post-preview-content {
  height: 121px;
  width: 530px;
  margin-left: 25px;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: start;
}
.post-preview-title {
  font-size: 18px;
  color: #404040;
  width: 100%;
  text-align: left;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow:hidden;
  font-family: AlibabaPuHuiTiM;
}
.post-preview-description {
  font-size: 16px;
  color: #8c8c8c;
  margin: 4px 0;
  width: 100%;
  text-align: left;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-family: AlibabaPuHuiTiR;
}
.post-ufi {
  font-size: 14px;
  color: #8c8c8c;
  display: flex;
  flex-flow: row;
  text-align: left;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow:hidden;
  font-family: AlibabaPuHuiTiB;
}
.post-date {
  margin-left: 10px;
}

@media screen and (max-width: 500px) {
  .home {
    padding: 0;
    width: 100%;
    margin-top: -15px;
  }

  .post-card {
    width: 100%;
    margin: 5px 0;
    padding: 0;
  }

  .post-preview-image {
    width: 80px;
    height: 70px;
  }
  .post-preview-content {
    width: 100%;
    height: 70px;
    margin-left: 10px;
  }
  .post-preview-title {
    font-size: 14px;
    width: 100%;
  }
  .post-preview-description {
    font-size: 12px;
    width: 100%;
  }
  .post-ufi {
    font-size: 12px;
  }
  .post-date {
    margin-left: 10px;
  }
}
</style>
