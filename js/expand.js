function expandContent() {
  document.getElementById("hello_panel").style.display = null;
  document.getElementById("expand").style.display = 'none';
  document.getElementById("more_content").style.display = 'block';
}

function hideContent() {
  document.getElementById("hello_panel").style.display = 'none';
  document.getElementById("expand").style.display = 'block';
  document.getElementById("more_content").style.display = 'none';
}