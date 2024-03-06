function appendToResult(value) {
    document.getElementById('result').value += value;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }

  function calculate() {
    let result = document.getElementById('result').value;
    try {
      let finalResult = eval(result);
      document.getElementById('result').value = finalResult;
    } catch (error) {
      alert('আবোল তাবোল টাইপ কেনো করো?');
    }
  }