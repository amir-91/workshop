<template>
     <nav>
            <div class="container">
                <ul>
                    <li class="sec-1"><a href="#sec-1">Section 1</a></li>
                    <li class="sec-2"><a href="#sec-2">Section 2</a></li>
                    <li class="sec-3"><a href="#sec-3">Section 3</a></li>
                </ul>
            </div>
        </nav>
</template>

<style>
.menu {
    height: 80px;
}

#menu-bar {
    list-style-type: none;
    color: gray;
    height: 50px;
    font-weight: 500;
    font-size: 20px;
    background-color: white;
    z-index: 100;
}

.list-one {
    border-bottom: 4px solid rgb(24, 24, 153);
    padding-bottom: 28px;
    width: 33%;
    text-align: center;
}

.list-two {
    border-bottom: 4px solid rgb(24, 24, 153);
    padding-bottom: 28px;
    width: 33%;
    text-align: center;
}

.list-three {
    border-bottom: 4px solid rgb(24, 24, 153);
    padding-bottom: 28px;
    width: 33%;
    text-align: center;
}

.content {
    padding: 16px;
  }
  

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
  
  
  .sticky + .content {
    padding-top: 60px;
  }

  nav {
    position: sticky;
    top: 0;
    background-color: #eef0f1;
    z-index: 100;
    }
nav .container {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    }
nav .container ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    }

nav .container ul li a {
    text-decoration: none;
    padding: 10px 20px;
    color: rgb(78, 78, 78);
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    }
nav .container ul li.active {
    background-color:  rgb(168, 168, 243);
    border-radius: 5px;
    transition: 0.3s;
    }
nav .container ul li.active a {
    color: rgb(18, 18, 119);
    }
@media(max-width: 1200px) {
    .titleA {
        display: none;
    }
    #section {
        flex-direction: column;
    }
    .titleB {
        display: block;
    }
}

@media(max-width: 450px) {
    nav .container ul li a {
        font-size: 15px;
    }
}


</style>