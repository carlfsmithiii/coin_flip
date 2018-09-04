const coin = {
    state: 0,
    flip: function() {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        this.state = Math.floor(Math.random() * 2);
    },
    toString: function() {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.state) {
            return "Heads";
        }
        return "Tails";
    },
    toHTML: function() {
        const image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if (this.state) {
            image.src="images/heads.jpg";
        } else {
            image.src="images/tails.jpg";
        }
        return image;
    }
};
