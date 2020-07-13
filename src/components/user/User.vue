<template>
    <div>
        <h1>The User Page</h1>
        <hr></hr>
        <button @click="navigateToHome" class="btn btn-primary">GO TO HOME</button>
        <hr></hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push({ path: '/' });
                // this.$router.push({ name: 'home' });
            }
        }
    }
</script>