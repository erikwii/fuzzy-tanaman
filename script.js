function CalculateResult(_suhu, _kelembaban)
{
  // Do Fuzzy Calculation here
  
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
  textResult += menit >= 1 ? menit + " Menit " : "";
  textResult += Math.round(detik*60) ? Math.round(detik*60) + " Detik" : "";

  return textResult != "" ? textResult : "0 Detik";
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

// ================== DARK MODE CODE ==================
/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = theme => {
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
    })

    btnToActive.classList.add('active')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
      })
  })
})()