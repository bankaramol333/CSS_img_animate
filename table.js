let scrollPercent = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  console.log(scrollValue);

  scrollProgress.style.background = `conic-gradient(#80aaff ${scrollValue}%, #cccccc ${scrollValue}%)`;
  progressValue.textContent = scrollValue;
  if (scrollValue === 100) {
    progressValue.style.color = "#ff6666";
  } else if (scrollValue === 0) {
    progressValue.style.color = "gray";
  } else {
    progressValue.style.color = "black";
  }
};

window.onscroll = scrollPercent;
window.onload = scrollPercent;
