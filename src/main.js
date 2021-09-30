import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/* handling timeline anchors */

const anc1 = document.getElementById('anc-1')
const anc2 = document.getElementById('anc-2')
const anc3 = document.getElementById('anc-3')
const anc4 = document.getElementById('anc-4')

const anc = document.querySelectorAll('a')
const article = document.querySelectorAll('article')
const arrow = document.querySelectorAll('span')

const toggleDate = (date) => {
  date.preventDefault()
  const id = date.target.id.substring(date.target.id.indexOf('-') + 1)
  const selectedArticle = [...article].filter((el) => el.id === `article-${id}`)
  const selectedAnchor = [...anc].filter((el) => el.id === `anc-${id}`)
  const selectedArrow = [...arrow].filter((el) => el.id === `arrow${id}`)

  anc.forEach((el) => {
    if(el.id === date.target.id) {
        selectedArticle[0].style.display = 'block'
        selectedAnchor[0].classList.add('date')
        selectedArrow[0].style.display = 'none'
        el.style.fontSize = '40px'
      } else {
        const unselectedArt = [...article].filter((el) => el.id !== `article-${id}`)
        const unselectedAnchor = [...anc].filter((el) => el.id !== `anc-${id}`)
        const unselectedArrow = [...arrow].filter((el) => el.id !== `arrow${id}`)
        unselectedArt.map((el) => {
          el.style.display = 'none'
        })
        unselectedAnchor.map((el) => {
         el.classList.remove('date')
         el.style.fontSize = '20px'
        })
        unselectedArrow.map((el) => {
          el.style.display = 'block'
          el.style.display = 'block'
          el.style.display = 'block'
        })

      }
    })
} 


anc1.addEventListener('click', (e) => {
  //e.preventDefault()
  toggleDate(e)
})

anc2.addEventListener('click', (e) => {
  //e.preventDefault()
  toggleDate(e)   
})

anc3.addEventListener('click', (e) => {
  //e.preventDefault()
  toggleDate(e) 
})

anc4.addEventListener('click', (e) => {
    //e.preventDefault()
    toggleDate(e)   
})


const sections = document.querySelectorAll("section")
const navLi = document.querySelectorAll("nav .container ul li")
window.onscroll = () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop-200) {
      current = section.getAttribute("id")
     }
  });

  navLi.forEach((li) => {
    li.classList.remove("active")
    if (li.classList.contains(current)) {
      li.classList.add("active")
    }
  });
};
