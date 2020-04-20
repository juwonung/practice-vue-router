<template>
<div>
    <h1>UsersDetail</h1>
    유저번호 {{userId}}
    <v-btn @click="edit" small>수정</v-btn>
</div>
</template>
<script>
    export default {
        computed: {
            userrId() {
                return this.$route.params.id
            }
        },
        methods: {
            edit() {
                this.$router.push({ name: "users-edit" })
            }
        }
    }
</script>