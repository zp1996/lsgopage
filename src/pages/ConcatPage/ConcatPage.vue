<template>
  <DetailContainer img="bg_about_08.jpg" title="联系我们" type="white">
    <div slot="content">
      <div class="concat-wrapper">
        <h2 class="concat-name">联系我们</h2>
        <h2 class="concat-enname">Concat Us</h2>
        <ul class="concat-list">
          <li>公司地址: {{address}}</li>
          <li>邮编: {{zip}}</li>
          <li>电话: {{phone}}</li>
          <li>传真: {{fax}}</li>
          <li>Email: {{email}}</li>
        </ul>
      </div>
      <div id="map"></div>
    </div>
  </DetailContainer>
</template>

<script>
  import { getConcatData } from 'Services/introduction';
  import { getData } from 'Utils/vue-helper';

  export default {
    data() {
      return {
        address: '',
        zip: '',
        phone: '',
        fax: '',
        email: '',
        map: false,
      };
    },
    created() {
      getData(getConcatData, this);
    },
    mounted() {
      const script = document.createElement('script');
      if (window.BMap == null) {
        window.BMap_loadScriptTime = (new Date()).getTime();

        script.src = 'http://api.map.baidu.com/getscript?v=2.0&ak=4bYBzhXyWMVoOUuSYpgmtEQE&services=&t=20171212143337';
        script.type = 'text/javascript';

        document.head.appendChild(script);

        script.onload = () => {
          this.createMap();
        };
      } else {
        this.createMap();
      }
    },
    updated() {
      if (!this.map && this.address) {
        this.createMap();
      }
    },
    methods: {
      createMap() {
        if (window.BMap && this.address) {
          this.map = true;

          const Map = window.BMap;
          const map = new Map.Map('map');
          map.centerAndZoom(new Map.Point(116.404, 39.915), 11);

          const Geo = new Map.Geocoder();
          Geo.getPoint(
            this.address,
            function(point) {     // eslint-disable-line
              if (point) {
                map.centerAndZoom(point, 16);
                map.addOverlay(new Map.Marker(point));
              }
            },
            this.address.slice(0, this.address.indexOf('市') + 1),
          );
        }
      },
    },
  };
</script>

<style lang="less">
  @import './index';
  @import "../../helpers/styles/variables.less";

  .concat-wrapper {
    text-align: left;
  }
  .concat-name {
    color: @base-color;
  }
  .concat-enname {
    color: #ccc;
  }
</style>
