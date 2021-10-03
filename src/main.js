import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/* handling timeline anchors */

const date = document.getElementsByClassName('date')
const anc = document.querySelectorAll('.anc')

 anc.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.id === item.id) {
      item.style.fontSize = '40px'
      item.style.color = 'rgb(24, 24, 153)'
    }
    const data = [...anc].filter((el) => el !== item)
    data.forEach((el) => {
       el.style.fontSize = '20px'
    })
     date.forEach((el) => {
       if(el.children[0] === item) {
         el.children[1].style.display = 'none'
         el.children[2].style.display = 'block'
         el.style.flexDirection = 'column'
       }
       else {
        el.children[1].style.display = 'block'
        el.children[2].style.display = 'none'
        el.style.flexDirection = 'row'
       }
     })
  })
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
