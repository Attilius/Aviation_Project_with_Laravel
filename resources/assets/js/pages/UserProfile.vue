<template>
    <div class="wrapper">
        <header>
            <h4>Edit your profile</h4>
        </header>
        <section>
            <div class="menu">
                <ul>
                    <li>Delete account</li>
                </ul>
            </div>
            <div class="content"></div>
        </section>
    </div>
</template>

<script>
export default {
    name: "UserProfile"
};
</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100%;
    background: rgb(5, 55, 115);
}

header {
    width: 70%;
    height: 80px;
    padding-top: 10px;
    margin: 0 auto;
}

header h4 {
    color: whitesmoke;
    margin: 0;
}

section {
    display: flex;
}

.menu {
    height: 100%;
    width: 15%;
}

.menu ul {
    margin-left: 20%;
}

.menu ul li {
    color: whitesmoke;
}

.content {
    height: 85vh;
    width: 75%;
    border: 1px solid whitesmoke;
    background: transparent;
}
</style>
