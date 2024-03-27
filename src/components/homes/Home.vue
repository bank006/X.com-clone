<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios';
import { onMounted, ref, watchEffect, watch } from 'vue';

const router = useRouter();
const handleClick = () => {
  // Navigate to '/about'
  router.push({ name: 'Post', query: { postId: 1 } })
}

const responseData = ref(null);

onMounted(() => {
  fetchData();
});

const fetchData = () => {
  axios.get('http://localhost:4001/product/joinproduct')
    .then(response => {
      // เก็บข้อมูลที่ได้รับจากการเรียก API ใน ref
      responseData.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

const color = ref('1');
const setColor = (selectedColor) => {
  color.value = selectedColor;
};
const rests = ref(false)
const changcolor = ref(false)
const changebtn = ref('')

watch(changebtn, (newValue) => {
  if (newValue.length > 0) {
    changcolor.value = true
  } else {
    changcolor.value = false
  }
})

const rest = () => {
  rests.value = true;
}

const videoURL = 'test.mp4';

</script>
<template>
  <div class="container-Home">
    <!-- Header -->
    <div class="header-home">
      <div class="item-header-home">
        <div @click="setColor('1')" class="content-item-header-home">
          <div style="height: 100%;">
            <div style=" height: 87%; ">
              <div class="content-header">
                <p>สำหรับคุณ</p>
              </div>
            </div>
            <div class="line" :class="{ 'active': color === '1' }"></div>
          </div>
        </div>
        <div @click="setColor('2')" class="content-item-header-home">
          <div style="height: 100%;">
            <div style=" height: 87%; ">
              <div class="content-header">
                <p>กำลังติดตาม</p>
              </div>
            </div>
            <div class="line" :class="{ 'active': color === '2' }"></div>
          </div>
        </div>
        <div class="gear-item-header">
          <img src="/gear.svg" alt="">
        </div>
      </div>
    </div>
    <!-- body -->
    <div class="container-body-home">
      <div class="center-body-home">
        <!-- postfrom -->
        <div class="alltem-postfrom" :class="{ 'restac': rests === true }">
          <div class="postfrom-body-home">
            <div class="item-postfrom-body-home">
              <img src="/profile.png" alt="">
            </div>
            <!-- listpost -->
            <div class="list-postfrom-home">
              <div @click="rest()" class="input-postfome-home">
                <input v-model="changebtn" type="text" placeholder="มีอะไรเกิดขึ้นบ้าง">
                <div class="rest" :class="{ 'restac': rests === true }">
                  <div>
                    <img width="20" height="20" src="/word.svg" alt="">
                  </div>
                  <div>
                    <p>ทุกคนสามารถตอบกลับ</p>
                  </div>

                </div>
              </div>

              <div class="all-item-list" :class="{ 'restac': rests === true }">
                <div class="item-list-home">
                  <img src="/imageicons.svg" alt="" />
                </div>
                <div class="item-list-home">
                  <img src="/gift.svg" alt="" />
                </div>
                <div class="item-list-home">
                  <img src="/list-solid.svg" alt="" />
                </div>
                <div class="item-list-home">
                  <img src="/face-smile.svg" alt="" />
                </div>
                <div class="item-list-home">
                  <img src="/calendar.svg" alt="" />
                </div>
                <div class="item-list-home">
                  <img src="/location.svg" alt="" />
                </div>
                <div class="item-btn-post">
                  <div class="content-btn-post" :class="{ 'changecolor ': changcolor == true }">
                    <button>โพสต์</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end header -->
        <!-- content post -->
        <div class="container-post">
          <div class="item-container-post">
            <div class="container-profile">
              <div class="img-profile-post">
                <img src="/profile.png" alt="">
              </div>
            </div>
            <div class="allcontent">
              <div class="content-user-post">
                <div class="detail-profile">
                  <div class="name-profile">
                    <p>Nature amazing</p>
                    <p>@NATUREAMAING</p>
                    <p>9 Hr.</p>
                  </div>
                  <div class="description-post">
                    <p>Imagine running for your life and this is the fastest you can go</p>
                  </div>
                </div>
                <div class="more-profile">
                  <img width="20" height="20" src="/dot.svg" alt="">
                </div>
              </div>
              <div class="vedio-post">
                <video controls>
                  <source :src="videoURL" type="video/mp4">
                </video>
              </div>
              <div class="active-comment">
                <div class="conten-commet">
                  <img src="/message.svg" alt="">
                  <p>744</p>
                </div>
                <div class="conten-commet">
                  <img src="/reloade.svg" alt="">
                  <p>744</p>
                </div>
                <div class="conten-commet">
                  <img src="/heart.svg" alt="">
                  <p>744</p>
                </div>
                <div class="conten-commet">
                  <img src="/chart.svg" alt="">
                  <p>744</p>
                </div>
                <div class="conten-commets">
                  <img src="/bookmark.svg" alt="">
                  <img src="/uploade.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end post -->
    </div>
    <!-- <p>Homes</p>
    <button @click="handleClick">post</button>
    <button @click="fetchData">click</button>
    <button @click="add">add</button>
    <div v-for="response in responseData" :key="responseData.id">
      <p>{{ response._id }}</p>
      <p>{{ response.nameProduct }}</p>
    </div> -->
  </div>
</template>
<style>
.container-Home {
  width: 100%;
  height: 100%;
  overflow: scroll;
  height: 100%;
  border: 1px solid rgb(160, 160, 160);

}

.header-home {
  display: flex;
  align-items: end;
  justify-content: center;
  color: white;
  height: 8%;
  border-bottom: 1px solid rgb(160, 160, 160);
}


.item-header-home {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.content-item-header-home {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}

.content-item-header-home:hover {
  background-color: rgba(195, 192, 192, 0.4);
}

.content-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}

.line {
  display: none;
  width: 92%;
  border-radius: 10px;
  border: 3px solid rgba(29, 155, 244);
}

.line.active {
  display: block;
}


.gear-item-header {
  width: 20px;
  height: 20px;
  margin: 10px;
}

.rest {
  display: none;
}

.rest.restac {
  display: flex;
  align-items: center;
  height: 30px;
  width: 90%;
  margin-left: 20px;
  font-size: 15px;
  border-bottom: 1px solid rgb(160, 160, 160);
}

.rest.restac p {
  color: #1D9BF0;
  padding-bottom: 6px;
  margin-left: 5px;
  cursor: pointer;
}

/* body */

.container-body-home {
  width: 100%;
  height: 92%;
}

.center-body-home {
  height: 100%;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;

}

/* postfrom */
.alltem-postfrom {
  display: flex;
  height: 90px;
  padding: 15px;
  border-bottom: 1px solid rgb(160, 160, 160);
}

.alltem-postfrom.restac {
  padding-bottom: 60px;
}

.postfrom-body-home {
  width: 100%;
  height: 100%;
  display: flex;
}

.item-postfrom-body-home {
  color: white;
  display: flex;
  justify-content: center;
  width: 10%;
  height: 106px;
}

.item-postfrom-body-home img {
  width: 44px;
  height: 44px;
}


.list-postfrom-home {
  height: 100%;
  width: 100%;
}

.input-postfome-home {
  height: 40px;
  width: 100%;
}

.list-postfrom-home input {
  color: white;
  font-size: 23px;
  width: 100%;
  height: 52px;
  background: none;
  border: none;
  outline: none;
  margin-left: 20px;
}

.all-item-list {
  margin-top: 20px;
  align-items: center;
  display: flex;
}

.all-item-list.restac {
  margin-top: 60px;
}

.item-list-home {
  width: 25px;
  height: 25px;
  margin-right: 20px;
  cursor: pointer;
}

.item-list-home img {
  width: 100%;
  height: 100%;
  margin-right: 5px;
}

.item-btn-post {
  display: flex;
  justify-content: end;
  height: 34px;
  width: 100%;
}

.content-btn-post {
  height: 100%;
  width: 69px;
  border-radius: 23px;
  filter: grayscale(50%);
  background-color: #1D9BF0;
}

.content-btn-post.changecolor {
  filter: grayscale(0%);

}

.content-btn-post button {
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: white;
  background: none;
  border: none;
}

/* content post */
.container-post {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;

}

.item-container-post {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 16px;
  height: 100%;
  margin-top: 45px;
}

.container-profile {
  height: 100%;
  width: 40px;
}

.img-profile-post {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.img-profile-post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.allcontent {
  width: 85%;
  height: 600px;
  margin-right: 20px;
}

.content-user-post {
  display: flex;
  color: whitesmoke;
  width: 100%;
  height: 8%;

}

.detail-profile {
  width: 95%;
}

.name-profile {
  width: 100%;
  display: flex;
  align-items: center;
}

.name-profile p {
  font-size: 15px;
  margin-right: 10px;
}

.description-post {
  width: 100%;
  font-size: 15px;
}

.vedio-post {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 516px;
  border-radius: 13px;
  box-shadow: 0 0 5px white;
}

.vedio-post video {
  width: 95%;
  height: 95%;
  object-fit: contain;
}

.active-comment{
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  margin-top: 10px;
}

.active-comment img {
  height: 100%;
  width: 20px;
  margin-right: 5px;
}

.conten-commet{
  color: white;
  display: flex;
  margin-right: 70px;
}

.conten-commets{
  color: white;
  display: flex;
}

.conten-commets img{
  height: 90%;
  width: 15px;
}


@media only screen and (max-width: 989px) {
  .container-Home {
    width: 100%;
    overflow: scroll;
    border-left: 5px solid rgb(160, 160, 160);
    border-top: 1px solid rgb(160, 160, 160);
    border-right: 1px solid rgb(160, 160, 160);
    border-bottom: 1px solid rgb(160, 160, 160);
  }
}

@media only screen and (max-width: 989px) {
  .container-Home {
    width: 100%;
  }
}
</style>
