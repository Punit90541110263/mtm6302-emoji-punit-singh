document.addEventListener("DOMContentLoaded", () => {
    const emojis = ["😀", "😂", "😍", "😎", "😭", "😡", "🎉", "🔥", "💯", "🎂"];
    const emojiGallery = document.getElementById("emojiGallery");

    emojis.forEach(emoji => {
        const emojiItem = document.createElement("div");
        emojiItem.className = "emoji-item";
        emojiItem.textContent = emoji;
        emojiItem.addEventListener("click", () => alert(`You clicked on ${emoji}`));
        emojiGallery.appendChild(emojiItem);
    });
});
