<template>
    <div>
        <p id="quotes">
            <i>
                <strong>{{ city.quotes }}</strong>
                {{ city.author }}
            </i>
        </p>
        <article>
            {{ city.article }}
            <span class="read-more-text">
                {{ city.article_continue }}
            </span>
        </article>
        <span class="read-more-btn" @click="readMore">Read more...</span>
    </div>
</template>

<script>
export default {
    name: "DescriptionOfCity",
    props: ["city"],

    methods: {
        readMore(e) {
            const current = e.target;
            const isReadMoreBtn = current.className.includes("read-more-btn");
            const currentText = e.target.parentNode.querySelector(
                ".read-more-text"
            );

            if (!isReadMoreBtn) return;

            currentText.classList.toggle("read-more-text--show");
            current.textContent = current.textContent.includes("Read more")
                ? "Read less..."
                : "Read more...";
        },
    }
};
</script>

<style scoped>
#quotes {
    padding: 5px 10px 10px 0;
}

.read-more-btn {
    color: #0984e3;
    cursor: pointer;
}

.read-more-text {
    display: none;
}

.read-more-text--show {
    display: inline;
}
</style>
