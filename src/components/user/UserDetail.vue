<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!-- 
            { name: 'userEdit' } is from routes.js
         -->
        <router-link tag="button" :to="{ 
                name: 'userEdit', 
                params: { id: this.$route.params.id }, 
                query: { locale: 'en', q: 100 } }" class="btn btn-primary">
            Edit User
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if(true) {
                /**as long as you don't call next here,
                 * this component is not loaded
                 * in this lifecycle hook,
                 * you can't access your vue instance
                 */
                next()
            } else {
                next(false)
            }
        }
    }
</script>