<template>
    <section id="sec-1" class="container">
            <div id="section" class="row mt-5 mb-5">
                <h3 class="titleB">Section 1</h3>
                <div class="col">
                        <img src="../assets/images/section.png">
                </div>
                <div class="col m-auto">
                        <h3 class="titleA">
                            Section 1
                        </h3>
                        <table>
                            <tr>
                                <td class="td-main">Population</td>
                                <td>Total (1,415,384), Rank(40th)</td>
                            </tr>
                            <tr>
                               <td class="td-main">Dimensions</td>
                               <td>Length 1,522 mi (2500 km), width n/a mi (n/a km) </td>
                           </tr>
                           <tr>
                               <td class="td-main">Language</td>
                               <td>Official Languages English and Hawaaian </td>
                           </tr>
                           <tr>
                               <td class="td-main">Largest city</td>
                               <td>The capital (Honolulu) </td>
                           </tr>
                           <tr>
                               <td class="td-main">Largest metro</td>
                               <td>The largest metro in island of O'ahu </td>
                           </tr>
                           <tr>
                               <td class="td-main">Elevation</td>
                               <td>Highest Elevation 13,796 </td>
                           </tr>
                        </table>
                </div>

            </div>
            <hr>
        </section>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {  
    scroll-behavior: smooth;  
}




/* section 1 */

.section-1 {
    display: flex;
    justify-content: space-around;
    background-color: rgb(243, 243, 243);
    padding-top: 60px;
    padding-bottom: 60px;
}

.titleB {
    display: none;
}

a {
    text-decoration: none;
    color: gray;
}

.td-main {
    color: gray;
}

tr, td {
    text-align: left;
    padding: 8px;
}




@media(max-width: 735px) {
   .col img {
       width: 350px;
   }
   .titleB {
       text-align: center;
   }
}
</style>