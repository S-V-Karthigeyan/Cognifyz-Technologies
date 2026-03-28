function changeBackground() {
    const colors = ["#ff0000ff","#95ff00ff", "#000000", "#f5a133", "#8cc9ffff", "#dfc6f9ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
