<template>
    <section id="sec-2" class="container mt-5 mb-5">
            <h3>Section 2</h3>
            <div class="timeline">
                <div class="cont">
                  <div id="section1" class="container">
                          <div class="date" style="display: flex">
                            <a id="anc-1" class="anc" href="">1789</a>
                            <span id="arrow1">&#8594;</span>
                            <article id="article-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer.
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                         </article>
                          </div>
                  </div>
                </div>
                <div class="cont">
                    <div id="section2" class="container">
                            <div class="date" style="display: flex">
                                <a id="anc-2" class="anc" href="">1820</a>
                                <span id="arrow2">&#8594;</span>
                                <article id="article-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type 
                           </article>
                              </div>
                    </div>
                </div>
                <div class="cont">
                    <div class="container">
                            <div class="date" style="display: flex">
                                <a id="anc-3" class="anc" href="">1860</a>
                                <span id="arrow3">&#8594;</span>
                              <article id="article-3">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type 
                              specimen book. It has survived not only five centuries, 
                              but also the leap into electronic typesetting, remaining essentially unchanged.
                              specimen book. It has survived not only five centuries, 
                              but also the leap into electronic typesetting, remaining essentially unchanged.
                           </article>
                        </div>
                    </div>
                  </div>
                <div class="cont">
                    <div class="container">
                            <div class="date" style="display: flex">
                                <a id="anc-4" class="anc" href="">1910</a>
                                <span id="arrow4">&#8594;</span>
                                 <article id="article-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type 
                           </article>
                            </div>
                        </div>
                </div>
              </div>
              <hr>
        </section>
</template>

<style>
/* section 2 */

.section-2 {
    background-color: rgb(243, 243, 243);
    padding-left: 30px;
}

#sec-2 {
    margin-bottom: 30px;
    padding-top: 40px;
}

.date-1 {
    display: flex;
    align-items: baseline;
}

.date {
    color: rgb(24, 24, 153);
    font-size: 30px;
}


/* The actual timeline (the vertical ruler) */
.timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 70px;
  }
  
  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: rgb(190, 190, 190);
    top: 0;
    bottom: 0;
    left: -30px;
    margin-left: -3px;
  }
  
  /* Container around content */
  .cont {
    padding: 10px;
    position: relative;
    background-color: inherit;
  }
  
  /* The circles on the timeline */
  .cont::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    left: -36px;
    background-color: rgb(190, 190, 190);
    border: 4px solid rgb(190, 190, 190);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  
 
  /* Place the container to the right */
  .right {
    left: 50%;
  }
 
  /* The actual content */
  .content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    display: flex;
  }
  
  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media (max-width: 1270px) {
    .timeline {
      max-width: 1000px;
    }
  }
  @media (max-width: 1100px) {
    .timeline {
      max-width: 800px;
    }
  }
  @media (max-width: 860px) {
    .timeline {
      max-width: 600px;
    }
  }
  @media (max-width: 660px) {
    .timeline {
      max-width: 400px;
    }
  }

  @media (max-width: 600px) {
    .timeline {
      max-width: 300px;
    }
  }

  @media (max-width: 500px) {
    .timeline {
      max-width: 200px;
    }
  }
  
 #article-1 {
    display: none;
}
#article-2 {
    display: none;
}
#article-3 {
    display: none;
}
#article-4 {
    display: none;
}
 
#anc-1 {
    color: rgb(18, 18, 119);
    font-weight: 600;
    font-size: 20px;
}

#anc-2 {
    color: rgb(18, 18, 119);
    font-weight: 600;
    font-size: 20px;
}

#anc-3 {
    color: rgb(18, 18, 119);
    font-weight: 600;
    font-size: 20px;
}

#anc-4 {
    color: rgb(18, 18, 119);
    font-weight: 600;
    font-size: 20px;
}

.date {
    font-size: 15px;
    color: black;
}

#arrow1 {
    color: rgb(18, 18, 119); 
    font-size: 50px; 
    font-family: emoji; 
    margin-top: -25px; 
    margin-left: 10px;
}

#arrow2 {
    color: rgb(18, 18, 119); 
    font-size: 50px; 
    font-family: emoji; 
    margin-top: -25px; 
    margin-left: 10px;
}

#arrow3 {
    color: rgb(18, 18, 119); 
    font-size: 50px; 
    font-family: emoji; 
    margin-top: -25px; 
    margin-left: 10px;
}

#arrow4 {
    color: rgb(18, 18, 119); 
    font-size: 50px; 
    font-family: emoji; 
    margin-top: -25px; 
    margin-left: 10px;
}

</style>