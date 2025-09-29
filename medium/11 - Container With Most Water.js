let maxArea = function(height) {
    let startIndex = 0;
    let endIndex = height.length - 1;
    let maxArea = Math.min(height[startIndex], height[endIndex]) * (endIndex - startIndex);

    while (startIndex !== endIndex) {
        if (height[startIndex] < height[endIndex]) {
            startIndex++;
        } else {
            endIndex--;
        }

        maxArea = Math.max(maxArea, Math.min(height[startIndex], height[endIndex]) * (endIndex - startIndex));
    }

    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));