<template>
    <div class="wrapper">
        <header>
            <h4>Edit your profile</h4>
        </header>
    </div>
</template>

<script>
export default {
    name: 'UserProfile'
}
</script>

<style scoped>
    .wrapper {
        height: 100vh;
        width: 100%;
        background: rgb(5,55,115);
    }

    header {
        width: 70%;
        height: 80px;
        border-bottom: 1px solid whitesmoke;
        padding-top: 10px;
        margin: 0 auto;
    }

    header h4 {
        color: whitesmoke;
        margin: 0;
    }
</style>