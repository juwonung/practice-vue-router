<template>
    <div>
        <v-layout row wrap pt-5 text-xs-center
        style="max-width:500px; margin: 0 auto;">
            <v-flex xs12>
        <h1>Users</h1>
        <p>이 유저는 현재 유저 번호가 {{ userId }}입니다</p>
        <p>유저를 검색해주세요</p>

            </v-flex>
            <v-flex>
                <v-text-field label="유저 번호를 입력하세요."></v-text-field>
                <v-btn
                @click="$router.push({
                    name:'users-detail', 
                    params:{
                    id:userId
                }})">검색</v-btn>
            </v-flex>
            <v-flex>
                <router-view></router-view>
            </v-flex>
        </v-layout>
        
    </div>
</template>

<script>
export default {
    computed: {
        userId() {
            return this.$route.params.id
        }
    },
    beforeRouteEnter(to, from,  next){
        console.log("before Enter")
        next()
    },
    beforeRouteLeave(to, from, next){
        console.log("before Leave")
        next()
    },
    created() {
        console.log('created')
    },
    destroyed() {
        console.log("destroyed")
    }
}
</script>