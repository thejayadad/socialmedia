const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    caption: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String },
    image: { type: String, required: true },
    tags: String,
    likes: { type: Number, default: 0 },
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;