<template>
    <div class="container-topbar">
        <div class="centerbox">
            <div class="logo-topbar">
                <div class="conten-logo-topbar">
                    <img src="/logo.png" alt="">
                </div>
            </div>
            <div class="center-topbar">
                <div class="foryou-topbar">
                    <p>สำหรับคุณ</p>
                </div>
                <div class="follower-topbar">
                    <p>ผู้ติดตาม</p>
                </div>
            </div>
            <div class="search-topbar">
                <input type="text">
            </div>
        </div>
    </div>
</template>
<style>
@media only screen and (max-width: 1400px) {
    .container-topbar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 10%;
    }

    .centerbox {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .logo-topbar {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        width: 33%;
    }

    .conten-logo-topbar {
        width: 50px;
        height: 50px;
        padding-left: 17px;
    }

    .conten-logo-topbar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .center-topbar {
        width: 33%;
        border-left: 2px solid rgb(160, 160, 160);
        border-right: 2px solid rgb(160, 160, 160);
    }

    .search-topbar {
        width: 33%;
        /* border-left: 1px solid rgba(255, 255, 255, 1.00); */

    }

}

@media only screen and (max-width: 989px) {
    .search-topbar {
        display: none;
        /* เพิ่มสไตล์นี้ */
          border: 1px solid red;
    }

    .center-topbar {
        padding-left: 00px;
        display: flex;
        width: 91%;
        border-left: 2px solid rgb(160, 160, 160);
        border-right: 2px solid rgb(160, 160, 160);
    }

    .logo-topbar {
        width: 9%;
    }

    .conten-logo-topbar {
        height: 50px;
        margin-left: -17px;
    }

    .conten-logo-topbar img {
        width: 100%;
        height: 100%;
    }

}
</style>