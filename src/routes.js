/**everything imported on the top will always be included in the bundle
 * no matter if you use or not
 * so we have to transfer these import statement into another syntax
 */
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue';
import Header from './components/Header.vue'

/**webpack will recognize this syntax */
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        /**by having it in this asynchronous function
         * which has to resolve before it gets executed,
         * webpack is only doing this if we need that file
         * it will create appropriate bundles to be loaded during the build process
         * for lazy loading
         */
        resolve(require('./components/user/User.vue'));
    }, 'user');
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}

// ----------------------------------------------

export const routes = [
    {
        path: '',
        component: Home,
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('inside route setup');
                next();
            } },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
    {
        // path: '/redirect-me', redirect: { name: 'home' }
        path: '/redirect-me', redirect: '/user'
    },
    {
        path: '*', redirect: '/'
    }
];