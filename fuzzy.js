function CalculateResult(_suhu, _kelembaban)
{
  return _suhu + _kelembaban;
}

function CalculateTimestamp(_timeInMinute)
{
  // PARSE TIMESTAMP
  // ================================
  // ex: _timeInMinute (float) = 72.5
  // menit = 72
  // detik = 72.5 - 72 = 0.5
  // jam = 72/60 = parseInt(1.xxx) = 1
  // update menit ->  menit = 72 - (1*60) = 72 - 60 = 12
  let menit = parseInt(_timeInMinute);
  let detik = _timeInMinute - menit;
  let jam = parseInt(menit/60);
  menit = menit - (jam*60)
  
  let textResult = "";

  textResult = jam >= 1 ? jam + " Jam " : "";
  textResult = textResult + menit + " Menit " + Math.round(detik*60) + " detik";

  return textResult;
}

function SubmitForm()
{
  // Define field elements
  var SuhuField = document.getElementById('suhu');
  var KelembabanField = document.getElementById('kelembaban');
  var ResultText = document.getElementById('resultText');

  // Define the input and output variables
  let suhu = parseFloat(SuhuField.value);
  let kelembaban = parseFloat(KelembabanField.value);
  let resultInSecond = 0;

  // Computation of the output
  resultInSecond = CalculateResult(suhu, kelembaban);

  // Show the result
  ResultText.innerHTML = CalculateTimestamp(resultInSecond);
}

function ResetForm()
{
  // Define field elements
  var SuhuField = document.getElementById('suhu');
  var KelembabanField = document.getElementById('kelembaban');
  var ResultText = document.getElementById('resultText');

  // Reset the field
  SuhuField.value = "";
  KelembabanField.value = "";
  ResultText.innerHTML = "~";
}
