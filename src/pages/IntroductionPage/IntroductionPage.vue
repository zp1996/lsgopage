<template>
  <DetailContainer img="bg_about.jpg" title="公司介绍"
    stitle="发展惠及社会，科技创新未来" type="white"
  >
    <div slot="content">
      <div class="introduction-content">
        <h2 class="company-name">{{name}}</h2>
        <h2 class="company-enname">{{enName}}</h2>
        <span class="company-introduction">{{introduction}}</span>
      </div>
    </div>
  </DetailContainer>
</template>
<script>
  import { getCompanyData } from 'Services/introduction';

  export default {
    created() {
      getCompanyData()
        .then((res) => {
          delete res._id;       // eslint-disable-line
          Object.keys(res).forEach((key) => {
            this[key] = res[key];
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    data() {
      return {
        loading: false,
        name: '',
        enName: '',
        introduction: '',
      };
    },
  };
</script>

<style lang="less" scoped>
  @import './index';
  @import "../../helpers/styles/variables.less";

  .introduction-content {
    text-align: left;
  }
  .company-introduction {
    line-height: 2;
    color: #666;
  }
  .company-name {
    color: @base-color;
  }
  .company-enname {
    color: #ccc;
  }
</style>
