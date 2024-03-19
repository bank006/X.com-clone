<template>
    <div class="container-leftbar">
        <div class="icons-leftbar">
            <img  src="/logo.png" alt="">
            <p>left bar</p>
        </div>
        
    </div>
</template>

<style>
    .container-leftbar{
        width: 100%;
        border-right: 1px solid black;
    }

    .icons-leftbar{
        display: flex;
        text-align: center;

    }

    .icons-leftbar img{
        width: 50px;
        height: 50px;
    }


    @media only screen and (max-width: 900px) {
    .icons-leftbar{
        border: 1px solid black;
    }
    .icons-leftbar p {
        display: none;
        /* เพิ่มสไตล์นี้ */
    }

    .icons-leftbar img{
        display: flex;
        width: 50px;
        height: 50px;

    }

}

</style>