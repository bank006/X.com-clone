<template>
    <div class="container-topbar">
        <div class="centerbox">
            <div class="logo-topbar">
                <img width="50" height="50" src="/logo.png" alt="">
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
.container-topbar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    border: 1px solid black;
}

.centerbox {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
}

.logo-topbar {
    width: 33%;
    border-right: 1px solid black;
}

.center-topbar {
    width: 33%;
}

.search-topbar {
    width: 33%;
    border-left: 1px solid black;
}

@media only screen and (max-width: 900px) {
    .search-topbar {
        border: 1px solid black;
        display: none;
        /* เพิ่มสไตล์นี้ */
    }

}
</style>