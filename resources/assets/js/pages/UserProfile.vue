<template>
    <div class="wrapper">
        <header>
            <h4>Edit your profile</h4>
        </header>
        <section>
            <div class="menu">
                <ul>
                    <li> <a href="/favorit-places">Favorit places</a></li>
                    <li> <a href="/used-services">Used services</a></li>
                    <li> <a href="/travel-plans">Travel plans</a></li>
                    <li> <a href="/business-travels">Business travels</a></li>
                    <li> <a href="/feedbacks">Feedbacks</a></li>
                    <li> <a href="/options">Options</a></li>
                    <li> <a href="/">Delete account</a></li>
                </ul>
            </div>
            <div class="content">
                <h6>Profile image</h6>
                <div class="icon">
                    <i class="material-icons">perm_identity</i>
                    <div class="button">Change picture</div>
                </div>
                <label class="profile-label" for="fullName">Full name</label>
                <input class="profile-input" type="text" name="fullName" id="fullName" :value="app.user.name">
                <label class="profile-label" for="email">Email</label>
                <input class="profile-input" type="email" name="email" id="email" :value="app.user.email">
                <label class="profile-label" for="phone">Phone</label>
                <input class="profile-input" type="tel" name="phone" id="phone">

                <div class="btn-group">
                    <input class="btn-save" type="submit" value="Save profile">
                    <router-link class="btn-cancel" to="/">Cancel</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "UserProfile",
    props: ['app']
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

.button:hover {
    background: rgb(50, 80, 180);
}

.profile-label {
    color: lightgray;
    margin-left: 30px;
    padding-top: 20px;
}

.profile_input {
    width: 20% !important;
    border-bottom-color: lightgray !important;
    margin-left: 30px !important;
    color: whitesmoke;
}

.btn-group {
    width: 25%;
    display: flex;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 10px;
}

.btn-save {
    background-color: rebeccapurple;
    color: whitesmoke;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0.25rem;
}

.btn-cancel {
    border: none !important;
    background-color: transparent;
    color: whitesmoke;
    width: 117.38px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-cancel:hover {
    background-color: rebeccapurple;
    border-radius: 0.25rem;
}

.btn-cancel:focus {
    border: none !important;
    box-shadow: none !important;
}

.menu ul li a {
    padding: 5px 10px;
}

.menu ul li a:hover {
    background-color: rebeccapurple;
    color: white;
}

.menu ul li a:focus {
    border: none !important;
    box-shadow: none !important;
    color: rebeccapurple;
    background-color: whitesmoke;
}

@media(max-width: 576px) {
    .content h6 {
        text-align: center;
        margin: 20px 0;
    }

    .icon {
        margin: 10px auto;
    }

    .profile_input[data-v-f1e2079e] {
        width: 80% !important;
    }

    .btn-group {
        width: 80%;
        margin: 10px 0;
    }
}

</style>
