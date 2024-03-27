<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios';
import { onMounted, ref, watchEffect, watch } from 'vue';

const changcolorsearch = ref(false)
const setshowclose = ref(false)
const valuesearch = ref('')


watch(valuesearch, (newValuesearch) => {
    if (newValuesearch.length > 0) {
        setshowclose.value = true
    } else {
        setshowclose.value = false
    }
})

const searchchange = () => {
    changcolorsearch.value = true
}

const togglePopup = () => {
    changcolorsearch.value = false
}


</script>
<template>
    <div class="container-rightbar">
        <div class="item-container-rightbar">
            <!-- search bar -->
            <div class="header-search-rightbar">
                <div @click="searchchange" class="item-search" :class="{ 'changcolor': changcolorsearch == true }">
                    <label for="search"><img src="/glass.svg" alt=""></label>
                    <input v-model="valuesearch" type="text" id="search">
                    <div class="close-search" :class="{ 'setshow': setshowclose === true }">
                        <img src="/close.svg" alt="">
                    </div>

                </div>
            </div>
            <!-- end search bar -->

            <!-- popup search -->
            <div @click="togglePopup" style="  background:none; height: 100%;" v-if="changcolorsearch">
                <div class="popup">
                    <div class="popup-content">
                        <p>ลองค้นหาผู้คน รายชื่อ หรือคำสำคัญ</p>
                    </div>
                </div>
            </div>
            <!-- end popup search -->

            <div class="scolling">
                <!-- registerprime -->
                <div class="registerprime">
                    <div class="item-regirterprime">
                        <div class="title-registerprime">
                            <p>สมัครสมาชิก Premium</p>
                        </div>
                        <div class="content-registerprime">
                            <p>สมัครสมาชิกเพื่อปลดล็อคคุณสมบัติใหม่ และหากมีสิทธิ์ คุณก็จะได้รับส่วนแบ่งรายได้จากโฆษณา
                            </p>
                        </div>
                        <div class="btn-registerprime">
                            <button>สมัครรับข้อมูล</button>
                        </div>
                    </div>
                </div>
                <!-- end registerprime -->

                <!-- hastag -->
                <div class="container-hastag">
                    <div class="item-hastag">
                        <div class="title-hastag">
                            <p>ความนิยมสำหรับคุณ</p>
                        </div>
                        <div class="content-hastag">
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#ช้างศึก</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>32K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="container-item-hastag">
                                <div style="margin: 10px; display: flex; justify-content: space-between; width: 100%;">
                                    <div class="item-content-hastag">
                                        <div class="tag-location">
                                            <p>ได้รับความนิยมใน ไทย</p>
                                        </div>
                                        <div class="title-item-hastag">
                                            <p>#สมรสเท่าเทียม</p>
                                        </div>
                                        <div class="view-tag">
                                            <p>65.5K posts</p>
                                        </div>
                                    </div>
                                    <div class="more-item-hastag">
                                        <img src="/dot.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="more-containerhastag">
                            <p>แสดงเพิ่มเติม</p>
                        </div>
                    </div>
                </div>

                <!-- end -->

                <!-- footer -->
                <div class="footer-rightbar">
                    <p>ข้อตกลงการให้บริการ
                        นโยบายความเป็นส่วนตัว
                        นโยบายคุกกี้
                        การเข้าถึง
                        ข้อมูลโฆษณา
                        เพิ่มเติม
                        © 2024 X Corp.</p>
                </div>

                <!-- end footer -->
            </div>
        </div>
    </div>
</template>
<style>
@media only screen and (max-width: 1400px) {

    /* pupup */
    .popup {
        height: 100px;
        width: 100%;
        margin-top: 4px;
        border-radius: 12px;
        box-shadow: 0 0 5px white;
        background-color: #000000;
    }

    .popup-content {
        text-align: center;
        color: aliceblue;
        height: 52px;
        padding-top: 14px;
        width: 100%;
    }

    /* end popup */


    .container-rightbar {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        /* border-left: 1px solid rgba(255,255,255,1.00); */
    }

    .item-container-rightbar {
        width: 90%;
        height: 100%;
    }

    /* header-search-rightbar */
    .header-search-rightbar {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
        width: 100%;
        margin-top: 5px;

    }

    .item-search {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 23px;
        border: 1px solid rgb(160, 160, 160);
    }

    .item-search.changcolor {
        border: 1px solid rgba(29, 155, 244);
    }


    .item-search label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 50%;
        padding: 10px;
    }

    .item-search img {
        width: 15px;
        height: 15px;
    }

    .item-search input {
        width: 75%;
        color: white;
        font-size: 15px;
        border: none;
        background: none;
        outline: none;
        height: 100%;
    }

    .close-search {
        display: none;

    }

    .close-search.setshow {
        display: block;
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .close-search img {
        width: 20px;
        height: 20px;
    }

    /* end header */

    /* resgister prime */
    .scolling {
        width: 93%;
        height: 90%;
        padding: 10px;
        overflow: scroll;
    }

    .registerprime {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 13px;
        height: 164px;
        width: 100%;
        margin-top: 6px;
        color: #ffffff;
        box-shadow: 0 0 5px white;
        background-color: rgb(0, 0, 0);
    }

    .item-regirterprime {
        width: 90%;
        height: 90%;
    }

    .title-registerprime {
        font-size: 24px;
        padding-bottom: 8px;
    }

    .content-registerprime {
        font-size: 15px;
        margin-bottom: 8px;
    }

    .btn-registerprime {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 126px;
        height: 36px;
        border-radius: 23px;
        background-color: rgba(29, 155, 244);
    }

    .btn-registerprime:hover{
        background-color: #aaa;
        cursor: pointer;
    }

    .btn-registerprime button {
        cursor: pointer;
        color: white;
        background: none;
        border: none;
    }

    /* end registerprime */

    /*  hastag */
    .container-hastag {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 920px;
        margin-bottom: 20px;
        width: 100%;
        margin-top: 20px;
        border-radius: 13px;
        box-shadow: 0 0 5px white;
        background-color: #000000;
    }

    .item-hastag {
        width: 100%;
        height: 100%;
    }

    .title-hastag {
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        color: white;
        margin: 10px;
    }

    .title-hastag p {
        width: 100%;
        height: 24px;
        font-size: 20px;
    }

    .content-hastag {
        width: 100%;
        height: 85%;
        margin-top: 4px;
    }

    .container-item-hastag {
        
        color: white;
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .container-item-hastag:hover {
        background-color: #aaa;
        cursor: pointer;
    }

    .tag-location p {
        font-size: 13px;
    }

    .more-item-hastag {
        display: flex;
        justify-content: end;
        width: 20%;
        height: 100%;
    }

    .more-item-hastag img {
        width: 22px;
        height: 22px;
    }

    .more-containerhastag {
        height: 28px;
        margin-top: 35px;
        width: 100%;
        font-size: 14px;
        cursor: pointer;
        padding-left: 10px;
        color: rgba(29, 155, 244);
    }

    /* end hastag */

    /* <!-- footer --> */

    .footer-rightbar {
        font-size: 14px;
        border-top: 1px solid rgb(160, 160, 160);
        color: white;
        padding: 10px;
    }

    /* <!-- end footer --> */

}


@media only screen and (max-width: 989px) {
    .container-rightbar {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        /* border-left: 1px solid rgba(255,255,255,1.00); */
    }

}
</style>
