<template>
  <div>
    <div v-if="!this.content" class="domain-loading" v-loading="true"/>
    <div v-else class="profile-card" v-html="this.content"/>
  </div>
</template>

<script>
import {getBlog} from "@/utils/web3";

export default {
  name: 'Blog',
  asyncComputed: {
    content: {
      async get() {
        return await getBlog(this.$route.params.id);
      },
      default: "",
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.domain-loading {
  min-width: 40vw;
  min-height: 50vh;
}
.domain-loading >>> .el-loading-mask{
  background: transparent !important;
}

.profile-card {
  background: transparent;
  text-align: left;
}
.profile-card >>> .single-post-container {
  background: transparent !important;
}

@media screen and (max-width: 500px) {
  .profile-card {
    margin-top: 5px;
  }
}
</style>
