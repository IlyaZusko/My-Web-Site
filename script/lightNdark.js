function changeTheme(isChecked) {
    if (isChecked) {
      document.body.setAttribute('light', '');
    } else {
      document.body.removeAttribute('light');
    }
  }