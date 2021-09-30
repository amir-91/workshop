<template>
    <footer>
        <div id="container" class="row">
            <div id="left" class="col-5">
                <p>All rights reserved.Copyright @2021</p>
            </div>
            <div id="right" class="col-7">
                <a class="anchor" href="">Sitemap</a>
                <a class="anchor" href="">Terms and condition</a>
                <a class="anchor" href="">Privacy</a>
                <a class="anchor" href="">Help</a>
            </div>
        </div>
            <div>
            </div>
    </footer>
</template>

<style>

#container {
    color: #FFFFFF;
    background-color: black;
    height: 50px;
    align-items: center;
    padding: 0 40px;
}
#right {
    text-align: end;
}
#left {
    text-align: start;
}
.anchor {
    color: white;
    text-decoration-line: underline;
    padding: 0 20px;
}
.anchor:hover {
    color: white;
}
p {
    margin-bottom: -0.3rem;
}

@media(max-width: 900px) {
    .anchor {
        padding: 0 5px;
    }
}

@media(max-width: 740px) {
    #container {
    padding: 0 20px;
}
}

@media(max-width: 620px) {
    #container {
        padding: 0 10px;
    }
}
</style>