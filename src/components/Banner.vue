<template>
    <header>
        <div id="banner" class="container-fluid">
                <div class="title-container">
                    <h1 class="title">
                        What it's like to travel to Hawaii right now
                    </h1>
                    <hr class="divider">
                    <h5 class="sub-title">Free flights to remote workers</h5>
                </div>
        </div>
    </header>
</template>

<style>
#banner {
    background-image: linear-gradient(to left, rgba(150, 112, 112, 0.253), rgba(0, 0, 0, 0.73)), url(../assets/images/banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    position: relative;
}

.title-container {
    width: 400px;
    color: #FFFFFF;
    position: absolute;
    top: 20%;
    left: 5%;
}

.title {
    font-weight: 400;
    font-size: 50px;
    margin-bottom: 15px;
}

.sub-title {
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;
}

.divider {
    width: 240px;
}
</style>