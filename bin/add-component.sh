#!/bin/bash

component=$1
dir=../src/components/${component}
mkdir ${dir}
cd ${dir}

# 目录一般由.vue .mobile.less .less组成
echo "<template>

</template>
<script>
  export default {

  };
</script>
<style lang=\"less\">
  @import './index';
</style>
" > ./${component}.vue

echo "@charset \"UTF-8\";

@import \"../../helpers/styles/func.less\";
@import \"../../helpers/styles/variables.less\";
" > ./${component}.mobile.less

cp ./${component}.mobile.less ${component}.less
