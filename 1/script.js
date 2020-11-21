window.onload = function () {
    console.log('onclick1');
    document.getElementById('run-test2').addEventListener(
      'click',
      function (e) {
        console.log('onclick')
        document.getElementById('form-test-1.2').style.display = 'block';
        document.getElementById("rgb").value = JSON.stringify(rgb);
        document.getElementById("wb").value = JSON.stringify(wb);
        document.getElementById("colors").value = JSON.stringify(colors);
      },
      false
    );
};
