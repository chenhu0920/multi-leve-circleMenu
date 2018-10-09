function Menu(options) {
  this.container = options.container
  this.containerWidth = this.container.clientWidth
  this.containerHeight = this.container.clientHeight

  this.a = this.containerWidth/2
  this.b = this.containerHeight/2

  this.data = options.data
  this.n1 = this.data.length
  this.r1 = options.r1 || 100
  this.a1 = 2 * Math.PI / this.n1 
  this.r2 = options.r2 || 150
  this.a2 = options.a2 || (this.a1 / 2)

  if(this.n1) {
    this.init()
  }
}
Menu.prototype.init = function() {
  console.log(this)
  var center = document.createElement('div')
  center.innerText = '0'
  center.style.position = 'absolute'
  center.style.left = this.a + 'px'
  center.style.top = this.b + 'px'
  this.container.appendChild(center)


  this.container.style.position = 'relative'
  for(let i=0; i<this.data.length; i++) {
    var itemLevel1 = document.createElement('div')
    itemLevel1.className = 'level-1'
    itemLevel1.id = 'level-1-' + i;
    itemLevel1.innerText = this.data[i]
    itemLevel1.style.position = 'absolute'
    itemLevel1.style.left = this.a + this.r1 * Math.sin(i*this.a1) + 'px'
    itemLevel1.style.top = this.b + this.r1 * Math.cos(i*this.a1) + 'px'
    itemLevel1.onclick = this.onLevel1Click.bind(this, i)
    this.container.appendChild(itemLevel1)
  }
}

Menu.prototype.onLevel1Click = function(i, e) {
  if(e.currentTarget.hasAttribute('expanded')) {
    return
  }

  this.container.querySelector('.level-1[expanded]') && this.container.querySelector('.level-1[expanded]').removeAttribute('expanded')
  this.container.querySelectorAll('.level-2').forEach(function(node) {
    node.parentNode.removeChild(node)
  })
  e.currentTarget.setAttribute('expanded', '')

  var n2 = Math.ceil(Math.random() * 6)

  for(let j=0; j<n2; j++) {
    var itemLevel2 = document.createElement('div')
    itemLevel2.className = 'level-2'
    itemLevel2.id = 'level-2-' + j;
    itemLevel2.innerText = i + '-' + j
    itemLevel2.style.position = 'absolute'

    if(n2 % 2 == 0) {
      var deg = i * this.a1 + (j - n2 / 2 + 0.5)*this.a2
    } else {
      deg = i * this.a1 + (j - (n2-1)/2)*this.a2
    }
    

    itemLevel2.style.left = this.a + this.r2 * Math.sin(deg) + 'px'
    itemLevel2.style.top = this.b + this.r2 * Math.cos(deg) + 'px'


    this.container.appendChild(itemLevel2)
  }

}

// new Menu({
//   container: document.querySelector('#container'),
//   data: ['a', 'b', 'c', 'd', 'e', 'f']
// })