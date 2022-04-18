/*
 * @Author: mikey.zhaopeng 
 * @Date: 2022-04-18 09:58:00 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-04-18 10:06:21
 * @Description: 在js 中使用路由对象
 */

import router from '@/router'

const routerO = Object.create(router)
const routeO = Object.create(router.currentRoute)
routerO.prototype.push = router.push
routeO.prototype.query = route.query
routeO.prototype.params = route.params

export {
    routerO as router,
    routeO as route
} 