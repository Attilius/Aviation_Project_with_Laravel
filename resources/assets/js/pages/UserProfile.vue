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
            <div class="content">
                <h6>Profile image</h6>
                <div class="icon">
                    <i class="material-icons">perm_identity</i>
                    <div class="button">Change picture</div>
                </div>
            </div>
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.content h6 {
    margin-left: 30px;
    color: whitesmoke;
    font-size: 20px;
}

.icon {
    height: 200px;
    width: 200px;
    background: transparent;
    border: 1px solid royalblue;
    border-radius: 0.25rem;
    margin-left: 30px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

i {
    color: whitesmoke;
    font-size: 150px;
}

.button {
    width: 100%;
    height: 20%;
    background: royalblue;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
