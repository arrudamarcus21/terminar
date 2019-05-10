import Vue from 'vue'
import Router from 'vue-router'
import PaginaInicial from './views/PaginaInicial'
import GridListComandante from './views/GridListComandante'
import DialogComandante from './views/DialogComandante'
import Cards from './views/Cards'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'pagina-inicial',
      component: Cards
    },
    {
      path: '/comandante',
      name: 'gridList',
      component: GridListComandante,
      // children:{
      //   //AQUI VOU INSER O PATH "/COMANDANTE/SOBRE"
      // }
    }
  ]
})
