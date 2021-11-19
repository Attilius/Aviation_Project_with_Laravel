<template>
    <div>
        <div id="chat-window" class="chat-window">
            <div class="head">
                <b-img
                    class="call-center"
                    :src="'images/call-center.jpg'"
                    fluid
                    alt="operator"
                ></b-img>
                <div class="online"></div>
                <h6 class="help-desk">Help Desk</h6>
            </div>
            <div class="message-row">
                <b-img
                    class="call-center-message"
                    :src="'images/call-center.jpg'"
                    fluid
                    alt="operator"
                ></b-img>
                <div class="msg">Got any questions? I'm happy to help.</div>
            </div>
            <form>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Write a message"
                ></textarea>
            </form>
        </div>
        <b-button id="chat" class="chat" @click="onClick">
            <font-awesome-icon :icon="['far', 'comments']" />
        </b-button>
    </div>
</template>

<script>
export default {
    name: "Chat",

    methods: {
        onClick() {
            document.getElementById("chat").addEventListener("click", () => {
                document.getElementById("chat-window").style.display = "block";
            });
        }
    }
};
</script>

<style scoped>
.chat {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background: rgb(9, 55, 115);
    color: whitesmoke;
    font-size: 30px;
    position: absolute;
    bottom: 80px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0 5px rgb(9, 55, 115);
    border: none;
}

.chat-window {
    width: 300px;
    height: 550px;
    position: absolute;
    bottom: 150px;
    left: 30px;
    border-radius: 0.5rem;
    background: whitesmoke;
    display: none;
}

.head {
    width: 100%;
    height: 70px;
    background: linear-gradient(135deg, rgb(51, 100, 179), rgb(9, 55, 115));
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.call-center {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-left: 10px;
}

.call-center-message {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin: 10px;
}

.message-row {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
}

.msg {
    font-size: 13px;
    background: #ced4da;
    padding: 5px 10px;
    position: relative;
    top: 30px;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
}

#message {
    width: 100%;
    height: 50px;
    border: none;
    position: absolute;
    bottom: 0;
    background: whitesmoke;
    border-top: 1px solid #ced4da;
    padding: 10px;
    border-radius: 0 0 0.75rem 0.75rem;
}

.online {
    width: 15px;
    height: 15px;
    border-radius: 50px;
    border: 2px solid white;
    background: green;
    position: absolute;
    top: 40px;
    left: 45px;
}

.help-desk {
    color: whitesmoke;
    padding-top: 10px;
    margin-left: 10px;
}

.chat:hover,
.chat:active,
.chat:focus {
    background: rgb(9, 55, 115);
    box-shadow: 0 0 10px rgb(9, 55, 115);
}
</style>
