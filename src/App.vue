<script setup>
import Leftbar from './components/Leftbar/Leftbar.vue'
import Topbar from './components/Topbar/Topbar.vue'
import Rightbar from './components/rigtbar/Rightbar.vue';
</script>

<template>
  <div id="apps">
    <div class="container-apps">
      <!-- <div  class="item0">
        <Topbar />
      </div> -->
      <div id="centers">
        <div class="item1">
          <Leftbar />
        </div>
        <div class="item2">
          <router-view />
        </div>
        <div class="item3">
          <Rightbar />
        </div>
      </div>
    </div>

  </div>

</template>
<style>
#apps {
  overflow: hidden;
  height: 100vh;
  width: auto;
  overflow: hidden;
  background-color: black;


}

.container-apps {
  width: 100%;
  height: 100%;
  /* border: 1px solid white; */
}

.item1 {
  width: 20%;
}

.item2 {
  width: 50%;
}

.item3 {
  width: 30%;
}

#centers {
  height: 100%;
  width: 100%;
  display: flex;
}

@media only screen and (max-width: 989px) {
  .container-apps {
    width: 100%;
    height: 100%;
  }

  #apps {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-right: 50px;
    padding-left: 50px; */
  }

  .item1 {
    width: 7%;
  }

  .item2 {
    width: 61%;
  }

  .item3 {
    width: 35%;
  }
}

  @media only screen and (max-width: 980px) {
    .container-apps {
      width: 95%;
      height: 100%;
    }

    #apps {
      display: flex;
      justify-content: center;
      align-items: center;
      /* padding-right: 50px;
      padding-left: 120px; */
    }

    .item1 {
      width: 12%;
    }

    .item2 {
      width: 78%;
    }

    .item3 {
      display: none;
    }
  }

  @media only screen and (max-width: 821px) {
    #apps {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 0px;
      padding-left: 0px;
    }

    .item1 {
      width: 12%;
    }

    .item2 {
      width: 88%;
    }

    .item3 {
      display: none;
    }
  }
  </style>
