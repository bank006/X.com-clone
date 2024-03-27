<script setup>


</script>
<template>
    <div class="container-leftbar">
        <!-- header -->
        <div class="logo-icon-leftbar">
            <div class="conten-logo-left">
                <img src="/logo.png" alt="">
            </div>
        </div>
        <!-- body -->
        <div class="item-body-leftbar">
            <div class="icons-leftbar">
                <div class="hover-icons">
                    <img src="/house-white.svg" alt="">
                    <p>หน้าแรก</p>
                </div>
            </div>
            <div class="icons-leftbar">
                <div class="hover-icons">
                    <img src="/search.svg" alt="">
                    <p>ค้นหา</p>
                </div>
            </div>
            <div class="icons-leftbar">
                <div class="hover-icons">
                    <div class="box-noti">
                        <!-- <div>
                            <p>1</p>
                        </div> -->
                        <div>
                            <img src="/bell.svg" alt="">
                        </div>
                    </div>
                    <p>การแจ้งเตือน</p>
                </div>
            </div>
            <div class="icons-leftbar">
                <div class="hover-icons">
                    <img src="/mail.svg" alt="">
                    <p>ข้อความ</p>
                </div>
            </div>
            <div class="icons-leftbar">
                <div class="hover-icons">
                    <img src="/list.svg" alt="">
                    <p>รายชื่อ</p>
                </div>
            </div>
            <div class="icons-group-leftbar">
                <div class="hover-icons">
                    <img src="/group.svg" alt="">
                    <p>ชุมชน</p>
                </div>
            </div>
            <div class="iconslogo-leftbar">
                <div class="hover-icons">
                    <img src="/logox.jpeg" alt="">
                    <p>พรีเมี่ยม</p>
                </div>
            </div>
            <div class="icons-leftbar">
                <div class="hover-icons">
                    <img src="/user.svg" alt="">
                    <p>ข้อมูลส่วนตัว</p>
                </div>
            </div>
            <div class="icons-leftbar">
                <div class="hover-icons">
                    <img src="/dot.svg" alt="">
                    <p>เพิ่มเติม</p>
                </div>
            </div>
            <div class="post-icons">
                <div class="item-post-icons">
                    <p class="post">โพสต์</p>
                    <div class="item-feather-icons">
                        <img src="/feather.svg" alt="">
                    </div>
                </div>
            </div>
            <!-- footer -->
            <div class="footer-icons-leftbar">
                <!-- <div class="hover-icons"></div> -->
                <div class="footer-item-leftbar">
                    <div class="footer-img-profile">
                        <img src="/profile.png" alt="">
                    </div>
                    <div class="footer-name-profile">
                        <p>Adame</p>
                        <p style="font-size: 13px; color: rgba(207,217,222,1.00);">@email.com</p>
                    </div>
                    <div class="footer-setting-leftbar">
                        <div class="footer-item-setting">
                            <img src="/dot.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@media only screen and (max-width: 1400px) {
    .container-leftbar {
        width: 90%;
        height: 100%;
        padding-left: 20px;
    }

    .logo-icon-leftbar {
        width: 110%;
        height: 10%;
        display: flex;
        align-items: center;
        margin: 2px;
    }

    .conten-logo-left {
        width: 60px;
        height: 50px;

    }

    .conten-logo-left img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    .item-body-leftbar {
        width: 100%;
        height: 100%;

    }

    .icons-leftbar {
        padding-left: 10px;
        margin-top: 5px;
        display: flex;
        align-items: center;
        text-align: center;
        width: 50%;
        height: 6%;
        color: white;
        width: 100%;

    }

    .hover-icons {
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        padding: 0px 10px 0px 10px;
        border-radius: 23px;
    }

    .hover-icons:hover{
        cursor: pointer;
        background-color: rgba(195, 192, 192, 0.4);
    }

    .icons-leftbar p {
        margin-left: 15px;
    }

    .icons-leftbar img {
        width: 25px;
        height: 25px;
    }

    .iconslogo-leftbar {
        padding-left: 10px;
        margin-top: 5px;
        display: flex;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 8%;
        color: white;
        width: 100%;
    }

    .iconslogo-leftbar p {
        margin-left: 15px;
    }

    .iconslogo-leftbar img {
        width: 25px;
        height: 25px;
        object-fit: cover;
    }

    .icons-group-leftbar {
        padding-left: 10px;
        margin-top: 5px;
        display: flex;
        align-items: center;
        text-align: center;
        width: 50%;
        height: 6%;
        color: white;
        width: 100%;
    }

    .icons-group-leftbar p {
        margin-left: 15px;
    }

    .icons-group-leftbar img {
        width: 25px;
        height: 25px;
    }

    .box-noti p {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        /* top: 100px; */
        left: 40px;
        padding: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        background-color: rgba(29, 155, 240, 1.00);
     
    }

    .post-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8%;
        margin-top: 5px;
        

    }

    .item-post-icons {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 23px;
        width: 90%;
        height: 90%;
        background-color: rgba(29, 155, 240, 1.00);
    }

    .item-post-icons:hover{
        cursor: pointer;
        background-color: rgba(207,217,222,1.00);
    }

    .footer-icons-leftbar {
        height: 10%;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .footer-item-leftbar {
        color: white;
        width: 90%;
        height: 90%;
        align-items: center;
        display: flex;
        padding: 4px;
        border-radius: 23px;
        /* border: 1px solid white; */
    }
    .footer-item-leftbar:hover{
        background-color: rgba(195, 192, 192, 0.4);
    }

    .footer-img-profile {
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-img-profile img {
        width: 50px;
        height: 50px;
        margin: 16px;
    }

    .footer-setting-leftbar {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 30%;
        height: 90%;
    }

    .footer-item-setting {
        display: flex;
        align-items: center;
        width: 50%;
        height: 100%;
    }

    .footer-item-setting img{
        width: 30px;
        height: 30px;
    }

}

@media only screen and (max-width: 989px) {

    .container-leftbar {
        width: 90px;
        height: 100%;
        margin-left: -20px;
    }
    .hover-icons{
        margin-left: 5px;
    }

    .logo-icon-leftbar {
        width: 70px;
        height: 8%;
    }

    .item-body-leftbar {
        margin-top: 10px;
    }

    .conten-logo-left {
        width: 50px;
        height: 40px;
        padding-left: 10px;
    }

    .conten-logo-left img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .icons-leftbar {
        margin-top: 2px;
        display: flex;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 8%;
        color: white;
        width: 100%;
    }


    .iconslogo-leftbar p {
        display: none;
    }

    .icons-leftbar p {
        display: none;
    }

    .icons-group-leftbar {
        display: none;
    }

    .icons-leftbar img {
        display: flex;
        width: 25px;
        height: 25px;

    }

    .container-leftbar {
        width: 10%;
    }

    /* .box-noti p {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 100px;
        left: 66px;
        padding: 5px;
        width: 7px;
        height: 7px;
        border-radius: 50px;
        background-color: rgba(29, 155, 240, 1.00);
    } */

    .post {
        display: none;
    }

    .item-post-icons {
        margin-left: 54px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    .item-feather-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    .item-feather-icons img {
        width: 58%;
        height: 58%;
    }

    .footer-icons-leftbar {
        width: 100%;
        margin-left: 28px;
        margin-top: 25px;
    }

    .footer-img-profile img {
        width: 40px;
        height: 40px;
    }

    .footer-name-profile {
        display: none;
    }

    .footer-setting-leftbar {
        display: none;
    }

    .post-icons{
        margin-left: 10px;
    }

}

@media only screen and (max-width: 989px) {

}
</style>